import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIMENTS } from '../../data/knowledgeBase';
import { Beaker, ChevronDown, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

export default function ExperimentsSection() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
        <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
          <Beaker className="w-6 h-6 text-orange-600" />
        </div>
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-slate-900">Technical Experiments</h2>
          <p className="text-slate-500 font-light mt-1">Prototypes, proofs of concept, and failures</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {EXPERIMENTS.map((experiment, idx) => (
          <ExperimentCard key={experiment.id} experiment={experiment} index={idx} />
        ))}
      </div>
    </section>
  );
}

function ExperimentCard({ experiment, index }: { experiment: any, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const StatusIcon = 
    experiment.status === 'Success' ? CheckCircle2 :
    experiment.status === 'Failed' ? XCircle : Loader2;

  const statusColor = 
    experiment.status === 'Success' ? 'text-emerald-600 bg-emerald-50 border-emerald-200' :
    experiment.status === 'Failed' ? 'text-rose-600 bg-rose-50 border-rose-200' : 
    'text-amber-600 bg-amber-50 border-amber-200';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors flex flex-col"
    >
      <div 
        className="p-6 md:p-8 cursor-pointer group flex-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between mb-4">
          <span className={`flex items-center text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border ${statusColor}`}>
            <StatusIcon className="w-3.5 h-3.5 mr-1.5" />
            {experiment.status}
          </span>
        </div>

        <h3 className="text-xl font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
          {experiment.title}
        </h3>
        
        <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
          <strong className="font-medium text-slate-900">Goal:</strong> {experiment.goal}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs font-medium text-slate-500">Read Findings</span>
          <button className="text-slate-400 group-hover:text-slate-900 transition-colors">
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 md:px-8 pb-8 pt-4 border-t border-slate-100 bg-slate-50 space-y-6">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Approach</h4>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">{experiment.approach}</p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Outcome</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{experiment.outcome}</p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Key Lessons</h4>
                <ul className="space-y-2">
                  {experiment.lessons.map((lesson: string, i: number) => (
                    <li key={i} className="text-sm text-slate-600 font-light flex items-start">
                      <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 mr-3 shrink-0" />
                      <span className="leading-relaxed">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {experiment.futureImprovements && (
                <div className="pt-6 border-t border-slate-200">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Future Iteration</h4>
                  <p className="text-sm text-slate-500 font-light italic leading-relaxed">{experiment.futureImprovements}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
