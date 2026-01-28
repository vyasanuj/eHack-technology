"use client";
import Link from 'next/link';

export default function AcademySection() {
    return (
        <section className="section section-dark" style={{
            background: '#0F0F1A',
            position: 'relative',
            padding: '6rem 0',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(242, 108, 41, 0.08) 0%, transparent 70%)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Centered Top Label */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        color: '#F26C29',
                        fontWeight: '800',
                        fontSize: '1.5rem',
                        letterSpacing: '0.05em',
                        display: 'block',
                        marginBottom: '0.5rem'
                    }}>
                        eHack Academy
                    </span>
                    <p style={{ color: '#888', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Empowering Cyber Defenders with Intelligence and Action
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>

                    {/* Left Column: Text Content */}
                    <div className="animate-fadeInLeft">
                        <h2 style={{
                            fontSize: '3rem',
                            fontWeight: '800',
                            lineHeight: '1.1',
                            color: 'white',
                            marginBottom: '1.5rem'
                        }}>
                            Where Learning Meets <br />
                            <span style={{ color: '#F26C29' }}>Real-World Defense</span>
                        </h2>

                        <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                            At eHack Academy, we don't just teach cybersecurity; we train the next generation of digital architects to <strong>defend</strong>, <strong>respond to</strong>, and <strong>lead</strong> in an increasingly hostile digital landscape.
                        </p>

                        <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                            Our curriculum goes beyond theoretical frameworks to deliver <strong>battle-tested, actionable skills</strong> that are immediately applicable in high-stakes environments. We believe that in a world of evolving threats, education must keep pace with the speed of innovation.
                        </p>

                        <Link href="/academy" className="btn btn-primary btn-lg" style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            borderRadius: '8px',
                            background: '#d64912' // Slightly darker orange for better contrast on dark
                        }}>
                            Explore Programs
                        </Link>
                    </div>

                    {/* Right Column: Feature Cards */}
                    <div className="animate-fadeInRight" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        {/* Card 1 */}
                        <div className="group" style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(242, 108, 41, 0.3)',
                            borderRadius: '16px',
                            padding: '2rem',
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                        }}>
                            <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>
                                Live Cyber Range Simulations
                            </h4>
                            <p style={{ color: '#aaa', margin: 0, fontSize: '1rem' }}>
                                Hands-on labs that mirror today's advanced threat landscapes, allowing you to practice defense in real-time.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group" style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(242, 108, 41, 0.3)',
                            borderRadius: '16px',
                            padding: '2rem',
                            transition: 'all 0.3s ease'
                        }}>
                            <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>
                                Expert-Led Mentorship
                            </h4>
                            <p style={{ color: '#aaa', margin: 0, fontSize: '1rem' }}>
                                Sessions guided by industry veterans with 15+ years of frontline experience in securing global enterprises.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group" style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(242, 108, 41, 0.3)',
                            borderRadius: '16px',
                            padding: '2rem',
                            transition: 'all 0.3s ease'
                        }}>
                            <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>
                                Industry-Aligned Curriculum
                            </h4>
                            <p style={{ color: '#aaa', margin: 0, fontSize: '1rem' }}>
                                Coursework developed in collaboration with leading C-CISOs to ensure relevance in the modern job market.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
