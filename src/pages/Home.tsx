import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ScrollProgress from '../components/ScrollProgress';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-primary selection:text-white">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
