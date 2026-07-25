import { motion } from 'motion/react';

const PHILOSOPHY_SECTIONS = [
  {
    title: 'Curiosity at the core',
    content: (
      <>
        <p>
          My approach begins with a quiet refusal to accept that things simply work. When I use a library or a framework, I need to understand the underlying mechanics. 
        </p>
        <p>
          That persistent questioning—tracing logic down to its core—uncovers edge cases and architectural constraints long before they reach production. It prevents me from building on fragile assumptions.
        </p>
      </>
    )
  },
  {
    title: 'Simplicity over cleverness',
    content: (
      <>
        <p>
          I actively avoid over-engineering. Every abstraction, every microservice, and every added dependency carries a long-term maintenance cost. I prefer readable, explicit logic over dense shortcuts.
        </p>
        <p>
          I design with the empathy that another engineer—or myself in six months—will have to navigate this architecture without a manual. Complexity should only be introduced when the scale of the problem absolutely demands it.
        </p>
      </>
    )
  },
  {
    title: 'Designing for failure',
    content: (
      <>
        <p>
          Building carefully means anticipating how the application will fail, rather than just hoping it succeeds. I approach architecture with a zero-trust mindset, treating failure as an expected state in distributed systems.
        </p>
        <p>
          How gracefully a system recovers from an outage defines its true engineering quality far more than its performance on a perfect day.
        </p>
      </>
    )
  },
  {
    title: 'Measurement and iteration',
    content: (
      <>
        <p>
          Shipping the first version is only the beginning. When a system goes live, it finally meets reality. I optimize only after measuring, replacing assumptions with data.
        </p>
        <p>
          I iterate relentlessly, refining the interactions and tuning the backend until the technical complexity disappears entirely from the user's perspective.
        </p>
      </>
    )
  }
];

export default function AboutProcess() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white border-t border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 lg:col-start-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
                Engineering Philosophy
              </h2>
              <p className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight mb-8">
                How I approach problems, evaluate trade-offs, and define quality.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-16">
              {PHILOSOPHY_SECTIONS.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-lg sm:text-xl font-medium text-slate-900 tracking-tight mb-6">
                    {section.title}
                  </h3>
                  <div className="space-y-6 text-base md:text-lg text-slate-600 font-light leading-relaxed">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
