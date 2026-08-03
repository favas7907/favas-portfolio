import { useState, useMemo } from 'react';
import { PROJECTS } from '../../constants/data';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import TechIcon from '../TechIcon';

const ALL_FILTER = 'All';

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-500 gradient-border">
        {/* Image — tall aspect ratio */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          
          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg backdrop-blur-md border ${
              project.status === 'Production' ? 'bg-emerald-500/20 text-white border-emerald-500/30' :
              project.status === 'Open Source' ? 'bg-primary/20 text-white border-primary/30' :
              project.status === 'Beta' ? 'bg-amber-500/20 text-white border-amber-500/30' :
              'bg-white/20 text-white border-white/20'
            }`}>
              {project.status}
            </span>
          </div>

          {/* Title overlay on image */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-white/70">{project.year} · {project.role}</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 md:p-6">
          <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-2">
            {project.tagline}
          </p>
          
          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.slice(0, 4).map(t => (
              <span key={t} className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-primary bg-primary/5 border border-primary/10 px-2.5 py-1.5 rounded-lg">
                <TechIcon name={t} size={14} />
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-[10px] font-semibold text-slate-400 px-2.5 py-1.5">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            {project.details ? (
              <Link
                to={`/projects/${project.id}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-white text-xs font-bold uppercase tracking-wider rounded-lg btn-accent transition-all duration-300"
              >
                Case Study <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            ) : null}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-lg hover:border-primary hover:text-primary transition-all duration-300 ${project.details ? '' : 'flex-1'}`}
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {!project.details && !project.live && (
              <Link
                to={`/projects/${project.id}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
              >
                View Project <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const domains = useMemo(() => {
    const unique = [...new Set(PROJECTS.map(p => p.domain))];
    return [ALL_FILTER, ...unique];
  }, []);

  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);

  const filtered = useMemo(() => {
    if (activeFilter === ALL_FILTER) return PROJECTS;
    return PROJECTS.filter(p => p.domain === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-white pb-24 md:pb-32 pt-4" aria-label="Projects catalogue">
      <div className="container-custom">
        
        {/* Filter Tabs — horizontally scrollable on mobile */}
        <div className="mb-10 overflow-x-auto hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex items-center gap-2 min-w-max">
            {domains.map(domain => (
              <button
                key={domain}
                onClick={() => setActiveFilter(domain)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
                  activeFilter === domain
                    ? 'bg-gradient-to-r from-primary via-purple-600 to-accent text-white shadow-md shadow-primary/20'
                    : 'text-slate-400 hover:text-black hover:bg-slate-50'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-slate-400">
            Showing <span className="font-semibold text-black">{filtered.length}</span> of {PROJECTS.length} projects
          </p>
        </div>

        {/* Project Grid — 1 col mobile, 2 col tablet, 2 col desktop for bigger cards */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
