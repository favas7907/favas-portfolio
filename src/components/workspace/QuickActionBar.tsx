import { RoadmapDomain } from '../../data/roadmaps';
import { ExternalLink, Github, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuickActionBar({ domain }: { domain: RoadmapDomain }) {
  return (
    <div>
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
        Quick Actions
      </h3>
      <div className="flex flex-col gap-2">
        {domain.relatedProjects && domain.relatedProjects[0] && (
           <Link 
             to={domain.relatedProjects[0].url}
             className="flex items-center gap-3 p-3 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100"
           >
             <ExternalLink className="w-4 h-4 text-slate-400" />
             View Production App
           </Link>
        )}
        <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100">
          <Github className="w-4 h-4 text-slate-400" />
          Source Repository
        </a>
        <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100">
          <Book className="w-4 h-4 text-slate-400" />
          Engineering Notes
        </a>
      </div>
    </div>
  );
}
