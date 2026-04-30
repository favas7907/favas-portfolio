import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT } from '../constants/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -ml-64 -translate-y-1/2 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] -mr-64 opacity-40 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          <motion.div variants={itemVariants} className="lg:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 lg:mb-16 border-b border-slate-200/60 pb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 shadow-sm text-text-secondary text-[10px] font-bold rounded-full mb-6 uppercase tracking-widest relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                <Sparkles className="w-3 h-3 text-primary" />
                The Narrative
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-black tracking-tight leading-[1.05]">
                Architecting <span className="text-primary italic font-serif font-normal relative inline-block">Digital<div className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary/20 rounded-full" /></span> Perfection
              </h2>
            </div>
            <p className="text-text-secondary text-lg font-medium max-w-[280px] leading-relaxed hidden lg:block text-right">
              Building scalable, secure, and intelligent digital solutions.
            </p>
          </motion.div>

          <div className="lg:col-span-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <motion.div variants={itemVariants} className="lg:col-span-5 relative">
              <div className="absolute -left-6 top-0 w-1 h-24 bg-gradient-to-b from-primary to-transparent rounded-full hidden lg:block" />
              <h3 className="text-2xl font-bold text-black mb-6">Who I Am</h3>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-10">
                {ABOUT_CONTENT.description}
              </p>
              
              <div className="flex flex-col gap-4 mb-10">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Core Strengths</h4>
                <div className="flex flex-wrap gap-2.5">
                  {ABOUT_CONTENT.highlights.map((h, i) => (
                    <motion.span 
                      key={i} 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 border-2 border-slate-100 text-[11px] font-bold uppercase tracking-widest text-slate-600 rounded-xl bg-white shadow-sm hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
                    >
                      {h}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-7 grid sm:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6 lg:space-y-8">
                <div className="bg-white border border-slate-200 p-8 lg:p-10 rounded-[2.5rem] flex flex-col justify-between h-64 md:h-72 shadow-sm transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-slate-300 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500">
                     <ArrowRight className="w-8 h-8 text-black" />
                   </div>
                  <p className="text-6xl md:text-7xl font-black tracking-tighter leading-none text-black">9.2</p>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Academic Index</p>
                    <p className="text-xl font-bold tracking-tight text-text-secondary">Cumulative GPA</p>
                  </div>
                </div>
                
                <div className="bg-black border border-black p-8 lg:p-10 rounded-[2.5rem] flex flex-col justify-between h-64 md:h-72 shadow-xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-6xl md:text-7xl font-black tracking-tighter leading-none text-white">500<span className="text-primary">+</span></p>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Algorithm Prowess</p>
                    <p className="text-xl font-bold tracking-tight text-slate-300 group-hover:text-white transition-colors">LeetCode Solved</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 lg:space-y-8 lg:pt-16">
                <div className="bg-white border border-slate-200 p-8 lg:p-10 rounded-[2.5rem] flex flex-col justify-between h-64 md:h-72 shadow-sm transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(225,29,72,0.2)] hover:border-primary/40 hover:-translate-y-2 relative overflow-hidden group">
                  <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-primary/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <p className="text-6xl md:text-7xl font-black tracking-tighter leading-none text-primary relative z-10">20<span className="text-black group-hover:text-primary transition-colors">+</span></p>
                  <div className="relative z-10">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-300" /> Production Reach</p>
                    <p className="text-xl font-bold tracking-tight text-black flex items-center justify-between">
                      Technical Projects
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-8 lg:p-10 rounded-[2.5rem] flex flex-col justify-between h-64 md:h-72 shadow-sm transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-slate-300 hover:-translate-y-2 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full transition-transform duration-700 blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 pointer-events-none" />
                  <p className="text-6xl md:text-7xl font-black tracking-tighter leading-none text-slate-800 relative z-10">10<span className="text-primary">+</span></p>
                  <div className="relative z-10">
                     <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Global Impact</p>
                     <p className="text-xl font-bold tracking-tight text-black flex items-center justify-between">
                       Open Source
                       <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                     </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

