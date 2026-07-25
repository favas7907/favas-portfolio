import { BuildLogEntry } from '../../../data/projects';
import { Calendar, CheckCircle2, XCircle, Zap, IterationCcw } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function BuildLogCard({ log }: { log: BuildLogEntry }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formattedDate = new Date(log.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-colors shadow-sm">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 flex items-center justify-between"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Calendar className="w-3 h-3" />
            {formattedDate}
          </div>
          <h4 className="text-lg font-medium text-slate-900">{log.decision}</h4>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-slate-100 transition-colors ${isExpanded ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
          <IterationCcw className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 space-y-6 border-t border-slate-100 pt-6">
              
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-rose-500 flex items-center gap-2 mb-2">
                  <XCircle className="w-3 h-3" /> The Challenge
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed">{log.challenge}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Alternative Considered</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">{log.alternative}</p>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-3 h-3" /> Resolution
                  </h5>
                  <p className="text-sm text-slate-700 leading-relaxed">{log.resolution}</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <h5 className="text-xs font-bold uppercase tracking-widest text-blue-600 flex items-center gap-2 mb-2">
                  <Zap className="w-3 h-3" /> Impact & Reflection
                </h5>
                <p className="text-sm text-slate-700 mb-2"><span className="font-medium text-slate-900">Impact:</span> {log.impact}</p>
                <p className="text-sm text-slate-700"><span className="font-medium text-slate-900">Reflection:</span> {log.reflection}</p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
