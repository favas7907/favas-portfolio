import { EngineeringDecision } from '../../../data/decisions';
import { ChevronRight } from 'lucide-react';

interface DecisionSidebarProps {
  decisions: EngineeringDecision[];
  activeId: string;
  onChange: (id: string) => void;
}

export default function DecisionSidebar({ decisions, activeId, onChange }: DecisionSidebarProps) {
  return (
    <div className="flex flex-col gap-2">
      {decisions.map((decision) => {
        const isActive = decision.id === activeId;
        return (
          <button
            key={decision.id}
            onClick={() => onChange(decision.id)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-left ${
              isActive 
                ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-200'
            }`}
          >
            <span className="truncate pr-4">{decision.title}</span>
            {isActive && <ChevronRight className="w-4 h-4 shrink-0 text-blue-500" />}
          </button>
        );
      })}
    </div>
  );
}
