import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock & Escape key
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;
    
    const drawerElements = Array.from(drawerRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    )) as HTMLElement[];
    
    const headerToggle = document.getElementById('mobile-menu-toggle');
    const focusableElements = headerToggle ? [headerToggle, ...drawerElements] : drawerElements;
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    firstElement?.focus();
    window.addEventListener('keydown', handleTabKey);
    return () => window.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  // Handle route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
          scrolled || isOpen 
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-3 md:py-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]' 
            : 'bg-transparent py-5 md:py-6 border-b border-transparent'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          
          {/* Brand Logo - Left */}
          <div className="flex-1 flex justify-start">
            <Link 
              to="/" 
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
              aria-label="Favas M - Home"
            >
              <span className="text-xl md:text-2xl font-bold text-black tracking-tight transition-all duration-300 group-hover:text-gradient-primary whitespace-nowrap">
                Favas M
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <nav 
            className="hidden lg:flex items-center justify-center flex-[2] gap-8" 
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
              
              return (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={`relative py-2 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${
                    isActive ? 'text-primary' : 'text-slate-500 hover:text-black'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                  {/* Animated underline indicator */}
                  <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-primary rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                  {/* Hover underline for non-active links */}
                  {!isActive && (
                    <span className="absolute -bottom-0.5 left-0 h-[2px] bg-slate-300 rounded-full w-0 hover-target transition-all duration-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle - Right */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <button 
              id="mobile-menu-toggle"
              className="lg:hidden relative z-50 p-2 text-black hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-navigation"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[40] lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            {/* Drawer */}
            <motion.div
              ref={drawerRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[400px] bg-white z-[50] shadow-2xl flex flex-col lg:hidden border-l border-slate-100 pt-24"
            >
              
              <div className="flex flex-col h-full overflow-y-auto px-8 pb-12">
                <nav className="flex flex-col gap-4" aria-label="Mobile Main Navigation">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
                    
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        key={link.name}
                      >
                        <Link 
                          to={link.href}
                          className={`block text-2xl font-bold tracking-tight transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-2 ${
                            isActive ? 'text-primary' : 'text-slate-400 hover:text-black'
                          }`}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
