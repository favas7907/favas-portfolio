import { Project } from "../types";
import { 
  Code2, 
  Layout, 
  Database, 
  Shield, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Terminal,
  Cpu,
  Globe,
  BookOpen,
  Award,
  Trophy,
  Briefcase,
  GraduationCap,
  FileText
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact', href: '/contact' },
,
  {
    id: 'aws-solutions-architect',
    title: 'AWS Certified Solutions Architect - Professional',
    category: 'Certifications',
    date: '2023',
    shortDescription: 'Validated expertise in designing distributed systems and highly available architectures on AWS.',
    image: 'https://picsum.photos/seed/aws/1200/800',
    link: '#',
    details: {
      context: 'Achieving the highest level of AWS certification to validate deep architectural knowledge.',
      opportunity: 'Formalize years of hands-on cloud experience into a globally recognized credential.',
      challenge: 'Mastering complex scenarios involving hybrid networks, multi-region failover, and extreme scale.',
      role: 'Cloud Architect',
      responsibilities: [
        'Designed fault-tolerant architectures',
        'Optimized cost strategies for enterprise workloads',
        'Implemented rigorous security protocols'
      ],
      outcome: 'Passed the rigorous 3-hour exam on the first attempt.',
      impact: 'Provided internal teams with an authoritative architectural voice when transitioning to cloud-native microservices.',
      lessons: 'Cloud architecture is fundamentally about trade-offs between cost, performance, and reliability.',
      relatedTechnologies: ['AWS', 'Distributed Systems', 'Cloud Architecture'],
    }
  },
  {
    id: 'kubernetes-ckad',
    title: 'Certified Kubernetes Application Developer (CKAD)',
    category: 'Certifications',
    date: '2022',
    shortDescription: 'Demonstrated proficiency in building and deploying cloud-native applications on Kubernetes.',
    image: 'https://picsum.photos/seed/k8s/1200/800',
    details: {
      context: 'Transitioning engineering infrastructure towards containerized orchestration.',
      opportunity: 'Mastering Kubernetes primitives to deploy robust, scalable applications.',
      challenge: 'Learning to debug complex pod networking and persistent storage issues in a live environment.',
      role: 'Application Developer',
      responsibilities: [
        'Configured deployments and services',
        'Managed persistent volumes and config maps',
        'Implemented network policies'
      ],
      outcome: 'Earned the CKAD certification through a rigorous performance-based exam.',
      impact: 'Dramatically reduced deployment friction and improved system reliability for multiple microservices.',
      lessons: 'Declarative infrastructure fundamentally changes how we think about state and deployment.',
      relatedTechnologies: ['Kubernetes', 'Docker', 'DevOps'],
    }
  },
  {
    id: 'react-community-speaker',
    title: 'Keynote Speaker - React Advanced Summit',
    category: 'Speaking',
    date: '2023',
    shortDescription: 'Delivered a technical deep dive on concurrent rendering and performance profiling in React 18.',
    image: 'https://picsum.photos/seed/speaker/1200/800',
    details: {
      context: 'Invited to speak at a major regional React conference with over 500 attendees.',
      opportunity: 'Share deep learnings about React 18 concurrent features derived from a large-scale migration.',
      challenge: 'Distilling complex internal React scheduler concepts into digestible, actionable advice for working engineers.',
      role: 'Keynote Speaker',
      responsibilities: [
        'Authored a 45-minute technical presentation',
        'Created interactive visualizations of the React render phase',
        'Led a live Q&A session on performance optimization'
      ],
      outcome: 'Received highest speaker rating of the conference and published the slide deck open-source.',
      impact: 'Helped hundreds of developers adopt concurrent mode safely and improve their application performance.',
      lessons: 'Teaching complex topics forces a deeper understanding of the underlying mechanics than just writing the code.',
      relatedTechnologies: ['React', 'Performance Profiling', 'Technical Writing'],
    }
  }
];

export const HERO_CONTENT = {
  name: 'Favas M',
  role: 'Software Engineer & Security Researcher',
  specialization: 'AI • Blockchain • Cybersecurity Enthusiast',
  college: 'NSS College of Engineering, Palakkad',
  year: '2024-2028',
  tagline: 'I build reliable software and secure distributed systems. My focus is on writing clean, maintainable code and solving complex architectural challenges.',
  ctaPrimary: 'View Projects',
  ctaSecondary: 'Download Resume',
  ctaTertiary: 'Contact Me',
  avatarUrl: 'https://raw.githubusercontent.com/favas7907/Personal/main/FavasM.jpg',
};

export const ABOUT_CONTENT = {
  title: 'About Me',
  description: 'I am a passionate B.Tech Computer Science student specializing in building scalable, secure, and intelligent digital solutions. My focus areas include Full Stack Development, AI, Blockchain, and Cybersecurity. Connecting design with clean code, I strive for digital perfection.',
  highlights: [
    'Full Stack Development',
    'AI Enthusiast',
    'Blockchain',
    'Cybersecurity'
  ],
};

export const EDUCATION = [
  {
    institution: 'B.Tech in Computer Science',
    degree: 'Bachelor of Technology',
    period: '2024 - 2028',
    details: 'Focusing on core CS concepts including DSA, DBMS, OS, and Networking. Actively involved in technical clubs and research projects.',
    icon: GraduationCap
  },
  {
    institution: 'Higher Secondary Education',
    degree: 'Science & Mathematics',
    period: '2022 - 2024',
    details: 'Strong foundation in Physics, Chemistry, and Mathematics with a focus on logical reasoning and problem solving.',
    icon: BookOpen
  }
];

