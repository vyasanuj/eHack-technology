
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
    { id: 'offensive', name: 'Offensive Security' },
    { id: 'ops', name: 'Security Operations' },
    { id: 'grc', name: 'GRC & Compliance' },
    { id: 'forensics', name: 'Digital Forensics & IR' },
    { id: 'eng', name: 'Software Engineering' },
    { id: 'biz', name: 'Sales & Marketing' },
];

export const dummyJobs: Job[] = [
    {
        id: '1',
        title: 'Senior VAPT Analyst',
        category: 'offensive',
        location: 'Bangalore, India (Hybrid)',
        type: 'Full-time',
        description: 'Lead offensive security assessments, including web, mobile, and network penetration testing for enterprise clients. CEH/OSCP certification required.',
        postedDate: '2025-01-20',
        salary: '₹15L - ₹22L PA'
    },
    {
        id: '2',
        title: 'SOC Analyst L2',
        category: 'ops',
        location: 'Mumbai, India',
        type: 'Full-time',
        description: 'Monitor, analyze, and respond to security threats in real-time. Experience with SIEM tools and incident response protocols is essential.',
        postedDate: '2025-01-22',
        salary: '₹8L - ₹14L PA'
    },
    {
        id: '3',
        title: 'GRC Consultant (ISO/GDPR)',
        category: 'grc',
        location: 'Remote',
        type: 'Contract',
        description: 'Help global enterprises achieve and maintain compliance with ISO 27001, GDPR, and PCI DSS standards through rigorous audits and framework development.',
        postedDate: '2025-01-18',
        salary: 'Competitive'
    },
    {
        id: '4',
        title: 'Digital Forensics Lead',
        category: 'forensics',
        location: 'Bangalore, India',
        type: 'Full-time',
        description: 'Direct digital forensic investigations and incident response activities. Deep expertise in data recovery and legal evidence handling required.',
        postedDate: '2025-01-15',
        salary: '₹18L - ₹25L PA'
    },
    {
        id: '5',
        title: 'Security Software Engineer',
        category: 'eng',
        location: 'Bangalore, India',
        type: 'Full-time',
        description: 'Develop and maintain secure-by-default applications and internal security tools. Experience with Python, Next.js, and cloud security is preferred.',
        postedDate: '2025-01-24',
        salary: '₹12L - ₹18L PA'
    },
    {
        id: '6',
        title: 'Cybersecurity Sales Lead',
        category: 'biz',
        location: 'Pune, India',
        type: 'Full-time',
        description: 'Drive growth for our enterprise security services. Strong understanding of the cybersecurity landscape and experience in B2B technology sales required.',
        postedDate: '2025-01-16',
        salary: '₹10L - ₹15L PA + Commission'
    },
    {
        id: '7',
        title: 'Junior Penetration Tester',
        category: 'offensive',
        location: 'Bangalore, India',
        type: 'Internship',
        description: 'Kickstart your career in ethical hacking by assisting our senior team with vulnerability assessments and research. Basic security knowledge required.',
        postedDate: '2025-01-24',
        salary: 'Stipend ₹20k/month'
    }
];
