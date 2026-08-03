import { ReactNode } from 'react';

export type LibraryCategory = 
  | 'Talks & Presentations'
  | 'Workshops Conducted'
  | 'Hackathons'
  | 'Events Attended'
  | 'Technical Articles'
  | 'Open Source'
  | 'Research'
  | 'Certifications'
  | 'Awards'
  | 'Community Contributions'
  | 'Media'
  | 'Learning Archive';

export interface LibraryItem {
  id: string;
  title: string;
  category: LibraryCategory;
  date: string; // ISO or readable, e.g., 'Oct 2023'
  year: number;
  organization: string;
  summary: string;
  
  // Detail page fields
  context: string;
  myContribution?: string;
  whatILearned?: string;
  connection?: string; // How it connects to my engineering journey
  
  tags: string[]; // Technologies, Keywords
  
  heroImage?: string;
  photos?: string[];
  
  links?: {
    label: string;
    url: string;
  }[];
}

export const LIBRARY_DATA: LibraryItem[] = [
  {
    id: 'scaling-react-apps',
    title: 'Architecting Scalable React Applications',
    category: 'Talks & Presentations',
    date: 'Oct 2023',
    year: 2023,
    organization: 'DevConnect Summit',
    summary: 'A deep dive into state management, performance optimization, and clean architecture in modern React.',
    context: 'Presented at the Annual DevConnect Summit in late 2023. The audience consisted of approximately 200 developers. The talk was scheduled as a deep-dive technical session rather than a high-level overview.',
    myContribution: 'I authored the presentation, built a sample repository demonstrating common anti-patterns, and live-coded a refactor on stage to show the tangible benefits of clean architecture.',
    whatILearned: 'Teaching solidifies understanding. Formulating the arguments for specific architectural choices forced me to deeply re-evaluate my own biases regarding state management tools like Redux vs. Zustand.',
    connection: 'This talk marked my transition from an individual contributor to a technical leader who shares knowledge. It directly led to my later work on defining company-wide frontend standards.',
    tags: ['React', 'Architecture', 'State Management', 'Performance'],
    heroImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200&h=600',
    photos: [
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600&h=600',
      'https://images.unsplash.com/photo-1515879218367-8466d910auj7?auto=format&fit=crop&q=80&w=600&h=600'
    ],
    links: [
      { label: 'Presentation Slides (PDF)', url: '#' },
      { label: 'Demo Repository', url: '#' }
    ]
  },
  {
    id: 'zero-trust-workshop',
    title: 'Zero-Trust Architecture Basics',
    category: 'Workshops Conducted',
    date: 'Jan 2024',
    year: 2024,
    organization: 'CyberSecurity Meetup Group',
    summary: 'Hands-on workshop demonstrating how to implement zero-trust principles in web applications.',
    context: 'A 4-hour hands-on workshop for junior to mid-level developers, organized by the local cybersecurity meetup. The goal was to move beyond theory and implement actual zero-trust boundaries in a simple Node/Express application.',
    myContribution: 'I designed the curriculum, created the starter repository with intentional security flaws, and guided the 30 attendees through fixing them using JWT validation, strict CORS policies, and input sanitization.',
    whatILearned: 'I learned that security concepts are best taught through breaking things first. Seeing attendees successfully exploit the starter app made the subsequent mitigation lessons much more impactful.',
    connection: 'This workshop built upon my previous cybersecurity internship, allowing me to share practical security habits with other developers and advocate for secure-by-default engineering.',
    tags: ['Security', 'Zero-Trust', 'Node.js', 'Authentication'],
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&h=600',
    links: [
      { label: 'Workshop Repository', url: '#' }
    ]
  },
  {
    id: 'hackathon-survival-guide',
    title: 'The Hacker\'s Survival Guide',
    category: 'Technical Articles',
    date: 'Nov 2023',
    year: 2023,
    organization: 'Tech Blog',
    summary: 'Strategies for ideation, rapid prototyping, and delivering polished products in 24 hours.',
    context: 'Published on a popular engineering blog, this article distilled the lessons I learned from participating in and winning multiple hackathons. It focused on the engineering pragmatism required to ship under extreme time constraints.',
    myContribution: 'I authored the 2,000-word article, creating custom diagrams to illustrate the difference between perfect architecture and "hackathon architecture."',
    whatILearned: 'Writing this article helped me articulate my own philosophy on technical debt. In a hackathon, technical debt is a tool to buy time; in production, it is a liability. Understanding the difference is crucial.',
    connection: 'This piece connects my competitive programming background with my current focus on sustainable engineering, highlighting the spectrum of software quality.',
    tags: ['Hackathon', 'Prototyping', 'Productivity', 'Writing'],
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&h=600',
    links: [
      { label: 'Read Article', url: '#' }
    ]
  },
  {
    id: 'web3-identity',
    title: 'Decentralized Identity on the Web',
    category: 'Research',
    date: 'Feb 2024',
    year: 2024,
    organization: 'Independent Research',
    summary: 'Exploration of DIDs, Verifiable Credentials, and their integration into traditional OAuth flows.',
    context: 'An independent research project exploring how Decentralized Identifiers (DIDs) can be practically integrated into existing Web 2.0 architectures without alienating users.',
    myContribution: 'I conducted a literature review of current W3C standards, built a proof-of-concept integrating a DID provider with a standard NextAuth setup, and published a technical whitepaper on the findings.',
    whatILearned: 'The crypto behind DIDs works fine, but the UX is still terrible. Making a crypto wallet feel as easy as a normal login is the hard part.',
    connection: 'This research directly influenced my approach to designing the authentication layer for DevConnect, ensuring I considered privacy-preserving identity models early in the architecture phase.',
    tags: ['Web3', 'Identity', 'OAuth', 'Cryptography', 'Research'],
    heroImage: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200&h=600',
    links: [
      { label: 'Read Whitepaper', url: '#' },
      { label: 'View Proof of Concept', url: '#' }
    ]
  },
  {
    id: 'global-web3-hackathon',
    title: 'First Place, Global Web3 Hackathon',
    category: 'Hackathons',
    date: 'Fall 2024',
    year: 2024,
    organization: 'Global Web3 Hackathon',
    summary: 'Led a team to architect and deliver a decentralized zero-knowledge voting system in 48 hours.',
    context: 'A 48-hour global competition focused on building decentralized applications that solve real-world governance issues.',
    myContribution: 'I served as the lead architect and team captain. I designed the system architecture, implemented the zero-knowledge proof circuits for voter anonymity, and defined the API contracts for the frontend team.',
    whatILearned: 'I learned that in high-pressure environments, clear API contracts are more important than perfect implementations. If the frontend and backend can communicate predictably, the specific logic can always be optimized later.',
    connection: 'Winning this hackathon proved my ability to lead a technical team under pressure and validated my architectural decisions. It serves as a benchmark for my ability to quickly adopt and implement bleeding-edge technology.',
    tags: ['Hackathon', 'Web3', 'Zero-Knowledge Proofs', 'Leadership'],
    heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200&h=600'
  },
  {
    id: 'aws-solutions-architect',
    title: 'AWS Certified Solutions Architect – Associate',
    category: 'Certifications',
    date: 'May 2024',
    year: 2024,
    organization: 'Amazon Web Services',
    summary: 'Validated expertise in designing distributed systems and deploying applications on the AWS cloud.',
    context: 'AWS certification covering how to design systems that stay up, handle traffic, and keep costs down.',
    myContribution: 'Dedicated three months of rigorous study, hands-on lab work, and architectural reviews to pass the exam on the first attempt.',
    whatILearned: 'The certification formalized my understanding of cloud networking, identity management, and disaster recovery. It moved my knowledge of cloud infrastructure from "it works" to "it is architecturally sound."',
    connection: 'This certification underpins my confidence in designing backend services and deployment pipelines, ensuring that the applications I build are resilient and scalable from day one.',
    tags: ['AWS', 'Cloud Architecture', 'Infrastructure', 'Certification'],
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=600'
  }
];
