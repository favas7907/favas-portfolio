import { motion } from 'motion/react';

const PHILOSOPHY_SECTIONS = [
  {
    title: 'Curiosity first',
    content: (
      <>
        <p>
          I can't just use something without wanting to know how it works underneath. When I pull in a library, I end up reading the source code. It's a habit.
        </p>
        <p>
          That instinct to dig deeper usually helps me catch weird edge cases before they become bugs in production. It also means I don't build on top of things I don't understand.
        </p>
      </>
    )
  },
  {
    title: 'Keep it simple',
    content: (
      <>
        <p>
          I try not to over-engineer things. Every abstraction and every extra dependency is something future-me (or a teammate) will have to maintain. Readable code beats clever code every time.
        </p>
        <p>
          If I can't explain why a piece of complexity exists, it probably shouldn't be there. I only add layers when the problem genuinely needs them.
        </p>
      </>
    )
  },
  {
    title: 'Plan for things to break',
    content: (
      <>
        <p>
          I've learned to think about how my code will fail, not just how it should work. Things will go wrong — the question is whether your app handles it gracefully or just crashes.
        </p>
        <p>
          How a system recovers from something going wrong says more about its quality than how it performs on a good day.
        </p>
      </>
    )
  },
  {
    title: 'Ship, then improve',
    content: (
      <>
        <p>
          The first version is never the final version. Once something is live and real people are using it, that's when you actually learn what needs to be better.
        </p>
        <p>
          I try to optimize based on what's actually happening, not what I think might happen. Measure first, then fix.
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
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                How I Think About Code
              </h2>
              <p className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight mb-8">
                The principles I've picked up along the way.
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
