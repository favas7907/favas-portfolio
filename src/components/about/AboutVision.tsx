import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, Server, Globe2, BookOpen, Users } from 'lucide-react';

export default function AboutVision() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container-custom">
        
        {/* Reflection & Present Mission */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Vision & Future
              </h2>
              <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.2] mb-8">
                Where I'm headed and what I want to build next.
              </p>
              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
                I'm still early in my career, but I have a pretty clear idea of the kind of engineer I want to become. I want to build things that genuinely help people — not just technically impressive demos, but software that holds up when real users depend on it.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Engineering Vision & Technology Direction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-32">
          <div className="lg:col-span-4 lg:col-start-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight mb-6">
                Engineering Direction
              </h3>
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                The frameworks will change, but the fundamentals won't. Here's what I'm exploring and where I want to go deeper.
              </p>
            </motion.div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="text-xl md:text-2xl font-medium text-slate-900 mb-4 tracking-tight">Scalable & Distributed Systems</h4>
                <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                  I want to understand how to build backend systems that don't fall apart under load. Currently digging into microservices, container orchestration, and how companies like Discord or Stripe handle massive traffic.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-xl md:text-2xl font-medium text-slate-900 mb-4 tracking-tight">Trustworthy Artificial Intelligence</h4>
                <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                  AI is exciting, but I'm more interested in making it actually useful and safe — not just cool demos. I'm exploring how LLMs can be integrated into apps without being a black box or a security risk.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="text-xl md:text-2xl font-medium text-slate-900 mb-4 tracking-tight">Privacy & Decentralization</h4>
                <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                  Web3 has a lot of noise, but the underlying ideas are genuinely interesting. I'm learning about zero-knowledge proofs, decentralized identity, and what it means to build apps where users actually own their data.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Community Contribution & Long-term Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-32 border-t border-slate-100 pt-24 lg:pt-32">
          <div className="lg:col-span-4 lg:col-start-9 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight mb-6">
                Ecosystem Impact
              </h3>
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                Code is code — what actually matters is whether you're making things better for the people around you too.
              </p>
            </motion.div>
          </div>
          <div className="lg:col-span-6 lg:col-start-2 lg:order-1">
            <div className="space-y-16 lg:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-medium text-slate-900 tracking-tight">Mentorship & Leadership</h4>
                </div>
                <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed pl-17">
                  I like helping other developers when I can — whether it's explaining a concept, reviewing code, or just sharing what I've figured out the hard way. Teaching something is the fastest way to actually understand it.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-medium text-slate-900 tracking-tight">Open Source & Research</h4>
                </div>
                <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed pl-17">
                  The open-source community is the backbone of the modern web. My long-term goal is to dedicate significant time to maintaining core libraries, authoring technical research, and giving back to the ecosystem that shaped my career.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Future Roadmap (Evolution) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 border-t border-slate-100 pt-24 lg:pt-32">
          <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-6">
                A Living Roadmap
              </h3>
              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
                Growth is not a straight line, but a continuous evolution.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 p-8 md:p-10 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="md:w-1/3 shrink-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Near-Term Direction</span>
                </div>
                <div className="md:w-2/3 text-base md:text-lg text-slate-600 font-light leading-relaxed">
                  Strengthening my understanding of system design and backend architecture. Building more complex full-stack applications and contributing to <Link to="/library" className="text-slate-900 font-medium underline decoration-slate-300 hover:decoration-blue-600 transition-colors">open-source projects</Link> that solve real problems.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 p-8 md:p-10 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="md:w-1/3 shrink-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-900">Post-Graduation</span>
                </div>
                <div className="md:w-2/3 text-base md:text-lg text-slate-600 font-light leading-relaxed">
                  Joining a team where I can work on meaningful products at scale. Learning from experienced engineers, contributing to production codebases, and growing into a role where I can mentor others.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 p-8 md:p-10 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="md:w-1/3 shrink-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Long-Term Vision</span>
                </div>
                <div className="md:w-2/3 text-base md:text-lg text-slate-600 font-light leading-relaxed">
                  Building technology that respects users and solves real-world problems. Contributing to the open-source ecosystem that shaped my learning. Leading engineering teams that value quality and craftsmanship.
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
