import type { Metadata } from 'next';
import ServicePageLayout from '../../components/ServicePageLayout';

export const metadata: Metadata = {
    title: 'API Security Assessment | Ehack Technology',
    description: 'Comprehensive API security testing covering OWASP API Top 10, REST, GraphQL, and SOAP API vulnerability assessment and penetration testing.',
};

export default function APISecurityPage() {
    return (
        <ServicePageLayout
            title="API Security Assessment"
            description="Comprehensive security evaluation of your APIs to identify vulnerabilities and protect against unauthorized access and data exposure."
            whatIs="Increased API services with web applications and mobiles make them vulnerable to various attack vectors. Integration of these APIs into your system can make the system prone to known vulnerabilities or unknown vulnerabilities if the functionality and endpoints are not secured. API loophole detection can take time, and by the time it is known, the next challenge lies in patches and remediation. At Ehack Technology, a comprehensive API security assessment ensures that all the organization's primary concerns are addressed and remediations are deployed on a priority basis."
            whatWeOffer={[
                'API Discovery',
                'API Design Review',
                'API Secure Code Review',
                'API Penetration Testing'
            ]}
            whatWeCover={[
                'API1:2019 Broken Object Level Authorization',
                'API2:2019 Broken User Authentication',
                'API3:2019 Excessive Data Exposure',
                'API4:2019 Lack of Resources & Rate Limiting',
                'API5:2019 Broken Function Level Authorization',
                'API6:2019 Mass Assignment',
                'API7:2019 Security Misconfiguration',
                'API8:2019 Injection',
                'API9:2019 Improper Assets Management',
                'API10:2019 Insufficient Logging & Monitoring',
                'GraphQL Security Testing',
                'OAuth/JWT Implementation Review'
            ]}
            whyAssessment="API security assessment has many advantages which in the long run prove helpful for business. It helps identify issues in the areas of development, configuration as well as business logic. It also helps to strengthen authentication and access control. API Assessment is also fair high when it comes to gaining technical insight and real-world compliance while discovering the vulnerabilities which can cause the application to be compromised."
            benefits={[
                { icon: '🔗', title: 'Complete Coverage', description: 'REST, GraphQL, SOAP, and webhook testing' },
                { icon: '🔒', title: 'Auth & Access', description: 'OAuth, JWT, and authorization testing' },
                { icon: '📈', title: 'Rate Limiting', description: 'Resource exhaustion and DoS prevention' },
                { icon: '📝', title: 'Documentation', description: 'API security best practices guide' }
            ]}
            whyChooseUs="Ehack Technology is one of the pioneers in API Security Assessments since we take pride in providing secured API infrastructure. From the staging and development of the API process to the black box testing without any knowledge of the functioning, every aspect is considered, and custom-made tests and approaches are provided. Our coverage follows standard methodologies to detect common vulnerabilities and provide unique business logic flaws in a petite time frame."
            serviceName="api-security"
            relatedServices={[
                { title: 'Web Application Security', href: '/services/web-application-security' },
                { title: 'Mobile App Security', href: '/services/mobile-application-security' },
                { title: 'Source Code Review', href: '/services/source-code-review' }
            ]}
        />
    );
}
