const fs = require('fs');
let typesData = fs.readFileSync('src/types.ts', 'utf8');
typesData = typesData.replace('export interface JourneyMilestone {', `export interface JourneyMilestone {
  phase: string;
  title: string;
  description: string;
  commitCount?: number;
  techNotes?: string;
  impact?: string;`);
fs.writeFileSync('src/types.ts', typesData);

let data = fs.readFileSync('src/constants/data.ts', 'utf8');

// Update SecureVault milestones
data = data.replace(
  /{ phase: 'Discovery', title: 'The Master Password Problem', description: 'Investigated existing credential managers. Identified that reliance on server-side hashing still leaves databases vulnerable to offline brute-force attacks if exfiltrated.' },/,
  `{ phase: 'Discovery', title: 'The Master Password Problem', description: 'Investigated existing credential managers. Identified that reliance on server-side hashing still leaves databases vulnerable to offline brute-force attacks if exfiltrated.', impact: 'Defined the core constraint: the server must never receive plaintext passwords.' },`
);

data = data.replace(
  /{ phase: 'Performance', title: 'Web Worker Offloading', description: 'Heavy PBKDF2 iterations were blocking the main thread, causing UI freezes. Refactored the cryptography module to run inside Web Workers, keeping the interface fluid.' },/,
  `{ phase: 'Performance', title: 'Web Worker Offloading', description: 'Heavy PBKDF2 iterations were blocking the main thread, causing UI freezes. Refactored the cryptography module to run inside Web Workers, keeping the interface fluid.', commitCount: 42, techNotes: 'Migrated 600k iterations of PBKDF2 to a dedicated Web Worker, reducing main thread blocking time from 350ms to 0ms.' },`
);

data = data.replace(
  /{ phase: 'Deployment', title: 'Immutable Infrastructure', description: 'Deployed the stateless backend via Docker to AWS Fargate. Configured ephemeral containers to ensure that even if a memory dump was attempted, containers could be rotated safely.' }/,
  `{ phase: 'Deployment', title: 'Immutable Infrastructure', description: 'Deployed the stateless backend via Docker to AWS Fargate. Configured ephemeral containers to ensure that even if a memory dump was attempted, containers could be rotated safely.', techNotes: 'Implemented automated CI/CD pipeline using GitHub Actions to deploy to AWS ECR and Fargate.' }`
);

// Update EcoTrack milestones
data = data.replace(
  /{ phase: 'Architecture Design', title: 'Bypassing the DOM', description: 'Prototyped SVG vs Canvas rendering. Concluded that an HTML5 Canvas approach, driven by D3.js math, was the only viable path to achieve 60fps with 50,000\\+ nodes.' },/,
  `{ phase: 'Architecture Design', title: 'Bypassing the DOM', description: 'Prototyped SVG vs Canvas rendering. Concluded that an HTML5 Canvas approach, driven by D3.js math, was the only viable path to achieve 60fps with 50,000+ nodes.', techNotes: 'Compared Recharts (SVG) rendering 5k nodes (12fps) vs Canvas API rendering 50k nodes (60fps).' },`
);

data = data.replace(
  /{ phase: 'Iteration', title: 'Interaction Model', description: 'Canvas lacks native DOM events. Solved hover states by rendering a hidden "hit canvas" with unique color mappings, correlating cursor position to specific data points.' },/,
  `{ phase: 'Iteration', title: 'Interaction Model', description: 'Canvas lacks native DOM events. Solved hover states by rendering a hidden "hit canvas" with unique color mappings, correlating cursor position to specific data points.', commitCount: 18, impact: 'Restored tooltips and hover interactions without sacrificing the rendering speed of the Canvas API.' },`
);

// Update DevConnect milestones
data = data.replace(
  /{ phase: 'Testing', title: 'Handling Concurrent State', description: 'Stress-tested the chat and matching engine. Discovered hydration mismatches during SSR when injecting Firebase presence state. Deferred real-time listeners to the client-side useEffect layer.' },/,
  `{ phase: 'Testing', title: 'Handling Concurrent State', description: 'Stress-tested the chat and matching engine. Discovered hydration mismatches during SSR when injecting Firebase presence state. Deferred real-time listeners to the client-side useEffect layer.', techNotes: 'Implemented a custom useFirebasePresence hook to isolate real-time state from Next.js server rendering.' },`
);

fs.writeFileSync('src/constants/data.ts', data);
