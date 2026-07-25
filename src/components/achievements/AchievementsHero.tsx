import { motion } from 'motion/react';
import { Award, Trophy, Users, Code, BookOpen, Star } from 'lucide-react';

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
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-[1.05] mb-8">
              Engineering Milestones
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light max-w-3xl mx-auto mb-16">
              This page documents the journey of continuous learning, technical achievements, community leadership, certifications, competitions and engineering milestones.
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-bold uppercase tracking-widest text-slate-400">
               <span className="flex items-center gap-2">
                 <Award className="w-4 h-4 text-blue-600" /> Certifications
               </span>
               <span className="flex items-center gap-2">
                 <Code className="w-4 h-4 text-blue-600" /> Hackathons
               </span>
               <span className="flex items-center gap-2">
                 <Users className="w-4 h-4 text-blue-600" /> Community Events
               </span>
               <span className="flex items-center gap-2">
                 <Star className="w-4 h-4 text-blue-600" /> Awards
               </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
