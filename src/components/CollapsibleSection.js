import React, { useState } from 'react';

const CollapsibleSection = ({ children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    // Find the heading element among children and separate it from content
    const childArray = React.Children.toArray(children);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // We wrap the first child (heading row) as clickable, rest as collapsible content
    const heading = childArray[0];
    const content = childArray.slice(1);

    return (
        <div>
            <div
                onClick={handleToggle}
                style={{ cursor: 'pointer', userSelect: 'none' }}
                className="collapsible-heading"
            >
                <div className="d-flex align-items-center justify-content-center position-relative">
                    {heading}
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
                </div>
            </div>
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
