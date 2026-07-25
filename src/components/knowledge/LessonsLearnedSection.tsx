import { motion } from 'motion/react';
import { LESSONS_LEARNED } from '../../data/knowledgeBase';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LessonsLearnedSection() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
          <Lightbulb className="w-6 h-6 text-amber-600" />
        </div>
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-slate-900">Lessons Learned</h2>
          <p className="text-slate-500 font-light mt-1">Post-project reflections and honest retrospectives</p>
        </div>
      </div>

      <div className="space-y-8">
        {LESSONS_LEARNED.map((lesson, idx) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-colors"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <h3 className="text-xl md:text-2xl font-medium text-slate-900">{lesson.title}</h3>
              <Link 
                to={`/projects/${lesson.projectId}`}
                className="text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors flex items-center group"
              >
                View Project Context
                <ArrowRight className="w-3 h-3 ml-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-rose-500 mb-2">What Surprised Me</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{lesson.surprises}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">What I Misunderstood</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{lesson.misunderstood}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-2">What Became Easier</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{lesson.becameEasier}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2">How I Would Redesign It</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{lesson.redesign}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-4">Engineering Principles Discovered</h4>
              <div className="flex flex-wrap gap-3">
                {lesson.principlesDiscovered.map((principle, i) => (
                  <span key={i} className="text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl">
                    {principle}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
