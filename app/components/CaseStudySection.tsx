"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudySection() {
    const [activeTab, setActiveTab] = useState<'education' | 'fintech'>('education');
    const [typedLines, setTypedLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    // Terminal Content Configuration
    const terminalContent = {
        education: [
            { text: "msf6 > use exploit/multi/http/university_sql_injection", type: "input", prompt: "msf6 > " },
            { text: "[*] Using configured payload generic/shell_reverse_tcp", type: "info" },
            { text: "msf6 exploit(university_sql_injection) > set RHOSTS portal.delhi-heritage.edu", type: "input", prompt: "msf6 exploit(university_sql_injection) > " },
            { text: "RHOSTS => portal.delhi-heritage.edu", type: "success" },
            { text: "msf6 exploit(university_sql_injection) > check", type: "input", prompt: "msf6 exploit(university_sql_injection) > " },
            { text: "[+] The target is vulnerable. SQLi detected in 'student_id' parameter.", type: "success" },
            { text: "msf6 exploit(university_sql_injection) > run", type: "input", prompt: "msf6 exploit(university_sql_injection) > " },
            { text: "[*] Started reverse TCP handler on 192.168.1.100:4444", type: "info" },
            { text: "[*] Sending stage (1024 bytes) to 203.0.113.15", type: "info" },
            { text: "[+] Vulnerability Patched. WAF Rules Updated.", type: "successish" }
        ],
        fintech: [
            { text: "root@kali:~# nmap -p 445 --script smb-vuln-ms17-010 10.10.20.0/24", type: "input", prompt: "root@kali:~# " },
            { text: "Starting Nmap 7.94 ( https://nmap.org )", type: "info" },
            { text: "Nmap scan report for 10.10.20.45", type: "info" },
            { text: "Host is likely VULNERABLE to MS17-010 (EternalBlue)!", type: "error" },
            { text: "root@kali:~# isolate_host --id 10.10.20.45 --immediate", type: "input", prompt: "root@kali:~# " },
            { text: "[*] Sending isolation command to EDR agent...", type: "info" },
            { text: "[+] Host isolated successfully. Lateral movement blocked.", type: "success" },
            { text: "root@kali:~# analyze_malware --sample ransom_v2.exe", type: "input", prompt: "root@kali:~# " },
            { text: "[*] Extracting IOCs... Killswitch domain found.", type: "warning" },
            { text: "[+] Attack Neutralized. 0 items encrypted.", type: "successish" }
        ]
    };

    // Reset and start animation on tab change
    useEffect(() => {
        setTypedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
    }, [activeTab]);

    // Typing Effect Logic
    useEffect(() => {
        const lines = terminalContent[activeTab];
        if (currentLineIndex >= lines.length) return;

        const currentLineData = lines[currentLineIndex];

        // If it's an input line, simulate typing
        if (currentLineData.type === 'input') {
            const fullText = currentLineData.text;
            const prompt = currentLineData.prompt || "";
            const textToType = fullText.slice(prompt.length); // Only type the command part, prompt appears instantly

            if (currentCharIndex < textToType.length) {
                const timeout = setTimeout(() => {
                    setTypedLines(prev => {
                        const newLines = [...prev];
                        // If first char, push the prompt first
                        if (currentCharIndex === 0) {
                            newLines[currentLineIndex] = prompt + textToType.charAt(0);
                        } else {
                            newLines[currentLineIndex] = prev[currentLineIndex] + textToType.charAt(currentCharIndex);
                        }
                        return newLines;
                    });
                    setCurrentCharIndex(prev => prev + 1);
                }, 30 + Math.random() * 50); // Random typing speed
                return () => clearTimeout(timeout);
            } else {
                // Finished typing line, move to next
                const timeout = setTimeout(() => {
                    setCurrentLineIndex(prev => prev + 1);
                    setCurrentCharIndex(0);
                }, 500); // Pause after typing
                return () => clearTimeout(timeout);
            }
        } else {
            // If it's output, show immediately (or with slight delay)
            const timeout = setTimeout(() => {
                setTypedLines(prev => {
                    const newLines = [...prev];
                    newLines[currentLineIndex] = currentLineData.text;
                    return newLines;
                });
                setCurrentLineIndex(prev => prev + 1);
                setCurrentCharIndex(0);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [activeTab, currentLineIndex, currentCharIndex]);


    return (
        <section className="section section-dark" style={{ overflow: 'hidden' }}>
            <div className="container">

                {/* Section Header */}
                <div className="section-header" style={{ marginBottom: '3rem' }}>
                    <span className="section-label" style={{
                        background: '#F26C29',
                        color: 'white',
                        fontSize: '1rem',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '50px',
                        display: 'inline-block',
                        marginBottom: '1rem',
                        fontWeight: '600'
                    }}>Real World Impact</span>
                    <h2 className="section-title">Security in <span style={{ color: '#F26C29' }}>Action</span></h2>
                    <p className="section-subtitle">
                        See how eHack Global Technology protects organizations from critical threats
                    </p>
                </div>

                {/* Tab Switcher */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '3rem'
                }}>
                    <div style={{
                        background: 'white',
                        padding: '0.5rem',
                        borderRadius: '50px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        display: 'inline-flex',
                        gap: '0.5rem'
                    }}>
                        <button
                            onClick={() => setActiveTab('education')}
                            style={{
                                padding: '0.75rem 2rem',
                                borderRadius: '40px',
                                border: 'none',
                                background: activeTab === 'education' ? '#F26C29' : 'transparent',
                                color: activeTab === 'education' ? 'white' : '#666',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Education Breach
                        </button>
                        <button
                            onClick={() => setActiveTab('fintech')}
                            style={{
                                padding: '0.75rem 2rem',
                                borderRadius: '40px',
                                border: 'none',
                                background: activeTab === 'fintech' ? '#F26C29' : 'transparent',
                                color: activeTab === 'fintech' ? 'white' : '#666',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            FinTech Ransomware
                        </button>
                    </div>
                </div>

                {/* Dynamic Content Container ("Wider Marquee Frame") */}
                <div style={{ position: 'relative', padding: '10px' }}> {/* Outer Wrapper for spacing */}

                    {/* MARQUEE BORDER TOP */}
                    <div className="animate-stripe-pattern" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '35px',
                        backgroundColor: '#F26C29', // Fallback/Base color
                        overflow: 'hidden',
                        borderRadius: '16px 16px 0 0',
                        display: 'flex',
                        alignItems: 'center',
                        zIndex: 2,
                        border: '1px solid #D45A1F',
                        boxShadow: '0 4px 15px rgba(242, 108, 41, 0.3)'
                    }}>
                        <div className="animate-marquee" style={{
                            whiteSpace: 'nowrap',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            letterSpacing: '0.1em',
                            display: 'flex',
                            gap: '2rem'
                        }}>
                            {/* Repeat text to ensure continuous scroll */}
                            {[...Array(10)].map((_, i) => (
                                <span key={i}>
                                    {activeTab === 'education'
                                        ? "⚠ CRITICAL ALERT: SQL INJECTION DETECTED // PROTECTING STUDENT DATABASE // DEPLOYING WAF RULES // SCANNING FOR VULNERABILITIES // SYSTEM SECURE ⚠"
                                        : "⚠ SECURITY WARNING: RANSOMWARE SIGNATURE MATCHED // ISOLATING INFECTED HOSTS // BLOCKING PORT 445 // DECRYPTING TRAFFIC // THREAT NEUTRALIZED ⚠"
                                    }
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* SIDE BORDER LEFT */}
                    <div className="animate-stripe-pattern" style={{
                        position: 'absolute',
                        top: '0',
                        bottom: '0',
                        left: 0,
                        width: '25px', // Increased width
                        backgroundColor: '#F26C29',
                        zIndex: 3, // Sit on top of corners for seamless look or match zIndex
                        borderRight: '1px solid #D45A1F',
                        borderLeft: '1px solid #D45A1F'
                    }}></div>

                    {/* SIDE BORDER RIGHT */}
                    <div className="animate-stripe-pattern" style={{
                        position: 'absolute',
                        top: '0',
                        bottom: '0',
                        right: 0,
                        width: '25px', // Increased width
                        backgroundColor: '#F26C29',
                        zIndex: 3,
                        borderLeft: '1px solid #D45A1F',
                        borderRight: '1px solid #D45A1F'
                    }}></div>

                    {/* MARQUEE BORDER BOTTOM */}
                    <div className="animate-stripe-pattern" style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '35px',
                        backgroundColor: '#F26C29',
                        overflow: 'hidden',
                        borderRadius: '0 0 16px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        zIndex: 2,
                        border: '1px solid #D45A1F',
                        boxShadow: '0 -4px 15px rgba(242, 108, 41, 0.3)'
                    }}>
                        <div className="animate-marquee" style={{
                            whiteSpace: 'nowrap',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            letterSpacing: '0.1em',
                            display: 'flex',
                            gap: '2rem',
                            animationDirection: 'reverse' // Scroll other way for bottom
                        }}>
                            {/* Repeat text to ensure continuous scroll */}
                            {[...Array(10)].map((_, i) => (
                                <span key={i}>
                                    {activeTab === 'education'
                                        ? "⚠ CRITICAL ALERT: SQL INJECTION DETECTED // PROTECTING STUDENT DATABASE // DEPLOYING WAF RULES // SCANNING FOR VULNERABILITIES // SYSTEM SECURE ⚠"
                                        : "⚠ SECURITY WARNING: RANSOMWARE SIGNATURE MATCHED // ISOLATING INFECTED HOSTS // BLOCKING PORT 445 // DECRYPTING TRAFFIC // THREAT NEUTRALIZED ⚠"
                                    }
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Box (Wrapped) */}
                    <div className="glass" style={{
                        borderRadius: '16px',
                        padding: '4rem 4rem', // Increased side padding
                        background: 'linear-gradient(145deg, #ffffff, #fff5f0)',
                        // No solid border here, moving frame handles it
                        borderTop: 'none',
                        borderBottom: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        boxShadow: '0 20px 60px -15px rgba(242, 108, 41, 0.15)',
                        position: 'relative',
                        overflow: 'hidden',
                        marginLeft: '15px', // Increased Offset
                        marginRight: '15px'
                    }}>

                        {/* Content Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1.2fr',
                            gap: '4rem',
                            alignItems: 'center'
                        }}>

                            {/* Left: Text Content */}
                            <div className={`animate-fadeIn`} key={`${activeTab}-text`}>
                                {activeTab === 'education' ? (
                                    <>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '0.4rem 1rem',
                                            background: '#fee2e2',
                                            color: '#dc2626',
                                            borderRadius: '8px',
                                            fontSize: '0.85rem',
                                            fontWeight: '700',
                                            marginBottom: '1.5rem',
                                            border: '1px solid #fecaca'
                                        }}>
                                            CASE STUDY: DELHI HERITAGE UNIVERSITY
                                        </div>
                                        <h3 style={{
                                            fontSize: '2.5rem',
                                            marginBottom: '1.5rem',
                                            lineHeight: '1.2',
                                            color: '#1a1a1a'
                                        }}>
                                            Securing <span style={{ color: '#F26C29' }}>10L+ Student Records</span> from a Critical SQL Injection
                                        </h3>
                                        <p style={{ color: '#555', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                            <strong>The Breach:</strong> A critical vulnerability in the university's examination portal exposed sensitive personal data and grade sheets of over 10 lakh students to potential dark web leaks.
                                        </p>

                                        <div style={{ marginBottom: '2.5rem' }}>
                                            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#333' }}>The eHack Academy Solution:</h4>
                                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                                {[
                                                    'Identified blind SQL injection points within 2 hours',
                                                    'Deployed emergency WAF patches immediately',
                                                    'Sanitized database queries & implemented RBAC'
                                                ].map((item, i) => (
                                                    <li key={i} style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.75rem',
                                                        marginBottom: '0.75rem',
                                                        color: '#555'
                                                    }}>
                                                        <span style={{
                                                            color: '#F26C29',
                                                            background: 'rgba(242,108,41,0.1)',
                                                            borderRadius: '50%',
                                                            width: '20px',
                                                            height: '20px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '0.8rem'
                                                        }}>✓</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div style={{
                                            borderLeft: '4px solid #F26C29',
                                            paddingLeft: '1.5rem',
                                            background: 'rgba(242,108,41,0.03)',
                                            padding: '1rem 1.5rem'
                                        }}>
                                            <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#444' }}>
                                                "eHack's rapid response saved our reputation. Their team identified holes our previous auditors missed in months."
                                            </p>
                                            <p style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '0.9rem' }}>
                                                — Dr. Rajesh Verma, Dean of Technology
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '0.4rem 1rem',
                                            background: '#fef3c7',
                                            color: '#d97706',
                                            borderRadius: '8px',
                                            fontSize: '0.85rem',
                                            fontWeight: '700',
                                            marginBottom: '1.5rem',
                                            border: '1px solid #fde68a'
                                        }}>
                                            CASE STUDY: MUMBAI PAYSAFE FINTECH
                                        </div>
                                        <h3 style={{
                                            fontSize: '2.5rem',
                                            marginBottom: '1.5rem',
                                            lineHeight: '1.2',
                                            color: '#1a1a1a'
                                        }}>
                                            Preventing a <span style={{ color: '#F26C29' }}>₹50 Crore</span> Ransomware Attack
                                        </h3>
                                        <p style={{ color: '#555', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                            <strong>The Threat:</strong> A sophisticated ransomware group targeted the payment gateway infrastructure, threatening to encrypt transaction logs and demand a massive ransom.
                                        </p>

                                        <div style={{ marginBottom: '2.5rem' }}>
                                            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#333' }}>The eHack Academy Solution:</h4>
                                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                                {[
                                                    'Detecting lateral movement in internal network',
                                                    'Isolated compromised endpoints instantly',
                                                    'Reverse-engineered malware strain to block execution'
                                                ].map((item, i) => (
                                                    <li key={i} style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.75rem',
                                                        marginBottom: '0.75rem',
                                                        color: '#555'
                                                    }}>
                                                        <span style={{
                                                            color: '#F26C29',
                                                            background: 'rgba(242,108,41,0.1)',
                                                            borderRadius: '50%',
                                                            width: '20px',
                                                            height: '20px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '0.8rem'
                                                        }}>✓</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div style={{
                                            borderLeft: '4px solid #F26C29',
                                            paddingLeft: '1.5rem',
                                            background: 'rgba(242,108,41,0.03)',
                                            padding: '1rem 1.5rem'
                                        }}>
                                            <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#444' }}>
                                                "We were hours away from a total shutdown. The forensic analysis by eHack was world-class."
                                            </p>
                                            <p style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '0.9rem' }}>
                                                — Vikram Malhotra, CTO Paysafe
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Right: Visual (Kali Linux Code Lab Panel) */}
                            <div className="animate-scaleIn" style={{ position: 'relative' }}>

                                {/* Kali Linux Window Mockup */}
                                <div style={{
                                    background: '#0F0F1A', // Dark Kali BG
                                    borderRadius: '8px',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
                                    fontFamily: "'Courier New', Courier, monospace",
                                    overflow: 'hidden',
                                    border: '1px solid #333',
                                    height: '450px',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    {/* Window Title Bar */}
                                    <div style={{
                                        background: '#1F2026',
                                        padding: '0.5rem 1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        borderBottom: '1px solid #000'
                                    }}>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                                        </div>
                                        <div style={{ color: '#ccc', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                            root@kali:~/{activeTab === 'education' ? 'metasploit-framework' : 'incident-response'}
                                        </div>
                                        <div style={{ width: '40px' }}></div> {/* Spacer */}
                                    </div>

                                    {/* Kali Menu Bar */}
                                    <div style={{
                                        background: '#2B2C36',
                                        padding: '0.2rem 1rem',
                                        display: 'flex',
                                        gap: '1.5rem',
                                        color: '#CCC',
                                        fontSize: '0.8rem',
                                        borderBottom: '1px solid #111'
                                    }}>
                                        <span>File</span>
                                        <span>Edit</span>
                                        <span>View</span>
                                        <span>Search</span>
                                        <span>Terminal</span>
                                        <span>Help</span>
                                    </div>

                                    {/* Live Demo Badge */}
                                    <div style={{ position: 'absolute', top: '50px', right: '20px', zIndex: 10 }}>
                                        <div style={{
                                            background: '#EF4444',
                                            color: 'white',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '4px',
                                            fontSize: '0.7rem',
                                            fontWeight: 'bold',
                                            boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px'
                                        }}>
                                            <span style={{ width: '6px', height: '6px', background: 'white', borderRadius: '50%', display: 'inline-block' }}></span>
                                            LIVE DEMO
                                        </div>
                                    </div>


                                    {/* Terminal Content Area */}
                                    <div style={{
                                        padding: '1rem',
                                        color: '#d4d4d4',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        overflowY: 'auto',
                                        flex: 1,
                                        position: 'relative'
                                    }}>

                                        {/* ASCII Art for Metasploit (Condensed) */}
                                        {activeTab === 'education' && (
                                            <div style={{ color: '#2C5CD6', fontSize: '0.6rem', lineHeight: '1', whiteSpace: 'pre', marginBottom: '1rem', opacity: 0.8 }}>
                                                {`
      .:okOOOkdc'           'cdkOOOko:.
    .xOOOOOOOOOOOOc       cOOOOOOOOOOOOx.
   :OOOOOOOOOOOOOOOk,   ,kOOOOOOOOOOOOOOO:
  'OOOOOOOOOkkkkOOOOO: :OOOOOOOOOOOOOOOOOO'
  oOOOOOOOO.    .oOOOOoOOOOl.    ,OOOOOOOOo
  dOOOOOOOO.      .cOOOOOc.      ,OOOOOOOOx
  lOOOOOOOO.         ;d;         ,OOOOOOOOl
  .OOOOOOOO.         .;.         ,OOOOOOOO.
   cOOOOOOO.                     ,OOOOOOOc
    oOOOOOO.                     ,OOOOOOo
     lOOOOO.                     ,OOOOOl
      ;OOOO'                     'OOOO;
       .dOOo                     oOOd.
         .ok                     ko.
           .                     .
`}
                                            </div>
                                        )}


                                        {typedLines.map((line, index) => {
                                            const lineData = terminalContent[activeTab][index];
                                            if (!lineData) return null; // Safety check

                                            // Styling based on type
                                            let lineStyle: { color: string; fontWeight?: string } = { color: '#E0E0E0' }; // Default white
                                            if (lineData.type === 'input') lineStyle = { color: '#E0E0E0', fontWeight: 'bold' };
                                            if (lineData.type === 'info') lineStyle = { color: '#569CD6' }; // Blue
                                            if (lineData.type === 'success') lineStyle = { color: '#27C93F' }; // Green
                                            if (lineData.type === 'successish') lineStyle = { color: '#27C93F', fontWeight: 'bold' };
                                            if (lineData.type === 'error') lineStyle = { color: '#EF4444', fontWeight: 'bold' }; // Red
                                            if (lineData.type === 'warning') lineStyle = { color: '#F59E0B' }; // Orange

                                            return (
                                                <div key={index} style={{ marginBottom: '0.25rem', ...lineStyle }}>
                                                    {line}
                                                </div>
                                            );
                                        })}

                                        {/* Blinking Cursor */}
                                        {currentLineIndex < terminalContent[activeTab].length && (
                                            <div style={{ display: 'inline-block' }}>
                                                <span style={{
                                                    display: 'inline-block',
                                                    width: '8px',
                                                    height: '15px',
                                                    background: '#ccc',
                                                    verticalAlign: 'middle',
                                                    animation: 'pulse 1s infinite'
                                                }}></span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Bottom Status Bar */}
                                    <div style={{
                                        background: '#2B2C36',
                                        padding: '0.2rem 1rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        color: '#777',
                                        fontSize: '0.75rem',
                                        borderTop: '1px solid #111'
                                    }}>
                                        <span>Running as root</span>
                                        <span>UTF-8</span>
                                    </div>

                                </div>

                                {/* Optional Decoration/Glow */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    right: '-20px',
                                    width: '100px',
                                    height: '100px',
                                    background: 'radial-gradient(circle, rgba(242,108,41,0.2) 0%, rgba(255,255,255,0) 70%)',
                                    zIndex: -1
                                }}></div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
