'use client';

import { useState } from 'react';

interface LeadFormProps {
    title?: string;
    subtitle?: string;
    compact?: boolean;
    dark?: boolean;
    serviceName?: string;
}

export default function LeadForm({
    title = "Request a Free Consultation",
    subtitle = "Our security experts will get back to you within 24 hours",
    compact = false,
    dark = false,
    serviceName
}: LeadFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: serviceName || '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className={`${dark ? 'card-dark' : 'card'}`} style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--success)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '2rem'
                }}>
                    ✓
                </div>
                <h3 style={{ marginBottom: '0.5rem', color: dark ? 'white' : 'var(--gray-900)' }}>Thank You!</h3>
                <p style={{ color: dark ? 'var(--gray-300)' : 'var(--gray-500)' }}>
                    We&apos;ve received your request. Our security experts will contact you within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <div className={compact ? '' : (dark ? 'card-dark' : 'card')} style={compact ? {} : { padding: '2rem' }}>
            {!compact && (
                <>
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '0.5rem',
                        color: dark ? 'white' : 'var(--gray-900)'
                    }}>
                        {title}
                    </h3>
                    <p style={{
                        color: dark ? 'var(--gray-300)' : 'var(--gray-500)',
                        marginBottom: '1.5rem',
                        fontSize: '0.9375rem'
                    }}>
                        {subtitle}
                    </p>
                </>
            )}

            <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name *"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Work Email *"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number *"
                            className="form-input"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            className="form-input"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <select
                        name="service"
                        className="form-select"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Service of Interest *</option>
                        <optgroup label="Security Assessment">
                            <option value="web-security">Web Application Security</option>
                            <option value="mobile-security">Mobile Application Security</option>
                            <option value="api-security">API Security Assessment</option>
                            <option value="source-code-review">Secure Source Code Review</option>
                            <option value="red-team">Red Team Assessment</option>
                            <option value="infrastructure">Infrastructure Security</option>
                            <option value="thick-client">Thick Client Security</option>
                            <option value="firewall">Firewall Security</option>
                        </optgroup>
                        <optgroup label="Forensics & Response">
                            <option value="digital-forensics">Digital Forensics</option>
                            <option value="malware-analysis">Malware Analysis</option>
                        </optgroup>
                        <optgroup label="Compliance Audit">
                            <option value="gdpr">GDPR Consulting</option>
                            <option value="pci-dss">PCI DSS Compliance</option>
                            <option value="iso">ISO Certification</option>
                        </optgroup>
                        <option value="other">Other / Multiple Services</option>
                    </select>
                </div>

                {!compact && (
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Tell us about your security requirements..."
                            className="form-textarea"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                        />
                    </div>
                )}

                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <span className="animate-pulse">Submitting...</span>
                        </>
                    ) : (
                        <>
                            Get Free Consultation
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </>
                    )}
                </button>
            </form>

            <p style={{
                fontSize: '0.75rem',
                color: dark ? 'var(--gray-400)' : 'var(--gray-400)',
                marginTop: '1rem',
                textAlign: 'center'
            }}>
                🔒 Your information is secure and will never be shared with third parties.
            </p>
        </div>
    );
}
