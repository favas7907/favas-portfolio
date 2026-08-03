import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ExperienceItemData {
  id: string;
  role: string;
  organization: string;
  period: string;
  category: string;
  summary: React.ReactNode;
  challenge: React.ReactNode;
  responsibility: React.ReactNode;
  actions: React.ReactNode;
  impact: React.ReactNode;
  learning: React.ReactNode;
  influence: React.ReactNode;
  links?: { label: string; url: string }[];
}

export default function Experience({ items }: { items: ExperienceItemData[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string, ref: React.RefObject<HTMLDivElement | null>) => {
    const isExpanding = expandedId !== id;
    setExpandedId(isExpanding ? id : null);
    
    if (isExpanding && ref.current) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  };

  return (
    <div className="space-y-8 md:space-y-12">
      {items.map((item, index) => (
        <ExperienceNode
          key={item.id}
          item={item}
          index={index}
          isExpanded={expandedId === item.id}
          onToggle={(ref) => handleToggle(item.id, ref)}
        />
      ))}
    </div>
  );
}

function ExperienceNode({ 
  item, 
  index, 
  isExpanded, 
  onToggle 
}: { 
  item: ExperienceItemData; 
  index: number; 
  isExpanded: boolean; 
  onToggle: (ref: React.RefObject<HTMLDivElement | null>) => void;
}) {
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: Math.min(index * 0.1, 0.4), ease: [0.16, 1, 0.3, 1] }}
      className="border border-slate-100 rounded-2xl bg-white overflow-hidden scroll-mt-24 transition-all duration-300 hover:border-slate-200"
    >
      <button 
        onClick={() => onToggle(itemRef)}
        className="w-full text-left p-6 md:p-8 focus:outline-none group flex flex-col md:flex-row md:items-start justify-between gap-6"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {item.period}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-200"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded-full">
              {item.category}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-medium tracking-tight text-slate-900 group-hover:text-primary transition-colors duration-300 mb-2">
            {item.role}
          </h3>
          <p className="text-base text-slate-500 font-medium mb-3">
            {item.organization}
          </p>
          <div className="text-sm text-slate-500 font-light max-w-2xl">
            {item.summary}
          </div>
        </div>
        
        <div className={`hidden md:flex shrink-0 items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${isExpanded ? 'bg-black border-black text-white' : 'border-slate-200 text-slate-400 group-hover:border-black group-hover:text-black'}`}>
          {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
        <div className="md:hidden flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2 group-hover:text-black transition-colors">
          {isExpanded ? 'Close details' : 'View impact'}
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 md:px-8 pb-8 pt-4 border-t border-slate-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Column */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      The Challenge
                    </h4>
                    <div className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
                      {item.challenge}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      Responsibility
                    </h4>
                    <div className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
                      {item.responsibility}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                      Actions Taken
                    </h4>
                    <div className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
                      {item.actions}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      The Impact
                    </h4>
                    <div className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
                      {item.impact}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                      What I Learned
                    </h4>
                    <div className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
                      {item.learning}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                      Future Influence
                    </h4>
                    <div className="text-sm md:text-base text-slate-600 font-light leading-relaxed italic">
                      {item.influence}
                    </div>
                  </div>
                  
                  {item.links && item.links.length > 0 && (
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex flex-col gap-3">
                        {item.links.map((link, i) => (
                          <Link 
                            key={i}
                            to={link.url}
                            className="group/link inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-primary transition-colors"
                          >
                            {link.label}
                            <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
