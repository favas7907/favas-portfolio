import { motion } from 'motion/react';

export default function ClosingExperience() {
  return (
    <section className="pt-32 pb-40 md:pt-48 md:pb-56 bg-white relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="container-custom relative z-10 max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-[1.3] mb-10 md:mb-14">
            Great software is rarely the result of a single brilliant idea. It is the product of <span className="text-primary italic font-serif font-normal">relentless curiosity</span>, meticulous craftsmanship, and an obsession with the details.
          </h2>
          
          <motion.div 
            className="w-px h-16 md:h-24 bg-slate-200 mx-auto mb-10 md:mb-14 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />

          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Engineering is a continuous process of learning. Every line of code should have a purpose. Every product should solve a real problem. And every interaction should feel effortless.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
