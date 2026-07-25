export type PerspectiveId = 
  | 'overview' 
  | 'concepts' 
  | 'decisions'
  | 'technologies' 
  | 'projects' 
  | 'architecture' 
  | 'experiments' 
  | 'resources' 
  | 'research' 
  | 'notes' 
  | 'evolution' 
  | 'future';

export interface Perspective {
  id: PerspectiveId;
  label: string;
  icon: any;
}
