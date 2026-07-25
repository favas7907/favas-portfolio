import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, Github, ExternalLink, Activity, Target, ShieldCheck, Cpu } from 'lucide-react';
import { Project } from '../../../types';
import { Link } from 'react-router-dom';

interface ProjectEvidenceCardProps {
  project: Project;
  index: number;
}

export default function ProjectEvidenceCard({ project, index }: ProjectEvidenceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8"
    >
      {/* Editorial Header (Always visible) */}
      <div 
        className="p-6 md:p-8 cursor-pointer group flex flex-col md:flex-row md:items-start justify-between gap-6 relative"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
              {project.tech[0] || 'Engineering'}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {project.year}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              {project.role}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
            {project.tagline}
          </p>
          
          {/* Hover Preview Summary (Only visible on hover when closed, on desktop) */}
          <div className={`hidden md:block overflow-hidden transition-all duration-500 ${!isExpanded ? 'max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-4' : 'max-h-0 opacity-0'}`}>
            <p className="text-sm text-slate-600 font-light leading-relaxed border-l-2 border-slate-200 pl-4">
              {project.details.problem}
            </p>
          </div>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-6 mt-4 md:mt-0 shrink-0">
          <div className="flex items-center gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-slate-900 transition-colors" onClick={e => e.stopPropagation()}>
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-slate-900 transition-colors" onClick={e => e.stopPropagation()}>
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
          
          <div className={`p-3 rounded-full bg-slate-50 text-slate-400 transition-transform duration-500 ${isExpanded ? 'rotate-180 bg-blue-50 text-blue-600' : ''}`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Expanded Evidence Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-slate-100 bg-slate-50/50"
          >
            <div className="p-6 md:p-8 lg:p-12 space-y-12">
              
              {/* Context & Problem */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">
                    <Target className="w-4 h-4 text-blue-600" />
                    Engineering Problem
                  </h4>
                  <p className="text-base text-slate-600 font-light leading-relaxed">
                    {project.details.problem}
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    Core Architecture
                  </h4>
                  <p className="text-base text-slate-600 font-light leading-relaxed">
                    {project.details.architecture.overview}
                  </p>
                </div>
              </div>

              {/* Engineering Evidence / Decisions */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 border-b border-slate-200 pb-4">
                  Engineering Evidence
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.details.engineeringDecisions.slice(0, 2).map((decision, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Decision Log</div>
                      <h5 className="text-sm font-bold text-slate-900 mb-3 leading-tight">{decision.title}</h5>
                      <p className="text-sm text-slate-600 font-light leading-relaxed mb-4">
                        {decision.context}
                      </p>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <span className="text-xs font-bold text-slate-700 block mb-1">Chosen Solution:</span>
                        <span className="text-xs text-slate-600 font-light">{decision.chosenSolution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measurable Outcomes */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">
                  <Activity className="w-4 h-4 text-blue-600" />
                  Measurable Impact
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.details.results.performanceMetrics.slice(0, 2).map((metric, idx) => (
                    <div key={`perf-${idx}`} className="bg-white p-5 rounded-xl border border-slate-200">
                      <div className="text-2xl font-light text-slate-900 mb-1">{metric.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{metric.label}</div>
                    </div>
                  ))}
                  {project.details.results.reliabilityMetrics.slice(0, 2).map((metric, idx) => (
                    <div key={`rel-${idx}`} className="bg-white p-5 rounded-xl border border-slate-200">
                      <div className="text-2xl font-light text-slate-900 mb-1">{metric.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Concepts & Tech */}
              <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-start justify-between gap-8">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Technologies Proven</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={`/projects/${project.id}`}
                  className="group inline-flex items-center justify-center bg-slate-900 text-white px-8 py-3.5 rounded-xl text-sm font-medium transition-all hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 shrink-0"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
