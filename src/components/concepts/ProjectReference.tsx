import { Folder } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectReferenceProps {
  projects: {
    title: string;
    url: string;
    description: string;
  }[];
}

export default function ProjectReference({ projects }: ProjectReferenceProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <div>
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
        <Folder className="w-3 h-3" />
        Applied In Projects
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <Link
            key={idx}
            to={project.url}
            className="group block p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-[0_4px_20px_-4px_rgba(37,99,235,0.1)] transition-all bg-white"
          >
            <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              {project.title}
            </h5>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
