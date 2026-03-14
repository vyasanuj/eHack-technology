"use client";
import { useState, useEffect, useCallback } from 'react';
import { Phone } from 'lucide-react';
import './StickySectionNav.css';

export interface NavSection {
    id: string;
    label: string;
}

interface StickySectionNavProps {
    sections?: NavSection[];
}

const DEFAULT_SECTIONS: NavSection[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'partnership', label: 'Partnership' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'global-reach', label: 'Global Reach' },
    { id: 'real-world-defense', label: 'Real-World Defense' },
    { id: 'why-ehack', label: 'Why eHack' },
    { id: 'social-impact', label: 'Social Impact' },
];

export default function StickySectionNav({ sections = DEFAULT_SECTIONS }: StickySectionNavProps) {
    const [activeSection, setActiveSection] = useState(sections[0]?.id || 'overview');
    const [showStickyNav, setShowStickyNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowStickyNav(scrollY > 400);

            const sectionElements = sections.map(section => ({
                id: section.id,
                element: document.getElementById(section.id),
            })).filter(s => s.element);

            const offset = 150;

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const { id, element } = sectionElements[i];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= offset + window.innerHeight * 0.3) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = useCallback((sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100; // Increased offset to account for sticky nav height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }, []);

    return (
        <nav className={`sticky-section-nav ${showStickyNav ? 'visible' : ''}`}>
            <div className="sticky-nav-container">
                <div className="sticky-nav-links">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className={`sticky-nav-link ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => scrollToSection(section.id)}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>
                <div className="sticky-nav-cta">
                    <a href="tel:+919886035330" className="sticky-nav-call-btn">
                        <Phone size={16} />
                        <span>Call Now</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
