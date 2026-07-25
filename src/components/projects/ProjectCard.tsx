import React from 'react';
import { Project } from '../../types';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className="group h-full bg-white rounded-[2rem] border border-slate-200/60 p-6 sm:p-10 lg:p-12 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col">
      
      <div className={`mb-10 relative overflow-hidden rounded-[1.5rem] bg-slate-50 border border-slate-200/50 ${featured ? 'aspect-[4/3] sm:aspect-video lg:aspect-[16/10]' : 'aspect-[4/3] sm:aspect-video'}`}>
        <Link 
          to={`/projects/${project.id}`} 
          className="block w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900" 
          aria-hidden="true"
          tabIndex={-1}
        >
          <img 
            src={project.image} 
            alt={`Screenshot of ${project.title} interface`}
            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/0 mix-blend-multiply transition-colors duration-700 group-hover:bg-slate-900/5 pointer-events-none" aria-hidden="true"></div>
        </Link>
      </div>
      
      <div className="flex-grow flex flex-col">
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <StatusBadge status={project.status} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{project.domain}</span>
          </div>
          
          <Link 
            to={`/projects/${project.id}`} 
            className="block group-hover:text-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-lg -ml-2 p-2"
          >
            {/* 1. Project Name */}
            <h2 className={`font-medium tracking-tight text-slate-900 mb-3 ${featured ? 'text-3xl' : 'text-2xl'}`}>
              {project.title}
            </h2>
            {/* 2. Product Summary */}
            <p className={`text-slate-600 font-light leading-relaxed ${featured ? 'text-lg' : 'text-base'}`}>
              {project.tagline}
            </p>
          </Link>
        </header>
        
        <div className="mt-auto flex flex-col">
          {/* 3. Engineering Highlight */}
          <div className="mb-8 p-6 bg-slate-50/50 rounded-2xl border border-slate-100">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Engineering Highlight</h3>
            <p className="text-sm font-medium text-slate-800 leading-relaxed">
              {project.engineeringHighlight}
            </p>
          </div>
          
          {/* 4. Action Button */}
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              to={`/projects/${project.id}`}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 w-fit"
              aria-label={`Explore case study for ${project.title}`}
            >
              View Case Study
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
