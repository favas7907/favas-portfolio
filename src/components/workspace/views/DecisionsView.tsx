import { useState } from 'react';
import { RoadmapDomain } from '../../../data/roadmaps';
import { ENGINEERING_DECISIONS } from '../../../data/decisions';
import { Scale } from 'lucide-react';
import DecisionSidebar from '../decisions/DecisionSidebar';
import DecisionWorkspace from '../decisions/DecisionWorkspace';

export default function DecisionsView({ domain }: { domain: RoadmapDomain }) {
  const decisions = ENGINEERING_DECISIONS.filter(d => d.domainId === domain.id);
  const [activeDecisionId, setActiveDecisionId] = useState(decisions[0]?.id);

  if (decisions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-24 animate-in fade-in duration-500">
        <Scale className="w-12 h-12 text-slate-200 mb-6" />
        <h3 className="text-lg font-medium text-slate-900 mb-2">No Documented Decisions</h3>
        <p className="text-sm text-slate-500 max-w-md">Engineering decisions and trade-offs are currently being catalogued for this domain.</p>
      </div>
    );
  }

  const activeDecision = decisions.find(d => d.id === activeDecisionId) || decisions[0];

  return (
    <div className="flex flex-col lg:flex-row gap-12 h-full animate-in fade-in duration-500">
      <div className="w-full lg:w-64 shrink-0 lg:border-r border-slate-100 lg:pr-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
          <Scale className="w-4 h-4" /> Decisions
        </h3>
        <DecisionSidebar 
          decisions={decisions} 
          activeId={activeDecisionId} 
          onChange={setActiveDecisionId} 
        />
      </div>
      <div className="flex-1 min-w-0">
        <DecisionWorkspace decision={activeDecision} />
      </div>
    </div>
  );
}
