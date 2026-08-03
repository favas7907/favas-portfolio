import { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutExperience from '../components/about/AboutExperience';
import AboutProcess from '../components/about/AboutProcess';
import AboutVision from '../components/about/AboutVision';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen pt-24">
      <AboutHero />
      <AboutExperience />
      <AboutProcess />
      <AboutVision />
    </main>
  );
}
