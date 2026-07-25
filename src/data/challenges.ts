export interface EngineeringChallenge {
  title: string;
  description: string;
  technologies: string[];
  projects: string[];
}

export const ENGINEERING_CHALLENGES: EngineeringChallenge[] = [
  {
    title: 'Build scalable web applications',
    description: 'Architecting high-performance, accessible, and responsive systems that scale reliably under load.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    projects: ['Portfolio', 'Cypher Space']
  },
  {
    title: 'Design AI-powered applications',
    description: 'Integrating large language models and vector search to create intelligent, context-aware software solutions.',
    technologies: ['LangChain', 'FAISS', 'Gemini', 'Python'],
    projects: ['Latenza Vita', 'AI Interview Coach']
  },
  {
    title: 'Develop blockchain applications',
    description: 'Engineering secure smart contracts and decentralized applications for the Ethereum ecosystem.',
    technologies: ['Solidity', 'Hardhat', 'Ethers.js', 'Next.js'],
    projects: ['Blockchain Lab', 'Smart Contract Demo']
  }
];
