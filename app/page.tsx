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

export default function Home() {
  const services = [
    {
      image: '/images/services/security.png',
      title: 'Web Application Security',
      description: 'Comprehensive testing for web apps against OWASP Top 10 and beyond.',
      href: '/services/web-application-security'
    },
    {
      image: '/images/mobileapp_service_image.png',
      title: 'Mobile App Security',
      description: 'iOS and Android security assessment with source code review.',
      href: '/services/mobile-application-security'
    },
    {
      image: '/images/API_service_image.png',
      title: 'API Security',
      description: 'REST, GraphQL, and SOAP API vulnerability testing.',
      href: '/services/api-security'
    },
    {
      image: '/images/Source Code Review.png',
      title: 'Source Code Review',
      description: 'Manual and automated secure code analysis across 30+ languages.',
      href: '/services/source-code-review'
    },
    {
      image: '/images/Red Team Assessment.png',
      title: 'Red Team Assessment',
      description: 'Real-world attack simulation to test your defenses.',
      href: '/services/red-team-assessment'
    },
    {
      image: '/images/services/general.png',
      title: 'Infrastructure Security',
      description: 'Network, cloud, and Active Directory security assessment.',
      href: '/services/infrastructure-security'
    },
    {
      image: '/images/Thick Client Security.png',
      title: 'Thick Client Security',
      description: 'Desktop application penetration testing and hardening.',
      href: '/services/thick-client-security'
    },
    {
      image: '/images/Firewall Security Assessment.png',
      title: 'Firewall Security',
      description: 'Rule audit, configuration review, and penetration testing.',
      href: '/services/firewall-security'
    },
    {
      image: '/images/services/forensics.png',
      title: 'Digital Forensics',
      description: 'Investigation, evidence collection, and incident response.',
      href: '/services/digital-forensics'
    },
    {
      image: '/images/Malware Analysis and Root Cause Detection.png',
      title: 'Malware Analysis',
      description: 'Threat detection, behavior analysis, and IOC extraction.',
      href: '/services/malware-analysis'
    },
    {
      image: '/images/services/compliance.png',
      title: 'GDPR Consulting',
      description: 'Gap analysis, risk assessment, and compliance support.',
      href: '/services/gdpr-consulting'
    },
    {
      image: '/images/PCI DSS Compliance Audit.png',
      title: 'PCI DSS Compliance',
      description: 'QSA-led audits and certification assistance.',
      href: '/services/pci-dss-compliance'
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
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge animate-fadeInDown">
                🛡️ Trusted by 500+ Enterprises Worldwide
              </div>
              <h1 className="animate-fadeInUp">
                Protect Your Business with <span>Enterprise-Grade</span> Cybersecurity
              </h1>
              <p className="hero-description animate-fadeInUp delay-200">
                We identify vulnerabilities before attackers do. Our expert team delivers comprehensive
                security assessments, penetration testing, and compliance solutions to safeguard your
                digital assets.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }} className="animate-fadeInUp delay-300">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Get Free Assessment
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/services/web-application-security" className="btn btn-secondary btn-lg">
                  View Services
                </Link>
              </div>
              <div className="hero-stats animate-fadeInUp delay-400">
                <div className="hero-stat-item">
                  <h3>500+</h3>
                  <p>Clients Secured</p>
                </div>
                <div className="hero-stat-item">
                  <h3>10K+</h3>
                  <p>Vulnerabilities Found</p>
                </div>
                <div className="hero-stat-item">
                  <h3>99%</h3>
                  <p>Client Retention</p>
                </div>
              </div>
            </div>
            <div className="hero-form-card animate-scaleIn delay-300">
              <LeadForm
                title="Request a Free Consultation"
                subtitle="Get expert security advice within 24 hours"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Expertise</span>
            <h2 className="section-title">Comprehensive Security Solutions</h2>
            <p className="section-subtitle">
              From web applications to infrastructure, we cover every aspect of your security needs
            </p>
          </div>
          <div className="services-grid">
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
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
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
            <span className="section-label">Why Ehack</span>
            <h2 className="section-title">Your Trusted Security Partner</h2>
            <p className="section-subtitle">
              We combine cutting-edge tools with expert human analysis to deliver unmatched security insights
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="service-card group">
                <div className="service-card-image">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="service-card-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Industries We Serve</span>
            <h2 className="section-title">Trusted Across Industries</h2>
            <p className="section-subtitle">
              From fintech to healthcare, we secure organizations across all sectors
            </p>
          </div>
          <div className="features-grid">
            {[
              {
                image: '/images/industries/banking.png',
                name: 'Banking & Finance',
                description: 'Securing digital transactions and financial data.'
              },
              {
                image: '/images/industries/healthcare.png',
                name: 'Healthcare',
                description: 'Protecting patient records and medical IoT devices.'
              },
              {
                image: '/images/industries/ecommerce.png',
                name: 'E-Commerce',
                description: 'Safeguarding online stores and customer payments.'
              },
              {
                image: '/images/industries/government.png',
                name: 'Government',
                description: 'Defending critical infrastructure and citizen data.'
              },
              {
                image: '/images/industries/education.png',
                name: 'Education',
                description: 'Securing learning platforms and student information.'
              },
              {
                image: '/images/industries/manufacturing.png',
                name: 'Manufacturing',
                description: 'Protecting smart factories and industrial control systems.'
              }
            ].map((industry, index) => (
              <div key={index} className="service-card group">
                <div className="service-card-image" style={{ height: '300px' }}>
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="service-card-content">
                  <h3>{industry.name}</h3>
                  <p>{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
