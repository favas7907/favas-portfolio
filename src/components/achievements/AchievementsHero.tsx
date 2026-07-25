import { motion } from 'motion/react';

export default function AchievementsHero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 lg:col-start-3 text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-10">
              Impact & Growth
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-3xl mx-auto">
              Meaningful milestones that track a journey of continuous learning, leadership, and contribution. These represent moments where engineering met real-world challenges.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
