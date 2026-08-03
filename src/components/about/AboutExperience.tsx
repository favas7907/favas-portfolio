import { motion } from 'motion/react';
import { EDUCATION, EXPERIENCE } from '../../constants/data';

export default function AboutExperience() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
              Education
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight mb-10">
              Academic Foundation
            </h2>
            <div className="flex flex-col gap-8">
              {EDUCATION.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-500"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">
                        {edu.period}
                      </span>
                      <h3 className="text-lg font-bold text-black mb-1">{edu.institution}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{edu.details}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
              Experience
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight mb-10">
              What I've Been Doing
            </h2>
            <div className="flex flex-col gap-8">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors duration-500"
                >
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary/30 border-2 border-white" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold text-black mb-0.5">{exp.role}</h3>
                  <p className="text-sm font-medium text-slate-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
