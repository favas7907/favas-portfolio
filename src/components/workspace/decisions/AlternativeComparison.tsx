import { Alternative } from '../../../data/decisions';
import { Check, X } from 'lucide-react';

export default function AlternativeComparison({ alternatives }: { alternatives: Alternative[] }) {
  if (alternatives.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Alternatives Considered</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {alternatives.map((alt, idx) => (
          <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h4 className="text-base font-medium text-slate-900 mb-6">{alt.name}</h4>
            <div className="space-y-4">
              {alt.pros.length > 0 && (
                <ul className="space-y-3">
                  {alt.pros.map((pro, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-sm text-slate-700 leading-relaxed font-light">{pro}</span>
                    </li>
                  ))}
                </ul>
              )}
              {alt.cons.length > 0 && (
                <ul className="space-y-3">
                  {alt.cons.map((con, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-50 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-rose-600" />
                      </div>
                      <span className="text-sm text-slate-700 leading-relaxed font-light">{con}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
