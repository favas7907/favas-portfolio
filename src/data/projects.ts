export type WorkflowStageType = 
  | 'Problem Discovery'
  | 'Research'
  | 'Requirements'
  | 'Architecture'
  | 'Design'
  | 'Prototype'
  | 'Implementation'
  | 'Testing'
  | 'Deployment'
  | 'Monitoring'
  | 'Iteration'
  | 'Lessons Learned';

export interface Artifact {
  title: string;
  type: 'Wireframe' | 'Architecture Diagram' | 'Database Schema' | 'API Contract' | 'GitHub Milestone' | 'Performance Benchmark' | 'Deployment Diagram' | 'Monitoring Dashboard' | 'Documentation';
  description: string;
  url?: string;
}

export interface WorkflowStage {
  id: string;
  type: WorkflowStageType;
  title: string;
  questionAnswered: string;
  content: string;
  artifacts?: Artifact[];
}

export interface BuildLogEntry {
  id: string;
  date: string;
  decision: string;
  challenge: string;
  alternative: string;
  resolution: string;
  impact: string;
  reflection: string;
}

export interface EngineeringProject {
  id: string;
  domainId: string;
  title: string;
  summary: string;
  workflow: WorkflowStage[];
  buildLog: BuildLogEntry[];
}

export const ENGINEERING_PROJECTS: EngineeringProject[] = [
  {
    id: 'proj-ecommerce',
    domainId: 'frontend',
    title: 'Project E-Commerce',
    summary: 'A high-performance e-commerce storefront focusing on perceived load time and accessibility.',
    workflow: [
      {
        id: 'wf-1',
        type: 'Problem Discovery',
        title: 'Identifying the Performance Bottleneck',
        questionAnswered: 'Why does this project need to exist?',
        content: 'Existing e-commerce solutions heavily rely on client-side rendering, leading to a slow Time to Interactive (TTI) on mobile devices. This impacts conversion rates. We needed a platform that guarantees a sub-second initial render without sacrificing the dynamic cart experience.'
      },
      {
        id: 'wf-2',
        type: 'Research',
        title: 'Evaluating Rendering Paradigms',
        questionAnswered: 'What already exists and what are the constraints?',
        content: 'Analyzed existing SPA architectures vs SSG. The constraint was the cart state which is highly dynamic and user-specific. Static generation for product pages works, but the cart requires real-time hydration.',
        artifacts: [
          { title: 'Rendering Strategy Matrix', type: 'Documentation', description: 'Comparison of SSR, SSG, and CSR for various route types.' }
        ]
      },
      {
        id: 'wf-3',
        type: 'Architecture',
        title: 'Hybrid Rendering Approach',
        questionAnswered: 'Why was this architecture selected?',
        content: 'Selected Next.js for its hybrid capabilities. Product pages use Incremental Static Regeneration (ISR) for fast global delivery, while the cart and checkout use client-side fetching with SWR to ensure data freshness.',
        artifacts: [
          { title: 'System Architecture', type: 'Architecture Diagram', description: 'Next.js routing structure and data fetching strategies.' }
        ]
      },
      {
        id: 'wf-4',
        type: 'Implementation',
        title: 'Component-Driven Construction',
        questionAnswered: 'What patterns were followed?',
        content: 'Built using a strict component-driven architecture. Isolated UI components in Storybook before integrating them. Utilized Tailwind CSS for utility-first styling to keep the CSS bundle size minimal.'
      },
      {
        id: 'wf-5',
        type: 'Testing',
        title: 'Performance & Accessibility Auditing',
        questionAnswered: 'How was reliability verified?',
        content: 'Integrated Lighthouse CI into the deployment pipeline. Set performance budgets that fail the build if a PR increases the JavaScript bundle size above 150KB. Ran automated axe-core checks for accessibility.'
      },
      {
        id: 'wf-6',
        type: 'Lessons Learned',
        title: 'The Cost of Hydration',
        questionAnswered: 'What would be done differently today?',
        content: 'We over-hydrated the product detail pages initially, causing unnecessary main-thread blocking. Today, I would explore React Server Components or Islands Architecture (Astro) for even better baseline performance on static content.'
      }
    ],
    buildLog: [
      {
        id: 'log-1',
        date: '2023-10-15',
        decision: 'Use Context API for Cart State',
        challenge: 'Prop drilling cart items deeply nested in the checkout flow.',
        alternative: 'Redux or Zustand.',
        resolution: 'Implemented a custom CartProvider using React Context and useReducer.',
        impact: 'Solved prop drilling but introduced unnecessary re-renders in sibling components.',
        reflection: 'A failure in anticipating scale. Context is not a state manager for highly frequent updates. I later migrated this to Zustand to fix the performance bottleneck.'
      },
      {
        id: 'log-2',
        date: '2023-11-02',
        decision: 'Migrate Cart to Zustand',
        challenge: 'Context API caused the entire layout to re-render when a cart item quantity changed.',
        alternative: 'Memoizing every component manually.',
        resolution: 'Replaced Context with a Zustand store with atomic selector subscriptions.',
        impact: 'Render times dropped significantly; no more layout thrashing.',
        reflection: 'An important lesson in separating localized UI state from global application state.'
      }
    ]
  },
  {
    id: 'proj-distributed-cache',
    domainId: 'backend',
    title: 'Distributed Cache Service',
    summary: 'An in-memory distributed caching layer to reduce database load for high-read services.',
    workflow: [
      {
        id: 'wf-1',
        type: 'Problem Discovery',
        title: 'Database Contention',
        questionAnswered: 'Why does this project need to exist?',
        content: 'The primary PostgreSQL database was reaching 90% CPU utilization during peak traffic spikes due to repetitive read queries for static configuration data.'
      },
      {
        id: 'wf-2',
        type: 'Architecture',
        title: 'Redis Cluster Strategy',
        questionAnswered: 'Why was this architecture selected?',
        content: 'Decided on a Redis cluster deployment. It provided the necessary throughput and horizontal scalability. Implemented a write-through caching strategy to ensure data consistency.',
        artifacts: [
          { title: 'Caching Strategy', type: 'Architecture Diagram', description: 'Write-through vs Cache-aside evaluation.' }
        ]
      },
      {
        id: 'wf-3',
        type: 'Testing',
        title: 'Load Simulation',
        questionAnswered: 'How was reliability verified?',
        content: 'Used k6 to simulate high-concurrency read scenarios. Verified that cache hit rates exceeded 95% before promoting to production.'
      }
    ],
    buildLog: [
      {
        id: 'log-1',
        date: '2024-01-10',
        decision: 'Implement Cache Stampede Protection',
        challenge: 'When a popular cache key expired, hundreds of concurrent requests hit the database simultaneously.',
        alternative: 'Increase database read replicas.',
        resolution: 'Implemented probabilistic early expiration (XFetch algorithm).',
        impact: 'Eliminated database CPU spikes completely during key invalidation.',
        reflection: 'You must design for concurrent failure, not just concurrent success. Cache stampedes are a classic distributed systems problem.'
      }
    ]
  }
];
