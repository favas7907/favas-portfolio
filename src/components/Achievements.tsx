import { motion } from 'motion/react';
import { ACHIEVEMENTS, EXPERIENCE } from '../constants/data';
import SectionHeading from './SectionHeading';
import { Award, ExternalLink, Briefcase } from 'lucide-react';

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
    <section id="achievements" className="section-padding bg-bg-section/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Experience & Achievements" 
          badge="Milestones"
          subtitle="A collection of my professional experience, milestones, and certifications."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-style p-8 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-sm">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.15em] border shadow-sm ${
                  item.type === 'Achievement' 
                    ? 'bg-pink-50 text-secondary border-pink-100' 
                    : item.type === 'Experience'
                    ? 'bg-blue-50 text-blue-600 border-blue-100'
                    : 'bg-purple-50 text-primary border-purple-100'
                }`}>
                  {item.type}
                </span>
              </div>
              
              <h3 className="text-xl font-extrabold text-text-primary mb-3 tracking-tight group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-text-secondary leading-relaxed font-medium text-sm mb-6 flex-grow whitespace-pre-line">
                {item.description}
              </p>

              {item.link && (
                <a 
                  href={item.link}
                  className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest hover:gap-3 transition-all"
                >
                  View Certificate
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
