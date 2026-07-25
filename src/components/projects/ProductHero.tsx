import React from 'react';
import { Project } from '../../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function ProductHero({ project }: { project: Project }) {
  return (
    <article className="mb-24 md:mb-32 relative rounded-[2rem] overflow-hidden bg-white border border-slate-200/60 shadow-sm flex flex-col xl:flex-row group transition-colors hover:border-slate-300">
       {/* Content Side */}
       <div className="xl:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center relative z-10 order-2 xl:order-1">
          <header className="mb-8">
             <div className="flex items-center gap-4 mb-8">
                <StatusBadge status={project.status} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{project.domain}</span>
             </div>
             
             {/* 1. Project Name */}
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-6">
                {project.title}
             </h2>
             {/* 2. Product Summary */}
             <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                {project.tagline}
             </p>
          </header>
          
          <div className="mb-10">
             {/* 3. Engineering Highlight */}
             <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
               <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Engineering Highlight</h3>
               <p className="text-sm font-medium text-slate-800 leading-relaxed">
                 {project.engineeringHighlight}
               </p>
             </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
             {/* 4. Primary Action Button */}
             <Link 
                to={`/projects/${project.id}`} 
                className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                aria-label={`View case study for ${project.title}`}
             >
                View Case Study
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
             </Link>
          </div>
       </div>

       {/* Image Side */}
       <div className="xl:w-1/2 w-full h-[50vh] min-h-[400px] xl:min-h-full xl:h-auto relative bg-slate-50 order-1 xl:order-2 overflow-hidden border-b xl:border-b-0 xl:border-l border-slate-200/60">
           <Link to={`/projects/${project.id}`} className="block w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" tabIndex={-1} aria-hidden="true">
              <img 
                 src={project.image} 
                 alt={`Interface screenshot of ${project.title}`} 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.02]" 
                 loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/0 transition-colors duration-700 group-hover:bg-slate-900/5 mix-blend-multiply pointer-events-none" aria-hidden="true"></div>
           </Link>
       </div>
    </article>
  )
}
