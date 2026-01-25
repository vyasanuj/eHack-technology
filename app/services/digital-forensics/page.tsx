import type { Metadata } from 'next';
import ServicePageLayout from '../../components/ServicePageLayout';

export const metadata: Metadata = {
    title: 'Digital Forensics & Incident Response | Ehack Technology',
    description: 'Computer forensics investigation, evidence collection, data recovery, and incident response services for cyber fraud and corporate investigations.',
};

export default function DigitalForensicsPage() {
    return (
        <ServicePageLayout
            title="Digital Forensics & Incident Response"
            description="Expert investigation and evidence collection services to address cyber breaches, fraud, and corporate investigations."
            heroImage="/images/services/forensics.png"
            whatIs="Today, we live in a turbulent business environment where criminals are growing toward a virulent edge, as fraud risks are on the level of a crisis, and stakeholder expectations are far away. Various fraud strategies including bribery, misconducts, cybercrimes, and other fraudulent activities are impacting every business's branding value. Forensic Investigation and Consulting Services help you address these inevitable irreparable problems. We offer a wide range of Forensic Services and acknowledge the importance of self-reliance in dealing with different areas of concern."
            whatWeOffer={[
                'Financial Statement Fraud Investigation',
                'Insider Trading Investigation',
                'Money Laundering Investigation',
                'Occupational Fraud Investigation',
                'Asset Misappropriation Ascertain',
                'Collection of Digital Evidence',
                'Data Recovery Services',
                'Email & Internet Artifacts Analysis'
            ]}
            whatWeCover={[
                'Collection of Digital Evidence from Crime Scene',
                'Data Recovery from Laptop, Desktop, Hard Drive, Pen Drive',
                'Password Recovery',
                'Email Analysis',
                'Internet Artifacts Analysis',
                'Image Analysis',
                'Live System Analysis for Vulnerability',
                'Volatility Analysis',
                'Memory Forensics',
                'Network Forensics',
                'Mobile Device Forensics',
                'Chain of Custody Documentation'
            ]}
            whyAssessment="Forensic audits are essential for investigating cyber fraud, corruption, financial statement fraud, asset embezzlement, corporate frauds, and data leakage. Our structured approach includes planning, evidence collection, report creation, and court appearance if required. Any corporation that is exposed to an incident faces a dent in their brand reputation and additional legal liability."
            benefits={[
                { icon: '🔍', title: 'Expert Investigation', description: 'Certified forensic investigators' },
                { icon: '📋', title: 'Legal Compliance', description: 'Court-admissible evidence collection' },
                { icon: '💾', title: 'Data Recovery', description: 'Recover deleted and encrypted data' },
                { icon: '⚡', title: 'Rapid Response', description: '24/7 incident response team' }
            ]}
            whyChooseUs="Ehack Technology is committed to providing businesses worldwide with cutting-edge digital forensic solutions. We leverage the experience of a diverse team to provide services for a variety of technologies and complex cyber frauds, resulting in the highest possible level of assurance. Our team includes certified forensic investigators with experience in law enforcement and corporate investigations."
            serviceName="digital-forensics"
            relatedServices={[
                { title: 'Malware Analysis', href: '/services/malware-analysis' },
                { title: 'Red Team Assessment', href: '/services/red-team-assessment' },
                { title: 'Infrastructure Security', href: '/services/infrastructure-security' }
            ]}
        />
    );
}
