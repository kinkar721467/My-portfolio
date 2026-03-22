import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaCertificate } from 'react-icons/fa';

const certificates = [
  { name: 'ChatGPT, Generative AI & LLM', issuer: 'Infosys', color: 'from-blue-600/20 to-cyan-500/20' },
  { name: 'Cloud Computing', issuer: 'NPTEL', color: 'from-purple-600/20 to-pink-500/20' },
  { name: 'Computer Networking', issuer: 'Coursera', color: 'from-blue-600/20 to-indigo-500/20' },
  { name: 'Basic Python Programming', issuer: 'Edusera', color: 'from-[var(--color-primary)]/20 to-orange-500/20' },
  { name: 'Java (Basic)', issuer: 'HackerRank', color: 'from-green-600/20 to-emerald-500/20' },
  { name: 'Python (Basic)', issuer: 'HackerRank', color: 'from-blue-600/20 to-sky-500/20' },
  { name: 'SQL (Basic)', issuer: 'HackerRank', color: 'from-blue-600/20 to-indigo-500/20' }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative z-10 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-[var(--color-primary)]">07. </span>Certifications
            </h2>
            <div className="w-24 h-1 bg-[var(--color-primary)]"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'spring', index * 0.15, 1)}
                className="relative group h-full flex"
              >
                {/* Decorative background glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200`}></div>
                
                <div className="relative glassmorphism w-full h-full rounded-2xl p-8 border border-[var(--color-border)] hover:border-[var(--color-primary)] bg-[var(--color-secondary)] transition-all flex flex-col justify-between overflow-hidden">
                  
                  {/* Watermark Icon */}
                  <div className="absolute -right-6 -top-6 p-4 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-500 pointer-events-none transform rotate-12">
                    <FaCertificate size={150} className="text-[var(--color-primary)]" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-full bg-[var(--color-surface)] flex items-center justify-center border border-[var(--color-border)] text-[var(--color-primary)] shadow-inner">
                        <FaCertificate size={24} />
                      </div>
                      
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(255,30,30,0.05)]">
                        Verified
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[var(--color-text)] leading-snug mb-3 group-hover:text-[var(--color-primary)] transition-colors pr-4">
                      {cert.name}
                    </h3>
                  </div>
                  
                  <div className="relative z-10 pt-6 mt-4 border-t border-[var(--color-border)]/50">
                    <p className="text-sm font-mono text-[var(--color-text-muted)] capitalize flex items-center">
                      <span className="text-[var(--color-primary)] mr-2">ISSUED BY</span>
                      <span className="text-[var(--color-text)] font-semibold">{cert.issuer}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
