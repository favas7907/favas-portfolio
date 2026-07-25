import { ROADMAP_DOMAINS } from './roadmaps';

export interface CurrentlyLearning {
  id: string;
  topic: string;
  roadmapId: string;
  reason: string;
  stage: string;
  relatedProjectIds: string[];
  expectedOutcome: string;
  estimatedCompletion: string;
  recentUpdates: string[];
}

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  impact: string;
  relatedProjectIds: string[];
  roadmapIds: string[];
  futureInfluence: string;
}

export interface EngineeringNote {
  id: string;
  title: string;
  summary: string;
  technology: string;
  roadmapId: string;
  projectId?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  dateCreated: string;
  lastUpdated: string;
  insight: string;
  observations: string;
  codeSnippet?: string;
  links: { label: string; url: string }[];
  category: 'Note' | 'Architecture' | 'Pattern';
}

export interface Experiment {
  id: string;
  title: string;
  goal: string;
  approach: string;
  outcome: string;
  lessons: string[];
  futureImprovements: string;
  status: 'Success' | 'Failed' | 'Ongoing';
}

export interface LessonLearned {
  id: string;
  projectId: string;
  title: string;
  surprises: string;
  misunderstood: string;
  becameEasier: string;
  redesign: string;
  principlesDiscovered: string[];
}

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  type: 'Documentation' | 'Research Paper' | 'GitHub Repository' | 'Video' | 'Article' | 'Course' | 'Book' | 'Talk' | 'Architecture Reference';
  roadmapId: string;
  description: string;
}

export interface Revision {
  id: string;
  date: string;
  version: string;
  changes: string[];
}

export interface FutureTopic {
  id: string;
  topic: string;
  reason: string;
  roadmapId: string;
}

export const CURRENTLY_LEARNING: CurrentlyLearning[] = [
  {
    id: 'rust-systems',
    topic: 'Systems Programming with Rust',
    roadmapId: 'backend',
    reason: 'To improve performance-critical microservices and memory safety.',
    stage: 'Building concurrent network applications',
    relatedProjectIds: ['securevault'],
    expectedOutcome: 'Ability to rewrite bottleneck Node.js services in Rust.',
    estimatedCompletion: 'Q4 2026',
    recentUpdates: [
      'Mastered borrowing and ownership mechanics.',
      'Implemented a multi-threaded web server.',
      'Integrating Rust with Node.js via N-API.'
    ]
  },
  {
    id: 'webgl-shaders',
    topic: 'Advanced WebGL & Custom Shaders',
    roadmapId: 'frontend',
    reason: 'To build highly interactive, high-performance data visualisations.',
    stage: 'Writing custom fragment shaders for data mapping',
    relatedProjectIds: ['cypher-space'],
    expectedOutcome: 'Creating 60fps data visualisations with zero DOM overhead.',
    estimatedCompletion: 'Q3 2026',
    recentUpdates: [
      'Understanding GLSL syntax and vectors.',
      'Implementing smooth noise functions.',
      'Connecting React state to shader uniforms.'
    ]
  }
];

export const LEARNING_TIMELINE: TimelineEntry[] = [
  {
    id: 'tl-1',
    date: 'March 2026',
    title: 'Transitioned from REST to GraphQL',
    description: 'Completely redesigned the data fetching layer for complex client applications.',
    impact: 'Reduced network payloads by 40% and eliminated under-fetching issues.',
    relatedProjectIds: ['hospital-management'],
    roadmapIds: ['frontend', 'backend'],
    futureInfluence: 'All future data-heavy applications will evaluate GraphQL before defaulting to REST.'
  },
  {
    id: 'tl-2',
    date: 'November 2025',
    title: 'Mastered Docker & Container Orchestration',
    description: 'Moved away from manual deployments to fully containerised, reproducible environments.',
    impact: 'Reduced deployment failures to near zero. Onboarding new developers now takes minutes.',
    relatedProjectIds: ['latenza-vita'],
    roadmapIds: ['cloud-devops'],
    futureInfluence: 'Infrastructure as code is now a strict prerequisite for any production deployment.'
  }
];

export const ENGINEERING_NOTES: EngineeringNote[] = [
  {
    id: 'en-1',
    title: 'React Context vs Zustand for Global State',
    summary: 'Evaluating state management for high-frequency updates.',
    technology: 'React, Zustand',
    roadmapId: 'frontend',
    difficulty: 'Intermediate',
    dateCreated: '12 Jan 2026',
    lastUpdated: '15 Feb 2026',
    category: 'Pattern',
    insight: 'React Context triggers re-renders for all consumers when any value changes. For rapidly changing data (like real-time metrics), this destroys performance. Zustand allows granular component subscriptions.',
    observations: 'By migrating the patient vitals dashboard to Zustand, render times dropped from 15ms to 2ms per tick.',
    codeSnippet: `// Zustand setup
import { create } from 'zustand'

const useStore = create((set) => ({
  vitals: 0,
  updateVitals: (newVitals) => set({ vitals: newVitals }),
}))

// Component only re-renders when 'vitals' changes
const vitals = useStore((state) => state.vitals)`,
    links: [
      { label: 'Zustand Documentation', url: 'https://docs.pmnd.rs/zustand' }
    ]
  },
  {
    id: 'en-2',
    title: 'Idempotency in Payment Webhooks',
    summary: 'Ensuring safe retries for failed network requests.',
    technology: 'Node.js, Stripe',
    roadmapId: 'backend',
    projectId: 'securevault',
    difficulty: 'Advanced',
    dateCreated: '05 Mar 2026',
    lastUpdated: '10 Mar 2026',
    category: 'Architecture',
    insight: 'Webhooks can fire multiple times for the same event. Processing payments without an idempotency key can result in double-charging clients. Always cache the event ID in Redis before processing.',
    observations: 'Implemented a Redis SETNX lock with a 24-hour expiry to guarantee exactly-once processing.',
    links: []
  }
];

