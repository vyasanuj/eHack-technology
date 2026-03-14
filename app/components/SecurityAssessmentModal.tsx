'use client';

import { useState, useEffect } from 'react';
import './SecurityAssessmentModal.css';

interface SecurityAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecurityAssessmentModal({ isOpen, onClose }: SecurityAssessmentModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    business: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3 className="modal-title">Request Received!</h3>
            <p className="modal-subtitle">
              Our security experts will review your request and get back to you within 24 hours.
            </p>
            <button className="btn btn-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h3 className="modal-title">Free Security Assessment</h3>
              <p className="modal-subtitle">Protect your business with a comprehensive security audit.</p>
            </div>
            
            <div className="modal-content">
              <form className="modal-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Business Name *</label>
                  <input
                    type="text"
                    name="business"
                    placeholder="Your Company Name"
                    className="form-input"
                    value={formData.business}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Select Service *</label>
                  <select
                    name="service"
                    className="form-select"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service...</option>
                    <optgroup label="Security Assessment">
                      <option value="Web Application Security">Web Application Security</option>
                      <option value="Mobile App Security">Mobile App Security</option>
                      <option value="API Security Assessment">API Security Assessment</option>
                      <option value="Source Code Review">Source Code Review</option>
                      <option value="Red Team Assessment">Red Team Assessment</option>
                      <option value="Infrastructure Security">Infrastructure Security</option>
                      <option value="Thick Client Security">Thick Client Security</option>
                      <option value="Firewall Security">Firewall Security</option>
                    </optgroup>
                    <optgroup label="Compliance Audit">
                      <option value="GDPR Consulting">GDPR Consulting</option>
                      <option value="PCI DSS Compliance">PCI DSS Compliance</option>
                      <option value="ISO Certification">ISO Certification</option>
                    </optgroup>
                    <optgroup label="Forensics & Malware">
                      <option value="Digital Forensics">Digital Forensics</option>
                      <option value="Malware Analysis">Malware Analysis</option>
                    </optgroup>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Request Free Assessment'}
                </button>
              </form>
              
              <p style={{ 
                fontSize: '0.75rem', 
                color: 'var(--gray-400)', 
                textAlign: 'center',
                marginTop: '1.5rem' 
              }}>
                🔒 Your data is protected and will never be shared.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
