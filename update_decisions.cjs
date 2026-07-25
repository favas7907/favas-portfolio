const fs = require('fs');

// Update types.ts
let typesData = fs.readFileSync('src/types.ts', 'utf8');
typesData = typesData.replace('export interface ProjectDetailData {', `export interface EngineeringDecision {
  title: string;
  context: string;
  alternatives: {
    name: string;
    description: string;
    pros: string[];
    cons: string[];
  }[];
  chosenSolution: string;
  justification: string;
  tradeOffs: string[];
  outcome: string;
  reflection: string;
}

export interface ProjectDetailData {`);
typesData = typesData.replace('  challenges: string;', '  engineeringDecisions: EngineeringDecision[];');
typesData = typesData.replace('  technicalDecisions: string;\n  solutions: string;\n', '');
fs.writeFileSync('src/types.ts', typesData);

// Update data.ts
let data = fs.readFileSync('src/constants/data.ts', 'utf8');

const secureVaultDecisions = `engineeringDecisions: [
        {
          title: 'Cross-Device Key Synchronization',
          context: 'Users need to access their encrypted vault across multiple devices (phone, laptop) without transmitting the unencrypted master password to the server.',
          alternatives: [
            {
              name: 'Centralized Key Escrow',
              description: 'Store a backup of the master key on the server, encrypted by a secondary recovery password.',
              pros: ['Simplifies multi-device access', 'Easier account recovery'],
              cons: ['Creates a high-value target for attackers', 'Violates strict zero-knowledge constraints']
            },
            {
              name: 'Manual Key Transfer (QR Code)',
              description: 'Require users to scan a QR code from a trusted device to provision a new one.',
              pros: ['Zero network transmission of keys', 'Highly secure air-gapped exchange'],
              cons: ['Extremely high friction UX', 'Requires access to the original device during setup']
            }
          ],
          chosenSolution: 'Asymmetric Public-Key Cryptography (RSA-OAEP) for device provisioning.',
          justification: 'When a new device is registered, it generates an RSA key pair. An existing trusted device retrieves the new public key, encrypts the symmetric vault key with it, and pushes the wrapped key to the server. The new device then unwraps it locally.',
          tradeOffs: [
            'Requires at least one trusted device to be online to approve new logins initially.',
            'Increases cryptographic complexity and edge cases during state synchronization.',
            'Users who lose all devices permanently lose vault access.'
          ],
          outcome: 'Successfully enabled multi-device syncing while mathematically guaranteeing the server never accesses the raw symmetric key. The authentication flow remained smooth for subsequent logins.',
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
              cons: ['Significantly reduces resistance to offline brute-force attacks', 'Fails to meet modern NIST recommendations']
            },
            {
              name: 'React Concurrent Mode Transitions',
              description: 'Use React.startTransition to yield to the browser during processing.',
              pros: ['Keeps UI responsive without external APIs'],
              cons: ['Synchronous crypto operations still block the JS event loop regardless of React state batching']
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
      ]`;

const ecoTrackDecisions = `engineeringDecisions: [
        {
          title: 'High-Density Telemetry Rendering',
          context: 'The dashboard needed to visualize over 50,000 data points (temperature, humidity, pressure) simultaneously without crashing the browser or dropping below 30fps.',
          alternatives: [
            {
              name: 'SVG-based Charting (Recharts/D3)',
              description: 'Render each data point as an SVG element in the DOM.',
              pros: ['Native DOM events (hover, click)', 'Easy to style with CSS', 'Familiar React ecosystem integration'],
              cons: ['Massive memory overhead', 'Browser rendering pipeline bottlenecks around 5,000 nodes', 'Garbage collection stutters']
            },
            {
              name: 'WebGL (Deck.gl)',
              description: 'Use the GPU to render data points via WebGL shaders.',
              pros: ['Virtually unlimited rendering performance', 'Capable of millions of points'],
              cons: ['Extremely steep learning curve', 'Overkill for 2D line/scatter charts', 'Large bundle size footprint']
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
              cons: ['Fails the "real-time" requirement', 'Large burst payloads still strain the network']
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
      ]`;

const devConnectDecisions = `engineeringDecisions: [
        {
          title: 'Relational Graph Queries vs. Real-Time Chat',
          context: 'The platform required complex relational queries (matching users based on multi-depth skill graphs) AND sub-100ms real-time chat capabilities.',
          alternatives: [
            {
              name: 'Monolithic PostgreSQL + WebSockets',
              description: 'Use Postgres for relations, and build a custom WebSocket server (Socket.io) for chat.',
              pros: ['Single source of truth', 'No vendor lock-in'],
              cons: ['High DevOps overhead to scale WebSockets horizontally', 'Requires managing Redis pub/sub for socket scaling']
            },
            {
              name: 'Firebase Only (NoSQL)',
              description: 'Store everything in Firebase Firestore to handle both relations and real-time seamlessly.',
              pros: ['Extremely fast time-to-market', 'Real-time out of the box'],
              cons: ['NoSQL is inherently bad at deep relational querying', 'Denormalization overhead would be immense for the matching algorithm']
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
              cons: ['Poor perceived loading performance', 'Flashing empty states']
            }
          ],
          chosenSolution: 'Deferred Client-Side Injection with Two-Pass Rendering.',
          justification: 'The server renders the base UI with placeholder states (e.g., "Offline"). The Firebase listeners are strictly initialized inside a \`useEffect\` hook, which guarantees they only fire after hydration completes. We accept a minor flicker for correct architecture.',
          tradeOffs: [
            'Users briefly see stale data (offline status) before the real-time connection establishes.',
            'Adds complexity to the component lifecycle.',
            'Requires strict separation of SSR-safe data and client-only data.'
          ],
          outcome: 'Hydration errors were eliminated while preserving the rapid First Contentful Paint (FCP) benefits of Next.js SSR.',
          reflection: 'Modern meta-frameworks blur the line between server and client. Being explicit about WHERE state originates is critical to preventing race conditions and hydration bugs.'
        }
      ]`;

data = data.replace(/challenges: 'The primary challenge was balancing absolute security.*?solutions: 'I implemented an asynchronous cryptographic queue using Web Workers.*?server\.',/s, secureVaultDecisions);

data = data.replace(/challenges: 'Rendering thousands of DOM elements for data points caused severe frame drops.*?solutions: 'To solve the Canvas interaction problem.*?unblocked\.',/s, ecoTrackDecisions);

data = data.replace(/challenges: 'Managing state across real-time WebSockets \(Firebase\) and GraphQL mutations proved complex.*?solutions: 'To handle the state synchronization between GraphQL mutations and Firebase real-time events.*?consistent\.',/s, devConnectDecisions);

fs.writeFileSync('src/constants/data.ts', data);
