export interface RelatedService {
    title: string;
    href: string;
    image: string;
    description: string;
}

export interface Benefit {
    icon: string;
    title: string;
    description: string;
    image?: string;
}

export interface Capability {
    title: string;
    image: string;
    description?: string;
}

export interface ServiceData {
    slug: string;
    title: string;
    description: string;
    heroImage: string;
    whatIs: string;
    features: Capability[];
    whatWeCover: string[];
    whyAssessment: string;
    benefits: Benefit[];
    whyChooseUs: string;
    serviceName: string;
    relatedServices: RelatedService[];
    metadata: {
        title: string;
        description: string;
    };
}

export const services: Record<string, ServiceData> = {
    'api-security': {
        slug: 'api-security',
        title: 'API Security Assessment',
        description: 'Comprehensive security evaluation of your APIs to identify vulnerabilities and protect against unauthorized access and data exposure.',
        heroImage: '/images/API_service_image.png',
        whatIs: "Increased API services with web applications and mobiles make them vulnerable to various attack vectors. Integration of these APIs into your system can make the system prone to known vulnerabilities or unknown vulnerabilities if the functionality and endpoints are not secured. API loophole detection can take time, and by the time it is known, the next challenge lies in patches and remediation. At Ehack Technology, a comprehensive API security assessment ensures that all the organization's primary concerns are addressed and remediations are deployed on a priority basis.",
        features: [
            { title: 'API Discovery', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000&auto=format&fit=crop' },
            { title: 'API Design Review', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop' },
            { title: 'API Secure Code Review', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop' },
            { title: 'API Penetration Testing', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop' }
        ],
        whatWeCover: [
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
        ],
        whyAssessment: "API security assessment has many advantages which in the long run prove helpful for business. It helps identify issues in the areas of development, configuration as well as business logic. It also helps to strengthen authentication and access control. API Assessment is also fair high when it comes to gaining technical insight and real-world compliance while discovering the vulnerabilities which can cause the application to be compromised.",
        benefits: [
            { icon: '🔗', title: 'Complete Coverage', description: 'REST, GraphQL, SOAP, and webhook testing', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop' },
            { icon: '🔒', title: 'Auth & Access', description: 'OAuth, JWT, and authorization testing', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop' },
            { icon: '📈', title: 'Rate Limiting', description: 'Resource exhaustion and DoS prevention', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=600&auto=format&fit=crop' },
            { icon: '📝', title: 'Documentation', description: 'API security best practices guide', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop' }
        ],
        whyChooseUs: "Ehack Technology is one of the pioneers in API Security Assessments since we take pride in providing secured API infrastructure. From the staging and development of the API process to the black box testing without any knowledge of the functioning, every aspect is considered, and custom-made tests and approaches are provided. Our coverage follows standard methodologies to detect common vulnerabilities and provide unique business logic flaws in a petite time frame.",
        serviceName: 'api-security',
        relatedServices: [
            {
                title: 'Web Application Security',
                href: '/services/web-application-security',
                image: '/images/cybersecurity.jpg',
                description: 'Comprehensive evaluation of web applications using industry-standard practices.'
            },
            {
                title: 'Mobile App Security',
                href: '/services/mobile-application-security',
                image: '/images/mobileapp_service_image.png',
                description: 'Security evaluation of iOS and Android applications to protect sensitive data.'
            },
            {
                title: 'Source Code Review',
                href: '/services/source-code-review',
                image: '/images/Source Code Review.png',
                description: 'Thorough code analysis to identify vulnerabilities at the source level.'
            }
        ],
        metadata: {
            title: 'API Security Assessment | Ehack Technology',
            description: 'Comprehensive API security testing covering OWASP API Top 10, REST, GraphQL, and SOAP API vulnerability assessment and penetration testing.',
        }
    },
    'web-application-security': {
        slug: 'web-application-security',
        title: 'Web Application Security Assessment',
        description: 'Comprehensive security evaluation of your web applications using industry-standard practices and specialized testing tools.',
        heroImage: '/images/cybersecurity.jpg',
        whatIs: "Web application security evaluation combines industry-standard information security practices with tools explicitly designed to test websites, web-based services, and web applications. Web application security assessments can be carried out manually or automatically and carried out throughout the software development lifecycle (SDLC). It will typically include security measures, security audits, periodic inspections, secure coding practices, secure firewalls, vulnerability scanning, and the implementation of protocols that ensure safe operation.",
        features: [
            { title: 'Security Assessment', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop' },
            { title: 'API & Web Services', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Source Code Review', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop' },
            { title: 'SDLC Integration', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop' }
        ],
        whatWeCover: [
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
        ],
        whyAssessment: "The primary advantage of performing a web application penetration test is that a highly qualified security specialist can attack your web application in a controlled, organized environment to detect vulnerabilities before a malicious attacker does. Attackers pose a significant threat to businesses that deploy web applications and their users; by gaining the insight provided by a penetration test, businesses may appropriately evaluate the risk to their assets and respond appropriately. Additionally, it ensures stakeholder assurance, adherence to compliance requirements, evaluation of security strategies efficacy, and enhancement of business credibility.",
        benefits: [
            { icon: '🔍', title: 'Early Detection', description: 'Find vulnerabilities before attackers do', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop' },
            { icon: '📋', title: 'Compliance Ready', description: 'Meet PCI DSS, ISO 27001, GDPR requirements', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop' },
            { icon: '💡', title: 'Expert Insights', description: 'Detailed remediation guidance from certified experts', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop' },
            { icon: '🔄', title: 'Continuous Security', description: 'SDLC integration for ongoing protection', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop' }
        ],
        whyChooseUs: "Ehack Technology is committed to providing businesses worldwide with cutting-edge cybersecurity solutions. We leverage the experience of a diverse team to provide services for a variety of technologies and complex web applications, resulting in the highest possible level of assurance. Our team includes CEH, OSCP, and CISSP certified professionals with extensive experience in application security.",
        serviceName: 'web-security',
        relatedServices: [
            {
                title: 'API Security Assessment',
                href: '/services/api-security',
                image: '/images/API_service_image.png',
                description: 'Comprehensive security evaluation of your APIs to identify vulnerabilities.'
            },
            {
                title: 'Source Code Review',
                href: '/services/source-code-review',
                image: '/images/Source Code Review.png',
                description: 'Thorough code analysis to identify vulnerabilities at the source level.'
            },
            {
                title: 'Mobile App Security',
                href: '/services/mobile-application-security',
                image: '/images/mobileapp_service_image.png',
                description: 'Security evaluation of iOS and Android applications to protect sensitive data.'
            }
        ],
        metadata: {
            title: 'Web Application Security Assessment | Ehack Technology',
            description: 'Comprehensive web application security testing against OWASP Top 10, XSS, SQL injection, and business logic vulnerabilities. Get expert penetration testing services.',
        }
    },
    'digital-forensics': {
        slug: 'digital-forensics',
        title: 'Digital Forensics & Incident Response',
        description: 'Expert investigation and evidence collection services to address cyber breaches, fraud, and corporate investigations.',
        heroImage: '/images/services/forensics.png',
        whatIs: "Today, we live in a turbulent business environment where criminals are growing toward a virulent edge, as fraud risks are on the level of a crisis, and stakeholder expectations are far away. Various fraud strategies including bribery, misconducts, cybercrimes, and other fraudulent activities are impacting every business's branding value. Forensic Investigation and Consulting Services help you address these inevitable irreparable problems. We offer a wide range of Forensic Services and acknowledge the importance of self-reliance in dealing with different areas of concern.",
        features: [
            { title: 'Fraud Investigation', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Digital Evidence', image: 'https://images.unsplash.com/photo-1556656793-062ff987850e?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Data Recovery', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Artifact Analysis', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop' }
        ],
        whatWeCover: [
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
        ],
        whyAssessment: "Forensic audits are essential for investigating cyber fraud, corruption, financial statement fraud, asset embezzlement, corporate frauds, and data leakage. Our structured approach includes planning, evidence collection, report creation, and court appearance if required. Any corporation that is exposed to an incident faces a dent in their brand reputation and additional legal liability.",
        benefits: [
            { icon: '🔍', title: 'Expert Investigation', description: 'Certified forensic investigators', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop' },
            { icon: '📋', title: 'Legal Compliance', description: 'Court-admissible evidence collection', image: 'https://images.unsplash.com/photo-1555620920-53bc30cedcc6?q=80&w=600&auto=format&fit=crop' },
            { icon: '💾', title: 'Data Recovery', description: 'Recover deleted and encrypted data', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' },
            { icon: '⚡', title: 'Rapid Response', description: '24/7 incident response team', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop' }
        ],
        whyChooseUs: "Ehack Technology is committed to providing businesses worldwide with cutting-edge digital forensic solutions. We leverage the experience of a diverse team to provide services for a variety of technologies and complex cyber frauds, resulting in the highest possible level of assurance. Our team includes certified forensic investigators with experience in law enforcement and corporate investigations.",
        serviceName: 'digital-forensics',
        relatedServices: [
            {
                title: 'Malware Analysis',
                href: '/services/malware-analysis',
                image: '/images/Malware Analysis and Root Cause Detection.png',
                description: 'Comprehensive malware analysis to understand threats and development.'
            },
            {
                title: 'Red Team Assessment',
                href: '/services/red-team-assessment',
                image: '/images/Red Team Assessment.png',
                description: 'Simulated real-world intrusion assault against your enterprise to test defenses.'
            },
            {
                title: 'Infrastructure Security',
                href: '/services/infrastructure-security',
                image: '/images/services/security.png',
                description: 'Comprehensive evaluation of your network infrastructure and cloud environments.'
            }
        ],
        metadata: {
            title: 'Digital Forensics & Incident Response | Ehack Technology',
            description: 'Computer forensics investigation, evidence collection, data recovery, and incident response services for cyber fraud and corporate investigations.',
        }
    },
    'firewall-security': {
        slug: 'firewall-security',
        title: 'Firewall Security Assessment',
        description: 'Comprehensive firewall audit to ensure your configuration and rules meet business and compliance needs.',
        heroImage: '/images/Firewall Security Assessment.png',
        whatIs: "Every business, regardless of size, uses firewall technology to establish limits of trust and security and access the internet for inter-business communication. Next-generation firewalls provide increasing complexity, and functionality requires you to manage firewalls appropriately. The list of regulations will be thoroughly investigated following the operational assessment and based on the level of trust needed from the security apparatus. A weak/outdated firewall may have made the target systems vulnerable to information disclosure and compromise.",
        features: [
            { title: 'Security Audit', image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa81?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Rule Optimization', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop' },
            { title: 'VPN Review', image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Penetration Testing', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop' }
        ],
        whatWeCover: [
            'Software Version and Patch Level',
            'Firewall Location Within the Network',
            'Excessively Permissive Rules',
            'Laws That Intersect',
            'Permissive Rules Before Deny-All Rules',
            'Abandoned Objects',
            'Insufficient Auditing',
            'Encrypted Passwords and Account Passwords',
            'Insecure Services',
            'Omissions from the Rules',
            'Clock Synchronization',
            'User Account Privileges',
            'VPN Configuration Security',
            'Denial-of-Service Attack Mitigation'
        ],
        whyAssessment: "For most organizations that do not use a multi-layer of security, a firewall device acts as the gatekeeper to the network and is often the first and last line of defense. The Firewall is a device that sits between the inside and outside of your network and regulates who can enter and exit it. A firewall that is incorrectly configured or has a software vulnerability due to a lack of patching can significantly impact your organization's security posture and allow a complete hacker access to the network.",
        benefits: [
            { icon: '🛡️', title: 'Perimeter Defense', description: 'Ensure your first line of defense is solid', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop' },
            { icon: '📋', title: 'Rule Optimization', description: 'Remove redundant and risky rules', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=600&auto=format&fit=crop' },
            { icon: '🔐', title: 'VPN Security', description: 'Secure remote access verification', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop' },
            { icon: '📊', title: 'Compliance', description: 'Meet industry standards requirements', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop' }
        ],
        whyChooseUs: "Our firewall audit identifies weak protocols, insecure rules, and additional data leakages that could jeopardize the firewall's infrastructure. Our team of cybersecurity experts has experience building firewalls from the ground up as well as implementing technology from a variety of leading firewall vendors. This allows us to see everything from both the attacker's and the defender's points of view, enabling us to conduct some of the most difficult and thorough assessments in our industry.",
        serviceName: 'firewall',
        relatedServices: [
            {
                title: 'Infrastructure Security',
                href: '/services/infrastructure-security',
                image: '/images/services/security.png',
                description: 'Comprehensive evaluation of your network infrastructure and cloud environments.'
            },
            {
                title: 'Red Team Assessment',
                href: '/services/red-team-assessment',
                image: '/images/Red Team Assessment.png',
                description: 'Simulated real-world intrusion assault against your enterprise to test defenses.'
            },
            {
                title: 'Web Application Security',
                href: '/services/web-application-security',
                image: '/images/cybersecurity.jpg',
                description: 'Comprehensive evaluation of web applications using industry-standard practices.'
            }
        ],
        metadata: {
            title: 'Firewall Security Assessment | Ehack Technology',
            description: 'Firewall configuration audit, rule analysis, VPN assessment, and penetration testing to ensure your network perimeter is secure.',
        }
    },
    'gdpr-consulting': {
        slug: 'gdpr-consulting',
        title: 'GDPR Consulting and Audit',
        description: 'Comprehensive GDPR compliance services to protect citizen data privacy rights and avoid significant penalties.',
        heroImage: '/images/services/general.png',
        whatIs: "The General Data Protection Regulation (GDPR) is a regulatory standard designed to protect citizens' data privacy rights in the European Union. It creates a legal framework for businesses that collect and process EU citizens' data. Organizations must ensure that personal data is collected legally and protected from misuse and exploitation to comply with GDPR. It also requires businesses that collect, process, and transmit personal data to respect the rights of data owners or face sanctions. Organizations will face significant penalties of up to 4% of annual revenue or 20 million euros if they do not comply.",
        features: [
            { title: 'Gap Analysis', image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Risk Assessment', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Implementation', image: 'https://images.unsplash.com/photo-1510511459019-5dee995ad335?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Compliance Audit', image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2000&auto=format&fit=crop' }
        ],
        whatWeCover: [
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
        ],
        whyAssessment: "While complying with GDPR can be overwhelming for many businesses, being proactive in your compliance efforts can be extremely beneficial. You can earn the trust of digital consumers who are wary of unsolicited follow-up, sales pitches, and spam. GDPR Compliance can compel your business to prioritize the user experience and demonstrate a commitment to user preferences. Perhaps most importantly, achieving compliance now can significantly reduce the likelihood of facing regulatory investigations and fines.",
        benefits: [
            { icon: '🇪🇺', title: 'EU Compliance', description: 'Meet all GDPR requirements', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop' },
            { icon: '💰', title: 'Avoid Penalties', description: 'Prevent 4% annual revenue fines', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop' },
            { icon: '🤝', title: 'Build Trust', description: 'Demonstrate data protection commitment', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop' },
            { icon: '📋', title: 'Documentation', description: 'Complete compliance documentation', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop' }
        ],
        whyChooseUs: "Our team has experience designing and implementing privacy systems that comply with GDPR. We understand that the best way to implement GDPR is to align technology with governance, risk, and compliance (GRC). Companies can use our ADAPT approach to help them meet GDPR compliance deadlines. Our team will assist you in continuing your GDPR journey without having to start over, regardless of your current GDPR enforcement status or efforts.",
        serviceName: 'gdpr',
        relatedServices: [
            {
                title: 'PCI DSS Compliance',
                href: '/services/pci-dss-compliance',
                image: '/images/PCI DSS Compliance Audit.png',
                description: 'Comprehensive PCI DSS compliance services to safeguard cardholder data.'
            },
            {
                title: 'ISO Certification',
                href: '/services/iso-certification',
                image: '/images/services/compliance.png',
                description: 'ISO 27001 advisory services to implement and certify Information Security.'
            },
            {
                title: 'Web Application Security',
                href: '/services/web-application-security',
                image: '/images/cybersecurity.jpg',
                description: 'Comprehensive evaluation of web applications using industry-standard practices.'
            }
        ],
        metadata: {
            title: 'GDPR Consulting and Audit | Ehack Technology',
            description: 'GDPR gap analysis, risk assessment, compliance consulting, and audit services to protect EU citizen data privacy rights.',
        }
    },
    'infrastructure-security': {
        slug: 'infrastructure-security',
        title: 'Infrastructure Security Assessment',
        description: 'Comprehensive evaluation of your network infrastructure, cloud environments, and security devices to identify vulnerabilities and misconfigurations.',
        heroImage: '/images/services/security.png',
        whatIs: "The IT facilities of a company are pillared over the network components they use. It's just as important to plan where each unit will go to configure it safely. The bugs are exploited as much for their design flaws as they are for their misconfiguration. Daily enforcement, configuration, and security reviews of the network assist the company in maintaining a current view of the network and IT infrastructure. Modern-day attacks are also looking for non-traditional entry points, such as wireless and VoIP infrastructure.",
        features: [
            { title: 'Network Security', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Cloud Security', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Active Directory', image: 'https://images.unsplash.com/photo-1526374865035-7fb7e60155b1?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Attack Simulation', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop' }
        ],
        whatWeCover: [
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
        ],
        whyAssessment: "The infrastructure security assessment is one of the most important factors of cybersecurity strategy. The assessment is the key to insight into the security framework of the network your organization has employed. It also ensures that any external and internal threats are detected in time, and the network is shielded against cyber-attacks as well as a timely remedy for the same.",
        benefits: [
            { icon: '🏗️', title: 'Full Coverage', description: 'Network, cloud, and endpoints', image: 'https://images.unsplash.com/photo-1555620920-53bc30cedcc6?q=80&w=600&auto=format&fit=crop' },
            { icon: '🔐', title: 'AD Security', description: 'Comprehensive Active Directory review', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' },
            { icon: '☁️', title: 'Cloud Ready', description: 'AWS, Azure, GCP assessment', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop' },
            { icon: '🦠', title: 'Ransomware Simulation', description: 'Test ransomware resilience', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop' }
        ],
        whyChooseUs: "Ehack Technology has been helping various organizations past few years in mitigating the risks and flaws within their infrastructure. We deal with a wide range of policies, procedures, systems, and networks that are assessed individually and with a focused approach. We often indulge in comprehensive research that can help us implement new security technologies and unknown threats in our assessments.",
        serviceName: 'infrastructure',
        relatedServices: [
            {
                title: 'Firewall Security',
                href: '/services/firewall-security',
                image: '/images/Firewall Security Assessment.png',
                description: 'Comprehensive firewall audit to ensure your configuration and rules meet needs.'
            },
            {
                title: 'Red Team Assessment',
                href: '/services/red-team-assessment',
                image: '/images/Red Team Assessment.png',
                description: 'Simulated real-world intrusion assault against your enterprise to test defenses.'
            },
            {
                title: 'Web Application Security',
                href: '/services/web-application-security',
                image: '/images/cybersecurity.jpg',
                description: 'Comprehensive evaluation of web applications using industry-standard practices.'
            }
        ],
        metadata: {
            title: 'Infrastructure Security Assessment | Ehack Technology',
            description: 'Network, cloud, Active Directory, router, and container security assessment. Comprehensive infrastructure penetration testing.',
        }
    },
    'iso-certification': {
        slug: 'iso-certification',
        title: 'ISO 27001 Certification Advisory',
        description: 'Comprehensive ISO 27001 advisory services to implement and certify your Information Security Management System (ISMS).',
        heroImage: '/images/services/compliance.png',
        whatIs: "Any organization faces challenges in implementing the ISO 27001 standard. Certification to any standard is frequently mandated by contractual obligations, regulatory requirements, or simply because it is the right thing to do for an organization. For those interested in determining their current security posture, our services can be used to establish a baseline and guide the evolution of their information security strategy—even if they do not wish to pursue full certification.",
        features: [
            { title: 'ISMS Gap Analysis', image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Risk Management', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Certification Support', image: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Training Programs', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop' }
        ],
        whatWeCover: [
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
        ],
        whyAssessment: "All major industries like Healthcare, Education, Fintech, and Hospitality require ISO 27001 adherence and enforcement due to the large volumes of data that must be properly managed. If this data becomes available or is compromised, the financial, legal, and other consequences could be disastrous. Strict compliance with ISO 27001 standards ensures that a company is not vulnerable to bugs that could compromise the organization's information security.",
        benefits: [
            { icon: '🏆', title: 'Global Recognition', description: 'Internationally recognized certification', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=600&auto=format&fit=crop' },
            { icon: '🔒', title: 'Security Framework', description: 'Structured approach to information security', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop' },
            { icon: '📈', title: 'Business Growth', description: 'Win contracts requiring ISO certification', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop' },
            { icon: '✅', title: 'Compliance', description: 'Meet regulatory and contractual requirements', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop' }
        ],
        whyChooseUs: "Traditional certification approaches often take a 'one size fits all' approach that does not quite fit your true desires or align with your strategic goals. Our experienced consultants, who are also Lead Auditors, provide a practical perspective on implementing ISO/IEC 27001 and aligning it with your business goals using our proven methodology. This approach breaks down the certification process into manageable components, ensuring you retain complete control over how your resources are used.",
        serviceName: 'iso',
        relatedServices: [
            {
                title: 'GDPR Consulting',
                href: '/services/gdpr-consulting',
                image: '/images/services/general.png',
                description: 'Comprehensive GDPR compliance services to protect citizen data privacy rights.'
            },
            {
                title: 'PCI DSS Compliance',
                href: '/services/pci-dss-compliance',
                image: '/images/PCI DSS Compliance Audit.png',
                description: 'Comprehensive PCI DSS compliance services to safeguard cardholder data.'
            },
            {
                title: 'Infrastructure Security',
                href: '/services/infrastructure-security',
                image: '/images/services/security.png',
                description: 'Comprehensive evaluation of your network infrastructure and cloud environments.'
            }
        ],
        metadata: {
            title: 'ISO 27001 Certification Advisory | Ehack Technology',
            description: 'ISO 27001 gap analysis, ISMS implementation, risk assessment, and certification support for information security management.',
        }
    },
    'malware-analysis': {
        slug: 'malware-analysis',
        title: 'Malware Analysis & Incident Response',
        description: 'Comprehensive malware analysis and incident response services to understand threats and develop effective countermeasures.',
        heroImage: '/images/Malware Analysis and Root Cause Detection.png',
        whatIs: "Incident Response and Malware Analysis will assist you to gauge the influence of cyber breaches. An investigation is necessary, and a containment and recovery technique needs to be carried out by experts. Malware analysis is the process of understanding the behavior and purpose of a suspicious file or URL. The output of the analysis aids in the detection and mitigation of the potential threat. The key benefit of malware analysis is that it helps incident responders and security analysts pragmatically triage incidents and uncover hidden indicators of compromise.",
        features: [
            { title: 'Threat Intelligence', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Behavioral Analysis', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Incident Triage', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Reverse Engineering', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop' }
        ],
        whatWeCover: [
            'Static Malware Analysis',
            'Dynamic Malware Analysis',
            'Behavioral Analysis',
            'Code Analysis & Reverse Engineering',
            'Indicators of Compromise (IOC) Extraction',
            'Threat Intelligence Correlation',
            'Incident Triage & Prioritization',
            'Containment & Eradication',
            'Recovery & Restoration',
            'Post-Incident Review',
            'Lessons Learned Documentation',
            'Security Improvement Recommendations'
        ],
        whyAssessment: "When a cyber-attack happens in your organization, an expert dealing with it is the need of the hour. Precious time takes the side bench when you rely on in-house techniques to recover from the incident. A professional is required to handle and mitigate the problem without causing further harm to your organization's data. Malware analysis helps incident responders uncover hidden IOCs that should be blocked and enrich context when threat hunting.",
        benefits: [
            { icon: '🦠', title: 'Threat Understanding', description: 'Deep analysis of malware behavior', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop' },
            { icon: '🎯', title: 'IOC Extraction', description: 'Actionable indicators of compromise', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop' },
            { icon: '⚡', title: 'Rapid Response', description: '24/7 incident response availability', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop' },
            { icon: '📊', title: 'Threat Intel', description: 'Integration with threat intelligence', image: 'https://images.unsplash.com/photo-1555620920-53bc30cedcc6?q=80&w=600&auto=format&fit=crop' }
        ],
        whyChooseUs: "Ehack Technology is committed to providing businesses worldwide with cutting-edge digital forensic solutions and incident response capabilities. We leverage the experience of a diverse team to provide services for a variety of technologies and complex cyber threats, resulting in the highest possible level of assurance. Our malware analysts are trained in the latest techniques and tools for analyzing sophisticated threats.",
        serviceName: 'malware-analysis',
        relatedServices: [
            {
                title: 'Digital Forensics',
                href: '/services/digital-forensics',
                image: '/images/services/forensics.png',
                description: 'Expert investigation and evidence collection services to address cyber breaches.'
            },
            {
                title: 'Red Team Assessment',
                href: '/services/red-team-assessment',
                image: '/images/Red Team Assessment.png',
                description: 'Simulated real-world intrusion assault against your enterprise to test defenses.'
            },
            {
                title: 'Infrastructure Security',
                href: '/services/infrastructure-security',
                image: '/images/services/security.png',
                description: 'Comprehensive evaluation of your network infrastructure and cloud environments.'
            }
        ],
        metadata: {
            title: 'Malware Analysis & Incident Response | Ehack Technology',
            description: 'Malware analysis, threat detection, behavior analysis, and incident response services to understand and mitigate cyber threats.',
        }
    },
    'mobile-application-security': {
        slug: 'mobile-application-security',
        title: 'Mobile Application Security Assessment',
        description: 'Comprehensive security evaluation of iOS and Android applications to identify vulnerabilities and protect sensitive user data.',
        heroImage: '/images/mobileapp_service_image.png',
        whatIs: "Over the last few years, mobile technology has accelerated its growth and seen a massive increase in its user base. Mobile applications store and process a wide variety of sensitive data, from credit card information to intellectual property to medical records. Malicious attackers easily target this sensitive information. Due to the blurring of the lines between secure and exposed data, Mobile Application Security Testing evaluates an application's security and a large pool of mobile application threat vectors to identify inherent vulnerabilities and ensure the application's secure state while in use.",
        features: [
            { title: 'Mobile Assessment', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop' },
            { title: 'API Security', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Secure Code Review', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Binary Hardening', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop' }
        ],
        whatWeCover: [
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
        ],
        whyAssessment: "During a Mobile App Security Assessment, mobile app security experts use a rigorous methodology to determine the overall security posture of a given application. These experts model the threat posed by a range of threat actors with varying levels of sophistication. They determine how resistant your mobile app is to these various threats. Developers gain confidence in the safety of their products, businesses gain confidence in security integration, and users feel safer knowing the app has passed a comprehensive security test.",
        benefits: [
            { icon: '📱', title: 'Platform Coverage', description: 'iOS and Android comprehensive testing', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' },
            { icon: '🔐', title: 'Data Protection', description: 'Ensure sensitive data is properly secured', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop' },
            { icon: '🛡️', title: 'Tamper Resistance', description: 'Protect against reverse engineering', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop' },
            { icon: '📊', title: 'Detailed Reporting', description: 'Clear remediation steps for developers', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=600&auto=format&fit=crop' }
        ],
        whyChooseUs: "At Ehack Technology, we employ advanced methodologies tailored to specific applications. We have a sophisticated approach to detecting bugs, ensuring no vulnerability goes unnoticed, and expert guidance can help mitigate issues without interfering with existing systems. Our expert team works quickly to identify flaws in source code, binary files, applications, back-end integrations, and platform workflow.",
        serviceName: 'mobile-security',
        relatedServices: [
            {
                title: 'Web Application Security',
                href: '/services/web-application-security',
                image: '/images/cybersecurity.jpg',
                description: 'Comprehensive evaluation of web applications using industry-standard practices.'
            },
            {
                title: 'API Security Assessment',
                href: '/services/api-security',
                image: '/images/API_service_image.png',
                description: 'Comprehensive security evaluation of your APIs to identify vulnerabilities.'
            },
            {
                title: 'Source Code Review',
                href: '/services/source-code-review',
                image: '/images/Source Code Review.png',
                description: 'Thorough code analysis to identify vulnerabilities at the source level.'
            }
        ],
        metadata: {
            title: 'Mobile Application Security Assessment | Ehack Technology',
            description: 'iOS and Android mobile app security testing covering OWASP Mobile Top 10, reverse engineering, data storage, and API security.',
        }
    },
    'pci-dss-compliance': {
        slug: 'pci-dss-compliance',
        title: 'PCI DSS Compliance Audit',
        description: 'Comprehensive PCI DSS compliance services to safeguard cardholder data and ensure payment security standards.',
        heroImage: '/images/PCI DSS Compliance Audit.png',
        whatIs: "PCI DSS is an internationally recognized data security standard that applies to businesses that process credit card information. The Payment Card Industry Security Standards Council (PCI SSC) is responsible for overseeing the Standard, which is intended to safeguard credit card and debit card transactions against theft and fraud. While the Standard is not a legal requirement, it is necessary to safeguard cardholder data and debit/credit card transactions. All businesses that accept and process debit and credit card payments must conduct a PCI DSS audit on an annual basis.",
        features: [
            { title: 'Gap analysis', image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Penetration Testing', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop' },
            { title: 'ASV Scanning', image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa81?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Compliance Monitoring', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop' }
        ],
        whatWeCover: [
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
        ],
        whyAssessment: "If you are a merchant or service provider that stores, handles, or transmits cardholder data, PCI enforcement is essential to your organization's operational security. A non-compliant company can face significant fines and penalties, as well as the loss of the right to accept card payments, loss of revenue, diminished consumer trust, and legal costs. PCI enforcement demonstrates your commitment to security and reassures clients about the security of their cardholder data.",
        benefits: [
            { icon: '💳', title: 'Card Processing', description: 'Maintain ability to accept payments', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop' },
            { icon: '🛡️', title: 'Data Protection', description: 'Secure cardholder information', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop' },
            { icon: '✅', title: 'QSA Certification', description: 'Expert-led compliance audit', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop' },
            { icon: '📊', title: 'Risk Reduction', description: 'Minimize breach liability', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop' }
        ],
        whyChooseUs: "PCI DSS is a comprehensive and granular requirement that applies to all entities that store, process, or distribute payment card data. Our Qualified Security Assessor (QSA) will guide you through the PCI compliance process from initial examination to full compliance in the most effective and least intrusive manner possible. We understand the complexities of PCI DSS and help organizations navigate compliance efficiently.",
        serviceName: 'pci-dss',
        relatedServices: [
            {
                title: 'GDPR Consulting',
                href: '/services/gdpr-consulting',
                image: '/images/services/general.png',
                description: 'Comprehensive GDPR compliance services to protect citizen data privacy rights.'
            },
            {
                title: 'ISO Certification',
                href: '/services/iso-certification',
                image: '/images/services/compliance.png',
                description: 'ISO 27001 advisory services to implement and certify Information Security.'
            },
            {
                title: 'Web Application Security',
                href: '/services/web-application-security',
                image: '/images/cybersecurity.jpg',
                description: 'Comprehensive evaluation of web applications using industry-standard practices.'
            }
        ],
        metadata: {
            title: 'PCI DSS Compliance Audit | Ehack Technology',
            description: 'PCI DSS gap analysis, risk assessment, penetration testing, ASV scanning, and QSA-led audit services for payment card security.',
        }
    },
    'red-team-assessment': {
        slug: 'red-team-assessment',
        title: 'Red Team Assessment',
        description: 'Simulated real-world intrusion assault against your enterprise to test defenses without affecting normal operations.',
        heroImage: '/images/Red Team Assessment.png',
        whatIs: "A Red Team Assessment is a simulated real-world intrusion assault against an enterprise that does not affect its normal operations. For a limited time span, attacks will be launched from various entry points to satisfy the organization's testing tasks and specifications. The Red Teaming concept begins with the challenge of comprehending the adversary's motivations and actions. We can anticipate an attacker's moves and develop effective countermeasures if we understand how they think.",
        features: [
            { title: 'Red Teaming', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Social Engineering', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Physical Security', image: 'https://images.unsplash.com/photo-1555620920-53bc30cedcc6?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Advanced Pentesting', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop' }
        ],
        whatWeCover: [
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
        ],
        whyAssessment: "Have you ever wondered, 'How did I get hacked when I already purchased security equipment?' Organizations frequently struggle with self-defense because of information asymmetry between attackers and defenders. The presumed battlefield is frequently not the focus but rather boundary areas that were previously deemed completely unimportant. A more thorough Red Team Assessment sheds light on an organization's simulation of a real-world threat.",
        benefits: [
            { icon: '🎯', title: 'Real-World Simulation', description: 'Test against actual attack techniques', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop' },
            { icon: '🔓', title: 'Multi-Vector Attack', description: 'Network, physical, and social engineering', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop' },
            { icon: '📊', title: 'Defense Validation', description: 'Evaluate your security team response', image: 'https://images.unsplash.com/photo-1555620920-53bc30cedcc6?q=80&w=600&auto=format&fit=crop' },
            { icon: '🛡️', title: 'Risk Identification', description: 'Find gaps before real attackers do', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' }
        ],
        whyChooseUs: "Ehack Technology specializes in and is passionate about conducting large-scale attacks. Our team members are innovative problem solvers who possess a range of skills, including programming, network testing, wireless security, security code review, web application penetration testing, reverse engineering, and exploit research. Red Team Exercises shed light on an organization's simulation of a real-world threat by combining and chaining multiple domain-specific attacks.",
        serviceName: 'red-team',
        relatedServices: [
            {
                title: 'Infrastructure Security',
                href: '/services/infrastructure-security',
                image: '/images/services/security.png',
                description: 'Comprehensive evaluation of your network infrastructure and cloud environments.'
            },
            {
                title: 'Web Application Security',
                href: '/services/web-application-security',
                image: '/images/cybersecurity.jpg',
                description: 'Comprehensive evaluation of web applications using industry-standard practices.'
            },
            {
                title: 'Digital Forensics',
                href: '/services/digital-forensics',
                image: '/images/services/forensics.png',
                description: 'Expert investigation and evidence collection services to address cyber breaches.'
            }
        ],
        metadata: {
            title: 'Red Team Assessment | Ehack Technology',
            description: 'Simulated real-world attack scenarios to test your organization defenses. Network, wireless, physical, and social engineering testing.',
        }
    },
    'source-code-review': {
        slug: 'source-code-review',
        title: 'Secure Source Code Review',
        description: 'Thorough code analysis to identify vulnerabilities at the source level before they become exploitable in production.',
        heroImage: '/images/Source Code Review.png',
        whatIs: "Secure Source Code reviews are an effective way to identify difficult or impossible bugs during black-box or grey-box testing. Our security architects and specialist developers conduct a thorough code analysis using a detailed checklist of common implementation and architecture errors. The source code review identifies the vulnerable assertion line of code and the corrupted variable that introduces the vulnerability. This demonstrates how an event spreads from its source to its conclusion, providing application developers with a comprehensive view of each vulnerability.",
        features: [
            { title: 'Manual Review', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Automated Scan', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop' },
            { title: 'SCA Testing', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Architecture Review', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop' }
        ],
        whatWeCover: [
            'JAVA', 'SWIFT', 'Objective C', 'FLUTTER',
            'KOTLIN', 'DART', 'PHP', 'JavaScript',
            'ASP.NET', 'C#', 'C++', 'Ruby',
            'GO', 'Python', 'TypeScript', 'Node.js'
        ],
        whyAssessment: "When additional assurance is necessary, a secure source code review is recommended. We can identify vulnerabilities in applications that would be extremely difficult to discover without source code access. Along with specific vulnerabilities, a secure source code review typically identifies deficient coding practices that leave the code vulnerable to future vulnerabilities. Consider a source code review for applications with high significance, reliance on open-source libraries, third-party code, or when you require additional levels of assurance.",
        benefits: [
            { icon: '🔍', title: 'Deep Analysis', description: 'Find vulnerabilities invisible to dynamic testing', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop' },
            { icon: '📚', title: '30+ Languages', description: 'Comprehensive technology coverage', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop' },
            { icon: '✅', title: 'Compliance', description: 'CWE, OWASP, PCI, CERT, SANS compliant', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=600&auto=format&fit=crop' },
            { icon: '👤', title: 'Expert Review', description: 'Manual review by experienced developers', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop' }
        ],
        whyChooseUs: "Ehack Technology will assign one or more consultants with relevant programming experience to each engagement. Each security consultant has a great deal of experience with application security. A hybrid approach combining dynamic tooling and manual review is used to achieve both breadth and depth of coverage. Having concurrent access to a running version of the target system while conducting the code review maximizes context and verifies findings in real-time.",
        serviceName: 'source-code-review',
        relatedServices: [
            {
                title: 'Web Application Security',
                href: '/services/web-application-security',
                image: '/images/cybersecurity.jpg',
                description: 'Comprehensive evaluation of web applications using industry-standard practices.'
            },
            {
                title: 'API Security Assessment',
                href: '/services/api-security',
                image: '/images/API_service_image.png',
                description: 'Comprehensive security evaluation of your APIs to identify vulnerabilities.'
            },
            {
                title: 'Mobile App Security',
                href: '/services/mobile-application-security',
                image: '/images/mobileapp_service_image.png',
                description: 'Security evaluation of iOS and Android applications to protect sensitive data.'
            }
        ],
        metadata: {
            title: 'Secure Source Code Review | Ehack Technology',
            description: 'Manual and automated secure source code review across 30+ programming languages. CWE, OWASP, PCI, CERT compliant analysis.',
        }
    },
    'thick-client-security': {
        slug: 'thick-client-security',
        title: 'Thick Client Security Assessment',
        description: 'Comprehensive security testing for desktop applications to identify memory corruption, injection, and cryptographic vulnerabilities.',
        heroImage: '/images/Thick Client Security.png',
        whatIs: "Many thick client applications are not thoroughly examined because security testing efforts are frequently focused on web and mobile applications. However, these applications could have serious security flaws like memory corruption, injection, cryptographic flaws, and client-side trust issues. These flaws can lead to complete system compromise and unauthorized access to server-side data on systems where the thick client software is installed. Thick client applications process data on both the client and server sides and use proprietary protocols to communicate.",
        features: [
            { title: 'Thick Client Pentest', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop' },
            { title: 'API & Web Services', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Source Code Review', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop' },
            { title: 'Binary Hardening', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop' }
        ],
        whatWeCover: [
            'Injections',
            'Business Logic Vulnerability',
            'Analysing Config Files',
            'Reverse Engineering',
            'Test Encryption Used in Application',
            'Identifying DLL Hijacking Vulnerability',
            'Test for Sensitive Data in Memory',
            'Dependency Mapping',
            'Broken Authentication',
            'Sensitive Data Exposure',
            'Broken Access Control',
            'Security Misconfiguration',
            'Insecure Deserialization',
            'Inter-Process Communication'
        ],
        whyAssessment: "Thick Client Application Security Testing necessitates highly skilled manual penetration testers and a methodical approach. These applications are critical for internal operations and frequently contain and process sensitive data. We can help you identify vulnerabilities in thick client applications that expose your organization to external or internal threats.",
        benefits: [
            { icon: '🖥️', title: 'Desktop Focus', description: 'Specialized thick client expertise', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop' },
            { icon: '🔬', title: 'Binary Analysis', description: 'Reverse engineering and decompilation', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop' },
            { icon: '💾', title: 'Memory Testing', description: 'Runtime memory analysis', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop' },
            { icon: '🔐', title: 'Crypto Review', description: 'Cryptographic implementation audit', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop' }
        ],
        whyChooseUs: "Since your thick client applications can involve intellectual property belonging to your company, you want to ensure that they are immune to reverse engineering and alteration. Without professional analysis of binary hardening mechanisms, you would be unaware of how easily an attacker can reverse engineer or change your client-side code. We provide the highest-quality cybersecurity services and have extensive experience analyzing obfuscated and hardened software, as well as breaching security controls such as white-box cryptography.",
        serviceName: 'thick-client',
        relatedServices: [
            {
                title: 'Source Code Review',
                href: '/services/source-code-review',
                image: '/images/Source Code Review.png',
                description: 'Thorough code analysis to identify vulnerabilities at the source level.'
            },
            {
                title: 'Web Application Security',
                href: '/services/web-application-security',
                image: '/images/cybersecurity.jpg',
                description: 'Comprehensive evaluation of web applications using industry-standard practices.'
            },
            {
                title: 'API Security Assessment',
                href: '/services/api-security',
                image: '/images/API_service_image.png',
                description: 'Comprehensive security evaluation of your APIs to identify vulnerabilities.'
            }
        ],
        metadata: {
            title: 'Thick Client Security Assessment | Ehack Technology',
            description: 'Desktop application security testing including reverse engineering, DLL hijacking, memory analysis, and cryptographic review.',
        }
    }
};
