import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { categories } from '../../data/categories';
import LeadForm from '../../components/LeadForm';
import TrustedCompanies from '../../components/TrustedCompanies';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import GlobalDefenseSection from '@/app/components/GlobalDefenseSection';
import CaseStudySection from '@/app/components/CaseStudySection';
import IndustriesSection from '@/app/components/IndustriesSection';

import InquiryForm from '../../components/InquiryForm';

// Using Next.js 15+ async params
export default async function CategoryLandingPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const catData = categories[category as keyof typeof categories];

    if (!catData) {
        notFound();
    }

    return (
        <main>
            {/* Authentic Hero Section from ehack_new */}
            <section className="hero-section" id="overview">
                <div className="hero-background">
                    <div className="hero-overlay"></div>
                    <div
                        className="hero-image"
                        style={{
                            backgroundImage: `url('${catData.image}')`
                        }}
                    />
                </div>
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-capsule-badge">
                            Trusted {catData.label} Solutions
                        </div>

                        <h1 className="hero-title animate-fadeInUp">
                            {(() => {
                                const title = catData.headline || '';
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
                            {catData.longDescription || catData.description}
                        </p>

                        <ul className="hero-features-list animate-fadeInUp delay-200">
                            {[
                                'World-Class Security Infrastructure',
                                'Certified Security Experts (CISSP, CEH)',
                                'Comprehensive Vulnerability Reporting',
                                '24/7 Incident Response Support'
                            ].map((feature, idx) => (
                                <li key={idx} className="hero-feature-item">
                                    <span className="check-icon">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link href="#contact" className="btn btn-primary btn-lg">
                                Get Started
                            </Link>
                            <Link href="#services" className="btn btn-white btn-lg" style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                                View Services
                            </Link>
                        </div>
                    </div>

                    <InquiryForm
                        courseName={catData.label}
                        courseCode={catData.id}
                        variant="hero"
                        title="Speak to an Expert"
                        subtitle="Get a free consultation today"
                    />
                </div>
            </section>

            {/* Trusted By Section */}
            <TrustedCompanies />

            <section id="services" className="section py-12 md:py-24 bg-gray-50">
                <div className="container px-4 md:px-6">
                    <div className="section-header text-center mb-12 md:mb-16">
                        <span className="section-label bg-primary text-white px-6 py-2 rounded-full inline-block">Our Capabilities</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">Specialized <span className="text-primary">{catData.label}</span> Services</h2>
                        <p className="section-subtitle text-gray-600 max-w-2xl mx-auto">Tailored solutions designed to address specific security challenges</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {catData.services.map((service, index) => (
                            <div key={index} className="group" style={{
                                background: 'white',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid #eee',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{ position: 'relative', height: '220px', width: '100%' }}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        display: 'flex',
                                        gap: '0.5rem',
                                        flexWrap: 'wrap',
                                        justifyContent: 'flex-end'
                                    }}>
                                        {service.badges?.slice(0, 2).map((badge, idx) => (
                                            <span key={idx} style={{
                                                background: 'rgba(255, 255, 255, 0.9)',
                                                backdropFilter: 'blur(4px)',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '50px',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                color: '#1a1a1a',
                                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                                            }}>
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>{service.title}</h3>
                                    <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>{service.description}</p>

                                    <Link href={service.href} style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        color: '#F26C29',
                                        fontWeight: '600',
                                        marginTop: 'auto'
                                    }}>
                                        Learn More <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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

            {/* Why Choose Us for this Category */}
            <section className="section py-12 md:py-24 bg-white overflow-hidden">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
                                Why Leading Enterprises Choose Our <span className="text-primary">{catData.label}</span>
                            </h2>
                            <div className="flex flex-col gap-6">
                                {[
                                    'Certified Experts (CISSP, CEH, OSCP)',
                                    'Detailed Methodologies & Reporting',
                                    'Zero False Positives Guarantee',
                                    '24/7 Dedicated Support & Re-testing'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="bg-orange-50 p-2 rounded-full text-primary shrink-0">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <span className="text-lg font-medium text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-gray-100 rounded-3xl overflow-hidden order-1 lg:order-2 shadow-xl">
                            <Image
                                src={catData.services[0]?.image || '/service-web-hero.png'}
                                alt={`${catData.label} Feature`}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section id="contact" style={{ background: '#F26C29', padding: '5rem 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Ready to Secure Your Infrastructure?</h2>
                    <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
                        Get a comprehensive {catData.label.toLowerCase()} today. Our experts are ready to help.
                    </p>
                    <Link href="/contact" className="btn btn-white btn-lg" style={{
                        background: 'white',
                        color: '#F26C29',
                        padding: '1rem 3rem',
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        borderRadius: '50px',
                        border: 'none',
                        display: 'inline-block'
                    }}>
                        Schedule a Free Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
