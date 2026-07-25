import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DIRECTORY = [
  { name: 'Projects', href: '/projects', desc: 'Case studies & implementations' },
  { name: 'Skills', href: '/skills', desc: 'Technical capabilities' },
  { name: 'Achievements', href: '/achievements', desc: 'Awards & certifications' },
  { name: 'Contact', href: '/contact', desc: 'Get in touch' }
];

export default function CallToExplore() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-slate-950 text-white relative overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem]">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -mr-96 -mt-96 opacity-50 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:pr-12 lg:sticky lg:top-32"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
              Let's build something <span className="text-primary italic font-serif font-normal">extraordinary.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-12 max-w-lg">
              Whether it's a new product architecture, a security review, or a collaborative project, I'm open to discussing new opportunities.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-xl hover:-translate-y-1 w-fit"
            >
              Start a Conversation
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:col-start-8 flex flex-col pt-8 lg:pt-0"
          >
            <div className="py-4 border-b border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">
              Directory
            </div>
            {DIRECTORY.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group flex flex-col py-8 border-b border-white/10 hover:border-white/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                    {item.name}
                  </h3>
                  <ArrowRight className="w-6 h-6 text-slate-600 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 shrink-0" />
                </div>
                <p className="text-lg text-slate-400 font-medium transition-colors group-hover:text-slate-300">{item.desc}</p>
              </Link>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
