import type { Metadata } from 'next';
import ServicePageLayout from '../../components/ServicePageLayout';

export const metadata: Metadata = {
    title: 'Mobile Application Security Assessment | Ehack Technology',
    description: 'iOS and Android mobile app security testing covering OWASP Mobile Top 10, reverse engineering, data storage, and API security.',
};

export default function MobileApplicationSecurityPage() {
    return (
        <ServicePageLayout
            title="Mobile Application Security Assessment"
            description="Comprehensive security evaluation of iOS and Android applications to identify vulnerabilities and protect sensitive user data."
            heroImage="/images/mobileapp_service_image.png"
            whatIs="Over the last few years, mobile technology has accelerated its growth and seen a massive increase in its user base. Mobile applications store and process a wide variety of sensitive data, from credit card information to intellectual property to medical records. Malicious attackers easily target this sensitive information. Due to the blurring of the lines between secure and exposed data, Mobile Application Security Testing evaluates an application's security and a large pool of mobile application threat vectors to identify inherent vulnerabilities and ensure the application's secure state while in use."
            whatWeOffer={[
                'Mobile Application Security Assessment',
                'API & Web Services Security Assessment',
                'Mobile Application Secure Source Code Review',
                'Binary Analysis & Reverse Engineering'
            ]}
            whatWeCover={[
                'Improper Platform Usage',
                'Insecure Data Storage',
                'Insecure Communication',
                'Insecure Authentication',
                'Insufficient Cryptography',
                'Insecure Authorization',
                'Client Code Quality',
                'Code Tampering',
                'Reverse Engineering',
                'Extraneous Functionality',
                'Business Logic Vulnerability',
                'Runtime Manipulation'
            ]}
            whyAssessment="During a Mobile App Security Assessment, mobile app security experts use a rigorous methodology to determine the overall security posture of a given application. These experts model the threat posed by a range of threat actors with varying levels of sophistication. They determine how resistant your mobile app is to these various threats. Developers gain confidence in the safety of their products, businesses gain confidence in security integration, and users feel safer knowing the app has passed a comprehensive security test."
            benefits={[
                { icon: '📱', title: 'Platform Coverage', description: 'iOS and Android comprehensive testing' },
                { icon: '🔐', title: 'Data Protection', description: 'Ensure sensitive data is properly secured' },
                { icon: '🛡️', title: 'Tamper Resistance', description: 'Protect against reverse engineering' },
                { icon: '📊', title: 'Detailed Reporting', description: 'Clear remediation steps for developers' }
            ]}
            whyChooseUs="At Ehack Technology, we employ advanced methodologies tailored to specific applications. We have a sophisticated approach to detecting bugs, ensuring no vulnerability goes unnoticed, and expert guidance can help mitigate issues without interfering with existing systems. Our expert team works quickly to identify flaws in source code, binary files, applications, back-end integrations, and platform workflow."
            serviceName="mobile-security"
            relatedServices={[
                { title: 'Web Application Security', href: '/services/web-application-security' },
                { title: 'API Security Assessment', href: '/services/api-security' },
                { title: 'Source Code Review', href: '/services/source-code-review' }
            ]}
        />
    );
}
