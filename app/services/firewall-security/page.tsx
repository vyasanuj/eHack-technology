import type { Metadata } from 'next';
import ServicePageLayout from '../../components/ServicePageLayout';

export const metadata: Metadata = {
    title: 'Firewall Security Assessment | Ehack Technology',
    description: 'Firewall configuration audit, rule analysis, VPN assessment, and penetration testing to ensure your network perimeter is secure.',
};

export default function FirewallSecurityPage() {
    return (
        <ServicePageLayout
            title="Firewall Security Assessment"
            description="Comprehensive firewall audit to ensure your configuration and rules meet business and compliance needs."
            whatIs="Every business, regardless of size, uses firewall technology to establish limits of trust and security and access the internet for inter-business communication. Next-generation firewalls provide increasing complexity, and functionality requires you to manage firewalls appropriately. The list of regulations will be thoroughly investigated following the operational assessment and based on the level of trust needed from the security apparatus. A weak/outdated firewall may have made the target systems vulnerable to information disclosure and compromise."
            whatWeOffer={[
                'Firewall Security Audit',
                'Rule Analysis & Optimization',
                'VPN Configuration Review',
                'Penetration Testing'
            ]}
            whatWeCover={[
                'Software Version and Patch Level',
                'Firewall Location Within the Network',
                'Excessively Permissive Rules',
                'Laws That Intersect',
                'Permissive Rules Before Deny-All Rules',
                'Abandoned Objects',
                'Insufficient Auditing',
                'Encrypted Passwords and Account Passwords',
                'Insecure Services',
                'Omissions from the Rules',
                'Clock Synchronization',
                'User Account Privileges',
                'VPN Configuration Security',
                'Denial-of-Service Attack Mitigation'
            ]}
            whyAssessment="For most organizations that do not use a multi-layer of security, a firewall device acts as the gatekeeper to the network and is often the first and last line of defense. The Firewall is a device that sits between the inside and outside of your network and regulates who can enter and exit it. A firewall that is incorrectly configured or has a software vulnerability due to a lack of patching can significantly impact your organization's security posture and allow a complete hacker access to the network."
            benefits={[
                { icon: '🛡️', title: 'Perimeter Defense', description: 'Ensure your first line of defense is solid' },
                { icon: '📋', title: 'Rule Optimization', description: 'Remove redundant and risky rules' },
                { icon: '🔐', title: 'VPN Security', description: 'Secure remote access verification' },
                { icon: '📊', title: 'Compliance', description: 'Meet industry standards requirements' }
            ]}
            whyChooseUs="Our firewall audit identifies weak protocols, insecure rules, and additional data leakages that could jeopardize the firewall's infrastructure. Our team of cybersecurity experts has experience building firewalls from the ground up as well as implementing technology from a variety of leading firewall vendors. This allows us to see everything from both the attacker's and the defender's points of view, enabling us to conduct some of the most difficult and thorough assessments in our industry."
            serviceName="firewall"
            relatedServices={[
                { title: 'Infrastructure Security', href: '/services/infrastructure-security' },
                { title: 'Red Team Assessment', href: '/services/red-team-assessment' },
                { title: 'Web Application Security', href: '/services/web-application-security' }
            ]}
        />
    );
}
