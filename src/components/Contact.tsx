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
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6 tracking-tight"
            >
              Let's build something <span className="text-gradient">extraordinary</span> together.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-text-secondary mb-10 leading-relaxed font-medium"
            >
              Whether you're looking for a full-stack developer, a security consultant, or just want to discuss the latest tech trends, I'm always open to new opportunities and collaborations.
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 mb-10"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-sm">
                  <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary mb-0.5">Email Me</p>
                  <p className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">{CONTACT_INFO.email}</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-sm">
                  <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary mb-0.5">Location</p>
                  <p className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">San Francisco, CA</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-3"
            >
              {CONTACT_INFO.socials.map((social) => (
                <motion.a 
                  key={social.name} 
                  href={social.href}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 bg-purple-50 rounded-xl flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="card-style p-8 relative overflow-hidden">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6 relative z-10"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-purple-50/30 border border-purple-100/50 rounded-xl px-5 py-3.5 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-text-secondary/30 font-medium text-sm"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-purple-50/30 border border-purple-100/50 rounded-xl px-5 py-3.5 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-text-secondary/30 font-medium text-sm"
                    />
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary ml-1">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry"
                    className="w-full bg-purple-50/30 border border-purple-100/50 rounded-xl px-5 py-3.5 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-text-secondary/30 font-medium text-sm"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-secondary ml-1">Message</label>
                  <textarea 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-purple-50/30 border border-purple-100/50 rounded-xl px-5 py-3.5 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-text-secondary/30 font-medium text-sm resize-none"
                  ></textarea>
                </motion.div>
                
                <motion.button 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`w-full btn-primary py-4 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${status === 'success' ? 'bg-green-500 from-green-500 to-green-600' : ''}`}
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                  {status === 'sending' && (
                    <motion.span 
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Sending...
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span 
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                    >
                      Message Sent!
                    </motion.span>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
