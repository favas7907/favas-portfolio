import React from 'react';
import TechnologyCard from './TechnologyCard';
import { motion } from 'motion/react';
import { Skill } from '../../../data/skills';

interface TechnologyGridProps {
  skills: Skill[];
  domain: string;
}

export default function TechnologyGrid({ skills, domain }: TechnologyGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="h-full"
        >
          <TechnologyCard skill={skill} domain={domain} />
        </motion.div>
      ))}
    </div>
  );
}

