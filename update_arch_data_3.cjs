const fs = require('fs');

// Update types.ts
let typesData = fs.readFileSync('src/types.ts', 'utf8');
typesData = typesData.replace('security: string;', `security: string;
    apiDesign: string;
    externalIntegrations: string;
    engineeringSummary: string;`);
fs.writeFileSync('src/types.ts', typesData);

// Update data.ts
let data = fs.readFileSync('src/constants/data.ts', 'utf8');

// Add to SecureVault
data = data.replace(
  /security: 'Zero-knowledge model ensures no plaintext data touches the network\. Content Security Policy \(CSP\) strictly prohibits inline scripts and external data exfiltration\.'\n    \},/,
  `security: 'Zero-knowledge model ensures no plaintext data touches the network. Content Security Policy (CSP) strictly prohibits inline scripts and external data exfiltration.',
      apiDesign: 'RESTful endpoints strictly authenticated via SRP. Rate-limited to 10 requests per minute for login routes. Responses standardized to a custom JSON envelope with deterministic error codes.',
      externalIntegrations: 'Twilio API for optional SMS-based 2FA recovery, and AWS KMS for envelope encryption of backup keys. Integrations are isolated in separate microservices to minimize the blast radius.',
      engineeringSummary: 'SecureVault demonstrates that high-grade cryptography can be implemented in the browser without sacrificing user experience. The architecture prioritizes data privacy above all, accepting the trade-off of thicker client-side processing.'
    },`
);

// Add to EcoTrack
data = data.replace(
  /security: 'IoT gateways authenticated via mTLS\. Data ingestion endpoints are segregated from client query APIs on the internal network\.'\n    \},/,
  `security: 'IoT gateways authenticated via mTLS. Data ingestion endpoints are segregated from client query APIs on the internal network.',
      apiDesign: 'WebSockets for real-time streaming to the dashboard. GraphQL used for historical data queries, allowing clients to specify precise time ranges and data resolution, preventing over-fetching.',
      externalIntegrations: 'Integrated with the OpenWeatherMap API to correlate internal temperature sensor readings with external weather conditions. Data is cached in Redis for 15 minutes.',
      engineeringSummary: 'EcoTrack highlights the importance of choosing the right tool for the job. By bypassing the DOM and utilizing Canvas API paired with a time-series database, we achieved sub-second latency on massive datasets.'
    },`
);

// Add to DevConnect
data = data.replace(
  /security: 'GraphQL schema strictly validates nested query depth to prevent Denial of Service \(DoS\) attacks\. Firebase Security Rules enforce authorization at the document level\.'\n    \},/,
  `security: 'GraphQL schema strictly validates nested query depth to prevent Denial of Service (DoS) attacks. Firebase Security Rules enforce authorization at the document level.',
      apiDesign: 'Apollo GraphQL handles all relational queries. A custom directive (@auth) manages field-level authorization. Mutations return standardized payload objects including success booleans and potential error arrays.',
      externalIntegrations: 'GitHub API integration for automatic repository parsing and contribution history verification. Webhooks listen for repository changes to update user profiles asynchronously.',
      engineeringSummary: 'DevConnect successfully blends the SEO benefits of Server-Side Rendering with the immediate feedback of real-time WebSockets, proving that hybrid architectures can be highly effective when boundaries are clearly defined.'
    },`
);

fs.writeFileSync('src/constants/data.ts', data);
