import { useEffect } from 'react';
import { motion } from 'motion/react';
import { SKILL_GROUPS } from '../data/skills';
import { ENGINEERING_CHALLENGES } from '../data/challenges';
import TechnologyGrid from '../components/skills/directory/TechnologyGrid';
import EngineeringChallengeCard from '../components/skills/directory/EngineeringChallengeCard';

export default function SkillsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-32">
      <div className="container-custom">
        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-24"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Engineering Capabilities
          </h1>
          <p className="text-lg md:text-xl font-light text-slate-500 leading-relaxed max-w-2xl">
            A directory of the engineering problems I solve and the technical ecosystems I combine to build production-grade software.
          </p>
        </motion.div>

        {/* Engineering Challenges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <div className="mb-12 border-b border-slate-100 pb-8">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-4">
              Engineering Challenges
            </h2>
            <p className="text-base md:text-lg text-slate-500 font-light max-w-3xl leading-relaxed">
              Real-world problems I solve by combining specialized technologies into complete engineering workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGINEERING_CHALLENGES.map((challenge) => (
              <EngineeringChallengeCard key={challenge.title} challenge={challenge} />
            ))}
          </div>
        </motion.section>

        {/* Technologies Index */}
        <div id="technologies" className="flex flex-col gap-24">
          {SKILL_GROUPS.map((group, index) => (
            <motion.section
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            >
              <div className="mb-12 border-b border-slate-100 pb-8">
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-4">
                  {group.category}
                </h2>
                <p className="text-base md:text-lg text-slate-500 font-light max-w-3xl leading-relaxed">
                  {group.capability}
                </p>
              </div>
              <TechnologyGrid skills={group.skills} domain={group.category} />
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}


