import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../constants/data';
import SectionHeading from './SectionHeading';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" 
      />
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          badge="Contact"
          subtitle="Have a project in mind or just want to say hi? Feel free to reach out!"
        />
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-8 tracking-tight leading-tight">
              Let's build something <span className="text-gradient">extraordinary</span> together.
            </h3>
            <p className="text-lg text-text-secondary mb-12 leading-relaxed font-medium">
              Whether you're looking for a full-stack developer, a security consultant, or just want to discuss the latest tech trends, I'm always open to new opportunities and collaborations.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-sm">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary mb-1">Email Me</p>
                  <p className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">{CONTACT_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-sm">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary mb-1">Location</p>
                  <p className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {CONTACT_INFO.socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-2xl mx-auto lg:mx-0"
          >
            <form onSubmit={handleSubmit} className="card-style p-8 md:p-10">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-purple-50/30 border border-purple-100/50 rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-text-secondary/30 font-medium text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-purple-50/30 border border-purple-100/50 rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-text-secondary/30 font-medium text-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary ml-1">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry"
                    className="w-full bg-purple-50/30 border border-purple-100/50 rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-text-secondary/30 font-medium text-sm"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary ml-1">Message</label>
                  <textarea 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-purple-50/30 border border-purple-100/50 rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-text-secondary/30 font-medium text-sm resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`w-full btn-primary py-4 transition-all duration-300 ${status === 'success' ? 'bg-green-500 from-green-500 to-green-600' : ''}`}
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {status === 'sending' && (
                    <span className="animate-pulse">Sending...</span>
                  )}
                  {status === 'success' && (
                    <span>Message Sent!</span>
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
