'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useModal } from '../context/ModalContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openSecurityModal } = useModal();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <div className="flex flex-col xl:flex-row justify-center items-center gap-2 xl:gap-4 flex-wrap w-full py-2 xl:py-0">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 flex-wrap">
              <a href="mailto:info@ehackglobaltechnology.com" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@ehackglobaltechnology.com
              </a>
              <span className="hidden sm:inline" style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
              <a href="tel:+919886035330" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91-9886035330
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-4 mt-2 xl:mt-0">
              <span className="hidden xl:inline" style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
              <button
                onClick={openSecurityModal}
                style={{
                  fontWeight: '800',
                  textDecoration: 'underline',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: 'inherit',
                  fontSize: 'inherit'
                }}
              >
                Get a Free Security Assessment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="nav-container !px-4 md:!px-8">
          <Link href="/" className="logo" style={{ flexShrink: 0 }} onClick={closeMobileMenu}>
            <Image
              src="/eHack.png"
              alt="Ehack Group of Technologies"
              width={300}
              height={85}
              className="w-[180px] md:w-[250px] xl:w-[240px] 2xl:w-[300px] h-auto"
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          <ul className={`nav-links ${mobileMenuOpen ? 'active flex flex-col' : 'hidden xl:flex'}`}>
            {/* Security Assessment Dropdown */}
            <li className={`nav-dropdown ${activeDropdown === 'security' ? 'mobile-expanded' : ''}`}>
              <div
                className="nav-link nav-dropdown-trigger nav-capsule w-full flex justify-between xl:justify-start"
                onClick={() => toggleDropdown('security')}
              >
                Security Assessment
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-200 ${activeDropdown === 'security' ? 'rotate-180 xl:rotate-0' : ''}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              <div className="nav-dropdown-menu">
                <div>
                  <ul className="dropdown-list-simple">
                    <li><Link href="/services/web-application-security" onClick={closeMobileMenu}>Web Application Security</Link></li>
                    <li><Link href="/services/mobile-application-security" onClick={closeMobileMenu}>Mobile App Security</Link></li>
                    <li><Link href="/services/api-security" onClick={closeMobileMenu}>API Security Assessment</Link></li>
                    <li><Link href="/services/source-code-review" onClick={closeMobileMenu}>Source Code Review</Link></li>
                    <li><Link href="/services/red-team-assessment" onClick={closeMobileMenu}>Red Team Assessment</Link></li>
                    <li><Link href="/services/infrastructure-security" onClick={closeMobileMenu}>Infrastructure Security</Link></li>
                    <li><Link href="/services/thick-client-security" onClick={closeMobileMenu}>Thick Client Security</Link></li>
                    <li><Link href="/services/firewall-security" onClick={closeMobileMenu}>Firewall Security</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Compliance Audit Dropdown */}
            <li className={`nav-dropdown ${activeDropdown === 'compliance' ? 'mobile-expanded' : ''}`}>
              <div
                className="nav-link nav-dropdown-trigger nav-capsule w-full flex justify-between xl:justify-start"
                onClick={() => toggleDropdown('compliance')}
              >
                Compliance Audit
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-200 ${activeDropdown === 'compliance' ? 'rotate-180 xl:rotate-0' : ''}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              <div className="nav-dropdown-menu">
                <div>
                  <ul className="dropdown-list-simple">
                    <li><Link href="/services/gdpr-consulting" onClick={closeMobileMenu}>GDPR Consulting</Link></li>
                    <li><Link href="/services/pci-dss-compliance" onClick={closeMobileMenu}>PCI DSS Compliance</Link></li>
                    <li><Link href="/services/iso-certification" onClick={closeMobileMenu}>ISO Certification</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Forensics & Malware Dropdown */}
            <li className={`nav-dropdown ${activeDropdown === 'forensics' ? 'mobile-expanded' : ''}`}>
              <div
                className="nav-link nav-dropdown-trigger nav-capsule w-full flex justify-between xl:justify-start"
                onClick={() => toggleDropdown('forensics')}
              >
                Forensics & Malware
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-200 ${activeDropdown === 'forensics' ? 'rotate-180 xl:rotate-0' : ''}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              <div className="nav-dropdown-menu">
                <div>
                  <ul className="dropdown-list-simple">
                    <li><Link href="/services/digital-forensics" onClick={closeMobileMenu}>Digital Forensics</Link></li>
                    <li><Link href="/services/malware-analysis" onClick={closeMobileMenu}>Malware Analysis</Link></li>
                  </ul>
                </div>
              </div>
            </li>
            {/* About eHack Dropdown */}
            <li className={`dropdown-wrapper ${activeDropdown === 'about' ? 'mobile-expanded' : ''}`}>
              <button 
                className="nav-link nav-dropdown-btn w-full flex justify-between xl:justify-start"
                onClick={() => toggleDropdown('about')}
              >
                About eHack
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 xl:rotate-0' : ''}`}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <Link href="/about" className="dropdown-item dropdown-item-main" onClick={closeMobileMenu}>About Us Overview</Link>
                <div className="dropdown-divider"></div>
                <Link href="/about#mission" className="dropdown-item" onClick={closeMobileMenu}>Our Mission</Link>
                <Link href="/about#why-choose-us" className="dropdown-item" onClick={closeMobileMenu}>Why Choose Us</Link>
                <Link href="/about#leadership" className="dropdown-item" onClick={closeMobileMenu}>Leadership</Link>
                <Link href="/about#advisory" className="dropdown-item" onClick={closeMobileMenu}>Advisory Board</Link>
                <button 
                  className="dropdown-item w-full text-left bg-transparent border-none cursor-pointer" 
                  onClick={() => { openSecurityModal(); closeMobileMenu(); }}
                >
                  Contact Us
                </button>
              </div>
            </li>
            <li>
              <Link href="/careers" className="nav-link block py-2 xl:py-0" onClick={closeMobileMenu}>Careers</Link>
            </li>
            <li className="xl:hidden mt-2 border-t pt-4 border-gray-100">
              <button 
                className="nav-link nav-cta flex justify-center w-full bg-transparent border-none cursor-pointer" 
                onClick={() => { openSecurityModal(); closeMobileMenu(); }}
              >
                Get a Quote
              </button>
            </li>
          </ul>

          <button 
            className="nav-cta hidden xl:inline-flex bg-transparent border-none cursor-pointer" 
            style={{ whiteSpace: 'nowrap' }}
            onClick={openSecurityModal}
          >
            Get a Quote
          </button>

          <div
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
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
