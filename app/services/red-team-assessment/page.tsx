import type { Metadata } from 'next';
import ServicePageLayout from '../../components/ServicePageLayout';

export const metadata: Metadata = {
    title: 'Red Team Assessment | Ehack Technology',
    description: 'Simulated real-world attack scenarios to test your organization defenses. Network, wireless, physical, and social engineering testing.',
};

export default function RedTeamAssessmentPage() {
    return (
        <ServicePageLayout
            title="Red Team Assessment"
            description="Simulated real-world intrusion assault against your enterprise to test defenses without affecting normal operations."
            heroImage="/images/Red Team Assessment.png"
            whatIs="A Red Team Assessment is a simulated real-world intrusion assault against an enterprise that does not affect its normal operations. For a limited time span, attacks will be launched from various entry points to satisfy the organization's testing tasks and specifications. The Red Teaming concept begins with the challenge of comprehending the adversary's motivations and actions. We can anticipate an attacker's moves and develop effective countermeasures if we understand how they think."
            whatWeOffer={[
                'Red Teaming',
                'Advanced Penetration Testing',
                'Physical Security Testing',
                'Social Engineering Attacks'
            ]}
            whatWeCover={[
                'Network Attacks',
                'Wireless Attacks',
                'Advanced Penetration Testing',
                'Physical Security Testing',
                'Social Engineering Attacks',
                'Threat Intelligence',
                'Social Media Correlation',
                'Comprehensive Open-Source Intelligence (OSINT)',
                'Media Drops',
                'Targeted Malware-Based Attacks',
                'Privilege Escalation',
                'Lateral Movement'
            ]}
            whyAssessment="Have you ever wondered, 'How did I get hacked when I already purchased security equipment?' Organizations frequently struggle with self-defense because of information asymmetry between attackers and defenders. The presumed battlefield is frequently not the focus but rather boundary areas that were previously deemed completely unimportant. A more thorough Red Team Assessment sheds light on an organization's simulation of a real-world threat."
            benefits={[
                { icon: '🎯', title: 'Real-World Simulation', description: 'Test against actual attack techniques' },
                { icon: '🔓', title: 'Multi-Vector Attack', description: 'Network, physical, and social engineering' },
                { icon: '📊', title: 'Defense Validation', description: 'Evaluate your security team response' },
                { icon: '🛡️', title: 'Risk Identification', description: 'Find gaps before real attackers do' }
            ]}
            whyChooseUs="Ehack Technology specializes in and is passionate about conducting large-scale attacks. Our team members are innovative problem solvers who possess a range of skills, including programming, network testing, wireless security, security code review, web application penetration testing, reverse engineering, and exploit research. Red Team Exercises shed light on an organization's simulation of a real-world threat by combining and chaining multiple domain-specific attacks."
            serviceName="red-team"
            relatedServices={[
                { title: 'Infrastructure Security', href: '/services/infrastructure-security' },
                { title: 'Web Application Security', href: '/services/web-application-security' },
                { title: 'Digital Forensics', href: '/services/digital-forensics' }
            ]}
        />
    );
}
