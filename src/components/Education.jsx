import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaSchool } from 'react-icons/fa';

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech – Computer Science and Engineering",
    duration: "Aug 2023 – Present",
    location: "Punjab, India",
    scoreLabel: "CGPA",
    scoreValue: "7.86",
    description: "Focusing on core computer science subjects including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering principles. Actively participating in hackathons and coding competitions to enhance practical problem-solving skills.",
    icon: FaGraduationCap,
    delay: 0.4
  },
  {
    institution: "Malpar Vivekananda Sikshaniketan",
    degree: "Intermediate",
    duration: "2021 – 2023",
    location: "Sabang, West Bengal",
    scoreLabel: "Percentage",
    scoreValue: "69%",
    description: "",
    icon: FaSchool,
    delay: 0.6
  },
  {
    institution: "Chandkuri Union High School",
    degree: "Matriculation",
    duration: "Jan 2020 – Jul 2021",
    location: "Sabang, West Bengal",
    scoreLabel: "Percentage",
    scoreValue: "84%",
    description: "",
    icon: FaSchool,
    delay: 0.8
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10 bg-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-[var(--color-primary)]">06. </span>Education Details
            </h2>
            <div className="w-24 h-1 bg-[var(--color-primary)]"></div>
          </motion.div>

          <div className="relative border-l border-[var(--color-border)] ml-4 md:ml-8 py-2">
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn('up', 'tween', edu.delay, 1)}
                  className="relative pl-8"
                >
                  <div className="absolute w-4 h-4 bg-[var(--color-primary)] rounded-full -left-[9px] top-8 shadow-[0_0_10px_#ff1e1e]"></div>
                  
                  <div className="glassmorphism p-8 rounded-2xl hover:border-[var(--color-primary)] transition-colors border border-[var(--color-border)]">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2 flex items-center gap-3">
                          {edu.institution}
                          <edu.icon className="text-[var(--color-primary)]" />
                        </h3>
                        <p className="text-xl text-[var(--color-text-muted)] font-medium">{edu.degree}</p>
                      </div>
                      
                      <div className="flex flex-col gap-2 font-mono text-sm text-[var(--color-primary)] bg-[rgba(255,30,30,0.05)] border border-[rgba(255,30,30,0.2)] p-3 rounded-lg md:items-end">
                        {edu.duration && (
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt /> <span>{edu.duration}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt /> <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex bg-[var(--color-surface)] px-4 py-2 rounded-full border border-[var(--color-border)] items-center justify-center">
                        <span className="text-[var(--color-text-muted)] mr-2 uppercase text-sm font-bold tracking-wider">{edu.scoreLabel}</span>
                        <span className="text-[var(--color-text)] font-bold text-xl">{edu.scoreValue}</span>
                      </div>
                    </div>
                    
                    {edu.description && (
                      <p className="mt-6 text-[var(--color-text-muted)]">
                        {edu.description}
                      </p>
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

export default Education;
