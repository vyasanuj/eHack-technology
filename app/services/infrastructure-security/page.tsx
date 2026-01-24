import type { Metadata } from 'next';
import ServicePageLayout from '../../components/ServicePageLayout';

export const metadata: Metadata = {
    title: 'Infrastructure Security Assessment | Ehack Technology',
    description: 'Network, cloud, Active Directory, router, and container security assessment. Comprehensive infrastructure penetration testing.',
};

export default function InfrastructureSecurityPage() {
    return (
        <ServicePageLayout
            title="Infrastructure Security Assessment"
            description="Comprehensive evaluation of your network infrastructure, cloud environments, and security devices to identify vulnerabilities and misconfigurations."
            whatIs="The IT facilities of a company are pillared over the network components they use. It's just as important to plan where each unit will go to configure it safely. The bugs are exploited as much for their design flaws as they are for their misconfiguration. Daily enforcement, configuration, and security reviews of the network assist the company in maintaining a current view of the network and IT infrastructure. Modern-day attacks are also looking for non-traditional entry points, such as wireless and VoIP infrastructure."
            whatWeOffer={[
                'Network Security Assessment',
                'Router Security Assessment',
                'Firewall Security Assessment',
                'Cloud Security Assessment',
                'Host Level Security Assessment',
                'Container Security',
                'Comprehensive Active Directory Assessment',
                'Attack Simulation & Ransomware Simulation'
            ]}
            whatWeCover={[
                'Asset Criticality Profiling for Impact Assessment',
                'Attack Surface Mapping',
                'Endpoint Services and Zero-Day Vulnerabilities',
                'Network Sniffing, Foot-printing and Probing',
                'IAM, Active Directory, and LDAP Implementation Flaws',
                'NAC Bypass, DNS Enumeration Issues',
                'Web Server Misconfiguration Exposure',
                'Authentication & Authorization Testing',
                'Database Script Injection Vulnerabilities',
                'Database Security Testing',
                'Evasion Against IDS, Honeypots, and Firewall',
                'Cloud Configuration Review'
            ]}
            whyAssessment="The infrastructure security assessment is one of the most important factors of cybersecurity strategy. The assessment is the key to insight into the security framework of the network your organization has employed. It also ensures that any external and internal threats are detected in time, and the network is shielded against cyber-attacks as well as a timely remedy for the same."
            benefits={[
                { icon: '🏗️', title: 'Full Coverage', description: 'Network, cloud, and endpoints' },
                { icon: '🔐', title: 'AD Security', description: 'Comprehensive Active Directory review' },
                { icon: '☁️', title: 'Cloud Ready', description: 'AWS, Azure, GCP assessment' },
                { icon: '🦠', title: 'Ransomware Simulation', description: 'Test ransomware resilience' }
            ]}
            whyChooseUs="Ehack Technology has been helping various organizations past few years in mitigating the risks and flaws within their infrastructure. We deal with a wide range of policies, procedures, systems, and networks that are assessed individually and with a focused approach. We often indulge in comprehensive research that can help us implement new security technologies and unknown threats in our assessments."
            serviceName="infrastructure"
            relatedServices={[
                { title: 'Firewall Security', href: '/services/firewall-security' },
                { title: 'Red Team Assessment', href: '/services/red-team-assessment' },
                { title: 'Web Application Security', href: '/services/web-application-security' }
            ]}
        />
    );
}
