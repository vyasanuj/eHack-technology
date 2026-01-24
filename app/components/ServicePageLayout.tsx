import type { ReactNode } from 'react';
import Link from 'next/link';
import LeadForm from './LeadForm';

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
    serviceName
}: ServicePageLayoutProps) {
    return (
        <>
            {/* Hero Section */}
            <section className="service-hero">
                <div className="container">
                    <span className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--primary-light)' }}>
                        Security Assessment
                    </span>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="service-content">
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
                        <div>
                            <div className="sidebar-form">
                                <LeadForm
                                    title="Get a Free Assessment"
                                    subtitle="Our experts will respond within 24 hours"
                                    serviceName={serviceName}
                                />
                            </div>

                            {/* Related Services */}
                            {relatedServices && relatedServices.length > 0 && (
                                <div style={{
                                    marginTop: '2rem',
                                    padding: '1.5rem',
                                    background: 'var(--gray-50)',
                                    borderRadius: 'var(--radius-xl)'
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
        </>
    );
}
