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
    const topRow = companies.slice(0, 5);
    const bottomRow = companies.slice(5, 10);

    return (
        <section className="trusted-by-section" style={{
            padding: '1.5rem 0 2rem',
            background: '#FAFAFA',
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container">
                <div style={{
                    textAlign: 'center',
                    marginBottom: '2.5rem'
                }}>
                    <span style={{
                        background: '#F26C29',
                        color: 'white',
                        fontSize: '1.25rem',
                        padding: '0.85rem 2.5rem',
                        borderRadius: '50px',
                        fontWeight: '700',
                        display: 'inline-block',
                        boxShadow: '0 4px 15px rgba(242, 108, 41, 0.25)'
                    }}>
                        Trusted Security Partner For Leading Enterprises
                    </span>
                </div>

                {/* Top Row - 5 Companies */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: '1.5rem',
                    marginBottom: '1.5rem'
                }}>
                    {topRow.map((company, index) => (
                        <div
                            key={index}
                            style={{
                                border: '2px solid #F26C29',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                background: 'white',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
                                height: '110px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1rem',
                                background: 'white'
                            }}>
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={company.width}
                                    height={company.height}
                                    style={{
                                        width: company.logoSize,
                                        height: 'auto',
                                        maxHeight: '95px',
                                        objectFit: 'contain',
                                        transform: `scale(${company.scale})`
                                    }}
                                />
                            </div>

                            {/* Name Area */}
                            <div style={{
                                background: '#ec7c00',
                                color: 'white',
                                padding: '0.6rem',
                                textAlign: 'center',
                                fontSize: '1rem',
                                fontWeight: '700'
                            }}>
                                {company.name}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Row - 5 Companies */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: '1.5rem'
                }}>
                    {bottomRow.map((company, index) => (
                        <div
                            key={index}
                            style={{
                                border: '2px solid #F26C29',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                background: 'white',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
                                height: '110px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1rem',
                                background: 'white'
                            }}>
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={company.width}
                                    height={company.height}
                                    style={{
                                        width: company.logoSize,
                                        height: 'auto',
                                        maxHeight: '95px',
                                        objectFit: 'contain',
                                        transform: `scale(${company.scale})`
                                    }}
                                />
                            </div>

                            {/* Name Area */}
                            <div style={{
                                background: '#ec7c00',
                                color: 'white',
                                padding: '0.6rem',
                                textAlign: 'center',
                                fontSize: '1rem',
                                fontWeight: '700'
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
