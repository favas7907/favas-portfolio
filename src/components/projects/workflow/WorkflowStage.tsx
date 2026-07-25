import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface WorkflowStageProps {
  phase: string;
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export default function WorkflowStage({ phase, title, children, defaultExpanded = false }: WorkflowStageProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border-l-2 border-slate-100 pl-6 md:pl-10 relative pb-16 last:pb-0 group">
      <div className="absolute w-3 h-3 rounded-full bg-white border-2 border-blue-500 -left-[7px] top-1.5 ring-4 ring-white group-hover:scale-125 transition-transform duration-300" />
      
      <div 
        className="cursor-pointer group/header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2 block">{phase}</span>
        <div className="flex items-center justify-between">
          <h3 className="text-xl md:text-2xl font-medium tracking-tight text-slate-900 group-hover/header:text-blue-600 transition-colors">
            {title}
          </h3>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 group-hover/header:bg-blue-50 group-hover/header:text-blue-500 transition-all duration-300 ${isExpanded ? 'rotate-180 bg-blue-50 text-blue-500' : ''}`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-8 pb-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
