import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 py-24 md:py-32 border-t border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-12">
          
          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <span className="block text-2xl font-extrabold text-black tracking-tighter mb-4">
                Favas M
              </span>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                Architecting digital perfection. Engineering robust full-stack applications with a focus on scalable architectures, AI integration, and secure systems.
              </p>
            </div>
            
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-12 md:mt-24">
              &copy; {currentYear} All Rights Reserved
            </p>
          </div>
          
          <div className="md:col-span-7 lg:col-span-7 lg:col-start-6 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">
            <div className="flex flex-col">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">
                Navigation
              </span>
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm font-medium text-slate-600 hover:text-black transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">
                Social
              </span>
              <ul className="flex flex-col gap-4">
                {CONTACT_INFO.socials.map(social => (
                  <li key={social.name}>
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-sm font-medium text-slate-600 hover:text-black transition-colors"
                    >
                      {social.name}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-slate-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col col-span-2 md:col-span-1">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">
                Contact
              </span>
              <ul className="flex flex-col gap-4">
                <li>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm font-medium text-slate-600 hover:text-black transition-colors break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
