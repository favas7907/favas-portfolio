import { motion } from 'motion/react';
import Hero from '../components/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ProjectsPreview from '../components/home/ProjectsPreview';
import ClosingExperience from '../components/home/ClosingExperience';

export default function Home() {
  return (
    <>
      {/* Chapter 0: The Hook */}
      <Hero />
      
      {/* Chapter 1: Who is this engineer? */}
      <AboutPreview />
      
      {/* Chapter 2: What products have they built? */}
      <ProjectsPreview />
      
      {/* Chapter 3: The Closing Impression */}
      <ClosingExperience />
    </>
  );
}
