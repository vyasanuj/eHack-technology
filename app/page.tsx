import Link from 'next/link';
import Image from 'next/image';
import LeadForm from './components/LeadForm';
import {
  GlobalIcon,
  ZapIcon,
  TrophyIcon,
  ShieldCheckIcon,
  ClipboardCheckIcon,
  HeadsetIcon
} from './components/FeatureIcons';
import TrustedCompanies from './components/TrustedCompanies'; // Import new component
import CaseStudySection from './components/CaseStudySection';
import IndustriesSection from './components/IndustriesSection';

export default function Home() {
  const services = [
    {
      image: '/images/services/security.png',
      title: 'Web Application Security',
      description: 'Comprehensive testing for web apps against OWASP Top 10 and beyond.',
      href: '/services/web-application-security',
      badges: ['OWASP Top 10', 'Penetration Testing']
    },
    {
      image: '/images/mobileapp_service_image.png',
      title: 'Mobile App Security',
      description: 'iOS and Android security assessment with source code review.',
      href: '/services/mobile-application-security',
      badges: ['iOS & Android', 'Source Code Analysis']
    },
    {
      image: '/images/API_service_image.png',
      title: 'API Security',
      description: 'REST, GraphQL, and SOAP API vulnerability testing.',
      href: '/services/api-security',
      badges: ['REST & GraphQL', 'Logic Flaws']
    },
    {
      image: '/images/Source Code Review.png',
      title: 'Source Code Review',
      description: 'Manual and automated secure code analysis across 30+ languages.',
      href: '/services/source-code-review',
      badges: ['SAST', 'DAST', '30+ Languages']
    },
    {
      image: '/images/Red Team Assessment.png',
      title: 'Red Team Assessment',
      description: 'Real-world attack simulation to test your defenses.',
      href: '/services/red-team-assessment',
      badges: ['Adversary Simulation', 'Exfiltration']
    },
    {
      image: '/images/services/general.png',
      title: 'Infrastructure Security',
      description: 'Network, cloud, and Active Directory security assessment.',
      href: '/services/infrastructure-security',
      badges: ['Network', 'Cloud', 'Active Directory']
    },
    {
      image: '/images/Thick Client Security.png',
      title: 'Thick Client Security',
      description: 'Desktop application penetration testing and hardening.',
      href: '/services/thick-client-security',
      badges: ['Binary Analysis', 'Memory Corruptions']
    },
    {
      image: '/images/Firewall Security Assessment.png',
      title: 'Firewall Security',
      description: 'Rule audit, configuration review, and penetration testing.',
      href: '/services/firewall-security',
      badges: ['Rule Audit', 'Egress Filtering']
    },
    {
      image: '/images/services/forensics.png',
      title: 'Digital Forensics',
      description: 'Investigation, evidence collection, and incident response.',
      href: '/services/digital-forensics',
      badges: ['Incident Response', 'Evidence Artifacts']
    },
    {
      image: '/images/Malware Analysis and Root Cause Detection.png',
      title: 'Malware Analysis',
      description: 'Threat detection, behavior analysis, and IOC extraction.',
      href: '/services/malware-analysis',
      badges: ['Reverse Engineering', 'IOCs']
    },
    {
      image: '/images/services/compliance.png',
      title: 'GDPR Consulting',
      description: 'Gap analysis, risk assessment, and compliance support.',
      href: '/services/gdpr-consulting',
      badges: ['Gap Analysis', 'Data Privacy']
    },
    {
      image: '/images/PCI DSS Compliance Audit.png',
      title: 'PCI DSS Compliance',
      description: 'QSA-led audits and certification assistance.',
      href: '/services/pci-dss-compliance',
      badges: ['QSA Audit', 'Certification']
    }
  ];

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
      {/* Modern Hero Section */}
      <section className="hero" style={{
        padding: '3rem 0 4rem',
        background: 'linear-gradient(135deg, #FFF5F2 0%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Graphic Removed */}

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Left Content */}
            <div className="hero-content">
              <div className="animate-fadeInDown" style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: '#F26C29', // Brand Orange
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 6px rgba(242, 108, 41, 0.2)'
              }}>
                <span style={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  letterSpacing: '0.02em'
                }}>
                  Trusted by 500+ Enterprises Worldwide
                </span>
              </div>

              <h1 className="animate-fadeInUp" style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                color: '#1a1a1a',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em'
              }}>
                Protect Your Business with <span style={{ color: '#F26C29' }}>Enterprise-Grade</span> Cybersecurity
              </h1>

              <p className="hero-description animate-fadeInUp delay-200" style={{
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: '#555',
                marginBottom: '2.5rem',
                maxWidth: '90%'
              }}>
                We identify vulnerabilities before attackers do. Our expert team delivers comprehensive security assessments to safeguard your digital assets.
              </p>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }} className="animate-fadeInUp delay-300">
                <Link href="/contact" className="btn btn-primary btn-lg" style={{
                  padding: '1rem 2.5rem',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  borderRadius: '12px',
                  boxShadow: '0 10px 20px rgba(242, 108, 41, 0.25)',
                  transition: 'transform 0.2s ease',
                  border: 'none'
                }}>
                  Get Free Assessment
                </Link>
                <Link href="/services/web-application-security" className="btn btn-white btn-lg" style={{
                  padding: '1rem 2.5rem',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  borderRadius: '12px',
                  border: '1px solid #e5e5e5',
                  background: 'white',
                  color: '#1a1a1a'
                }}>
                  View Services
                </Link>
              </div>

              <div className="hero-stats animate-fadeInUp delay-400" style={{
                display: 'flex',
                gap: '3rem',
                borderTop: '1px solid rgba(0,0,0,0.05)',
                paddingTop: '2rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '0.25rem' }}>500+</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', fontWeight: '500' }}>Clients Secured</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '0.25rem' }}>10K+</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', fontWeight: '500' }}>Vulnerabilities Found</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '0.25rem' }}>99%</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', fontWeight: '500' }}>Client Retention</p>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image & Form Combined */}
            <div className="hero-right-column animate-scaleIn delay-300" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '1rem'
            }}>
              {/* Unified Card Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '600px', // Increased from 450px
                borderRadius: '20px',
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                background: 'white'
              }}>
                {/* Image Part */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '320px', // Increased from 240px
                }}>
                  <Image
                    src="/service-web-hero.png"
                    alt="Cybersecurity Assessment"
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center top'
                    }}
                    priority
                  />
                </div>

                {/* Form Part - Attached below */}
                <div>
                  <LeadForm
                    title="Get Started"
                    subtitle="Free Expert Consultation"
                    serviceName="General Inquiry"
                    compact={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedCompanies />

      {/* Services Section */}
      <section className="section" style={{ padding: '2rem 0 4rem' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-label" style={{
              background: '#F26C29',
              color: 'white',
              fontSize: '1rem',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              display: 'inline-block',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>Our Expertise</span>
            <h2 className="section-title">Comprehensive Security <span style={{ color: '#F26C29' }}>Solutions</span></h2>
            <p className="section-subtitle">
              From web applications to infrastructure, we cover every aspect of your security needs
            </p>
          </div>
          <div className="services-grid" style={{ marginTop: '0' }}>
            {services.map((service, index) => (
              <Link href={service.href} key={index} className="service-card group">
                <div className="service-card-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="service-card-content" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>{service.title}</h3>
                  <p style={{ marginBottom: '1.5rem' }}>{service.description}</p>

                  {/* Service Badges - Pushed to bottom */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto', marginBottom: '1.5rem' }}>
                    {service.badges?.map((badge, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.7rem',
                        padding: '0.3rem 0.8rem',
                        background: 'rgba(242, 108, 41, 0.08)',
                        color: '#F26C29',
                        borderRadius: '6px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        border: '1px solid rgba(242, 108, 41, 0.15)'
                      }}>
                        {badge}
                      </span>
                    ))}
                  </div>

                  <span className="arrow">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      {/* Why Choose Us Section */}
      <section className="section section-light">
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

      <IndustriesSection />

      {/* Case Studies Section */}
      <CaseStudySection />

      {/* Certifications Section */}
      <section className="section" style={{ background: 'var(--primary-bg)' }}>
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
