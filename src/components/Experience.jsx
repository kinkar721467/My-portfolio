import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const experienceData = [
  {
    role: "Training - Data Structures and Algorithms",
    company: "Centre for Professional Enhancement (LPU)",
    duration: "Jun 2025 – Jul 2025",
    location: "Punjab, India",
    type: "Certificate",
    description: [
      "Gained solid understanding of core Data Structures including Arrays, Linked Lists, Stacks, Queues, Trees, Binary Search, and Hashing with practical Java-based implementations.",
      "Built a Java Swing-based DSA Visualizer demonstrating insertion, deletion, traversal, and search operations using OOP concepts and GUI development.",
      "Developed strong grasp of DSA fundamentals, time complexities, logic-building, and problem-solving skills through hands-on implementation."
    ],
    icon: FaBriefcase,
    delay: 0.4
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-[var(--color-primary)]">04. </span>Experience & Training
            </h2>
            <div className="w-24 h-1 bg-[var(--color-primary)]"></div>
          </motion.div>

          <div className="relative border-l border-[var(--color-border)] ml-4 md:ml-8 py-2">
            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn('up', 'tween', exp.delay, 1)}
                  className="relative pl-8"
                >
                  <div className="absolute w-4 h-4 bg-[var(--color-primary)] rounded-full -left-[9px] top-8 shadow-[0_0_10px_#ff1e1e]"></div>
                  
                  <div className="glassmorphism p-8 rounded-2xl hover:border-[var(--color-primary)] transition-colors border border-[var(--color-border)]">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2 flex items-center gap-3">
                          {exp.role}
                          <exp.icon className="text-[var(--color-primary)] hidden sm:block" />
                        </h3>
                        <p className="text-xl text-[var(--color-text-muted)] font-medium">{exp.company}</p>
                      </div>
                      
                      <div className="flex flex-col gap-2 font-mono text-sm text-[var(--color-primary)] bg-[rgba(255,30,30,0.05)] border border-[rgba(255,30,30,0.2)] p-3 rounded-lg md:items-end shrink-0">
                        {exp.duration && (
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt /> <span>{exp.duration}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt /> <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex bg-[var(--color-surface)] px-4 py-2 rounded-full border border-[var(--color-border)] items-center justify-center">
                        <span className="text-[var(--color-text-muted)] mr-2 uppercase text-sm font-bold tracking-wider">Type</span>
                        <span className="text-[var(--color-text)] font-bold text-lg">{exp.type}</span>
                      </div>
                    </div>
                    
                    {exp.description && (
                      <ul className="mt-6 space-y-3">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-[var(--color-text-muted)] flex items-start gap-3">
                            <span className="text-[var(--color-primary)] mt-1.5 min-w-[12px]">▹</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
