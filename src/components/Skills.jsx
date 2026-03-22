import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'JavaScript', level: 75 },
        { name: 'Kotlin', level: 70 },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React.js', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 75 },
        { name: 'Android Dev', level: 70 },
      ],
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'Git/GitHub', level: 80 },
        { name: 'Ubuntu/Linux', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative z-10 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-[var(--color-primary)]">02. </span>Technical Skills
            </h2>
            <div className="w-24 h-1 bg-[var(--color-primary)]"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'spring', index * 0.3, 1)}
                className="glassmorphism rounded-2xl p-8 border border-[var(--color-border)]"
              >
                <h3 className="text-2xl font-bold mb-6 text-[var(--color-text)] text-center border-b border-[var(--color-border)] pb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-[var(--color-text-muted)] font-medium group-hover:text-[var(--color-primary)] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[var(--color-text-muted)] text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[var(--color-surface)] rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 + idx * 0.1 }}
                          className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] h-2 rounded-full relative"
                        >
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[var(--color-text)] rounded-full shadow-[0_0_10px_#ff1e1e]"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
