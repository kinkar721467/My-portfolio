import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { GitHubCalendar } from 'react-github-calendar';

const Achievements = () => {
  const explicitTheme = {
    light: ['#f0f0f0', '#ffb3b3', '#ff6666', '#ff1e1e', '#990000'],
    dark: ['#141414', '#4d0000', '#990000', '#e60000', '#ff1e1e'],
  };

  return (
    <section id="achievements" className="py-24 relative z-10 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-[var(--color-primary)]">05. </span>Achievements & Stats
            </h2>
            <div className="w-24 h-1 bg-[var(--color-primary)]"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div 
              variants={fadeIn('up', 'spring', 0.3, 1)}
              className="glassmorphism rounded-2xl p-8 border border-[var(--color-border)] flex flex-col justify-center items-center text-center relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-[var(--color-primary)] rounded-full opacity-10 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="w-24 h-24 mb-6 relative">
                <div className="absolute inset-0 bg-yellow-500 rounded-full blur-xl opacity-20"></div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" 
                  alt="HackerRank" 
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" 
                />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">5⭐ Java Programming Badge</h3>
              <p className="text-[var(--color-primary)] font-mono mb-4">HackerRank</p>
              <p className="text-[var(--color-text-muted)]">Achieved top-tier problem-solving ranking in Java by consistently passing complex algorithmic challenges.</p>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 'spring', 0.5, 1)}
              className="glassmorphism rounded-2xl p-8 border border-[var(--color-border)] flex flex-col justify-center items-center text-center relative overflow-hidden group"
            >
              <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-[var(--color-primary)] rounded-full opacity-10 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="text-6xl text-[var(--color-text)] font-bold mb-6 flex items-center justify-center relative">
                <span className="text-[var(--color-primary)] neon-text absolute blur-sm">200+</span>
                <span className="relative">200+</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">DSA Problems Solved</h3>
              <p className="text-[var(--color-primary)] font-mono mb-4">LeetCode & GeeksForGeeks</p>
              <p className="text-[var(--color-text-muted)]">Consistently honing algorithmic thinking and optimization skills across various problem paradigms.</p>
            </motion.div>
          </div>

          <motion.div 
            variants={fadeIn('up', 'tween', 0.7, 1)}
            className="glassmorphism rounded-2xl p-8 border border-[var(--color-border)] overflow-hidden"
          >
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-6 font-mono text-center">GitHub Contributions</h3>
            <div className="flex justify-center w-full overflow-x-auto custom-scrollbar pb-4">
              <GitHubCalendar 
                username="kinkar721467" 
                colorScheme="dark"
                theme={explicitTheme}
                blockSize={12}
                blockMargin={5}
                fontSize={14}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
