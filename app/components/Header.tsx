'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5rem' }}>
            <a href="mailto:info@ehacktechnology.com" style={{ fontSize: '1rem', fontWeight: '600' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@ehacktechnology.com
            </a>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
            <a href="tel:+919886035330" style={{ fontSize: '1rem', fontWeight: '600' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91-9886035330
            </a>
          </div>
        </div>
      </div>

      {/* Promo Bar */}
      <div className="promo-bar">
        <span style={{ fontSize: '1.0625rem', fontWeight: '700' }}>
          Protect your enterprise with industry-leading cybersecurity solutions —
          <Link href="/contact" style={{ fontWeight: '800', textDecoration: 'underline', marginLeft: '0.5rem' }}>
            Get a Free Security Assessment
          </Link>
        </span>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <Link href="/" className="logo">
            <Image
              src="/eHack.png"
              alt="Ehack Group of Technologies"
              width={280}
              height={80}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-dropdown">
              <div className="nav-link nav-dropdown-trigger">
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              <div className="nav-dropdown-menu">
                <div className="dropdown-grid">
                  <div className="dropdown-category">
                    <h4>Security Assessment</h4>
                    <ul>
                      <li><Link href="/services/web-application-security">Web Application Security</Link></li>
                      <li><Link href="/services/mobile-application-security">Mobile App Security</Link></li>
                      <li><Link href="/services/api-security">API Security Assessment</Link></li>
                      <li><Link href="/services/source-code-review">Source Code Review</Link></li>
                      <li><Link href="/services/red-team-assessment">Red Team Assessment</Link></li>
                      <li><Link href="/services/infrastructure-security">Infrastructure Security</Link></li>
                      <li><Link href="/services/thick-client-security">Thick Client Security</Link></li>
                      <li><Link href="/services/firewall-security">Firewall Security</Link></li>
                    </ul>
                  </div>
                  <div className="dropdown-category">
                    <h4>Forensics & Response</h4>
                    <ul>
                      <li><Link href="/services/digital-forensics">Digital Forensics</Link></li>
                      <li><Link href="/services/malware-analysis">Malware Analysis</Link></li>
                    </ul>
                  </div>
                  <div className="dropdown-category">
                    <h4>Compliance Audit</h4>
                    <ul>
                      <li><Link href="/services/gdpr-consulting">GDPR Consulting</Link></li>
                      <li><Link href="/services/pci-dss-compliance">PCI DSS Compliance</Link></li>
                      <li><Link href="/services/iso-certification">ISO Certification</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href="/about" className="nav-link">About Us</Link>
            </li>
            <li className="lg:hidden">
              <Link href="/contact" className="nav-link nav-cta">Get a Quote</Link>
            </li>
          </ul>

          <Link href="/contact" className="nav-cta hidden lg:inline-flex">Get a Quote</Link>

          <div
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
