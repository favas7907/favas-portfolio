import { Concept } from '../../../data/concepts';
import { Book } from 'lucide-react';

export default function LearningResource({ concept }: { concept: Concept }) {
  if (concept.resources.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
        <Book className="w-4 h-4" /> Learning Resources
      </h3>
      {concept.resources.map((res, idx) => (
        <a key={idx} href={res.url} target="_blank" rel="noopener noreferrer" className="block p-3 bg-white border border-slate-100 hover:border-slate-300 rounded-lg transition-colors group">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">{res.type}</span>
          <span className="text-sm text-slate-700 font-medium group-hover:text-blue-600 transition-colors">{res.title}</span>
        </a>
      ))}
    </div>
  );
}
