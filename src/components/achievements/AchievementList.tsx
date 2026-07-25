import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Link as LinkIcon, Calendar, Building2 } from 'lucide-react';
import { ACHIEVEMENTS } from '../../constants/data';

export default function AchievementList() {
  // Filter out the featured achievement
  const regularAchievements = ACHIEVEMENTS.filter(a => a.id !== 'global-hackathon-2024');
  
  // Group achievements by category
  const groupedAchievements = regularAchievements.reduce((acc, achievement) => {
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
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="sticky top-32"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Recognition Category
                  </span>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
                    {category}
                  </h2>
                </motion.div>
              </div>

              <div className="lg:col-span-8">
                <div className="flex flex-col gap-8 md:gap-12">
                  {items.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="group flex flex-col md:flex-row gap-8 md:gap-10 items-start p-6 md:p-10 rounded-[2rem] bg-white border border-slate-200/60 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500"
                    >
                      <div className="flex flex-col justify-center flex-grow w-full">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-md">
                            <Calendar className="w-3 h-3" /> {achievement.date}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                            {achievement.details.role || 'Contributor'}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                          <Link to={`/achievements/${achievement.id}`}>
                            {achievement.title}
                          </Link>
                        </h3>
                        
                        <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-8">
                          {achievement.shortDescription}
                        </p>
                        
                        {/* Certificate/Metadata Row */}
                        {category === 'Certifications' && (
                          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 p-5 bg-slate-50/80 rounded-xl border border-slate-100">
                            <div className="flex flex-col">
                              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                                <Building2 className="w-3 h-3" /> Issuer
                              </span>
                              <span className="text-sm font-medium text-slate-900">{achievement.details.relatedTechnologies?.[0] || 'Institution'}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Status</span>
                              <span className="text-sm font-medium text-emerald-600 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Verified
                              </span>
                            </div>
                            {achievement.link && (
                               <div className="flex flex-col justify-end ml-auto">
                                  <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors p-2 -m-2">
                                    <LinkIcon className="w-3.5 h-3.5 mr-1.5" /> View Credential
                                  </a>
                               </div>
                            )}
                          </div>
                        )}
                        
                        <div className="mt-auto pt-4 border-t border-slate-100">
                          <Link 
                            to={`/achievements/${achievement.id}`}
                            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
                          >
                            Read Full Context
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
