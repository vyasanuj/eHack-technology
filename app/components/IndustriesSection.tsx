"use client";
import { useState } from 'react';
import Image from 'next/image';

const industries = [
    {
        id: 'banking',
        name: 'Banking & Finance',
        tagline: 'FORTIFYING FINANCIAL INFRASTRUCTURE',
        description: 'Securing digital transactions and financial data with enterprise-grade security protocols.',
        badges: ['Compliance', 'Fraud Prevention'],
        image: '/images/bank-security.png',
        stripText: "SECURE TRANSACTIONS // FRAUD DETECTION ACTIVE // PCI-DSS COMPLIANT // ENCRYPTED DATA STREAMS // ZERO TRUST ARCHITECTURE // REAL-TIME MONITORING //"
    },
    {
        id: 'healthcare',
        name: 'Healthcare',
        tagline: 'PROTECTING PATIENT DATA',
        description: 'Protecting patient records and medical IoT devices through advanced encryption and monitoring.',
        badges: ['HIPAA', 'Device Security'],
        image: '/images/Healthcare.png',
        stripText: "HIPAA COMPLIANT // IOT DEVICE SECURITY // PATIENT DATA PROTECTION // RANSOMWARE DEFENSE // SECURE EHR SYSTEMS // TELEMEDICINE ENCRYPTION //"
    },
    {
        id: 'ecommerce',
        name: 'E-Commerce',
        tagline: 'SECURING DIGITAL COMMERCE',
        description: 'Safeguarding online stores and customer payments against emerging cyber threats.',
        badges: ['PCI DSS', 'Data Protection'],
        image: '/images/E-commers.png',
        stripText: "PAYMENT GATEWAY SECURITY // DDOS PROTECTION // CUSTOMER DATA DISCOVERY // FRAUD ANALYSIS // SECURE CHECKOUT // INVENTORY PROTECTION //"
    },
    {
        id: 'government',
        name: 'Government',
        tagline: 'DEFENDING NATIONAL INTERESTS',
        description: 'Defending critical infrastructure and citizen data with high-level military grade security.',
        badges: ['VAPT', 'Infrastructure'],
        image: '/images/Government.png',
        stripText: "CRITICAL INFRASTRUCTURE DEFENSE // MILITARY GRADE ENCRYPTION // CITIZEN DATA PRIVACY // NATION STATE THREAT PREVENTION // COMPLIANCE AUDITS //"
    },
    {
        id: 'education',
        name: 'Education',
        tagline: 'SAFEGUARDING KNOWLEDGE',
        description: 'Securing learning platforms and student information for a safe digital campus environment.',
        badges: ['LMS Security', 'Student Data'],
        image: '/images/Education.png',
        stripText: "CAMPUS NETWORK SECURITY // STUDENT DATA PRIVACY // EXAM PORTAL INTEGRITY // RESEARCH DATA PROTECTION // VIRTUAL CLASSROOM SECURITY //"
    },
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        tagline: 'PROTECTING INDUSTRIAL IOT',
        description: 'Protecting smart factories and industrial control systems from disruptive cyber attacks.',
        badges: ['ICS/SCADA', 'IIoT'],
        image: '/images/Manufacturing.png',
        stripText: "SCADA SYSTEM DEFENSE // OPERATIONAL TECHNOLOGY SECURITY // SUPPLY CHAIN INTEGRITY // IIOT VULNERABILITY MANAGEMENT // FACTORY AUTOMATION PROTECTION //"
    }
];

