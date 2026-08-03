export type SkillCategory = 
  | 'Frontend Engineering'
  | 'Backend Engineering'
  | 'Programming Languages'
  | 'Artificial Intelligence'
  | 'Blockchain & Web3'
  | 'Cloud & DevOps'
  | 'Databases'
  | 'Cybersecurity'
  | 'Developer Tools';

export interface Skill {
  name: string;
  bestFor: string;
  alternatives?: string[];
  tradeOffs?: string;
  engineeringDepth?: string[];
  relatedProjects: string[];
  relatedTechnologies?: string[];
  firstUsed?: string;
  lastUsed?: string;
  production?: boolean;
  openSource?: boolean;
  learningStatus?: string;
}

export interface SkillGroup {
  category: SkillCategory;
  capability: string;
  skills: Skill[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend Engineering',
    capability: 'Building the stuff users actually see and interact with.',
    skills: [
      { 
        name: 'React', 
        bestFor: 'Highly interactive, component-driven user interfaces requiring complex state management.', 
        alternatives: ["Vue","Svelte","SolidJS"], 
        tradeOffs: 'Large ecosystem but requires architectural discipline. Client-side rendering can impact initial load without a meta-framework.', 
        engineeringDepth: ["Component Architecture","Performance Optimization (Memoization)","Custom Hooks"], 
        relatedProjects: ['Portfolio', 'Cypher Space', 'Latenza Vita'], 
        relatedTechnologies: ["Next.js","TypeScript","Tailwind CSS","Redux","Zustand"],
        firstUsed: '2019', 
        lastUsed: 'Current', 
        production: true, 
        openSource: true, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Next.js', 
        bestFor: 'Production-grade applications requiring Server-Side Rendering (SSR), SEO, and optimized routing.', 
        alternatives: ["Remix","Nuxt","Astro"], 
        tradeOffs: 'Opinionated routing and server-heavy execution. Vercel deployment is optimal, but custom deployment can be complex.', 
        engineeringDepth: ["Server Components (RSC)","Edge Caching","Incremental Static Regeneration (ISR)"], 
        relatedProjects: ['Portfolio', 'Cypher Space'], 
        relatedTechnologies: ["React","TypeScript","Vercel","Tailwind CSS"],
        firstUsed: '2021', 
        lastUsed: 'Current', 
        production: true, 
        openSource: true, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'TypeScript', 
        bestFor: 'Large-scale codebases requiring strict type safety, predictable refactoring, and domain modeling.', 
        alternatives: ["JavaScript","JSDoc","Flow"], 
        tradeOffs: 'Initial setup overhead and build step required. Complex generic types can become difficult to maintain.', 
        engineeringDepth: ["Advanced Generics","Utility Types","Strict Null Checks"], 
        relatedProjects: ['Portfolio', 'Cypher Space', 'Latenza Vita'], 
        relatedTechnologies: ["React","Node.js","Next.js","Jest"],
        firstUsed: '2020', 
        lastUsed: 'Current', 
        production: true, 
        openSource: true, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Tailwind CSS', 
        bestFor: 'Rapid UI development with utility classes, ensuring consistent design systems and minimal CSS bundles.', 
        alternatives: ["CSS Modules","Styled Components","Sass"], 
        tradeOffs: 'HTML can become cluttered with classes. Requires learning a specific utility vocabulary.', 
        engineeringDepth: ["Custom Configuration","Design Tokens","JIT Compiler Optimization"], 
        relatedProjects: ['Portfolio', 'Cypher Space', 'Latenza Vita'], 
        relatedTechnologies: ["React","Next.js","Figma"],
        firstUsed: '2021', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Framer Motion',
        bestFor: 'Animations and page transitions in React apps.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Animation Orchestration","Micro-interactions"], 
        relatedProjects: ['Portfolio', 'Latenza Vita'], 
        relatedTechnologies: [],
        firstUsed: '2022', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'HTML5 / CSS3',
        bestFor: 'The foundation — semantic markup and styling.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Accessibility","Grid/Flexbox","Semantic HTML"], 
        relatedProjects: ['Portfolio', 'Cypher Space', 'Latenza Vita'], 
        relatedTechnologies: [],
        firstUsed: '2016', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Maintained' 
      }
    ]
  },
  {
    category: 'Backend Engineering',
    capability: 'Building secure APIs, scalable business logic and reliable server-side architectures.',
    skills: [
      { 
        name: 'Node.js', 
        bestFor: 'High-concurrency, asynchronous I/O backend services and API gateways.', 
        alternatives: ["Go","Python","Java"], 
        tradeOffs: 'Single-threaded nature makes it less suitable for heavy CPU-bound computations without worker threads.', 
        engineeringDepth: ["Event Loop Architecture","Stream Processing","Worker Threads"], 
        relatedProjects: ['SecureVault', 'IoT Nexus', 'Cypher Space'], 
        relatedTechnologies: ["Express","TypeScript","PostgreSQL"],
        firstUsed: '2019', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Express', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Middleware","Routing","Security"], 
        relatedProjects: ['SecureVault', 'IoT Nexus'], 
        relatedTechnologies: [],
        firstUsed: '2019', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Maintained' 
      },
      { 
        name: 'GraphQL', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Resolvers","Schema Design"], 
        relatedProjects: ['Cypher Space'], 
        relatedTechnologies: [],
        firstUsed: '2021', 
        lastUsed: 'Current', 
        production: false, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'REST APIs', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Stateless Architecture","Idempotency"], 
        relatedProjects: ['SecureVault', 'IoT Nexus', 'Latenza Vita'], 
        relatedTechnologies: [],
        firstUsed: '2018', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Maintained' 
      },
      { 
        name: 'WebSockets', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Pub/Sub","Real-time Sync"], 
        relatedProjects: ['IoT Nexus'], 
        relatedTechnologies: [],
        firstUsed: '2020', 
        lastUsed: 'Current', 
        production: false, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      }
    ]
  },
  {
    category: 'Artificial Intelligence',
    capability: 'Developing intelligent applications using LLMs, retrieval pipelines, embeddings and AI-assisted workflows.',
    skills: [
      { 
        name: 'OpenAI API', 
        bestFor: 'Integrating advanced reasoning, text generation, and NLP capabilities without training custom models.', 
        alternatives: ["Anthropic","Cohere","Local LLMs (Llama)"], 
        tradeOffs: 'Data privacy concerns, latency variability, and token-based pricing costs.', 
        engineeringDepth: ["Prompt Engineering","Function Calling","RAG Implementations"], 
        relatedProjects: ['Cypher Space'], 
        relatedTechnologies: ["LangChain","Python","Vector Databases"],
        firstUsed: '2023', 
        lastUsed: 'Current', 
        production: false, 
        openSource: false, 
        learningStatus: 'Exploring' 
      },
      { 
        name: 'LangChain', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Agents","Chains","Retrieval"], 
        relatedProjects: ['Cypher Space'], 
        relatedTechnologies: [],
        firstUsed: '2023', 
        lastUsed: 'Current', 
        production: false, 
        openSource: false, 
        learningStatus: 'Learning' 
      },
      { 
        name: 'Vector Databases', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Embeddings","Semantic Search"], 
        relatedProjects: ['Cypher Space'], 
        relatedTechnologies: [],
        firstUsed: '2023', 
        lastUsed: 'Current', 
        production: false, 
        openSource: false, 
        learningStatus: 'Learning' 
      }
    ]
  },
  {
    category: 'Blockchain & Web3',
    capability: 'Building decentralized applications, smart contracts and secure Web3 integrations.',
    skills: [
      { 
        name: 'Ethereum / EVM', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Consensus","Decentralization"], 
        relatedProjects: ['Cypher Space'], 
        relatedTechnologies: [],
        firstUsed: '2021', 
        lastUsed: 'Current', 
        production: false, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Ethers.js / viem', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["RPC","Wallet Integration"], 
        relatedProjects: ['Cypher Space'], 
        relatedTechnologies: [],
        firstUsed: '2022', 
        lastUsed: 'Current', 
        production: false, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Hardhat / Foundry', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Smart Contract Testing"], 
        relatedProjects: ['Cypher Space'], 
        relatedTechnologies: [],
        firstUsed: '2022', 
        lastUsed: 'Current', 
        production: false, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Solidity', 
        bestFor: 'Developing smart contracts for the Ethereum Virtual Machine (EVM).', 
        alternatives: ["Rust (Solana)","Vyper"], 
        tradeOffs: 'Immutable code once deployed. Security vulnerabilities carry extreme financial risk.', 
        engineeringDepth: ["Gas Optimization","Security Audits","Proxy Patterns"], 
        relatedProjects: ['Cypher Space'], 
        relatedTechnologies: ["Ethereum / EVM","Hardhat / Foundry","Ethers.js / viem"],
        firstUsed: '2021', 
        lastUsed: 'Current', 
        production: false, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      }
    ]
  },
  {
    category: 'Cloud & DevOps',
    capability: 'Deploying, automating and monitoring applications using modern cloud platforms and CI/CD workflows.',
    skills: [
      { 
        name: 'AWS', 
        bestFor: 'Scalable, enterprise-grade cloud infrastructure and distributed systems.', 
        alternatives: ["Google Cloud","Azure","Vercel"], 
        tradeOffs: 'Steep learning curve and complex IAM permissions. Costs can spiral without careful monitoring.', 
        engineeringDepth: ["Serverless Architecture","VPC Design","Infrastructure as Code (Terraform)"], 
        relatedProjects: ['SecureVault', 'IoT Nexus'], 
        relatedTechnologies: ["Docker","CI/CD","Node.js"],
        firstUsed: '2020', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Docker', 
        bestFor: 'Creating consistent, isolated deployment environments across development, testing, and production.', 
        alternatives: ["Podman","Vagrant","Nix"], 
        tradeOffs: 'Adds operational complexity. Images must be carefully optimized for size and security.', 
        engineeringDepth: ["Multi-stage Builds","Security Hardening","Network Bridging"], 
        relatedProjects: ['SecureVault', 'IoT Nexus'], 
        relatedTechnologies: ["AWS","CI/CD","Go"],
        firstUsed: '2020', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'CI/CD', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Automation","Continuous Delivery"], 
        relatedProjects: ['Portfolio', 'SecureVault', 'IoT Nexus'], 
        relatedTechnologies: [],
        firstUsed: '2020', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Vercel', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Edge Functions","Global CDN"], 
        relatedProjects: ['Portfolio', 'Cypher Space', 'Latenza Vita'], 
        relatedTechnologies: [],
        firstUsed: '2021', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      }
    ]
  },
  {
    category: 'Databases',
    capability: 'Storing and retrieving data without losing anything important.',
    skills: [
      { 
        name: 'PostgreSQL', 
        bestFor: 'Complex relational data modeling, ACID transactions, and advanced querying capabilities.', 
        alternatives: ["MySQL","MongoDB","SQLite"], 
        tradeOffs: 'Requires schema design upfront. Horizontal scaling (sharding) is more complex than NoSQL alternatives.', 
        engineeringDepth: ["Schema Design","Query Optimization (EXPLAIN)","Indexing Strategies"], 
        relatedProjects: ['SecureVault', 'IoT Nexus'], 
        relatedTechnologies: ["Node.js","Prisma","Redis"],
        firstUsed: '2019', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'MongoDB', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Aggregation Pipeline","Document Modeling"], 
        relatedProjects: ['Latenza Vita'], 
        relatedTechnologies: [],
        firstUsed: '2019', 
        lastUsed: 'Current', 
        production: false, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Redis', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Caching","Pub/Sub"], 
        relatedProjects: ['IoT Nexus', 'Cypher Space'], 
        relatedTechnologies: [],
        firstUsed: '2020', 
        lastUsed: 'Current', 
        production: false, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Firebase', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Realtime Sync","NoSQL"], 
        relatedProjects: ['Cypher Space'], 
        relatedTechnologies: [],
        firstUsed: '2019', 
        lastUsed: 'Current', 
        production: false, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      }
    ]
  },
  {
    category: 'Cybersecurity',
    capability: 'Protecting systems, securing user data and implementing resilient cryptographic protocols.',
    skills: [
      { 
        name: 'Web Crypto API', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Encryption","Zero-Knowledge"], 
        relatedProjects: ['SecureVault'], 
        relatedTechnologies: [],
        firstUsed: '2022', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'OAuth 2.0 / JWT', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Identity","Token-based Auth"], 
        relatedProjects: ['SecureVault', 'IoT Nexus', 'Cypher Space'], 
        relatedTechnologies: [],
        firstUsed: '2019', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'OWASP Top 10', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Security Posture","Threat Modeling"], 
        relatedProjects: ['SecureVault', 'Portfolio', 'IoT Nexus'], 
        relatedTechnologies: [],
        firstUsed: '2020', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      }
    ]
  },
  {
    category: 'Programming Languages',
    capability: 'The languages I write code in and feel comfortable with.',
    skills: [
      { 
        name: 'JavaScript', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Closures","Prototypal Inheritance"], 
        relatedProjects: ['Portfolio', 'Latenza Vita'], 
        relatedTechnologies: [],
        firstUsed: '2017', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'TypeScript', 
        bestFor: 'Large-scale codebases requiring strict type safety, predictable refactoring, and domain modeling.', 
        alternatives: ["JavaScript","JSDoc","Flow"], 
        tradeOffs: 'Initial setup overhead and build step required. Complex generic types can become difficult to maintain.', 
        engineeringDepth: ["Advanced Generics","Utility Types","Strict Null Checks"], 
        relatedProjects: ['Portfolio', 'SecureVault', 'Cypher Space'], 
        relatedTechnologies: ["React","Node.js","Next.js","Jest"],
        firstUsed: '2020', 
        lastUsed: 'Current', 
        production: true, 
        openSource: true, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Python', 
        bestFor: 'Data engineering, machine learning pipelines, and scripting.', 
        alternatives: ["Go","Node.js","R"], 
        tradeOffs: 'Global Interpreter Lock (GIL) limits true multithreading. Execution speed is slower than compiled languages.', 
        engineeringDepth: ["Data Pipelines","Vector Embeddings","API Integration"], 
        relatedProjects: ['IoT Nexus'], 
        relatedTechnologies: ["LangChain","OpenAI API","FAISS"],
        firstUsed: '2018', 
        lastUsed: 'Current', 
        production: false, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Go', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Goroutines","Channels"], 
        relatedProjects: ['SecureVault'], 
        relatedTechnologies: [],
        firstUsed: '2022', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Learning' 
      }
    ]
  },
  {
    category: 'Developer Tools',
    capability: 'Streamlining development workflows, ensuring code quality and optimizing deployment pipelines.',
    skills: [
      { 
        name: 'Git', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["Version Control","Branching Strategies"], 
        relatedProjects: ['Portfolio', 'SecureVault', 'Cypher Space'], 
        relatedTechnologies: [],
        firstUsed: '2017', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Figma', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["UI/UX Design","Design Systems"], 
        relatedProjects: ['Portfolio', 'Latenza Vita'], 
        relatedTechnologies: [],
        firstUsed: '2020', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Jest / Playwright', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["TDD","E2E Testing"], 
        relatedProjects: ['SecureVault', 'Portfolio'], 
        relatedTechnologies: [],
        firstUsed: '2020', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Currently Active' 
      },
      { 
        name: 'Webpack / Vite', 
        bestFor: 'General-purpose tool in my stack.', 
        alternatives: [], 
        tradeOffs: 'Depends on the use case and project scope.', 
        engineeringDepth: ["HMR","Code Splitting"], 
        relatedProjects: ['Portfolio', 'Latenza Vita'], 
        relatedTechnologies: [],
        firstUsed: '2018', 
        lastUsed: 'Current', 
        production: true, 
        openSource: false, 
        learningStatus: 'Maintained' 
      }
    ]
  }
];
