import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
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
    <section id="contact" className="pt-32 pb-24 md:pt-48 md:pb-32 bg-white relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-10">
                Start a<br />conversation.
              </h1>
              
              <div className="space-y-6 text-lg text-slate-500 leading-relaxed font-medium mb-16">
                <p>
                  I am currently responding to engineering opportunities, technical consulting inquiries, and open-source collaborations.
                </p>
                <p>
                  Please include relevant details about your technical requirements and timeline. I review inquiries daily and typically respond within 24 to 48 hours.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Direct Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-base font-medium text-black hover:text-primary transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Profiles</p>
                  <div className="flex flex-col gap-3">
                    {CONTACT_INFO.socials.map((social) => (
                      <a 
                        key={social.name} 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-black hover:text-primary transition-colors flex items-center group"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-7 lg:pl-12"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-14 pt-4">
              
              <div className="flex flex-col gap-4 group">
                <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-black transition-colors">
                  Full Name
                </label>
                <input 
                  id="name"
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-slate-200 py-3 text-xl md:text-2xl text-black focus:outline-none focus:border-black transition-colors placeholder:text-slate-200 rounded-none font-medium"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="flex flex-col gap-4 group">
                <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-black transition-colors">
                  Email Address
                </label>
                <input 
                  id="email"
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-slate-200 py-3 text-xl md:text-2xl text-black focus:outline-none focus:border-black transition-colors placeholder:text-slate-200 rounded-none font-medium"
                  placeholder="jane@company.com"
                />
              </div>
              
              <div className="flex flex-col gap-4 group">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-black transition-colors">
                  Message
                </label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-slate-200 py-3 text-xl md:text-2xl text-black focus:outline-none focus:border-black transition-colors placeholder:text-slate-200 resize-none rounded-none font-medium leading-relaxed"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <div className="pt-8">
                <button 
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`inline-flex items-center text-sm font-bold uppercase tracking-widest pb-3 border-b-2 transition-colors ${
                    status === 'success' 
                      ? 'text-emerald-600 border-emerald-600' 
                      : status === 'sending'
                        ? 'text-slate-400 border-slate-400 cursor-wait'
                        : 'text-black border-black hover:text-primary hover:border-primary'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-3" />
                    </>
                  )}
                  {status === 'sending' && "Sending..."}
                  {status === 'success' && "Message Sent Successfully"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
