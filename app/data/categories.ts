import { ShieldCheck, FileCheck, Search } from 'lucide-react';

export const categories = {
    'assessment': {
        id: 'assessment',
        label: 'Security Assessment',
        icon: ShieldCheck,
        headline: 'Proactive Vulnerability Assessment',
        description: 'Identify and remediate security gaps across your entire digital attack surface before adversaries exploit them.',
        image: '/Security Assessment.jpg',
        industriesCount: '15+',
        keySectors: 'Banking, Fintech & SaaS',
        longDescription: 'Our comprehensive security assessment services provide a deep dive into your infrastructure, applications, and processes to uncover vulnerabilities. We use a combination of automated scanning and manual penetration testing to ensure no stone is left unturned.',
        services: [
            {
                image: '/images/services/security.png',
                title: 'Web App Security',
                description: 'Comprehensive testing against OWASP Top 10 and advanced attack vectors.',
                href: '/services/web-application-security',
                badges: ['OWASP Top 10', 'Penetration Testing']
            },
            {
                image: '/images/mobileapp_service_image.png',
                title: 'Mobile App Security',
                description: 'In-depth assessment of iOS and Android apps including source code analysis.',
                href: '/services/mobile-application-security',
                badges: ['iOS & Android', 'Static & Dynamic']
            },
            {
                image: '/images/API_service_image.png',
                title: 'API Security',
                description: 'Securing REST, GraphQL, and SOAP APIs from logic flaws and data leaks.',
                href: '/services/api-security',
                badges: ['REST & GraphQL', 'Logic Flaws']
            },
            {
                image: '/images/Source Code Review.png',
                title: 'Source Code Review',
                description: 'Automated and manual code audit across 30+ languages to find bugs early.',
                href: '/services/source-code-review',
                badges: ['SAST', 'DAST', '30+ Languages']
            },
            {
                image: '/images/Red Team Assessment.png',
                title: 'Red Team Assessment',
                description: 'Full-scope attack simulation to test your detection and response capabilities.',
                href: '/services/red-team-assessment',
                badges: ['Adversary Simulation', 'Exfiltration']
            },
            {
                image: '/images/services/general.png',
                title: 'Infrastructure Security',
                description: 'Hardening networks, cloud environments, and Active Directory structures.',
                href: '/services/infrastructure-security',
                badges: ['Network', 'Cloud', 'AD Security']
            },
            {
                image: '/images/Thick Client Security.png',
                title: 'Thick Client Security',
                description: 'Security testing for desktop applications to prevent local privilege escalation.',
                href: '/services/thick-client-security',
                badges: ['Binary Analysis', 'Memory Corruptions']
            },
            {
                image: '/images/Firewall Security Assessment.png',
                title: 'Firewall Security',
                description: 'Configuration reviews and rule audits to optimize network perimeter defense.',
                href: '/services/firewall-security',
                badges: ['Rule Audit', 'Egress Filtering']
            }
        ]
    },
    'compliance': {
        id: 'compliance',
        label: 'Compliance Audit',
        icon: FileCheck,
        headline: 'Regulatory Compliance & Governance',
        description: 'Ensure your organization meets global security standards and avoids costly regulatory penalties.',
        image: '/Compliance Audit.png',
        industriesCount: '10+',
        keySectors: 'Healthcare, BFSI & Retail',
        longDescription: 'Navigating the complex landscape of regulatory compliance can be challenging. Our experts guide you through every step of the process, from gap analysis to certification, ensuring you meet all necessary standards.',
        services: [
            {
                image: '/images/services/compliance.png',
                title: 'GDPR Consulting',
                description: 'Gap analysis and implementation support for EU data protection laws.',
                href: '/services/gdpr-consulting',
                badges: ['Gap Analysis', 'Data Privacy']
            },
            {
                image: '/images/PCI DSS Compliance Audit.png',
                title: 'PCI DSS Compliance',
                description: 'End-to-end support for Payment Card Industry Data Security Standard.',
                href: '/services/pci-dss-compliance',
                badges: ['QSA Audit', 'Certification']
            },
            {
                image: '/images/services/compliance.png',
                title: 'ISO Certification Advisory',
                description: 'Guidance and preparation for ISO 27001 information security certification.',
                href: '/services/iso-certification',
                badges: ['ISO 27001', 'Risk Management']
            }
        ]
    },
    'forensics': {
        id: 'forensics',
        label: 'Forensics & Malware',
        icon: Search,
        headline: 'Incident Response & Forensics',
        description: 'Rapid response capabilities to contain threats, analyze breaches, and recover operations.',
        image: '/Forensics & Malware.png',
        industriesCount: '8+',
        keySectors: 'Govt, Law Enforcement & Legal',
        longDescription: 'In the event of a breach, time is of the essence. Our incident response and forensics team is available 24/7 to help you contain attacks, analyze the root cause, and recover your systems.',
        services: [
            {
                image: '/images/services/forensics.png',
                title: 'Digital Forensics',
                description: 'Forensic investigation to recover evidence and trace cyber incidents.',
                href: '/services/digital-forensics',
                badges: ['Incident Response', 'Evidence Artifacts']
            },
            {
                image: '/images/Malware Analysis and Root Cause Detection.png',
                title: 'Malware Analysis',
                description: 'Dissecting malicious software to understand behavior and find indicators of compromise.',
                href: '/services/malware-analysis',
                badges: ['Reverse Engineering', 'IOCs']
            }
        ]
    }
};
