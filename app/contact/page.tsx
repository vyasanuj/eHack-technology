import type { Metadata } from 'next';
import LeadForm from '../components/LeadForm';

export const metadata: Metadata = {
    title: 'Contact Us | Ehack Technology - Get a Free Security Assessment',
    description: 'Contact Ehack Technology for enterprise cybersecurity solutions. Get a free security assessment from our certified experts. 24/7 support available.',
};

export default function ContactPage() {
    const faqs = [
        {
            question: 'How long does a security assessment take?',
            answer: 'Depending on the scope, assessments typically take 1-3 weeks. We provide preliminary findings within 48-72 hours.'
        },
        {
            question: 'Do you offer retesting after fixes?',
            answer: 'Yes, we offer free retesting to verify that all identified vulnerabilities have been properly remediated.'
        },
        {
            question: 'Are your reports compliance-ready?',
            answer: 'Absolutely. Our reports are aligned with ISO 27001, PCI DSS, GDPR, and other industry standards.'
        },
        {
            question: 'Do you sign NDAs?',
            answer: 'Yes, we sign comprehensive NDAs before starting any engagement to protect your sensitive information.'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="service-hero" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <span className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--primary-light)' }}>
                        Contact Us
                    </span>
                    <h1>Let&apos;s Secure Your Business Together</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Get in touch with our security experts for a free consultation and assessment
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info-card">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Get in Touch</h3>

                            <div className="contact-info-item">
                                <div className="icon">📧</div>
                                <div>
                                    <h4>Email Us</h4>
                                    <a href="mailto:info@ehacktechnology.com">info@ehacktechnology.com</a>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="icon">📞</div>
                                <div>
                                    <h4>Call Us</h4>
                                    <a href="tel:+919886035330">+91-9886035330</a>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="icon">📍</div>
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>Bangalore, Karnataka, India</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="icon">⏰</div>
                                <div>
                                    <h4>Business Hours</h4>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                                    <p style={{ marginTop: '0.25rem' }}>24/7 Emergency Response Available</p>
                                </div>
                            </div>

                            <div style={{
                                marginTop: '2rem',
                                padding: '1.5rem',
                                background: 'rgba(242, 108, 41, 0.2)',
                                borderRadius: 'var(--radius-lg)',
                                borderLeft: '4px solid var(--primary)'
                            }}>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'white' }}>
                                    🔒 Confidentiality Guaranteed
                                </h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--gray-300)' }}>
                                    We sign NDAs and follow strict data protection protocols. Your information is safe with us.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-card">
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Request a Free Consultation</h3>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '2rem' }}>
                                Fill out the form below and our security experts will get back to you within 24 hours.
                            </p>
                            <LeadForm compact />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">FAQs</span>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                    </div>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {faqs.map((faq, index) => (
                            <div key={index} className="card" style={{ marginBottom: '1rem', padding: '1.5rem 2rem' }}>
                                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--gray-900)' }}>
                                    {faq.question}
                                </h4>
                                <p style={{ color: 'var(--gray-600)', lineHeight: '1.7' }}>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map/CTA Section */}
            <section className="section section-primary">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>
                        Ready to Get Started?
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Our team of certified security experts is ready to help you identify vulnerabilities
                        and strengthen your security posture.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <a href="tel:+919886035330" className="btn btn-white btn-lg">
                            📞 Call Us Now
                        </a>
                        <a href="mailto:info@ehacktechnology.com" className="btn btn-white btn-lg" style={{ background: 'transparent', border: '2px solid white', color: 'white' }}>
                            📧 Email Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
