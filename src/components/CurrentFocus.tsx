import { motion } from 'motion/react';
import { Cpu, Shield, Blocks, Library, Code2 } from 'lucide-react';

const FOCUS_AREAS = [
  {
    title: 'Artificial Intelligence',
    description: 'Exploring LLM integrations, agentic workflows, and ethical AI in software products.',
    icon: Cpu
  },
  {
    title: 'Blockchain',
    description: 'Researching decentralized architectures, smart contracts, and zero-knowledge proofs.',
    icon: Blocks
  },
  {
    title: 'Cybersecurity',
    description: 'Studying modern threat landscapes, offensive security, and implementing zero-trust models.',
    icon: Shield
  },
  {
    title: 'Developer Tools',
    description: 'Building internal CLI utilities, CI/CD pipelines, and open-source boilerplates.',
    icon: Code2
  }
];

export default function CurrentFocus() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden border-t border-slate-200/60">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] opacity-60 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:flex justify-between items-end gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 shadow-sm text-text-secondary text-[10px] font-bold rounded-full mb-6 uppercase tracking-widest">
              Living Roadmap
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.1]">
              Current <span className="text-primary italic font-serif font-normal">Explorations</span>
            </h2>
          </div>
          <p className="text-text-secondary text-lg font-medium max-w-sm leading-relaxed mt-6 md:mt-0">
            What I'm currently researching, building, and learning in my free time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOCUS_AREAS.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-style p-8 group relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                <area.icon className="w-24 h-24 text-primary" />
              </div>
              <div className="relative z-10 mb-auto">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <area.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{area.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
