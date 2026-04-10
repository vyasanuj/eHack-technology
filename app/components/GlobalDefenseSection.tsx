"use client";
import { useEffect, useState } from 'react';

export default function GlobalDefenseSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const defenseCenters = [
        { id: 1, top: '28%', left: '18%', name: 'North America HQ (USA)' },     // West US (approx 40N, 100W adjusted)
        { id: 2, top: '28%', left: '29%', name: 'New York Node' },              // NY (approx 40N, 74W)
        { id: 3, top: '22.5%', left: '49%', name: 'London Ops (UK)' },          // UK (approx 51.5N) -> Adjusted down
        { id: 4, top: '21%', left: '53%', name: 'Berlin Center (Germany)' },    // Germany (51N)
        { id: 5, top: '19%', left: '53%', name: 'Copenhagen Node (Denmark)' },  // Denmark (56N)
        { id: 6, top: '40%', left: '72%', name: 'India HQ (Mumbai)' },          // India (19N, 73E) -> Adjusted slightly
        { id: 7, top: '50%', left: '79%', name: 'Singapore Hub' },              // Singapore (1N, 104E) -> Adjusted slightly
        { id: 8, top: '68%', left: '92%', name: 'Sydney Node' },                // Sydney (34S, 151E)
        { id: 9, top: '63%', left: '37%', name: 'Sao Paulo' },                  // Sao Paulo (23S, 46W) -> Adjusted East
        { id: 10, top: '21%', left: '55%', name: 'Warsaw Hub' },                // Warsaw (52N, 21E)
        { id: 11, top: '36%', left: '65%', name: 'Dubai Hub' },                 // Dubai (25N, 55E)
        { id: 12, top: '29%', left: '88%', name: 'Tokyo Center' },              // Tokyo (35N, 139E)
    ];

    // Define connections between centers (id pairs)
    const connections = [
        [1, 2], // NA HQ -> NY
        [2, 3], // NY -> London
        [3, 4], // London -> Berlin
        [4, 5], // Berlin -> Copenhagen
        [4, 10], // Berlin -> Warsaw
        [3, 11], // London -> Dubai
        [11, 6], // Dubai -> India
        [6, 7], // India -> Singapore
        [7, 8], // Singapore -> Sydney
        [7, 12], // Singapore -> Tokyo
        [2, 9], // NY -> Sao Paulo
        [1, 12], // NA HQ -> Tokyo (Pacific Link)
    ];

    return (
        <section className="section section-dark" style={{ position: 'relative', overflow: 'hidden', padding: '2.5rem 0' }}>
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
                <div className="section-header" style={{ marginBottom: '2rem' }}>
                    <span className="section-label" style={{
                        background: '#FF6B00',
                        color: 'white',
                        fontSize: '1rem',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '50px',
                        display: 'inline-block',
                        marginBottom: '1rem',
                        fontWeight: '600'
                    }}>Global Reach</span>
                    <h2 className="section-title">Around-the-World <span style={{ color: '#FF6B00' }}>Protection</span></h2>
                    <p className="text-[#1f2937]">
                        Built on 18+ Advanced Cyber Defense Centres ensuring seamless 24/7 security.
                    </p>
                </div>

                {/* World Map Container with Animated Dotted Border (Full Scale Restoration) */}
                <div className="animate-scaleIn relative w-full aspect-[2/1] h-auto rounded-t-[32px] map-border-animated"
                    style={{ borderBottom: 'none' }}>
                    <div className="relative w-full h-full rounded-t-[28px] overflow-hidden">
                        {/* Map Content Wrapper for Zooming */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            transform: 'scale(1.05)', // Increased size slightly
                            transformOrigin: 'center center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {/* Local New World Map */}
                            <img
                                src="/new-map.png"
                                alt="Global Defense Network"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    opacity: 1,
                                    minHeight: '300px'
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* KPI stats below map - Seamlessly connected (Full Width) */}
                <div className="w-full" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0px', /* No gap between boxes for unified border look */
                    marginTop: '-2px' /* Slight overlap to ensure borders touch */
                }}>
                    <div className="kpi-card-animated" style={{ borderRadius: '0 0 0 16px', borderTop: 'none' }}>
                        <h3 style={{ fontSize: '3rem', color: '#F26C29', marginBottom: '0.5rem', fontWeight: '800' }}>18+</h3>
                        <p style={{ color: '#1f2937', margin: 0 }}>Advanced Defense Centres</p>
                    </div>
                    <div className="kpi-card-animated" style={{ borderRadius: '0', borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}>
                        <h3 style={{ fontSize: '3rem', color: '#F26C29', marginBottom: '0.5rem', fontWeight: '800' }}>24/7</h3>
                        <p style={{ color: '#1f2937', margin: 0 }}>Continuous Monitoring</p>
                    </div>
                    <div className="kpi-card-animated" style={{ borderRadius: '0 0 16px 0', borderTop: 'none' }}>
                        <h3 style={{ fontSize: '3rem', color: '#F26C29', marginBottom: '0.5rem', fontWeight: '800' }}>200+</h3>
                        <p style={{ color: '#1f2937', margin: 0 }}>Countries Covered</p>
                    </div>
                </div>

                <style jsx>{`
                    .kpi-card-animated {
                        padding: 2rem;
                        text-align: center;
                        position: relative;
                        background-color: rgba(255,255,255,0.03);
                        background-image: linear-gradient(90deg, #F26C29 50%, transparent 50%), linear-gradient(90deg, #F26C29 50%, transparent 50%), linear-gradient(0deg, #F26C29 50%, transparent 50%), linear-gradient(0deg, #F26C29 50%, transparent 50%);
                        background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
                        background-size: 10px 1.5px, 10px 1.5px, 1.5px 10px, 1.5px 10px;
                        background-position: 0 0, 100% 100%, 0 100%, 100% 0;
                        animation: border-dance 4s infinite linear;
                    }

                    .map-border-animated {
                        padding: 3px;
                        position: relative;
                        background-image: linear-gradient(90deg, #F26C29 50%, transparent 50%), linear-gradient(90deg, #F26C29 50%, transparent 50%), linear-gradient(0deg, #F26C29 50%, transparent 50%), linear-gradient(0deg, #F26C29 50%, transparent 50%);
                        background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
                        background-size: 10px 1.5px, 10px 1.5px, 1.5px 10px, 1.5px 10px;
                        background-position: 0 0, 100% 100%, 0 100%, 100% 0;
                        animation: border-dance 4s infinite linear;
                    }

                    @keyframes border-dance {
                        0% {
                            background-position: 0 0, 100% 100%, 0 100%, 100% 0;
                        }
                        100% {
                            background-position: 20px 0, calc(100% - 20px) 100%, 0 calc(100% - 30px), 100% 20px;
                        }
                    }
                    @keyframes pulse-ring {
                        0% { transform: translate(-50%, -50%) scale(0.33); opacity: 1; }
                        80%, 100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
                    }
                `}</style>

            </div>
        </section>
    );
}
