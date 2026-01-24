import type { Metadata } from 'next';
import ServicePageLayout from '../../components/ServicePageLayout';

export const metadata: Metadata = {
    title: 'PCI DSS Compliance Audit | Ehack Technology',
    description: 'PCI DSS gap analysis, risk assessment, penetration testing, ASV scanning, and QSA-led audit services for payment card security.',
};

export default function PCIDSSCompliancePage() {
    return (
        <ServicePageLayout
            title="PCI DSS Compliance Audit"
            description="Comprehensive PCI DSS compliance services to safeguard cardholder data and ensure payment security standards."
            whatIs="PCI DSS is an internationally recognized data security standard that applies to businesses that process credit card information. The Payment Card Industry Security Standards Council (PCI SSC) is responsible for overseeing the Standard, which is intended to safeguard credit card and debit card transactions against theft and fraud. While the Standard is not a legal requirement, it is necessary to safeguard cardholder data and debit/credit card transactions. All businesses that accept and process debit and credit card payments must conduct a PCI DSS audit on an annual basis."
            whatWeOffer={[
                'PCI DSS Gap Analysis',
                'PCI DSS Risk Assessment',
                'PCI DSS Penetration Testing',
                'PCI DSS ASV Scanning',
                'Security Awareness Training Program',
                'PCI Certification Support',
                'Remediation Guidance',
                'Ongoing Compliance Monitoring'
            ]}
            whatWeCover={[
                'PCI-DSS Controls Assessment',
                'QSA-Led Audits',
                'Support of SAQs (Self-Assessment Questionnaires)',
                'Pre-Audit Readiness Assessment',
                'Network Segmentation Testing',
                'Cardholder Data Environment Review',
                'Access Control Assessment',
                'Encryption & Key Management Review',
                'Vulnerability Management Program',
                'Security Policy & Procedure Review',
                'Incident Response Plan Evaluation',
                'Third-Party Service Provider Review'
            ]}
            whyAssessment="If you are a merchant or service provider that stores, handles, or transmits cardholder data, PCI enforcement is essential to your organization's operational security. A non-compliant company can face significant fines and penalties, as well as the loss of the right to accept card payments, loss of revenue, diminished consumer trust, and legal costs. PCI enforcement demonstrates your commitment to security and reassures clients about the security of their cardholder data."
            benefits={[
                { icon: '💳', title: 'Card Processing', description: 'Maintain ability to accept payments' },
                { icon: '🛡️', title: 'Data Protection', description: 'Secure cardholder information' },
                { icon: '✅', title: 'QSA Certification', description: 'Expert-led compliance audit' },
                { icon: '📊', title: 'Risk Reduction', description: 'Minimize breach liability' }
            ]}
            whyChooseUs="PCI DSS is a comprehensive and granular requirement that applies to all entities that store, process, or distribute payment card data. Our Qualified Security Assessor (QSA) will guide you through the PCI compliance process from initial examination to full compliance in the most effective and least intrusive manner possible. We understand the complexities of PCI DSS and help organizations navigate compliance efficiently."
            serviceName="pci-dss"
            relatedServices={[
                { title: 'GDPR Consulting', href: '/services/gdpr-consulting' },
                { title: 'ISO Certification', href: '/services/iso-certification' },
                { title: 'Web Application Security', href: '/services/web-application-security' }
            ]}
        />
    );
}
