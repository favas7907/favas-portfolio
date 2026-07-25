const fs = require('fs');

// Update types.ts
let typesData = fs.readFileSync('src/types.ts', 'utf8');
typesData = typesData.replace('architecture: string;', `architecture: {
    overview: string;
    client: string;
    server: string;
    database: string;
    authentication: string;
    state: string;
    deployment: string;
  };`);
fs.writeFileSync('src/types.ts', typesData);

// Update data.ts
let data = fs.readFileSync('src/constants/data.ts', 'utf8');

// Project 1: SecureVault
data = data.replace(/architecture: 'The system utilizes the Web Crypto API.*?authentication\.',/, `architecture: {
      overview: 'The system utilizes the Web Crypto API for client-side AES-GCM encryption. The backend acts strictly as a dumb data store, having zero knowledge of the encryption keys or plaintext data.',
      client: 'React SPA handling PBKDF2 key derivation and AES-GCM encryption entirely in-memory using the Web Crypto API. Private keys are never committed to localStorage.',
      server: 'Node.js/Express REST API that only accepts and serves encrypted binary blobs and zero-knowledge proofs for authentication.',
      database: 'MongoDB configured for high-throughput binary storage. Flexible schema allows for varying encrypted vault item structures without database migrations.',
      authentication: 'Zero-Knowledge Proofs (Secure Remote Password protocol) used for authentication. Multi-Factor Authentication via TOTP adds a second layer before the encrypted blob is released.',
      state: 'React Context with strict memory wiping on logout. Encryption keys are kept in closures and never exposed to the Redux/Context global window scope.',
      deployment: 'Dockerized microservices deployed on AWS Fargate. TLS 1.3 mandated for all transit. Ephemeral instances to ensure memory is wiped on termination.'
    },`);

// Project 2: EcoTrack
data = data.replace(/architecture: 'The backend leverages Express and InfluxDB.*?DOM bloat\.',/, `architecture: {
      overview: 'A hybrid streaming architecture prioritizing high-throughput ingestion and hardware-accelerated client-side rendering. Optimized for high-frequency time-series telemetry.',
      client: 'React UI shell for routing and state, paired with D3.js and HTML5 Canvas API for raw rendering performance, offloading JSON parsing to Web Workers.',
      server: 'Express.js backend utilizing Node.js Streams to process and compress high-volume MQTT data from IoT gateways before piping to the client via WebSockets.',
      database: 'InfluxDB optimized for time-series data, enabling sub-second aggregation queries over millions of telemetry rows.',
      authentication: 'JWT-based session management for users, and strictly scoped mTLS certificates for IoT devices connecting to the ingestion gateway.',
      state: 'Zustand for global UI state, while the heavy time-series data array is held in a mutable Ref to prevent React re-rendering bottlenecks.',
      deployment: 'Kubernetes cluster ensuring high availability. Node instances scaled horizontally based on active WebSocket connections and ingestion queue depth.'
    },`);

// Project 3: DevConnect
data = data.replace(/architecture: 'The frontend is a server-side rendered Next\.js.*?skills, and projects\.',/, `architecture: {
      overview: 'A dual-backend architecture marrying the SEO and relational querying strengths of a Next.js/GraphQL stack with the real-time, high-concurrency capabilities of Firebase.',
      client: 'Next.js application utilizing Server-Side Rendering (SSR) for public profiles, paired with Apollo Client for complex graph queries and local caching.',
      server: 'Apollo GraphQL Server acting as an API Gateway, resolving relational queries efficiently to prevent N+1 issues and minimizing payload sizes.',
      database: 'PostgreSQL for highly structured relational data (Users, Projects, Skills) and Firebase Realtime Database exclusively for the ephemeral chat and presence layer.',
      authentication: 'Firebase Authentication handling OAuth (GitHub/Google) and issuing JWTs, which are verified by the GraphQL middleware for protected mutations.',
      state: 'Apollo Client normalized cache for structured relational data, reducing redundant network requests. React Context for real-time Firebase connection status.',
      deployment: 'Vercel for the Next.js frontend/BFF to leverage Edge caching. PostgreSQL hosted on a managed AWS RDS instance with automated daily snapshots.'
    },`);

fs.writeFileSync('src/constants/data.ts', data);
