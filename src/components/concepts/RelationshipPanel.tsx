import { ENGINEERING_CONCEPTS } from '../../data/concepts';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RelationshipPanelProps {
  relatedIds: string[];
}

export default function RelationshipPanel({ relatedIds }: RelationshipPanelProps) {
  if (!relatedIds || relatedIds.length === 0) return null;

  const relatedConcepts = relatedIds
    .map(id => ENGINEERING_CONCEPTS.find(c => c.id === id))
    .filter(c => c !== undefined);

  if (relatedConcepts.length === 0) return null;

  return (
    <div>
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
        <LinkIcon className="w-3 h-3" />
        Related Concepts
      </h4>
      <div className="flex flex-col gap-2">
        {relatedConcepts.map(concept => (
          <button
            key={concept!.id}
            onClick={() => {
              const el = document.getElementById(`concept-${concept!.id}`);
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="group flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white transition-all text-left"
          >
            <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">
              {concept!.title}
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </button>
        ))}
      </div>
    </div>
  );
}
