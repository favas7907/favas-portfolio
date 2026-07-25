const fs = require('fs');
let code = fs.readFileSync('src/components/Contact.tsx', 'utf8');

if (!code.includes('interface ContactProps')) {
  code = code.replace(
    "export default function Contact() {",
    "import { Link } from 'react-router-dom';\nimport { ArrowRight } from 'lucide-react';\n\ninterface ContactProps {\n  previewOnly?: boolean;\n}\n\nexport default function Contact({ previewOnly = false }: ContactProps) {"
  );
}

// Render differently if previewOnly
code = code.replace(
  "          {/* Contact Form */}",
  "          {/* Contact Form */}\n          {!previewOnly && ("
);

const bottomContent = `            </motion.form>
          </div>
        </div>
      </div>
    </section>`;

const newBottomContent = `            </motion.form>
          )}
          {previewOnly && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col justify-center items-center card-style p-12 text-center"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Let's build something together.</h3>
              <p className="text-text-secondary max-w-md mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary"
              >
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          )}
          </div>
        </div>
      </div>
    </section>`;

code = code.replace(bottomContent, newBottomContent);

fs.writeFileSync('src/components/Contact.tsx', code);
