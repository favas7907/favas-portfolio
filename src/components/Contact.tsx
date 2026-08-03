import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Send, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants/data';

interface ContactProps {
  previewOnly?: boolean;
}

export default function Contact({ previewOnly = false }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="pt-32 pb-24 md:pt-44 md:pb-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[100px] translate-x-1/3" aria-hidden="true" />
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32">
              <motion.span 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-6"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <span className="w-8 h-px bg-primary" />
                Contact
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-[1.1] mb-8">
                Say hello.
              </h1>
              
              <div className="space-y-4 text-lg text-slate-500 leading-relaxed mb-12">
                <p>
                  Open to internships, collabs, or just chatting about a project idea. Drop me a message and I'll get back to you.
                </p>
                <p className="text-base text-slate-400">
                  I respond within 48 hours.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-semibold text-black hover:text-primary transition-colors duration-300 link-underline inline-block">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Profiles</p>
                  <div className="flex flex-col gap-2">
                    {CONTACT_INFO.socials.map((social) => (
                      <a 
                        key={social.name} 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-black hover:text-primary transition-colors flex items-center group"
                      >
                        {social.name}
                        <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 lg:pl-12"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-12 pt-4 relative">
              {/* Form accent line */}
              <motion.div 
                className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-accent/10 to-transparent hidden lg:block"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'top' }}
              />
              
              <div className="flex flex-col gap-3 group">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-primary transition-colors">
                  Full Name
                </label>
                <input 
                  id="name"
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-slate-200 py-3 text-xl text-black focus:outline-none focus:border-primary transition-colors placeholder:text-slate-300 rounded-none font-medium"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="flex flex-col gap-3 group">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-primary transition-colors">
                  Email Address
                </label>
                <input 
                  id="email"
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-slate-200 py-3 text-xl text-black focus:outline-none focus:border-primary transition-colors placeholder:text-slate-300 rounded-none font-medium"
                  placeholder="jane@company.com"
                />
              </div>
              
              <div className="flex flex-col gap-3 group">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-primary transition-colors">
                  Message
                </label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-slate-200 py-3 text-xl text-black focus:outline-none focus:border-primary transition-colors placeholder:text-slate-300 resize-none rounded-none font-medium leading-relaxed"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                    status === 'success' 
                      ? 'text-emerald-600' 
                      : status === 'sending'
                        ? 'text-slate-400 cursor-wait'
                        : 'btn-accent'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                  {status === 'sending' && "Sending..."}
                  {status === 'success' && (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
