import { motion } from 'motion/react';
import { SKILLS, EDUCATION } from '../constants/data';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg-main relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Technical Expertise" 
          badge="Expertise"
          subtitle="A comprehensive overview of the technologies and tools I specialize in."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-style p-8 group"
            >
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500 shadow-sm">
                <skill.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-6 tracking-tight group-hover:text-primary transition-colors">{skill.category}</h3>
              <div className="flex flex-wrap gap-2.5">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 bg-white text-text-secondary rounded-xl text-[10px] font-bold uppercase tracking-widest border border-purple-100/50 hover:border-primary hover:text-primary transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Sub-section */}
        <div className="pt-20 border-t border-purple-100/50">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 bg-purple-50 text-primary text-[9px] font-bold rounded-full mb-4 border border-purple-100/50 uppercase tracking-[0.2em]">
              Academic Path
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-4">
              Education
            </h3>
            <p className="text-text-secondary text-base font-medium max-w-lg mx-auto">
              My academic background and qualifications that shaped my technical foundation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-style p-8 flex flex-col sm:flex-row gap-8 group"
              >
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-500 shadow-sm">
                  <edu.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-50 text-primary text-[9px] font-bold rounded-full border border-purple-100/50 uppercase tracking-[0.2em] group-hover:bg-primary group-hover:text-white transition-colors">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-extrabold text-text-primary mb-2 tracking-tight group-hover:text-primary transition-colors">
                    {edu.institution}
                  </h4>
                  <p className="text-base font-bold text-secondary mb-4">{edu.degree}</p>
                  <p className="text-text-secondary leading-relaxed font-medium text-sm">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
