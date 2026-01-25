import type { Metadata } from 'next';
import ServicePageLayout from '../../components/ServicePageLayout';

export const metadata: Metadata = {
    title: 'Secure Source Code Review | Ehack Technology',
    description: 'Manual and automated secure source code review across 30+ programming languages. CWE, OWASP, PCI, CERT compliant analysis.',
};

export default function SourceCodeReviewPage() {
    return (
        <ServicePageLayout
            title="Secure Source Code Review"
            description="Thorough code analysis to identify vulnerabilities at the source level before they become exploitable in production."
            heroImage="/images/Source Code Review.png"
            whatIs="Secure Source Code reviews are an effective way to identify difficult or impossible bugs during black-box or grey-box testing. Our security architects and specialist developers conduct a thorough code analysis using a detailed checklist of common implementation and architecture errors. The source code review identifies the vulnerable assertion line of code and the corrupted variable that introduces the vulnerability. This demonstrates how an event spreads from its source to its conclusion, providing application developers with a comprehensive view of each vulnerability."
            whatWeOffer={[
                'Manual Secure Source Code Review',
                'Automation Secure Source Code Review',
                'Software Composition Analysis Testing',
                'Architecture Security Review'
            ]}
            whatWeCover={[
                'JAVA', 'SWIFT', 'Objective C', 'FLUTTER',
                'KOTLIN', 'DART', 'PHP', 'JavaScript',
                'ASP.NET', 'C#', 'C++', 'Ruby',
                'GO', 'Python', 'TypeScript', 'Node.js'
            ]}
            whyAssessment="When additional assurance is necessary, a secure source code review is recommended. We can identify vulnerabilities in applications that would be extremely difficult to discover without source code access. Along with specific vulnerabilities, a secure source code review typically identifies deficient coding practices that leave the code vulnerable to future vulnerabilities. Consider a source code review for applications with high significance, reliance on open-source libraries, third-party code, or when you require additional levels of assurance."
            benefits={[
                { icon: '🔍', title: 'Deep Analysis', description: 'Find vulnerabilities invisible to dynamic testing' },
                { icon: '📚', title: '30+ Languages', description: 'Comprehensive technology coverage' },
                { icon: '✅', title: 'Compliance', description: 'CWE, OWASP, PCI, CERT, SANS compliant' },
                { icon: '👤', title: 'Expert Review', description: 'Manual review by experienced developers' }
            ]}
            whyChooseUs="Ehack Technology will assign one or more consultants with relevant programming experience to each engagement. Each security consultant has a great deal of experience with application security. A hybrid approach combining dynamic tooling and manual review is used to achieve both breadth and depth of coverage. Having concurrent access to a running version of the target system while conducting the code review maximizes context and verifies findings in real-time."
            serviceName="source-code-review"
            relatedServices={[
                { title: 'Web Application Security', href: '/services/web-application-security' },
                { title: 'API Security Assessment', href: '/services/api-security' },
                { title: 'Mobile App Security', href: '/services/mobile-application-security' }
            ]}
        />
    );
}
