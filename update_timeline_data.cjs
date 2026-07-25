const fs = require('fs');

// Update types.ts
let typesData = fs.readFileSync('src/types.ts', 'utf8');
typesData = typesData.replace('export interface ProjectDetailData {', `export interface JourneyMilestone {
  phase: string;
  title: string;
  description: string;
}

export interface ProjectDetailData {`);
typesData = typesData.replace('development: string;', 'development: JourneyMilestone[];');
fs.writeFileSync('src/types.ts', typesData);

// Update data.ts
let data = fs.readFileSync('src/constants/data.ts', 'utf8');

data = data.replace(/development: 'Development began with a core cryptographic module.*?localStorage\.',/, `development: [
        { phase: 'Discovery', title: 'The Master Password Problem', description: 'Investigated existing credential managers. Identified that reliance on server-side hashing still leaves databases vulnerable to offline brute-force attacks if exfiltrated.' },
        { phase: 'Planning', title: 'Zero-Knowledge Cryptography', description: 'Defined the core constraint: the server must never receive plaintext passwords. Selected AES-GCM for encryption and PBKDF2 for key derivation based on Web Crypto API capabilities.' },
        { phase: 'Prototype', title: 'Headless Encryption Core', description: 'Built the cryptographic module independently of any UI. Verified encryption and decryption cycles locally, ensuring keys were strictly scoped to memory and wiped explicitly.' },
        { phase: 'First Sprint', title: 'Client-Server Handshake', description: 'Integrated the crypto core with the Node.js backend. Implemented the Secure Remote Password (SRP) protocol to allow the server to authenticate the user without ever transmitting the master password.' },
        { phase: 'Iteration', title: 'Multi-Device Sync', description: 'Encountered the challenge of syncing vaults across devices without sharing the master key. Implemented RSA-OAEP public/private key pairs per device to securely wrap and share the symmetric vault key.' },
        { phase: 'Performance', title: 'Web Worker Offloading', description: 'Heavy PBKDF2 iterations were blocking the main thread, causing UI freezes. Refactored the cryptography module to run inside Web Workers, keeping the interface fluid.' },
        { phase: 'Deployment', title: 'Immutable Infrastructure', description: 'Deployed the stateless backend via Docker to AWS Fargate. Configured ephemeral containers to ensure that even if a memory dump was attempted, containers could be rotated safely.' }
      ],`);

data = data.replace(/development: 'The build started with a traditional React \+ Recharts setup.*?backend\.',/, `development: [
        { phase: 'Discovery', title: 'Telemetry Overload', description: 'Observed researchers struggling to visualize high-frequency sensor data. Existing dashboards crashed or lagged when rendering more than a few thousand points.' },
        { phase: 'Architecture Design', title: 'Bypassing the DOM', description: 'Prototyped SVG vs Canvas rendering. Concluded that an HTML5 Canvas approach, driven by D3.js math, was the only viable path to achieve 60fps with 50,000+ nodes.' },
        { phase: 'First Sprint', title: 'Ingestion Pipeline', description: 'Built an Express backend with InfluxDB to handle the high-throughput write stream from MQTT sensors. Established a WebSocket connection to stream compressed binary payloads.' },
        { phase: 'Core Features', title: 'Canvas Rendering Engine', description: 'Developed the frontend charting layer. Separated the D3 scale calculations from the actual Canvas drawing loop to maximize frame rates during real-time data ingestion.' },
        { phase: 'Iteration', title: 'Interaction Model', description: 'Canvas lacks native DOM events. Solved hover states by rendering a hidden "hit canvas" with unique color mappings, correlating cursor position to specific data points.' },
        { phase: 'Performance', title: 'Data Decimation', description: 'Even with Canvas, rendering every micro-fluctuation was redundant. Implemented edge-gateway data decimation and LTTB (Largest Triangle Three Buckets) downsampling on the server.' },
        { phase: 'Deployment', title: 'High-Availability Cluster', description: 'Deployed to a Kubernetes cluster. Scaled Node.js WebSocket gateways horizontally based on active connections, backed by a persistent InfluxDB volume.' }
      ],`);

data = data.replace(/development: 'Development was phased: Phase 1 focused on the GraphQL schema.*?mismatches\.',/, `development: [
        { phase: 'Project Idea', title: 'Bridging Open Source', description: 'Noticed new developers struggling to find relevant open-source projects, while maintainers lacked contributors. Validated the need for a skill-based, real-time matching platform.' },
        { phase: 'Planning', title: 'Hybrid Architecture', description: 'Determined that SEO was critical for public profiles, necessitating SSR via Next.js. However, the matching and messaging features required real-time state, leading to a dual Firebase/GraphQL backend.' },
        { phase: 'Architecture Design', title: 'GraphQL and Apollo Cache', description: 'Designed a normalized GraphQL schema to handle complex relations (Users, Skills, Projects). Configured Apollo Client to cache requests locally, minimizing redundant network calls.' },
        { phase: 'First Sprint', title: 'Matching Engine', description: 'Implemented the core matching algorithm in PostgreSQL. Rather than basic keyword matching, built a graph-based adjacency model to suggest relevant but unlisted skills.' },
        { phase: 'Core Features', title: 'Real-Time Synchronization', description: 'Integrated Firebase Realtime Database for the chat layer. Faced state synchronization issues between GraphQL and Firebase, resolved by writing custom hooks for optimistic UI updates.' },
        { phase: 'Testing', title: 'Handling Concurrent State', description: 'Stress-tested the chat and matching engine. Discovered hydration mismatches during SSR when injecting Firebase presence state. Deferred real-time listeners to the client-side useEffect layer.' },
        { phase: 'Deployment', title: 'Edge Caching', description: 'Deployed the Next.js frontend to Vercel to leverage Edge caching for public profiles. The PostgreSQL database was provisioned on AWS RDS with automated snapshots.' }
      ],`);

fs.writeFileSync('src/constants/data.ts', data);
