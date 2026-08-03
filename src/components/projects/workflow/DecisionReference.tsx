import React, { useState } from 'react';
import { EngineeringDecision } from '../../../types';
import { Network, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DecisionReferenceProps {
  decision: EngineeringDecision;
}

export default function DecisionReference({ decision }: DecisionReferenceProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mt-6 shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors"
      >
        <Network className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div className="flex-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Architecture Decision</span>
          <h4 className="text-base font-medium tracking-tight text-slate-900">{decision.title}</h4>
        </div>
        <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-100 bg-slate-50"
          >
            <div className="p-6 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Context</span>
                <p className="text-sm text-slate-600 leading-relaxed">{decision.context}</p>
              </div>
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Chosen Solution</span>
                <p className="text-sm text-slate-900 font-medium leading-relaxed mb-2">{decision.chosenSolution}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{decision.justification}</p>
              </div>

              {decision.tradeOffs.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Trade-offs</span>
                  <ul className="space-y-2">
                    {decision.tradeOffs.map((tradeoff, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-slate-400 mt-0.5">-</span>
                        <span className="text-xs text-slate-600 leading-relaxed">{tradeoff}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
