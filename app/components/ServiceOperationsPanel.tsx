'use client';

import { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Search, Activity, Cpu, Lock } from 'lucide-react';

interface ServiceOperationsPanelProps {
    serviceName: string;
}

const operationsData: Record<string, string[]> = {
    'api-security': [
        'Initializing API Endpoint Discovery...',
        'Scanning for Broken Object Level Authorization...',
        'Testing JWT token entropy...',
        'Checking rate limit enforcement on /api/v1/auth',
        'Intercepting GraphQL introspection query...',
        'Analyzing API3:2019 Excessive Data Exposure...',
        'Validating CORS policy implementation...',
        'Cross-referencing OWASP API Top 10 database...',
    ],
    'web-security': [
        'Launching Automated Vulnerability Scan...',
        'Crawling application filesystem...',
        'Testing SQL Injection on login parameters...',
        'Checking for Cross-Site Scripting (XSS) in search fields...',
        'Analyzing HTTP headers for security gaps...',
        'Probing for SSRF vulnerabilities...',
        'Validating SSL/TLS certificates and ciphers...',
        'Manual business logic assessment in progress...',
    ],
    'mobile-security': [
        'Decompiling APK/IPA binary files...',
        'Searching for hardcoded API keys in source...',
        'Analyzing local storage for PII exposure...',
        'Testing for jailbreak/root detection bypass...',
        'Intercepting HTTPS traffic for MITM testing...',
        'Reviewing platform-specific security permissions...',
        'Verifying binary hardening (ASLR, Stack Canaries)...',
        'Testing Insecure Data Storage patterns...',
    ],
    'infrastructure': [
        'Enumerating network assets and hostnames...',
        'Probing for open ports on external infrastructure...',
        'Scanning for Active Directory misconfigurations...',
        'Analyzing firewall rule priority and overlaps...',
        'Checking for unauthorized cloud services (Shadow IT)...',
        'Testing VPN authentication bypass scenarios...',
        'Reviewing security group ingress/egress rules...',
        'Auditing container orchestration security...',
    ],
    'red-team': [
        'Generating OSINT profile for target organization...',
        'Crafting targeted spear-phishing payloads...',
        'Deploying stealth beacon on simulated endpoint...',
        'Attempting lateral movement via SMB...',
        'Scanning for privilege escalation vectors...',
        'Enumerating sensitive file shares...',
        'Simulating data exfiltration over DNS...',
        'Bypassing simulated EDR detection...',
    ],
    'forensics': [
        'Acquiring bit-stream image of evidence disk...',
        'Computing MD5/SHA256 hashes for chain of custody...',
        'Searching for deleted file recovery headers...',
        'Parsing Windows Registry for malware persistency...',
        'Analyzing network traffic logs for compromise indicators...',
        'Decoding encrypted containers and archives...',
        'Reviewing system event logs for unauthorized access...',
        'Extracting browser history and internet artifacts...',
    ]
};

const defaultOps = [
    'Scanning system architecture...',
    'Analyzing security controls...',
    'Validating compliance standards...',
    'Probing for vulnerability patterns...',
    'Testing endpoint resilience...',
    'Cross-referencing threat intelligence data...',
    'Reviewing operational logs...',
    'Finalizing security report draft...',
];

