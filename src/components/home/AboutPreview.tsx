import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 lg:col-start-2"
          >
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
              Identity
            </h2>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-900 tracking-tight leading-[1.3] mb-8 max-w-3xl">
                I build software with a mindset rooted in architecture and security. A premium interface is meaningless if the underlying system is fragile.
              </h3>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-16 max-w-2xl">
                Engineering goes beyond writing code. It requires anticipating growth, handling edge cases gracefully, and ensuring that every product feels effortless to the people using it. My goal is to create resilient platforms that scale without sacrificing craftsmanship.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-16 w-full max-w-2xl"
            >
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">Architecture First</h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Designing scalable foundations that support complex business logic and future iterations gracefully.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">Security & Precision</h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Implementing robust protections and secure data handling to ensure trust is never compromised.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                to="/about" 
                className="group inline-flex items-center text-sm font-bold text-slate-900 uppercase tracking-[0.15em] pb-2 border-b border-slate-300 hover:border-slate-900 transition-colors duration-300"
              >
                Read the full story <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
