import { Project } from '../../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function ProductHero({ project }: { project: Project }) {
  return (
    <article className="mb-24 md:mb-32 relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm flex flex-col xl:flex-row group transition-all duration-500 hover:border-slate-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
       {/* Content Side */}
       <div className="xl:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center relative z-10 order-2 xl:order-1">
          <header className="mb-8">
             <div className="flex items-center gap-4 mb-8">
                <StatusBadge status={project.status} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{project.domain}</span>
             </div>
             
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 leading-[1.1]">
                {project.title}
             </h2>
             <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                {project.tagline}
             </p>
          </header>
          
          <div className="mb-10">
             <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
               <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Highlight</h3>
               <p className="text-sm font-medium text-slate-700 leading-relaxed">
                 {project.engineeringHighlight}
               </p>
             </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
             <Link 
                to={`/projects/${project.id}`} 
                className="btn-accent"
                aria-label={`View case study for ${project.title}`}
             >
                View Case Study
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
             </Link>
          </div>
       </div>

       {/* Image Side */}
       <div className="xl:w-1/2 w-full h-[50vh] min-h-[400px] xl:min-h-full xl:h-auto relative bg-slate-100 order-1 xl:order-2 overflow-hidden border-b xl:border-b-0 xl:border-l border-slate-200">
           <Link to={`/projects/${project.id}`} className="block w-full h-full focus:outline-none" tabIndex={-1} aria-hidden="true">
              <img 
                 src={project.image} 
                 alt={`Interface screenshot of ${project.title}`} 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                 loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
           </Link>
       </div>
    </article>
  )
}
