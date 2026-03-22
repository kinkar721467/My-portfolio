import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="relative z-0">
      <Hero />
      <div className="relative z-10">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
