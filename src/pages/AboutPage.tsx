import AboutHero from '../components/about/AboutHero';
import AboutJourney from '../components/about/AboutJourney';
import AboutProcess from '../components/about/AboutProcess';
import AboutExperience from '../components/about/AboutExperience';
import AboutLibrary from '../components/about/AboutLibrary';
import AboutBeyond from '../components/about/AboutBeyond';
import AboutVision from '../components/about/AboutVision';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pt-24">
      <AboutHero />
      <AboutProcess />
      <AboutJourney />
      <AboutExperience />
      <AboutLibrary />
      <AboutBeyond />
      <AboutVision />
    </main>
  );
}
