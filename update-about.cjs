const fs = require('fs');
let code = fs.readFileSync('src/components/About.tsx', 'utf8');

if (!code.includes('interface AboutProps')) {
  code = code.replace(
    "export default function About() {",
    "import { Link } from 'react-router-dom';\n\ninterface AboutProps {\n  previewOnly?: boolean;\n}\n\nexport default function About({ previewOnly = false }: AboutProps) {"
  );
}

// In the component, we can conditionally render the right cards or just add a CTA.
const rightContent = `
            <motion.div variants={itemVariants} className="lg:col-span-7 grid sm:grid-cols-2 gap-6">`;

const newRightContent = `
            <motion.div variants={itemVariants} className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {previewOnly ? (
                <div className="sm:col-span-2 flex flex-col justify-center items-center h-full min-h-[300px] p-8 card-style">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">Discover the Full Journey</h3>
                  <p className="text-text-secondary text-center max-w-md mb-8">
                    Explore my academic background, technical methodologies, and the philosophy behind my engineering process.
                  </p>
                  <Link to="/about" className="btn-primary">
                    Read My Journey <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ) : (
                <>
`;

const closingRightContent = `              </div>
            </motion.div>
          </div>
        </motion.div>`;

const newClosingRightContent = `              </div>
              </>
              )}
            </motion.div>
          </div>
        </motion.div>`;

code = code.replace(rightContent, newRightContent);
code = code.replace(closingRightContent, newClosingRightContent);

fs.writeFileSync('src/components/About.tsx', code);
