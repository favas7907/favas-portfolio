const fs = require('fs');

// Update types.ts
let typesData = fs.readFileSync('src/types.ts', 'utf8');
typesData = typesData.replace('architecture: {', `architecture: {
    requestLifecycle: string;
    performance: string;
    scalability: string;
    security: string;`);
fs.writeFileSync('src/types.ts', typesData);

// Update data.ts
let data = fs.readFileSync('src/constants/data.ts', 'utf8');

// Add to SecureVault
data = data.replace(
  /deployment: 'Dockerized microservices deployed on AWS Fargate\. TLS 1\.3 mandated for all transit\. Ephemeral instances to ensure memory is wiped on termination\.'\n    \},/,
  `deployment: 'Dockerized microservices deployed on AWS Fargate. TLS 1.3 mandated for all transit. Ephemeral instances to ensure memory is wiped on termination.',
      requestLifecycle: 'User authenticates -> Key derived locally -> Encrypted blob requested from API -> Blob decrypted locally -> Changes made -> Re-encrypted -> Synced back to API.',
      performance: 'Cryptographic operations offloaded to Web Workers to prevent UI thread blocking. Vault chunks are lazily decrypted upon scrolling.',
      scalability: 'Stateless backend architecture allows infinite horizontal scaling. MongoDB sharded by user geographic region to ensure compliance and low latency.',
      security: 'Zero-knowledge model ensures no plaintext data touches the network. Content Security Policy (CSP) strictly prohibits inline scripts and external data exfiltration.'
    },`
);

// Add to EcoTrack
data = data.replace(
  /deployment: 'Kubernetes cluster ensuring high availability\. Node instances scaled horizontally based on active WebSocket connections and ingestion queue depth\.'\n    \},/,
  `deployment: 'Kubernetes cluster ensuring high availability. Node instances scaled horizontally based on active WebSocket connections and ingestion queue depth.',
      requestLifecycle: 'IoT Sensor emits MQTT -> Ingestion Service validates -> Time-series DB writes -> WebSocket Server broadcasts -> Canvas re-renders data frame.',
      performance: 'Canvas API allows 60fps rendering of 50,000+ nodes. Binary data payloads reduce network transfer by 60% compared to standard JSON.',
      scalability: 'Data decimation algorithms implemented at the edge gateway to drop redundant readings. InfluxDB handles high-throughput write streams independently of the query layer.',
      security: 'IoT gateways authenticated via mTLS. Data ingestion endpoints are segregated from client query APIs on the internal network.'
    },`
);

// Add to DevConnect
data = data.replace(
  /deployment: 'Vercel for the Next\.js frontend\/BFF to leverage Edge caching\. PostgreSQL hosted on a managed AWS RDS instance with automated daily snapshots\.'\n    \},/,
  `deployment: 'Vercel for the Next.js frontend/BFF to leverage Edge caching. PostgreSQL hosted on a managed AWS RDS instance with automated daily snapshots.',
      requestLifecycle: 'User searches -> GraphQL resolves relational query -> UI updates. Chat initiates -> Firebase listener opens -> Real-time sync commences.',
      performance: 'Next.js Edge Caching serves static profiles instantly. Apollo Normalized Cache prevents duplicate network requests for overlapping queries.',
      scalability: 'GraphQL BFF insulates the database from heavy read loads. Firebase handles horizontal chat scaling natively without custom provisioning.',
      security: 'GraphQL schema strictly validates nested query depth to prevent Denial of Service (DoS) attacks. Firebase Security Rules enforce authorization at the document level.'
    },`
);

fs.writeFileSync('src/constants/data.ts', data);
