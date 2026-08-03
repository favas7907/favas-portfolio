import { motion } from 'motion/react';
import { Award, Users, Code, Star } from 'lucide-react';
import { ACHIEVEMENTS } from '../../constants/data';

export default function AchievementsHero() {
  const count = ACHIEVEMENTS.length;

  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" aria-hidden="true" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-6"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="w-8 h-px bg-primary" />
            Achievements · {count} Milestones
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] mb-6">
            Engineering{' '}
            <span className="text-gradient-primary">Milestones</span>
          </h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Certifications, competitions, community contributions, and key milestones along the journey.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              { icon: Award, label: 'Certifications', color: 'text-primary' },
              { icon: Code, label: 'Hackathons', color: 'text-accent' },
              { icon: Users, label: 'Community', color: 'text-primary' },
              { icon: Star, label: 'Awards', color: 'text-accent' },
            ].map(item => (
              <span key={item.label} className="flex items-center gap-2 hover:text-black transition-colors duration-300 cursor-default">
                <item.icon className={`w-4 h-4 ${item.color}`} /> {item.label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated bottom border */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  );
}
