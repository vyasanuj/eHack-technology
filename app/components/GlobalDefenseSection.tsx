"use client";
import { useEffect, useState } from 'react';

export default function GlobalDefenseSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const defenseCenters = [
        { id: 1, top: '28%', left: '13.5%', name: 'North America HQ' }, // Central/North US
        { id: 2, top: '31%', left: '21.5%', name: 'New York Node' }, // East US
        { id: 3, top: '22%', left: '42.5%', name: 'London Ops' }, // UK
        { id: 4, top: '24%', left: '46%', name: 'Berlin Center' }, // Europe
        { id: 5, top: '46%', left: '63%', name: 'India HQ (Mumbai)' }, // India
        { id: 6, top: '56%', left: '71%', name: 'Singapore Hub' }, // SEA
        { id: 7, top: '78%', left: '83%', name: 'Sydney Node' }, // Aus
        { id: 8, top: '68%', left: '26%', name: 'Sao Paulo' }, // Brazil
        { id: 9, top: '34%', left: '80%', name: 'Tokyo Center' }, // Japan
        { id: 10, top: '18%', left: '52%', name: 'Moscow Watch' }, // Russia
        { id: 11, top: '42%', left: '55%', name: 'Dubai Hub' }, // UAE
        { id: 12, top: '33%', left: '8%', name: 'California Ops' }, // West US
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
                    aspectRatio: '2/1',
                    height: 'auto',
                    background: 'linear-gradient(180deg, rgba(15, 15, 26, 0.8) 0%, rgba(31, 32, 38, 0.8) 100%)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                    overflow: 'hidden',
                    marginBottom: '4rem'
                }}>
                    <img
                        src="/new home map .jpg"
                        alt="Global Defense Network"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />

                    {/* Bottom Status Bar - Kept for tech feel as overlay, unless user explicitly asks to remove this too. 
                        "Simple" usually refers to the map complexity. Removing this would make it JUST an image. 
                        User said "add this image only" -> I will render JUST the image to be safe and literal. 
                    */}
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
