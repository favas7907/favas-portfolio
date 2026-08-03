import { TechnologyProject } from '../../data/technologies';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectReference({ project }: { project: TechnologyProject }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-sm transition-shadow group">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
            {project.name}
          </h3>
          <p className="text-sm font-medium text-slate-500">{project.role}</p>
        </div>
        
        <div className="flex items-center gap-3 shrink-0">
          {project.repository && (
            <a 
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
              aria-label={`View ${project.name} repository`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.live && (
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
              aria-label={`View ${project.name} live`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Contribution</h4>
        <p className="text-sm md:text-base text-slate-700 font-light leading-relaxed">
          {project.contribution}
        </p>
      </div>

      {project.caseStudyUrl && (
        <div className="mt-8 pt-6 border-t border-slate-100">
          <Link 
            to={project.caseStudyUrl}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            Read Case Study
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}
