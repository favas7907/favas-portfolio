import { TechnologyProfile } from '../../data/technologies';
import { GitPullRequest, ArrowRight } from 'lucide-react';

export default function DecisionPanel({ decisions }: { decisions: TechnologyProfile['engineeringDecisions'] }) {
  if (!decisions || decisions.length === 0) return null;

  return (
    <section className="py-16 md:py-24 border-b border-slate-100">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 tracking-tight">Engineering Decisions</h2>
        
        <div className="space-y-8">
          {decisions.map((decision, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 shrink-0">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                    <GitPullRequest className="w-4 h-4 text-slate-400" />
                    Decision
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">{decision.decision}</h3>
                </div>
                
                <div className="md:w-2/3 space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Reasoning</h4>
                    <p className="text-base text-slate-700 font-light leading-relaxed">
                      {decision.reasoning}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Trade-offs Accepted</h4>
                    <ul className="space-y-2">
                      {decision.tradeOffs.map((tradeoff, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-light">
                          <ArrowRight className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" />
                          <span>{tradeoff}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
