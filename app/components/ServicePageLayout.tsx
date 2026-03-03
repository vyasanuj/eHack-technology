"use client";

import type { ReactNode } from 'react';
import Link from 'next/link';
import InquiryForm from './InquiryForm';
import ServiceOperationsPanel from './ServiceOperationsPanel';
import type { Capability, RelatedService, Benefit } from '../data/services';

interface ServicePageLayoutProps {
    title: string;
    description: string;
    whatIs: string;
    features: Capability[];
    whatWeCover: string[];
    whyAssessment: string;
    benefits: Benefit[];
    whyChooseUs: string;
    relatedServices?: RelatedService[];
    serviceName: string;
    children?: ReactNode;
    heroImage?: string;
}

export default function ServicePageLayout({
    title,
    description,
    whatIs,
    features,
    whatWeCover,
    whyAssessment,
    benefits,
    whyChooseUs,
    relatedServices,
    serviceName,
    heroImage
}: ServicePageLayoutProps) {
    return (
        <main>
            {/* Synchronized Hero Section */}
            <section className="hero-section" id="overview">
                <div className="hero-background">
                    <div className="hero-overlay"></div>
                    <div
                        className="hero-image"
                        style={{
                            backgroundImage: heroImage ? `url('${heroImage}')` : undefined
                        }}
                    />
                </div>
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-capsule-badge">
                            Premium Security Service
                        </div>

                        <h1 className="hero-title animate-fadeInUp">
                            {(() => {
                                const words = title.split(' ');
                                if (words.length > 0) {
                                    return (
                                        <>
                                            <span className="text-accent">{words[0]}</span> {words.slice(1).join(' ')}
                                        </>
                                    );
                                }
                                return title;
                            })()}
                        </h1>

                        <p className="hero-description animate-fadeInUp delay-100">
                            {description}
                        </p>

                        <ul className="hero-features-list animate-fadeInUp delay-200">
                            {features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="hero-feature-item">
                                    <span className="check-icon">✓</span>
                                    <span>{feature.title}</span>
                                </li>
                            ))}
                        </ul>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link href="#contact" className="btn btn-primary btn-lg">
                                Get Started
                            </Link>
                            <Link href="#details" className="btn btn-white btn-lg" style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                                View Details
                            </Link>
                        </div>
                    </div>

                    <InquiryForm
                        courseName={title}
                        courseCode={serviceName}
                        variant="hero"
                        title="Speak to an Expert"
                        subtitle="Get a free consultation today"
                    />
                </div>
            </section>

            {/* Unified Overview & Operations Panel Section */}
            <section className="service-overview-sec" id="details" style={{ padding: '6rem 0', background: '#fff', borderTop: '1px solid #ff6b00' }}>
                <div className="container">
                    <div style={{
                        padding: '3rem',
                        background: '#FFFFFF',
                        borderRadius: '24px',
                        border: '2px solid rgba(242, 108, 41, 0.2)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                        position: 'relative'
                    }}>
                        {/* Shared Decorative Orange Accent */}
                        <div style={{
                            position: 'absolute',
                            top: '-2px',
                            left: '40px',
                            right: '40px',
                            height: '4px',
                            background: 'var(--primary)',
                            borderRadius: '0 0 4px 4px'
                        }}></div>

                        <div className="service-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: '1.7fr 1.3fr',
                            gap: '4rem',
                            alignItems: 'stretch'
                        }}>

                            {/* Left Column: Overview Content */}
                            <div style={{ alignSelf: 'start' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '2px' }}></div>
                                    <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--gray-900)' }}>
                                        What is {title}?
                                    </h2>
                                </div>
                                <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', lineHeight: '1.9', margin: 0 }}>
                                    {whatIs}
                                </p>
                            </div>

                            {/* Right Column: Interactive Operations Panel */}
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--gray-900)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Live Operations
                                </h3>
                                <div style={{ flex: 1 }}>
                                    <ServiceOperationsPanel serviceName={serviceName} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional contact info below the unified box if needed */}
                    <div style={{
                        marginTop: '3rem',
                        padding: '2rem',
                        background: 'var(--primary-bg)',
                        borderRadius: '20px',
                        border: '1px solid rgba(242, 108, 41, 0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h4 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--primary)' }}>Need more info?</h4>
                            <p style={{ fontSize: '1.2rem', color: 'var(--gray-600)', margin: 0, lineHeight: '1.6' }}>Our security architects are available for a deep dive into your requirements.</p>
                        </div>
                        <a href="tel:+919886035330" className="btn btn-primary btn-lg" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Consult with Expert
                        </a>
                    </div>
                </div>
            </section>

            {/* Core Capabilities Section (Auto-scrolling Marquee) */}
            <section style={{ padding: '3rem 0', background: 'var(--gray-50)', overflow: 'hidden', borderTop: '1px solid #ff6b00' }}>
                <div className="container" style={{ marginBottom: '4rem' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div className="hero-capsule-badge" style={{ marginBottom: '1rem' }}>Features</div>
                        <h2 className="section-title">Core <span style={{ color: 'var(--primary)' }}>Capabilities</span></h2>
                        <p style={{ color: 'var(--gray-600)', maxWidth: '700px', margin: '1rem auto 0' }}>
                            We provide comprehensive security solutions tailored to your unique infrastructure and business needs.
                        </p>
                    </div>
                </div>

                <div className="marquee-container" style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    overflow: 'hidden'
                }}>
                    <div className="marquee-track" style={{
                        display: 'flex',
                        gap: '2.5rem',
                        width: 'max-content',
                        padding: '1rem 0 3rem'
                    }}>
                        {/* Duplicate the list twice for seamless looping */}
                        {[...features, ...features, ...features].map((item, index) => (
                            <div key={index} className="feature-card-premium" style={{
                                background: '#fff',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid #ff6b00',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                width: '320px',
                                flexShrink: 0
                            }}>
                                {/* Feature Image */}
                                <div style={{
                                    width: '100%',
                                    height: '180px',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        className="feature-img"
                                    />
                                </div>

                                {/* Content */}
                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{
                                        fontSize: '1.2rem',
                                        fontWeight: '700',
                                        color: 'var(--gray-900)',
                                        marginBottom: '0.75rem'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <div style={{ width: '40px', height: '3px', background: 'var(--primary)', borderRadius: '2px', marginBottom: '1rem' }}></div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', lineHeight: '1.6', margin: 0 }}>
                                        Professional {item.title.toLowerCase()} services tailored for your specific environment and business requirements.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <style jsx>{`
                        .marquee-track {
                            animation: scroll 40s linear infinite;
                        }

                        .marquee-container:hover .marquee-track {
                            animation-play-state: paused;
                        }

                        @keyframes scroll {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(calc(-320px * ${features.length} - 2.5rem * ${features.length}));
                            }
                        }

                        .feature-card-premium:hover {
                            transform: translateY(-10px);
                            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                            border-color: rgba(242, 108, 41, 0.2);
                        }
                        
                        .feature-card-premium:hover .feature-img {
                            transform: scale(1.1);
                        }

                        /* Ensure smooth motion on all browsers */
                        .marquee-track {
                            will-change: transform;
                        }
                    `}</style>
                </div>
            </section>

            {/* Vulnerability Coverage Section (Full-width) */}
            <section style={{ padding: '3rem 0', background: '#fff', borderTop: '1px solid #ff6b00' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="hero-capsule-badge" style={{ marginBottom: '1rem' }}>Detection</div>
                        <h2 className="section-title">Vulnerability <span style={{ color: 'var(--primary)' }}>Coverage</span></h2>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.25rem'
                    }}>
                        {whatWeCover.map((item, index) => {
                            // Helper to find a suitable icon based on common tech keywords
                            const lowerItem = item.toLowerCase();
                            let iconUrl = '';

                            if (lowerItem.includes('api') || lowerItem.includes('rest') || lowerItem.includes('soap') || lowerItem.includes('graphql')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg';
                            else if (lowerItem.includes('sql') || lowerItem.includes('database')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg';
                            else if (lowerItem.includes('xml')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg';
                            else if (lowerItem.includes('java') && !lowerItem.includes('javascript')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg';
                            else if (lowerItem.includes('javascript') || lowerItem.includes('xss') || lowerItem.includes('cross-site')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
                            else if (lowerItem.includes('python')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg';
                            else if (lowerItem.includes('node')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg';
                            else if (lowerItem.includes('php')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg';
                            else if (lowerItem.includes('c++') || lowerItem.includes('c#')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg';
                            else if (lowerItem.includes('swift') || lowerItem.includes('ios') || lowerItem.includes('apple')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg';
                            else if (lowerItem.includes('kotlin') || lowerItem.includes('android')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg';
                            else if (lowerItem.includes('go')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg';
                            else if (lowerItem.includes('ruby')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg';
                            else if (lowerItem.includes('aws') || lowerItem.includes('cloud')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg';
                            else if (lowerItem.includes('azure')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg';
                            else if (lowerItem.includes('windows') || lowerItem.includes('active directory') || lowerItem.includes('ldap')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg';
                            else if (lowerItem.includes('linux') || lowerItem.includes('os')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg';
                            else if (lowerItem.includes('docker') || lowerItem.includes('container') || lowerItem.includes('image')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg';
                            else if (lowerItem.includes('kubernetes')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg';
                            else if (lowerItem.includes('react')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
                            else if (lowerItem.includes('angular')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg';
                            else if (lowerItem.includes('vue')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg';
                            else if (lowerItem.includes('auth') || lowerItem.includes('oauth') || lowerItem.includes('jwt') || lowerItem.includes('password') || lowerItem.includes('credential')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/auth0/auth0-original.svg';
                            else if (lowerItem.includes('network') || lowerItem.includes('ssrf') || lowerItem.includes('dns') || lowerItem.includes('wireless') || lowerItem.includes('communication')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg';
                            else if (lowerItem.includes('log') || lowerItem.includes('monitor')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg';
                            else if (lowerItem.includes('data') || lowerItem.includes('exposure') || lowerItem.includes('storage') || lowerItem.includes('memory')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg';
                            else if (lowerItem.includes('config')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg';
                            else if (lowerItem.includes('logic') || lowerItem.includes('business')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
                            else if (lowerItem.includes('injection') || lowerItem.includes('command') || lowerItem.includes('script')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg';
                            else if (lowerItem.includes('malware') || lowerItem.includes('ransomware') || lowerItem.includes('virus')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kali/kali-original.svg';
                            else if (lowerItem.includes('patch') || lowerItem.includes('version') || lowerItem.includes('component')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg';
                            else if (lowerItem.includes('crypto') || lowerItem.includes('encrypt') || lowerItem.includes('key')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg'; // Usually associated with safe, modern crypto usage context
                            else if (lowerItem.includes('social') || lowerItem.includes('phishing') || lowerItem.includes('user')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg';

                            // If no specific match is found, assign a cool, generic tech/security logo based on the index
                            // This ensures every single item gets a unique, professional logo without falling back to emojis.
                            if (!iconUrl) {
                                const fallbackIcons = [
                                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg', // Good for enterprise/security
                                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', // Good for enterprise data
                                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', // Good for infrastructure
                                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', // Good for automation/config
                                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gnu/gnu-original.svg', // Good for OS/systems
                                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/suse/suse-original.svg', // Good for OS/systems
                                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg', // Good for network/ssh
                                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', // Good for servers
                                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg', // Good for servers
                                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg', // Good for business logic
                                ];
                                iconUrl = fallbackIcons[index % fallbackIcons.length];
                            }

                            return (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.25rem',
                                    padding: '1.25rem',
                                    background: 'var(--gray-50)',
                                    borderRadius: '12px',
                                    border: '1px solid #ff6b00'
                                }}>
                                    <div style={{ width: '28px', height: '28px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={iconUrl} alt="Tech Icon" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                    </div>
                                    <span style={{ fontSize: '1rem', color: 'var(--gray-600)', fontWeight: '500' }}>{item}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Strategic Importance (Gradient Box) */}
            <section style={{ padding: '6rem 0', borderTop: '1px solid #ff6b00', background: '#fff' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        {/* Left Side: Detail Text */}
                        <div>
                            <div className="hero-capsule-badge" style={{ marginBottom: '1rem' }}>Impact</div>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
                                Strategic <span style={{ color: '#ff6b00' }}>Importance</span>
                            </h3>
                            <div style={{ width: '60px', height: '4px', background: 'var(--primary)', marginBottom: '1.5rem', borderRadius: '2px' }}></div>
                            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--gray-600)' }}>
                                {whyAssessment}
                            </p>
                        </div>
                        {/* Right Side: Image Source from Prop or Default Tech Image */}
                        <div style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                            border: '1px solid #ff6b00',
                            height: '100%',
                            minHeight: '350px'
                        }}>
                            <img
                                src={heroImage || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                alt={`${title} Strategic Importance`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Benefits */}
            <section style={{ padding: '3rem 0', background: 'var(--gray-50)', borderTop: '1px solid #ff6b00' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
                            Why Choose <span style={{ color: 'var(--primary)' }}>Ehack Technology</span>?
                        </h2>
                    </div>

                    <div className="why-choose-grid grid grid-cols-1 md:grid-cols-2" style={{
                        gap: '1.5rem',
                        alignItems: 'stretch',
                        marginBottom: '4rem'
                    }}>
                        {/* We slice exactly 4 sentences/points from the text provided */}
                        {[
                            {
                                tag: 'Advanced Methods',
                                title: 'Tailored Methodologies',
                                desc: 'At Ehack Technology, we employ advanced methodologies tailored to specific applications to ensure comprehensive coverage.'
                            },
                            {
                                tag: 'Deep Detection',
                                title: 'Sophisticated Approach',
                                desc: 'We have a sophisticated approach to detecting bugs, ensuring no vulnerability goes unnoticed by our experts.'
                            },
                            {
                                tag: 'Seamless Integration',
                                title: 'Expert Guidance',
                                desc: 'Expert guidance can help mitigate issues without interfering with your existing systems and infrastructure.'
                            },
                            {
                                tag: 'Rapid Response',
                                title: 'Quick Identification',
                                desc: 'Our expert team works quickly to identify flaws in source code, binary files, applications, back-end integrations, and platform workflow.'
                            }
                        ].map((point, index) => (
                            <div key={index} className="why-card-premium" style={{
                                padding: '1.5rem 2rem',
                                background: '#fff',
                                borderRadius: '12px',
                                border: '1px solid #ff6b00',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    marginBottom: '0.75rem'
                                }}>
                                    <span style={{
                                        fontSize: '2.5rem',
                                        fontWeight: '900',
                                        color: '#ff6b00',
                                        lineHeight: 1
                                    }}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h4 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '800',
                                        color: 'var(--gray-900)',
                                        margin: 0,
                                        lineHeight: 1.2
                                    }}>
                                        {point.title}
                                    </h4>
                                </div>
                                <p style={{
                                    color: 'var(--gray-600)',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    margin: '0 0 1.5rem 0',
                                    flexGrow: 1
                                }}>
                                    {point.desc}
                                </p>

                                <div style={{
                                    alignSelf: 'flex-start',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    padding: '0.3rem 0.8rem',
                                    border: '1px solid #ff6b00',
                                    borderRadius: '50px',
                                    color: '#ff6b00',
                                    fontSize: '0.8rem',
                                    fontWeight: '600',
                                    background: 'rgba(255, 107, 0, 0.05)'
                                }}>
                                    <span style={{ fontSize: '0.9rem' }}>✓</span>
                                    {point.tag}
                                </div>

                                <style jsx>{`
                                    .why-card-premium:hover {
                                        transform: translateY(-5px);
                                        box-shadow: 0 10px 25px rgba(255, 107, 0, 0.1);
                                    }
                                `}</style>
                            </div>
                        ))}
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
                        <h3 className="section-title" style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--gray-900)' }}>
                            {/* Core <span style={{ color: 'var(--primary)' }}>Benefits</span> */}
                        </h3>
                    </div>

                    <div className="benefits-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '2rem',
                        alignItems: 'stretch'
                    }}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card-premium" style={{
                                background: '#fff',
                                borderRadius: '24px',
                                border: '1px solid #ff6b00',
                                transition: 'all 0.3s ease',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                height: '100%',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    height: '180px',
                                    background: 'rgba(242, 108, 41, 0.05)',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    flexShrink: 0
                                }}>
                                    {benefit.image ? (
                                        <img
                                            src={benefit.image}
                                            alt={benefit.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                            className="benefit-img"
                                        />
                                    ) : (
                                        <span style={{ fontSize: '3rem', color: 'var(--primary)' }}>{benefit.icon}</span>
                                    )}
                                </div>
                                <div style={{
                                    padding: '2rem 2.5rem 2.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    flex: 1,
                                    width: '100%'
                                }}>
                                    <h4 style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '800',
                                        marginBottom: '1rem',
                                        color: 'var(--gray-900)'
                                    }}>
                                        {benefit.title}
                                    </h4>
                                    <div style={{ width: '30px', height: '3px', background: 'var(--primary)', borderRadius: '2px', marginBottom: '1.25rem', opacity: 0.6 }}></div>
                                    <p style={{
                                        color: 'var(--gray-600)',
                                        fontSize: '1rem',
                                        lineHeight: '1.7',
                                        margin: 0
                                    }}>
                                        {benefit.description}
                                    </p>
                                </div>

                                <style jsx>{`
                                    .benefit-card-premium:hover {
                                        transform: translateY(-10px);
                                        border-color: var(--primary);
                                        box-shadow: 0 20px 40px rgba(242, 108, 41, 0.1);
                                    }
                                    .benefit-card-premium:hover .benefit-img {
                                        transform: scale(1.1);
                                    }
                                `}</style>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Services */}
            {
                relatedServices && relatedServices.length > 0 && (
                    <section style={{ padding: '3rem 0', background: '#fff', borderTop: '1px solid #ff6b00' }}>
                        <div className="container">
                            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                <div className="hero-capsule-badge" style={{ marginBottom: '1rem' }}>Explore More</div>
                                <h2 className="section-title">Related <span style={{ color: 'var(--primary)' }}>Services</span></h2>
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                                gap: '2.5rem'
                            }}>
                                {relatedServices.map((service, index) => (
                                    <Link key={index} href={service.href} style={{
                                        background: 'var(--gray-50)',
                                        borderRadius: '24px',
                                        border: '1px solid #ff6b00',
                                        textDecoration: 'none',
                                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        overflow: 'hidden',
                                        position: 'relative'
                                    }} className="related-service-card">
                                        {/* Service Image */}
                                        <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s ease'
                                                }}
                                                className="service-img"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                            <h3 style={{
                                                fontSize: '1.25rem',
                                                fontWeight: '700',
                                                color: 'var(--gray-900)',
                                                marginBottom: '0.75rem'
                                            }}>
                                                {service.title}
                                            </h3>
                                            <p style={{
                                                fontSize: '0.95rem',
                                                color: 'var(--gray-600)',
                                                lineHeight: '1.6',
                                                marginBottom: '1.5rem',
                                                flex: 1
                                            }}>
                                                {service.description}
                                            </p>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                color: 'var(--primary)',
                                                fontWeight: '700',
                                                fontSize: '0.9rem'
                                            }}>
                                                Learn More
                                                <span style={{ transition: 'transform 0.3s ease' }} className="arrow">→</span>
                                            </div>
                                        </div>

                                        <style jsx>{`
                                        .related-service-card:hover {
                                            transform: translateY(-12px);
                                            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                                            border-color: rgba(242, 108, 41, 0.3);
                                            background: #fff;
                                        }
                                        .related-service-card:hover .service-img {
                                            transform: scale(1.1);
                                        }
                                        .related-service-card:hover .arrow {
                                            transform: translateX(5px);
                                        }
                                    `}</style>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            }

            {/* Final CTA Section */}
            <section className="cta-section" id="contact" style={{ background: '#ff6b00', padding: '3rem 0', borderTop: '1px solid #ff6b00' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', color: '#ffffff' }}>Ready to <span style={{ color: '#fff' }}>Secure Your Assets</span>?</h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 3rem', color: '#ffffff' }}>
                        Get a comprehensive {title.toLowerCase()} from our certified experts. Our team is ready to help you identify and mitigate risks.
                    </p>
                    <div className="cta-buttons">
                        <Link href="/contact" className="btn btn-white btn-lg" style={{ color: '#ff6b00', border: 'none' }}>
                            Request Assessment
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '10px' }}>
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <a href="tel:+919886035330" className="btn btn-white btn-lg" style={{ border: '1px solid #ddd' }}>
                            Speak with Lead Consultant
                        </a>
                    </div>
                </div>
            </section>
        </main >
    );
}
