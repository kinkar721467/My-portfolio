import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => {
  const strengths = [
    { title: 'Problem Solving', icon: '🧠', desc: 'Analyzing complex requirements to engineer efficient solutions.' },
    { title: 'Full Stack Development', icon: '💻', desc: 'Building seamless, end-to-end scalable web applications.' },
    { title: 'Quick & Agile Learner', icon: '🚀', desc: 'Adapting to new technologies and paradigms rapidly.' },
    { title: 'Team Collaboration', icon: '🤝', desc: 'Working effectively inside agile, cross-functional teams.' },
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-[var(--color-primary)]">01. </span>About Me
            </h2>
            <div className="w-24 h-1 bg-[var(--color-primary)] mb-8"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div 
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="lg:w-1/2 text-[var(--color-text-muted)] space-y-6 text-lg"
            >
              <p>
                I am a Computer Science undergraduate at <span className="text-[var(--color-primary)] font-semibold">Lovely Professional University</span> with a strong foundation in full-stack development, data structures, and software engineering.
              </p>
              <p>
                I thrive on transforming complex ideas into intuitive, highly functional products. My technical expertise continues to grow through building real-world projects and tackling challenging algorithmic problems.
              </p>
              <p>
                Whether I'm designing a sleek user interface, optimizing backend performance, or planning database architecture, I approach every engineering challenge with curiosity and a dedication to writing clean, maintainable code.
              </p>
              
              <div className="pt-6">
                <a href="#contact" className="inline-block border-b-2 border-[var(--color-primary)] text-[var(--color-text)] font-medium hover:text-[var(--color-primary)] transition-colors pb-1">Let's work together &rarr;</a>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn('left', 'tween', 0.6, 1)}
              className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {strengths.map((strength, index) => (
                <div 
                  key={index}
                  className="glassmorphism p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 neon-glow"
                >
                  <div className="text-3xl mb-3">{strength.icon}</div>
                  <h3 className="text-[var(--color-text)] font-bold mb-2">{strength.title}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm">{strength.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
