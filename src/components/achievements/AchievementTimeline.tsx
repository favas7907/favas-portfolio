import { motion } from 'motion/react';
import { ACHIEVEMENTS } from '../../constants/data';
import { Link } from 'react-router-dom';

export default function AchievementTimeline() {
  const sortedAchievements = [...ACHIEVEMENTS].sort((a, b) => parseInt(b.date) - parseInt(a.date));

  return (
    <section className="py-24 md:py-32 bg-white border-t border-slate-100 relative">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-24 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
              The Growth Journey
            </h2>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
              A chronological mapping of professional development, recognizing the continuous evolution of engineering capability.
            </p>
          </motion.div>

          <div className="relative border-l border-slate-200 ml-4 md:ml-8 space-y-16">
            {sortedAchievements.map((achievement, index) => (
              <motion.div 
                key={achievement.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 md:pl-16"
              >
                <div className="absolute w-3 h-3 bg-white border-2 border-blue-600 rounded-full -left-[6.5px] top-1.5" />
                
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-32 shrink-0 pt-0.5">
                    <span className="text-sm font-bold text-slate-900">{achievement.date}</span>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                      {achievement.category}
                    </span>
                  </div>
                  
                  <div className="flex-1 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors">
                    <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-base text-slate-600 font-light leading-relaxed mb-6">
                      {achievement.shortDescription}
                    </p>
                    <Link 
                      to={`/achievements/${achievement.id}`}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
