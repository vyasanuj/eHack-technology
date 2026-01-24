'use client';

import Image from 'next/image';

const companies = [
    { name: 'Ampcus Cyber', logo: '/images/ampcuscyber.png', width: 140, height: 60, scale: 1.35 }, // Increased scale
    { name: 'Anuvu', logo: '/images/anuvu.png', width: 140, height: 60, scale: 1.25 }, // Increased scale
    { name: 'Grant Thornton', logo: '/images/gtlogo.jpg', width: 140, height: 60, scale: 1.2 },
    { name: 'Ask4 Limited', logo: '/images/ask4_limited_logo.jpg', width: 140, height: 60, scale: 1.1 },
    { name: 'Deloitte', logo: '/images/companies/deloitte.svg', width: 140, height: 50, scale: 1.1 },
    { name: 'Fiserv', logo: '/images/fiserv.png', width: 120, height: 50, scale: 1.2 },
    { name: 'SISA', logo: '/images/sisa.webp', width: 120, height: 50, scale: 1.3 },
    { name: 'EY', logo: '/images/companies/ey.svg', width: 80, height: 50, scale: 1.4 },
    { name: 'Infosys', logo: '/images/companies/infosys.svg', width: 100, height: 50, scale: 1.2 },
    { name: 'KPMG', logo: '/images/companies/kpmg.svg', width: 100, height: 50, scale: 1.4 }, // Increased scale
];

export default function TrustedCompanies() {
    return (
        <section className="trusted-by-section" style={{
            padding: '1.5rem 0 2rem', // Reduced bottom padding from 4rem to 2rem
            background: '#FAFAFA',
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{ overflow: 'hidden' }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '2rem' // Reduced margin
                }}>
                    <p style={{
                        color: '#666',
                        fontSize: '1rem',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        Trusted Security Partner For Leading Enterprises
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="marquee-container" style={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'
                }}>
                    <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .marquee-track {
              display: inline-flex;
              gap: 3rem; /* Reduced gap from 5rem */
              animation: scroll 40s linear infinite; /* Adjusted speed slightly for smaller gap */
              padding: 1.5rem 0;
              align-items: center;
            }
            .marquee-container:hover .marquee-track {
              animation-play-state: paused;
            }
          `}</style>

                    {/* Track */}
                    <div className="marquee-track">
                        {[...companies, ...companies, ...companies].map((company, index) => (
                            <div
                                key={index}
                                className="company-logo-wrapper"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    filter: 'none',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer',
                                    margin: '0 2rem'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <div style={{
                                    position: 'relative',
                                    height: '80px', // Increased wrapper height
                                    width: 'auto',
                                    minWidth: '140px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        width={company.width}
                                        height={company.height}
                                        style={{
                                            width: 'auto',
                                            height: 'auto',
                                            maxHeight: '60px',
                                            objectFit: 'contain',
                                            transform: `scale(${company.scale})` // Apply individual scale
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
