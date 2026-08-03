import { ExternalLink, BookOpen } from 'lucide-react';

interface ResourceCollectionProps {
  resources: {
    title: string;
    url: string;
    type: string;
  }[];
}

export default function ResourceCollection({ resources }: ResourceCollectionProps) {
  if (!resources || resources.length === 0) return null;

  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-slate-300"></span>
        Further Reading
      </h4>
      <ul className="flex flex-col gap-4">
        {resources.map((resource, idx) => (
          <li key={idx}>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 transition-all"
            >
              <div className="mt-0.5">
                <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <div className="flex-1">
                <span className="block text-sm font-medium text-slate-700 group-hover:text-primary transition-colors mb-1">
                  {resource.title}
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {resource.type}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-primary/70 transition-colors" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
