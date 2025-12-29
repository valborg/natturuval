import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import leaf from '../../public/Leaf.svg';

const ResponsiveNavigation = ({ currLang, onLanguageChange, onSectionChange }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [expanded, setExpanded] = useState(false);

    const content = {
        en: {
            flag: "🇮🇸",
            sections: [
                { id: "about", label: "About" },
                { id: "how-to-play", label: "How to Play" },
                { id: "where-to-buy", label: "Where to Buy" },
                { id: "adult-mode", label: "Party Mode" },
                { id: "news", label: "News" },
                { id: "cards", label: "Card Info" },
                { id: "history", label: "Story" },
                { id: "team", label: "Team" }
            ]
        },
        is: {
            flag: "🇬🇧",
            sections: [
                { id: "about", label: "Um leikinn" },
                { id: "how-to-play", label: "Leikreglur" },
                { id: "where-to-buy", label: "Hvar á að kaupa" },
                { id: "adult-mode", label: "Partýhamur" },
                { id: "news", label: "Fréttir" },
                { id: "cards", label: "Spilupplýsingar" },
                { id: "history", label: "Saga" },
                { id: "team", label: "Teymi" }
            ]
        }
    };

    const lang = currLang || 'is';
    const text = content[lang];

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        setExpanded(false);
        if (onSectionChange) {
            onSectionChange(sectionId);
        }
        
        // Smooth scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleLanguageToggle = () => {
        if (onLanguageChange) {
            onLanguageChange();
        }
        setExpanded(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = text.sections.map(section => section.id);
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [text.sections]);

    return (
        <Navbar 
            bg="light" 
            expand="lg" 
            fixed="top" 
            className="shadow-sm"
            expanded={expanded}
            onToggle={setExpanded}
        >
            <Container>
                <Navbar.Brand 
                    href="#home" 
                    className="d-flex align-items-center"
                    onClick={() => handleNavClick('home')}
                >
                    <img src={leaf} width="40" height="40" alt="leaf" className="me-2" />
                    <span className="fw-bold text-success d-none d-sm-inline">Náttúruval</span>
                </Navbar.Brand>
                
                <Navbar.Toggle 
                    aria-controls="responsive-navbar-nav"
                    className="border-0"
                />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {text.sections.map((section) => (
                            <Nav.Link
                                key={section.id}
                                href={`#${section.id}`}
                                className={`px-3 ${activeSection === section.id ? 'text-success fw-bold' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(section.id);
                                }}
                            >
                                {section.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                    
                    <Nav>
                        <Nav.Link
                            onClick={handleLanguageToggle}
                            className="px-3 fw-bold"
                            role="button"
                            style={{ fontSize: '1.2rem' }}
                        >
                            {text.flag}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <style jsx>{`
                .navbar {
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                    background-color: rgba(248, 249, 250, 0.95) !important;
                }
                
                .navbar-nav .nav-link {
                    transition: color 0.2s ease;
                    border-radius: 4px;
                    margin: 0 2px;
                }
                
                .navbar-nav .nav-link:hover {
                    color: #198754 !important;
                    background-color: rgba(25, 135, 84, 0.1);
                }
                
                @media (max-width: 991.98px) {
                    .navbar-nav .nav-link {
                        text-align: center;
                        padding: 0.75rem 1rem;
                        margin: 2px 0;
                    }
                    
                    .navbar-collapse {
                        margin-top: 1rem;
                        padding-top: 1rem;
                        border-top: 1px solid #dee2e6;
                    }
                }
            `}</style>
        </Navbar>
    );
};

export default ResponsiveNavigation;
