const fs = require('fs');
let code = fs.readFileSync('src/components/About.tsx', 'utf8');

const replacement = `
export default function About({ previewOnly = false }: AboutProps) {
  if (previewOnly) {
    return (
      <section className="section-padding bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -translate-y-1/2 opacity-60 pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 shadow-sm text-text-secondary text-[10px] font-bold rounded-full mb-8 uppercase tracking-widest relative overflow-hidden">
              <Sparkles className="w-3 h-3 text-primary" />
              Philosophy
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.1] mb-8">
              Engineering with <span className="text-primary italic font-serif font-normal">Intent</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-text-secondary font-medium leading-relaxed mb-12">
              I believe in building software that doesn't just work, but scales gracefully. Every line of code should serve a purpose. My approach combines rigorous architectural planning with an obsession for performance and security.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/about" className="btn-primary inline-flex items-center">
                Read My Journey <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
`;

code = code.replace("export default function About({ previewOnly = false }: AboutProps) {\n  return (", replacement);
fs.writeFileSync('src/components/About.tsx', code);
