import { EngineeringDecision } from '../../../data/decisions';
import AlternativeComparison from './AlternativeComparison';
import ConstraintList from './ConstraintList';
import DecisionTimeline from './DecisionTimeline';
import { Target, AlertCircle } from 'lucide-react';

export default function DecisionCard({ decision }: { decision: EngineeringDecision }) {
  return (
    <div className="space-y-16">
      
      {/* Problem & Context */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> The Problem
          </h3>
          <p className="text-lg text-slate-900 font-light leading-relaxed">{decision.problem}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Context</h3>
          <p className="text-sm text-slate-700 font-light leading-relaxed">{decision.context}</p>
        </div>
      </section>

      {/* Requirements & Constraints */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-50 p-8 rounded-2xl border border-slate-100">
        <ConstraintList title="Requirements" constraints={decision.requirements} />
        <ConstraintList title="Constraints" constraints={decision.constraints} />
      </section>

      {/* Alternatives */}
      <AlternativeComparison alternatives={decision.alternatives} />

      {/* Evaluation & Decision */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Evaluation</h3>
          <p className="text-base text-slate-700 font-light leading-relaxed pl-6 border-l-2 border-slate-200">
            {decision.evaluation}
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
            <Target className="w-4 h-4" /> Selected Decision
          </h3>
          <p className="text-xl text-slate-900 font-medium leading-relaxed">
            {decision.selectedDecision}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <DecisionTimeline decision={decision} />

    </div>
  );
}
