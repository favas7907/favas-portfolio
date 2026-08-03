import { TechnologyProfile } from '../../data/technologies';
import { ExternalLink, BookOpen, FileText, Video, Github, Bookmark, Target } from 'lucide-react';

export default function ResourceCollection({ resources }: { resources: TechnologyProfile['resources'] }) {
  if (!resources || resources.length === 0) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'Documentation': return <BookOpen className="w-4 h-4 text-primary" />;
      case 'Article': return <FileText className="w-4 h-4 text-emerald-500" />;
      case 'Video': return <Video className="w-4 h-4 text-rose-500" />;
      case 'Repository': return <Github className="w-4 h-4 text-slate-700" />;
      case 'Research': return <Target className="w-4 h-4 text-purple-500" />;
      default: return <Bookmark className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <section className="py-16 md:py-24 border-b border-slate-100">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 tracking-tight">Curated Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, idx) => (
            <a 
              key={idx}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-slate-300 transition-all group flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-50 rounded-lg shrink-0">
                  {getIcon(resource.type)}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {resource.type}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {resource.title}
              </h3>
              
              <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-grow">
                {resource.whyUseful}
              </p>
              
              <div className="flex items-center gap-2 text-xs font-semibold text-primary mt-auto">
                Visit Resource <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
