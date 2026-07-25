export type ExperimentCategory = 
  | 'Architecture Experiments'
  | 'Performance Benchmarks'
  | 'Artificial Intelligence'
  | 'Blockchain Labs'
  | 'Security Research'
  | 'UI Experiments'
  | 'Developer Tools'
  | 'Automation'
  | 'API Prototypes'
  | 'Infrastructure'
  | 'Micro Projects'
  | 'Failed Experiments';

export type ExperimentState = 
  | 'Idea'
  | 'Researching'
  | 'Building'
  | 'Testing'
  | 'Validated'
  | 'Discarded'
  | 'Paused'
  | 'Integrated into production'
  | 'Archived';

export interface Metric {
  name: string; // e.g. 'Latency', 'Bundle size'
  before?: string;
  after?: string;
  current?: string;
  unit?: string;
  improvement?: string;
}

export interface ComparisonAlternative {
  name: string;
  complexity: string; // e.g., 'Low', 'Medium', 'High'
  performance: string;
  developerExperience: string;
  scalability: string;
  bundleImpact: string;
  maintenance: string;
}

export interface Comparison {
  title: string;
  reasoning: string;
  alternatives: ComparisonAlternative[];
}

export interface FailureLog {
  whatFailed: string;
  whyFailed: string;
  howDiscovered: string;
  whatChanged: string;
  insightGained: string;
}

export interface Experiment {
  id: string;
  title: string;
  category: ExperimentCategory;
  state: ExperimentState;
  date: string;
  
  hypothesis: string;
  problem: string;
  motivation: string;
  approach: string;
  toolsUsed: string[];
  
  expectedOutcome: string;
  actualOutcome: string;
  results: string;
  tradeOffs: string[];
  lessonsLearned: string[];
  futureImprovements: string[];
  
  benchmarks?: Metric[];
  comparison?: Comparison;
  failureLog?: FailureLog;

  connectedProjects?: { name: string; url: string }[];
  connectedDecisions?: { name: string; url: string }[];
  connectedConcepts?: string[];
}

