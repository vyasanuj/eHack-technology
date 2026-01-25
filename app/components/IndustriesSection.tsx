"use client";
import { useState } from 'react';
import Image from 'next/image';
import {
    Landmark,
    Stethoscope,
    ShoppingCart,
    Building2,
    GraduationCap,
    Factory,
    Shield
} from 'lucide-react';

const industries = [
    {
        id: 'banking',
        name: 'Banking & Finance',
        tagline: 'FORTIFYING FINANCIAL INFRASTRUCTURE',
        description: 'In an ecosystem where trust is currency, we provide an impenetrable shield for your digital assets. Our approach goes beyond simple compliance, deploying predictive threat modeling and real-time transaction analysis to neutralize financial fraud and SWIFT vulnerabilities before they can destabilize operations.',
        badges: ['Compliance', 'Fraud Prevention'],
        image: '/images/bank-security.png',
        icon: Landmark,
        stripText: "SECURE TRANSACTIONS // FRAUD DETECTION ACTIVE // PCI-DSS COMPLIANT // ENCRYPTED DATA STREAMS // ZERO TRUST ARCHITECTURE // REAL-TIME MONITORING //",
        keyFeatures: [
            "Real-time Transaction Monitoring",
            "Advanced Fraud Detection Systems",
            "PCI-DSS & ISO 27001 Compliance",
            "Zero Trust Architecture Implementation"
        ]
    },
    {
        id: 'healthcare',
        name: 'Healthcare',
        tagline: 'PROTECTING PATIENT DATA',
        description: 'Patient safety now depends on digital security. We safeguard the entire healthcare continuum—from protecting sensitive EHR data against ransomware to hardening the firmware of life-critical IoMT devices. Our protocols ensure that technology advances capabilities without compromising privacy.',
        badges: ['HIPAA', 'Device Security'],
        image: '/images/Healthcare.png',
        icon: Stethoscope,
        stripText: "HIPAA COMPLIANT // IOT DEVICE SECURITY // PATIENT DATA PROTECTION // RANSOMWARE DEFENSE // SECURE EHR SYSTEMS // TELEMEDICINE ENCRYPTION //",
        keyFeatures: [
            "IoMT (Internet of Medical Things) Security",
            "HIPAA & HITECH Compliance",
            "Electronic Health Record (EHR) Protection",
            "Ransomware Defense Mechanisms"
        ]
    },
    {
        id: 'ecommerce',
        name: 'E-Commerce',
        tagline: 'SECURING DIGITAL COMMERCE',
        description: 'Trust is the engine of conversion. We fortify your entire retail stack, securing payment gateways from skimming attacks and your inventory APIs from bot-driven exploitation. By ensuring a glitch-free, secure shopping experience, we help you protect revenue and customer loyalty simultaneously.',
        badges: ['PCI DSS', 'Data Protection'],
        image: '/images/E-commers.png',
        icon: ShoppingCart,
        stripText: "PAYMENT GATEWAY SECURITY // DDOS PROTECTION // CUSTOMER DATA DISCOVERY // FRAUD ANALYSIS // SECURE CHECKOUT // INVENTORY PROTECTION //",
        keyFeatures: [
            "Secure Payment Gateway Integration",
            "DDoS Attack Mitigation",
            "Customer Data Privacy Protection",
            "Bot Management & Prevention"
        ]
    },
    {
        id: 'government',
        name: 'Government',
        tagline: 'DEFENDING NATIONAL INTERESTS',
        description: 'National security requires next-generation defense. We architect military-grade cybersecurity perimeters for public sector infrastructure, neutralizing state-sponsored espionage and hardening citizen data registries against persistent threats (APTs) with sovereign-level encryption standards.',
        badges: ['VAPT', 'Infrastructure'],
        image: '/images/Government.png',
        icon: Building2,
        stripText: "CRITICAL INFRASTRUCTURE DEFENSE // MILITARY GRADE ENCRYPTION // CITIZEN DATA PRIVACY // NATION STATE THREAT PREVENTION // COMPLIANCE AUDITS //",
        keyFeatures: [
            "Critical Infrastructure Protection",
            "Nation-State Threat Defense",
            "Classified Data Handling",
            "FISMA & NIST Compliance"
        ]
    },
    {
        id: 'education',
        name: 'Education',
        tagline: 'SAFEGUARDING KNOWLEDGE',
        description: 'Educational institutions are open environments, making them unique targets. We secure the digital campus by protecting research IP from theft and safeguarding student PII, while maintaining the open accessibility required for academic collaboration and remote learning platforms.',
        badges: ['LMS Security', 'Student Data'],
        image: '/images/Education.png',
        icon: GraduationCap,
        stripText: "CAMPUS NETWORK SECURITY // STUDENT DATA PRIVACY // EXAM PORTAL INTEGRITY // RESEARCH DATA PROTECTION // VIRTUAL CLASSROOM SECURITY //",
        keyFeatures: [
            "Learning Management System (LMS) Security",
            "Student Data Privacy (FERPA)",
            "Research IP Protection",
            "Secure Remote Access for Faculty"
        ]
    },
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        tagline: 'PROTECTING INDUSTRIAL IOT',
        description: 'As factories get smarter, the attack surface grows. We bridge the gap between IT and OT security, hardening SCADA systems and industrial control networks against sabotage. Our solutions prevent production line downtime and ensure the integrity of your global supply chain.',
        badges: ['ICS/SCADA', 'IIoT'],
        image: '/images/Manufacturing.png',
        icon: Factory,
        stripText: "SCADA SYSTEM DEFENSE // OPERATIONAL TECHNOLOGY SECURITY // SUPPLY CHAIN INTEGRITY // IIOT VULNERABILITY MANAGEMENT // FACTORY AUTOMATION PROTECTION //",
        keyFeatures: [
            "ICS & SCADA System Security",
            "Industrial IoT (IIoT) Protection",
            "Supply Chain Risk Management",
            "Operational Technology (OT) Security"
        ]
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
                    border: '1px solid #F26C29',
                    height: '650px', // Fixed height for alignment
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
                                    border: activeIndustry.id === ind.id ? '1px solid #F26C29' : '1px solid #b6b4b4ff',
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
                        display: 'flex',
                        flexDirection: 'column',
                        // gap: '3rem', // Removed gap for seamless look
                        height: '100%',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        {/* Background Industry Icon Watermark */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-50px',
                            right: '-50px',
                            opacity: '0.05',
                            transform: 'rotate(-15deg)',
                            pointerEvents: 'none',
                            zIndex: 0
                        }}>
                            <activeIndustry.icon size={400} color="#F26C29" />
                        </div>
                        {/* Image Content (Top Banner) */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '250px', // Fixed height for banner
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            flexShrink: 0 // Prevent shrinking
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
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)', // Stronger gradient
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '2rem'
                            }}>
                                <span style={{
                                    display: 'inline-block',
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    color: 'rgba(255,255,255,0.9)',
                                    letterSpacing: '0.1em',
                                    marginBottom: '0.5rem',
                                    textTransform: 'uppercase'
                                }}>
                                    {activeIndustry.tagline}
                                </span>
                                <h3 style={{
                                    fontSize: '3.5rem',
                                    lineHeight: '1.1',
                                    color: 'white',
                                    fontWeight: '800',
                                    textShadow: '0 4px 10px rgba(0,0,0,0.3)'
                                }}>
                                    {activeIndustry.name}
                                </h3>
                            </div>
                        </div>

                        {/* Text Content (Bottom) */}
                        <div style={{ padding: '2rem 1rem' }}>
                            <p style={{
                                color: '#666',
                                fontSize: '1.1rem',
                                lineHeight: '1.6',
                                marginBottom: '2rem',
                                maxWidth: '90%'
                            }}>
                                {activeIndustry.description}
                            </p>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{
                                    fontSize: '1rem',
                                    fontWeight: '700',
                                    color: '#333',
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <span style={{ color: '#F26C29' }}>///</span> Key Solutions
                                </h4>
                                <ul style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '0.8rem',
                                    listStyle: 'none',
                                    padding: 0
                                }}>
                                    {activeIndustry.keyFeatures?.map((feature, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.95rem',
                                            color: '#555',
                                            fontWeight: '500'
                                        }}>
                                            <span style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                background: '#F26C29',
                                                display: 'inline-block'
                                            }}></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                {activeIndustry.badges.map((badge, idx) => (
                                    <span key={idx} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.6rem 1.2rem',
                                        background: '#fff5f0',
                                        border: '1px solid rgba(242, 108, 41, 0.3)',
                                        borderRadius: '50px',
                                        fontWeight: '700',
                                        color: '#F26C29',
                                        boxShadow: '0 2px 5px rgba(242, 108, 41, 0.1)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
