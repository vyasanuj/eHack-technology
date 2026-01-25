import type { Metadata } from 'next';
import ServicePageLayout from '../../components/ServicePageLayout';

export const metadata: Metadata = {
    title: 'Thick Client Security Assessment | Ehack Technology',
    description: 'Desktop application security testing including reverse engineering, DLL hijacking, memory analysis, and cryptographic review.',
};

export default function ThickClientSecurityPage() {
    return (
        <ServicePageLayout
            title="Thick Client Security Assessment"
            description="Comprehensive security testing for desktop applications to identify memory corruption, injection, and cryptographic vulnerabilities."
            heroImage="/images/Thick Client Security.png"
            whatIs="Many thick client applications are not thoroughly examined because security testing efforts are frequently focused on web and mobile applications. However, these applications could have serious security flaws like memory corruption, injection, cryptographic flaws, and client-side trust issues. These flaws can lead to complete system compromise and unauthorized access to server-side data on systems where the thick client software is installed. Thick client applications process data on both the client and server sides and use proprietary protocols to communicate."
            whatWeOffer={[
                'Thick Client Application Penetration Testing',
                'API & Web Services Security Assessment',
                'Secure Source Code Review',
                'Binary Analysis & Hardening Review'
            ]}
            whatWeCover={[
                'Injections',
                'Business Logic Vulnerability',
                'Analysing Config Files',
                'Reverse Engineering',
                'Test Encryption Used in Application',
                'Identifying DLL Hijacking Vulnerability',
                'Test for Sensitive Data in Memory',
                'Dependency Mapping',
                'Broken Authentication',
                'Sensitive Data Exposure',
                'Broken Access Control',
                'Security Misconfiguration',
                'Insecure Deserialization',
                'Inter-Process Communication'
            ]}
            whyAssessment="Thick Client Application Security Testing necessitates highly skilled manual penetration testers and a methodical approach. These applications are critical for internal operations and frequently contain and process sensitive data. We can help you identify vulnerabilities in thick client applications that expose your organization to external or internal threats."
            benefits={[
                { icon: '🖥️', title: 'Desktop Focus', description: 'Specialized thick client expertise' },
                { icon: '🔬', title: 'Binary Analysis', description: 'Reverse engineering and decompilation' },
                { icon: '💾', title: 'Memory Testing', description: 'Runtime memory analysis' },
                { icon: '🔐', title: 'Crypto Review', description: 'Cryptographic implementation audit' }
            ]}
            whyChooseUs="Since your thick client applications can involve intellectual property belonging to your company, you want to ensure that they are immune to reverse engineering and alteration. Without professional analysis of binary hardening mechanisms, you would be unaware of how easily an attacker can reverse engineer or change your client-side code. We provide the highest-quality cybersecurity services and have extensive experience analyzing obfuscated and hardened software, as well as breaching security controls such as white-box cryptography."
            serviceName="thick-client"
            relatedServices={[
                { title: 'Source Code Review', href: '/services/source-code-review' },
                { title: 'Web Application Security', href: '/services/web-application-security' },
                { title: 'API Security Assessment', href: '/services/api-security' }
            ]}
        />
    );
}
