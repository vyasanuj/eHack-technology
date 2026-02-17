
export interface Job {
    id: string;
    title: string;
    category: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
    description: string;
    postedDate: string;
    salary?: string;
}

export const jobCategories = [
    { id: 'all', name: 'All Roles' },
    { id: 'security', name: 'Security & Research' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'compliance', name: 'Compliance & Consulting' },
    { id: 'sales', name: 'Sales & Business' },
    { id: 'operations', name: 'Operations & HR' },
];

export const dummyJobs: Job[] = [
    {
        id: '1',
        title: 'Senior Penetration Tester',
        category: 'security',
        location: 'Bangalore, India (Hybrid)',
        type: 'Full-time',
        description: 'Lead complex VAPT engagements for enterprise clients across web, mobile, and infrastructure. Must hold CEH/OSCP certification with 4+ years of hands-on penetration testing experience.',
        postedDate: '2026-02-10',
        salary: '₹15L - ₹22L PA'
    },
    {
        id: '2',
        title: 'Security Researcher — Malware Analysis',
        category: 'security',
        location: 'Bangalore, India',
        type: 'Full-time',
        description: 'Perform deep malware reverse engineering, root cause analysis, and threat intelligence research. Proficiency with IDA Pro, Ghidra, and sandbox environments required.',
        postedDate: '2026-02-12',
        salary: '₹12L - ₹18L PA'
    },
    {
        id: '3',
        title: 'DevSecOps Engineer',
        category: 'engineering',
        location: 'Remote',
        type: 'Full-time',
        description: 'Integrate security tooling into CI/CD pipelines, manage SAST/DAST automation, and champion secure coding practices across development teams. Experience with Docker, Kubernetes, and Jenkins is essential.',
        postedDate: '2026-02-08',
        salary: '₹14L - ₹20L PA'
    },
    {
        id: '4',
        title: 'Full-Stack Developer (React/Next.js)',
        category: 'engineering',
        location: 'Remote',
        type: 'Contract',
        description: 'Build and maintain internal dashboards, client portals, and marketing platforms. Strong proficiency with Next.js, TypeScript, and modern UI libraries is required.',
        postedDate: '2026-02-05',
        salary: 'Competitive'
    },
    {
        id: '5',
        title: 'Compliance Consultant — PCI DSS & ISO 27001',
        category: 'compliance',
        location: 'Mumbai, India',
        type: 'Full-time',
        description: 'Conduct compliance audits, gap assessments, and remediation advisory for clients seeking PCI DSS, ISO 27001, and GDPR certifications. Prior QSA/Lead Auditor experience preferred.',
        postedDate: '2026-02-14',
        salary: '₹10L - ₹16L PA'
    },
    {
        id: '6',
        title: 'Digital Forensics Analyst',
        category: 'security',
        location: 'Bangalore, India',
        type: 'Full-time',
        description: 'Investigate cyber incidents, perform disk and memory forensics, and prepare court-admissible evidence reports. CHFI certification and experience with EnCase/FTK are a plus.',
        postedDate: '2026-02-11',
        salary: '₹8L - ₹14L PA'
    },
    {
        id: '7',
        title: 'Business Development Manager',
        category: 'sales',
        location: 'Delhi, India',
        type: 'Full-time',
        description: 'Drive enterprise sales of cybersecurity services. Build relationships with CISOs and IT decision-makers, manage the sales pipeline, and close high-value consulting engagements.',
        postedDate: '2026-02-15',
        salary: '₹10L - ₹15L PA + Incentives'
    },
    {
        id: '8',
        title: 'SOC Analyst (L2)',
        category: 'security',
        location: 'Bangalore, India',
        type: 'Full-time',
        description: 'Monitor SIEM alerts, triage security incidents, and coordinate incident response for managed security clients. Familiarity with Splunk, QRadar, or ELK stack is required.',
        postedDate: '2026-02-13',
        salary: '₹6L - ₹10L PA'
    },
    {
        id: '9',
        title: 'HR & Talent Acquisition Executive',
        category: 'operations',
        location: 'Bangalore, India',
        type: 'Full-time',
        description: 'Manage end-to-end recruitment for cybersecurity professionals, handle employee engagement initiatives, and support day-to-day HR operations in a fast-growing security firm.',
        postedDate: '2026-02-16',
        salary: '₹5L - ₹8L PA'
    },
];
