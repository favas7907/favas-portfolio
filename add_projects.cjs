const fs = require('fs');

let data = fs.readFileSync('src/constants/data.ts', 'utf8');

const newProjects = `  ,{
    id: 'block-vote',
    title: 'BlockVote',
    tagline: 'Decentralized voting system with quadratic math.',
    description: 'A Web3 governance platform leveraging zero-knowledge proofs to ensure voter anonymity while calculating quadratic voting outcomes on-chain.',
    tech: ['Solidity', 'React', 'Ethers.js', 'Hardhat'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://picsum.photos/seed/blockvote/1200/800',
    featured: false,
    year: '2023',
    role: 'Lead Architect',
    timeline: '4 weeks',
    domain: 'Blockchain & Web3',
    status: 'Research',
    details: {
      overview: 'Research project on ZK-proofs.',
      problem: 'Whale accounts manipulating DAOs.',
      solution: 'Quadratic voting.',
      architecture: 'Smart contracts.',
      role: 'Lead Architect',
      timeline: '4 weeks',
      technologies: ['Solidity', 'React'],
      metrics: [],
      performance: 'Fast',
      scalability: 'High',
      security: 'ZK-proofs',
      apiDesign: 'RPC',
      externalIntegrations: 'Alchemy',
      engineeringSummary: 'Proved viability.',
      development: [],
      engineeringDecisions: [],
      future: 'None.',
      lessons: 'Math is hard.'
    }
  },
  {
    id: 'algo-visualizer',
    title: 'AlgoVis',
    tagline: 'Interactive algorithm visualization engine.',
    description: 'An educational tool rendering complex graph and sorting algorithms at 60fps using custom WebGL shaders and Web Workers.',
    tech: ['TypeScript', 'WebGL', 'React', 'Vite'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://picsum.photos/seed/algovis/1200/800',
    featured: false,
    year: '2022',
    role: 'Solo Developer',
    timeline: '3 months',
    domain: 'Research & Experiments',
    status: 'Archived',
    details: {
      overview: 'Exploration of WebGL.',
      problem: 'Algorithms are hard to visualize.',
      solution: 'Interactive 3D engine.',
      architecture: 'ECS pattern.',
      role: 'Solo Developer',
      timeline: '3 months',
      technologies: ['TypeScript', 'WebGL'],
      metrics: [],
      performance: '60fps',
      scalability: 'N/A',
      security: 'N/A',
      apiDesign: 'N/A',
      externalIntegrations: 'None',
      engineeringSummary: 'Learned shaders.',
      development: [],
      engineeringDecisions: [],
      future: 'None.',
      lessons: 'WebGL state is tricky.'
    }
  }
];

export const EXPERIENCE = [`;

data = data.replace(/];\n\nexport const EXPERIENCE = \[/, newProjects);
fs.writeFileSync('src/constants/data.ts', data);
