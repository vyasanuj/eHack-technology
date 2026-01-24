import type { Metadata } from 'next';
import ServicePageLayout from '../../components/ServicePageLayout';

export const metadata: Metadata = {
    title: 'Web Application Security Assessment | Ehack Technology',
    description: 'Comprehensive web application security testing against OWASP Top 10, XSS, SQL injection, and business logic vulnerabilities. Get expert penetration testing services.',
};

export default function WebApplicationSecurityPage() {
    return (
        <ServicePageLayout
            title="Web Application Security Assessment"
            description="Comprehensive security evaluation of your web applications using industry-standard practices and specialized testing tools."
            whatIs="Web application security evaluation combines industry-standard information security practices with tools explicitly designed to test websites, web-based services, and web applications. Web application security assessments can be carried out manually or automatically and carried out throughout the software development lifecycle (SDLC). It will typically include security measures, security audits, periodic inspections, secure coding practices, secure firewalls, vulnerability scanning, and the implementation of protocols that ensure safe operation."
            whatWeOffer={[
                'Web Application Security Assessment',
                'API & Web Services Security Assessment',
                'Web Application Secure Source Code Review',
                'SDLC Security Integration'
            ]}
            whatWeCover={[
                'Injections (SQL, NoSQL, LDAP, OS)',
                'Broken Authentication',
                'Sensitive Data Exposure',
                'XML External Entities (XXE)',
                'Broken Access Control',
                'Security Misconfiguration',
                'Cross-Site Scripting (XSS)',
                'Insecure Deserialization',
                'Business Logic Vulnerability',
                'Server-Side Request Forgery (SSRF)',
                'Insufficient Logging & Monitoring',
                'Using Components with Known Vulnerabilities'
            ]}
            whyAssessment="The primary advantage of performing a web application penetration test is that a highly qualified security specialist can attack your web application in a controlled, organized environment to detect vulnerabilities before a malicious attacker does. Attackers pose a significant threat to businesses that deploy web applications and their users; by gaining the insight provided by a penetration test, businesses may appropriately evaluate the risk to their assets and respond appropriately. Additionally, it ensures stakeholder assurance, adherence to compliance requirements, evaluation of security strategies efficacy, and enhancement of business credibility."
            benefits={[
                { icon: '🔍', title: 'Early Detection', description: 'Find vulnerabilities before attackers do' },
                { icon: '📋', title: 'Compliance Ready', description: 'Meet PCI DSS, ISO 27001, GDPR requirements' },
                { icon: '💡', title: 'Expert Insights', description: 'Detailed remediation guidance from certified experts' },
                { icon: '🔄', title: 'Continuous Security', description: 'SDLC integration for ongoing protection' }
            ]}
            whyChooseUs="Ehack Technology is committed to providing businesses worldwide with cutting-edge cybersecurity solutions. We leverage the experience of a diverse team to provide services for a variety of technologies and complex web applications, resulting in the highest possible level of assurance. Our team includes CEH, OSCP, and CISSP certified professionals with extensive experience in application security."
            serviceName="web-security"
            relatedServices={[
                { title: 'API Security Assessment', href: '/services/api-security' },
                { title: 'Source Code Review', href: '/services/source-code-review' },
                { title: 'Mobile App Security', href: '/services/mobile-application-security' }
            ]}
        />
    );
}
