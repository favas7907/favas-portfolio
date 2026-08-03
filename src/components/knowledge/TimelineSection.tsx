import { useState } from 'react';
import { motion } from 'motion/react';
import { LEARNING_TIMELINE } from '../../data/knowledgeBase';
import { History, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TimelineSection() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const visibleEntries = LEARNING_TIMELINE.slice(0, visibleCount);
  const hasMore = visibleCount < LEARNING_TIMELINE.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 5);
      setIsLoading(false);
    }, 600);
  };

  return (
    <section>
      <div className="flex items-center gap-4 mb-12 border-b border-slate-200 pb-6">
        <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shrink-0">
          <History className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-slate-900">Learning Timeline</h2>
          <p className="text-slate-500 font-light mt-1">Chronological growth and engineering milestones</p>
        </div>
      </div>

      <div className="relative border-l border-slate-200 ml-6 md:ml-8 space-y-12">
        {visibleEntries.map((entry, idx) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (idx % 5) * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white" />
            
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-colors">
              <div className="flex flex-wrap items-baseline gap-4 mb-4">
                <span className="text-sm font-medium text-primary">{entry.date}</span>
                <h3 className="text-xl font-medium text-slate-900">{entry.title}</h3>
              </div>

              <div className="prose prose-slate prose-sm font-light leading-relaxed max-w-none mb-8">
                <p>{entry.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Immediate Impact</h4>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">{entry.impact}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Future Influence</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{entry.futureInfluence}</p>
                </div>
              </div>

              {entry.relatedProjectIds.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-2">Applied In:</span>
                  {entry.relatedProjectIds.map(projectId => (
                    <Link 
                      key={projectId}
                      to={`/projects/${projectId}`}
                      className="text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors flex items-center group"
                    >
                      View Project
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 text-center pl-6 md:pl-8">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="inline-flex items-center text-sm font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 px-6 py-3 rounded-xl transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Loading Historical Entries...
              </>
            ) : (
              'Load Historical Entries'
            )}
          </button>
        </div>
      )}
    </section>
  );
}
