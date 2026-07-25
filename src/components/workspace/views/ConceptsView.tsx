import { useState } from 'react';
import { RoadmapDomain } from '../../../data/roadmaps';
import { ENGINEERING_CONCEPTS } from '../../../data/concepts';
import KnowledgeSidebar from '../concepts/KnowledgeSidebar';
import ConceptWorkspace from '../concepts/ConceptWorkspace';
import { BookOpen } from 'lucide-react';

export default function ConceptsView({ domain }: { domain: RoadmapDomain }) {
  const concepts = ENGINEERING_CONCEPTS.filter(c => c.domainId === domain.id);
  const [activeConceptId, setActiveConceptId] = useState(concepts[0]?.id);

  if (concepts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-24 animate-in fade-in duration-500">
        <BookOpen className="w-12 h-12 text-slate-200 mb-6" />
        <h3 className="text-lg font-medium text-slate-900 mb-2">No Concepts Mapped</h3>
        <p className="text-sm text-slate-500 max-w-md">Engineering concepts are currently being documented for this domain.</p>
      </div>
    );
  }

  const activeConcept = concepts.find(c => c.id === activeConceptId) || concepts[0];

  return (
    <div className="flex flex-col lg:flex-row gap-12 h-full animate-in fade-in duration-500">
      <div className="w-full lg:w-64 shrink-0 lg:border-r border-slate-100 lg:pr-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
          <BookOpen className="w-4 h-4" /> Core Concepts
        </h3>
        <KnowledgeSidebar 
          concepts={concepts} 
          activeId={activeConceptId} 
          onChange={setActiveConceptId} 
        />
      </div>
      <div className="flex-1 min-w-0">
        <ConceptWorkspace concept={activeConcept} />
      </div>
    </div>
  );
}
