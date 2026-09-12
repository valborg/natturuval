import React, { useState, useRef, useEffect } from 'react';

// Reads the live navbar height so the floating heading sits flush beneath it, no gap
const getNavbarHeight = () => {
    const navbar = document.querySelector('.navbar');
    return navbar ? navbar.offsetHeight : 0;
};

const CollapsibleSection = ({ children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    // Whether the floating (fixed) copy of the heading is shown, used once the real heading has scrolled off
    const [pinnedVisible, setPinnedVisible] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(getNavbarHeight);
    const rootRef = useRef(null);
    const headingRef = useRef(null);
    const lastScrollY = useRef(0);

    // Find the heading element among children and separate it from content
    const childArray = React.Children.toArray(children);

    const handleToggle = () => {
        const wasPinnedVisible = pinnedVisible;
        setIsOpen((prev) => !prev);
        setPinnedVisible(false);

        // Heading had scrolled out of view - bring it back to the top on collapse
        if (wasPinnedVisible) {
            requestAnimationFrame(() => {
                const headingEl = headingRef.current;
                if (headingEl) {
                    const targetY = window.scrollY + headingEl.getBoundingClientRect().top - navbarHeight;
                    window.scrollTo({ top: targetY, behavior: 'smooth' });
                }
            });
        }
    };

    useEffect(() => {
        // DOM isn't committed yet during the initial render, so re-measure once mounted (fixes wrong offset on first load, esp. mobile)
        setNavbarHeight(getNavbarHeight());

        const handleResize = () => setNavbarHeight(getNavbarHeight());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isOpen) {
            setPinnedVisible(false);
            return;
        }

        lastScrollY.current = window.scrollY;

        const handleScroll = () => {
            const currentY = window.scrollY;
            const headingEl = headingRef.current;
            const rootEl = rootRef.current;
            if (headingEl && rootEl) {
                const navHeight = getNavbarHeight();
                const scrolledPastHeading = headingEl.getBoundingClientRect().top < 0;
                const sectionStillInView = rootEl.getBoundingClientRect().bottom > navHeight;
                const scrollingUp = currentY < lastScrollY.current;
                setPinnedVisible(scrolledPastHeading && sectionStillInView && scrollingUp);
            }
            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    // We wrap the first child (heading row) as clickable, rest as collapsible content
    const heading = childArray[0];
    const content = childArray.slice(1);

    const chevron = (
        <span
            className="collapsible-chevron ms-2"
            style={{
                transition: 'transform 0.3s ease',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                fontSize: '1.2rem',
                color: '#198754',
                position: 'absolute',
                right: '0',
            }}
        >
            {/* ▼ */}
        </span>
    );

    return (
        <div ref={rootRef}>
            <div
                ref={headingRef}
                onClick={handleToggle}
                style={{ cursor: 'pointer', userSelect: 'none', visibility: pinnedVisible ? 'hidden' : 'visible' }}
                className="collapsible-heading"
            >
                <div className="d-flex align-items-center justify-content-center position-relative">
                    {heading}
                    {chevron}
                </div>
            </div>
            {isOpen && pinnedVisible && (
                <div
                    onClick={handleToggle}
                    style={{
                        cursor: 'pointer',
                        userSelect: 'none',
                        position: 'fixed',
                        top: navbarHeight,
                        left: 0,
                        right: 0,
                        zIndex: 1020,
                        backgroundColor: '#fff',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                    }}
                    className="collapsible-heading"
                >
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        {heading}
                        {chevron}
                    </div>
                </div>
            )}
            <div
                style={{
                    maxHeight: isOpen ? '5000px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease-in-out',
                    opacity: isOpen ? 1 : 0,
                }}
            >
                {content}
            </div>
        </div>
    );
};

export default CollapsibleSection;
