export interface Resource {
  id: string;
  title: string;
  type: 'Book' | 'Video' | 'Documentation' | 'Note' | 'Platform' | 'Article';
  url: string;
  author?: string;
  description: string;
}

export interface Technology {
  id: string;
  name: string;
  description: string;
  status: 'Mastered' | 'Proficient' | 'Learning' | 'Planned';
  resources: Resource[];
}

export interface RoadmapDomain {
  id: string;
  title: string;
  description: string;
  maturity: 'Advanced' | 'Proficient' | 'Learning' | 'Exploring';
  learningStatus: 'Actively Exploring' | 'Maintaining' | 'Deepening Knowledge';
  technologyCount: number;
  estimatedResources: number;
  relatedProjects: { title: string; url: string }[];
  overview: string;
  learningPathSummary: string;
  coreConcepts: string[];
  technologies: Technology[];
  futureTopics: string[];
  relatedRoadmapIds: string[];
  readingTime: string;
}

export const ROADMAP_DOMAINS: RoadmapDomain[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    description: 'Core languages for system development, scripting, and smart contracts.',
    maturity: 'Advanced',
    learningStatus: 'Deepening Knowledge',
    technologyCount: 6,
    estimatedResources: 15,
    relatedProjects: [],
    overview: 'Languages are tools. Selecting the right one depends on constraints, performance requirements, and team velocity.',
    learningPathSummary: 'Mastering Rust for systems programming and memory safety.',
    coreConcepts: ['Memory Management', 'Concurrency Models', 'Type Systems'],
    technologies: [],
    futureTopics: ['Rust', 'Go'],
    relatedRoadmapIds: ['backend', 'systems'],
    readingTime: '10 min read'
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Building resilient, accessible, and performant user interfaces.',
    maturity: 'Advanced',
    learningStatus: 'Maintaining',
    technologyCount: 12,
    estimatedResources: 24,
    relatedProjects: [
      { title: 'Project E-Commerce', url: '/projects/ecommerce' }
    ],
    overview: 'Frontend engineering is about understanding browser rendering engines, accessibility standards, and state management at scale.',
    learningPathSummary: 'Focusing on advanced rendering patterns and accessibility at scale.',
    coreConcepts: ['Component-Driven Architecture', 'Web Accessibility (WCAG)', 'State Management'],
    technologies: [],
    futureTopics: ['WebAssembly', 'Edge Computing'],
    relatedRoadmapIds: ['backend', 'ui-ux'],
    readingTime: '15 min read'
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'Designing distributed systems, APIs, and scalable infrastructure.',
    maturity: 'Proficient',
    learningStatus: 'Deepening Knowledge',
    technologyCount: 18,
    estimatedResources: 45,
    relatedProjects: [
      { title: 'Distributed Cache', url: '/projects/cache' }
    ],
    overview: 'Backend engineering is fundamentally about resilience, data integrity, and system design.',
    learningPathSummary: 'Transitioning from monolithic APIs to event-driven microservices.',
    coreConcepts: ['API Design', 'Microservices', 'Authentication & Authorization'],
    technologies: [],
    futureTopics: ['Event Sourcing', 'GraphQL Federation'],
    relatedRoadmapIds: ['frontend', 'databases'],
    readingTime: '25 min read'
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Relational, NoSQL, and distributed data systems.',
    maturity: 'Proficient',
    learningStatus: 'Maintaining',
    technologyCount: 10,
    estimatedResources: 20,
    relatedProjects: [],
    overview: 'Understanding how data is stored, retrieved, and scaled is foundational to software engineering.',
    learningPathSummary: 'Focusing on distributed databases and vector search.',
    coreConcepts: ['ACID Properties', 'Indexing', 'Sharding', 'Consistency Models'],
    technologies: [],
    futureTopics: ['Distributed SQL', 'Graph Databases'],
    relatedRoadmapIds: ['backend', 'system-design'],
    readingTime: '18 min read'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Infrastructure as code, CI/CD, and container orchestration.',
    maturity: 'Learning',
    learningStatus: 'Actively Exploring',
    technologyCount: 15,
    estimatedResources: 25,
    relatedProjects: [],
    overview: 'Getting apps deployed and keeping them running without headaches.',
    learningPathSummary: 'Mastering container orchestration and serverless architectures.',
    coreConcepts: ['Docker & Kubernetes', 'Infrastructure as Code (Terraform)', 'CI/CD Pipelines'],
    technologies: [],
    futureTopics: ['GitOps', 'Service Meshes'],
    relatedRoadmapIds: ['backend', 'cybersecurity'],
    readingTime: '22 min read'
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    description: 'Exploring machine learning, neural networks, and applied AI.',
    maturity: 'Learning',
    learningStatus: 'Actively Exploring',
    technologyCount: 8,
    estimatedResources: 15,
    relatedProjects: [],
    overview: 'Understanding the underlying mathematics of AI and applying it to solve engineering problems.',
    learningPathSummary: 'Applying foundational concepts to real-world engineering problems.',
    coreConcepts: ['Neural Networks', 'Natural Language Processing', 'Vector Databases'],
    technologies: [],
    futureTopics: ['Retrieval-Augmented Generation (RAG)', 'Agentic Workflows'],
    relatedRoadmapIds: ['machine-learning', 'data-science'],
    readingTime: '20 min read'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Model training, evaluation, and deployment pipelines.',
    maturity: 'Exploring',
    learningStatus: 'Actively Exploring',
    technologyCount: 5,
    estimatedResources: 10,
    relatedProjects: [],
    overview: 'Focusing on traditional ML algorithms and MLOps practices.',
    learningPathSummary: 'Learning model deployment and lifecycle management.',
    coreConcepts: ['Supervised Learning', 'Model Evaluation', 'MLOps'],
    technologies: [],
    futureTopics: ['Federated Learning', 'On-Device ML'],
    relatedRoadmapIds: ['artificial-intelligence', 'data-science'],
    readingTime: '12 min read'
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    description: 'Smart contracts, decentralized applications, and consensus mechanisms.',
    maturity: 'Exploring',
    learningStatus: 'Actively Exploring',
    technologyCount: 5,
    estimatedResources: 8,
    relatedProjects: [],
    overview: 'Exploring Web3 primitives, decentralized finance, and smart contract security.',
    learningPathSummary: 'Understanding consensus algorithms and contract vulnerabilities.',
    coreConcepts: ['Consensus Mechanisms', 'Smart Contracts', 'Cryptography'],
    technologies: [],
    futureTopics: ['Zero-Knowledge Proofs', 'Layer 2 Scaling'],
    relatedRoadmapIds: ['cybersecurity', 'programming-languages'],
    readingTime: '15 min read'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Securing networks, auditing systems, and applying zero-trust principles.',
    maturity: 'Proficient',
    learningStatus: 'Deepening Knowledge',
    technologyCount: 14,
    estimatedResources: 30,
    relatedProjects: [],
    overview: 'Security must be baked into the architecture, applying zero-trust principles across modern distributed systems.',
    learningPathSummary: 'Auditing legacy applications and reinforcing zero-trust models.',
    coreConcepts: ['OWASP Top 10', 'Identity & Access Management (IAM)', 'Zero-Trust Architecture'],
    technologies: [],
    futureTopics: ['Cloud Security Posture Management', 'DevSecOps Automation'],
    relatedRoadmapIds: ['backend', 'system-design'],
    readingTime: '30 min read'
  },
  {
    id: 'system-design',
    title: 'System Design',
    description: 'Architecting scalable, resilient, and fault-tolerant software systems.',
    maturity: 'Proficient',
    learningStatus: 'Deepening Knowledge',
    technologyCount: 8,
    estimatedResources: 40,
    relatedProjects: [],
    overview: 'System design requires evaluating trade-offs, anticipating bottlenecks, and designing for failure.',
    learningPathSummary: 'Studying real-world architectures and large-scale distributed systems.',
    coreConcepts: ['Microservices vs Monoliths', 'Load Balancing', 'CAP Theorem'],
    technologies: [],
    futureTopics: ['Event-Driven Architectures', 'Serverless at Scale'],
    relatedRoadmapIds: ['backend', 'databases', 'cloud-devops'],
    readingTime: '35 min read'
  },
  {
    id: 'developer-tools',
    title: 'Developer Tools',
    description: 'Optimizing workflows, building CLIs, and enhancing DX.',
    maturity: 'Proficient',
    learningStatus: 'Maintaining',
    technologyCount: 10,
    estimatedResources: 15,
    relatedProjects: [],
    overview: 'Creating internal tooling and automation to improve developer experience and velocity.',
    learningPathSummary: 'Building modular CLI tools and custom editor extensions.',
    coreConcepts: ['Shell Scripting', 'Build Systems', 'Code Generation'],
    technologies: [],
    futureTopics: ['Custom Compilers', 'AST Manipulation'],
    relatedRoadmapIds: ['open-source'],
    readingTime: '10 min read'
  },
  {
    id: 'open-source',
    title: 'Open Source',
    description: 'Contributing to, maintaining, and understanding open-source ecosystems.',
    maturity: 'Learning',
    learningStatus: 'Deepening Knowledge',
    technologyCount: 4,
    estimatedResources: 12,
    relatedProjects: [],
    overview: 'Engaging with the global developer community through contributions and transparent engineering.',
    learningPathSummary: 'Reviewing PRs and maintaining essential libraries.',
    coreConcepts: ['Versioning', 'Community Guidelines', 'Licensing'],
    technologies: [],
    futureTopics: ['Foundation Governance', 'Sponsorship Models'],
    relatedRoadmapIds: ['developer-tools'],
    readingTime: '14 min read'
  },
  {
    id: 'ui-ux',
    title: 'UI / UX Engineering',
    description: 'Bridging the gap between design systems and implementation.',
    maturity: 'Advanced',
    learningStatus: 'Maintaining',
    technologyCount: 8,
    estimatedResources: 18,
    relatedProjects: [],
    overview: 'Translating visual language into scalable, accessible, and interactive component libraries.',
    learningPathSummary: 'Refining animation performance and micro-interactions.',
    coreConcepts: ['Design Systems', 'Design Tokens', 'Interaction Design'],
    technologies: [],
    futureTopics: ['Advanced Framer Motion', 'WebGL Interactions'],
    relatedRoadmapIds: ['frontend'],
    readingTime: '16 min read'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Data wrangling, statistical analysis, and visualization.',
    maturity: 'Exploring',
    learningStatus: 'Actively Exploring',
    technologyCount: 6,
    estimatedResources: 14,
    relatedProjects: [],
    overview: 'Extracting meaningful insights from raw data to inform product decisions.',
    learningPathSummary: 'Learning statistical fundamentals and data visualization.',
    coreConcepts: ['Data Cleaning', 'Statistical Inference', 'Data Visualization'],
    technologies: [],
    futureTopics: ['Advanced D3.js', 'Time Series Forecasting'],
    relatedRoadmapIds: ['artificial-intelligence', 'machine-learning'],
    readingTime: '20 min read'
  }
];
