import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, Layers, FileText, Code2 } from 'lucide-react';
import { Concept } from '../../data/concepts';
import ProjectReference from './ProjectReference';
import TechnologyReference from './TechnologyReference';
import ArchitecturePreview from './ArchitecturePreview';
import RelationshipPanel from './RelationshipPanel';
import ResourceCollection from './ResourceCollection';

interface ConceptCardProps {
  concept: Concept;
}

export default function ConceptCard({ concept }: ConceptCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      id={`concept-${concept.id}`}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    >
      {/* Header / Summary (Always Visible) */}
      <div 
        className="p-6 md:p-8 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-medium text-slate-900 mb-3 tracking-tight">
              {concept.title}
            </h3>
            <p className="text-lg text-slate-500 font-light leading-relaxed mb-6">
              {concept.summary}
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              {concept.technologies && concept.technologies.length > 0 && (
                <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <Code2 className="w-4 h-4 text-slate-400" />
                  {concept.technologies.length} Implementations
                </span>
              )}
              {concept.projects && concept.projects.length > 0 && (
                <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <Layers className="w-4 h-4 text-slate-400" />
                  {concept.projects.length} Projects
                </span>
              )}
            </div>
          </div>
          <div className={`p-3 rounded-full bg-slate-50 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-blue-50 text-blue-600' : ''}`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 pt-4 border-t border-slate-100 flex flex-col gap-12">
              
              {/* Why It Exists & Problem Solved */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Why It Exists</h4>
                  <p className="text-base text-slate-700 leading-relaxed font-light">
                    {concept.whyItExists}
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Real-world Problem</h4>
                  <p className="text-base text-slate-700 leading-relaxed font-light">
                    {concept.problemSolved}
                  </p>
                </div>
              </div>

              {/* Core Principles */}
              {concept.principles && concept.principles.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    Core Principles
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {concept.principles.map((principle, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <ArrowRight className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                        <span className="text-slate-700 text-sm font-medium leading-relaxed">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Common Mistakes */}
              {concept.commonMistakes && concept.commonMistakes.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    Common Mistakes
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {concept.commonMistakes.map((mistake, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-light">
                        <span className="text-red-400 mt-0.5 font-bold">×</span>
                        <span className="leading-relaxed">{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture Preview (Optional, driven by data if present) */}
              {concept.questions && <ArchitecturePreview questions={concept.questions} />}

              {/* Dependencies & Relationships */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <TechnologyReference technologies={concept.technologies} />
                <RelationshipPanel relatedIds={concept.relatedConceptIds} />
              </div>

              {/* Projects Utilizing It */}
              <ProjectReference projects={concept.projects} />

              {/* Resources & Insights */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 border-t border-slate-100 pt-12">
                <ResourceCollection resources={concept.resources} />
                
                {concept.insights && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      Personal Notes
                    </h4>
                    <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50 relative">
                      <FileText className="absolute top-6 right-6 w-5 h-5 text-blue-200" />
                      <p className="text-sm text-slate-700 leading-relaxed italic font-medium">
                        "{concept.insights}"
                      </p>
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
