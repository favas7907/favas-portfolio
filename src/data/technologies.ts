export interface TechnologyProject {
  name: string;
  role: string;
  contribution: string;
  repository?: string;
  live?: string;
  caseStudyUrl?: string;
}

export interface TechnologyProfile {
  id: string;
  name: string;
  overview: string;
  
  whyIUseIt: {
    problemsSolved: string[];
    whyChosen: string;
    whenToUse: string;
    whenToAvoid: string;
    alternativesEvaluated: string[];
  };

  projects: TechnologyProject[];

  engineeringConcepts: string[];
  relatedTechnologies?: string[];

  architecturePatterns: {
    title: string;
    description: string;
  }[];

  engineeringDecisions: {
    decision: string;
    reasoning: string;
    tradeOffs: string[];
  }[];

  bestPractices: string[];

  lessonsLearned: {
    title: string;
    description: string;
  }[];

  resources: {
    title: string;
    url: string;
    whyUseful: string;
    type: 'Documentation' | 'Article' | 'Book' | 'Video' | 'Repository' | 'Research' | 'Note';
  }[];

  futureExploration: string[];
}

export const TECHNOLOGIES: TechnologyProfile[] = [
  {
    id: 'react',
    name: 'React',
    overview: 'React forms the foundation of my frontend architecture. It is not just a UI library, but a mental model for composing complex interfaces from isolated, declarative components. I use it to manage state, orchestrate rendering lifecycles, and enforce a unidirectional data flow across applications.',
    whyIUseIt: {
      problemsSolved: [
        'Unpredictable DOM mutations in complex state-driven applications.',
        'Lack of component reusability across different domains.',
        'Tight coupling between markup and logic.'
      ],
      whyChosen: 'React has the biggest ecosystem, tons of libraries, and a mental model that just makes sense for complex UIs. When I get stuck, someone has already solved it.',
      whenToUse: 'Applications requiring complex, highly interactive interfaces, complex state management, or a large ecosystem of reusable components.',
      whenToAvoid: 'Static content sites, landing pages with minimal interactivity, or environments where bundle size constraints are extreme.',
      alternativesEvaluated: ['Vue', 'Svelte', 'SolidJS']
    },
    projects: [
      {
        name: 'SecureVault',
        role: 'Client-side encryption orchestration and state management.',
        contribution: 'Architected the React context tree to securely hold in-memory keys without persisting them across reloads.',
        repository: 'https://github.com/favasm/securevault',
        live: 'https://securevault.example.com',
        caseStudyUrl: '/projects/securevault'
      }
    ],
    engineeringConcepts: [
      'Virtual DOM',
      'Unidirectional Data Flow',
      'Reconciliation',
      'Hooks',
      'Higher-Order Components'
    ],
    architecturePatterns: [
      {
        title: 'Container/Presenter Pattern',
        description: 'Separating data fetching and business logic from purely presentational components to maximize reusability.'
      },
      {
        title: 'Compound Components',
        description: 'Building highly flexible, accessible UI components (like Tabs or Modals) that share implicit state without prop drilling.'
      }
    ],
    engineeringDecisions: [
      {
        decision: 'Migrating from Redux to Jotai for granular state.',
        reasoning: 'Redux created massive boilerplate for simple state updates. Jotai provided atomic state management that drastically reduced re-renders in a highly dynamic analytics dashboard.',
        tradeOffs: ['Lost Redux DevTools time-travel debugging capabilities.', 'Required retraining the team on atomic mental models.']
      }
    ],
    bestPractices: [
      'Always lift state as late as possible to prevent unnecessary re-renders.',
      'Use memoization (useMemo, useCallback) strictly for expensive computations, not by default.',
      'Keep dependency arrays in useEffect meticulously accurate.'
    ],
    lessonsLearned: [
      {
        title: 'The Danger of Stale Closures',
        description: 'Early on, I struggled with closures in useEffect capturing old state variables. I learned to use refs for mutable values that shouldn’t trigger renders.'
      },
      {
        title: 'Context is not State Management',
        description: 'I mistakenly used React Context for high-frequency state updates, causing catastrophic layout thrashing. Context is for dependency injection; state libraries are for fast updates.'
      }
    ],
    resources: [
      {
        title: 'React Documentation (New)',
        url: 'https://react.dev',
        whyUseful: 'The definitive guide to thinking in modern React with Hooks.',
        type: 'Documentation'
      },
      {
        title: 'Overreacted by Dan Abramov',
        url: 'https://overreacted.io',
        whyUseful: 'Deep dives into the internal mechanics and philosophy of React.',
        type: 'Article'
      }
    ],
    futureExploration: [
      'React Server Components (RSC) and server actions.',
      'Integrating concurrent rendering features like useTransition for smoother UX.'
    ]
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    overview: 'Next.js is what I use when I need a full-stack React app. SSR, API routes, file-based routing — it handles a lot of the boring stuff so I can focus on the actual features.',
    whyIUseIt: {
      problemsSolved: [
        'Poor SEO and initial load times of traditional single-page applications.',
        'Complex webpack configurations and routing boilerplate.',
        'Fragmentation between backend API routes and frontend codebase.'
      ],
      whyChosen: "Next.js gives me a solid structure out of the box. I don't have to set up routing, SSR, or API endpoints from scratch. The App Router is where React is headed.",
      whenToUse: 'Full-stack web applications, e-commerce platforms, or applications requiring strong SEO and fast time-to-first-byte.',
      whenToAvoid: 'Heavy dashboard applications that live purely behind authentication, where the complexity of SSR outweighs the benefits.',
      alternativesEvaluated: ['Remix', 'Astro']
    },
    projects: [
      {
        name: 'Enterprise Dashboard',
        role: 'Server-side rendering and API route orchestration.',
        contribution: 'Implemented Next.js App Router to stream complex analytics queries, reducing perceived load times by 40%.',
      }
    ],
    engineeringConcepts: [
      'Server-Side Rendering (SSR)',
      'Static Site Generation (SSG)',
      'Incremental Static Regeneration (ISR)',
      'React Server Components (RSC)'
    ],
    architecturePatterns: [
      {
        title: 'BFF (Backend for Frontend)',
        description: 'Using Next.js API routes as a proxy and orchestration layer to aggregate data from underlying microservices before sending it to the client.'
      }
    ],
    engineeringDecisions: [
      {
        decision: 'Adopting the App Router over Pages Router for a new project.',
        reasoning: 'The App Router enables React Server Components natively, allowing us to ship zero JS to the client for purely static layouts.',
        tradeOffs: ['Encountered early caching bugs and a steeper learning curve.', 'Some third-party libraries were not yet RSC-compatible.']
      }
    ],
    bestPractices: [
      'Always prefer Server Components unless interactivity (onClick, useState) is strictly required.',
      'Utilize Next.js Image component to enforce strict aspect ratios and automated format optimization.',
      'Leverage loading.tsx and error.tsx for resilient error boundaries and streaming states.'
    ],
    lessonsLearned: [
      {
        title: 'Caching Complexity',
        description: 'Next.js aggressive default caching caused stale data in production. I learned to precisely control cache revalidation tags rather than disabling caching entirely.'
      }
    ],
    resources: [
      {
        title: 'Next.js Official Docs',
        url: 'https://nextjs.org/docs',
        whyUseful: 'Crucial for understanding the nuances of the App Router caching mechanisms.',
        type: 'Documentation'
      }
    ],
    futureExploration: [
      'Advanced edge caching strategies.',
      'Optimizing partial prerendering (PPR) for dynamic storefronts.'
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    overview: 'TypeScript is non-negotiable for my engineering workflow. It is the language I use to enforce contract boundaries, document intent, and eliminate entire classes of runtime errors during compilation.',
    whyIUseIt: {
      problemsSolved: [
        'Silent runtime errors caused by type coercion in JavaScript.',
        'Difficulty refactoring large codebases confidently.',
        'Poor developer experience and lack of accurate autocompletion.'
      ],
      whyChosen: "TypeScript catches so many bugs before I even run the code. It's a bit more setup, but it pays off every time I refactor something.",
      whenToUse: 'Always, unless writing a quick prototype script under 100 lines.',
      whenToAvoid: 'Never, in a professional production context.',
      alternativesEvaluated: ['JSDoc (Too verbose, less robust)', 'Flow (Abandoned)']
    },
    projects: [
      {
        name: 'Distributed Core Node',
        role: 'Strongly typed contract layers and domain models.',
        contribution: 'Designed generic utility types to automatically infer API response payloads across the network boundary.',
      }
    ],
    engineeringConcepts: [
      'Structural Typing',
      'Generics',
      'Type Guards',
      'Discriminated Unions',
      'Utility Types'
    ],
    architecturePatterns: [
      {
        title: 'Domain-Driven Type Models',
        description: 'Using strict TypeScript interfaces to define business domain boundaries before writing any implementation logic.'
      }
    ],
    engineeringDecisions: [
      {
        decision: 'Enforcing strict mode and no-explicit-any across the codebase.',
        reasoning: 'Without strict mode, TypeScript provides a false sense of security. "any" defeats the purpose of the compiler.',
        tradeOffs: ['Increased initial development time.', 'Required complex type gymnastics for legacy third-party libraries.']
      }
    ],
    bestPractices: [
      'Rely on discriminated unions for complex state machines (e.g., loading, success, error states).',
      'Prefer interfaces for public API contracts and type aliases for complex unions.',
      'Never use "as Type" (type assertions) unless interacting with untyped boundaries.'
    ],
    lessonsLearned: [
      {
        title: 'Type Inference is Powerful',
        description: 'I used to explicitly type every variable. I learned that relying on TypeScript’s inference makes code much cleaner and less brittle to refactoring.'
      }
    ],
    resources: [
      {
        title: 'TypeScript Handbook',
        url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
        whyUseful: 'The fundamental guide to understanding structural typing.',
        type: 'Documentation'
      },
      {
        title: 'Type-Level TypeScript',
        url: 'https://type-level-typescript.com/',
        whyUseful: 'Advanced techniques for using TypeScript as a functional programming language.',
        type: 'Article'
      }
    ],
    futureExploration: [
      'Advanced generic inference and conditional types for highly dynamic form libraries.',
      'Integrating TypeScript compiler API for custom static analysis.'
    ]
  }
];