export const EXPERIMENTS: Experiment[] = [
  {
    id: 'exp-1',
    title: 'Edge Computing for Authentication',
    goal: 'Reduce authentication latency for global users by moving JWT verification to the CDN edge.',
    approach: 'Deployed Cloudflare Workers to intercept requests, verify JWT signatures, and reject unauthenticated requests before they hit the origin server.',
    outcome: 'Origin server load decreased by 25%. Unauthorised requests were blocked globally in under 15ms.',
    lessons: [
      'Edge environments have strict memory and API limitations.',
      'Standard Node.js crypto libraries are not always available at the edge.',
      'Web Crypto API is the standard for edge workers.'
    ],
    futureImprovements: 'Investigate moving user role authorisation to the edge using a distributed KV store.',
    status: 'Success'
  },
  {
    id: 'exp-2',
    title: 'WebAssembly for Image Processing',
    goal: 'Move heavy image compression from the backend to the client-side to save server costs.',
    approach: 'Compiled an image processing library to Wasm and ran it in a Web Worker before upload.',
    outcome: 'Performance on mobile devices was inconsistent. Older devices experienced UI thread blocking despite using Web Workers, likely due to memory allocation overhead.',
    lessons: [
      'Wasm is not a silver bullet for performance.',
      'Mobile browser memory limits are easily exceeded when handling large image buffers.',
      'The overhead of passing large ArrayBuffers between JS and Wasm can negate performance gains.'
    ],
    futureImprovements: 'Re-evaluate when SharedArrayBuffer support becomes more universal across mobile browsers.',
    status: 'Failed'
  }
];

export const LESSONS_LEARNED: LessonLearned[] = [
  {
    id: 'll-1',
    projectId: 'hospital-management',
    title: 'The Hidden Cost of Microservices',
    surprises: 'I underestimated the complexity of handling distributed transactions across multiple services. Data consistency became a major hurdle.',
    misunderstood: 'I thought splitting services by domain automatically meant they were decoupled. In reality, they were highly coupled through synchronous API calls.',
    becameEasier: 'Once I introduced an event bus (RabbitMQ) for asynchronous communication, service independence improved drastically.',
    redesign: 'I would start with a modular monolith first, and only extract services when specific scaling bottlenecks arise.',
    principlesDiscovered: [
      'Premature microservices are an anti-pattern.',
      'Eventual consistency is harder to debug than immediate consistency.',
      'Observability (distributed tracing) is mandatory, not optional.'
    ]
  }
];

export const BOOKMARKS: Bookmark[] = [
  {
    id: 'bm-1',
    title: 'Designing Data-Intensive Applications',
    url: 'https://dataintensive.net/',
    type: 'Book',
    roadmapId: 'system-design',
    description: 'The definitive guide on understanding databases, distributed systems, and modern architecture.'
  },
  {
    id: 'bm-2',
    title: 'The Twelve-Factor App',
    url: 'https://12factor.net/',
    type: 'Architecture Reference',
    roadmapId: 'cloud-devops',
    description: 'A methodology for building software-as-a-service applications that scale.'
  }
];

export const REVISIONS: Revision[] = [
  {
    id: 'rev-3',
    date: '2026-07-20',
    version: '3.1.0',
    changes: [
      'Refactored Knowledge Graph force simulation for improved stability.',
      'Added architectural context to engineering notes.',
      'Published results of WebAssembly image processing experiment.'
    ]
  },
  {
    id: 'rev-2',
    date: '2026-05-15',
    version: '3.0.0',
    changes: [
      'Migrated portfolio to React 18 and Vite.',
      'Implemented continuous learning timeline.',
      'Restructured component hierarchy for better reusability.'
    ]
  },
  {
    id: 'rev-1',
    date: '2025-11-01',
    version: '2.0.0',
    changes: [
      'Initial launch of the engineering notebook.',
      'Added core project case studies.',
      'Established design system and typographic scale.'
    ]
  }
];

export const FUTURE_TOPICS: FutureTopic[] = [
  {
    id: 'ft-1',
    topic: 'Serverless Event-Driven Architectures',
    reason: 'To build highly scalable systems with zero idle costs.',
    roadmapId: 'cloud-devops'
  },
  {
    id: 'ft-2',
    topic: 'WebRTC for Peer-to-Peer Communication',
    reason: 'To reduce server bandwidth for real-time collaboration tools.',
    roadmapId: 'frontend'
  }
];
