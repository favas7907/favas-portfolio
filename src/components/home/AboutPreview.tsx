import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Shield, Layers, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const STATS = [
  { value: '20+', label: 'Projects Shipped', icon: Code2, accent: true },
  { value: 'Full Stack', label: 'Engineering Focus', icon: Layers, accent: false },
  { value: 'B.Tech', label: 'CS Engineering', icon: Shield, accent: false },
  { value: 'AI · Web3', label: 'Deep Explorations', icon: Sparkles, accent: true },
];

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/[0.02] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" aria-hidden="true" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ transformOrigin: 'left' }}
              />
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-tight leading-[1.15] mb-6">
              I care about how software is{' '}
              <span className="text-gradient-primary">built</span>,{' '}
              not just that it works.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              I spend a lot of time thinking about the structure underneath — clean APIs, sensible data flow, code that the next person can actually read. It's the boring stuff that makes the interesting stuff possible.
            </p>
            
            <Link 
              to="/about" 
              className="btn-outline w-fit group"
            >
              Read My Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          <div ref={ref} className="lg:col-span-7 lg:col-start-6">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative bg-white rounded-2xl border border-slate-200/80 p-6 lg:p-7 hover-lift cursor-default"
                  >
                    {/* Hover gradient border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                        stat.accent 
                          ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' 
                          : 'bg-slate-100 text-slate-500 group-hover:bg-accent/10 group-hover:text-accent'
                      }`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className={`text-2xl lg:text-3xl font-bold mb-1.5 block tracking-tight transition-colors duration-300 ${
                        stat.accent ? 'text-primary' : 'text-black'
                      }`}>
                        {stat.value}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
