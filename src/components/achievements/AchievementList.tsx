import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ACHIEVEMENTS } from '../../constants/data';

export default function AchievementList() {
  // Group achievements by category
  const groupedAchievements = ACHIEVEMENTS.reduce((acc, achievement) => {
    if (!acc[achievement.category]) {
      acc[achievement.category] = [];
    }
    acc[achievement.category].push(achievement);
    return acc;
  }, {} as Record<string, typeof ACHIEVEMENTS>);

  return (
    <div className="bg-slate-50 border-t border-slate-100">
      {Object.entries(groupedAchievements).map(([category, items], sectionIndex) => (
        <section key={category} className="py-24 md:py-32 border-b border-slate-200 last:border-b-0">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="sticky top-32"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Category
                  </span>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black">
                    {category}
                  </h2>
                </motion.div>
              </div>

              <div className="lg:col-span-8">
                <div className="flex flex-col gap-12 md:gap-16">
                  {items.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex flex-col md:flex-row gap-8 md:gap-12 items-start"
                    >
                      <div className="w-full md:w-1/3 aspect-[4/3] rounded-sm overflow-hidden bg-slate-200 shrink-0">
                        <Link to={`/achievements/${achievement.id}`} className="block w-full h-full">
                          <img 
                            src={achievement.image} 
                            alt={achievement.title} 
                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                            loading="lazy"
                          />
                        </Link>
                      </div>

                      <div className="flex flex-col justify-center flex-grow">
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                          {achievement.date}
                        </span>
                        <h3 className="text-2xl font-medium text-black mb-3 group-hover:text-primary transition-colors">
                          <Link to={`/achievements/${achievement.id}`}>
                            {achievement.title}
                          </Link>
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {achievement.shortDescription}
                        </p>
                        
                        <div className="mt-auto">
                          <Link 
                            to={`/achievements/${achievement.id}`}
                            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-black hover:text-primary transition-colors"
                          >
                            Read Full Context
                            <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-2 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
