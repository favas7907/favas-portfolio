import { motion } from 'motion/react';
import { TechnologyProfile } from '../../data/technologies';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechIcon from '../TechIcon';
import { getTechColor } from '../../utils/techIcons';

interface Props {
  profile: TechnologyProfile;
}

export default function TechnologyHeader({ profile }: Props) {
  const brandColor = getTechColor(profile.name);
  
  return (
    <div className="pt-32 pb-16 bg-slate-50 border-b border-slate-100">
      <div className="container-custom">
        <Link 
          to="/skills" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Core Skills
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-400 rounded-full">
              Technology Profile
            </span>
          </div>
          <div className="flex items-center gap-5 mb-8">
            <div 
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${brandColor}12` }}
            >
              <TechIcon name={profile.name} size={44} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]">
              {profile.name}
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-light text-slate-600 leading-relaxed max-w-3xl">
            {profile.overview}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
