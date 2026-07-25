const fs = require('fs');

// Update types.ts
let types = fs.readFileSync('src/types.ts', 'utf8');
types = types.replace(/export interface Project \{([\s\S]*?)\}/, `export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  featured: boolean;
  year: string;
  role: string;
  timeline: string;
  domain: string;
  status: string;
  details: ProjectDetailData;
}`);
fs.writeFileSync('src/types.ts', types);

// Update data.ts
let data = fs.readFileSync('src/constants/data.ts', 'utf8');
data = data.replace(/featured: (true|false),/g, (match) => {
  // random-ish status and domain
  return `${match}\n    domain: 'Full-Stack Engineering',\n    status: 'Production',`;
});
fs.writeFileSync('src/constants/data.ts', data);
