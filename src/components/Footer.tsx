import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <span className="text-2xl font-black text-black tracking-tighter uppercase">Favas M</span>
          <div className="w-px h-4 bg-gray-200 hidden md:block" />
          <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">
            &copy; {currentYear} All Rights Reserved.
          </p>
        </div>
        
        <div className="flex gap-6">
          {CONTACT_INFO.socials.map((social) => (
            <a 
              key={social.name} 
              href={social.href}
              className="text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-primary transition-all duration-300"
              aria-label={social.name}
            >
              {social.name}
            </a>
          ))}
        </div>
        
        <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">
          Premium Personal Portfolio
        </p>
      </div>
    </footer>
  );
}
