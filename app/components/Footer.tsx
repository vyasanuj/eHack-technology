import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <Link href="/" className="footer-logo">
                            <img
                                src="/images/ehack-logo-white.png"
                                alt="eHack Technology Logo"
                                style={{ height: '80px', width: 'auto', marginBottom: '1rem' }}
                            />
                        </Link>
                        <p>
                            Empowering enterprises with cutting-edge cybersecurity solutions.
                            We are your trusted partner in securing digital assets and ensuring compliance.
                        </p>
                        <div style={{ marginTop: '1.5rem' }}>
                            <h4 className="footer-title" style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Subscribe to Our Newsletter</h4>
                            <div className="footer-newsletter">
                                <input type="email" placeholder="Enter your email" />
                                <button type="button">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    {/* Security Services */}
                    <div>
                        <h4 className="footer-title">Security Assessment</h4>
                        <ul className="footer-links">
                            <li><Link href="/services/web-application-security">Web Application Security</Link></li>
                            <li><Link href="/services/mobile-application-security">Mobile App Security</Link></li>
                            <li><Link href="/services/api-security">API Security</Link></li>
                            <li><Link href="/services/source-code-review">Source Code Review</Link></li>
                            <li><Link href="/services/red-team-assessment">Red Team Assessment</Link></li>
                            <li><Link href="/services/infrastructure-security">Infrastructure Security</Link></li>
                        </ul>
                    </div>

                    {/* Other Services */}
                    <div>
                        <h4 className="footer-title">More Services</h4>
                        <ul className="footer-links">
                            <li><Link href="/services/thick-client-security">Thick Client Security</Link></li>
                            <li><Link href="/services/firewall-security">Firewall Security</Link></li>
                            <li><Link href="/services/digital-forensics">Digital Forensics</Link></li>
                            <li><Link href="/services/malware-analysis">Malware Analysis</Link></li>
                            <li><Link href="/services/gdpr-consulting">GDPR Consulting</Link></li>
                            <li><Link href="/services/pci-dss-compliance">PCI DSS Compliance</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                {/* Contact Strip */}
                <div className="footer-contact-strip">
                    <div className="contact-strip-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.12 2h3a2 2 0 012 1.72 12.05 12.05 0 00.57 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.05 12.05 0 002.81.57A2 2 0 0122 16.92z"></path>
                        </svg>
                        <span>+91 98860 35330</span>
                    </div>
                    <div className="contact-divider"></div>
                    <div className="contact-strip-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span>info@ehacktechnology.com</span>
                    </div>
                    <div className="contact-divider"></div>
                    <div className="contact-strip-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>Bangalore, India</span>
                    </div>
                    <div className="contact-divider"></div>
                    <div className="contact-strip-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>Tue - Sun: 9:30 AM - 6:30 PM</span>
                    </div>
                </div>

                {/* Branding Section */}
                <div className="footer-branding">
                    <span className="branding-text">
                        DRIVING GLOBAL CYBERSECURITY EXCELLENCE
                        AS A STRATEGIC INITIATIVE OF eHACK GROUP
                    </span>
                    <div className="branding-logos">
                        <img src="/images/white-global.png" alt="eHack Global Technology" className="branding-logo-img" />
                        <img src="/images/ehack-group-white.png" alt="eHack Academy" className="branding-logo-img" />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} eHack Technology. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
