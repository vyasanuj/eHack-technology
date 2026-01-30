'use client';

import Image from 'next/image';

const companies = [
    { name: 'IBM', logo: '/images/companies/IBM-Emblem.png', width: 140, height: 60, scale: 1.25 },
    { name: 'Google', logo: '/images/companies/google logo.png', width: 140, height: 60, scale: 1.25 },
    { name: 'Samsung', logo: '/images/companies/samsung logo.png', width: 140, height: 60, scale: 1.25 },
    { name: 'HCL', logo: '/images/companies/HCL.png', width: 140, height: 60, scale: 1.25 },
    { name: 'BSNL', logo: '/images/companies/BSNL.png', width: 140, height: 60, scale: 1.25 },
    { name: 'GAIL', logo: '/images/companies/GAIL_Logo.png', width: 140, height: 60, scale: 1.25 },
    { name: 'C-DAC', logo: '/images/companies/c-dack-logo.png', width: 140, height: 60, scale: 1.25 },
    { name: 'NHPC', logo: '/images/companies/NHPC_Logo_PNG_File.png', width: 140, height: 60, scale: 1.25 },
    { name: 'NDTV', logo: '/images/companies/NDTV-logo.png', width: 140, height: 60, scale: 1.25 },
    { name: 'MetLife', logo: '/images/companies/metlife-logo.png', width: 140, height: 60, scale: 1.25 },
    { name: 'Aon', logo: '/images/companies/aon-logo.png', width: 140, height: 60, scale: 1.25 },
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
                    marginBottom: '3rem'
                }}>
                    <span style={{
                        background: '#F26C29',
                        color: 'white',
                        fontSize: '1.1rem',
                        padding: '0.75rem 2rem',
                        borderRadius: '50px',
                        fontWeight: '700',
                        display: 'inline-block'
                    }}>
                        Trusted Security Partner For Leading Enterprises
                    </span>
                </div>

                {/* Marquee Container */}
                <div className="marquee-container" style={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    padding: '1rem 0'
                }}>
                    <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .marquee-track {
              display: inline-flex;
              gap: 2rem;
              animation: scroll 40s linear infinite;
              padding: 1rem 0;
              align-items: center;
            }
            .marquee-container:hover .marquee-track {
              animation-play-state: paused;
            }
            .company-card {
                border: 1px solid #F26C29;
                border-radius: 12px;
                overflow: hidden;
                background: white;
                transition: transform 0.3s ease;
                width: 240px;
                flex-shrink: 0;
            }
            .company-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(242, 108, 41, 0.15);
            }
          `}</style>

                    {/* Track */}
                    <div className="marquee-track">
                        {[...companies, ...companies, ...companies].map((company, index) => (
                            <div
                                key={index}
                                className="company-card"
                            >
                                {/* Logo Area */}
                                <div style={{
                                    height: '140px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '1rem',
                                    background: 'white'
                                }}>
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '100%',
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
                                                maxHeight: '100px',
                                                maxWidth: '100%',
                                                objectFit: 'contain',
                                                transform: `scale(${company.scale})`
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Name Area */}
                                <div style={{
                                    background: '#F26C29',
                                    color: 'white',
                                    padding: '0.5rem',
                                    textAlign: 'center',
                                    fontSize: '0.9rem',
                                    fontWeight: '600'
                                }}>
                                    {company.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
