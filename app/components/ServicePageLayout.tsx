"use client";

import type { ReactNode } from 'react';
import Link from 'next/link';
import InquiryForm from './InquiryForm';
import ServiceOperationsPanel from './ServiceOperationsPanel';
import type { Capability } from '../data/services';

interface ServicePageLayoutProps {
    title: string;
    description: string;
    whatIs: string;
    features: Capability[];
    whatWeCover: string[];
    whyAssessment: string;
    benefits: Array<{ icon: string; title: string; description: string }>;
    whyChooseUs: string;
    relatedServices?: Array<{ title: string; href: string }>;
    serviceName: string;
    children?: ReactNode;
    heroImage?: string;
}

export default function ServicePageLayout({
    title,
    description,
    whatIs,
    features,
    whatWeCover,
    whyAssessment,
    benefits,
    whyChooseUs,
    relatedServices,
    serviceName,
    heroImage
}: ServicePageLayoutProps) {
    return (
        <main>
            {/* Synchronized Hero Section */}
            <section className="hero-section" id="overview">
                <div className="hero-background">
                    <div className="hero-overlay"></div>
                    <div
                        className="hero-image"
                        style={{
                            backgroundImage: heroImage ? `url('${heroImage}')` : undefined
                        }}
                    />
                </div>
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-capsule-badge">
                            Premium Security Service
                        </div>

                        <h1 className="hero-title animate-fadeInUp">
                            {(() => {
                                const words = title.split(' ');
                                if (words.length > 0) {
                                    return (
                                        <>
                                            <span className="text-accent">{words[0]}</span> {words.slice(1).join(' ')}
                                        </>
                                    );
                                }
                                return title;
                            })()}
                        </h1>

                        <p className="hero-description animate-fadeInUp delay-100">
                            {description}
                        </p>

                        <ul className="hero-features-list animate-fadeInUp delay-200">
                            {features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="hero-feature-item">
                                    <span className="check-icon">✓</span>
                                    <span>{feature.title}</span>
                                </li>
                            ))}
                        </ul>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link href="#contact" className="btn btn-primary btn-lg">
                                Get Started
                            </Link>
                            <Link href="#details" className="btn btn-white btn-lg" style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                                View Details
                            </Link>
                        </div>
                    </div>

                    <InquiryForm
                        courseName={title}
                        courseCode={serviceName}
                        variant="hero"
                        title="Speak to an Expert"
                        subtitle="Get a free consultation today"
                    />
                </div>
            </section>

            {/* Unified Overview & Operations Panel Section */}
            <section className="service-overview-sec" id="details" style={{ padding: '6rem 0', background: '#fff' }}>
                <div className="container">
                    <div style={{
                        padding: '3rem',
                        background: '#FFFFFF',
                        borderRadius: '24px',
                        border: '2px solid rgba(242, 108, 41, 0.2)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                        position: 'relative'
                    }}>
                        {/* Shared Decorative Orange Accent */}
                        <div style={{
                            position: 'absolute',
                            top: '-2px',
                            left: '40px',
                            right: '40px',
                            height: '4px',
                            background: 'var(--primary)',
                            borderRadius: '0 0 4px 4px'
                        }}></div>

                        <div className="service-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: '1.7fr 1.3fr',
                            gap: '4rem',
                            alignItems: 'stretch'
                        }}>

                            {/* Left Column: Overview Content */}
                            <div style={{ alignSelf: 'start' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '2px' }}></div>
                                    <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--gray-900)' }}>
                                        What is {title}?
                                    </h2>
                                </div>
                                <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', lineHeight: '1.9', margin: 0 }}>
                                    {whatIs}
                                </p>
                            </div>

                            {/* Right Column: Interactive Operations Panel */}
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--gray-900)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Live Operations
                                </h3>
                                <div style={{ flex: 1 }}>
                                    <ServiceOperationsPanel serviceName={serviceName} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional contact info below the unified box if needed */}
                    <div style={{
                        marginTop: '3rem',
                        padding: '2rem',
                        background: 'var(--primary-bg)',
                        borderRadius: '20px',
                        border: '1px solid rgba(242, 108, 41, 0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--primary)' }}>Need more info?</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', margin: 0 }}>Our security architects are available for a deep dive into your requirements.</p>
                        </div>
                        <a href="tel:+919886035330" className="btn btn-primary btn-md">
                            Consult with Expert
                        </a>
                    </div>
                </div>
            </section>

            {/* Core Capabilities Section (Auto-scrolling Marquee) */}
            <section style={{ padding: '6rem 0', background: 'var(--gray-50)', overflow: 'hidden' }}>
                <div className="container" style={{ marginBottom: '4rem' }}>
                    <div style={{ textAlign: 'center' }}>
                        <span className="section-label">Features</span>
                        <h2 className="section-title">Core <span style={{ color: 'var(--primary)' }}>Capabilities</span></h2>
                        <p style={{ color: 'var(--gray-600)', maxWidth: '700px', margin: '1rem auto 0' }}>
                            We provide comprehensive security solutions tailored to your unique infrastructure and business needs.
                        </p>
                    </div>
                </div>

                <div className="marquee-container" style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    overflow: 'hidden'
                }}>
                    <div className="marquee-track" style={{
                        display: 'flex',
                        gap: '2.5rem',
                        width: 'max-content',
                        padding: '1rem 0 3rem'
                    }}>
                        {/* Duplicate the list twice for seamless looping */}
                        {[...features, ...features, ...features].map((item, index) => (
                            <div key={index} className="feature-card-premium" style={{
                                background: '#fff',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid var(--gray-100)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                width: '320px',
                                flexShrink: 0
                            }}>
                                {/* Feature Image */}
                                <div style={{
                                    width: '100%',
                                    height: '180px',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        className="feature-img"
                                    />
                                </div>

                                {/* Content */}
                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{
                                        fontSize: '1.2rem',
                                        fontWeight: '700',
                                        color: 'var(--gray-900)',
                                        marginBottom: '0.75rem'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <div style={{ width: '40px', height: '3px', background: 'var(--primary)', borderRadius: '2px', marginBottom: '1rem' }}></div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', lineHeight: '1.6', margin: 0 }}>
                                        Professional {item.title.toLowerCase()} services tailored for your specific environment and business requirements.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <style jsx>{`
                        .marquee-track {
                            animation: scroll 40s linear infinite;
                        }

                        .marquee-container:hover .marquee-track {
                            animation-play-state: paused;
                        }

                        @keyframes scroll {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(calc(-320px * ${features.length} - 2.5rem * ${features.length}));
                            }
                        }

                        .feature-card-premium:hover {
                            transform: translateY(-10px);
                            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                            border-color: rgba(242, 108, 41, 0.2);
                        }
                        
                        .feature-card-premium:hover .feature-img {
                            transform: scale(1.1);
                        }

                        /* Ensure smooth motion on all browsers */
                        .marquee-track {
                            will-change: transform;
                        }
                    `}</style>
                </div>
            </section>

            {/* Vulnerability Coverage Section (Full-width) */}
            <section style={{ padding: '6rem 0', background: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="section-label">Detection</span>
                        <h2 className="section-title">Vulnerability <span style={{ color: 'var(--primary)' }}>Coverage</span></h2>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.25rem'
                    }}>
                        {whatWeCover.map((item, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.25rem',
                                padding: '1.25rem',
                                background: 'var(--gray-50)',
                                borderRadius: '12px',
                                border: '1px solid #eee'
                            }}>
                                <div style={{ color: 'var(--success)', fontSize: '1.3rem' }}>●</div>
                                <span style={{ fontSize: '1rem', color: 'var(--gray-600)', fontWeight: '500' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Importance (Gradient Box) */}
            <section style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div style={{
                        padding: '4rem',
                        background: 'linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%)',
                        borderRadius: '32px',
                        color: 'white',
                        textAlign: 'center',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        <h3 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem', color: 'white' }}>
                            Strategic Importance
                        </h3>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto' }}>
                            {whyAssessment}
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Benefits */}
            <section style={{ padding: '6rem 0', background: 'var(--gray-50)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', color: 'var(--gray-900)' }}>
                            Why Choose <span style={{ color: 'var(--primary)' }}>Ehack Technology</span>?
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '4rem' }}>
                            {whyChooseUs}
                        </p>
                    </div>

                    <div className="benefits-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '2rem',
                        alignItems: 'stretch'
                    }}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card-premium" style={{
                                padding: '2.5rem',
                                background: '#fff',
                                borderRadius: '24px',
                                border: '2px solid rgba(242, 108, 41, 0.15)',
                                transition: 'all 0.3s ease',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                height: '100%',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                            }}>
                                <div style={{
                                    fontSize: '3rem',
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '80px',
                                    height: '80px',
                                    background: 'rgba(242, 108, 41, 0.05)',
                                    borderRadius: '20px',
                                    color: 'var(--primary)'
                                }}>
                                    {benefit.icon}
                                </div>
                                <h4 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: '800',
                                    marginBottom: '1rem',
                                    color: 'var(--gray-900)'
                                }}>
                                    {benefit.title}
                                </h4>
                                <div style={{ width: '30px', height: '3px', background: 'var(--primary)', borderRadius: '2px', marginBottom: '1.25rem', opacity: 0.6 }}></div>
                                <p style={{
                                    color: 'var(--gray-600)',
                                    fontSize: '1rem',
                                    lineHeight: '1.7',
                                    margin: 0
                                }}>
                                    {benefit.description}
                                </p>

                                <style jsx>{`
                                    .benefit-card-premium:hover {
                                        transform: translateY(-10px);
                                        border-color: var(--primary);
                                        box-shadow: 0 20px 40px rgba(242, 108, 41, 0.1);
                                    }
                                `}</style>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Services */}
            {relatedServices && relatedServices.length > 0 && (
                <section style={{ padding: '6rem 0', background: '#fff' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span className="section-label">Explore More</span>
                            <h2 className="section-title">Related <span style={{ color: 'var(--primary)' }}>Services</span></h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}>
                            {relatedServices.map((service, index) => (
                                <Link key={index} href={service.href} style={{
                                    padding: '2rem',
                                    background: 'var(--gray-50)',
                                    borderRadius: '20px',
                                    border: '1px solid #eee',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }} className="group">
                                    <span style={{ fontWeight: '700', color: 'var(--gray-900)', fontSize: '1.1rem' }}>{service.title}</span>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--primary)',
                                        border: '1px solid #eee',
                                        transition: 'all 0.3s ease'
                                    }}>→</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA Section */}
            <section className="cta-section" id="contact" style={{ background: 'var(--primary-bg)', padding: '6rem 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>Ready to Secure Your Assets?</h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--gray-600)' }}>
                        Get a comprehensive {title.toLowerCase()} from our certified experts. Our team is ready to help you identify and mitigate risks.
                    </p>
                    <div className="cta-buttons">
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Request Assessment
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '10px' }}>
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <a href="tel:+919886035330" className="btn btn-white btn-lg" style={{ border: '1px solid #ddd' }}>
                            Speak with Lead Consultant
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