export const EXPERIMENTS: Experiment[] = [
  {
    id: 'exp-1',
    title: 'Hydration Cost Reduction via React Server Components',
    category: 'Architecture Experiments',
    state: 'Integrated into production',
    date: '2023-11-10',
    hypothesis: 'Migrating purely static product detail sections to React Server Components will reduce the client-side JavaScript payload by at least 40% without compromising perceived interaction speed.',
    problem: 'Large e-commerce product pages were downloading massive JS bundles solely to hydrate static content (e.g., reviews, descriptions) before they became interactive.',
    motivation: 'To achieve a sub-second Time to Interactive (TTI) on mid-tier mobile devices over 3G networks.',
    approach: 'Incrementally adopted Next.js App Router for product detail pages. Kept interactive elements (Add to Cart, Image Gallery) as Client Components while shifting layout and text-heavy sections to Server Components.',
    toolsUsed: ['Next.js App Router', 'React Server Components', 'Lighthouse', 'Bundle Analyzer'],
    expectedOutcome: 'A 40% reduction in initial JS payload and a 30% improvement in TTI.',
    actualOutcome: 'Achieved a 52% reduction in initial JS payload and a 45% improvement in TTI on the target devices.',
    results: 'The migration drastically improved mobile performance metrics. Search engine crawlers also reported faster indexing times.',
    tradeOffs: [
      'Increased architectural complexity in reasoning about client vs. server boundaries.',
      'Slight increase in server rendering time (TTFB) due to generating more HTML upfront.'
    ],
    lessonsLearned: [
      'Not every component needs to be interactive. Defaulting to server rendering forces thoughtful decisions about interactivity.',
      'Server components simplify data fetching by eliminating the need for client-side loading states for static data.'
    ],
    futureImprovements: [
      'Explore partial prerendering to combine static shells with dynamic edge-rendered content.'
    ],
    benchmarks: [
      { name: 'JavaScript Payload', before: '450KB', after: '215KB', improvement: '52%' },
      { name: 'Time to Interactive (3G)', before: '3.2s', after: '1.7s', improvement: '46%' }
    ],
    connectedProjects: [
      { name: 'Project E-Commerce', url: '/projects/ecommerce' }
    ],
    connectedConcepts: ['React Server Components', 'Hydration', 'Rendering Patterns']
  },
  {
    id: 'exp-2',
    title: 'Global State Management Evaluation for High-Frequency Updates',
    category: 'Performance Benchmarks',
    state: 'Validated',
    date: '2023-09-05',
    hypothesis: 'Atomic state management (Jotai) will outperform Context API and Redux in scenarios with high-frequency localized state updates (e.g., a rapidly changing data grid).',
    problem: 'Using React Context for a real-time analytics dashboard caused unnecessary re-renders of the entire component tree, leading to severe frame drops.',
    motivation: 'To find a scalable state management solution that supports granular subscriptions without boilerplate.',
    approach: 'Built a synthetic benchmarking application rendering a 100x100 data grid. Implemented the same state logic using Context API, Redux Toolkit, Zustand, and Jotai. Measured render times and frame rates under rapid mutation.',
    toolsUsed: ['React Profiler', 'Redux Toolkit', 'Zustand', 'Jotai'],
    expectedOutcome: 'Jotai and Zustand will significantly outperform Context API, with Jotai offering the most granular re-renders.',
    actualOutcome: 'Zustand and Jotai both eliminated unnecessary layout thrashing. Zustand proved slightly easier to set up for global stores, while Jotai excelled at derived atomic state.',
    results: 'Context API is unsuitable for highly dynamic global state. Zustand is the pragmatic choice for most applications, while Jotai is best for highly granular, bottom-up state structures.',
    tradeOffs: [
      'Jotai atoms can become difficult to track in extremely large applications compared to a centralized Zustand store.'
    ],
    lessonsLearned: [
      'Context API is for dependency injection, not state management.',
      'Atomic state management closely mirrors React\'s mental model.'
    ],
    futureImprovements: [
      'Evaluate Signals (e.g., Preact Signals) against Jotai for potential performance gains without hooks.'
    ],
    comparison: {
      title: 'State Management Approaches',
      reasoning: 'Evaluated based on rendering efficiency during high-frequency updates and developer ergonomics.',
      alternatives: [
        { name: 'React Context', complexity: 'Low', performance: 'Poor (Full re-renders)', developerExperience: 'Good', scalability: 'Low', bundleImpact: 'Minimal', maintenance: 'High (Memoization hell)' },
        { name: 'Redux Toolkit', complexity: 'High', performance: 'Good', developerExperience: 'Medium', scalability: 'High', bundleImpact: 'Large', maintenance: 'Medium' },
        { name: 'Zustand', complexity: 'Low', performance: 'Excellent', developerExperience: 'Excellent', scalability: 'High', bundleImpact: 'Minimal', maintenance: 'Low' },
        { name: 'Jotai', complexity: 'Medium', performance: 'Excellent', developerExperience: 'Good', scalability: 'High', bundleImpact: 'Minimal', maintenance: 'Medium' }
      ]
    },
    benchmarks: [
      { name: 'Grid Update Latency', before: '120ms (Context)', after: '12ms (Zustand/Jotai)', improvement: '10x' }
    ]
  },
  {
    id: 'exp-3',
    title: 'WASM-Based Image Compression Pipeline',
    category: 'Failed Experiments',
    state: 'Discarded',
    date: '2024-02-15',
    hypothesis: 'Offloading image compression to WebAssembly on the client-side will reduce server bandwidth costs by 60% without noticeably degrading the user experience.',
    problem: 'High volume of unoptimized user uploads was overwhelming server-side processing queues and increasing storage costs.',
    motivation: 'To distribute compute workload to client devices and reduce infrastructure overhead.',
    approach: 'Integrated a Rust-compiled WASM module to compress images in the browser before upload.',
    toolsUsed: ['Rust', 'WebAssembly', 'Web Workers', 'React'],
    expectedOutcome: 'Users compress images instantly on their devices, saving server bandwidth.',
    actualOutcome: 'The WASM bundle size (2MB) negated the initial performance benefits for users on slow connections. Mobile devices struggled with the CPU overhead, leading to app crashes and poor UX.',
    results: 'Client-side compression via WASM is not currently viable for a general consumer mobile audience due to CPU and memory constraints.',
    tradeOffs: [
      'Traded server CPU for client CPU, which is unpredictable and often constrained.'
    ],
    lessonsLearned: [
      'Never assume client device capabilities.',
      'Large WASM bundles can severely impact initial load times, counteracting the benefits of the functionality they provide.'
    ],
    futureImprovements: [
      'Re-evaluate when WASM GC and lighter image processing crates become available.'
    ],
    failureLog: {
      whatFailed: 'Client-side image compression caused significant battery drain and frequent out-of-memory crashes on older mobile devices.',
      whyFailed: 'The WASM module required excessive memory allocation to process high-resolution camera photos, exceeding mobile browser limits.',
      howDiscovered: 'Error tracking (Sentry) reported a massive spike in OutOfMemory crashes on Safari iOS.',
      whatChanged: 'Reverted to server-side compression using a dedicated microservice with proper queuing.',
      insightGained: 'Compute should only be offloaded to the client when the task is guaranteed to be lightweight or when operating in a controlled desktop environment.'
    }
  }
];
