import { useEffect } from 'react';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectsSection from '../components/projects/ProjectsSection';


export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <ProjectsHero />
      <ProjectsSection />
      
    </div>
  );
}
