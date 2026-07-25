import { FlaskConical, Target, Zap } from 'lucide-react';

interface Props {
  hypothesis: string;
  problem: string;
  motivation: string;
}

export default function HypothesisPanel({ hypothesis, problem, motivation }: Props) {
  return (
    <div className="space-y-6 bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8">
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-3">
          <FlaskConical className="w-4 h-4 text-blue-500" /> The Hypothesis
        </h4>
        <p className="text-lg md:text-xl text-slate-900 font-medium leading-relaxed">{hypothesis}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-200">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-3">
            <Target className="w-4 h-4 text-rose-500" /> The Problem
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed font-light">{problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-amber-500" /> Motivation
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed font-light">{motivation}</p>
        </div>
      </div>
    </div>
  );
}
