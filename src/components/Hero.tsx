import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '../constants/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
     opacity: 1, 
     y: 0, 
     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
   }
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white relative overflow-hidden">
      {/* Premium subtle background lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft top-left ambient light to frame the text */}
        <motion.div 
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-slate-100 blur-[120px]" 
        />
        
        {/* Subtle primary accent light to frame the visual */}
        <motion.div 
          animate={{ opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-primary blur-[120px]" 
        />

        {/* Lower soft light to create vertical depth and connection */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-slate-50 blur-[120px]" 
        />
      </div>
      
      <div className="container-custom flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left w-full"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-6xl sm:text-7xl lg:text-[80px] font-bold text-black mb-5 tracking-tight leading-[1.05]"
          >
            {HERO_CONTENT.name}
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-6 w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-slate-800 leading-snug">
              {HERO_CONTENT.role}
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {HERO_CONTENT.tagline}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 w-full">
            <Link to="/projects" className="group btn-primary min-w-[160px]">
              <span>{HERO_CONTENT.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="btn-outline min-w-[160px]">
              {HERO_CONTENT.ctaTertiary}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-5 lg:col-start-8 flex justify-center lg:justify-end w-full"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] aspect-[4/5] group">
            {/* Main Avatar Container */}
            <div className="relative z-10 w-full h-full rounded-2xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-200/80 bg-slate-50">
              <img 
                src={HERO_CONTENT.avatarUrl} 
                alt={`${HERO_CONTENT.name} - Profile`}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                loading="eager"
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
