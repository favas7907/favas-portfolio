import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EngineeringNote } from '../../data/knowledgeBase';
import { FileText, ChevronDown, Calendar, ExternalLink } from 'lucide-react';

interface EngineeringNoteCardProps {
  note: EngineeringNote;
}

export default function EngineeringNoteCard({ note }: EngineeringNoteCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors">
      <div 
        className="p-6 md:p-8 cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-200 px-2 py-1 rounded bg-slate-50">
              {note.category}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {note.difficulty}
            </span>
          </div>
          <div className="flex items-center text-xs text-slate-400 font-medium">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            {note.lastUpdated}
          </div>
        </div>

        <h3 className="text-xl font-medium text-slate-900 mb-3 group-hover:text-primary transition-colors">
          {note.title}
        </h3>
        
        <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
          {note.summary}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
              {note.technology}
            </span>
          </div>
          <button className="text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors flex items-center">
            {isExpanded ? 'Collapse Note' : 'Read Note'}
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
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
            <div className="px-6 md:px-8 pb-8 pt-4 border-t border-slate-100 bg-slate-50">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Core Insight</h4>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed bg-white border border-slate-200 p-5 rounded-xl">
                    {note.insight}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Observations</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {note.observations}
                  </p>
                </div>

                {note.codeSnippet && (
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Implementation Reference</h4>
                    <pre className="bg-slate-900 text-slate-50 p-5 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed">
                      <code>{note.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {note.links.length > 0 && (
                  <div className="pt-6 border-t border-slate-200">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Reference Links</h4>
                    <div className="flex flex-wrap gap-3">
                      {note.links.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-primary hover:text-primary-dark bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors flex items-center"
                        >
                          {link.label}
                          <ExternalLink className="w-3 h-3 ml-1.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
