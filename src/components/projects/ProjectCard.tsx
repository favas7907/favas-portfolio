import { Project } from '../../types';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import { ArrowUpRight } from 'lucide-react';
import TechIcon from '../TechIcon';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className="group h-full bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover-lift flex flex-col relative gradient-border">
      {/* Colorful gradient accent on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.15), 0 0 30px -10px rgba(124, 58, 237, 0.08)' }}
      />
      
      {/* Image */}
      <Link 
        to={`/projects/${project.id}`} 
        className="block relative overflow-hidden bg-slate-100" 
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className={`${featured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
          <img 
            src={project.image} 
            alt={`Screenshot of ${project.title} interface`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            loading="lazy"
          />
        </div>
        {/* Rich gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Floating project info on image */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center gap-2 mb-1.5">
            <StatusBadge status={project.status} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">{project.year}</span>
          </div>
          <h2 className={`font-bold tracking-tight text-white leading-snug ${featured ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'}`}>
            {project.title}
          </h2>
        </div>
        
        {/* Floating action icon */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-400 shadow-sm z-20">
          <ArrowUpRight className="w-4 h-4 text-black" />
        </div>
      </Link>
      
      {/* Content */}
      <div className="flex-grow flex flex-col p-6 lg:p-7">
        <p className={`text-slate-500 leading-relaxed mb-5 ${featured ? 'text-base' : 'text-sm'}`}>
          {project.tagline}
        </p>
        
        <div className="mt-auto flex flex-col gap-5">
          {/* Engineering Highlight — creative card */}
          <div className="p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100 group-hover:border-primary/10 transition-colors duration-500">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-2">Engineering Insight</h3>
            <p className="text-sm font-medium text-slate-600 leading-relaxed">
              {project.engineeringHighlight}
            </p>
          </div>
          
          {/* Tech tags with icons */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map(t => (
              <span key={t} className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-2.5 py-1.5 rounded-lg bg-slate-50 group-hover:bg-primary/5 group-hover:text-primary/70 transition-colors duration-500">
                <TechIcon name={t} size={14} />
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider px-2.5 py-1.5">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
          
          {/* Actions */}
          <div className="flex gap-3">
            <Link 
              to={`/projects/${project.id}`}
              className="btn-accent flex-1"
              aria-label={`View case study for ${project.title}`}
            >
              Case Study
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            {project.live && (
              <a 
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1"
                aria-label={`Live demo of ${project.title}`}
              >
                Live Demo
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
