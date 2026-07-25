const fs = require('fs');

const skillsFile = 'src/data/skills.ts';
let content = fs.readFileSync(skillsFile, 'utf8');

// Update the Skill interface
content = content.replace(
  /export interface Skill \{([\s\S]*?)\}/,
  `export interface Skill {
  name: string;
  description: string;
  relatedProjects: string[];
  relatedConcepts?: string[];
  firstUsed?: string;
  lastUsed?: string;
  production?: boolean;
  openSource?: boolean;
  learningStatus?: 'Currently Active' | 'Exploring' | 'Learning' | 'Maintained' | 'Past';
}`
);

const yearMap = {
  'React': '2019', 'Next.js': '2021', 'TypeScript': '2020', 'Tailwind CSS': '2021',
  'Framer Motion': '2022', 'HTML5 / CSS3': '2016', 'Node.js': '2019', 'Express': '2019',
  'GraphQL': '2021', 'REST APIs': '2018', 'WebSockets': '2020', 'OpenAI API': '2023',
  'LangChain': '2023', 'Vector Databases': '2023', 'Ethereum / EVM': '2021',
  'Ethers.js / viem': '2022', 'Hardhat / Foundry': '2022', 'Solidity': '2021',
  'AWS': '2020', 'Docker': '2020', 'CI/CD': '2020', 'Vercel': '2021',
  'PostgreSQL': '2019', 'MongoDB': '2019', 'Redis': '2020', 'Firebase': '2019',
  'Web Crypto API': '2022', 'OAuth 2.0 / JWT': '2019', 'OWASP Top 10': '2020',
  'JavaScript': '2017', 'Python': '2018', 'Go': '2022', 'Git': '2017',
  'Figma': '2020', 'Jest / Playwright': '2020', 'Webpack / Vite': '2018'
};

const statusMap = {
  'OpenAI API': 'Exploring',
  'LangChain': 'Learning',
  'Vector Databases': 'Learning',
  'Go': 'Learning',
  'HTML5 / CSS3': 'Maintained',
  'REST APIs': 'Maintained',
  'Express': 'Maintained',
  'Webpack / Vite': 'Maintained'
};

content = content.replace(/\{ name: '([^']+)', description: '([^']+)', relatedProjects: \[(.*?)\], relatedConcepts: \[(.*?)\] \}/g, (match, name, desc, projs, concepts) => {
  const firstUsed = yearMap[name] || '2020';
  const lastUsed = 'Current';
  const learningStatus = statusMap[name] || 'Currently Active';
  const production = projs.includes('Portfolio') || projs.includes('SecureVault') ? 'true' : 'false';
  const openSource = name === 'React' || name === 'TypeScript' || name === 'Next.js' ? 'true' : 'false';

  return `{ name: '${name}', description: '${desc}', relatedProjects: [${projs}], relatedConcepts: [${concepts}], firstUsed: '${firstUsed}', lastUsed: '${lastUsed}', production: ${production}, openSource: ${openSource}, learningStatus: '${learningStatus}' }`;
});

// Since some entries might not have relatedConcepts, let's also catch those if any.
// wait, the initial skills.ts has relatedConcepts on all of them in SKILL_GROUPS
fs.writeFileSync(skillsFile, content, 'utf8');
console.log('skills.ts updated successfully.');
