const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const oldBadge = `<motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-1.5 bg-white border border-slate-200 shadow-sm text-text-secondary rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </motion.div>`;

const newBadge = `<motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-1.5 bg-slate-50 border border-slate-100 shadow-sm text-text-secondary rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Software Engineer & Security Researcher</span>
          </motion.div>`;

code = code.replace(oldBadge, newBadge);
fs.writeFileSync('src/components/Hero.tsx', code);
