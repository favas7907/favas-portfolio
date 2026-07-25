import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, PenTool, Layout, Layers, Code, CheckCircle, Rocket, RefreshCw } from 'lucide-react';

const PROCESS_STEPS = [
  { name: 'Research', icon: Search, description: 'Understanding the domain and problem space.' },
  { name: 'Planning', icon: PenTool, description: 'Defining architecture and project scope.' },
  { name: 'Design', icon: Layout, description: 'Crafting user experiences and interface guidelines.' },
  { name: 'Architecture', icon: Layers, description: 'Structuring scalable and secure foundations.' },
  { name: 'Development', icon: Code, description: 'Writing clean, maintainable, and efficient code.' },
  { name: 'Testing', icon: CheckCircle, description: 'Ensuring absolute reliability and security.' },
  { name: 'Deployment', icon: Rocket, description: 'Shipping robust solutions to production.' },
  { name: 'Iteration', icon: RefreshCw, description: 'Refining based on real-world feedback.' }
];

export default function Process() {
  return (
    <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] opacity-50 pointer-events-none" />
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 shadow-sm text-slate-300 text-[10px] font-bold rounded-full mb-6 uppercase tracking-widest backdrop-blur-md">
            Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Engineering <span className="text-primary italic font-serif font-normal">Process</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            How I approach building software. From the initial spark of research to the continuous cycle of iteration.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <step.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{step.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-[11px] rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-sm group">
            Explore My Engineering Philosophy
            <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
