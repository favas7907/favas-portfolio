import { RoadmapDomain } from '../../../data/roadmaps';
import { Target, Compass } from 'lucide-react';

export default function OverviewView({ domain }: { domain: RoadmapDomain }) {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
            <Compass className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Perspective
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight">Domain Overview</h2>
        <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">{domain.overview}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100">
           <Target className="w-5 h-5 text-blue-600 mb-4" />
           <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-3">Learning Focus</h3>
           <p className="text-sm text-slate-600 leading-relaxed">{domain.learningPathSummary}</p>
        </div>
        <div className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100">
           <Compass className="w-5 h-5 text-blue-600 mb-4" />
           <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-3">Strategic Impact</h3>
           <p className="text-sm text-slate-600 leading-relaxed">
             Understanding {domain.title.toLowerCase()} provides the architectural foundation for scalable engineering, enabling systems that are resilient, maintainable, and aligned with production objectives.
           </p>
        </div>
      </div>
    </div>
  );
}
