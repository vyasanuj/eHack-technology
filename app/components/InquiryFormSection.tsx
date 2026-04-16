'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Lock } from 'lucide-react';
import styles from './InquiryFormSection.module.css';

export default function InquiryFormSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        business: '',
        service: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Split name into first and last
            const nameParts = formData.name.trim().split(/\s+/);
            const firstName = nameParts[0] || formData.business || 'Unknown';
            const lastName = nameParts.slice(1).join(' ') || '-';

            const payload = {
                firstName,
                lastName,
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                company: formData.business.trim(),
                inquiryName: `GT Inquiry - ${formData.business || firstName} - ${formData.service || 'General'}`,
                serviceName: formData.service || 'General Security Inquiry',
                serviceCode: formData.service?.toLowerCase().replace(/\s+/g, '-') || 'general',
                pageName: typeof window !== 'undefined' ? window.location.pathname : 'home',
                message: `Service Requested: ${formData.service || 'General'}\nCompany: ${formData.business || 'Not provided'}\nSource: Home Page Bottom CTA`,
                leadSource: 'Website - Home Embedded CTA',
                pipeline: 'Global Technology Sales',
                stage: 'New Inquiry',
                website: '', // Honeypot
            };

            const response = await fetch('/api/zoho/inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to submit');
            }

            setIsSubmitting(false);
            setSubmitted(true);
        } catch (err) {
            console.error('Error submitting inquiry:', err);
            setIsSubmitting(false);
            setError('Integration failed. Please try again or call +91 98860 35330');
        }
    };

    return (
        <section id="contact-secure" className={styles.ctaSection}>
            <div className="container">
                <div className={styles.contentRow}>
                    {/* Left: Content */}
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>
                            Ready to Secure Your Enterprise?
                        </h2>
                        <p className={styles.subtitle}>
                            Get a comprehensive security assessment from our certified experts. 
                            Identify vulnerabilities before they become threats.
                        </p>
                        
                        <div className={styles.benefitList}>
                            <div className={styles.benefitItem}>
                                <span>• Certified Expert Analysis (CEH, OSCP)</span>
                            </div>
                            <div className={styles.benefitItem}>
                                <span>• Fast 48-72 Hour Reporting</span>
                            </div>
                            <div className={styles.benefitItem}>
                                <span>• Global Compliance Standards (ISO, SOC2)</span>
                            </div>
                            <div className={styles.benefitItem}>
                                <span>• Zero-Data Leak Guarantee</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Embedded Form */}
                    <div className={styles.formContainer}>
                        <div className={styles.glassCard}>
                            {submitted ? (
                                <div className={styles.successMessage}>
                                    <h3 className={styles.formTitle}>Request Received!</h3>
                                    <p className={styles.formSubtitle}>
                                        Our security team will contact you within 24 hours to schedule your assessment.
                                    </p>
                                    <button 
                                        className={styles.submitBtn} 
                                        onClick={() => setSubmitted(false)}
                                        style={{ width: '100%', background: '#ff6b00', color: 'white' }}
                                    >
                                        Send Another Request
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className={styles.formTitle}>Free Security Assessment</h3>
                                    <p className={styles.formSubtitle}>Take the first step towards a bulletproof infrastructure.</p>
                                    
                                    <form className={styles.formMain} onSubmit={handleSubmit}>
                                        {error && (
                                            <div style={{ color: '#ef4444', fontSize: '0.85rem', background: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                                {error}
                                            </div>
                                        )}
                                        
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Full Name *"
                                            className={styles.inputField}
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        
                                        <div className={styles.mobileStack}>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Work Email *"
                                                className={styles.inputField}
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number *"
                                                className={styles.inputField}
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <input
                                            type="text"
                                            name="business"
                                            placeholder="Company / Organization"
                                            className={styles.inputField}
                                            value={formData.business}
                                            onChange={handleChange}
                                        />

                                        <div className={styles.selectWrapper}>
                                            <select
                                                name="service"
                                                className={`${styles.inputField} ${styles.selectField}`}
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Required Service *</option>
                                                <optgroup label="Assessment">
                                                    <option value="Web Security">Web App Security</option>
                                                    <option value="Mobile Security">Mobile App Security</option>
                                                    <option value="API Security">API Security</option>
                                                    <option value="Infrastructure">Infrastructure Pentest</option>
                                                    <option value="Red Teaming">Red Team Operations</option>
                                                </optgroup>
                                                <optgroup label="Audits & Compliance">
                                                    <option value="ISO Audit">ISO Audit & Certification</option>
                                                    <option value="GDPR Compliance">GDPR Compliance</option>
                                                    <option value="PCI DSS">PCI DSS Certification</option>
                                                </optgroup>
                                            </select>
                                        </div>

                                        <button 
                                            type="submit" 
                                            className={styles.submitBtn}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Securing Connection...' : 'Get My Free Assessment'}
                                        </button>

                                        <div className={styles.statusText}>
                                            <span>ISO 27001 Certified Security Protocol</span>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

