import { motion } from 'motion/react';
import { ACHIEVEMENTS, EXPERIENCE } from '../constants/data';
import { ExternalLink, Briefcase } from 'lucide-react';

export default function Achievements() {
  const allItems = [
    ...EXPERIENCE.map(exp => ({
      title: exp.role,
      description: `${exp.company} • ${exp.period}\n${exp.description}`,
      icon: Briefcase,
      type: 'Experience',
      link: undefined
    })),
    ...ACHIEVEMENTS.map(a => ({ 
      ...a, 
      description: 'description' in a ? a.description : `${a.issuer} • ${a.date}`,
      link: 'link' in a ? a.link : undefined 
    }))
  ];

  return (
    <section id="achievements" className="section-padding bg-white relative">
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-white border border-slate-200 shadow-sm text-text-secondary text-[10px] font-bold rounded-full mb-6 uppercase tracking-widest">
              Milestones
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.1]">
              Professional <span className="text-primary italic font-serif font-normal">Achievements</span>
            </h2>
          </div>
          <p className="text-text-secondary text-lg font-medium max-w-sm leading-relaxed hidden md:block">
            Professional experience and recognized accomplishments.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col group relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_12px_40px_-10px_rgba(225,29,72,0.15)] hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl" />
              
              <div className="flex flex-col mb-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-200 text-text-secondary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-black tracking-tight group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-text-secondary text-[10px] font-bold uppercase tracking-widest rounded-md group-hover:border-primary/20 transition-colors">
                    {item.type}
                  </span>
                </div>
              </div>
              
              <div className="flex-grow flex flex-col relative z-10 border-t border-slate-100 pt-6">
                <p className="text-text-secondary leading-relaxed font-medium text-base mb-8 whitespace-pre-line flex-grow">
                  {item.description}
                </p>

                {item.link && (
                  <div className="mt-auto">
                    <a 
                      href={item.link}
                      className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest group/btn transition-all duration-300 hover:text-primary/80"
                    >
                      Verify Credential
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
