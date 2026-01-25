import type { Metadata } from 'next';
import ServicePageLayout from '../../components/ServicePageLayout';

export const metadata: Metadata = {
    title: 'GDPR Consulting and Audit | Ehack Technology',
    description: 'GDPR gap analysis, risk assessment, compliance consulting, and audit services to protect EU citizen data privacy rights.',
};

export default function GDPRConsultingPage() {
    return (
        <ServicePageLayout
            title="GDPR Consulting and Audit"
            description="Comprehensive GDPR compliance services to protect citizen data privacy rights and avoid significant penalties."
            heroImage="/images/services/general.png"
            whatIs="The General Data Protection Regulation (GDPR) is a regulatory standard designed to protect citizens' data privacy rights in the European Union. It creates a legal framework for businesses that collect and process EU citizens' data. Organizations must ensure that personal data is collected legally and protected from misuse and exploitation to comply with GDPR. It also requires businesses that collect, process, and transmit personal data to respect the rights of data owners or face sanctions. Organizations will face significant penalties of up to 4% of annual revenue or 20 million euros if they do not comply."
            whatWeOffer={[
                'GDPR Gap Analysis',
                'GDPR Risk Assessment',
                'Security Awareness Training Program',
                'Documentation of GDPR Rules & Regulations',
                'GDPR Continuation Support',
                'Data Protection Impact Assessment',
                'Privacy by Design Implementation',
                'Data Subject Rights Management'
            ]}
            whatWeCover={[
                'Data Inventory & Mapping',
                'Legal Basis for Processing',
                'Consent Management',
                'Data Subject Rights Compliance',
                'Data Protection Impact Assessment',
                'Privacy by Design & Default',
                'Data Breach Notification Procedures',
                'International Data Transfers',
                'Third-Party Risk Management',
                'Record of Processing Activities',
                'Data Protection Officer Requirements',
                'Security Measures & Controls'
            ]}
            whyAssessment="While complying with GDPR can be overwhelming for many businesses, being proactive in your compliance efforts can be extremely beneficial. You can earn the trust of digital consumers who are wary of unsolicited follow-up, sales pitches, and spam. GDPR Compliance can compel your business to prioritize the user experience and demonstrate a commitment to user preferences. Perhaps most importantly, achieving compliance now can significantly reduce the likelihood of facing regulatory investigations and fines."
            benefits={[
                { icon: '🇪🇺', title: 'EU Compliance', description: 'Meet all GDPR requirements' },
                { icon: '💰', title: 'Avoid Penalties', description: 'Prevent 4% annual revenue fines' },
                { icon: '🤝', title: 'Build Trust', description: 'Demonstrate data protection commitment' },
                { icon: '📋', title: 'Documentation', description: 'Complete compliance documentation' }
            ]}
            whyChooseUs="Our team has experience designing and implementing privacy systems that comply with GDPR. We understand that the best way to implement GDPR is to align technology with governance, risk, and compliance (GRC). Companies can use our ADAPT approach to help them meet GDPR compliance deadlines. Our team will assist you in continuing your GDPR journey without having to start over, regardless of your current GDPR enforcement status or efforts."
            serviceName="gdpr"
            relatedServices={[
                { title: 'PCI DSS Compliance', href: '/services/pci-dss-compliance' },
                { title: 'ISO Certification', href: '/services/iso-certification' },
                { title: 'Web Application Security', href: '/services/web-application-security' }
            ]}
        />
    );
}
