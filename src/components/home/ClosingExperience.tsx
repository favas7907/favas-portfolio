import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ClosingExperience() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      
      <div className="container-custom relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated divider */}
          <motion.div 
            className="flex items-center justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="w-12 h-px bg-slate-300" 
              initial={{ scaleX: 0 }} 
              whileInView={{ scaleX: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.3 }} 
              style={{ transformOrigin: 'right' }}
            />
            <Sparkles className="w-4 h-4 text-accent/60" />
            <motion.span 
              className="w-12 h-px bg-slate-300" 
              initial={{ scaleX: 0 }} 
              whileInView={{ scaleX: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.3 }} 
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black leading-[1.3] mb-8">
            The best way to learn is to{' '}
            <span className="text-gradient-primary">build</span>{' '}
            — and I don't plan on stopping.
          </h2>
          
          <p className="text-lg text-slate-500 leading-relaxed mb-12 max-w-2xl mx-auto">
            If you're working on something interesting or need a developer who actually cares about the craft, let's talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/about" className="btn-accent group">
              <span>Learn More About Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link to="/contact" className="btn-outline group">
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
