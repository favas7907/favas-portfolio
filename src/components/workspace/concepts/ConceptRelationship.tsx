import { Concept, ENGINEERING_CONCEPTS } from '../../../data/concepts';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';

export default function ConceptRelationship({ concept }: { concept: Concept }) {
  const relatedConcepts = concept.relatedConceptIds
    .map(id => ENGINEERING_CONCEPTS.find(c => c.id === id))
    .filter(Boolean) as Concept[];

  if (relatedConcepts.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
        <LinkIcon className="w-4 h-4" /> Related Concepts
      </h3>
      {relatedConcepts.map((rel, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-lg cursor-default group hover:border-slate-300 transition-colors">
          <span className="text-sm text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{rel.title}</span>
          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-400 transition-colors" />
        </div>
      ))}
    </div>
  );
}
