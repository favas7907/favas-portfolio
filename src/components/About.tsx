import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { ABOUT_CONTENT, EDUCATION } from '../constants/data';
import SectionHeading from './SectionHeading';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="About Me" 
          badge="Overview"
          subtitle="A brief introduction to my background and what drives me."
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-style p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <p className="text-lg text-text-primary leading-relaxed mb-10 relative z-10 font-medium">
                {ABOUT_CONTENT.description}
              </p>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {ABOUT_CONTENT.highlights.map((highlight, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-4 bg-purple-50/50 rounded-xl border border-purple-100/50 hover:bg-purple-50 transition-all group"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-text-secondary group-hover:text-text-primary transition-colors">{highlight}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-primary to-secondary h-48 rounded-3xl flex flex-col justify-center items-center text-white p-6 shadow-lg shadow-primary/20 transition-all duration-300"
              >
                <span className="text-4xl font-extrabold mb-1 tracking-tighter">9.2</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">CGPA</span>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-style h-56 rounded-3xl flex flex-col justify-center items-center text-text-primary p-6 hover:bg-purple-50 transition-all duration-300"
              >
                <span className="text-4xl font-extrabold mb-1 tracking-tighter text-gradient">500+</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary">LeetCode</span>
              </motion.div>
            </div>
            <div className="space-y-6 pt-12">
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-style h-56 rounded-3xl flex flex-col justify-center items-center text-text-primary p-6 hover:bg-purple-50 transition-all duration-300"
              >
                <span className="text-4xl font-extrabold mb-1 tracking-tighter text-gradient">15+</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary">Hackathons</span>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-secondary to-pink-400 h-48 rounded-3xl flex flex-col justify-center items-center text-white p-6 shadow-lg shadow-secondary/20 transition-all duration-300"
              >
                <span className="text-4xl font-extrabold mb-1 tracking-tighter">20+</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
