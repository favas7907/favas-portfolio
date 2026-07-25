export interface Alternative {
  name: string;
  pros: string[];
  cons: string[];
}

export interface EngineeringDecision {
  id: string;
  domainId: string;
  title: string;
  project: string;
  problem: string;
  context: string;
  requirements: string[];
  constraints: string[];
  alternatives: Alternative[];
  evaluation: string;
  selectedDecision: string;
  tradeOffs: string[];
  implementation: string;
  results: string;
  futureReconsideration: string;
  relatedProjectUrls: string[];
  architectureImpact: string;
  performanceImpact: string;
  dxImpact: string;
  date: string;
}

export const ENGINEERING_DECISIONS: EngineeringDecision[] = [
  {
    id: 'dec-ssr-nextjs',
    domainId: 'frontend',
    title: 'Server-Side Rendering with Next.js',
    project: 'Global News Portal',
    problem: 'Fast initial page load and SEO indexing for content-heavy pages.',
    context: 'The platform serves millions of articles that need to be indexed by search engines immediately upon publishing, while providing a fast perceived load time to users on slow mobile networks.',
    requirements: [
      'Sub-second Time to First Byte (TTFB).',
      'Perfect SEO indexing for all content pages.',
      'Dynamic content updates without full rebuilds.'
    ],
    constraints: [
      'Limited server budget for aggressive rendering.',
      'Must integrate with existing headless CMS.',
      'Strict accessibility and performance budgets.'
    ],
    alternatives: [
      {
        name: 'React SPA (Client-Side Rendering)',
        pros: ['Simple deployment', 'Highly interactive after initial load'],
        cons: ['Poor initial SEO', 'Slow Time to Interactive (TTI) on mobile']
      },
      {
        name: 'Static Site Generation (SSG) with Astro',
        pros: ['Excellent performance', 'Zero JavaScript by default'],
        cons: ['Slow build times for millions of pages', 'Harder to do highly dynamic user states']
      }
    ],
    evaluation: 'While Astro provided the best raw performance, the requirement for highly dynamic user states and incremental regeneration at scale made Next.js with Incremental Static Regeneration (ISR) the most pragmatic choice.',
    selectedDecision: 'Adopted Next.js utilising a hybrid approach: ISR for article pages and SSR for dynamic user dashboards.',
    tradeOffs: [
      'Higher architectural complexity compared to a standard SPA.',
      'Increased server-side operational costs.',
      'Requires careful caching strategies to prevent stale data.'
    ],
    implementation: 'Configured Next.js with ISR (revalidate: 60) for articles. Deployed to edge infrastructure to minimise TTFB globally.',
    results: 'Achieved 100/100 Lighthouse scores for content pages. Organic search traffic increased by 45% due to improved crawlability.',
    futureReconsideration: 'May evaluate React Server Components (RSC) to further reduce client-side bundle size, or edge rendering if global latency becomes a bottleneck.',
    relatedProjectUrls: ['/projects/news'],
    architectureImpact: 'Shifted from static CDN delivery to edge-compute nodes requiring active cache invalidation strategies.',
    performanceImpact: 'Drastically improved First Contentful Paint (FCP) and LCP, but slightly increased initial server response time compared to pure static.',
    dxImpact: 'Required the team to learn Node.js debugging and server-side React lifecycles.',
    date: '2023-04-12'
  },
  {
    id: 'dec-trpc-monorepo',
    domainId: 'frontend',
    title: 'End-to-End Type Safety with tRPC',
    project: 'Nexus Trading Platform',
    problem: 'Frequent runtime errors due to mismatched API payloads between frontend and backend teams.',
    context: 'The trading platform requires high-frequency updates and complex data models. The frontend team was spending 30% of their time updating TypeScript interfaces to match backend API changes.',
    requirements: [
      'Guaranteed type safety between client and server.',
      'Zero manual type duplication.',
      'Fast developer feedback loop.'
    ],
    constraints: [
      'Both frontend and backend must be written in TypeScript.',
      'Cannot introduce heavy runtime validation overhead.',
      'Must support WebSockets for real-time ticker data.'
    ],
    alternatives: [
      {
        name: 'GraphQL with Code Generation',
        pros: ['Extremely flexible querying', 'Language agnostic'],
        cons: ['High boilerplate', 'Complex caching strategy required', 'Code gen step adds friction']
      },
      {
        name: 'OpenAPI/Swagger with Code Generation',
        pros: ['Standardised', 'Good tooling'],
        cons: ['Often falls out of sync if not strictly enforced', 'Code gen step']
      }
    ],
    evaluation: 'Given the constraint that both sides are TypeScript, tRPC eliminates the code generation step entirely, sharing types directly through the compiler.',
    selectedDecision: 'Migrated the API layer to tRPC within a Turborepo monorepo structure.',
    tradeOffs: [
      'Locks the backend into TypeScript/Node.js.',
      'Tightly couples the frontend and backend repositories.',
      'Harder for non-JS third-party clients to consume the API directly.'
    ],
    implementation: 'Set up a Turborepo with shared packages. Defined tRPC routers on the Express backend and consumed them directly in React components using React Query integration.',
    results: 'API contract bugs dropped to zero. Feature delivery velocity increased by 40% as frontend developers gained confidence in refactoring.',
    futureReconsideration: 'If we need to expose a public API to third parties in other languages, we will need to wrap the tRPC layer with a standard REST/OpenAPI layer.',
    relatedProjectUrls: ['/projects/nexus'],
    architectureImpact: 'Forced consolidation into a monorepo, changing CI/CD pipelines significantly.',
    performanceImpact: 'Negligible runtime overhead. Massively improved build-time confidence.',
    dxImpact: 'Exceptional. Refactoring a database column name now shows a red underline in the React component rendering it.',
    date: '2023-08-22'
  }
];
