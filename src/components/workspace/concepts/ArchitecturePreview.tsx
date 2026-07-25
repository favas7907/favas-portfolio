import { Concept } from '../../../data/concepts';
import { Layers } from 'lucide-react';

export default function ArchitecturePreview({ concept }: { concept: Concept }) {
  // We can add architecture diagram URLs or textual descriptions to concepts in the future.
  // For now, we'll provide a placeholder or render null if no architecture is provided.
  if (!concept.insights) return null; // Using insights as a fallback for now.

  return (
    <section className="space-y-6 pt-8 border-t border-slate-100">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
        <Layers className="w-4 h-4" /> Architectural Insight
      </h3>
      <div className="bg-white border border-slate-200 border-l-4 border-l-blue-500 text-slate-700 p-6 rounded-r-2xl rounded-l-md font-light leading-relaxed shadow-sm">
        <p>"{concept.insights}"</p>
      </div>
    </section>
  );
}
