import { motion } from 'motion/react';
import { BOOKMARKS } from '../../data/knowledgeBase';
import { Bookmark, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BookmarksSection() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
        <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
          <Bookmark className="w-6 h-6 text-teal-600" />
        </div>
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-slate-900">Engineering Bookmarks</h2>
          <p className="text-slate-500 font-light mt-1">Curated references and fundamental resources</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BOOKMARKS.map((bookmark, idx) => (
          <motion.div
            key={bookmark.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all flex flex-col h-full"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-1 rounded">
                {bookmark.type}
              </span>
            </div>
            
            <h3 className="text-lg font-medium text-slate-900 mb-2 pr-6">
              <a href={bookmark.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors after:absolute after:inset-0">
                {bookmark.title}
              </a>
            </h3>
            
            <p className="text-sm text-slate-500 font-light leading-relaxed mb-6 flex-1">
              {bookmark.description}
            </p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 relative z-10">
              <Link 
                to={`/skills/${bookmark.roadmapId}`}
                className="text-xs font-medium text-slate-400 hover:text-slate-900 transition-colors"
              >
                Related Roadmap
              </Link>
              <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
