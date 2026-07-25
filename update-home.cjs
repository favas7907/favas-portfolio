const fs = require('fs');

const code = `import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Process from '../components/Process';
import Achievements from '../components/Achievements';
import CurrentFocus from '../components/CurrentFocus';
import CallToExplore from '../components/CallToExplore';

export default function Home() {
  return (
    <>
      {/* Chapter 0: Hero Introduction */}
      <Hero />
      
      {/* Chapter 1: A short introduction to how I think */}
      <About previewOnly />
      
      {/* Chapter 2: Selected Skills */}
      <Skills previewOnly />
      
      {/* Chapter 3: Featured Projects */}
      <Projects previewOnly />
      
      {/* Chapter 4: Engineering Process */}
      <Process />
      
      {/* Chapter 5: Achievements */}
      <Achievements previewOnly />
      
      {/* Chapter 6: Current Focus */}
      <CurrentFocus />
      
      {/* Chapter 7: Final Call To Explore */}
      <CallToExplore />
    </>
  );
}
`;

fs.writeFileSync('src/pages/Home.tsx', code);
