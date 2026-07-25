export interface ConceptDomain {
  id: string;
  title: string;
  description: string;
}

export const CONCEPT_DOMAINS: ConceptDomain[] = [
  { 
    id: 'frontend', 
    title: 'Frontend Concepts', 
    description: 'The principles of rendering, state, and user interaction. These concepts bridge the gap between network constraints and fluid user experiences.' 
  },
  { 
    id: 'backend', 
    title: 'Backend Concepts', 
    description: 'The principles of API design, processing, and data flow. These concepts focus on reliability, security, and scalability under load.' 
  },
  { 
    id: 'architecture', 
    title: 'Architecture', 
    description: 'The structural patterns that allow software to scale. These concepts dictate how systems are composed, decoupled, and maintained over time.' 
  },
  { 
    id: 'databases', 
    title: 'Data Engineering', 
    description: 'The structured modeling and querying of information. These concepts ensure data integrity, access speed, and storage efficiency.' 
  },
  { 
    id: 'system-design', 
    title: 'System Design', 
    description: 'Designing large-scale distributed systems. These concepts address fault tolerance, concurrency, and global distribution.' 
  }
];
