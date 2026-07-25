import { RoadmapDomain } from '../../../data/roadmaps';
import { ENGINEERING_PROJECTS } from '../../../data/projects';
import { Code2 } from 'lucide-react';
import ProjectWorkspace from '../projects/ProjectWorkspace';

export default function ProjectsView({ domain }: { domain: RoadmapDomain }) {
  const domainProjects = ENGINEERING_PROJECTS.filter(p => p.domainId === domain.id);

  if (domainProjects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-24 animate-in fade-in duration-500">
        <Code2 className="w-12 h-12 text-slate-200 mb-6" />
        <h3 className="text-lg font-medium text-slate-900 mb-2">No Applied Projects</h3>
        <p className="text-sm text-slate-500 max-w-md">Theoretical knowledge currently being transitioned into practical application.</p>
      </div>
    );
  }

  return (
    <div className="space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
            <Code2 className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Build Process
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight">Applied Projects</h2>
        <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
          Real-world implementations demonstrating how these engineering concepts evolve from initial problem discovery to production-ready systems.
        </p>
      </div>

      <div className="space-y-32">
        {domainProjects.map((project, index) => (
          <div key={project.id} className={index > 0 ? 'pt-24 border-t border-slate-200' : ''}>
            <ProjectWorkspace project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
