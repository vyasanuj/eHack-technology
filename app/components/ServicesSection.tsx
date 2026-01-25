"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, FileCheck, Search } from 'lucide-react'; // Import icons

const categories = {
    'assessment': {
        id: 'assessment',
        label: 'Security Assessment',
        icon: ShieldCheck,
        headline: 'Proactive Vulnerability Assessment',
        description: 'Identify and remediate security gaps across your entire digital attack surface before adversaries exploit them.',
        services: [
            {
                image: '/images/services/security.png',
                title: 'Web App Security',
                description: 'Comprehensive testing against OWASP Top 10 and advanced attack vectors.',
                href: '/services/web-application-security',
                badges: ['OWASP Top 10', 'Penetration Testing']
            },
            {
                image: '/images/mobileapp_service_image.png',
                title: 'Mobile App Security',
                description: 'In-depth assessment of iOS and Android apps including source code analysis.',
                href: '/services/mobile-application-security',
                badges: ['iOS & Android', 'Static & Dynamic']
            },
            {
                image: '/images/API_service_image.png',
                title: 'API Security',
                description: 'Securing REST, GraphQL, and SOAP APIs from logic flaws and data leaks.',
                href: '/services/api-security',
                badges: ['REST & GraphQL', 'Logic Flaws']
            },
            {
                image: '/images/Source Code Review.png',
                title: 'Source Code Review',
                description: 'Automated and manual code audit across 30+ languages to find bugs early.',
                href: '/services/source-code-review',
                badges: ['SAST', 'DAST', '30+ Languages']
            },
            {
                image: '/images/Red Team Assessment.png',
                title: 'Red Team Assessment',
                description: 'Full-scope attack simulation to test your detection and response capabilities.',
                href: '/services/red-team-assessment',
                badges: ['Adversary Simulation', 'Exfiltration']
            },
            {
                image: '/images/services/general.png',
                title: 'Infrastructure Security',
                description: 'Hardening networks, cloud environments, and Active Directory structures.',
                href: '/services/infrastructure-security',
                badges: ['Network', 'Cloud', 'AD Security']
            },
            {
                image: '/images/Thick Client Security.png',
                title: 'Thick Client Security',
                description: 'Security testing for desktop applications to prevent local privilege escalation.',
                href: '/services/thick-client-security',
                badges: ['Binary Analysis', 'Memory Corruptions']
            },
            {
                image: '/images/Firewall Security Assessment.png',
                title: 'Firewall Security',
                description: 'Configuration reviews and rule audits to optimize network perimeter defense.',
                href: '/services/firewall-security',
                badges: ['Rule Audit', 'Egress Filtering']
            }
        ]
    },
    'compliance': {
        id: 'compliance',
        label: 'Compliance Audit',
        icon: FileCheck,
        headline: 'Regulatory Compliance & Governance',
        description: 'Ensure your organization meets global security standards and avoids costly regulatory penalties.',
        services: [
            {
                image: '/images/services/compliance.png',
                title: 'GDPR Consulting',
                description: 'Gap analysis and implementation support for EU data protection laws.',
                href: '/services/gdpr-consulting',
                badges: ['Gap Analysis', 'Data Privacy']
            },
            {
                image: '/images/PCI DSS Compliance Audit.png',
                title: 'PCI DSS Compliance',
                description: 'End-to-end support for Payment Card Industry Data Security Standard.',
                href: '/services/pci-dss-compliance',
                badges: ['QSA Audit', 'Certification']
            },
            {
                image: '/images/services/compliance.png', // Placeholder image
                title: 'ISO Certification Advisory',
                description: 'Guidance and preparation for ISO 27001 information security certification.',
                href: '/services/iso-certification', // New link
                badges: ['ISO 27001', 'Risk Management']
            }
        ]
    },
    'forensics': {
        id: 'forensics',
        label: 'Forensics & Malware',
        icon: Search,
        headline: 'Incident Response & Forensics',
        description: 'Rapid response capabilities to contain threats, analyze breaches, and recover operations.',
        services: [
            {
                image: '/images/services/forensics.png',
                title: 'Digital Forensics',
                description: 'Forensic investigation to recover evidence and trace cyber incidents.',
                href: '/services/digital-forensics',
                badges: ['Incident Response', 'Evidence Artifacts']
            },
            {
                image: '/images/Malware Analysis and Root Cause Detection.png',
                title: 'Malware Analysis',
                description: 'Dissecting malicious software to understand behavior and find indicators of compromise.',
                href: '/services/malware-analysis',
                badges: ['Reverse Engineering', 'IOCs']
            }
        ]
    }
};

export default function ServicesSection() {
    const [activeCategory, setActiveCategory] = useState<keyof typeof categories>('assessment');

    return (
        <section className="section" style={{ padding: '4rem 0' }}>
            <div className="container">
                {/* Section Header */}
                <div className="section-header" style={{ marginBottom: '3rem' }}>
                    <span className="section-label" style={{
                        background: '#F26C29',
                        color: 'white',
                        fontSize: '1rem',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '50px',
                        display: 'inline-block',
                        marginBottom: '1rem',
                        fontWeight: '600'
                    }}>Our Expertise</span>
                    <h2 className="section-title">Comprehensive Security <span style={{ color: '#F26C29' }}>Solutions</span></h2>
                    <p className="section-subtitle">
                        Segregated expertise to address every dimension of your cybersecurity needs
                    </p>
                </div>

                {/* Tabs */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap'
                }}>
                    {(Object.values(categories) as any[]).map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            style={{
                                padding: '1rem 2rem',
                                borderRadius: '50px',
                                border: activeCategory === cat.id ? '2px solid #F26C29' : '2px solid #eee',
                                background: activeCategory === cat.id ? '#F26C29' : 'transparent',
                                color: activeCategory === cat.id ? 'white' : '#555',
                                fontSize: '1.05rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                boxShadow: activeCategory === cat.id ? '0 10px 20px rgba(242, 108, 41, 0.2)' : 'none'
                            }}
                        >
                            <cat.icon size={20} />
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Active Category Content */}
                <div key={activeCategory} className="animate-fadeIn">

                    {/* Category Description Area */}
                    <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#333', marginBottom: '0.75rem' }}>
                            {categories[activeCategory].headline}
                        </h3>
                        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            {categories[activeCategory].description}
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="services-grid" style={{ marginTop: '0' }}>
                        {categories[activeCategory].services.map((service, index) => (
                            <Link href={service.href} key={index} className="service-card group">
                                <div className="service-card-image">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="service-card-content" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <h3 style={{ marginBottom: '0.5rem' }}>{service.title}</h3>
                                    <p style={{ marginBottom: '1.5rem' }}>{service.description}</p>

                                    {/* Service Badges */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto', marginBottom: '1.5rem' }}>
                                        {service.badges?.map((badge, idx) => (
                                            <span key={idx} style={{
                                                fontSize: '0.7rem',
                                                padding: '0.3rem 0.8rem',
                                                background: 'rgba(242, 108, 41, 0.08)',
                                                color: '#F26C29',
                                                borderRadius: '6px',
                                                fontWeight: '600',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.02em',
                                                border: '1px solid rgba(242, 108, 41, 0.15)'
                                            }}>
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    <span className="arrow">
                                        Learn More
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
