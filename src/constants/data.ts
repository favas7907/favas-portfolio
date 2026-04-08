import { 
  Code2, 
  Layout, 
  Database, 
  Shield, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Terminal,
  Cpu,
  Globe,
  BookOpen,
  Award,
  Trophy,
  Briefcase,
  GraduationCap,
  FileText
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  name: 'Favas M',
  role: 'B.Tech Computer Science Student | Full Stack Developer',
  specialization: 'AI • Blockchain • Cybersecurity Enthusiast',
  college: 'Computer Science & Engineering',
  year: '2024-2028',
  tagline: 'Building scalable, secure, and intelligent digital solutions using modern technologies.',
  ctaPrimary: 'View Projects',
  ctaSecondary: 'Download Resume',
  ctaTertiary: 'Contact Me',
  avatarUrl: '/MY PHOTO.jpeg',
};

export const ABOUT_CONTENT = {
  title: 'About Me',
  description: 'I am a passionate B.Tech Computer Science student specializing in building scalable, secure, and intelligent digital solutions. My journey in technology is driven by a deep interest in Full Stack Development, Artificial Intelligence, Blockchain, and Cybersecurity. I love solving complex problems and turning ideas into functional, user-centric applications.',
  highlights: [
    'Full Stack Web Development (MERN/Next.js)',
    'AI & Machine Learning Enthusiast',
    'Blockchain & Decentralized Apps',
    'Cybersecurity & Ethical Hacking'
  ]
};

export const EDUCATION = [
  {
    institution: 'B.Tech in Computer Science',
    degree: 'Bachelor of Technology',
    period: '2024 - 2028',
    details: 'Focusing on core CS concepts including DSA, DBMS, OS, and Networking. Actively involved in technical clubs and research projects.',
    icon: GraduationCap
  },
  {
    institution: 'Higher Secondary Education',
    degree: 'Science & Mathematics',
    period: '2022 - 2024',
    details: 'Strong foundation in Physics, Chemistry, and Mathematics with a focus on logical reasoning and problem solving.',
    icon: BookOpen
  }
];

export const SKILLS = [
  {
    category: 'Languages',
    icon: Code2,
    items: ['C++', 'Java', 'Python', 'JavaScript', 'SQL']
  },
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion']
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'Express', 'Django', 'Flask', 'GraphQL']
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
  },
  {
    category: 'CS Concepts',
    icon: Cpu,
    items: ['DSA', 'OOPs', 'Operating Systems', 'DBMS', 'Computer Networks']
  },
  {
    category: 'Tools & DevOps',
    icon: Terminal,
    items: ['Git', 'Docker', 'AWS', 'Linux', 'Postman']
  }
];

export const PROJECTS = [
  {
    title: 'SecureVault',
    description: 'Problem: Traditional password storage is vulnerable to breaches. Solution: Engineered a zero-knowledge encryption vault with MFA, ensuring absolute credential security via Web Crypto API.',
    tech: ['React', 'Node.js', 'Web Crypto API', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://picsum.photos/seed/vault/600/400',
    featured: true
  },
  {
    title: 'EcoTrack',
    description: 'Problem: Fragmented environmental data hinders sustainable action. Solution: Architected a real-time IoT dashboard that transforms raw sensor data into actionable insights using D3.js.',
    tech: ['TypeScript', 'D3.js', 'Express', 'InfluxDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://picsum.photos/seed/eco/600/400',
    featured: false
  },
  {
    title: 'DevConnect',
    description: 'Problem: Open-source collaboration is often siloed and difficult to initiate. Solution: Launched a real-time networking hub that matches developers with relevant projects using Firebase and GraphQL.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'GraphQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://picsum.photos/seed/dev/600/400',
    featured: false
  }
];

export const EXPERIENCE = [
  {
    company: 'TechFlow Solutions',
    role: 'Software Engineering Intern',
    period: 'Summer 2024',
    description: 'Assisted in developing a high-traffic e-commerce platform. Optimized frontend performance by 20% using React and micro-frontends.'
  },
  {
    company: 'CyberGuard Inc.',
    role: 'Cybersecurity Trainee',
    period: 'Winter 2023',
    description: 'Conducted vulnerability assessments and penetration testing for internal applications. Learned OWASP Top 10 and network security.'
  }
];

export const CERTIFICATIONS = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    link: '#'
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Coursera',
    date: '2023',
    link: '#'
  },
  {
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Coursera',
    date: '2023',
    link: '#'
  }
];

export const ACHIEVEMENTS = [
  {
    title: 'Winner - Global Hackathon 2024',
    description: 'Awarded first place among 200+ teams for building a decentralized voting system.',
    icon: Trophy
  },
  {
    title: 'Top 5% - LeetCode Weekly Contest',
    description: 'Consistently ranked in the top 5% of participants globally in competitive programming.',
    icon: Award
  },
  {
    title: 'Open Source Contributor',
    description: 'Contributed to major open-source projects like React and Tailwind CSS.',
    icon: Github
  }
];

export const CONTACT_INFO = {
  email: 'favasm7907@gmail.com',
  socials: [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Globe, href: 'https://twitter.com' }
  ]
};
