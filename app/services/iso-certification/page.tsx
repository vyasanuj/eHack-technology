import type { Metadata } from 'next';
import ServicePageLayout from '../../components/ServicePageLayout';

export const metadata: Metadata = {
    title: 'ISO 27001 Certification Advisory | Ehack Technology',
    description: 'ISO 27001 gap analysis, ISMS implementation, risk assessment, and certification support for information security management.',
};

export default function ISOCertificationPage() {
    return (
        <ServicePageLayout
            title="ISO 27001 Certification Advisory"
            description="Comprehensive ISO 27001 advisory services to implement and certify your Information Security Management System (ISMS)."
            whatIs="Any organization faces challenges in implementing the ISO 27001 standard. Certification to any standard is frequently mandated by contractual obligations, regulatory requirements, or simply because it is the right thing to do for an organization. For those interested in determining their current security posture, our services can be used to establish a baseline and guide the evolution of their information security strategy—even if they do not wish to pursue full certification."
            whatWeOffer={[
                'Gap Analysis of the Information Security Management System',
                'Risk Assessment of the ISMS',
                'Services for ISMS Implementation',
                'Pre-Audit Services for ISMS',
                'Training for ISO 27001 Certification',
                'Coordination with Third-Party Certification Bodies',
                'Internal Audit Services',
                'Continuous Improvement Support'
            ]}
            whatWeCover={[
                'ISO/IEC 27001:2013 Controls',
                'Information Security Policy',
                'Organization of Information Security',
                'Human Resource Security',
                'Asset Management',
                'Access Control',
                'Cryptography',
                'Physical and Environmental Security',
                'Operations Security',
                'Communications Security',
                'System Acquisition, Development and Maintenance',
                'Supplier Relationships',
                'Information Security Incident Management',
                'Business Continuity Management'
            ]}
            whyAssessment="All major industries like Healthcare, Education, Fintech, and Hospitality require ISO 27001 adherence and enforcement due to the large volumes of data that must be properly managed. If this data becomes available or is compromised, the financial, legal, and other consequences could be disastrous. Strict compliance with ISO 27001 standards ensures that a company is not vulnerable to bugs that could compromise the organization's information security."
            benefits={[
                { icon: '🏆', title: 'Global Recognition', description: 'Internationally recognized certification' },
                { icon: '🔒', title: 'Security Framework', description: 'Structured approach to information security' },
                { icon: '📈', title: 'Business Growth', description: 'Win contracts requiring ISO certification' },
                { icon: '✅', title: 'Compliance', description: 'Meet regulatory and contractual requirements' }
            ]}
            whyChooseUs="Traditional certification approaches often take a 'one size fits all' approach that does not quite fit your true desires or align with your strategic goals. Our experienced consultants, who are also Lead Auditors, provide a practical perspective on implementing ISO/IEC 27001 and aligning it with your business goals using our proven methodology. This approach breaks down the certification process into manageable components, ensuring you retain complete control over how your resources are used."
            serviceName="iso"
            relatedServices={[
                { title: 'GDPR Consulting', href: '/services/gdpr-consulting' },
                { title: 'PCI DSS Compliance', href: '/services/pci-dss-compliance' },
                { title: 'Infrastructure Security', href: '/services/infrastructure-security' }
            ]}
        />
    );
}
