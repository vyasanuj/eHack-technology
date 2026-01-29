import Link from 'next/link';
import Image from 'next/image';

import {
  GlobalIcon,
  ZapIcon,
  TrophyIcon,
  ShieldCheckIcon,
  ClipboardCheckIcon,
  HeadsetIcon
} from './components/FeatureIcons';
import TrustedCompanies from './components/TrustedCompanies'; // Import new component
import HeroSlider from './components/HeroSlider';
import CaseStudySection from './components/CaseStudySection';
import IndustriesSection from './components/IndustriesSection';
import ServicesSection from './components/ServicesSection';
import StickySectionNav from './components/StickySectionNav';
import GlobalDefenseSection from './components/GlobalDefenseSection';
import AcademySection from './components/AcademySection';

export default function Home() {
  const features = [
    {
      image: '/images/features/global-expertise.png',
      title: 'Global Expertise',
      description: 'Our team has experience securing enterprises across 20+ countries with diverse industry knowledge.'
    },
    {
      image: '/images/features/fast-turnaround.png',
      title: 'Fast Turnaround',
      description: 'Get detailed reports within 48-72 hours with prioritized vulnerability findings.'
    },
    {
      image: '/images/features/certified-professionals.png',
      title: 'Certified Professionals',
      description: 'CEH, OSCP, CISSP certified experts with 10+ years of experience.'
    },
    {
      image: '/images/features/zero-false-positives.png',
      title: 'Zero False Positives',
      description: 'Every finding is manually verified to ensure actionable insights.'
    },
    {
      image: '/images/features/compliance-ready.png',
      title: 'Compliance Ready',
      description: 'Reports aligned with ISO 27001, PCI DSS, GDPR, and industry standards.'
    },
    {
      image: '/images/features/dedicated-support.png',
      title: 'Dedicated Support',
      description: '24/7 support with free re-testing after remediation.'
    }
  ];

  return (
    <>
      {/* Sticky Section Nav */}
      <StickySectionNav />

      {/* Hero Slider Section */}
      <div id="start">
        <HeroSlider />
      </div>

      {/* Trusted By Section */}
      <TrustedCompanies />

      {/* Services Section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>12+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Enterprise Clients</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Security Experts</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* previously here -- now moved Why Choose Us Section */}


      <div id="industries">
        <IndustriesSection />
      </div>

      {/* Case Studies Section */}
      <div id="case-studies">
        <CaseStudySection />
      </div>

      {/* Global Defense Section */}
      <div id="global-defense">
        <GlobalDefenseSection />
      </div>

      {/* Academy Section */}
      <div id="academy">
        <AcademySection />
      </div>

      {/* Why Choose Us Section */}
      <section id="why-ehack" className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label" style={{
              background: '#D45A1F',
              color: 'white',
              fontSize: '1.1rem',
              padding: '0.75rem 2rem',
              borderRadius: '50px',
              fontWeight: '700',
              marginBottom: '1.5rem'
            }}>Why Ehack</span>
            <h2 className="section-title">Your Trusted <span style={{ color: '#F26C29' }}>Security</span> Partner</h2>
            <p className="section-subtitle">
              We combine cutting-edge tools with expert human analysis to deliver unmatched security insights
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="service-card group" style={{
                padding: '0', // Remove default padding for full-width header
                overflow: 'hidden', // Ensure header stays inside rounded corners
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Full Width Header */}
                <div style={{
                  background: '#F26C29',
                  padding: '1rem 1.5rem', // Reduced padding
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '60px' // Reduced height
                }}>
                  <h3 style={{
                    color: 'white',
                    fontSize: '1.2rem', // Slightly refined size
                    fontWeight: '700',
                    margin: 0,
                    textAlign: 'center',
                    lineHeight: '1.2'
                  }}>{feature.title}</h3>
                </div>

                {/* Content Area */}
                <div className="service-card-content" style={{
                  padding: '1.5rem 1.25rem', // Reduced padding
                  flex: 1, // Fill remaining space
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{
                    color: '#444', // Slightly softer black for professionalism
                    fontSize: '1rem', // Cleaner standard size
                    lineHeight: '1.5',
                    fontWeight: '500',
                    textAlign: 'center',
                    margin: 0
                  }}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section" style={{ background: 'var(--primary-bg)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">Certifications & Partnerships</h2>
            <p className="section-subtitle">
              Our team holds industry-leading certifications ensuring the highest quality of service
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}>
            {[
              { name: 'CEH', image: '/images/certifications/ceh.png' },
              { name: 'OSCP', image: '/images/certifications/oscp.png' },
              { name: 'CISSP', image: '/images/certifications/cissp.png' },
              { name: 'CISA', image: '/images/certifications/cisa.png' },
              { name: 'ISO 27001', image: '/images/certifications/iso27001.png' },
              { name: 'PCI QSA', image: '/images/certifications/iso27001.png' } // Using ISO as placeholder for now
            ].map((cert, i) => (
              <div key={i} className="group relative w-48 h-48 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-full border border-white/20 shadow-lg transition-all duration-500 group-hover:bg-white/10 group-hover:scale-105"></div>
                <div className="relative w-32 h-32 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Secure Your Enterprise?</h2>
          <p>
            Get a comprehensive security assessment from our certified experts.
            Identify vulnerabilities before hackers do.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Schedule Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/about" className="btn btn-white btn-lg">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
