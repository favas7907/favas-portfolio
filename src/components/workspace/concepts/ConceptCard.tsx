import { Concept } from '../../../data/concepts';
import { Lightbulb, AlertTriangle } from 'lucide-react';
import ArchitecturePreview from './ArchitecturePreview';

export default function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <div className="space-y-16">
      {/* Core Understanding */}
      <section className="space-y-8">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Why It Exists</h3>
          <p className="text-lg text-slate-800 font-light leading-relaxed">{concept.whyItExists}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Real-World Problem</h3>
          <p className="text-lg text-slate-800 font-light leading-relaxed">{concept.problemSolved}</p>
        </div>
      </section>

      {/* Principles */}
      <section className="space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
          <Lightbulb className="w-4 h-4" /> Engineering Principles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {concept.principles.map((principle, idx) => (
            <div key={idx} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <span className="text-2xl font-light text-slate-300 mb-4 block">{(idx + 1).toString().padStart(2, '0')}</span>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">{principle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 text-rose-500">
          <AlertTriangle className="w-4 h-4" /> Common Mistakes
        </h3>
        <ul className="space-y-4">
          {concept.commonMistakes.map((mistake, idx) => (
            <li key={idx} className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-rose-500 font-bold text-xs">!</span>
              </div>
              <p className="text-sm text-slate-700 font-light leading-relaxed">{mistake}</p>
            </li>
          ))}
        </ul>
      </section>
      
      {/* Technologies - Only after concepts */}
      <section className="space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Implementation Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {concept.technologies.map((tech, idx) => (
            <span key={idx} className="px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-lg text-sm font-medium cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </section>
      
      <ArchitecturePreview concept={concept} />
    </div>
  );
}
