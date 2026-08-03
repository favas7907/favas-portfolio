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
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
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
                    Interests Outside Code
                  </h3>
                  <div className="text-base md:text-lg text-slate-600 font-light leading-relaxed space-y-6">
                    <p>
                      I read a lot outside of tech — psychology, urban planning, behavioral economics. I find that understanding how people actually think and how real-world systems scale gives me better instincts when designing software.
                    </p>
                    <p>
                      Honestly, reading about how cities handle infrastructure has taught me more about distributed systems than most coding tutorials. It's the same problem: build things that don't break when people use them in ways you didn't expect.
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
                      Explaining something to someone else is the fastest way to find out if you actually understand it. I help classmates and peers with code not because I'm an expert, but because it forces me to think clearly.
                    </p>
                    <p>
                      It also reminds me that the person reading my code or using my app doesn't have the same context I do. Writing code that other people can follow isn't extra work — it's the whole point.
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
                      I've picked up photography as a hobby, and it's changed how I think about UI. Framing a shot is basically the same problem as designing a layout — what do you keep, what do you cut, where does the eye go first?
                    </p>
                    <p>
                      It's made me better at noticing when an interface has too much going on. The best designs, like the best photos, are the ones where you removed everything that wasn't necessary.
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
