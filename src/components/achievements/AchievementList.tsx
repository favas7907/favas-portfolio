import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Award, Users, Mic, ShieldCheck } from 'lucide-react';
import { ACHIEVEMENTS } from '../../constants/data';

const CATEGORY_ICONS: Record<string, typeof Award> = {
  'Hackathons': Award,
  'Certifications': ShieldCheck,
  'Events': Mic,
  'Community': Users,
  'Open Source': Award,
  'Leadership': Users,
};

export default function AchievementList() {
  const categories = useMemo(() => {
    const unique = ['All', ...new Set(ACHIEVEMENTS.map(a => a.category))];
    return unique;
  }, []);

  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return ACHIEVEMENTS;
    return ACHIEVEMENTS.filter(a => a.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="block text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Recognition
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
              All Achievements
            </h2>
            <p className="text-sm text-slate-400">
              <span className="font-semibold text-black">{filtered.length}</span> of {ACHIEVEMENTS.length} entries
            </p>
          </div>
        </motion.div>

        {/* Category Filters — scrollable on mobile */}
        <div className="mb-10 overflow-x-auto hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-primary via-purple-600 to-accent text-white shadow-md shadow-primary/20'
                    : 'text-slate-400 hover:text-black hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Achievement Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((achievement) => {
              const Icon = CATEGORY_ICONS[achievement.category] || Award;
              return (
                <motion.div
                  key={achievement.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={`/achievements/${achievement.id}`}
                    className="group block bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover-lift relative"
                  >
                    {/* Image header */}
                    <div className="relative aspect-[16/8] overflow-hidden bg-slate-100">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg">
                          <Icon className="w-3 h-3" /> {achievement.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-md flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {achievement.date}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-black tracking-tight mb-3 group-hover:text-primary transition-colors leading-tight">
                        {achievement.title}
                      </h3>

                      <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-2">
                        {achievement.shortDescription}
                      </p>

                      {/* Tech tags */}
                      {achievement.details.relatedTechnologies && (
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {achievement.details.relatedTechnologies.slice(0, 4).map(tech => (
                            <span key={tech} className="text-[10px] font-semibold text-primary bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-lg group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        Read Story <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
