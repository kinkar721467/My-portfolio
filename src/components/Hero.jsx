import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ParticlesContainer from './ParticlesContainer';
import { fadeIn, textVariant } from '../utils/motion';
import heroImg from '../assets/hero.jpeg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Full Stack Developer', 'Computer Science Student', 'Problem Solver'];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000); // Wait before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen mx-auto overflow-hidden">
      <ParticlesContainer />
      
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10 pt-10 md:pt-0">
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          animate="show"
          className="flex-1 w-full flex flex-col justify-center items-start md:mt-0 mt-8 order-2 md:order-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[var(--color-text)] mb-4">
            Hello, I'm <br className="sm:hidden" />
            <span className="text-[var(--color-primary)] neon-text">Kinkar Dinda</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-[var(--color-text-muted)] mb-6 h-12">
            {'<'} <span className="text-[var(--color-text)]">{text}</span>
            <span className="w-[3px] h-8 bg-[var(--color-primary)] inline-block animate-pulse ml-1 align-middle"></span> {'/>'}
          </h2>

          <motion.p 
            variants={fadeIn('up', 'tween', 0.3, 1)}
            initial="hidden"
            animate="show"
            className="mt-4 text-[var(--color-text)] text-lg max-w-2xl leading-relaxed"
          >
            I am a passionate Computer Science student focused on building scalable web applications, solving complex problems through data structures and algorithms, and creating impactful technology solutions.
          </motion.p>
          
          <motion.div 
            variants={fadeIn('up', 'tween', 0.5, 1)}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-6 items-center"
          >
            <a href="#projects" className="bg-[var(--color-primary)] hover:bg-[#cc0000] text-[#ffffff] py-3 px-8 rounded-full font-medium transition-all neon-glow border border-transparent">
              View Projects
            </a>
            <a href="/resume.pdf" download className="glassmorphism hover:bg-[rgba(255,30,30,0.1)] text-[var(--color-text)] py-3 px-8 rounded-full font-medium transition-all neon-glow border border-[var(--color-primary)]">
              Download Resume
            </a>
            <a href="#contact" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] font-medium transition-colors underline-offset-4 hover:underline">
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            variants={fadeIn('right', 'tween', 0.7, 1)}
            initial="hidden"
            animate="show"
            className="mt-12 flex gap-6"
          >
            <a href="https://github.com/kinkar721467" target="_blank" rel="noopener noreferrer" 
               className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors bg-[var(--color-surface)] p-3 rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)] neon-glow">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kinkar06/" target="_blank" rel="noopener noreferrer"
               className="text-[var(--color-text-muted)] hover:text-[#0077b5] transition-colors bg-[var(--color-surface)] p-3 rounded-full border border-[var(--color-border)] hover:border-[#0077b5] neon-glow">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:kinkardinda70@gmail.com"
               className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors bg-[var(--color-surface)] p-3 rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)] neon-glow">
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          initial="hidden"
          animate="show"
          className="flex-1 w-full flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0"
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors duration-500 shadow-[0_0_30px_rgba(255,0,0,0.3)]">
            <img 
              src={heroImg} 
              alt="Kinkar Dinda" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[var(--color-border)] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-[var(--color-primary)] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
