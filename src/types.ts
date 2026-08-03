import { LucideIcon } from 'lucide-react';

export interface JourneyMilestone {
  phase: string;
  title: string;
  description: string;
  commitCount?: number;
  techNotes?: string;
  impact?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface EngineeringDecision {
  title: string;
  problem?: string;
  context: string;
  requirements?: string[];
  constraints?: string[];
  alternatives: {
    name: string;
    description: string;
    pros: string[];
    cons: string[];
  }[];
  evaluation?: string;
  chosenSolution: string;
  justification: string;
  tradeOffs: string[];
  implementation?: string;
  outcome: string;
  futureImprovements?: string;
  reflection: string;
}

export interface Metric {
  label: string;
  value: string;
  context: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface ProjectResults {
  keyOutcomes: string[];
  performanceMetrics: Metric[];
  reliabilityMetrics: Metric[];
  testingAndQuality: string;
  scalabilityValidation: string;
  businessImpact: string;
  engineeringImpact: string;
  conclusion: string;
}

export interface ProjectDetailData {
  overview: string;
  problem: string;
  goals: string[];
  research?: string;
  constraints?: string;
  architecture: {
    requestLifecycle: string;
    performance: string;
    scalability: string;
    security: string;
    apiDesign: string;
    externalIntegrations: string;
    engineeringSummary: string;
    overview: string;
    client: string;
    server: string;
    database: string;
    authentication: string;
    state: string;
    deployment: string;
  };
  engineeringDecisions: EngineeringDecision[];
  development: JourneyMilestone[];
  results: ProjectResults;
  future: string;
  lessons: string;
}

export interface AchievementDetailData {
  context: string;
  opportunity: string;
  challenge: string;
  role: string;
  responsibilities: string[];
  outcome: string;
  impact: string;
  lessons: string;
  relatedTechnologies?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  date: string;
  shortDescription: string;
  image: string;
  link?: string;
  details: AchievementDetailData;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  engineeringHighlight?: string;
  outcome?: string;
  caseStudyPreview?: string[];
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
  details?: ProjectDetailData;
}
