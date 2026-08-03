export type LearningHorizon = 'Current Focus' | 'Active Exploration' | 'Next Engineering Milestones' | 'Long-Term Research' | 'Emerging Technologies' | 'Future Engineering Vision';

export type EngineeringTheme = 'Artificial Intelligence' | 'Distributed Systems' | 'Cloud Infrastructure' | 'Cybersecurity' | 'Blockchain & Web3' | 'Privacy Engineering' | 'Developer Experience' | 'System Design' | 'MLOps' | 'Platform Engineering' | 'Human-Centred Design' | 'Open Source' | 'Research';

export interface RoadmapDependency {
  id: string;
  name: string;
  url?: string;
}

export interface ConnectedProject {
  id: string;
  name: string;
  url: string;
}

export interface ResourceRecommendation {
  title: string;
  type: 'Book' | 'Course' | 'Paper' | 'Documentation' | 'Article';
  url?: string;
}

export interface FutureLearningGoal {
  id: string;
  title: string;
  theme: EngineeringTheme;
  horizon: LearningHorizon;
  why: string;
  problemSolved: string;
  longTermVision: string;
  dependencies: RoadmapDependency[];
  connectedProjects: ConnectedProject[];
  resources: ResourceRecommendation[];
}

export const DOMAIN_FUTURE_LEARNING: Record<string, FutureLearningGoal[]> = {
  'frontend': [
    {
      id: 'fe-fl-1',
      title: 'WebAssembly (Wasm) for High-Performance UI',
      theme: 'System Design',
      horizon: 'Next Engineering Milestones',
      why: 'JavaScript has performance ceilings for complex computations. Wasm allows running heavy tasks (like image processing or local ML) directly in the browser at near-native speeds.',
      problemSolved: 'Offloading main-thread blocking operations to ensure buttery-smooth 60fps animations even under heavy computational load.',
      longTermVision: 'Architecting web applications that rival native desktop software in performance and capability.',
      dependencies: [
        { id: 'rust', name: 'Rust', url: '/skills/languages' },
        { id: 'web-workers', name: 'Web Workers' }
      ],
      connectedProjects: [
        { id: 'p-cv', name: 'Browser-based Computer Vision', url: '/projects' }
      ],
      resources: [
        { title: 'Rust and WebAssembly Book', type: 'Book', url: 'https://rustwasm.github.io/docs/book/' }
      ]
    },
    {
      id: 'fe-fl-2',
      title: 'Agentic UI Generation',
      theme: 'Artificial Intelligence',
      horizon: 'Emerging Technologies',
      why: 'Static component libraries are evolving. The next step is interfaces that generate and adapt themselves based on user intent and context.',
      problemSolved: 'Moving from rigid, hard-coded layouts to hyper-personalized, context-aware user interfaces.',
      longTermVision: 'Building the foundational infrastructure for AI-driven frontend synthesis.',
      dependencies: [
        { id: 'llms', name: 'Large Language Models' },
        { id: 'react-server-components', name: 'React Server Components' }
      ],
      connectedProjects: [
        { id: 'p-ai-dashboard', name: 'Dynamic Analytics Dashboard', url: '/projects' }
      ],
      resources: [
        { title: 'Generative Interfaces Research', type: 'Paper' }
      ]
    }
  ],
  'backend': [
    {
      id: 'be-fl-1',
      title: 'Distributed Consensus & Raft Optimization',
      theme: 'Distributed Systems',
      horizon: 'Current Focus',
      why: 'As application state becomes heavily distributed, understanding the underlying consensus mechanisms prevents catastrophic failure modes.',
      problemSolved: 'Preventing split-brain scenarios and ensuring high availability in geo-distributed microservices.',
      longTermVision: "Building systems that can handle real traffic and don't go down when one server has a bad day.",
      dependencies: [
        { id: 'go', name: 'Go', url: '/skills/languages' },
        { id: 'grpc', name: 'gRPC' }
      ],
      connectedProjects: [
        { id: 'p-dist', name: 'Global KV Store', url: '/projects' }
      ],
      resources: [
        { title: 'Designing Data-Intensive Applications', type: 'Book' }
      ]
    },
    {
      id: 'be-fl-2',
      title: 'Federated GraphQL Architectures',
      theme: 'System Design',
      horizon: 'Active Exploration',
      why: 'Monolithic API gateways become bottlenecks. Federated GraphQL allows independent teams to evolve their schemas autonomously.',
      problemSolved: 'Reducing deployment friction and API versioning complexity across multiple microservice teams.',
      longTermVision: 'Establishing a unified, strongly-typed data graph across the entire enterprise architecture.',
      dependencies: [
        { id: 'graphql', name: 'GraphQL' },
        { id: 'apollo', name: 'Apollo Federation' }
      ],
      connectedProjects: [],
      resources: [
        { title: 'Apollo Federation Docs', type: 'Documentation' }
      ]
    }
  ],
  'cloud-devops': [
    {
      id: 'cd-fl-1',
      title: 'Serverless Event-Driven Architectures',
      theme: 'Cloud Infrastructure',
      horizon: 'Current Focus',
      why: 'To build highly scalable systems with zero idle costs and infinite scaling potential.',
      problemSolved: 'Eliminating the operational overhead of managing server fleets while handling unpredictable traffic spikes gracefully.',
      longTermVision: 'Creating entirely stateless, event-driven backends that scale down to zero.',
      dependencies: [
        { id: 'aws-lambda', name: 'AWS Lambda' },
        { id: 'eventbridge', name: 'EventBridge' }
      ],
      connectedProjects: [
        { id: 'p-event', name: 'Event Processing Pipeline', url: '/projects' }
      ],
      resources: [
        { title: 'Serverless Architectures on AWS', type: 'Book' }
      ]
    }
  ],
  'ai': [
    {
      id: 'ai-fl-1',
      title: 'Agentic Workflows & Tool-Use in LLMs',
      theme: 'Artificial Intelligence',
      horizon: 'Current Focus',
      why: 'Standard RAG is no longer sufficient. LLMs need to reliably execute multi-step planning and interact with external systems to provide true software value.',
      problemSolved: 'Bridging the gap between static LLM generation and autonomous system execution in production environments.',
      longTermVision: 'Building the next generation of developer tools that act as autonomous engineering partners rather than just autocomplete extensions.',
      dependencies: [
        { id: 'python', name: 'Python', url: '/skills/languages' },
        { id: 'langchain', name: 'LangChain' }
      ],
      connectedProjects: [
        { id: 'p-ai-agent', name: 'Autonomous Coding Agent', url: '/projects' }
      ],
      resources: [
        { title: 'ReAct: Synergizing Reasoning and Acting in Language Models', type: 'Paper' }
      ]
    }
  ],
  'blockchain': [
    {
      id: 'bc-fl-1',
      title: 'Zero-Knowledge Proofs in Identity',
      theme: 'Blockchain & Web3',
      horizon: 'Long-Term Research',
      why: 'Privacy is becoming a fundamental requirement. ZKPs allow authentication and validation without exposing underlying sensitive data.',
      problemSolved: 'Solving the privacy vs. verification dilemma in decentralized and traditional identity systems.',
      longTermVision: 'Creating entirely trustless authentication ecosystems where user data never leaves their local device.',
      dependencies: [
        { id: 'cryptography', name: 'Applied Cryptography' },
        { id: 'rust', name: 'Rust' }
      ],
      connectedProjects: [],
      resources: [
        { title: 'ZK-SNARKs Under the Hood', type: 'Article' }
      ]
    }
  ],
  'cybersecurity': [
    {
      id: 'cs-fl-1',
      title: 'Cloud Security Posture Management (CSPM)',
      theme: 'Cybersecurity',
      horizon: 'Active Exploration',
      why: 'As infrastructure moves entirely to the cloud, misconfigurations are the primary attack vector.',
      problemSolved: 'Automating the detection and remediation of cloud infrastructure vulnerabilities.',
      longTermVision: 'Integrating security directly into the CI/CD pipeline via infrastructure-as-code scanning.',
      dependencies: [
        { id: 'terraform', name: 'Terraform' },
        { id: 'aws', name: 'AWS IAM' }
      ],
      connectedProjects: [],
      resources: [
        { title: 'Practical Cloud Security', type: 'Book' }
      ]
    }
  ],
  'system-design': [
    {
      id: 'sd-fl-1',
      title: 'Data-Intensive Application Patterns',
      theme: 'System Design',
      horizon: 'Current Focus',
      why: 'Scaling applications requires deep understanding of data replication, partitioning, and distributed transactions.',
      problemSolved: 'Avoiding data corruption and performance bottlenecks in distributed databases.',
      longTermVision: 'Designing systems that can handle petabytes of data with high availability and low latency.',
      dependencies: [
        { id: 'sql', name: 'Distributed SQL' },
        { id: 'kafka', name: 'Apache Kafka' }
      ],
      connectedProjects: [],
      resources: [
        { title: 'Designing Data-Intensive Applications', type: 'Book' }
      ]
    }
  ]
};

export const DEFAULT_FUTURE_LEARNING: FutureLearningGoal[] = [
  {
    id: 'def-fl-1',
    title: 'Advanced Architectural Patterns',
    theme: 'System Design',
    horizon: 'Active Exploration',
    why: 'Continuous improvement in system architecture is necessary to build scalable, resilient software.',
    problemSolved: 'Managing complexity in growing software systems.',
    longTermVision: 'Mastering the art of building software that stands the test of time.',
    dependencies: [],
    connectedProjects: [],
    resources: []
  }
];

export const HORIZONS: LearningHorizon[] = [
  'Current Focus',
  'Active Exploration',
  'Next Engineering Milestones',
  'Long-Term Research',
  'Emerging Technologies',
  'Future Engineering Vision'
];