export default function ServiceOperationsPanel({ serviceName }: ServiceOperationsPanelProps) {
    const [logs, setLogs] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('Initializing');
    const logsEndRef = useRef<HTMLDivElement>(null);

    const ops = operationsData[serviceName] || defaultOps;

    useEffect(() => {
        let logIndex = 0;
        const logInterval = setInterval(() => {
            if (logIndex < ops.length) {
                setLogs(prev => [...prev.slice(-7), ops[logIndex]]);
                logIndex++;
                setProgress(prev => Math.min(prev + (100 / ops.length), 100));
            } else {
                logIndex = 0;
                setLogs([]);
                setProgress(0);
                setStatus('Analysis Completed - Re-scanning');
                setTimeout(() => setStatus('Operating'), 2000);
            }
        }, 3000);

        return () => clearInterval(logInterval);
    }, [ops]);

    useEffect(() => {
        if (logsEndRef.current && logsEndRef.current.parentElement) {
            const container = logsEndRef.current.parentElement;
            container.scrollTop = container.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="ops-panel" style={{
            background: '#22272E',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
            color: '#E6EDF3',
            fontFamily: 'var(--font-mono, monospace)',
            border: '1px solid #444C56',
            position: 'relative',
            height: '420px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Header */}
            <div style={{
                background: '#2D333B',
                padding: '12px 20px',
                borderBottom: '1px solid #444C56',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="pulse-dot" style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#3FB950',
                        boxShadow: '0 0 10px #3FB950'
                    }}></div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#8B949E' }}>LIVE OPERATIONS MONITOR</span>
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F85149' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D29922' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3FB950' }}></div>
                </div>
            </div>

            {/* Metrics */}
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8B949E', fontSize: '0.7rem', marginBottom: '4px' }}>
                            <Activity size={12} /> STATUS
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#F26C29', fontWeight: 'bold' }}>{status}</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8B949E', fontSize: '0.7rem', marginBottom: '4px' }}>
                            <Cpu size={12} /> ENGINE
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#3FB950', fontWeight: 'bold' }}>v5.2.0-STABLE</div>
                    </div>
                </div>

                {/* Progress */}
                <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8B949E', fontSize: '0.7rem', marginBottom: '6px' }}>
                        <span>SYSTEM SCAN PROGRESS</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div style={{ height: '4px', background: '#30363D', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{
                            height: '100%',
                            width: `${progress}%`,
                            background: 'linear-gradient(90deg, #F26C29, #FF8A4C)',
                            transition: 'width 0.3s ease'
                        }}></div>
                    </div>
                </div>

                {/* Terminal Logs */}
                <div className="terminal-log" style={{
                    background: '#1C2128',
                    borderRadius: '8px',
                    padding: '15px',
                    flex: 1,
                    minHeight: '160px',
                    fontSize: '0.75rem',
                    lineHeight: '1.6',
                    overflowY: 'auto',
                    border: '1px solid #444C56',
                    scrollbarWidth: 'none', /* Firefox */
                    msOverflowStyle: 'none'  /* IE/Edge */
                }}>
                    {logs.map((log, i) => (
                        <div key={i} style={{ marginBottom: '6px', opacity: i === logs.length - 1 ? 1 : 0.5 }}>
                            <span style={{ color: '#F26C29', marginRight: '8px' }}>➜</span>
                            <span style={{ color: '#8B949E' }}>[{new Date().toLocaleTimeString()}]</span> {log}
                        </div>
                    ))}
                    {logs.length === 0 && (
                        <div style={{ color: '#8B949E', opacity: 0.5 }}>Waiting for system response...</div>
                    )}
                    <div ref={logsEndRef} />
                </div>
            </div>

            {/* Footer / Pulse */}
            <div style={{
                background: '#2D333B',
                padding: '12px 20px',
                borderTop: '1px solid #444C56',
                textAlign: 'center'
            }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', fontSize: '0.65rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#3FB950' }}>
                        <Shield size={10} /> ENCRYPTED
                    </div>
                    <div style={{ color: '#30363D' }}>|</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#8B949E' }}>
                        <Lock size={10} /> ISO-27001
                    </div>
                    <div style={{ color: '#30363D' }}>|</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#F26C29' }}>
                        <Activity size={10} /> REAL-TIME
                    </div>
                </div>
            </div>

            <style jsx>{`
                .pulse-dot {
                    animation: pulse 2s infinite;
                }
                .terminal-log::-webkit-scrollbar {
                    display: none; /* Chrome/Safari */
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.3); opacity: 1; }
                    100% { transform: scale(1); opacity: 0.8; }
                }
            `}</style>
        </div>
    );
}
