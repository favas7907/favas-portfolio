import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants/data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 relative">
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-white border border-slate-200 shadow-sm text-text-secondary text-[10px] font-bold rounded-full mb-6 uppercase tracking-widest">
              Connect
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.1]">
              Let's build <span className="text-primary italic font-serif font-normal">Something</span><br />
              great.
            </h2>
          </div>
          <p className="text-text-secondary text-lg font-medium max-w-sm leading-relaxed hidden md:block">
            Passionate about Full Stack Development. Open for collaborations and discussions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full"
          >
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-sm shrink-0">
                  <Mail className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-1">Send an Email</p>
                  <p className="text-lg md:text-xl font-bold text-black group-hover:text-primary transition-colors tracking-tight">{CONTACT_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-sm shrink-0">
                  <MapPin className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-1">Current Base</p>
                  <p className="text-lg md:text-xl font-bold text-black group-hover:text-primary transition-colors tracking-tight">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-12 w-full">
              {CONTACT_INFO.socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-text-secondary hover:text-white hover:bg-black hover:border-black transition-all duration-300 shadow-sm"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 border border-slate-200 rounded-[2rem] relative overflow-hidden shadow-sm w-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16 blur-2xl pointer-events-none" />
              
              <div className="space-y-6 md:space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className="space-y-2 w-full">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary pl-2">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-slate-50 border border-slate-200 px-5 py-3.5 text-black rounded-xl focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 placeholder:text-slate-400 font-medium"
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary pl-2">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-slate-50 border border-slate-200 px-5 py-3.5 text-black rounded-xl focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 placeholder:text-slate-400 font-medium"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 w-full">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary pl-2">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="New Project / Internship"
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-3.5 text-black rounded-xl focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 placeholder:text-slate-400 font-medium"
                  />
                </div>
                
                <div className="space-y-2 w-full">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary pl-2">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me more..."
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-3.5 text-black rounded-xl focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 placeholder:text-slate-400 font-medium resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all duration-300 flex items-center justify-center gap-3 ${
                    status === 'success' ? 'bg-emerald-500 text-white shadow-[0_4px_15px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.4)]' : 'bg-primary text-white hover:bg-primary/95 shadow-[0_4px_15px_rgba(220,38,38,0.2)] hover:shadow-[0_8px_25px_rgba(220,38,38,0.35)]'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                  {status === 'sending' && "Processing..."}
                  {status === 'success' && "Message Sent!"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
