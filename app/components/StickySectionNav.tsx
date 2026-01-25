"use client";
import { useState, useEffect } from 'react';

const sections = [
    { id: 'start', label: 'Start' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'why-ehack', label: 'Why Ehack' },
    { id: 'certifications', label: 'Certifications' }
];

export default function StickySectionNav() {
    const [activeSection, setActiveSection] = useState('start');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Show nav only after scrolling down 400px (past hero)
            setIsVisible(scrollPosition > 400);

            // Add offset for intersection check
            const checkPosition = scrollPosition + 150;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (checkPosition >= offsetTop && checkPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Adjust for sticky header height
                behavior: 'smooth'
            });
        }
    };

    return (
        <div style={{
            position: 'fixed', // Changed from sticky to fixed to float over content
            top: '0',
            left: '0',
            right: '0',
            zIndex: 100,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            padding: '1rem 0',
            transform: isVisible ? 'translateY(0)' : 'translateY(-100%)', // Slide in/out
            transition: 'transform 0.3s ease-in-out',
            opacity: isVisible ? 1 : 0
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
            }}>
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        style={{
                            padding: '0.5rem 1.25rem',
                            borderRadius: '50px',
                            border: 'none',
                            background: activeSection === section.id ? '#F26C29' : 'transparent',
                            color: activeSection === section.id ? 'white' : '#555',
                            fontSize: '0.9rem',
                            fontWeight: activeSection === section.id ? '600' : '500',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {section.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
