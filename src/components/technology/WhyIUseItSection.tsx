import { TechnologyProfile } from '../../data/technologies';
import { CheckCircle2, XCircle, Shield, AlertTriangle } from 'lucide-react';

export default function WhyIUseItSection({ whyIUseIt }: { whyIUseIt: TechnologyProfile['whyIUseIt'] }) {
  return (
    <section className="py-16 md:py-24 border-b border-slate-100">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 tracking-tight">Why I Use It</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" /> The Engineering Choice
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {whyIUseIt.whyChosen}
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Problems Solved</h3>
              <ul className="space-y-3">
                {whyIUseIt.problemsSolved.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-light leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> When to use
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-light">{whyIUseIt.whenToUse}</p>
            </div>
            
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-3 flex items-center gap-2">
                <XCircle className="w-4 h-4" /> When to avoid
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-light">{whyIUseIt.whenToAvoid}</p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" /> Alternatives Evaluated
              </h3>
              <div className="flex flex-wrap gap-2">
                {whyIUseIt.alternativesEvaluated.map((alt, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                    {alt}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
