import { RoadmapDomain } from '../../../data/roadmaps';
import { Cpu } from 'lucide-react';

export default function TechnologiesView({ domain }: { domain: RoadmapDomain }) {
  if (!domain.technologies || domain.technologies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-24 animate-in fade-in duration-500">
        <Cpu className="w-12 h-12 text-slate-200 mb-6" />
        <h3 className="text-lg font-medium text-slate-900 mb-2">Technology Stack Mapping</h3>
        <p className="text-sm text-slate-500 max-w-md">Specific tools and frameworks are currently being catalogued for this domain.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
            <Cpu className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Perspective
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight">Technology Stack</h2>
        <p className="text-lg text-slate-600 font-light leading-relaxed mb-12">
          The practical tools, frameworks, and languages utilised to implement solutions within this engineering domain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {domain.technologies.map((tech, index) => (
          <div key={index} className="flex flex-col p-6 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-medium text-slate-900">{tech.name}</h3>
              <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${
                tech.status === 'Mastered' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                tech.status === 'Proficient' ? 'bg-green-50 text-green-700 border border-green-200' :
                'bg-slate-50 text-slate-600 border border-slate-200'
              }`}>
                {tech.status}
              </span>
            </div>
            <p className="text-sm text-slate-600 font-light leading-relaxed">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
