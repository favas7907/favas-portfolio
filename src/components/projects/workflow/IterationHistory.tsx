import React from 'react';
import { ProjectResults } from '../../../types';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface IterationHistoryProps {
  results: ProjectResults;
}

export default function IterationHistory({ results }: IterationHistoryProps) {
  return (
    <div className="space-y-12 pt-4">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...results.performanceMetrics, ...results.reliabilityMetrics].map((metric, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">{metric.label}</span>
            <div className="flex items-end gap-3 mb-2">
              <span className="text-3xl font-medium tracking-tight text-slate-900 leading-none">{metric.value}</span>
              {metric.trend === 'up' && <ArrowUpRight className="w-5 h-5 text-primary mb-1" />}
              {metric.trend === 'down' && <ArrowDownRight className="w-5 h-5 text-slate-500 mb-1" />}
              {metric.trend === 'neutral' && <Minus className="w-5 h-5 text-slate-400 mb-1" />}
            </div>
            <p className="text-xs text-slate-500">{metric.context}</p>
          </div>
        ))}
      </div>

      {/* Key Outcomes */}
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">Key Outcomes</h4>
        <ul className="space-y-4">
          {results.keyOutcomes.map((outcome, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
              <p className="text-slate-700 leading-relaxed text-sm">{outcome}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Engineering Impact</h4>
          <p className="text-slate-600 leading-relaxed text-sm">{results.engineeringImpact}</p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Business Impact</h4>
          <p className="text-slate-600 leading-relaxed text-sm">{results.businessImpact}</p>
        </div>
      </div>
    </div>
  );
}
