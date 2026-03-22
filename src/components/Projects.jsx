import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '../utils/motion';

const projects = [
  {
    title: 'Student Skills Tracking System',
    description: 'A centralized national platform designed to monitor and analyze technology skill development across students. Connects students, universities, and government bodies.',
    features: [
      'Coding profile integration (LeetCode, GFG)',
      'Student skill portfolios',
      'Automated ranking system',
      'Admin analytics dashboard',
      'Job & hackathon notifications'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'DSA Visualizer',
    description: 'An interactive educational desktop application designed to visually demonstrate how core data structures work via step-by-step animated visualizations.',
    features: [
      'Animated operations (insertion, deletion, traversal)',
      'Real-time visual representation',
      'Time complexity explanation',
      'Clean Java Swing interface'
    ],
    tech: ['Java', 'Java Swing', 'Data Structures', 'OOP'],
    github: '#',
    demo: '',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Google Gemini Chatbot Clone',
    description: 'A dual-mode AI chatbot capable of answering rule-based banking queries as well as generating intelligent responses using the Google Gemini API.',
    features: [
      'Voice search capability',
      'AI image generation',
      'Secure authentication',
      'Role-based premium access',
      'Downloadable chat history'
    ],
    tech: ['Google Gemini API', 'PHP', 'MySQL', 'JavaScript'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'E-Commerce Platform (Freelance Client)',
    description: 'A full-featured e-commerce digital storefront developed for a real-world client. Includes complete product management, user authentication, and secure checkout flows.',
    features: [
      'User authentication and authorization',
      'Advanced product search and filtering',
      'Shopping cart and checkout functionality',
      'Admin dashboard for inventory management',
      'Secure payment gateway integration'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Real-Time Weather App',
    description: 'A responsive weather forecasting application that provides real-time weather data and forecasts based on the user\'s location or searched cities.',
    features: [
      'Real-time weather data fetching via API',
      'Location-based automatic weather detection',
      'Dynamic interface matching live weather conditions',
      'Responsive design for all devices',
      'City search functionality'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1504608524841-42ce6c2ce902?q=80&w=2070&auto=format&fit=crop'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10 bg-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-[var(--color-primary)]">03. </span>Featured Projects
            </h2>
            <div className="w-24 h-1 bg-[var(--color-primary)]"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'spring', index * 0.3, 1)}
                className="glassmorphism rounded-2xl overflow-hidden group cursor-pointer border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors h-full flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] to-transparent z-10"></div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col z-20 -mt-10">
                  <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm mb-6 flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-xs font-mono text-[var(--color-primary)] bg-[rgba(255,30,30,0.1)] px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs font-mono text-[var(--color-text-muted)] bg-[var(--color-surface)] px-2 py-1 rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--color-secondary)] border border-gray-700 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl shadow-[rgba(255,30,30,0.2)] max-h-[90vh] flex flex-col"
            >
              <div className="relative h-64 shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] to-transparent"></div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-[var(--color-primary)] transition-colors z-50"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <h3 className="text-3xl font-bold text-[var(--color-text)] mb-4">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="text-sm font-mono text-[var(--color-primary)] bg-[rgba(255,30,30,0.1)] px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-[var(--color-text)] mb-3">Overview</h4>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-[var(--color-text)] mb-3">Key Features</h4>
                  <ul className="list-none space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-[var(--color-text-muted)]">
                        <span className="text-[var(--color-primary)] mr-2 mt-1">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-[var(--color-border)]">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 bg-[var(--color-text)] text-[var(--color-background)] hover:opacity-80 px-6 py-2 rounded-full font-medium transition-opacity">
                    <FaGithub /> Source Code
                  </a>
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 bg-[var(--color-primary)] text-white hover:bg-[#cc0000] px-6 py-2 rounded-full font-medium transition-colors neon-glow">
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
