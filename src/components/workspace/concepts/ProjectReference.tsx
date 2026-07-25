import { Concept } from '../../../data/concepts';
import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectReference({ concept }: { concept: Concept }) {
  if (concept.projects.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
        <Code2 className="w-4 h-4" /> Applied Projects
      </h3>
      {concept.projects.map((project, idx) => (
        <Link key={idx} to={project.url} className="group block p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-colors shadow-sm hover:shadow-md">
          <h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{project.title}</h4>
          <p className="text-xs text-slate-500 font-light line-clamp-2 leading-relaxed">{project.description}</p>
        </Link>
      ))}
    </div>
  );
}
