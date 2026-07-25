import React from 'react';
import { PROJECTS } from '../../constants/data';
import { motion } from 'motion/react';
import ProductHero from './ProductHero';
import ProjectCard from './ProjectCard';
import EditorialDivider from './EditorialDivider';

export default function ProjectsSection() {
  const secureVault = PROJECTS.find(p => p.id === 'securevault');
  const devConnect = PROJECTS.find(p => p.id === 'devconnect');
  const ecoTrack = PROJECTS.find(p => p.id === 'ecotrack');
  const blockVote = PROJECTS.find(p => p.id === 'block-vote');
  const algoVis = PROJECTS.find(p => p.id === 'algo-visualizer');

  return (
    <section className="bg-slate-50 min-h-screen pb-32 pt-16 md:pt-24" aria-label="Projects showcase">
      <div className="container-custom">
        {/* Feature 1: The flagship product */}
        {secureVault && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductHero project={secureVault} />
          </motion.div>
        )}

        <EditorialDivider 
           title="Distributed & High-Throughput Systems" 
           description="Architectures engineered for concurrent data ingestion, real-time state synchronization, and sub-millisecond edge caching." 
        />

        {/* Asymmetrical Pair: Focus on architecture vs performance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24">
           <motion.div 
             className="lg:col-span-7"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           >
             {devConnect && <ProjectCard project={devConnect} featured={true} />}
           </motion.div>
           <motion.div 
             className="lg:col-span-5"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
           >
             {ecoTrack && <ProjectCard project={ecoTrack} />}
           </motion.div>
        </div>

        <EditorialDivider 
           title="Web3 & Core Graphics" 
           description="Mathematical experiments exploring zero-knowledge on-chain governance and 60fps hardware-accelerated rendering layers." 
        />

        {/* Symmetrical Grid for deeper cuts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-12">
           {blockVote && (
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             >
               <ProjectCard project={blockVote} />
             </motion.div>
           )}
           {algoVis && (
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
             >
               <ProjectCard project={algoVis} />
             </motion.div>
           )}
        </div>
      </div>
    </section>
  );
}
