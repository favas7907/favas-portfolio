import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants/data';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-20 md:py-24 border-t border-slate-100 relative overflow-hidden">
      {/* Subtle decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/[0.015] rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12">
          
          <div className="md:col-span-4 flex flex-col justify-between h-full">
            <div>
              <Link to="/" className="inline-block mb-4 group">
                <span className="text-2xl font-bold text-black tracking-tight group-hover:text-primary transition-colors duration-300">
                  Favas M
                </span>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Building things that work well and look good doing it.
              </p>
            </div>
            
            <motion.p 
              className="text-[10px] font-bold uppercase tracking-widest text-slate-300 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              &copy; {currentYear} Favas M
            </motion.p>
          </div>
          
          <div className="md:col-span-8 lg:col-start-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-6">
                Navigation
              </span>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm font-medium text-slate-500 hover:text-primary transition-colors duration-300 link-underline inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-6">
                Social
              </span>
              <ul className="flex flex-col gap-3">
                {CONTACT_INFO.socials.map(social => (
                  <li key={social.name}>
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors duration-300"
                    >
                      {social.name}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-6">
                Contact
              </span>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-sm font-medium text-slate-500 hover:text-primary transition-colors duration-300 break-all link-underline inline-block"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
