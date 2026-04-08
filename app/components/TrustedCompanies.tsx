'use client';

import Image from 'next/image';

const companies = [
    { name: 'IBM', logo: '/images/companies/IBM-Emblem.png', width: 180, height: 90, logoSize: '180px', scale: 1 },
    { name: 'Google', logo: '/images/companies/google logo.png', width: 180, height: 90, logoSize: '180px', scale: 1.5 },
    { name: 'Samsung', logo: '/images/companies/samsung logo.png', width: 180, height: 90, logoSize: '180px', scale: 1.6 },
    { name: 'HCL', logo: '/images/companies/HCL.png', width: 180, height: 90, logoSize: '180px', scale: 1.5 },
    { name: 'BSNL', logo: '/images/companies/BSNL.png', width: 180, height: 90, logoSize: '160px', scale: 1 },
    { name: 'GAIL', logo: '/images/companies/GAIL_Logo.png', width: 180, height: 90, logoSize: '160px', scale: 1 },
    { name: 'C-DAC', logo: '/images/companies/c-dack-logo.png', width: 180, height: 90, logoSize: '180px', scale: 1 },
    { name: 'Aon', logo: '/images/companies/aon-logo.png', width: 180, height: 90, logoSize: '170px', scale: 1 },
    { name: 'NDTV', logo: '/images/companies/NDTV-logo.png', width: 180, height: 90, logoSize: '190px', scale: 1.7 },
    { name: 'MetLife', logo: '/images/companies/metlife-logo.png', width: 180, height: 90, logoSize: '190px', scale: 1.5 },
];

export default function TrustedCompanies() {


    return (
        <section className="trusted-by-section" style={{
            padding: '1.5rem 0 2rem',
            background: '#FAFAFA',
            borderBottom: '1px solid #ff6b00'

        }}>
            <div className="container">
                <div className="text-center px-4" style={{ marginBottom: '2rem' }}>
                    <span
                        className="bg-[#FF6B00] text-white rounded-full font-bold inline-block shadow-lg"
                        style={{
                            fontSize: 'max(1rem, min(1.25rem, 4vw))',
                            padding: '0.6rem 1.5rem',
                            boxShadow: '0 4px 15px rgba(242, 108, 41, 0.25)'
                        }}
                    >
                        Trusted Security Partner For Leading Enterprises
                    </span>
                </div>

                {/* Companies Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            style={{
                                border: '2px solid #F26C29',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                background: 'white',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(242, 108, 41, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Logo Area */}
                            <div style={{
                                height: 'clamp(90px, 15vw, 120px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 'clamp(0.75rem, 2vw, 1.5rem)',
                                background: 'white',
                                flex: 1
                            }}>
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={company.width}
                                    height={company.height}
                                    style={{
                                        width: 'auto',
                                        maxWidth: '100%',
                                        maxHeight: 'clamp(60px, 10vw, 80px)',
                                        objectFit: 'contain',
                                        transform: `scale(${company.scale})`
                                    }}
                                />
                            </div>

                            {/* Name Area */}
                            <div style={{
                                background: '#ec7c00',
                                color: 'white',
                                padding: '0.8rem 0.5rem',
                                textAlign: 'center',
                                fontSize: '1rem',
                                fontWeight: '700',
                                width: '100%'
                            }}>
                                {company.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
