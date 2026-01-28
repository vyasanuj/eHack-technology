"use client";
import Link from 'next/link';
import { categories } from '../data/categories';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
    return (
        <section className="section" style={{ padding: '3rem 0', background: '#f8f9fa' }}>
            <div className="container">
                {/* Section Header */}
                <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <span className="section-label" style={{
                        background: '#F26C29',
                        color: 'white',
                        fontSize: '1.1rem',
                        padding: '0.6rem 2rem',
                        borderRadius: '50px',
                        display: 'inline-block',
                        marginBottom: '1rem',
                        fontWeight: '600',
                        letterSpacing: '0.5px'
                    }}>Our Expertise</span>
                    <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Comprehensive Security <span style={{ color: '#F26C29' }}>Solutions</span>
                    </h2>
                    <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto', color: '#666', fontSize: '1.1rem' }}>
                        Specialized dimensions of cybersecurity tailored to protect your assets, compliance, and future.
                    </p>
                </div>

                {/* Categories Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem',
                    marginBottom: '3rem'
                }}>
                    {(Object.values(categories) as any[]).map((cat) => (
                        <Link href={`/solutions/${cat.id}`} key={cat.id} className="group" style={{ textDecoration: 'none' }}>
                            <div style={{
                                background: 'white',
                                borderRadius: '20px',
                                border: '2px solid #F26C29', // Orange border added
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                                className="hover:transform hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Image at the top */}
                                <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                                    {cat.image ? (
                                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                            <img
                                                src={cat.image}
                                                alt={cat.label}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', background: '#eee' }}></div>
                                    )}
                                    {/* Overlay Gradient */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '60%',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
                                    }}></div>

                                    {/* Service Count Badge */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(4px)',
                                        padding: '0.4rem 1rem',
                                        borderRadius: '50px',
                                        fontSize: '0.85rem',
                                        fontWeight: '700',
                                        color: '#F26C29',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.4rem'
                                    }}>
                                        <span style={{ width: '6px', height: '6px', background: '#F26C29', borderRadius: '50%' }}></span>
                                        {cat.services.length}+ Services
                                    </div>
                                </div>

                                {/* Content */}
                                <div style={{
                                    padding: '2rem',
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative'
                                }}>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '1rem' }}>
                                        {cat.label}
                                    </h3>

                                    <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                                        {cat.description}
                                    </p>

                                    {/* Trust Badges / Key Features */}
                                    <div style={{
                                        display: 'flex',
                                        gap: '1rem',
                                        marginBottom: '2rem',
                                        flexWrap: 'wrap',
                                        borderTop: '1px solid #eee',
                                        paddingTop: '1.5rem',
                                        fontSize: '0.9rem',
                                        color: '#555'
                                    }}>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '1.1rem' }}>{cat.industriesCount} Industries</span>
                                            <span style={{ fontSize: '0.8rem', color: '#666' }}>Trusted by {cat.keySectors}</span>
                                        </div>
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginTop: 'auto'
                                    }}>
                                        <span style={{
                                            color: '#F26C29',
                                            fontWeight: '700',
                                            fontSize: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            Explore Solutions
                                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
