import { motion } from 'motion/react';
import { HERO_CONTENT, CONTACT_INFO } from '../constants/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-16 bg-white relative overflow-hidden">
      {/* Premium subtle background glow */}
      <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-primary/5 rounded-full blur-[100px] opacity-70 pointer-events-none" />
      
      <div className="container-custom grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1 w-full"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-1.5 bg-white border border-slate-200 shadow-sm text-text-secondary rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold text-black mb-6 tracking-tight leading-[1.05]"
          >
            Favas M
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-4 mb-8 w-full">
            <p className="text-xl md:text-2xl font-semibold tracking-tight text-text-secondary">
              {HERO_CONTENT.role}
            </p>
            <div className="flex flex-wrap gap-2">
              {HERO_CONTENT.specialization.split(' • ').map((spec) => (
                <span key={spec} className="px-3 py-1 bg-slate-50 border border-slate-100 text-text-secondary rounded-lg text-[10px] font-bold uppercase tracking-widest">
                  {spec}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-text-secondary mb-10 max-w-xl leading-relaxed font-medium">
            {HERO_CONTENT.tagline}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12 w-full">
            <a href="#projects" className="btn-primary min-w-[160px]">
              {HERO_CONTENT.ctaPrimary}
            </a>
            <a href="#contact" className="btn-outline min-w-[160px]">
              {HERO_CONTENT.ctaTertiary}
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4 w-full">
            {CONTACT_INFO.socials.map((social) => (
              <a 
                key={social.name} 
                href={social.href}
                className="w-12 h-12 rounded-xl flex items-center justify-center bg-white border border-slate-200 text-text-secondary hover:text-white hover:bg-black hover:border-black transition-all duration-300 shadow-sm"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 w-full"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
            {/* Subtle Glow Backdrop */}
            <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] rotate-6" />
            
            {/* Main Avatar Container */}
            <div className="relative z-10 w-full h-full p-2 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl overflow-hidden">
              <img 
                src={HERO_CONTENT.avatarUrl} 
                alt="Profile photo"
                className="w-full h-full object-cover rounded-[2rem]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