export const SKILLS = [
  {
    category: 'Languages',
    icon: Code2,
    items: ['C++', 'Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'Express', 'Django', 'Flask', 'GraphQL'],
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    category: 'CS Concepts',
    icon: Cpu,
    items: ['DSA', 'OOPs', 'Operating Systems', 'DBMS', 'Computer Networks'],
  },
  {
    category: 'Tools & DevOps',
    icon: Terminal,
    items: ['Git', 'Docker', 'AWS', 'Linux', 'Postman'],
  }
];


export const PROJECTS: Project[] = [
  {
    id: 'securevault',
    title: 'SecureVault',
    tagline: 'Zero-knowledge credential management.',
    description: 'Architecting a cryptographic vault ensuring credentials remain mathematically inaccessible to the server, protecting users even in the event of a complete database breach.',
    engineeringHighlight: 'Zero-knowledge cryptography and Web Worker offloading',
    outcome: 'Reduced main thread blocking time from 350ms to 0ms.',
    caseStudyPreview: ['Architecture', 'Zero-Knowledge Cryptography', 'Multi-Device Sync', 'Web Worker Offloading'],
    tech: ['React', 'Node.js', 'Web Crypto API', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://picsum.photos/seed/vault/1200/800',
    featured: true,
    domain: 'AI & Machine Learning',
    status: 'Production',
    year: '2024',
    role: 'Lead Security Architect',
    timeline: '3 Months',
    details: {
      overview: 'SecureVault is a state-of-the-art credential management system designed around zero-knowledge architecture. It ensures that neither the service provider nor malicious actors can access user secrets, relying entirely on client-side encryption before any data touches the network.',
      problem: 'Traditional password storage relies on server-side hashing, which, while secure against basic attacks, remains vulnerable to sophisticated database breaches and insider threats. Users lack a solution where their credentials are mathematically inaccessible to the host platform.',
      goals: [
        'Implement true zero-knowledge architecture',
        'Support Multi-Factor Authentication (MFA)',
        'Ensure seamless cross-device synchronization without compromising keys',
        'Achieve sub-second encryption/decryption cycles'
      ],
      architecture: {
      overview: 'The system utilizes the Web Crypto API for client-side AES-GCM encryption. The backend acts strictly as a dumb data store, having zero knowledge of the encryption keys or plaintext data.',
      client: 'React SPA handling PBKDF2 key derivation and AES-GCM encryption entirely in-memory using the Web Crypto API. Private keys are never committed to localStorage.',
      server: 'Node.js/Express REST API that only accepts and serves encrypted binary blobs and zero-knowledge proofs for authentication.',
      database: 'MongoDB configured for high-throughput binary storage. Flexible schema allows for varying encrypted vault item structures without database migrations.',
      authentication: 'Zero-Knowledge Proofs (Secure Remote Password protocol) used for authentication. Multi-Factor Authentication via TOTP adds a second layer before the encrypted blob is released.',
      state: 'React Context with strict memory wiping on logout. Encryption keys are kept in closures and never exposed to the Redux/Context global window scope.',
      deployment: 'Dockerized microservices deployed on AWS Fargate. TLS 1.3 mandated for all transit. Ephemeral instances to ensure memory is wiped on termination.',
      requestLifecycle: 'User authenticates -> Key derived locally -> Encrypted blob requested from API -> Blob decrypted locally -> Changes made -> Re-encrypted -> Synced back to API.',
      performance: 'Cryptographic operations offloaded to Web Workers to prevent UI thread blocking. Vault chunks are lazily decrypted upon scrolling.',
      scalability: 'Stateless backend architecture allows infinite horizontal scaling. MongoDB sharded by user geographic region to ensure compliance and low latency.',
      security: 'Zero-knowledge model ensures no plaintext data touches the network. Content Security Policy (CSP) strictly prohibits inline scripts and external data exfiltration.',
      apiDesign: 'RESTful endpoints strictly authenticated via SRP. Rate-limited to 10 requests per minute for login routes. Responses standardized to a custom JSON envelope with deterministic error codes.',
      externalIntegrations: 'Twilio API for optional SMS-based 2FA recovery, and AWS KMS for envelope encryption of backup keys. Integrations are isolated in separate microservices to minimize the blast radius.',
      engineeringSummary: 'SecureVault demonstrates that high-grade cryptography can be implemented in the browser without sacrificing user experience. The architecture prioritizes data privacy above all, accepting the trade-off of thicker client-side processing.'
    },
      development: [
        { phase: 'Discovery', title: 'The Master Password Problem', description: 'Investigated existing credential managers. Identified that reliance on server-side hashing still leaves databases vulnerable to offline brute-force attacks if exfiltrated.', impact: 'Defined the core constraint: the server must never receive plaintext passwords.' },
        { phase: 'Planning', title: 'Zero-Knowledge Cryptography', description: 'Defined the core constraint: the server must never receive plaintext passwords. Selected AES-GCM for encryption and PBKDF2 for key derivation based on Web Crypto API capabilities.' },
        { phase: 'Prototype', title: 'Headless Encryption Core', description: 'Built the cryptographic module independently of any UI. Verified encryption and decryption cycles locally, ensuring keys were strictly scoped to memory and wiped explicitly.' },
        { phase: 'First Sprint', title: 'Client-Server Handshake', description: 'Integrated the crypto core with the Node.js backend. Implemented the Secure Remote Password (SRP) protocol to allow the server to authenticate the user without ever transmitting the master password.' },
        { phase: 'Iteration', title: 'Multi-Device Sync', description: 'Encountered the challenge of syncing vaults across devices without sharing the master key. Implemented RSA-OAEP public/private key pairs per device to securely wrap and share the symmetric vault key.' },
        { phase: 'Performance', title: 'Web Worker Offloading', description: 'Heavy PBKDF2 iterations were blocking the main thread, causing UI freezes. Refactored the cryptography module to run inside Web Workers, keeping the interface fluid.', commitCount: 42, techNotes: 'Migrated 600k iterations of PBKDF2 to a dedicated Web Worker, reducing main thread blocking time from 350ms to 0ms.' },
        { phase: 'Deployment', title: 'Immutable Infrastructure', description: 'Deployed the stateless backend via Docker to AWS Fargate. Configured ephemeral containers to ensure that even if a memory dump was attempted, containers could be rotated safely.', techNotes: 'Implemented automated CI/CD pipeline using GitHub Actions to deploy to AWS ECR and Fargate.' }
      ],
      engineeringDecisions: [
        {
          title: 'Cross-Device Key Synchronization',
          problem: 'How to securely sync encrypted vault data across multiple user devices without ever transmitting the plaintext master key to the server.',
          context: 'Users need to access their encrypted vault across multiple devices (phone, laptop) without transmitting the unencrypted master password to the server. The entire value proposition relies on mathematical impossibility of server-side decryption.',
          requirements: [
            'Server must never possess the raw symmetric key',
            'Devices must be able to sync seamlessly after initial setup',
            'Must not require manual passphrase entry for every single sync event'
          ],
          constraints: [
            'Web Crypto API support across target browsers',
            'No native code execution (browser environment only)',
            'Strict zero-knowledge architecture'
          ],
          alternatives: [
            {
              name: 'Centralized Key Escrow',
              description: 'Store a backup of the master key on the server, encrypted by a secondary recovery password.',
              pros: ['Simplifies multi-device access', 'Easier account recovery'],
              cons: ['Creates a high-value target for attackers', 'Violates strict zero-knowledge constraints'],
            },
            {
              name: 'Manual Key Transfer (QR Code)',
              description: 'Require users to scan a QR code from a trusted device to provision a new one.',
              pros: ['Zero network transmission of keys', 'Highly secure air-gapped exchange'],
              cons: ['Extremely high friction UX', 'Requires access to the original device during setup'],
            }
          ],
          evaluation: 'Centralized Key Escrow violated the fundamental zero-knowledge premise. Manual Key Transfer was too high friction for the average user, likely leading to abandonment. Asymmetric cryptography offered a middle ground: secure automated exchange that preserved zero-knowledge constraints.',
          chosenSolution: 'Asymmetric Public-Key Cryptography (RSA-OAEP) for device provisioning.',
          justification: 'When a new device is registered, it generates an RSA key pair. An existing trusted device retrieves the new public key, encrypts the symmetric vault key with it, and pushes the wrapped key to the server. The new device then unwraps it locally.',
          tradeOffs: [
            'Requires at least one trusted device to be online to approve new logins initially.',
            'Increases cryptographic complexity and edge cases during state synchronization.',
            'Users who lose all devices permanently lose vault access.'
          ],
          implementation: 'Implemented using Web Crypto API. The RSA-OAEP keys are stored in IndexedDB (non-exportable) while the symmetric key is kept strictly in-memory during session lifetime.',
          outcome: 'Successfully enabled multi-device syncing while mathematically guaranteeing the server never accesses the raw symmetric key. The authentication flow remained smooth for subsequent logins.',
          futureImprovements: 'Investigate WebAuthn and passkeys to replace the initial master password derivation entirely, relying solely on hardware-backed secure enclaves.',
          reflection: 'Security is a constant battle against convenience. By automating the asymmetric key exchange in the background, we maintained a zero-knowledge architecture without forcing users to manually manage raw keys.'
        },
        {
          title: 'Main Thread UI Blocking during Encryption',
          context: 'Deriving the AES key from the master password using PBKDF2 (600,000 iterations) was taking ~350ms, causing the React UI to freeze entirely and drop frames during login.',
          alternatives: [
            {
              name: 'Reduce PBKDF2 Iterations',
              description: 'Lower the iteration count to 100,000 to bring derivation time under 50ms.',
              pros: ['Instant UI response', 'No complex architectural changes needed'],
              cons: ['Significantly reduces resistance to offline brute-force attacks', 'Fails to meet modern NIST recommendations'],
            },
            {
              name: 'React Concurrent Mode Transitions',
              description: 'Use React.startTransition to yield to the browser during processing.',
              pros: ['Keeps UI responsive without external APIs'],
              cons: ['Synchronous crypto operations still block the JS event loop regardless of React state batching'],
            }
          ],
          chosenSolution: 'Offloading Cryptography to Web Workers.',
          justification: 'By moving the Web Crypto API calls into a dedicated background Web Worker, the main UI thread remains completely unblocked. We can show a smooth loading animation while the worker crunches the math.',
          tradeOffs: [
            'Increases bundle size slightly with worker entry files.',
            'Adds asynchronous messaging overhead (postMessage) between the main thread and the worker.',
            'Makes error handling and state synchronization more complex.'
          ],
          outcome: 'Achieved a consistent 60fps UI experience during heavy cryptographic operations. The subjective login time felt faster to users due to the smooth loading animations.',
          reflection: 'This challenge reinforced the importance of understanding browser event loops. React optimizations cannot fix synchronous JavaScript blocking; architecture must adapt to the platform.'
        }
      ],
      results: {
        keyOutcomes: [
          'Achieved true zero-knowledge encryption architecture.',
          'Eliminated server-side liability for plaintext passwords.',
          'Maintained fluid 60fps UI during heavy cryptographic operations.'
        ],
        performanceMetrics: [
          { label: 'Login/Decryption Time', value: '< 400ms', context: 'Average on modern mobile devices', trend: 'down' },
          { label: 'Main Thread Blocking', value: '0ms', context: 'Down from 350ms by utilizing Web Workers', trend: 'down' },
          { label: 'Bundle Size (Crypto)', value: '42kb', context: 'Gzipped, excluding UI components', trend: 'down' }
        ],
        reliabilityMetrics: [
          { label: 'Uptime', value: '99.99%', context: 'Over a 6-month beta period', trend: 'up' },
          { label: 'Encryption Failures', value: '0', context: 'Zero corrupted vaults reported', trend: 'neutral' }
        ],
        testingAndQuality: 'Achieved 95% unit test coverage for the cryptographic module. CI/CD pipeline enforces static analysis and requires simulated red-team attacks to pass before deployment.',
        scalabilityValidation: 'Stateless backend deployed to AWS Fargate auto-scales based on CPU utilization, capable of handling 10,000 concurrent login attempts.',
        businessImpact: 'Significantly reduced compliance overhead and liability risk by ensuring no plaintext PII or passwords ever reach the infrastructure.',
        engineeringImpact: 'Established a reusable pattern for offloading heavy Web Crypto API operations to Web Workers, which has been adopted in two subsequent internal projects.',
        conclusion: 'SecureVault proves that uncompromising security does not require sacrificing user experience. By shifting the processing burden to the client intelligently, we protected user privacy mathematically.'
      },
      future: 'In the future, I plan to implement passkey support (WebAuthn) to eliminate the reliance on master passwords entirely, moving towards a hardware-backed security model. Additionally, migrating the cryptographic operations to WebAssembly could further reduce decryption times by ~30%.',
      lessons: 'This project underscored the complexities of applied cryptography in the browser. I learned that security is not just about the algorithms used, but the entire lifecycle of the key management process, from memory allocation to secure transmission.'
    }
  },
  {
    id: 'ecotrack',
    title: 'EcoTrack',
    tagline: 'High-frequency telemetry dashboard.',
    description: 'Visualizing thousands of environmental data points in real-time. Bypassing DOM limitations to deliver 60fps rendering for climate researchers.',
    engineeringHighlight: '60fps Canvas API rendering pipeline',
    outcome: 'Maintained 60fps rendering 50,000+ telemetry nodes.',
    caseStudyPreview: ['Data Decimation', 'Canvas Rendering Engine', 'High-Availability Cluster'],
    tech: ['TypeScript', 'D3.js', 'Express', 'InfluxDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://picsum.photos/seed/eco/1200/800',
    featured: false,
    domain: 'Developer Tools & Utilities',
    status: 'Research',
    year: '2023',
    role: 'Full Stack Engineer',
    timeline: '2 Months',
    details: {
      overview: 'EcoTrack is a robust telemetry visualization platform built for IoT networks. It aggregates thousands of data points per minute from distributed environmental sensors, presenting them in a responsive, actionable dashboard.',
      problem: 'Fragmented environmental data from disparate IoT devices makes it difficult for researchers and organizations to detect anomalies or trends in real time. Existing dashboards were either too slow or lacked the necessary visualization depth.',
      goals: [
        'Handle high-frequency time-series data streams',
        'Provide sub-second visualization updates',
        'Ensure the UI remains responsive under heavy data loads',
        'Implement robust alerting mechanisms'
      ],
      architecture: {
      overview: 'A hybrid streaming architecture prioritizing high-throughput ingestion and hardware-accelerated client-side rendering. Optimized for high-frequency time-series telemetry.',
      client: 'React UI shell for routing and state, paired with D3.js and HTML5 Canvas API for raw rendering performance, offloading JSON parsing to Web Workers.',
      server: 'Express.js backend utilizing Node.js Streams to process and compress high-volume MQTT data from IoT gateways before piping to the client via WebSockets.',
      database: 'InfluxDB optimized for time-series data, enabling sub-second aggregation queries over millions of telemetry rows.',
      authentication: 'JWT-based session management for users, and strictly scoped mTLS certificates for IoT devices connecting to the ingestion gateway.',
      state: 'Zustand for global UI state, while the heavy time-series data array is held in a mutable Ref to prevent React re-rendering bottlenecks.',
      deployment: 'Kubernetes cluster ensuring high availability. Node instances scaled horizontally based on active WebSocket connections and ingestion queue depth.',
      requestLifecycle: 'IoT Sensor emits MQTT -> Ingestion Service validates -> Time-series DB writes -> WebSocket Server broadcasts -> Canvas re-renders data frame.',
      performance: 'Canvas API allows 60fps rendering of 50,000+ nodes. Binary data payloads reduce network transfer by 60% compared to standard JSON.',
      scalability: 'Data decimation algorithms implemented at the edge gateway to drop redundant readings. InfluxDB handles high-throughput write streams independently of the query layer.',
      security: 'IoT gateways authenticated via mTLS. Data ingestion endpoints are segregated from client query APIs on the internal network.',
      apiDesign: 'WebSockets for real-time streaming to the dashboard. GraphQL used for historical data queries, allowing clients to specify precise time ranges and data resolution, preventing over-fetching.',
      externalIntegrations: 'Integrated with the OpenWeatherMap API to correlate internal temperature sensor readings with external weather conditions. Data is cached in Redis for 15 minutes.',
      engineeringSummary: 'EcoTrack highlights the importance of choosing the right tool for the job. By bypassing the DOM and utilizing Canvas API paired with a time-series database, we achieved sub-second latency on massive datasets.'
    },
      development: [
        { phase: 'Discovery', title: 'Telemetry Overload', description: 'Observed researchers struggling to visualize high-frequency sensor data. Existing dashboards crashed or lagged when rendering more than a few thousand points.' },
        { phase: 'Architecture Design', title: 'Bypassing the DOM', description: 'Prototyped SVG vs Canvas rendering. Concluded that an HTML5 Canvas approach, driven by D3.js math, was the only viable path to achieve 60fps with 50,000+ nodes.', techNotes: 'Compared Recharts (SVG) rendering 5k nodes (12fps) vs Canvas API rendering 50k nodes (60fps).' },
        { phase: 'First Sprint', title: 'Ingestion Pipeline', description: 'Built an Express backend with InfluxDB to handle the high-throughput write stream from MQTT sensors. Established a WebSocket connection to stream compressed binary payloads.' },
        { phase: 'Core Features', title: 'Canvas Rendering Engine', description: 'Developed the frontend charting layer. Separated the D3 scale calculations from the actual Canvas drawing loop to maximize frame rates during real-time data ingestion.' },
        { phase: 'Iteration', title: 'Interaction Model', description: 'Canvas lacks native DOM events. Solved hover states by rendering a hidden "hit canvas" with unique color mappings, correlating cursor position to specific data points.', commitCount: 18, impact: 'Restored tooltips and hover interactions without sacrificing the rendering speed of the Canvas API.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200', imageAlt: 'Canvas interaction rendering visualization' },
        { phase: 'Performance', title: 'Data Decimation', description: 'Even with Canvas, rendering every micro-fluctuation was redundant. Implemented edge-gateway data decimation and LTTB (Largest Triangle Three Buckets) downsampling on the server.' },
        { phase: 'Deployment', title: 'High-Availability Cluster', description: 'Deployed to a Kubernetes cluster. Scaled Node.js WebSocket gateways horizontally based on active connections, backed by a persistent InfluxDB volume.' }
      ],
      engineeringDecisions: [
        {
          title: 'High-Density Telemetry Rendering',
          context: 'The dashboard needed to visualize over 50,000 data points (temperature, humidity, pressure) simultaneously without crashing the browser or dropping below 30fps.',
          alternatives: [
            {
              name: 'SVG-based Charting (Recharts/D3)',
              description: 'Render each data point as an SVG element in the DOM.',
              pros: ['Native DOM events (hover, click)', 'Easy to style with CSS', 'Familiar React ecosystem integration'],
              cons: ['Massive memory overhead', 'Browser rendering pipeline bottlenecks around 5,000 nodes', 'Garbage collection stutters'],
            },
            {
              name: 'WebGL (Deck.gl)',
              description: 'Use the GPU to render data points via WebGL shaders.',
              pros: ['Virtually unlimited rendering performance', 'Capable of millions of points'],
              cons: ['Extremely steep learning curve', 'Overkill for 2D line/scatter charts', 'Large bundle size footprint'],
            }
          ],
          chosenSolution: 'HTML5 Canvas driven by D3.js Math.',
          justification: 'Canvas writes pixels directly to a bitmap, bypassing the DOM entirely. We used D3.js strictly for its scale and axis math, and wrote a custom Canvas rendering loop. This hits the sweet spot between performance and maintainability.',
          tradeOffs: [
            'Lost native DOM event listeners; hovering requires custom coordinate mapping.',
            'Cannot use standard CSS for styling data points.',
            'Accessibility requires manually maintaining a hidden semantic table or ARIA live regions.'
          ],
          outcome: 'Consistently hit 60fps rendering 50k+ nodes on mid-range laptops. Memory usage dropped by 70% compared to the SVG prototype.',
          reflection: 'Abstracting the "math" from the "rendering" was a breakthrough. D3 is often thought of as a DOM manipulation library, but using it purely as a mathematical engine paired with Canvas unlocked immense performance.'
        },
        {
          title: 'Real-time Data Ingestion Payload Size',
          context: 'Sensors were emitting JSON payloads via MQTT every 100ms. Pushing raw JSON through WebSockets to 1,000+ connected dashboard clients saturated the network bandwidth.',
          alternatives: [
            {
              name: 'Client-side Polling',
              description: 'Clients fetch historical data in batches every 5 seconds via REST.',
              pros: ['Reduces concurrent connection overhead', 'Highly cacheable'],
              cons: ['Fails the "real-time" requirement', 'Large burst payloads still strain the network'],
            }
          ],
          chosenSolution: 'Custom Binary Format over WebSockets (ArrayBuffer).',
          justification: 'JSON is verbose due to repeated keys and string representations of numbers. We converted the telemetry data into a packed binary format (Float32Array) before broadcasting via WebSockets.',
          tradeOffs: [
            'Debugging network payloads became significantly harder (requires custom decoding tools).',
            'Increased CPU usage on the server to pack the binary buffers.',
            'Requires strict versioning of the binary schema; if the struct changes, clients break.'
          ],
          outcome: 'Network payload size was reduced by 65%. The WebSocket connections stabilized, and client-side parsing (which was previously blocking the main thread parsing large JSON strings) became nearly instantaneous.',
          reflection: 'Sometimes returning to lower-level computing concepts (binary structs) is the only way to break through modern abstraction bottlenecks.'
        }
      ],
      results: {
        keyOutcomes: [
          'Eliminated browser crashes caused by excessive DOM nodes.',
          'Reduced network bandwidth saturation during high-frequency ingestion.',
          'Successfully deployed across 3 remote research facilities.'
        ],
        performanceMetrics: [
          { label: 'Rendering Frame Rate', value: '60fps', context: 'Locked frame rate rendering 50,000+ nodes', trend: 'up' },
          { label: 'Network Bandwidth', value: '-65%', context: 'Reduction via custom binary WebSocket payloads', trend: 'down' },
          { label: 'Memory Usage', value: '-70%', context: 'Compared to the initial SVG-based prototype', trend: 'down' }
        ],
        reliabilityMetrics: [
          { label: 'Telemetry Events', value: '2M+', context: 'Processed daily without data loss', trend: 'up' },
          { label: 'WebSocket Stability', value: '99.9%', context: 'Connection uptime with automatic backoff reconnection', trend: 'up' }
        ],
        testingAndQuality: 'End-to-end testing suite simulates 1,000 concurrent IoT devices pushing malformed and valid data to ensure ingestion pipeline resilience. UI rendering performance is profiled continuously in CI.',
        scalabilityValidation: 'Kubernetes deployment scales Node.js WebSocket gateways horizontally. Tested successfully to 15,000 concurrent sensor connections before requiring database sharding.',
        businessImpact: 'Enabled researchers to visualize anomalies in real-time without exporting data to offline tools, saving an average of 4 hours per week in data processing time.',
        engineeringImpact: 'Demonstrated the viability of HTML5 Canvas for enterprise data visualization, establishing a new internal standard for high-density dashboards.',
        conclusion: 'EcoTrack transformed a technical bottleneck into a competitive advantage, proving that understanding the browser rendering pipeline is just as critical as optimizing the backend.'
      },
      future: 'Future iterations will explore WebGL (via Deck.gl or Three.js) for handling 100,000+ data points and adding 3D geospatial visualizations. I also plan to implement edge-computing data aggregation to reduce the volume of data transmitted from the sensors to the cloud.',
      lessons: 'Working with high-frequency data taught me the limits of the DOM and the importance of pushing data aggregation and sampling to the backend database layer rather than relying entirely on client-side processing.'
    }
  },
  {
    id: 'devconnect',
    title: 'DevConnect',
    tagline: 'Skill-based open-source matching.',
    description: 'Connecting early-career developers with maintainers through a normalized skill graph, bridging complex relational queries with real-time state synchronization.',
    engineeringHighlight: 'Real-time WebSocket state synchronization',
    outcome: 'Eliminated hydration errors via deferred client-side state injection.',
    caseStudyPreview: ['Hybrid Architecture', 'Real-Time Synchronization', 'Edge Caching'],
    tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'GraphQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://picsum.photos/seed/dev/1200/800',
    featured: true,
    domain: 'Production Applications',
    status: 'Open Source',
    year: '2024',
    role: 'Frontend Architect',
    timeline: '4 Months',
    details: {
      overview: 'DevConnect is an intelligent platform designed to bridge the gap between open-source project maintainers and developers looking to contribute. It uses skill-based matching algorithms and provides real-time collaboration spaces.',
      problem: 'Open-source collaboration is often siloed. Maintainers struggle to find contributors with specific tech stacks, while new developers are overwhelmed by where to start. There was no dedicated, seamless matching ecosystem.',
      goals: [
        'Build a real-time messaging and notification engine',
        'Implement an efficient GraphQL API for complex relational queries',
        'Design an intuitive, fast, and accessible user interface',
        'Ensure highly secure user authentication and data privacy'
      ],
      architecture: {
      overview: 'A dual-backend architecture marrying the SEO and relational querying strengths of a Next.js/GraphQL stack with the real-time, high-concurrency capabilities of Firebase.',
      client: 'Next.js application utilizing Server-Side Rendering (SSR) for public profiles, paired with Apollo Client for complex graph queries and local caching.',
      server: 'Apollo GraphQL Server acting as an API Gateway, resolving relational queries efficiently to prevent N+1 issues and minimizing payload sizes.',
      database: 'PostgreSQL for highly structured relational data (Users, Projects, Skills) and Firebase Realtime Database exclusively for the ephemeral chat and presence layer.',
      authentication: 'Firebase Authentication handling OAuth (GitHub/Google) and issuing JWTs, which are verified by the GraphQL middleware for protected mutations.',
      state: 'Apollo Client normalized cache for structured relational data, reducing redundant network requests. React Context for real-time Firebase connection status.',
      deployment: 'Vercel for the Next.js frontend/BFF to leverage Edge caching. PostgreSQL hosted on a managed AWS RDS instance with automated daily snapshots.',
      requestLifecycle: 'User searches -> GraphQL resolves relational query -> UI updates. Chat initiates -> Firebase listener opens -> Real-time sync commences.',
      performance: 'Next.js Edge Caching serves static profiles instantly. Apollo Normalized Cache prevents duplicate network requests for overlapping queries.',
      scalability: 'GraphQL BFF insulates the database from heavy read loads. Firebase handles horizontal chat scaling natively without custom provisioning.',
      security: 'GraphQL schema strictly validates nested query depth to prevent Denial of Service (DoS) attacks. Firebase Security Rules enforce authorization at the document level.',
      apiDesign: 'Apollo GraphQL handles all relational queries. A custom directive (@auth) manages field-level authorization. Mutations return standardized payload objects including success booleans and potential error arrays.',
      externalIntegrations: 'GitHub API integration for automatic repository parsing and contribution history verification. Webhooks listen for repository changes to update user profiles asynchronously.',
      engineeringSummary: 'DevConnect successfully blends the SEO benefits of Server-Side Rendering with the immediate feedback of real-time WebSockets, proving that hybrid architectures can be highly effective when boundaries are clearly defined.'
    },
      development: [
        { phase: 'Project Idea', title: 'Bridging Open Source', description: 'Noticed new developers struggling to find relevant open-source projects, while maintainers lacked contributors. Validated the need for a skill-based, real-time matching platform.' },
        { phase: 'Planning', title: 'Hybrid Architecture', description: 'Determined that SEO was critical for public profiles, necessitating SSR via Next.js. However, the matching and messaging features required real-time state, leading to a dual Firebase/GraphQL backend.' },
        { phase: 'Architecture Design', title: 'GraphQL and Apollo Cache', description: 'Designed a normalized GraphQL schema to handle complex relations (Users, Skills, Projects). Configured Apollo Client to cache requests locally, minimizing redundant network calls.' },
        { phase: 'First Sprint', title: 'Matching Engine', description: 'Implemented the core matching algorithm in PostgreSQL. Rather than basic keyword matching, built a graph-based adjacency model to suggest relevant but unlisted skills.' },
        { phase: 'Core Features', title: 'Real-Time Synchronization', description: 'Integrated Firebase Realtime Database for the chat layer. Faced state synchronization issues between GraphQL and Firebase, resolved by writing custom hooks for optimistic UI updates.' },
        { phase: 'Testing', title: 'Handling Concurrent State', description: 'Stress-tested the chat and matching engine. Discovered hydration mismatches during SSR when injecting Firebase presence state. Deferred real-time listeners to the client-side useEffect layer.', techNotes: 'Implemented a custom useFirebasePresence hook to isolate real-time state from Next.js server rendering.' },
        { phase: 'Deployment', title: 'Edge Caching', description: 'Deployed the Next.js frontend to Vercel to leverage Edge caching for public profiles. The PostgreSQL database was provisioned on AWS RDS with automated snapshots.' }
      ],
      engineeringDecisions: [
        {
          title: 'Relational Graph Queries vs. Real-Time Chat',
          context: 'The platform required complex relational queries (matching users based on multi-depth skill graphs) AND sub-100ms real-time chat capabilities.',
          alternatives: [
            {
              name: 'Monolithic PostgreSQL + WebSockets',
              description: 'Use Postgres for relations, and build a custom WebSocket server (Socket.io) for chat.',
              pros: ['Single source of truth', 'No vendor lock-in'],
              cons: ['High DevOps overhead to scale WebSockets horizontally', 'Requires managing Redis pub/sub for socket scaling'],
            },
            {
              name: 'Firebase Only (NoSQL)',
              description: 'Store everything in Firebase Firestore to handle both relations and real-time seamlessly.',
              pros: ['Extremely fast time-to-market', 'Real-time out of the box'],
              cons: ['NoSQL is inherently bad at deep relational querying', 'Denormalization overhead would be immense for the matching algorithm'],
            }
          ],
          chosenSolution: 'Hybrid Architecture: PostgreSQL/GraphQL for Relations, Firebase Realtime Database for Chat.',
          justification: 'We decoupled the ephemeral, high-frequency chat data from the permanent, highly structured profile data. The GraphQL API handles the complex matching algorithms, while Firebase acts exclusively as a real-time message bus.',
          tradeOffs: [
            'Introduces dual-state complexity (Apollo Cache vs Firebase Listeners).',
            'Requires writing synchronization logic between the two databases when profile states affect chat permissions.',
            'Increases infrastructure complexity with two separate database paradigms.'
          ],
          outcome: 'Achieved the best of both worlds. The matching algorithm could leverage advanced SQL, while the chat scaled effortlessly to thousands of concurrent users without DevOps intervention.',
          reflection: 'Accepting the complexity of a polyglot persistence layer was the right call. Forcing relational data into NoSQL, or forcing a relational DB to act as a high-frequency message bus, would have caused systemic failures later.'
        },
        {
          title: 'Hydration Mismatches with SSR and Real-Time State',
          context: 'Next.js Server-Side Rendering (SSR) was generating HTML based on static database data, but the Firebase client immediately injected real-time presence data (e.g., "Online"), causing React hydration errors.',
          alternatives: [
            {
              name: 'Abandon SSR for Authenticated Routes',
              description: 'Serve a blank shell and let the client fetch all data.',
              pros: ['Eliminates hydration issues completely', 'Simpler mental model'],
              cons: ['Poor perceived loading performance', 'Flashing empty states'],
            }
          ],
          chosenSolution: 'Deferred Client-Side Injection with Two-Pass Rendering.',
          justification: 'The server renders the base UI with placeholder states (e.g., "Offline"). The Firebase listeners are strictly initialized inside a `useEffect` hook, which guarantees they only fire after hydration completes. We accept a minor flicker for correct architecture.',
          tradeOffs: [
            'Users briefly see stale data (offline status) before the real-time connection establishes.',
            'Adds complexity to the component lifecycle.',
            'Requires strict separation of SSR-safe data and client-only data.'
          ],
          outcome: 'Hydration errors were eliminated while preserving the rapid First Contentful Paint (FCP) benefits of Next.js SSR.',
          reflection: 'Modern meta-frameworks blur the line between server and client. Being explicit about WHERE state originates is critical to preventing race conditions and hydration bugs.'
        }
      ],
      results: {
        keyOutcomes: [
          'Validated the hybrid architecture under production load.',
          'Significantly improved match relevance using graph-based adjacency.',
          'Scaled to 5,000 active users in the first month post-launch.'
        ],
        performanceMetrics: [
          { label: 'Chat Latency', value: '< 100ms', context: 'Perceived latency for message delivery', trend: 'down' },
          { label: 'Match Relevance', value: '+40%', context: 'Increase in successful connections vs keyword search', trend: 'up' },
          { label: 'Profile Load Time', value: '< 800ms', context: 'First Contentful Paint for public profiles via Edge caching', trend: 'down' }
        ],
        reliabilityMetrics: [
          { label: 'Messages Delivered', value: '100k+', context: 'Handled with zero dropped payloads', trend: 'up' },
          { label: 'Hydration Errors', value: '0', context: 'Eliminated through deferred client-side state injection', trend: 'down' }
        ],
        testingAndQuality: 'Implemented strict static typing across the stack using GraphQL Code Generator. E2E tests written in Playwright cover all critical paths including authentication, matching, and messaging.',
        scalabilityValidation: 'PostgreSQL database partitioned by active date. Firebase Realtime Database connections remained well within the 200k concurrent limit during peak traffic.',
        businessImpact: 'Created a self-sustaining ecosystem bridging open-source maintainers and contributors, directly resulting in over 300 successful pull requests across various projects.',
        engineeringImpact: 'Created a blueprint for safely mixing server-rendered React (Next.js) with real-time, client-side WebSocket state without sacrificing SEO or user experience.',
        conclusion: 'DevConnect successfully navigated the complexities of real-time state and relational data. By respecting the strengths of different database paradigms, we built a highly responsive, scalable platform.'
      },
      future: 'I intend to migrate the matching engine to a dedicated vector database to allow for semantic searching (e.g., matching "React" with "Next.js" implicitly). Additionally, I plan to move away from Firebase to a custom WebSocket implementation using Socket.io and Redis to reduce vendor lock-in and lower operational costs at scale.',
      lessons: 'I gained deep insights into the trade-offs between REST and GraphQL, particularly around the N+1 query problem, and mastered advanced state synchronization techniques in a highly concurrent user environment.'
    }
  }
  ,{
    id: 'block-vote',
    title: 'BlockVote',
    tagline: 'Decentralized quadratic voting.',
    description: 'Engineering an on-chain governance platform protecting voter anonymity, mathematically preventing whale account manipulation during critical DAO decisions.',
    engineeringHighlight: 'Zero-knowledge proofs and quadratic math',
    outcome: 'Processed 10,000+ simulated votes on testnet with zero-knowledge anonymity.',
    caseStudyPreview: ['Zero-Knowledge Proofs', 'Smart Contract Architecture', 'Quadratic Voting Math'],
    tech: ['Solidity', 'React', 'Ethers.js', 'Hardhat'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://picsum.photos/seed/blockvote/1200/800',
    featured: false,
    year: '2023',
    role: 'Lead Architect',
    timeline: '4 weeks',
    domain: 'Blockchain & Web3',
    status: 'Hackathon',
    details: {
      overview: 'SecureVault is a state-of-the-art credential management system designed around zero-knowledge architecture. It ensures that neither the service provider nor malicious actors can access user secrets, relying entirely on client-side encryption before any data touches the network.',
      problem: 'Traditional password storage relies on server-side hashing, which, while secure against basic attacks, remains vulnerable to sophisticated database breaches and insider threats. Users lack a solution where their credentials are mathematically inaccessible to the host platform.',
      goals: [
        'Implement true zero-knowledge architecture',
        'Support Multi-Factor Authentication (MFA)',
        'Ensure seamless cross-device synchronization without compromising keys',
        'Achieve sub-second encryption/decryption cycles'
      ],
      architecture: {
      overview: 'The system utilizes the Web Crypto API for client-side AES-GCM encryption. The backend acts strictly as a dumb data store, having zero knowledge of the encryption keys or plaintext data.',
      client: 'React SPA handling PBKDF2 key derivation and AES-GCM encryption entirely in-memory using the Web Crypto API. Private keys are never committed to localStorage.',
      server: 'Node.js/Express REST API that only accepts and serves encrypted binary blobs and zero-knowledge proofs for authentication.',
      database: 'MongoDB configured for high-throughput binary storage. Flexible schema allows for varying encrypted vault item structures without database migrations.',
      authentication: 'Zero-Knowledge Proofs (Secure Remote Password protocol) used for authentication. Multi-Factor Authentication via TOTP adds a second layer before the encrypted blob is released.',
      state: 'React Context with strict memory wiping on logout. Encryption keys are kept in closures and never exposed to the Redux/Context global window scope.',
      deployment: 'Dockerized microservices deployed on AWS Fargate. TLS 1.3 mandated for all transit. Ephemeral instances to ensure memory is wiped on termination.',
      requestLifecycle: 'User authenticates -> Key derived locally -> Encrypted blob requested from API -> Blob decrypted locally -> Changes made -> Re-encrypted -> Synced back to API.',
      performance: 'Cryptographic operations offloaded to Web Workers to prevent UI thread blocking. Vault chunks are lazily decrypted upon scrolling.',
      scalability: 'Stateless backend architecture allows infinite horizontal scaling. MongoDB sharded by user geographic region to ensure compliance and low latency.',
      security: 'Zero-knowledge model ensures no plaintext data touches the network. Content Security Policy (CSP) strictly prohibits inline scripts and external data exfiltration.',
      apiDesign: 'RESTful endpoints strictly authenticated via SRP. Rate-limited to 10 requests per minute for login routes. Responses standardized to a custom JSON envelope with deterministic error codes.',
      externalIntegrations: 'Twilio API for optional SMS-based 2FA recovery, and AWS KMS for envelope encryption of backup keys. Integrations are isolated in separate microservices to minimize the blast radius.',
      engineeringSummary: 'SecureVault demonstrates that high-grade cryptography can be implemented in the browser without sacrificing user experience. The architecture prioritizes data privacy above all, accepting the trade-off of thicker client-side processing.'
    },
      development: [
        { phase: 'Discovery', title: 'The Master Password Problem', description: 'Investigated existing credential managers. Identified that reliance on server-side hashing still leaves databases vulnerable to offline brute-force attacks if exfiltrated.', impact: 'Defined the core constraint: the server must never receive plaintext passwords.' },
        { phase: 'Planning', title: 'Zero-Knowledge Cryptography', description: 'Defined the core constraint: the server must never receive plaintext passwords. Selected AES-GCM for encryption and PBKDF2 for key derivation based on Web Crypto API capabilities.' },
        { phase: 'Prototype', title: 'Headless Encryption Core', description: 'Built the cryptographic module independently of any UI. Verified encryption and decryption cycles locally, ensuring keys were strictly scoped to memory and wiped explicitly.' },
        { phase: 'First Sprint', title: 'Client-Server Handshake', description: 'Integrated the crypto core with the Node.js backend. Implemented the Secure Remote Password (SRP) protocol to allow the server to authenticate the user without ever transmitting the master password.' },
        { phase: 'Iteration', title: 'Multi-Device Sync', description: 'Encountered the challenge of syncing vaults across devices without sharing the master key. Implemented RSA-OAEP public/private key pairs per device to securely wrap and share the symmetric vault key.' },
        { phase: 'Performance', title: 'Web Worker Offloading', description: 'Heavy PBKDF2 iterations were blocking the main thread, causing UI freezes. Refactored the cryptography module to run inside Web Workers, keeping the interface fluid.', commitCount: 42, techNotes: 'Migrated 600k iterations of PBKDF2 to a dedicated Web Worker, reducing main thread blocking time from 350ms to 0ms.' },
        { phase: 'Deployment', title: 'Immutable Infrastructure', description: 'Deployed the stateless backend via Docker to AWS Fargate. Configured ephemeral containers to ensure that even if a memory dump was attempted, containers could be rotated safely.', techNotes: 'Implemented automated CI/CD pipeline using GitHub Actions to deploy to AWS ECR and Fargate.' }
      ],
      engineeringDecisions: [
        {
          title: 'Cross-Device Key Synchronization',
          problem: 'How to securely sync encrypted vault data across multiple user devices without ever transmitting the plaintext master key to the server.',
          context: 'Users need to access their encrypted vault across multiple devices (phone, laptop) without transmitting the unencrypted master password to the server. The entire value proposition relies on mathematical impossibility of server-side decryption.',
          requirements: [
            'Server must never possess the raw symmetric key',
            'Devices must be able to sync seamlessly after initial setup',
            'Must not require manual passphrase entry for every single sync event'
          ],
          constraints: [
            'Web Crypto API support across target browsers',
            'No native code execution (browser environment only)',
            'Strict zero-knowledge architecture'
          ],
          alternatives: [
            {
              name: 'Centralized Key Escrow',
              description: 'Store a backup of the master key on the server, encrypted by a secondary recovery password.',
              pros: ['Simplifies multi-device access', 'Easier account recovery'],
              cons: ['Creates a high-value target for attackers', 'Violates strict zero-knowledge constraints'],
            },
            {
              name: 'Manual Key Transfer (QR Code)',
              description: 'Require users to scan a QR code from a trusted device to provision a new one.',
              pros: ['Zero network transmission of keys', 'Highly secure air-gapped exchange'],
              cons: ['Extremely high friction UX', 'Requires access to the original device during setup'],
            }
          ],
          evaluation: 'Centralized Key Escrow violated the fundamental zero-knowledge premise. Manual Key Transfer was too high friction for the average user, likely leading to abandonment. Asymmetric cryptography offered a middle ground: secure automated exchange that preserved zero-knowledge constraints.',
          chosenSolution: 'Asymmetric Public-Key Cryptography (RSA-OAEP) for device provisioning.',
          justification: 'When a new device is registered, it generates an RSA key pair. An existing trusted device retrieves the new public key, encrypts the symmetric vault key with it, and pushes the wrapped key to the server. The new device then unwraps it locally.',
          tradeOffs: [
            'Requires at least one trusted device to be online to approve new logins initially.',
            'Increases cryptographic complexity and edge cases during state synchronization.',
            'Users who lose all devices permanently lose vault access.'
          ],
          implementation: 'Implemented using Web Crypto API. The RSA-OAEP keys are stored in IndexedDB (non-exportable) while the symmetric key is kept strictly in-memory during session lifetime.',
          outcome: 'Successfully enabled multi-device syncing while mathematically guaranteeing the server never accesses the raw symmetric key. The authentication flow remained smooth for subsequent logins.',
          futureImprovements: 'Investigate WebAuthn and passkeys to replace the initial master password derivation entirely, relying solely on hardware-backed secure enclaves.',
          reflection: 'Security is a constant battle against convenience. By automating the asymmetric key exchange in the background, we maintained a zero-knowledge architecture without forcing users to manually manage raw keys.'
        },
        {
          title: 'Main Thread UI Blocking during Encryption',
          context: 'Deriving the AES key from the master password using PBKDF2 (600,000 iterations) was taking ~350ms, causing the React UI to freeze entirely and drop frames during login.',
          alternatives: [
            {
              name: 'Reduce PBKDF2 Iterations',
              description: 'Lower the iteration count to 100,000 to bring derivation time under 50ms.',
              pros: ['Instant UI response', 'No complex architectural changes needed'],
              cons: ['Significantly reduces resistance to offline brute-force attacks', 'Fails to meet modern NIST recommendations'],
            },
            {
              name: 'React Concurrent Mode Transitions',
              description: 'Use React.startTransition to yield to the browser during processing.',
              pros: ['Keeps UI responsive without external APIs'],
              cons: ['Synchronous crypto operations still block the JS event loop regardless of React state batching'],
            }
          ],
          chosenSolution: 'Offloading Cryptography to Web Workers.',
          justification: 'By moving the Web Crypto API calls into a dedicated background Web Worker, the main UI thread remains completely unblocked. We can show a smooth loading animation while the worker crunches the math.',
          tradeOffs: [
            'Increases bundle size slightly with worker entry files.',
            'Adds asynchronous messaging overhead (postMessage) between the main thread and the worker.',
            'Makes error handling and state synchronization more complex.'
          ],
          outcome: 'Achieved a consistent 60fps UI experience during heavy cryptographic operations. The subjective login time felt faster to users due to the smooth loading animations.',
          reflection: 'This challenge reinforced the importance of understanding browser event loops. React optimizations cannot fix synchronous JavaScript blocking; architecture must adapt to the platform.'
        }
      ],
      results: {
        keyOutcomes: [
          'Achieved true zero-knowledge encryption architecture.',
          'Eliminated server-side liability for plaintext passwords.',
          'Maintained fluid 60fps UI during heavy cryptographic operations.'
        ],
        performanceMetrics: [
          { label: 'Login/Decryption Time', value: '< 400ms', context: 'Average on modern mobile devices', trend: 'down' },
          { label: 'Main Thread Blocking', value: '0ms', context: 'Down from 350ms by utilizing Web Workers', trend: 'down' },
          { label: 'Bundle Size (Crypto)', value: '42kb', context: 'Gzipped, excluding UI components', trend: 'down' }
        ],
        reliabilityMetrics: [
          { label: 'Uptime', value: '99.99%', context: 'Over a 6-month beta period', trend: 'up' },
          { label: 'Encryption Failures', value: '0', context: 'Zero corrupted vaults reported', trend: 'neutral' }
        ],
        testingAndQuality: 'Achieved 95% unit test coverage for the cryptographic module. CI/CD pipeline enforces static analysis and requires simulated red-team attacks to pass before deployment.',
        scalabilityValidation: 'Stateless backend deployed to AWS Fargate auto-scales based on CPU utilization, capable of handling 10,000 concurrent login attempts.',
        businessImpact: 'Significantly reduced compliance overhead and liability risk by ensuring no plaintext PII or passwords ever reach the infrastructure.',
        engineeringImpact: 'Established a reusable pattern for offloading heavy Web Crypto API operations to Web Workers, which has been adopted in two subsequent internal projects.',
        conclusion: 'SecureVault proves that uncompromising security does not require sacrificing user experience. By shifting the processing burden to the client intelligently, we protected user privacy mathematically.'
      },
      future: 'In the future, I plan to implement passkey support (WebAuthn) to eliminate the reliance on master passwords entirely, moving towards a hardware-backed security model. Additionally, migrating the cryptographic operations to WebAssembly could further reduce decryption times by ~30%.',
      lessons: 'This project underscored the complexities of applied cryptography in the browser. I learned that security is not just about the algorithms used, but the entire lifecycle of the key management process, from memory allocation to secure transmission.'
    }
  },
  {
    id: 'algo-visualizer',
    title: 'AlgoVis',
    tagline: 'Interactive algorithm rendering engine.',
    description: 'Educational visualization of complex graph and sorting algorithms, demonstrating low-level memory management and rendering loop optimization in the browser.',
    engineeringHighlight: 'Custom WebGL shaders at 60fps',
    caseStudyPreview: ['WebGL Shaders', 'ECS Architecture', 'State Management'],
    tech: ['TypeScript', 'WebGL', 'React', 'Vite'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://picsum.photos/seed/algovis/1200/800',
    featured: false,
    year: '2022',
    role: 'Solo Developer',
    timeline: '3 months',
    domain: 'Research & Experiments',
    status: 'Experimental',
    details: {
      overview: 'SecureVault is a state-of-the-art credential management system designed around zero-knowledge architecture. It ensures that neither the service provider nor malicious actors can access user secrets, relying entirely on client-side encryption before any data touches the network.',
      problem: 'Traditional password storage relies on server-side hashing, which, while secure against basic attacks, remains vulnerable to sophisticated database breaches and insider threats. Users lack a solution where their credentials are mathematically inaccessible to the host platform.',
      goals: [
        'Implement true zero-knowledge architecture',
        'Support Multi-Factor Authentication (MFA)',
        'Ensure seamless cross-device synchronization without compromising keys',
        'Achieve sub-second encryption/decryption cycles'
      ],
      architecture: {
      overview: 'The system utilizes the Web Crypto API for client-side AES-GCM encryption. The backend acts strictly as a dumb data store, having zero knowledge of the encryption keys or plaintext data.',
      client: 'React SPA handling PBKDF2 key derivation and AES-GCM encryption entirely in-memory using the Web Crypto API. Private keys are never committed to localStorage.',
      server: 'Node.js/Express REST API that only accepts and serves encrypted binary blobs and zero-knowledge proofs for authentication.',
      database: 'MongoDB configured for high-throughput binary storage. Flexible schema allows for varying encrypted vault item structures without database migrations.',
      authentication: 'Zero-Knowledge Proofs (Secure Remote Password protocol) used for authentication. Multi-Factor Authentication via TOTP adds a second layer before the encrypted blob is released.',
      state: 'React Context with strict memory wiping on logout. Encryption keys are kept in closures and never exposed to the Redux/Context global window scope.',
      deployment: 'Dockerized microservices deployed on AWS Fargate. TLS 1.3 mandated for all transit. Ephemeral instances to ensure memory is wiped on termination.',
      requestLifecycle: 'User authenticates -> Key derived locally -> Encrypted blob requested from API -> Blob decrypted locally -> Changes made -> Re-encrypted -> Synced back to API.',
      performance: 'Cryptographic operations offloaded to Web Workers to prevent UI thread blocking. Vault chunks are lazily decrypted upon scrolling.',
      scalability: 'Stateless backend architecture allows infinite horizontal scaling. MongoDB sharded by user geographic region to ensure compliance and low latency.',
      security: 'Zero-knowledge model ensures no plaintext data touches the network. Content Security Policy (CSP) strictly prohibits inline scripts and external data exfiltration.',
      apiDesign: 'RESTful endpoints strictly authenticated via SRP. Rate-limited to 10 requests per minute for login routes. Responses standardized to a custom JSON envelope with deterministic error codes.',
      externalIntegrations: 'Twilio API for optional SMS-based 2FA recovery, and AWS KMS for envelope encryption of backup keys. Integrations are isolated in separate microservices to minimize the blast radius.',
      engineeringSummary: 'SecureVault demonstrates that high-grade cryptography can be implemented in the browser without sacrificing user experience. The architecture prioritizes data privacy above all, accepting the trade-off of thicker client-side processing.'
    },
      development: [
        { phase: 'Discovery', title: 'The Master Password Problem', description: 'Investigated existing credential managers. Identified that reliance on server-side hashing still leaves databases vulnerable to offline brute-force attacks if exfiltrated.', impact: 'Defined the core constraint: the server must never receive plaintext passwords.' },
        { phase: 'Planning', title: 'Zero-Knowledge Cryptography', description: 'Defined the core constraint: the server must never receive plaintext passwords. Selected AES-GCM for encryption and PBKDF2 for key derivation based on Web Crypto API capabilities.' },
        { phase: 'Prototype', title: 'Headless Encryption Core', description: 'Built the cryptographic module independently of any UI. Verified encryption and decryption cycles locally, ensuring keys were strictly scoped to memory and wiped explicitly.' },
        { phase: 'First Sprint', title: 'Client-Server Handshake', description: 'Integrated the crypto core with the Node.js backend. Implemented the Secure Remote Password (SRP) protocol to allow the server to authenticate the user without ever transmitting the master password.' },
        { phase: 'Iteration', title: 'Multi-Device Sync', description: 'Encountered the challenge of syncing vaults across devices without sharing the master key. Implemented RSA-OAEP public/private key pairs per device to securely wrap and share the symmetric vault key.' },
        { phase: 'Performance', title: 'Web Worker Offloading', description: 'Heavy PBKDF2 iterations were blocking the main thread, causing UI freezes. Refactored the cryptography module to run inside Web Workers, keeping the interface fluid.', commitCount: 42, techNotes: 'Migrated 600k iterations of PBKDF2 to a dedicated Web Worker, reducing main thread blocking time from 350ms to 0ms.' },
        { phase: 'Deployment', title: 'Immutable Infrastructure', description: 'Deployed the stateless backend via Docker to AWS Fargate. Configured ephemeral containers to ensure that even if a memory dump was attempted, containers could be rotated safely.', techNotes: 'Implemented automated CI/CD pipeline using GitHub Actions to deploy to AWS ECR and Fargate.' }
      ],
      engineeringDecisions: [
        {
          title: 'Cross-Device Key Synchronization',
          problem: 'How to securely sync encrypted vault data across multiple user devices without ever transmitting the plaintext master key to the server.',
          context: 'Users need to access their encrypted vault across multiple devices (phone, laptop) without transmitting the unencrypted master password to the server. The entire value proposition relies on mathematical impossibility of server-side decryption.',
          requirements: [
            'Server must never possess the raw symmetric key',
            'Devices must be able to sync seamlessly after initial setup',
            'Must not require manual passphrase entry for every single sync event'
          ],
          constraints: [
            'Web Crypto API support across target browsers',
            'No native code execution (browser environment only)',
            'Strict zero-knowledge architecture'
          ],
          alternatives: [
            {
              name: 'Centralized Key Escrow',
              description: 'Store a backup of the master key on the server, encrypted by a secondary recovery password.',
              pros: ['Simplifies multi-device access', 'Easier account recovery'],
              cons: ['Creates a high-value target for attackers', 'Violates strict zero-knowledge constraints'],
            },
            {
              name: 'Manual Key Transfer (QR Code)',
              description: 'Require users to scan a QR code from a trusted device to provision a new one.',
              pros: ['Zero network transmission of keys', 'Highly secure air-gapped exchange'],
              cons: ['Extremely high friction UX', 'Requires access to the original device during setup'],
            }
          ],
          evaluation: 'Centralized Key Escrow violated the fundamental zero-knowledge premise. Manual Key Transfer was too high friction for the average user, likely leading to abandonment. Asymmetric cryptography offered a middle ground: secure automated exchange that preserved zero-knowledge constraints.',
          chosenSolution: 'Asymmetric Public-Key Cryptography (RSA-OAEP) for device provisioning.',
          justification: 'When a new device is registered, it generates an RSA key pair. An existing trusted device retrieves the new public key, encrypts the symmetric vault key with it, and pushes the wrapped key to the server. The new device then unwraps it locally.',
          tradeOffs: [
            'Requires at least one trusted device to be online to approve new logins initially.',
            'Increases cryptographic complexity and edge cases during state synchronization.',
            'Users who lose all devices permanently lose vault access.'
          ],
          implementation: 'Implemented using Web Crypto API. The RSA-OAEP keys are stored in IndexedDB (non-exportable) while the symmetric key is kept strictly in-memory during session lifetime.',
          outcome: 'Successfully enabled multi-device syncing while mathematically guaranteeing the server never accesses the raw symmetric key. The authentication flow remained smooth for subsequent logins.',
          futureImprovements: 'Investigate WebAuthn and passkeys to replace the initial master password derivation entirely, relying solely on hardware-backed secure enclaves.',
          reflection: 'Security is a constant battle against convenience. By automating the asymmetric key exchange in the background, we maintained a zero-knowledge architecture without forcing users to manually manage raw keys.'
        },
        {
          title: 'Main Thread UI Blocking during Encryption',
          context: 'Deriving the AES key from the master password using PBKDF2 (600,000 iterations) was taking ~350ms, causing the React UI to freeze entirely and drop frames during login.',
          alternatives: [
            {
              name: 'Reduce PBKDF2 Iterations',
              description: 'Lower the iteration count to 100,000 to bring derivation time under 50ms.',
              pros: ['Instant UI response', 'No complex architectural changes needed'],
              cons: ['Significantly reduces resistance to offline brute-force attacks', 'Fails to meet modern NIST recommendations'],
            },
            {
              name: 'React Concurrent Mode Transitions',
              description: 'Use React.startTransition to yield to the browser during processing.',
              pros: ['Keeps UI responsive without external APIs'],
              cons: ['Synchronous crypto operations still block the JS event loop regardless of React state batching'],
            }
          ],
          chosenSolution: 'Offloading Cryptography to Web Workers.',
          justification: 'By moving the Web Crypto API calls into a dedicated background Web Worker, the main UI thread remains completely unblocked. We can show a smooth loading animation while the worker crunches the math.',
          tradeOffs: [
            'Increases bundle size slightly with worker entry files.',
            'Adds asynchronous messaging overhead (postMessage) between the main thread and the worker.',
            'Makes error handling and state synchronization more complex.'
          ],
          outcome: 'Achieved a consistent 60fps UI experience during heavy cryptographic operations. The subjective login time felt faster to users due to the smooth loading animations.',
          reflection: 'This challenge reinforced the importance of understanding browser event loops. React optimizations cannot fix synchronous JavaScript blocking; architecture must adapt to the platform.'
        }
      ],
      results: {
        keyOutcomes: [
          'Achieved true zero-knowledge encryption architecture.',
          'Eliminated server-side liability for plaintext passwords.',
          'Maintained fluid 60fps UI during heavy cryptographic operations.'
        ],
        performanceMetrics: [
          { label: 'Login/Decryption Time', value: '< 400ms', context: 'Average on modern mobile devices', trend: 'down' },
          { label: 'Main Thread Blocking', value: '0ms', context: 'Down from 350ms by utilizing Web Workers', trend: 'down' },
          { label: 'Bundle Size (Crypto)', value: '42kb', context: 'Gzipped, excluding UI components', trend: 'down' }
        ],
        reliabilityMetrics: [
          { label: 'Uptime', value: '99.99%', context: 'Over a 6-month beta period', trend: 'up' },
          { label: 'Encryption Failures', value: '0', context: 'Zero corrupted vaults reported', trend: 'neutral' }
        ],
        testingAndQuality: 'Achieved 95% unit test coverage for the cryptographic module. CI/CD pipeline enforces static analysis and requires simulated red-team attacks to pass before deployment.',
        scalabilityValidation: 'Stateless backend deployed to AWS Fargate auto-scales based on CPU utilization, capable of handling 10,000 concurrent login attempts.',
        businessImpact: 'Significantly reduced compliance overhead and liability risk by ensuring no plaintext PII or passwords ever reach the infrastructure.',
        engineeringImpact: 'Established a reusable pattern for offloading heavy Web Crypto API operations to Web Workers, which has been adopted in two subsequent internal projects.',
        conclusion: 'SecureVault proves that uncompromising security does not require sacrificing user experience. By shifting the processing burden to the client intelligently, we protected user privacy mathematically.'
      },
      future: 'In the future, I plan to implement passkey support (WebAuthn) to eliminate the reliance on master passwords entirely, moving towards a hardware-backed security model. Additionally, migrating the cryptographic operations to WebAssembly could further reduce decryption times by ~30%.',
      lessons: 'This project underscored the complexities of applied cryptography in the browser. I learned that security is not just about the algorithms used, but the entire lifecycle of the key management process, from memory allocation to secure transmission.'
    }
  }
];

export const EXPERIENCE = [
  {
    company: 'TechFlow Solutions',
    role: 'Software Engineering Intern',
    period: 'Summer 2024',
    description: 'Assisted in developing a high-traffic e-commerce platform. Optimized frontend performance by 20% using React and micro-frontends.'
  },
  {
    company: 'CyberGuard Inc.',
    role: 'Cybersecurity Trainee',
    period: 'Winter 2023',
    description: 'Conducted vulnerability assessments and penetration testing for internal applications. Learned OWASP Top 10 and network security.'
  }
];


export const CONTACT_INFO = {
  email: 'favasm7907@gmail.com',
  location: 'San Francisco, CA',
  socials: [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Globe, href: 'https://twitter.com' }
  ],
};
import { Achievement } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'global-hackathon-2024',
    title: 'Global Hackathon 2024 Winner',
    category: 'Hackathons',
    date: '2024',
    shortDescription: 'Led a team of four to first place among 200+ global teams by architecting a decentralized voting system.',
    image: 'https://picsum.photos/seed/hackathon/1200/800',
    details: {
      context: 'The Global Web3 Hackathon brings together top engineers from around the world to solve critical governance challenges using decentralized technologies.',
      opportunity: 'We identified a critical flaw in existing DAO voting mechanisms where whale accounts could manipulate outcomes. We saw an opportunity to implement quadratic voting on-chain.',
      challenge: 'Implementing zero-knowledge proofs for voter anonymity while simultaneously executing quadratic math on a highly constrained virtual machine within a 48-hour window.',
      role: 'Lead Architect & Smart Contract Developer',
      responsibilities: [
        'Designed the core system architecture',
        'Implemented the zero-knowledge verification circuits',
        'Led the final pitch presentation to the judging panel'
      ],
      outcome: 'Successfully deployed a working prototype to the testnet, processed 10,000+ simulated votes, and secured 1st place overall.',
      impact: 'The open-source repository was adopted by three major DAOs within two months, fundamentally improving their governance structures.',
      lessons: 'Working under extreme time constraints taught me how to ruthlessly prioritize features. It proved that a well-defined architecture up-front saves hours of debugging later.',
      relatedTechnologies: ['Solidity', 'Zero-Knowledge Proofs', 'React', 'Node.js'],
    }
  },
  {
    id: 'open-source-contributor',
    title: 'Core Contributor - React Native Web',
    category: 'Open Source',
    date: '2023 - Present',
    shortDescription: 'Significant contributions to improving accessibility and cross-platform gesture handling.',
    image: 'https://picsum.photos/seed/opensource/1200/800',
    link: 'https://github.com',
    details: {
      context: 'React Native Web is a critical infrastructure project that allows developers to use React Native components and APIs on the web.',
      opportunity: 'While building a large-scale unified application, I discovered several edge cases in complex gesture handling that were failing across different touch devices.',
      challenge: 'Resolving the issue required deep understanding of both the browser DOM event model and the React Native responder system without introducing breaking changes for millions of existing users.',
      role: 'Open Source Contributor',
      responsibilities: [
        'Diagnosed and reproduced complex touch event bugs',
        'Proposed and implemented a unified event normalization layer',
        'Authored extensive unit and integration tests'
      ],
      outcome: 'My pull requests were merged, directly resolving 15+ long-standing community issues regarding touch responsiveness.',
      impact: 'Improved the touch interaction reliability for thousands of applications relying on the library, significantly enhancing the end-user experience on mobile web.',
      lessons: 'I learned the absolute necessity of rigorous regression testing in foundational open-source projects. Communicating complex technical proposals clearly to maintainers was as important as the code itself.',
      relatedTechnologies: ['React', 'JavaScript', 'DOM Events', 'Jest'],
    }
  },
  {
    id: 'engineering-fellowship',
    title: 'Senior Engineering Fellowship',
    category: 'Leadership',
    date: '2023',
    shortDescription: 'Selected for a highly competitive fellowship focused on advanced distributed systems.',
    image: 'https://picsum.photos/seed/fellowship/1200/800',
    details: {
      context: 'An invite-only, 12-week intensive fellowship gathering 20 engineers globally to study and build distributed systems under the guidance of industry veterans.',
      opportunity: 'An opportunity to transition from building standard web applications to understanding the foundational infrastructure that powers global-scale software.',
      challenge: 'Grasping advanced consensus algorithms (Raft/Paxos) and implementing a distributed key-value store from scratch in a language I was learning concurrently.',
      role: 'Engineering Fellow',
      responsibilities: [
        'Built a fault-tolerant distributed database',
        'Implemented leader election and log replication',
        'Collaborated with peers to test network partition resilience'
      ],
      outcome: 'Successfully built and open-sourced a distributed key-value store capable of surviving node failures without data loss.',
      impact: 'The experience fundamentally shifted my engineering approach, giving me the confidence to design resilient backend architectures for subsequent projects.',
      lessons: 'Distributed systems taught me to embrace failure as an expected state. Building resilient software is not about preventing failure, but ensuring the system gracefully recovers.',
      relatedTechnologies: ['Go', 'Raft Consensus', 'gRPC', 'Distributed Systems'],
    }
  }
];
