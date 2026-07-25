import { RoadmapDomain, ROADMAP_DOMAINS } from '../../data/roadmaps';
import { Target, Activity, Clock, GitBranch, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuickActionBar from './QuickActionBar';

export default function ContextPanel({ domain }: { domain: RoadmapDomain }) {
  const relatedDomains = (domain.relatedRoadmapIds || [])
    .map(id => ROADMAP_DOMAINS.find(d => d.id === id))
    .filter(Boolean);

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Active Focus */}
      <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
          Current State
        </h3>
        <div className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
              <Target className="w-3 h-3" /> Maturity
            </span>
            <span className="text-sm font-medium text-slate-900">{domain.maturity}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3 h-3" /> Focus
            </span>
            <span className="text-sm font-medium text-slate-900">{domain.learningStatus}</span>
          </div>
          {domain.readingTime && (
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> Horizon
              </span>
              <span className="text-sm font-medium text-slate-900">{domain.readingTime}</span>
            </div>
          )}
        </div>
      </div>

      <QuickActionBar domain={domain} />

      {/* Related Domains */}
      {relatedDomains.length > 0 && (
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-1.5">
            <GitBranch className="w-3 h-3" /> Connected Ecosystem
          </h3>
          <div className="flex flex-col gap-2">
            {relatedDomains.map(d => d && (
              <Link 
                key={d.id} 
                to={`/skills/${d.id}`}
                className="group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
              >
                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 transition-colors truncate pr-2">
                  {d.title}
                </span>
                <LinkIcon className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
