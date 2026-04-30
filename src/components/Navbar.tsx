import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '../constants/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -85% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id && window.scrollY >= 100) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]' : 'bg-transparent py-8'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group" aria-label="Favas M Home">
          <span className="text-2xl font-black text-black tracking-tighter uppercase">Favas M</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-[11px] font-bold uppercase tracking-widest transition-all relative group py-2 ${
                  activeSection === link.href.substring(1) ? 'text-primary' : 'text-text-secondary hover:text-black'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="/resume.pdf" 
            className="btn-primary !px-5 !py-2.5 !text-[11px]"
            download
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-primary focus:outline-none p-2 hover:bg-gray-50 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-all px-4 py-3 rounded-lg ${
                    activeSection === link.href.substring(1) 
                      ? 'text-primary bg-red-50' 
                      : 'text-text-secondary hover:text-black hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/resume.pdf" 
                className="btn-primary w-full py-3.5 mt-4"
                onClick={() => setIsOpen(false)}
                download
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
