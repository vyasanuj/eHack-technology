import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '../components/LeadForm';

export const metadata: Metadata = {
    title: 'About Us | Ehack Technology - Enterprise Cybersecurity Experts',
    description: 'Learn about Ehack Technology - global leaders in cybersecurity solutions, digital forensics, and compliance audits. Empowering enterprises worldwide.',
};

export default function AboutPage() {
    const philosophy = [
        { letter: 'E', title: 'Emerging Technologies', description: 'Focus on Cybersecurity, AI, Robotics, and Data Science' },
        { letter: 'H', title: 'High-Impact Learning', description: 'Education, training, and skill empowerment' },
        { letter: 'A', title: 'Analytics & AI', description: 'Data-driven insights and AI-powered innovation' },
        { letter: 'C', title: 'Cybersecurity & Corporate', description: 'VAPT, Digital Forensics, IT Audits' },
        { letter: 'K', title: 'Knowledge & Global Reach', description: 'Empowering enterprises worldwide' }
    ];

    const values = [
        { icon: '🎯', title: 'Innovation-Driven', description: 'Programs and solutions built on the latest technologies' },
        { icon: '🌍', title: 'Global Presence', description: 'Training and services with a worldwide footprint' },
        { icon: '✅', title: 'Trusted & Credible', description: 'Empowering both learners and corporates with reliability' },
        { icon: '🏢', title: 'Holistic Ecosystem', description: 'Bridging skills, services, and knowledge under one roof' }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="service-hero" style={{ padding: '5rem 0' }}>
                <div className="container">
                    <span className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--primary-light)' }}>
                        About Ehack
                    </span>
                    <h1 style={{ maxWidth: '900px', margin: '1rem auto' }}>
                        Global Leaders in Technology Education &amp; Corporate Solutions
                    </h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Empowering the World with Emerging Technologies &amp; High-Impact Learning
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="section-label">Our Mission</span>
                            <h2 className="section-title" style={{ textAlign: 'left' }}>
                                Bridging Technology with Innovation
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                At Ehack, we are committed to bridging emerging technologies with high-impact learning
                                and corporate innovation. Our mission is to empower learners, professionals, and
                                enterprises with the skills, knowledge, and tools they need to thrive in a rapidly
                                evolving digital world.
                            </p>
                            <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', lineHeight: '1.8' }}>
                                We deliver enterprise-grade services including VAPT (Vulnerability Assessment &amp;
                                Penetration Testing), Digital Forensics &amp; Incident Response, IT Audits &amp; Compliance,
                                and enterprise solutions for cybersecurity, analytics, and digital transformation.
                            </p>
                        </div>
                        <div style={{
                            background: 'linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%)',
                            borderRadius: 'var(--radius-2xl)',
                            padding: '3rem',
                            color: 'white',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛡️</div>
                            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Our Tagline</h3>
                            <p style={{ color: 'var(--primary-light)', fontSize: '1.25rem', fontWeight: '600', fontStyle: 'italic' }}>
                                &quot;Ehack – Empowering Skills, Securing Enterprises, Enabling Innovation&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* E-HACK Philosophy */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Our Philosophy</span>
                        <h2 className="section-title">The E-HACK Framework</h2>
                        <p className="section-subtitle">
                            A holistic ecosystem where technology meets learning, integrated with enterprise solutions
                        </p>
                    </div>
                    <div className="about-philosophy">
                        {philosophy.map((item, index) => (
                            <div key={index} className="philosophy-item">
                                <div className="philosophy-letter">{item.letter}</div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">What We Do</span>
                        <h2 className="section-title">Our Core Offerings</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                        {/* Learning & Training */}
                        <div className="card" style={{ padding: '2.5rem' }}>
                            <div style={{
                                width: '70px',
                                height: '70px',
                                background: 'var(--primary-bg)',
                                borderRadius: 'var(--radius-xl)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                marginBottom: '1.5rem'
                            }}>
                                🎓
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Learning &amp; Training</h3>
                            <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                                We provide industry-aligned programs that equip learners with future-ready skills.
                            </p>
                            <ul className="check-list">
                                <li>
                                    <span className="icon">✓</span>
                                    <span>Advanced programs in Cybersecurity, Data Science, AI, Robotics</span>
                                </li>
                                <li>
                                    <span className="icon">✓</span>
                                    <span>Globally recognized certifications and hands-on training</span>
                                </li>
                                <li>
                                    <span className="icon">✓</span>
                                    <span>Flexible online and offline live classes</span>
                                </li>
                                <li>
                                    <span className="icon">✓</span>
                                    <span>Focused on skill development and employability</span>
                                </li>
                            </ul>
                        </div>

                        {/* Corporate Services */}
                        <div className="card" style={{ padding: '2.5rem' }}>
                            <div style={{
                                width: '70px',
                                height: '70px',
                                background: 'var(--primary-bg)',
                                borderRadius: 'var(--radius-xl)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                marginBottom: '1.5rem'
                            }}>
                                🏢
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Corporate &amp; Technology Services</h3>
                            <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                                Through Ehack Global Technology, we deliver enterprise-grade security services.
                            </p>
                            <ul className="check-list">
                                <li>
                                    <span className="icon">✓</span>
                                    <span>VAPT (Vulnerability Assessment &amp; Penetration Testing)</span>
                                </li>
                                <li>
                                    <span className="icon">✓</span>
                                    <span>Digital Forensics &amp; Incident Response</span>
                                </li>
                                <li>
                                    <span className="icon">✓</span>
                                    <span>IT Audits &amp; Compliance</span>
                                </li>
                                <li>
                                    <span className="icon">✓</span>
                                    <span>Enterprise solutions for cybersecurity &amp; digital transformation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--primary-light)' }}>Why Choose Us</span>
                        <h2 className="section-title" style={{ color: 'white' }}>What Sets Ehack Apart</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                        {values.map((value, index) => (
                            <div key={index} style={{
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: 'var(--radius-xl)',
                                padding: '2rem',
                                textAlign: 'center',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                                <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.125rem' }}>{value.title}</h4>
                                <p style={{ color: 'var(--gray-300)', fontSize: '0.9375rem' }}>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="section-label">Get Started</span>
                            <h2 className="section-title" style={{ textAlign: 'left' }}>
                                Ready to Secure Your Enterprise?
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '2rem' }}>
                                Partner with Ehack Technology for world-class cybersecurity solutions. Our team of
                                certified experts is ready to help you identify vulnerabilities, achieve compliance,
                                and protect your digital assets.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Link href="/contact" className="btn btn-primary btn-lg">
                                    Contact Us
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link href="/services/web-application-security" className="btn btn-secondary btn-lg">
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                        <div>
                            <LeadForm
                                title="Get in Touch"
                                subtitle="Tell us about your security needs"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
