export interface Concept {
  id: string;
  domainId: string;
  title: string;
  summary: string;
  whyItExists: string;
  problemSolved: string;
  principles: string[];
  commonMistakes: string[];
  relatedConceptIds: string[];
  technologies: string[];
  projects: { title: string; url: string; description: string }[];
  resources: { title: string; url: string; type: string }[];
  insights: string;
  questions: {
    whyExist: string;
    whatProblem: string;
    whenToUse: string;
    whenNotToUse: string;
    alternatives: string;
    tradeOffs: string;
    evolution: string;
  };
}

export const ENGINEERING_CONCEPTS: Concept[] = [
  {
    id: 'state-management',
    domainId: 'frontend',
    title: 'State Management',
    summary: 'The strategic control of application data and UI synchronisation over time.',
    whyItExists: 'As applications grow, tracking what data changed, who changed it, and what UI needs to update becomes an untameable web of callbacks without a structured approach.',
    problemSolved: 'Decouples state mutation logic from rendering logic, ensuring predictable state transitions and eliminating prop-drilling.',
    principles: [
      'Single source of truth where appropriate.',
      'State should be as local as possible, as global as necessary.',
      'Mutations must be traceable and predictable.'
    ],
    commonMistakes: [
      'Putting ephemeral UI state into global stores.',
      'Duplicating derived state instead of computing it on the fly.',
      'Over-engineering with complex libraries for simple applications.'
    ],
    relatedConceptIds: ['data-fetching', 'reactivity', 'rendering-patterns'],
    technologies: ['React Context', 'Zustand', 'Redux', 'Jotai', 'Signals'],
    projects: [
      { title: 'Nexus Trading Platform', url: '/projects/nexus', description: 'Complex financial dashboard requiring high-frequency state updates.' }
    ],
    resources: [
      { title: 'Thinking in React', url: 'https://react.dev/learn/thinking-in-react', type: 'Documentation' }
    ],
    insights: 'I used to put everything in Redux. Now, I prefer collocating state with the components that need it, and only lifting it when absolutely necessary. Server state is handled entirely differently than client UI state.',
    questions: {
      whyExist: 'To bring predictability to applications where data changes frequently and triggers complex UI updates.',
      whatProblem: 'Prevents the UI from falling out of sync with the underlying data model.',
      whenToUse: 'When multiple distant components need to read or mutate the same data, or when state logic becomes too complex for a single component.',
      whenNotToUse: 'When data is only needed by a component and its immediate children (use local state).',
      alternatives: 'URL state, local component state, server state caching.',
      tradeOffs: 'Global state provides predictability at the cost of boilerplate. Local state is agile but can lead to prop-drilling.',
      evolution: 'Moved from monolithic global stores to atomic, granular state models and separated server-state management.'
    }
  },
  {
    id: 'rendering-patterns',
    domainId: 'frontend',
    title: 'Rendering Patterns',
    summary: 'The architectural decision of where and when HTML is generated for the client.',
    whyItExists: 'Different applications have different requirements for SEO, time-to-interactive, and initial load speeds. One rendering strategy cannot satisfy all constraints.',
    problemSolved: 'Balances server resources, network latency, and client processing power to deliver the optimal user experience.',
    principles: [
      'Render as much as possible on the server for static content.',
      'Hydrate only what needs to be interactive.',
      'Defer non-critical rendering to avoid blocking the main thread.'
    ],
    commonMistakes: [
      'Using pure SPA (CSR) for content-heavy, SEO-dependent sites.',
      'Over-hydrating large component trees unnecessarily.',
      'Ignoring Cumulative Layout Shift (CLS) during client-side rendering.'
    ],
    relatedConceptIds: ['state-management', 'performance'],
    technologies: ['Server-Side Rendering (SSR)', 'Static Site Generation (SSG)', 'Client-Side Rendering (CSR)', 'React Server Components (RSC)'],
    projects: [
      { title: 'Global News Portal', url: '/projects/news', description: 'High-traffic publication utilising Incremental Static Regeneration.' }
    ],
    resources: [
      { title: 'Rendering on the Web', url: 'https://web.dev/rendering-on-the-web/', type: 'Article' }
    ],
    insights: 'React Server Components fundamentally shifted my mental model. We no longer just send JavaScript to the client; we send an instruction set of UI, keeping heavy dependencies purely on the server.',
    questions: {
      whyExist: 'To optimise the delivery and execution of web applications across diverse network and device constraints.',
      whatProblem: 'Slow perceived load times and poor search engine indexing in pure client-side applications.',
      whenToUse: 'Use SSR/SSG for content-heavy applications. Use CSR for highly interactive, private dashboards.',
      whenNotToUse: 'Do not use complex SSR infrastructures for simple internal tools where SEO is irrelevant.',
      alternatives: 'Island architecture, Edge rendering.',
      tradeOffs: 'SSR improves Time to First Byte (TTFB) and SEO but increases server costs. CSR is cheap to host but delays Time to Interactive (TTI).',
      evolution: 'Transitioned from CSR everything, to Next.js SSR, and now exploring React Server Components and Edge rendering.'
    }
  },
  {
    id: 'authentication',
    domainId: 'backend',
    title: 'Authentication & Authorisation',
    summary: 'The security perimeter defining who a user is and what they are permitted to do.',
    whyItExists: 'Systems must securely verify identity to protect data and enforce access policies without compromising user experience.',
    problemSolved: 'Prevents unauthorised access, securely manages sessions, and evaluates permissions across distributed architectures.',
    principles: [
      'Never trust the client.',
      'Implement least privilege access.',
      'Fail securely (default to deny).'
    ],
    commonMistakes: [
      'Storing secrets or tokens in easily accessible client storage without mitigations.',
      'Confusing authentication (identity) with authorisation (permissions).',
      'Implementing custom cryptography instead of standard algorithms.'
    ],
    relatedConceptIds: ['api-design'],
    technologies: ['OAuth 2.0', 'JWT', 'Session Cookies', 'OIDC', 'RBAC'],
    projects: [
      { title: 'Secure Enterprise Portal', url: '/projects/portal', description: 'Internal tool with granular Role-Based Access Control.' }
    ],
    resources: [
      { title: 'OAuth 2.0 Simplified', url: 'https://oauth.net/2/', type: 'Documentation' }
    ],
    insights: 'Security should never be an afterthought. Using established identity providers is almost always better than rolling your own auth unless you have a dedicated security team.',
    questions: {
      whyExist: 'To establish trust between a client and a server in a stateless HTTP environment.',
      whatProblem: 'Data breaches, privilege escalation, and identity spoofing.',
      whenToUse: 'Any system handling user-specific data, sensitive operations, or varying access levels.',
      whenNotToUse: 'Fully public, read-only content platforms without user-generated data.',
      alternatives: 'Magic links, biometric auth, hardware tokens.',
      tradeOffs: 'JWTs offer stateless scalability but are difficult to revoke. Stateful sessions are easy to revoke but require database lookups per request.',
      evolution: 'Transitioned from simple session cookies to complex OAuth flows, now favouring managed identity providers for modern applications.'
    }
  },
  {
    id: 'api-design',
    domainId: 'backend',
    title: 'API Design',
    summary: 'The contractual interface between distinct software systems.',
    whyItExists: 'To allow disparate systems, often written in different languages and managed by different teams, to communicate reliably and predictably.',
    problemSolved: 'Standardises data exchange, abstracts internal complexities, and provides a stable integration point for clients.',
    principles: [
      'Design for the consumer, not the database.',
      'Be conservative in what you send, be liberal in what you accept.',
      'Provide clear, consistent, and descriptive error messages.'
    ],
    commonMistakes: [
      'Leaking internal database schemas directly to the API.',
      'Breaking backwards compatibility without versioning.',
      'Over-fetching or under-fetching data due to rigid endpoint design.'
    ],
    relatedConceptIds: ['authentication'],
    technologies: ['REST', 'GraphQL', 'gRPC', 'tRPC', 'WebSockets'],
    projects: [],
    resources: [],
    insights: 'An API is a product. The developer experience of consuming your API matters just as much as its performance.',
    questions: {
      whyExist: 'To create a boundary between internal logic and external consumption.',
      whatProblem: 'Tightly coupled systems that cannot evolve independently.',
      whenToUse: 'Whenever building a service that will be consumed by a frontend application, mobile app, or third-party integrator.',
      whenNotToUse: 'For tightly coupled internal logic within a single monolithic boundary where function calls suffice.',
      alternatives: 'Direct database access (rarely advised), SDKs.',
      tradeOffs: 'REST is ubiquitous but prone to over-fetching. GraphQL is flexible but complex to cache. gRPC is highly performant but harder to debug in the browser.',
      evolution: 'Started with pure REST, moved to GraphQL for complex client needs, and now heavily leveraging tRPC for full-stack TypeScript applications for end-to-end type safety.'
    }
  }
];
ENGINEERING_CONCEPTS.push(
  {
    id: 'performance',
    domainId: 'frontend',
    title: 'Performance Optimization',
    summary: 'The deliberate practice of delivering fast, responsive, and resource-efficient user interfaces.',
    whyItExists: 'Web applications run in unconstrained environments on diverse hardware. Performance directly impacts user retention, conversion rates, and accessibility.',
    problemSolved: 'Mitigates layout shifts, input delays, and slow load times caused by heavy assets or blocking JavaScript.',
    principles: [
      'Ship less JavaScript.',
      'Optimise the critical rendering path.',
      'Lazy-load everything non-critical.'
    ],
    commonMistakes: [
      'Measuring performance only on high-end developer machines.',
      'Using large monolithic bundles instead of code-splitting.',
      'Causing layout shifts with unconstrained images and fonts.'
    ],
    relatedConceptIds: ['rendering-patterns', 'state-management'],
    technologies: ['Lighthouse', 'Web Vitals', 'Code Splitting', 'Image Optimization', 'Service Workers'],
    projects: [],
    resources: [
      { title: 'Web Vitals', url: 'https://web.dev/vitals/', type: 'Documentation' }
    ],
    insights: 'Performance is a feature, not an afterthought. It requires continuous monitoring and a culture of performance budgeting within the team.',
    questions: {
      whyExist: 'To ensure applications are usable and resilient across varying network conditions and devices.',
      whatProblem: 'Poor user experience resulting from high latency and unresponsive interfaces.',
      whenToUse: 'Always. Performance should be considered from the architectural phase.',
      whenNotToUse: 'Do not prematurely optimise complex algorithms before measuring actual bottlenecks.',
      alternatives: 'N/A',
      tradeOffs: 'Deep optimisation can sometimes lead to more complex codebases (e.g., manual memoization).',
      evolution: 'Shifted from focusing purely on load times (TTFB) to user-centric metrics (Core Web Vitals).'
    }
  },
  {
    id: 'accessibility',
    domainId: 'frontend',
    title: 'Accessibility (a11y)',
    summary: 'Designing and engineering applications that are usable by everyone, regardless of disability or impairment.',
    whyItExists: 'To build an inclusive web that doesn\'t discriminate based on physical or cognitive abilities.',
    problemSolved: 'Removes barriers for users who rely on assistive technologies, keyboard navigation, or screen readers.',
    principles: [
      'Use semantic HTML.',
      'Ensure sufficient color contrast.',
      'Manage focus intentionally.'
    ],
    commonMistakes: [
      'Building custom interactive components without appropriate ARIA attributes.',
      'Relying solely on color to convey meaning.',
      'Trapping keyboard focus inside modals without an escape route.'
    ],
    relatedConceptIds: ['performance'],
    technologies: ['WAI-ARIA', 'Semantic HTML', 'Screen Readers (VoiceOver, NVDA)', 'axe-core'],
    projects: [],
    resources: [
      { title: 'W3C Accessibility Guidelines', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', type: 'Documentation' }
    ],
    insights: 'Accessibility is the true test of a frontend engineer\'s mastery. It forces you to understand how the browser and operating system interpret your code.',
    questions: {
      whyExist: 'Because access to information and tools is a fundamental human right.',
      whatProblem: 'Exclusion of millions of users from interacting with digital products.',
      whenToUse: 'Always. It is a baseline requirement, not an enhancement.',
      whenNotToUse: 'Never.',
      alternatives: 'N/A',
      tradeOffs: 'Building accessible custom components requires significantly more engineering effort than native elements.',
      evolution: 'Moved from superficial contrast checks to deep integration of screen reader testing and focus management.'
    }
  }
);
ENGINEERING_CONCEPTS.push(
  {
    id: 'data-modeling',
    domainId: 'databases',
    title: 'Data Modeling',
    summary: 'The process of creating a mathematical and logical representation of data structures.',
    whyItExists: 'Without a structured model, data becomes an inconsistent, unqueryable mess that cannot support business logic.',
    problemSolved: 'Ensures data integrity, enables efficient querying, and maps business requirements to storage infrastructure.',
    principles: [
      'Normalise for writes, denormalise for reads.',
      'Design around access patterns.',
      'Maintain referential integrity.'
    ],
    commonMistakes: [
      'Treating NoSQL like a relational database.',
      'Failing to plan for schema migrations and versioning.',
      'Using UUIDs as primary keys without understanding the performance impact on B-Trees.'
    ],
    relatedConceptIds: [],
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Entity-Relationship Diagrams'],
    projects: [],
    resources: [
      { title: 'Designing Data-Intensive Applications', url: 'https://dataintensive.net/', type: 'Book' }
    ],
    insights: 'The schema outlives the code. You can rewrite an application in a weekend, but migrating terabytes of unstructured data takes months. Always get the data model right first.',
    questions: {
      whyExist: 'To enforce rules, structure, and predictability on raw information.',
      whatProblem: 'Data corruption, orphaned records, and slow query performance.',
      whenToUse: 'Before writing any application code that interacts with persistent storage.',
      whenNotToUse: 'When prototyping throwaway applications (though even then, basic structure helps).',
      alternatives: 'Schema-on-read (Data Lakes), JSON blobs.',
      tradeOffs: 'Strict normalisation prevents anomalies but requires expensive JOINs. Denormalisation speeds up reads but requires complex synchronisation for writes.',
      evolution: 'Moved from purely relational thinking to understanding access-pattern-driven design (especially for NoSQL).'
    }
  },
  {
    id: 'distributed-systems',
    domainId: 'system-design',
    title: 'Distributed Systems',
    summary: 'A system whose components are located on different networked computers, communicating to achieve a common goal.',
    whyItExists: 'A single machine has physical limits (CPU, memory, disk). To scale beyond those limits, systems must be split across multiple machines.',
    problemSolved: 'Provides horizontal scalability, fault tolerance, and geographic distribution of resources.',
    principles: [
      'Assume the network will fail.',
      'Design for idempotency.',
      'State is the enemy of scalability.'
    ],
    commonMistakes: [
      'Assuming network latency is zero.',
      'Building distributed monoliths (microservices that are tightly coupled).',
      'Ignoring the CAP theorem when selecting databases.'
    ],
    relatedConceptIds: ['data-modeling', 'api-design'],
    technologies: ['Kubernetes', 'Kafka', 'gRPC', 'Consul', 'Redis'],
    projects: [],
    resources: [],
    insights: 'Complexity in distributed systems is exponential. Every time you split a service, you are trading a programming problem for a networking problem.',
    questions: {
      whyExist: 'To provide high availability and massive scale that single-node architectures cannot achieve.',
      whatProblem: 'Single points of failure and resource exhaustion.',
      whenToUse: 'When a system must survive hardware failures or handle traffic beyond the capacity of a single large server.',
      whenNotToUse: 'For 95% of standard web applications. Start with a majestic monolith.',
      alternatives: 'Vertical scaling (buying a bigger server).',
      tradeOffs: 'High availability and scale come at the cost of operational complexity, eventual consistency, and difficult debugging.',
      evolution: 'Learned the hard way that microservices are an organisational scaling tool, not a default technical architecture.'
    }
  }
);
