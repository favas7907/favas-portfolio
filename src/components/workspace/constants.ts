import { LayoutGrid, BookOpen, Layers, Cpu, Code2, GitMerge, Library, Compass, FlaskConical, Search, FileText, Scale } from 'lucide-react';
import { Perspective } from './types';

export const PERSPECTIVES: Perspective[] = [
  { id: 'overview', label: 'Overview', icon: LayoutGrid },
  { id: 'concepts', label: 'Concepts', icon: BookOpen },
  { id: 'decisions', label: 'Decisions', icon: Scale },
  { id: 'technologies', label: 'Technologies', icon: Cpu },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'architecture', label: 'Architecture', icon: Layers },
  { id: 'experiments', label: 'Experiments', icon: FlaskConical },
  { id: 'resources', label: 'Resources', icon: Library },
  { id: 'research', label: 'Research', icon: Search },
  { id: 'notes', label: 'Notes', icon: FileText },
  { id: 'evolution', label: 'Evolution', icon: GitMerge },
  { id: 'future', label: 'Future', icon: Compass }
];
