export type ResourceCategory = 
  | 'Official Documentation'
  | 'Books'
  | 'Courses'
  | 'Video Playlists'
  | 'Articles'
  | 'Research Papers'
  | 'GitHub Repositories'
  | 'Cheat Sheets'
  | 'Practice Platforms'
  | 'Architecture References'
  | 'Personal Notes'
  | 'Community Resources';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface DetailedResource {
  id: string;
  domainId: string;
  title: string;
  summary: string;
  category: ResourceCategory;
  difficulty: DifficultyLevel;
  estimatedTime: string;
  isOfficial: boolean;
  isFree: boolean;
  technologyTags: string[];
  lastReviewed: string;
  relatedConcepts: string[];
  relatedProjects: { title: string; url: string }[];
  personalRecommendation?: string;
  url: string;
  author?: string;
  addedDate: string;
}

export interface PersonalNote {
  id: string;
  domainId: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
  type: 'Implementation' | 'Architecture' | 'Debugging' | 'Lesson Learned';
}

export interface LearningPathStage {
  id: string;
  title: string;
  description: string;
  resourceIds: string[];
}

export interface DomainLearningPath {
  domainId: string;
  paths: {
    title: string;
    description: string;
    stages: LearningPathStage[];
  }[];
}

export const DOMAIN_RESOURCES: DetailedResource[] = [
  {
    id: 'res-react-docs',
    domainId: 'frontend',
    title: 'React Official Documentation',
    summary: 'The official React docs — covers Hooks, Server Components, and all the new concurrency stuff.',
    category: 'Official Documentation',
    difficulty: 'Intermediate',
    estimatedTime: '20+ hours',
    isOfficial: true,
    isFree: true,
    technologyTags: ['React', 'JavaScript', 'Architecture'],
    lastReviewed: '2023-10-15',
    relatedConcepts: ['Component-Driven Architecture', 'State Management'],
    relatedProjects: [{ title: 'Project E-Commerce', url: '/projects/ecommerce' }],
    personalRecommendation: 'Start here. The new beta docs are incredible for mental models.',
    url: 'https://react.dev',
    author: 'Meta',
    addedDate: '2023-01-01'
  },
  {
    id: 'res-epic-react',
    domainId: 'frontend',
    title: 'Epic React',
    summary: 'An advanced, deep-dive course into React internals, performance optimization, and testing.',
    category: 'Courses',
    difficulty: 'Advanced',
    estimatedTime: '40 hours',
    isOfficial: false,
    isFree: false,
    technologyTags: ['React', 'Performance', 'Testing'],
    lastReviewed: '2023-11-20',
    relatedConcepts: ['State Management', 'Performance by Default'],
    relatedProjects: [],
    personalRecommendation: 'The best investment for moving from intermediate to advanced React engineering.',
    url: 'https://epicreact.dev',
    author: 'Kent C. Dodds',
    addedDate: '2023-05-12'
  },
  {
    id: 'res-rust-book',
    domainId: 'programming-languages',
    title: 'The Rust Programming Language',
    summary: 'The official book on Rust, covering ownership, borrowing, lifetimes, and safe systems programming.',
    category: 'Books',
    difficulty: 'Beginner',
    estimatedTime: '30 hours',
    isOfficial: true,
    isFree: true,
    technologyTags: ['Rust', 'Systems'],
    lastReviewed: '2023-09-10',
    relatedConcepts: ['Memory Management', 'Concurrency Models'],
    relatedProjects: [],
    personalRecommendation: 'Read it twice. The first time for syntax, the second time for the ownership model.',
    url: 'https://doc.rust-lang.org/book/',
    author: 'Rust Core Team',
    addedDate: '2022-11-05'
  }
];

export const DOMAIN_PERSONAL_NOTES: PersonalNote[] = [
  {
    id: 'note-react-useEffect',
    domainId: 'frontend',
    title: 'The useEffect Mental Model',
    content: 'Stop thinking about lifecycle methods. `useEffect` is about synchronization. If you need to derive state, do it during render. If you need to handle an event, use an event handler. Only use effects to synchronize with external systems (like network, DOM, or subscriptions).',
    date: '2023-08-22',
    tags: ['React', 'Hooks', 'Anti-patterns'],
    type: 'Architecture'
  }
];

export const DOMAIN_LEARNING_PATHS: DomainLearningPath[] = [
  {
    domainId: 'frontend',
    paths: [
      {
        title: 'Modern React Architecture',
        description: 'From fundamental mental models to scalable production applications.',
        stages: [
          {
            id: 'stage-1',
            title: 'Fundamentals & Mental Models',
            description: 'Understand how React thinks about UI.',
            resourceIds: ['res-react-docs']
          },
          {
            id: 'stage-2',
            title: 'Advanced Patterns & Performance',
            description: 'Scaling React applications predictably.',
            resourceIds: ['res-epic-react']
          }
        ]
      }
    ]
  }
];
