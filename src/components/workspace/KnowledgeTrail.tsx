import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { RoadmapDomain } from '../../data/roadmaps';
import { PerspectiveId } from './types';
import { PERSPECTIVES } from './constants';

export default function KnowledgeTrail({ domain, activePerspective }: { domain: RoadmapDomain, activePerspective: PerspectiveId }) {
  const perspective = PERSPECTIVES.find(p => p.id === activePerspective);

  return (
    <nav className="flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 overflow-x-auto whitespace-nowrap hide-scrollbar">
      <Link to="/skills" className="hover:text-slate-900 transition-colors flex items-center shrink-0">
        Workspace
      </Link>
      <ChevronRight className="w-3 h-3 mx-2 text-slate-200 shrink-0" />
      <span className="text-slate-600 shrink-0">
        {domain.title}
      </span>
      <ChevronRight className="w-3 h-3 mx-2 text-slate-200 shrink-0" />
      <span className="text-blue-600 shrink-0">
        {perspective?.label}
      </span>
    </nav>
  );
}
