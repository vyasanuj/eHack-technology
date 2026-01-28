import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { categories } from '../../data/categories';
import LeadForm from '../../components/LeadForm';
import TrustedCompanies from '../../components/TrustedCompanies';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// Using Next.js 15+ async params
export default async function CategoryLandingPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const catData = categories[category as keyof typeof categories];

    if (!catData) {
        notFound();
    }

    return (
        <main>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                color: 'white',
                padding: '6rem 0 4rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.1,
                    backgroundImage: 'radial-gradient(#F26C29 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    {/* Left Content */}
                    <div className="animate-fadeInUp">
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'rgba(242, 108, 41, 0.15)',
                            color: '#F26C29',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(242, 108, 41, 0.3)'
                        }}>
                            <catData.icon size={18} />
                            <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{catData.label} Solutions</span>
                        </div>

                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                            {catData.headline}
                        </h1>

                        <p style={{ fontSize: '1.25rem', color: '#ccc', lineHeight: '1.6', marginBottom: '2.5rem', maxWidth: '90%' }}>
                            {catData.longDescription || catData.description}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link href="#contact" className="btn btn-primary btn-lg" style={{ padding: '1rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Get Started
                                <ArrowRight size={18} />
                            </Link>
                            <Link href="#services" className="btn btn-white btn-lg" style={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                                View Services
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Lead Form */}
                    <div className="animate-fadeInUp delay-200">
                        <div style={{
                            background: 'white',
                            borderRadius: '24px',
                            padding: '0.5rem', // Inner padding wrapper
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }}>
                            <LeadForm
                                title="Speak to an Expert"
                                subtitle="Get a detailed quote for your security needs"
                                serviceName={catData.id}
                                compact={false}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <TrustedCompanies />

            {/* Services Grid Section */}
            <section id="services" className="section" style={{ padding: '6rem 0', background: '#f8f9fa' }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="section-label" style={{ background: '#F26C29', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '50px' }}>Our Capabilities</span>
                        <h2 className="section-title" style={{ marginTop: '1rem' }}>Specialized <span style={{ color: '#F26C29' }}>{catData.label}</span> Services</h2>
                        <p className="section-subtitle">Tailored solutions designed to address specific security challenges</p>
                    </div>

                    <div className="services-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '2rem'
                    }}>
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

            {/* Why Choose Us for this Category */}
            <section className="section" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.2' }}>
                                Why Leading Enterprises Choose Our <span style={{ color: '#F26C29' }}>{catData.label}</span>
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    'Certified Experts (CISSP, CEH, OSCP)',
                                    'Detailed Methodologies & Reporting',
                                    'Zero False Positives Guarantee',
                                    '24/7 Dedicated Support & Re-testing'
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{
                                            background: '#FFF5F2',
                                            padding: '0.5rem',
                                            borderRadius: '50%',
                                            color: '#F26C29'
                                        }}>
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#333' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{
                            position: 'relative',
                            height: '500px',
                            background: '#f1f1f1',
                            borderRadius: '24px',
                            overflow: 'hidden'
                        }}>
                            {/* Placeholder for a feature image - using first service image or generic */}
                            <Image
                                src={catData.services[0]?.image || '/service-web-hero.png'}
                                alt={`${catData.label} Feature`}
                                fill
                                style={{ objectFit: 'cover' }}
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
