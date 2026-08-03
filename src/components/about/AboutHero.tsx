import { motion } from 'motion/react';
import { HERO_CONTENT } from '../../constants/data';

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" aria-hidden="true" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:col-start-1"
          >
            <div className="relative w-full max-w-sm mx-auto lg:max-w-none group">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 rounded-2xl border border-slate-200/80 transition-all duration-700 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group-hover:border-primary/15">
                <img 
                  src={HERO_CONTENT.avatarUrl} 
                  alt="Favas M"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle gradient vignette on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              {/* Floating accent blocks */}
              <motion.div 
                className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl bg-accent/10 -z-10"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true" 
              />
              <motion.div 
                className="absolute -top-3 -left-3 w-16 h-16 rounded-xl bg-primary/8 -z-10"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                aria-hidden="true" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col"
          >
            <motion.span 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="w-8 h-px bg-primary" />
              About Me
            </motion.span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15] mb-8">
              I'm Favas M.{' '}
              <span className="text-gradient-primary">
                A computer science student building software that matters.
              </span>
            </h1>
            
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              I like understanding how things work under the hood — not just writing code that runs, but figuring out why it runs that way. Most of what I know came from breaking things, reading docs at 2am, and rebuilding from scratch.
            </p>

            <div className="flex flex-wrap gap-6 pt-6 border-t border-slate-100">
              {[
                { value: 'B.Tech', label: 'Computer Science', accent: true },
                { value: HERO_CONTENT.year, label: 'Batch', accent: false },
                { value: 'Full Stack', label: 'Focus Area', accent: false },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <span className={`text-2xl font-bold ${stat.accent ? 'text-primary' : 'text-black'}`}>{stat.value}</span>
                  <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated bottom border */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  );
}
