'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useModal } from './context/ModalContext';
import { ArrowRight } from 'lucide-react';
import styles from './components/AcademySection.module.css';
import bentoStyles from './components/CertificateBento.module.css';

const certificates = [
  '/images/certificates/ceh-certificate.jpg',
  '/images/certificates/cert-chfi.jpg',
  '/images/certificates/cert-cnd.jpg',
  '/images/certificates/cert-cpent.jpg',
  '/images/certificates/cert-cscu.jpg',
  '/images/certificates/digital-marketing-certificate.jpeg',
  '/images/certificates/graduate-certificate.jpg',
  '/images/certificates/masterclass-1.jpeg',
];

const uniLogos = [
  '/images/csr-uni-logo/Christ-University-Bangalore-Pune.jpg',
  '/images/csr-uni-logo/ms-ramaiah-college-of-engineering.png',
  '/images/csr-uni-logo/Nitte Meenakshi Institute (NMIT).jpg',
  '/images/csr-uni-logo/PES Institute of Technology.jpg',
  '/images/csr-uni-logo/REVA University.jpg',
  '/images/csr-uni-logo/Sambhram Institute.jpg',
  '/images/csr-uni-logo/Sir M. Visvesvaraya Institute.jpg',
];

import {
  GlobalIcon,
  ZapIcon,
  TrophyIcon,
  ShieldCheckIcon,
  ClipboardCheckIcon,
  HeadsetIcon
} from './components/FeatureIcons';
import TrustedCompanies from './components/TrustedCompanies';
import HeroSlider from './components/HeroSlider';
import CaseStudySection from './components/CaseStudySection';
import IndustriesSection from './components/IndustriesSection';
import ServicesSection from './components/ServicesSection';
import StickySectionNav from './components/StickySectionNav';
import GlobalDefenseSection from './components/GlobalDefenseSection';
import AcademySection from './components/AcademySection';

