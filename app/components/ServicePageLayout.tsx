import type { ReactNode } from 'react';
import Link from 'next/link';
import InquiryForm from './InquiryForm';

interface ServicePageLayoutProps {
    title: string;
    description: string;
    whatIs: string;
    whatWeOffer: string[];
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
    whatWeOffer,
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
            {/* Synchronized Hero Section from Solutions Page */}
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
                            {whatWeOffer.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="hero-feature-item">
                                    <span className="check-icon">✓</span>
                                    <span>{feature}</span>
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

            {/* Main Content */}
            <section className="service-content" id="details">
                <div className="container">
                    <div className="service-grid">
                        {/* Main Content Column */}
                        <div>
                            {/* What Is Section */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--gray-900)' }}>
                                    What is {title}?
                                </h2>
                                <p style={{ fontSize: '1.0625rem', color: 'var(--gray-600)', lineHeight: '1.8' }}>
                                    {whatIs}
                                </p>
                            </div>

                            {/* What We Offer */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
                                    What We Offer
                                </h2>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                    {whatWeOffer.map((item, index) => (
                                        <div key={index} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            padding: '1rem 1.25rem',
                                            background: 'var(--primary-bg)',
                                            borderRadius: 'var(--radius-lg)',
                                            border: '1px solid rgba(242, 108, 41, 0.2)'
                                        }}>
                                            <span style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>✓</span>
                                            <span style={{ fontWeight: '500', color: 'var(--gray-800)' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* What We Cover */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
                                    What We Cover
                                </h2>
                                <div className="coverage-grid">
                                    {whatWeCover.map((item, index) => (
                                        <div key={index} className="coverage-item">
                                            <span className="check" style={{ color: 'var(--success)' }}>✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why This Assessment */}
                            <div style={{
                                marginBottom: '3rem',
                                padding: '2rem',
                                background: 'linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%)',
                                borderRadius: 'var(--radius-xl)',
                                color: 'white'
                            }}>
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                                    Why {title}?
                                </h2>
                                <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: 'var(--gray-200)' }}>
                                    {whyAssessment}
                                </p>
                            </div>

                            {/* Benefits */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
                                    Key Benefits
                                </h2>
                                <div className="benefits-grid">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="benefit-card">
                                            <div className="benefit-icon">{benefit.icon}</div>
                                            <div>
                                                <h4>{benefit.title}</h4>
                                                <p>{benefit.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--gray-900)' }}>
                                    Why Choose Ehack Technology?
                                </h2>
                                <p style={{ fontSize: '1.0625rem', color: 'var(--gray-600)', lineHeight: '1.8' }}>
                                    {whyChooseUs}
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="service-sidebar" id="contact">
                            {/* Inquiry Form removed from sidebar and moved to Hero, 
                                keeping related services and other potential sidebar items */}

                            {/* Related Services */}
                            {relatedServices && relatedServices.length > 0 && (
                                <div style={{
                                    padding: '1.5rem',
                                    background: 'var(--gray-50)',
                                    borderRadius: 'var(--radius-xl)',
                                    border: '1px solid var(--gray-200)'
                                }}>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--gray-800)' }}>
                                        Related Services
                                    </h4>
                                    <ul style={{ listStyle: 'none' }}>
                                        {relatedServices.map((service, index) => (
                                            <li key={index} style={{ marginBottom: '0.5rem' }}>
                                                <Link
                                                    href={service.href}
                                                    style={{
                                                        color: 'var(--primary)',
                                                        textDecoration: 'none',
                                                        fontSize: '0.9375rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem'
                                                    }}
                                                >
                                                    → {service.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Secure Your Application?</h2>
                    <p>
                        Get a comprehensive {title.toLowerCase()} from our certified experts.
                    </p>
                    <div className="cta-buttons">
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Request Assessment
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <a href="tel:+919886035330" className="btn btn-white btn-lg">
                            Call: +91-9886035330
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
