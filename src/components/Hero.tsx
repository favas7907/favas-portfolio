import { motion } from 'motion/react';
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { HERO_CONTENT, CONTACT_INFO } from '../constants/data';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-bg-main relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -ml-48 -mb-48 animate-pulse" />

      <div className="container-custom px-4 md:px-8 lg:px-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-purple-100 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-text-secondary">Open for Collaboration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-text-primary mb-6 tracking-tight leading-[1.1]">
            I'm <span className="text-gradient">{HERO_CONTENT.name}</span>
          </h1>
          <div className="space-y-4 mb-10">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-text-primary">
              {HERO_CONTENT.role}
            </p>
            <p className="text-xs sm:text-sm md:text-base font-bold text-text-secondary tracking-[0.2em] uppercase">{HERO_CONTENT.specialization}</p>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-12 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
            {HERO_CONTENT.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
            <a href="#projects" className="btn-primary">
              {HERO_CONTENT.ctaPrimary}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/resume.pdf" className="btn-secondary" download>
              <FileText className="w-4 h-4 text-primary" />
              {HERO_CONTENT.ctaSecondary}
            </a>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-6">
            {CONTACT_INFO.socials.map((social) => (
              <a 
                key={social.name} 
                href={social.href}
                className="text-text-secondary hover:text-primary transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="relative flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-[420px] md:h-[420px]">
            {/* Soft Glow Background */}
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] rotate-6 blur-2xl" />
            <div className="absolute inset-0 bg-secondary/10 rounded-[2rem] -rotate-3 blur-2xl" />
            
            <div className="relative z-10 w-full h-full p-2 bg-white border border-purple-50 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src={HERO_CONTENT.avatarUrl} 
                alt={HERO_CONTENT.name}
                className="w-full h-full object-cover rounded-[1.5rem]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
