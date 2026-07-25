import { TechnologyProfile } from '../../data/technologies';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

interface Props {
  lessons: TechnologyProfile['lessonsLearned'];
  bestPractices: string[];
}

export default function LessonsLearnedSection({ lessons, bestPractices }: Props) {
  return (
    <section className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 tracking-tight">Lessons Learned</h2>
            <div className="space-y-8">
              {lessons.map((lesson, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="w-5 h-5 text-amber-500 shrink-0" />
                    <h3 className="text-lg font-bold text-slate-900">{lesson.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 tracking-tight">Best Practices</h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
              <ul className="space-y-6">
                {bestPractices.map((practice, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-base text-slate-700 font-medium leading-relaxed">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
