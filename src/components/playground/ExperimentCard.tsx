import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Experiment } from '../../data/experiments';
import ExperimentStateBadge from './ExperimentStateBadge';
import HypothesisPanel from './HypothesisPanel';
import BenchmarkView from './BenchmarkView';
import ComparisonView from './ComparisonView';
import FailureLogView from './FailureLogView';
import { ChevronDown, Calendar, ArrowRight, Wrench, BookOpen, Layers } from 'lucide-react';

export default function ExperimentCard({ experiment }: { experiment: Experiment }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Header (Always visible) */}
      <div 
        className="p-6 md:p-8 cursor-pointer select-none group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-sm">
                {experiment.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(experiment.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
              {experiment.title}
            </h3>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <ExperimentStateBadge state={experiment.state} />
            <div className={`p-2 rounded-full bg-slate-50 border border-slate-100 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </div>
        
        <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light line-clamp-2">
          {experiment.hypothesis}
        </p>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-100"
          >
            <div className="p-6 md:p-8 space-y-12 bg-slate-50/30">
              
              <HypothesisPanel 
                hypothesis={experiment.hypothesis}
                problem={experiment.problem}
                motivation={experiment.motivation}
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-500" /> Approach
                    </h4>
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed">{experiment.approach}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-orange-500" /> Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experiment.toolsUsed.map(tool => (
                        <span key={tool} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8 lg:border-l lg:border-slate-200 lg:pl-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Expected</h4>
                    <p className="text-sm text-slate-600 italic font-light">{experiment.expectedOutcome}</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Actual</h4>
                    <p className="text-sm text-slate-800 font-medium">{experiment.actualOutcome}</p>
                  </div>
                </div>
              </div>

              {experiment.benchmarks && (
                <BenchmarkView benchmarks={experiment.benchmarks} />
              )}

              {experiment.comparison && (
                <ComparisonView comparison={experiment.comparison} />
              )}

              {experiment.failureLog && (
                <FailureLogView log={experiment.failureLog} />
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-500" /> Lessons Learned
                  </h4>
                  <ul className="space-y-3">
                    {experiment.lessonsLearned.map((lesson, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-500" /> Trade-offs
                  </h4>
                  <ul className="space-y-3">
                    {experiment.tradeOffs.map((tradeoff, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{tradeoff}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {(experiment.connectedProjects || experiment.connectedConcepts) && (
                <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-6">
                  {experiment.connectedProjects && experiment.connectedProjects.length > 0 && (
                    <div className="flex-1 space-y-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Connected Projects</h4>
                      <div className="flex flex-wrap gap-2">
                        {experiment.connectedProjects.map(p => (
                          <span key={p.name} className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-sm border border-blue-100 hover:bg-blue-100 transition-colors cursor-pointer">
                            {p.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {experiment.connectedConcepts && experiment.connectedConcepts.length > 0 && (
                    <div className="flex-1 space-y-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Related Concepts</h4>
                      <div className="flex flex-wrap gap-2">
                        {experiment.connectedConcepts.map(c => (
                          <span key={c} className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-sm border border-slate-200">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
