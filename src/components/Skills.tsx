import { motion } from 'motion/react';
import { SKILLS, EDUCATION } from '../constants/data';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white relative overflow-hidden">
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
              Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.1]">
              Technical <span className="text-primary italic font-serif font-normal">Stack</span> & Expertise
            </h2>
          </div>
          <p className="text-text-secondary text-lg font-medium max-w-sm leading-relaxed hidden md:block">
            A comprehensive overview of the technologies and tools I specialize in to build high-performance applications.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="group bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_12px_40px_-10px_rgba(225,29,72,0.15)] hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-sm">
                  <skill.icon className="w-5 h-5 text-text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-black group-hover:text-primary transition-colors duration-300">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-text-secondary rounded-md text-[10px] font-bold uppercase tracking-widest group-hover:border-primary/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Sub-section */}
        <div className="pt-20 border-t border-slate-200">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 flex flex-col md:flex-row justify-between items-start gap-6"
          >
            <div>
              <div className="inline-block px-4 py-1.5 bg-white border border-slate-200 shadow-sm text-text-secondary text-[10px] font-bold rounded-full mb-6 uppercase tracking-widest">
                Academic Path
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.1]">
                Education
              </h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_12px_40px_-10px_rgba(225,29,72,0.15)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />
                
                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start relative z-10">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300 shadow-sm">
                    <edu.icon className="w-6 h-6 text-text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-grow w-full">
                    <div className="inline-block px-3 py-1.5 bg-primary/5 text-primary border border-primary/20 text-[10px] font-bold rounded-md mb-4 uppercase tracking-widest">
                      {edu.period}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                       <h4 className="text-2xl font-bold text-black tracking-tight group-hover:text-primary transition-colors duration-300">
                        {edu.institution}
                      </h4>
                      <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200 w-fit shrink-0">{edu.degree}</p>
                    </div>
                    <p className="text-text-secondary leading-relaxed font-medium text-base md:text-lg max-w-3xl mt-4">
                      {edu.details}
                    </p>
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
