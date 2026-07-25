import { Comparison } from '../../data/experiments';
import { GitCompare } from 'lucide-react';

export default function ComparisonView({ comparison }: { comparison: Comparison }) {
  if (!comparison) return null;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
          <GitCompare className="w-4 h-4 text-purple-500" /> Alternatives Compared
        </h4>
        <p className="text-sm text-slate-600 font-light leading-relaxed max-w-3xl">{comparison.reasoning}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-4 font-medium text-slate-900 bg-slate-50/50 pl-4 rounded-tl-xl">Approach</th>
              <th className="py-4 font-medium text-slate-500 bg-slate-50/50 px-4">Complexity</th>
              <th className="py-4 font-medium text-slate-500 bg-slate-50/50 px-4">Performance</th>
              <th className="py-4 font-medium text-slate-500 bg-slate-50/50 px-4">DX</th>
              <th className="py-4 font-medium text-slate-500 bg-slate-50/50 px-4 rounded-tr-xl">Maintenance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {comparison.alternatives.map((alt, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 pl-4 font-medium text-slate-800">{alt.name}</td>
                <td className="py-4 px-4 text-slate-600 font-light">{alt.complexity}</td>
                <td className="py-4 px-4 text-slate-600 font-light">{alt.performance}</td>
                <td className="py-4 px-4 text-slate-600 font-light">{alt.developerExperience}</td>
                <td className="py-4 px-4 text-slate-600 font-light">{alt.maintenance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
