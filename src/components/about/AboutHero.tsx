import { motion } from 'motion/react';
import { HERO_CONTENT } from '../../constants/data';

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:col-start-2 lg:sticky lg:top-32"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none overflow-hidden bg-slate-100 rounded-sm">
              <img 
                src={HERO_CONTENT.avatarUrl} 
                alt="Favas M"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:col-start-8 flex flex-col pt-8 lg:pt-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-10">
              I am Favas M.<br />
              A software engineer building systems that scale, secure, and perform.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
              I view engineering as an act of disciplined problem-solving. My work is defined by a deep curiosity about how distributed systems function under pressure, and a relentless drive to architect solutions that remain resilient long after they are deployed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
