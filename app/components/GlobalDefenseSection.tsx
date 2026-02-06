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
        { id: 3, top: '19%', left: '49%', name: 'London Ops (UK)' },            // UK (55N)
        { id: 4, top: '21%', left: '53%', name: 'Berlin Center (Germany)' },    // Germany (51N)
        { id: 5, top: '19%', left: '53%', name: 'Copenhagen Node (Denmark)' },  // Denmark (56N)
        { id: 6, top: '39%', left: '72%', name: 'India HQ (Mumbai)' },          // India (19N, 72E)
        { id: 7, top: '51%', left: '79%', name: 'Singapore Hub' },              // Singapore (1N, 103E)
        { id: 8, top: '68%', left: '92%', name: 'Sydney Node' },                // Sydney (33S, 151E)
        { id: 9, top: '63%', left: '32%', name: 'Sao Paulo' },                  // Sao Paulo (23S, 46W)
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
                    <h2 className="section-title">Around-the-World <span style={{ color: '#EC7C00' }}>Protection</span></h2>
                    <p className="text-[#1f2937]">
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
                    {/* Top HUD Panel */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        padding: '1.5rem 2rem',
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        zIndex: 20
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <div style={{
                                width: '8px',
                                height: '8px',
                                background: '#10B981', // Green
                                borderRadius: '50%',
                                boxShadow: '0 0 10px #10B981',
                                animation: 'pulse 2s infinite'
                            }}></div>
                            <span style={{
                                fontFamily: 'monospace',
                                color: '#10B981',
                                fontSize: '0.85rem',
                                letterSpacing: '2px',
                                fontWeight: '600'
                            }}>SYSTEM ONLINE</span>
                        </div>
                        <div style={{
                            fontFamily: 'monospace',
                            color: '#F26C29',
                            fontSize: '0.85rem',
                            letterSpacing: '2px',
                            fontWeight: '600',
                            textShadow: '0 0 10px rgba(242, 108, 41, 0.5)'
                        }}>LIVE THREAT MONITORING</div>
                    </div>

                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/The_earth_at_night.jpg/1920px-The_earth_at_night.jpg"
                        alt="Global Defense Network"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.9,
                            filter: 'contrast(1.2) brightness(0.8)' // Enhance dark look
                        }}
                    />

                    {/* SVG Connections Overlay */}
                    <svg style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 5,
                        pointerEvents: 'none'
                    }}>
                        {connections.map(([startId, endId], index) => {
                            const start = defenseCenters.find(c => c.id === startId);
                            const end = defenseCenters.find(c => c.id === endId);
                            if (!start || !end) return null;
                            return (
                                <line
                                    key={index}
                                    x1={start.left}
                                    y1={start.top}
                                    x2={end.left}
                                    y2={end.top}
                                    stroke="#F26C29"
                                    strokeWidth="1"
                                    strokeDasharray="4 4"
                                    opacity="0.4"
                                >
                                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                                </line>
                            );
                        })}
                    </svg>

                    {/* Defense Points - Blinking Markers */}
                    {defenseCenters.map((center) => (
                        <div
                            key={center.id}
                            style={{
                                position: 'absolute',
                                top: center.top,
                                left: center.left,
                                transform: 'translate(-50%, -50%)',
                                zIndex: 10,
                                cursor: 'pointer'
                            }}
                            title={center.name}
                        >
                            {/* Inner Dot */}
                            <div style={{
                                width: '8px',
                                height: '8px',
                                background: '#F26C29',
                                borderRadius: '50%',
                                boxShadow: '0 0 10px #F26C29'
                            }}></div>
                            {/* Pulsing Ring */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '20px',
                                height: '20px',
                                border: '1px solid #F26C29',
                                borderRadius: '50%',
                                animation: 'pulse-ring 2s infinite'
                            }}></div>
                        </div>
                    ))}

                    {/* Bottom HUD Panel */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        padding: '1.5rem 2rem',
                        background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        zIndex: 20
                    }}>
                        <div style={{ display: 'flex', gap: '3rem' }}>
                            <div>
                                <div style={{ color: '#888', fontSize: '0.7rem', marginBottom: '4px', fontFamily: 'monospace' }}>ACTIVE NODES</div>
                                <div style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'monospace', fontWeight: 'bold' }}>12/12</div>
                            </div>
                            <div>
                                <div style={{ color: '#888', fontSize: '0.7rem', marginBottom: '4px', fontFamily: 'monospace' }}>NETWORK LATENCY</div>
                                <div style={{ color: '#F26C29', fontSize: '1.2rem', fontFamily: 'monospace', fontWeight: 'bold' }}>&lt; 20ms</div>
                            </div>
                            <div className="hidden md:block"> {/* Simple hide on mobile logic using Tailwind */}
                                <div style={{ color: '#888', fontSize: '0.7rem', marginBottom: '4px', fontFamily: 'monospace' }}>ENCRYPTION</div>
                                <div style={{ color: '#10B981', fontSize: '1.2rem', fontFamily: 'monospace', fontWeight: 'bold' }}>QUANTUM-READY</div>
                            </div>
                        </div>
                        <div style={{
                            fontFamily: 'monospace',
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '0.8rem',
                            letterSpacing: '1px'
                        }}>
                            SECURE CONNECTION v4.2
                        </div>
                    </div>
                </div>

                {/* KPI stats below map */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    <div className="glass-card kpi-card-animated">
                        <h3 style={{ fontSize: '3rem', color: '#F26C29', marginBottom: '0.5rem', fontWeight: '800' }}>18+</h3>
                        <p style={{ color: '#1f2937', margin: 0 }}>Advanced Cyber Defense Centres</p>
                    </div>
                    <div className="glass-card kpi-card-animated">
                        <h3 style={{ fontSize: '3rem', color: '#F26C29', marginBottom: '0.5rem', fontWeight: '800' }}>24/7</h3>
                        <p style={{ color: '#1f2937', margin: 0 }}>Continuous Threat Monitoring</p>
                    </div>
                    <div className="glass-card kpi-card-animated">
                        <h3 style={{ fontSize: '3rem', color: '#F26C29', marginBottom: '0.5rem', fontWeight: '800' }}>200+</h3>
                        <p style={{ color: '#1f2937', margin: 0 }}>Countries & Regions Covered</p>
                    </div>
                </div>

                <style jsx>{`

                    .kpi-card-animated {
                        padding: 2rem;
                        text-align: center;
                        position: relative;
                        border-radius: 16px;
                        background-color: rgba(255,255,255,0.03);
                        background-image: linear-gradient(90deg, #F26C29 50%, transparent 50%), linear-gradient(90deg, #F26C29 50%, transparent 50%), linear-gradient(0deg, #F26C29 50%, transparent 50%), linear-gradient(0deg, #F26C29 50%, transparent 50%);
                        background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
                        background-size: 15px 2px, 15px 2px, 2px 15px, 2px 15px;
                        background-position: 0 0, 100% 100%, 0 100%, 100% 0;
                        animation: border-dance 4s infinite linear;
                    }
                    @keyframes border-dance {
                        0% {
                            background-position: 0 0, 100% 100%, 0 100%, 100% 0;
                        }
                        100% {
                            background-position: 30px 0, calc(100% - 30px) 100%, 0 calc(100% - 30px), 100% 30px;
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
