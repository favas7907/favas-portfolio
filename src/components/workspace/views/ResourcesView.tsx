import { RoadmapDomain } from '../../../data/roadmaps';
import { Library, Book, FileText, Video, Globe } from 'lucide-react';
import { DOMAIN_RESOURCES } from '../../../data/domainResources';

const getIcon = (type: string) => {
  switch (type) {
    case 'Books': return <Book className="w-4 h-4" />;
    case 'Courses': return <Video className="w-4 h-4" />;
    case 'Articles': return <FileText className="w-4 h-4" />;
    default: return <Globe className="w-4 h-4" />;
  }
};

export default function ResourcesView({ domain }: { domain: RoadmapDomain }) {
  const resources = DOMAIN_RESOURCES.filter(r => r.domainId === domain.id);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
            <Library className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Perspective
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight">Knowledge Hub</h2>
        <p className="text-lg text-slate-600 font-light leading-relaxed mb-12">
          Curated learning materials, documentation, and references driving the engineering decisions within this domain.
        </p>
      </div>

      {resources.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-sm text-slate-500">No resources currently catalogued for this domain.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.id}
              href={resource.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-start justify-between p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 gap-6"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-slate-50 text-slate-500 border border-slate-200">
                    {getIcon(resource.category)} {resource.category}
                  </span>
                  {resource.isOfficial && (
                    <span className="inline-flex px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-green-50 text-green-700 border border-green-200">
                      Official
                    </span>
                  )}
                  {resource.isFree && (
                    <span className="inline-flex px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-200">
                      Free
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{resource.title}</h3>
                <p className="text-sm text-slate-500 font-light max-w-3xl mb-4">{resource.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {resource.technologyTags.map(tag => (
                    <span key={tag} className="text-xs text-slate-400">#{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