export default function Home() {
  const { openSecurityModal } = useModal();
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
      <StickySectionNav />

      <div id="overview">
        <HeroSlider />
      </div>

      <div id="partnership">
        <TrustedCompanies />
      </div>

      <div id="services">
        <ServicesSection />
      </div>

      <section className="stats-section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>12+</h3>
              <p style={{ color: '#1f2937', fontSize: '1.1rem', marginTop: '0.5rem', background: '#fff5f0', display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '50px', fontWeight: '600' }}>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p style={{ color: '#1f2937', fontSize: '1.1rem', marginTop: '0.5rem', background: '#fff5f0', display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '50px', fontWeight: '600' }}>Enterprise Clients</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p style={{ color: '#1f2937', fontSize: '1.1rem', marginTop: '0.5rem', background: '#fff5f0', display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '50px', fontWeight: '600' }}>Security Experts</p>
            </div>
          </div>
        </div>
      </section>

      <div id="industries">
        <IndustriesSection />
      </div>

      <div id="case-studies">
        <CaseStudySection />
      </div>

      <div id="global-reach">
        <GlobalDefenseSection />
      </div>

      <div id="real-world-defense">
        <AcademySection />
      </div>

      <section id="why-ehack" className="section section-light" style={{ padding: '2.5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label" style={{
              background: '#D45A1F',
              color: 'white',
              fontSize: '1.1rem',
              padding: '0.75rem 2rem',
              borderRadius: '50px',
              fontWeight: '700',
              marginBottom: '1.5rem',

            }}>Why Ehack</span>
            <h2 className="section-title">Your Trusted <span style={{ color: '#ff6b00' }}>Security</span> Partner</h2>
            <p className="section-subtitle" style={{ color: '#1f2937' }}>
              We combine cutting-edge tools with expert human analysis to deliver unmatched security insights
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="service-card group" style={{
                padding: '0',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  background: '#F26C29',
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '60px'
                }}>
                  <h3 style={{
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    margin: 0,
                    textAlign: 'center',
                    lineHeight: '1.2'
                  }}>{feature.title}</h3>
                </div>
                <div className="service-card-content" style={{
                  padding: '1.5rem 1.25rem',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{
                    color: '#1f2937',
                    fontSize: '1rem',
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

      {/* Certifications & Partnerships Section */}
      {/* <section className={bentoStyles.sectionWrapper}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              background: '#F26C29',
              color: 'white',
              fontSize: '1.1rem',
              padding: '0.75rem 2rem',
              borderRadius: '50px',
              fontWeight: '700',
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}>
              Certifications & Partnerships
            </span>
            <h2 className="section-title">Global Recognition & <span style={{ color: '#F26C29' }}>Academic Excellence</span></h2>
          </div>

          <div className={bentoStyles.bentoContainer}> */}
      {/* Column 1: Industry Certifications */}
      {/* <div className={bentoStyles.bentoCard}>
              <div className={bentoStyles.marqueeColumn}>
                <div className={bentoStyles.marqueeTrack}>
                  {[...certificates, ...certificates].map((img, i) => (
                    <div key={i} className={bentoStyles.imageWrapper}>
                      <Image src={img} alt="Certificate" fill className="object-contain" />
                    </div>
                  ))}
                </div>
              </div>
              <div className={bentoStyles.cardFloatingLabel}>
                <h4>Professional Certifications</h4>
              </div>
            </div> */}

      {/* Column 2: Educational Programs */}
      {/* <div className={bentoStyles.bentoCard}>
              <div className={bentoStyles.marqueeColumn}>
                <div className={`${bentoStyles.marqueeTrack} ${bentoStyles.marqueeTrackReverse}`}>
                  {[...uniLogos, ...uniLogos].map((img, i) => (
                    <div key={i} className={bentoStyles.imageWrapper}>
                      <Image src={img} alt="University Logo" fill className="object-contain" />
                    </div>
                  ))}
                </div>
              </div>
              <div className={bentoStyles.cardFloatingLabel}>
                <h4>Academic Alliances</h4>
              </div>
            </div> */}

      {/* Column 3: Advanced Training */}
      {/* <div className={bentoStyles.bentoCard}>
              <div className={bentoStyles.marqueeColumn}>
                <div className={bentoStyles.marqueeTrack}>
                  {['/images/certificates/masterclass-1.jpeg', '/images/certificates/masterclass-2.jpeg', '/images/certificates/masterclass-3.jpeg', '/images/certificates/masters-certificate.jpg', '/images/certificates/robotics-image.jpeg', '/images/certificates/ceh-certificate.jpg'].map((img, i) => (
                    <div key={i} className={bentoStyles.imageWrapper}>
                      <Image src={img} alt="Advanced Training" fill className="object-contain" />
                    </div>
                  ))}
                  {['/images/certificates/masterclass-1.jpeg', '/images/certificates/masterclass-2.jpeg', '/images/certificates/masterclass-3.jpeg', '/images/certificates/masters-certificate.jpg', '/images/certificates/robotics-image.jpeg', '/images/certificates/ceh-certificate.jpg'].map((img, i) => (
                    <div key={i + 10} className={bentoStyles.imageWrapper}>
                      <Image src={img} alt="Advanced Training" fill className="object-contain" />
                    </div>
                  ))}
                </div>
              </div>
              <div className={bentoStyles.cardFloatingLabel}>
                <h4>Strategic Partnerships</h4>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Ribbons Section */}
      <section id="social-impact" style={{ borderBottom: '1px solid #ff6b00', padding: '2rem 0', borderTop: '1px solid #ff6b00', marginTop: '2rem' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title">Social Impact & <span style={{ color: '#F26C29' }}>Strategic Growth</span></h2>
            <p className="section-subtitle">
              Driving positive change through cyber literacy while expanding our global footprint through strategic partnerships.
            </p>
          </div>
          <div className={styles.ribbonsGrid}>
            <div className={styles.ribbonGridItem}>
              <div className={`${styles.ribbonTitleStrip} ${styles.csrTitleStrip}`}>Corporate Social Responsibility</div>
              <Link href="/csr" className={`${styles.ribbonCard} ${styles.csrRibbon}`}>
                <div className={styles.ribbonImageWrapper}>
                  <div className={styles.floatingImage}>
                    <img
                      src="/images/csr-banner-image.jpg"
                      alt="eHack CSR Initiatives"
                      className={styles.ribbonImage}
                    />
                  </div>
                </div>
                <div className={styles.ribbonContent}>
                  <span className={styles.ribbonBadge}>Cyber Literacy | AI Awareness</span>
                  <h3 className={styles.ribbonTitle}>Empowering Society Through Cybersecurity, Employability & Emerging Technologies</h3>
                  <p className={styles.ribbonText}>Join our mission to bridge the skill gap and build a safer digital future for everyone.</p>
                  <div className={styles.ribbonAction}>
                    Explore CSR Initiatives <ArrowRight size={20} />
                  </div>
                </div>
                <div className={styles.ribbonPattern}></div>
              </Link>
            </div>

            <div className={styles.ribbonGridItem}>
              <div className={`${styles.ribbonTitleStrip} ${styles.franchiseTitleStrip}`}>Franchise Opportunities</div>
              <Link href="/franchise" className={`${styles.ribbonCard} ${styles.franchiseRibbon}`}>
                <div className={styles.ribbonImageWrapper}>
                  <div className={styles.floatingImage}>
                    <img
                      src="/images/franchise-popup-image.jpg"
                      alt="Franchise Laboratory"
                      className={styles.ribbonImage}
                    />
                  </div>
                </div>
                <div className={styles.ribbonContent}>
                  <span className={styles.ribbonBadge}>Collaborative Growth</span>
                  <h3 className={styles.ribbonTitle}>Build Your Educational Empire with eHack Global Technology Franchise</h3>
                  <p className={styles.ribbonText}>Build a thriving educational venture with India's premier cybersecurity global technology firm.</p>
                  <div className={styles.ribbonAction}>
                    Start Your Franchise <ArrowRight size={20} />
                  </div>
                </div>
                <div className={styles.ribbonPattern}></div>
              </Link>
            </div>
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
            <button
              onClick={openSecurityModal} // Assuming openSecurityModal is defined from useModal()
              className="btn btn-primary btn-lg bg-transparent border-none cursor-pointer"
            >
              Contact Us Now <ArrowRight size={16} />
            </button>
            <Link href="/about" className="btn btn-white btn-lg">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