export default function IndustriesSection() {
    const [activeIndustry, setActiveIndustry] = useState(industries[0]);

    return (
        <section className="section" style={{ padding: '4rem 0', }}>
            <div className="container" style={{ maxWidth: '1400px' }}>
                <div className="section-header" style={{ marginBottom: '4rem' }}>
                    <span className="section-label" style={{
                        background: '#F26C29',
                        color: 'white',
                        fontSize: '1.1rem',
                        padding: '0.6rem 1.8rem',
                        fontWeight: '700',
                        borderRadius: '50px'
                    }}>Industries We Serve</span>
                    <h2 className="section-title">Trusted Across <span style={{ color: '#F26C29' }}>Industries</span></h2>
                    <p className="section-subtitle">
                        From fintech to healthcare, we secure organizations across all sectors
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 300px 1fr',
                    gap: '2rem',
                    background: 'white',
                    borderRadius: '24px',
                    padding: '2rem',
                    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    height: '600px', // Fixed height for alignment
                    overflow: 'hidden'
                }}>

                    {/* 1. Vertical Animated Strip */}
                    <div style={{
                        background: '#F26C29',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        // border: '1px solid #333'
                    }}>
                        <div className="animate-marquee-vertical" style={{
                            writingMode: 'vertical-rl',
                            textOrientation: 'mixed',
                            whiteSpace: 'nowrap',
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: '800',
                            letterSpacing: '0.2em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem',
                            padding: '1rem 0'
                        }}>
                            {/* Repeat text for seamless loop */}
                            {[...Array(5)].map((_, i) => (
                                <span key={i} style={{ transform: 'rotate(180deg)' }}>
                                    {activeIndustry.stripText}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 2. Vertical Industry Tabs */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                        paddingRight: '1rem',
                        borderRight: '1px solid #eee',
                        overflowY: 'auto'
                    }}>
                        {industries.map((ind) => (
                            <button
                                key={ind.id}
                                onClick={() => setActiveIndustry(ind)}
                                style={{
                                    textAlign: 'left',
                                    padding: '1.25rem 1.5rem',
                                    borderRadius: '12px',
                                    background: activeIndustry.id === ind.id ? '#fff5f0' : 'transparent',
                                    border: activeIndustry.id === ind.id ? '1px solid #F26C29' : '1px solid transparent',
                                    color: activeIndustry.id === ind.id ? '#F26C29' : '#555',
                                    fontWeight: activeIndustry.id === ind.id ? '700' : '500',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                {ind.name}
                                {activeIndustry.id === ind.id && <span style={{ fontSize: '1.2rem' }}>→</span>}
                            </button>
                        ))}
                    </div>

                    {/* 3. Content Display Area */}
                    <div className="animate-fadeIn" key={activeIndustry.id} style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '3rem',
                        alignItems: 'center',
                        padding: '1rem'
                    }}>
                        {/* Text Content */}
                        <div>
                            <span style={{
                                display: 'inline-block',
                                fontSize: '0.8rem',
                                fontWeight: '700',
                                color: '#aaa',
                                letterSpacing: '0.1em',
                                marginBottom: '1rem',
                                textTransform: 'uppercase'
                            }}>
                                {activeIndustry.tagline}
                            </span>
                            <h3 style={{
                                fontSize: '3rem',
                                lineHeight: '1.1',
                                marginBottom: '1.5rem',
                                background: 'linear-gradient(45deg, #1a1a1a, #444)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: '800'
                            }}>
                                {activeIndustry.name}
                            </h3>
                            <p style={{
                                color: '#666',
                                fontSize: '1.1rem',
                                lineHeight: '1.6',
                                marginBottom: '2rem'
                            }}>
                                {activeIndustry.description}
                            </p>

                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                {activeIndustry.badges.map((badge, idx) => (
                                    <span key={idx} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.5rem 1rem',
                                        background: 'white',
                                        border: '1px solid #eee',
                                        borderRadius: '50px',
                                        fontWeight: '600',
                                        color: '#333',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                                    }}>
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Image Content */}
                        <div style={{
                            position: 'relative',
                            height: '100%',
                            minHeight: '400px',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}>
                            <Image
                                src={activeIndustry.image}
                                alt={activeIndustry.name}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay Gradient */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
                            }}></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
