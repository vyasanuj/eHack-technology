"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './AcademySection.module.css';

export default function AcademySection() {
    return (
        <section className="section section-dark" style={{
            background: 'linear-gradient(135deg, #fff5f0 0%, #ffe0cc 100%)',
            position: 'relative',
            padding: '1.5rem 0',
            overflow: 'hidden',
            borderTop: '1px solid #ff6b00',
            borderBottom: '1px solid #ff6b00'
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
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="px-4">
                    <span style={{
                        color: '#ff6b00',
                        fontWeight: '800',
                        fontSize: '3rem',
                        letterSpacing: '0.05em',
                        display: 'block',
                        marginBottom: '0.5rem'
                    }} className="text-3xl md:text-5xl">
                        eHack Global Technology
                    </span>
                    <p style={{ color: '#1f2937', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Empowering Cyber Defenders with Intelligence and Action
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div className="animate-fadeInLeft">
                        <h2 style={{
                            fontSize: '3rem',
                            fontWeight: '800',
                            lineHeight: '1.1',
                            color: '#1a1a1a',
                            marginBottom: '1.5rem'
                        }}>
                            Where Learning Meets <br />
                            <span style={{ color: '#ff6b00' }}>Real-World Defense</span>
                        </h2>

                        <p style={{ color: '#1f2937', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                            At eHack Global Technology, we don't just teach cybersecurity; we train the next generation of digital architects to <strong>defend</strong>, <strong>respond to</strong>, and <strong>lead</strong> in an increasingly hostile digital landscape.
                        </p>

                        <p style={{ color: '#1f2937', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
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
                            background: 'white',
                            border: '1px solid #ff6b00',
                            borderRadius: '16px',
                            padding: '2rem',
                            transition: 'all 0.3s ease',
                            cursor: 'default',
                            boxShadow: '0 10px 30px -10px rgba(236, 124, 0, 0.1)'
                        }}>
                            <h4 style={{ color: '#1a1a1a', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>
                                Live Cyber Range Simulations
                            </h4>
                            <p style={{ color: '#1f2937', margin: 0, fontSize: '1rem' }}>
                                Hands-on labs that mirror today's advanced threat landscapes, allowing you to practice defense in real-time.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group" style={{
                            background: 'white',
                            border: '1px solid #ff6b00',
                            borderRadius: '16px',
                            padding: '2rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 10px 30px -10px rgba(236, 124, 0, 0.1)'
                        }}>
                            <h4 style={{ color: '#1a1a1a', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>
                                Expert-Led Mentorship
                            </h4>
                            <p style={{ color: '#1f2937', margin: 0, fontSize: '1rem' }}>
                                Sessions guided by industry veterans with 15+ years of frontline experience in securing global enterprises.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group" style={{
                            background: 'white',
                            border: '1px solid #ff6b00',
                            borderRadius: '16px',
                            padding: '2rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 10px 30px -10px rgba(236, 124, 0, 0.1)'
                        }}>
                            <h4 style={{ color: '#1a1a1a', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>
                                Industry-Aligned Curriculum
                            </h4>
                            <p style={{ color: '#1f2937', margin: 0, fontSize: '1rem' }}>
                                Coursework developed in collaboration with leading C-CISOs to ensure relevance in the modern job market.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
