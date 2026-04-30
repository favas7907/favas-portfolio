import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, badge, centered = true }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`inline-block px-4 py-2 bg-black text-white text-[10px] font-black mb-8 uppercase tracking-[0.3em] ${centered ? 'mx-auto' : ''}`}
        >
          {badge}
        </motion.div>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-none uppercase"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-medium"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 100 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
        className={`h-2 bg-primary mt-12 ${centered ? 'mx-auto' : ''}`} 
      />
    </motion.div>
  );
}
