import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create a FormData object to send to the Google Apps Script Web App
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('message', formData.message);

      // Replace this URL with your actual Google Apps Script Web App URL
      const scriptURL = 'AKfycby474CSRvFP2MIlvqvQ1UxzBPZJtqddb44d8CGY2XP-A1Xx5zpJbx5oPPEE4gFbIZc2s';

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) throw new Error('Network response was not ok');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmitStatus('error');

      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-[var(--color-primary)]">07. </span>Get In Touch
            </h2>
            <div className="w-24 h-1 bg-[var(--color-primary)]"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              variants={fadeIn('right', 'tween', 0.4, 1)}
              className="lg:w-1/3 flex flex-col gap-8"
            >
              <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">Let's Connect</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex flex-col gap-6 mt-4">
                <a href="mailto:kinkardinda70@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full flex justify-center items-center group-hover:border-[var(--color-primary)] group-hover:bg-[rgba(255,30,30,0.1)] transition-colors neon-glow">
                    <FaEnvelope className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[var(--color-text)] font-medium">Email</h4>
                    <p className="text-[var(--color-text-muted)] font-mono text-sm group-hover:text-[var(--color-text)] transition-colors">kinkardinda70@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full flex justify-center items-center group-hover:border-[var(--color-primary)] group-hover:bg-[rgba(255,30,30,0.1)] transition-colors neon-glow">
                    <FaPhoneAlt className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[var(--color-text)] font-medium">Phone</h4>
                    <p className="text-[var(--color-text-muted)] font-mono text-sm group-hover:text-[var(--color-text)] transition-colors">+91-7319403576</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-[var(--color-text)] font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/kinkar721467" target="_blank" rel="noopener noreferrer"
                    className="bg-[var(--color-surface)] p-3 rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors neon-glow">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/kinkar06/" target="_blank" rel="noopener noreferrer"
                    className="bg-[var(--color-surface)] p-3 rounded-full border border-[var(--color-border)] hover:border-[#0077b5] text-[var(--color-text-muted)] hover:text-[#0077b5] transition-colors neon-glow">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 'tween', 0.6, 1)}
              className="lg:w-2/3"
            >
              <form onSubmit={handleSubmit} className="glassmorphism p-8 md:p-10 rounded-2xl border border-[var(--color-border)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm text-[var(--color-text-muted)] font-medium">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm text-[var(--color-text-muted)] font-medium">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="message" className="text-sm text-[var(--color-text-muted)] font-medium">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors resize-y"
                    placeholder="Hello Kinkar, I'd like to talk about..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-4 px-8 rounded-lg transition-all border border-transparent flex justify-center items-center gap-2 ${isSubmitting
                      ? 'bg-gray-500 cursor-not-allowed text-white/70'
                      : 'bg-[var(--color-primary)] hover:bg-[#cc0000] text-white neon-glow'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-3 text-green-500"
                  >
                    <FaCheckCircle className="mt-1 flex-shrink-0" />
                    <p className="text-sm">Thank you for Reaching out! Your message has been sent successfully. I will get back to you soon.</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3 text-red-500"
                  >
                    <FaExclamationCircle className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold mb-1">Failed to send message.</p>
                      <p className="text-xs opacity-80">Please ensure you have configured the Google Script Web App URL in Contact.jsx.</p>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
