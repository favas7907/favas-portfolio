import { Concept } from '../../../data/concepts';
import { HelpCircle } from 'lucide-react';

export default function QuestionPanel({ questions }: { questions: Concept['questions'] }) {
  const items = [
    { q: 'Why does this exist?', a: questions.whyExist },
    { q: 'What problem does it solve?', a: questions.whatProblem },
    { q: 'When should it be used?', a: questions.whenToUse },
    { q: 'When should it NOT be used?', a: questions.whenNotToUse },
    { q: 'What alternatives exist?', a: questions.alternatives },
    { q: 'Which trade-offs matter?', a: questions.tradeOffs },
    { q: 'How has my understanding evolved?', a: questions.evolution },
  ];

  return (
    <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
        <HelpCircle className="w-4 h-4" /> Engineering Reasoning
      </h3>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2 border-b border-slate-100 pb-6 last:border-0 last:pb-0">
            <h4 className="text-sm font-medium text-slate-900">{item.q}</h4>
            <p className="text-sm text-slate-600 font-light leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
