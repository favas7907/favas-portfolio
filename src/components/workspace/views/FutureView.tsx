import { RoadmapDomain } from '../../../data/roadmaps';
import { Compass } from 'lucide-react';

export default function FutureView({ domain }: { domain: RoadmapDomain }) {
  if (!domain.futureTopics || domain.futureTopics.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-24 animate-in fade-in duration-500">
        <Compass className="w-12 h-12 text-slate-200 mb-6" />
        <h3 className="text-lg font-medium text-slate-900 mb-2">No Future Objectives Defined</h3>
        <p className="text-sm text-slate-500 max-w-md">Currently focusing on consolidating existing knowledge within this domain.</p>
      </div>
    );
  }

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
        <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight">Future Horizons</h2>
        <p className="text-lg text-slate-600 font-light leading-relaxed mb-12">
          Strategic objectives, upcoming learning vectors, and anticipated technology adoption over the next 12-18 months.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {domain.futureTopics.map((topic, index) => (
          <div key={index} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-12 -mt-12 opacity-50" />
            <h3 className="text-lg font-medium text-slate-900 mb-3 relative z-10">{topic}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
