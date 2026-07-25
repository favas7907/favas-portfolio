import { EngineeringDecision } from '../../../data/decisions';
import { Layers, Zap, Code2 } from 'lucide-react';

export default function ArchitectureImpact({ decision }: { decision: EngineeringDecision }) {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">System Impact</h3>
      
      <div className="space-y-4">
        <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-2">
            <Layers className="w-3 h-3" /> Architecture
          </h4>
          <p className="text-sm text-slate-700 font-light leading-relaxed">{decision.architectureImpact}</p>
        </div>

        <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-2">
            <Zap className="w-3 h-3" /> Performance
          </h4>
          <p className="text-sm text-slate-700 font-light leading-relaxed">{decision.performanceImpact}</p>
        </div>

        <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-2">
            <Code2 className="w-3 h-3" /> Developer Experience
          </h4>
          <p className="text-sm text-slate-700 font-light leading-relaxed">{decision.dxImpact}</p>
        </div>
      </div>
    </div>
  );
}
