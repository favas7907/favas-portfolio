const fs = require('fs');
let code = fs.readFileSync('src/components/Achievements.tsx', 'utf8');

if (!code.includes('interface AchievementsProps')) {
  code = code.replace(
    "import { ExternalLink, Briefcase } from 'lucide-react';",
    "import { ExternalLink, Briefcase, ArrowRight } from 'lucide-react';\nimport { Link } from 'react-router-dom';\n\ninterface AchievementsProps {\n  previewOnly?: boolean;\n}"
  );
  code = code.replace(
    "export default function Achievements() {",
    "export default function Achievements({ previewOnly = false }: AchievementsProps) {"
  );
}

// limit data if previewOnly
code = code.replace(
  "              {EXPERIENCE.map((exp, index) => (",
  "              {(previewOnly ? EXPERIENCE.slice(0, 1) : EXPERIENCE).map((exp, index) => ("
);

code = code.replace(
  "              {ACHIEVEMENTS.map((ach: any, index: number) => (",
  "              {(previewOnly ? ACHIEVEMENTS.slice(0, 2) : ACHIEVEMENTS).map((ach: any, index: number) => ("
);

// Add CTA at the bottom if previewOnly
const bottomContent = `              ))}
            </div>
          </div>
        </div>
      </div>
    </section>`;

const newBottomContent = `              ))}
            </div>
          </div>
        </div>
        
        {previewOnly && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="mt-20 text-center"
          >
            <Link 
              to="/achievements" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-black font-bold uppercase tracking-widest text-[11px] rounded-xl hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 group"
            >
              View Full Journey
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>`;

code = code.replace(bottomContent, newBottomContent);

fs.writeFileSync('src/components/Achievements.tsx', code);
