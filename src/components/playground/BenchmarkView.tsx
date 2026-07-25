import { Metric } from '../../data/experiments';
import { Activity, ArrowRight, ArrowDown, ArrowUp } from 'lucide-react';

export default function BenchmarkView({ benchmarks }: { benchmarks: Metric[] }) {
  if (!benchmarks || benchmarks.length === 0) return null;

  return (
    <div className="space-y-6">
      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
        <Activity className="w-4 h-4 text-emerald-500" /> Measurable Evidence
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {benchmarks.map((metric, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h5 className="text-xs font-medium text-slate-500 mb-4">{metric.name}</h5>
            {metric.before && metric.after ? (
              <div className="flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase text-slate-400 mb-1">Before</span>
                  <span className="text-lg font-medium text-slate-700">{metric.before}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300" />
                <div>
                  <span className="block text-[10px] uppercase text-slate-400 mb-1">After</span>
                  <span className="text-lg font-medium text-emerald-600">{metric.after}</span>
                </div>
              </div>
            ) : (
              <div className="text-2xl font-medium text-slate-900">{metric.current}{metric.unit}</div>
            )}
            {metric.improvement && (
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                <ArrowDown className="w-3 h-3" />
                <span>{metric.improvement} improvement</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
