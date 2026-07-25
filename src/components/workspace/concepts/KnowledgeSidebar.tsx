import { Concept } from '../../../data/concepts';
import { ChevronRight } from 'lucide-react';

interface KnowledgeSidebarProps {
  concepts: Concept[];
  activeId: string;
  onChange: (id: string) => void;
}

export default function KnowledgeSidebar({ concepts, activeId, onChange }: KnowledgeSidebarProps) {
  return (
    <div className="flex flex-col gap-2">
      {concepts.map((concept) => {
        const isActive = concept.id === activeId;
        return (
          <button
            key={concept.id}
            onClick={() => onChange(concept.id)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-left ${
              isActive 
                ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-200'
            }`}
          >
            <span className="truncate pr-4">{concept.title}</span>
            {isActive && <ChevronRight className="w-4 h-4 shrink-0 text-blue-500" />}
          </button>
        );
      })}
    </div>
  );
}
