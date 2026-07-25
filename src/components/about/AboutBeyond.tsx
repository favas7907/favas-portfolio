import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function AboutBeyond() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-slate-50 border-t border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-3 lg:col-start-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
                Beyond Engineering
              </h2>
              <p className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight mb-6">
                How curiosity outside the editor shapes the code within it.
              </p>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                Great software is not written in a vacuum. It is informed by empathy, continuous learning, and a deep observation of the world.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-6">
            <div className="space-y-32">
              
              {/* Curiosity -> Learning -> Creativity */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-slate-900 tracking-tight mb-6">
                    Curiosity as a System
                  </h3>
                  <div className="text-base md:text-lg text-slate-600 font-light leading-relaxed space-y-6">
                    <p>
                      I read heavily outside of technical documentation, focusing on psychology, urban planning, and behavioral economics. Software engineering is fundamentally about mapping human processes to machine logic. Understanding how people think, how incentives work, and how physical systems scale provides a broader vocabulary for solving technical problems.
                    </p>
                    <p>
                      A book on city infrastructure often contains more relevant insights into distributed systems than a tutorial on microservices. It teaches that systems must be resilient, adaptable to unpredictable human behavior, and capable of evolving without collapsing. This continuous learning fuels my creativity when approaching complex <Link to="/projects" className="text-slate-900 font-medium underline decoration-slate-300 hover:decoration-blue-600 transition-colors">architectural decisions</Link> in production.
                    </p>
                  </div>
                </div>
                <div className="aspect-[16/9] bg-slate-200 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=1200" 
                    alt="A notebook with architectural sketches and a pen, resting on a wooden desk" 
                    className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
              </motion.article>

              {/* Problem Solving -> Community -> Personal Values */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-slate-900 tracking-tight mb-6">
                    Empathy Through Mentorship
                  </h3>
                  <div className="text-base md:text-lg text-slate-600 font-light leading-relaxed space-y-6">
                    <p>
                      Explaining complex technical concepts to junior developers or non-technical stakeholders is the ultimate test of true understanding. I actively participate in community mentorship because it forces me to abandon jargon and articulate the "why" behind the code.
                    </p>
                    <p>
                      Teaching cultivates empathy. It reminds me that the user on the other side of the screen, or the engineer inheriting my codebase, does not share my context. Writing accessible code and clear documentation is not just a best practice; it is an act of professional empathy. This community involvement grounds my personal values and redefines how I approach problem-solving in a <Link to="/library" className="text-slate-900 font-medium underline decoration-slate-300 hover:decoration-blue-600 transition-colors">collaborative environment</Link>.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* Daily Habits -> Perspective -> Continuous Growth */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-slate-900 tracking-tight mb-6">
                    Visual Discipline
                  </h3>
                  <div className="text-base md:text-lg text-slate-600 font-light leading-relaxed space-y-6">
                    <p>
                      I study photography and visual composition not to become a photographer, but to train my eye for balance, negative space, and focal hierarchy. When I look through a lens, I am forced to eliminate distractions and frame only what matters. 
                    </p>
                    <p>
                      This daily habit of observation directly translates into interface design and component architecture. A convoluted UI is a poorly framed photograph. By practicing visual discipline offline, I naturally write cleaner, more intuitive user interfaces online. This perspective ensures continuous growth, reminding me that <Link to="/skills" className="text-slate-900 font-medium underline decoration-slate-300 hover:decoration-blue-600 transition-colors">craftsmanship</Link> is in the details we choose to include, and more importantly, the details we choose to omit.
                    </p>
                  </div>
                </div>
                <div className="aspect-[3/2] bg-slate-200 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&q=80&w=1200" 
                    alt="Abstract architectural photography focusing on light and shadow" 
                    className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
              </motion.article>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
