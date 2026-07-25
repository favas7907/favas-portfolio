import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Server, Globe2, BookOpen, Users, Compass } from 'lucide-react';

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
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
                Vision & Future
              </h2>
              <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.2] mb-8">
                Building systems that respect the user, empower the community, and stand the test of time.
              </p>
              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
                Software is not just logic executed by a machine; it is the infrastructure of modern life. My mission is to architect digital experiences that are resilient, accessible, and deeply human. I build because I believe technology should solve real-world problems without creating new ones.
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
                The tools change, but the principles remain. I am continuously exploring technologies that allow us to build more trustworthy, performant, and distributed systems.
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
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="text-xl md:text-2xl font-medium text-slate-900 mb-4 tracking-tight">Scalable & Distributed Systems</h4>
                <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                  Designing architectures that can scale globally while maintaining fault tolerance. My focus is on cloud-native patterns, microservices, and edge computing to ensure absolute reliability under pressure.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-xl md:text-2xl font-medium text-slate-900 mb-4 tracking-tight">Trustworthy Artificial Intelligence</h4>
                <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                  Moving beyond AI as a novelty to AI as a reliable utility. I am exploring how to integrate large language models with deterministic systems securely, ensuring user privacy and output predictability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="text-xl md:text-2xl font-medium text-slate-900 mb-4 tracking-tight">Privacy & Decentralization</h4>
                <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                  Investigating Web3 primitives, zero-knowledge proofs, and decentralized identity to build applications where users own their data and control their digital footprint.
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
                Great code is just the baseline. Real impact comes from elevating the people around you and contributing back to the tools that made your work possible.
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
                  I aim to lead not just by writing better systems, but by building better teams. I am committed to sharing knowledge through workshops, technical writing, and 1:1 mentorship to help the next generation of engineers avoid the mistakes I made.
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
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Near-Term Direction</span>
                </div>
                <div className="md:w-2/3 text-base md:text-lg text-slate-600 font-light leading-relaxed">
                  Deepening expertise in distributed systems architecture. Refining how I bridge the gap between complex backend infrastructure and seamless, accessible frontend experiences. Expanding my <Link to="/library" className="text-slate-900 font-medium underline decoration-slate-300 hover:decoration-blue-600 transition-colors">open-source contributions</Link>.
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
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-900">Medium-Term Growth</span>
                </div>
                <div className="md:w-2/3 text-base md:text-lg text-slate-600 font-light leading-relaxed">
                  Transitioning towards technical leadership. Mentoring emerging engineers while steering architectural decisions for products that operate at a massive scale. Cultivating engineering cultures that prioritize quality and user respect.
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
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Long-Term Aspirations</span>
                </div>
                <div className="md:w-2/3 text-base md:text-lg text-slate-600 font-light leading-relaxed">
                  Directing product engineering for a generation-defining platform. Shaping industry standards through research and advocacy. Ensuring that the technology we leave behind is secure, equitable, and profoundly human.
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Future Impact & Invitation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-slate-100 pt-24 pb-12">
          <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8">
                <Compass className="w-8 h-8 text-slate-400" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-8">
                Let's Build the Future Together
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                If you are working on hard problems, pushing the boundaries of what is possible, or simply want to talk about system architecture, I would love to connect.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-blue-600 transition-colors duration-300"
                >
                  Start a Conversation
                </Link>
                <Link
                  to="/projects"
                  className="group w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors py-4"
                >
                  View Recent Projects
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
