"use client";
import { useEffect, useState } from 'react';

export default function GlobalDefenseSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const defenseCenters = [
        { id: 1, top: '30%', left: '25%', name: 'North America HQ' }, // US
        { id: 2, top: '35%', left: '28%', name: 'New York Node' }, // East US
        { id: 3, top: '25%', left: '48%', name: 'London Ops' }, // UK
        { id: 4, top: '28%', left: '52%', name: 'Berlin Center' }, // Europe
        { id: 5, top: '45%', left: '68%', name: 'India HQ (Mumbai)' }, // India
        { id: 6, top: '42%', left: '72%', name: 'Singapore Hub' }, // SEA
        { id: 7, top: '75%', left: '85%', name: 'Sydney Node' }, // Aus
        { id: 8, top: '60%', left: '32%', name: 'Sao Paulo' }, // Brazil
        { id: 9, top: '32%', left: '88%', name: 'Tokyo Center' }, // Japan
        { id: 10, top: '22%', left: '55%', name: 'Moscow Watch' }, // Russia
        { id: 11, top: '55%', left: '50%', name: 'Dubai Hub' }, // UAE
        { id: 12, top: '38%', left: '22%', name: 'California Ops' }, // West US
    ];

    return (
        <section className="section section-dark" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
            {/* Abstract Background Grid */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(#F26C29 1px, transparent 1px), radial-gradient(#F26C29 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                backgroundPosition: '0 0, 20px 20px',
                opacity: 0.05,
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Header */}
                <div className="section-header" style={{ marginBottom: '4rem' }}>
                    <span className="section-label" style={{
                        background: '#F26C29',
                        color: 'white',
                        fontSize: '1rem',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '50px',
                        display: 'inline-block',
                        marginBottom: '1rem',
                        fontWeight: '600'
                    }}>Global Reach</span>
                    <h2 className="section-title">Around-the-World <span style={{ color: '#F26C29' }}>Protection</span></h2>
                    <p className="section-subtitle">
                        Built on 18+ Advanced Cyber Defense Centres ensuring seamless 24/7 security.
                    </p>
                </div>

                {/* World Map Container */}
                <div className="animate-scaleIn" style={{
                    position: 'relative',
                    width: '100%',
                    height: '500px',
                    background: 'linear-gradient(180deg, rgba(15, 15, 26, 0.8) 0%, rgba(31, 32, 38, 0.8) 100%)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                    overflow: 'hidden',
                    marginBottom: '4rem'
                }}>

                    {/* World Map Silhouette (CSS Shapes for abstract feel) */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.2,
                        background: `url('data:image/svg+xml;utf8,<svg width="100%" height="100%" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg"><path d="M230,150 Q250,120 280,140 T330,120 T380,150 T450,120 T550,150 T650,120 T750,150 T850,120 V300 H150 V150" fill="%23F26C29" opacity="0.1"/></svg>') center/cover`
                    }}>
                        {/* Stylized simplified map dots grid */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}></div>
                    </div>

                    {/* Defense Nodes */}
                    {defenseCenters.map((center, i) => (
                        <div key={center.id} style={{
                            position: 'absolute',
                            top: center.top,
                            left: center.left,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            zIndex: 10
                        }}>
                            {/* Pulse Effect */}
                            <div style={{
                                width: '12px',
                                height: '12px',
                                background: '#F26C29',
                                borderRadius: '50%',
                                position: 'relative',
                                boxShadow: '0 0 10px #F26C29'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    border: '1px solid #F26C29',
                                    animation: `pulse-ring ${2 + (i % 3)}s cubic-bezier(0.215, 0.61, 0.355, 1) infinite`
                                }}></div>
                            </div>

                            {/* Hover Tag (Visible on hover concept, or static for now) */}
                            <div className="node-label" style={{
                                marginTop: '8px',
                                background: 'rgba(0,0,0,0.8)',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '0.7rem',
                                color: '#ccc',
                                whiteSpace: 'nowrap',
                                border: '1px solid #333',
                                opacity: 0.7
                            }}>
                                {center.name}
                            </div>
                        </div>
                    ))}

                    {/* Connecting Lines (SVG Overlay) */}
                    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.3 }}>
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#F26C29" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                        {/* Connecting a few random major nodes roughly */}
                        <path d="M250,150 Q480,250 550,275 T880,160" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5" />
                        <path d="M280,175 Q520,140 720,210" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5" />
                    </svg>

                    {/* Bottom Status Bar inside Map */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(5px)',
                        padding: '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        color: '#888',
                        fontSize: '0.8rem',
                        fontFamily: 'monospace'
                    }}>
                        <span>SYSTEM STATUS: <span style={{ color: '#27C93F' }}>OPTIMAL</span></span>
                        <span>ACTIVE THREATS BLOCKED: <span style={{ color: '#F26C29' }}>14,203</span></span>
                        <span>GLOBAL LATENCY: 24ms</span>
                    </div>

                </div>

                {/* KPI stats below map */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ fontSize: '3rem', color: '#F26C29', marginBottom: '0.5rem', fontWeight: '800' }}>18+</h3>
                        <p style={{ color: '#000000', margin: 0 }}>Advanced Cyber Defense Centres</p>
                    </div>
                    <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ fontSize: '3rem', color: '#F26C29', marginBottom: '0.5rem', fontWeight: '800' }}>24/7</h3>
                        <p style={{ color: '#000000', margin: 0 }}>Continuous Threat Monitoring</p>
                    </div>
                    <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ fontSize: '3rem', color: '#F26C29', marginBottom: '0.5rem', fontWeight: '800' }}>200+</h3>
                        <p style={{ color: '#000000', margin: 0 }}>Countries & Regions Covered</p>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes pulse-ring {
                        0% { transform: translate(-50%, -50%) scale(0.33); opacity: 1; }
                        80%, 100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
                    }
                `}</style>

            </div>
        </section>
    );
}
