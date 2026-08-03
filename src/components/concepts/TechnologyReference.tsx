import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TechnologyReferenceProps {
  technologies: string[];
}

export default function TechnologyReference({ technologies }: TechnologyReferenceProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div>
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
        <Code2 className="w-3 h-3" />
        Implemented Via
      </h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => {
          // Convert tech name to URL-friendly ID (simplified)
          const techId = tech.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          
          return (
            <Link
              key={idx}
              to={`/skills/${techId}`}
              className="inline-flex px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 hover:text-primary hover:border-primary/20 transition-colors"
            >
              {tech}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
