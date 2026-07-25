import { PerspectiveId } from './types';
import { PERSPECTIVES } from './constants';

interface ExplorerPanelProps {
  activePerspective: PerspectiveId;
  onChange: (id: PerspectiveId) => void;
}

export default function ExplorerPanel({ activePerspective, onChange }: ExplorerPanelProps) {
  return (
    <nav className="flex flex-col gap-1 w-full">
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 px-3">
        Explorer
      </h3>
      {PERSPECTIVES.map(p => {
        const Icon = p.icon;
        const isActive = activePerspective === p.id;
        
        return (
          <button
            key={p.id}
            onClick={() => onChange(p.id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 w-full ${
              isActive 
                ? 'bg-blue-50/80 text-blue-700 shadow-sm' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
            <span className="truncate">{p.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
