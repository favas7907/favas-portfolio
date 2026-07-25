import { EngineeringDecision } from '../../../data/decisions';

export default function DecisionTimeline({ decision }: { decision: EngineeringDecision }) {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Implementation Results</h3>
      
      <div className="space-y-8">
        <div className="relative pl-6 border-l border-slate-200">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5" />
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Execution</h4>
          <p className="text-sm text-slate-700 font-light leading-relaxed">{decision.implementation}</p>
        </div>

        <div className="relative pl-6 border-l border-slate-200">
          <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1.5" />
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Results</h4>
          <p className="text-sm text-slate-700 font-light leading-relaxed">{decision.results}</p>
        </div>

        <div className="relative pl-6 border-l border-slate-200">
          <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-1.5" />
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Future Considerations</h4>
          <p className="text-sm text-slate-700 font-light leading-relaxed">{decision.futureReconsideration}</p>
        </div>
      </div>
    </div>
  );
}
