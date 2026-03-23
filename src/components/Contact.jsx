import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLocationArrow } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10 bg-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-[var(--color-primary)]">07. </span>Get In Touch
            </h2>
            <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto md:mx-0"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Main CTA Card - Takes up 2 columns on large screens */}
            <motion.a 
              href="mailto:kinkardinda70@gmail.com"
              variants={fadeIn('up', 'tween', 0.3, 1)}
              className="lg:col-span-2 group relative overflow-hidden glassmorphism p-8 md:p-12 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,30,30,0.15)] flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-[var(--color-primary)]/20"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl flex justify-center items-center mb-8 group-hover:scale-110 transition-transform duration-500 neon-glow">
                  <FaEnvelope className="text-3xl text-[var(--color-primary)]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Let's work together!</h3>
                <p className="text-[var(--color-text-muted)] text-lg max-w-md mb-8">
                  I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
              
              <div className="relative z-10 flex items-center gap-4 text-[var(--color-text)] font-semibold group-hover:text-[var(--color-primary)] transition-colors">
                <span className="text-xl">Say Hello</span>
                <FaLocationArrow className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.a 
              href="tel:+917319403576"
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="group relative overflow-hidden glassmorphism p-8 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-center items-center text-center"
            >
              <div className="w-16 h-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl flex justify-center items-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaPhoneAlt className="text-2xl text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
              </div>
              <h4 className="text-[var(--color-text)] font-medium text-xl mb-2">Call Me</h4>
              <p className="text-[var(--color-text-muted)] font-mono group-hover:text-[var(--color-text)] transition-colors">+91 7319403576</p>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a 
              href="https://www.linkedin.com/in/kinkar06/"
              target="_blank" rel="noopener noreferrer"
              variants={fadeIn('up', 'tween', 0.5, 1)}
              className="group relative overflow-hidden glassmorphism p-8 rounded-3xl border border-[var(--color-border)] hover:border-[#0077b5] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-center items-center text-center"
            >
              <div className="w-16 h-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl flex justify-center items-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:border-[#0077b5]">
                <FaLinkedin className="text-3xl text-[var(--color-text-muted)] group-hover:text-[#0077b5] transition-colors" />
              </div>
              <h4 className="text-[var(--color-text)] font-medium text-xl mb-2">LinkedIn</h4>
              <p className="text-[var(--color-text-muted)] text-sm group-hover:text-[var(--color-text)] transition-colors">Let's connect professionally</p>
            </motion.a>

            {/* GitHub Card */}
            <motion.a 
              href="https://github.com/kinkar721467"
              target="_blank" rel="noopener noreferrer"
              variants={fadeIn('up', 'tween', 0.6, 1)}
              className="group relative overflow-hidden glassmorphism p-8 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-text)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-center items-center text-center"
            >
              <div className="w-16 h-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl flex justify-center items-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:border-[var(--color-text)]">
                <FaGithub className="text-3xl text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors" />
              </div>
              <h4 className="text-[var(--color-text)] font-medium text-xl mb-2">GitHub</h4>
              <p className="text-[var(--color-text-muted)] text-sm group-hover:text-[var(--color-text)] transition-colors">Check out my repos</p>
            </motion.a>

            {/* Location Card */}
            <motion.div 
              variants={fadeIn('up', 'tween', 0.7, 1)}
              className="group relative overflow-hidden glassmorphism p-8 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-500 flex flex-col justify-center items-center text-center"
            >
              <div className="relative z-10 w-16 h-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl flex justify-center items-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FaMapMarkerAlt className="text-2xl text-[var(--color-text-muted)] group-hover:text-[#ea4335] transition-colors" />
              </div>
              <h4 className="relative z-10 text-[var(--color-text)] font-medium text-xl mb-2">Location</h4>
              <p className="relative z-10 text-[var(--color-text-muted)] text-sm group-hover:text-[var(--color-text)] transition-colors">India</p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

