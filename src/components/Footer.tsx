import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-main pt-16 pb-8 border-t border-purple-100/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-extrabold tracking-tighter text-text-primary mb-6 inline-block group">
              Favas <span className="text-primary group-hover:text-secondary transition-colors">M</span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed font-medium mb-8">
              Building scalable, secure, and intelligent digital solutions using modern technologies.
            </p>
            <div className="flex gap-3">
              {CONTACT_INFO.socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all shadow-sm border border-purple-100/50"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-text-secondary hover:text-primary transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/20 rounded-full group-hover:bg-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text-primary mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-text-secondary text-sm font-medium">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-text-secondary text-sm font-medium">{CONTACT_INFO.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text-primary mb-6">Newsletter</h4>
            <p className="text-text-secondary text-xs leading-relaxed font-medium mb-4">
              Subscribe to get the latest updates on my projects and articles.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white border border-purple-100/50 rounded-xl px-4 py-3 text-xs text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-primary text-white rounded-lg hover:bg-secondary transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-100/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} Favas M. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-secondary hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
