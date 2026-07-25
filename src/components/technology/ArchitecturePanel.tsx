import { TechnologyProfile } from '../../data/technologies';
import { Share2 } from 'lucide-react';

export default function ArchitecturePanel({ patterns }: { patterns: TechnologyProfile['architecturePatterns'] }) {
  if (!patterns || patterns.length === 0) return null;

  return (
    <section className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 tracking-tight">Architecture Patterns</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {patterns.map((pattern, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-50 rounded-lg shrink-0">
                  <Share2 className="w-5 h-5 text-indigo-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{pattern.title}</h3>
              </div>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                {pattern.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
