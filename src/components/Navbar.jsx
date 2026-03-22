import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Theme initialization
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    } else {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      if (prefersLight) {
        setTheme('light');
        document.documentElement.classList.add('light');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Definitively set 'home' if we are at the very top
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }
      
      // More accurate scroll spy behavior using bounding rect
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold (e.g., 200px) as needed so it triggers slightly before reaching the very top
          if (rect.top <= 300) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    
    // Call it right away so if they load half way down the page, it finds the right section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-[90%] md:w-auto flex flex-col items-center">
      <nav 
        className={`pointer-events-auto transition-all duration-500 ease-in-out rounded-full border w-full md:w-auto py-3 px-6 md:px-8 backdrop-blur-xl ${
          isScrolled 
            ? (theme === 'light' ? 'bg-white/90 border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)]' : 'bg-[#141414]/90 border-white/10 shadow-[0_4px_30px_rgba(255,30,30,0.15)]') 
            : (theme === 'light' ? 'bg-white/60 border-gray-200/50' : 'bg-[#141414]/40 border-white/5')
        }`}
      >
        <div className="flex justify-between items-center gap-6 md:gap-14">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="text-xl font-bold font-mono group relative z-50 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={theme === 'light' ? 'text-gray-800 transition-colors' : 'text-white transition-colors'}>&lt;</span>
            <span className="gradient-text neon-text group-hover:drop-shadow-[0_0_10px_rgba(255,30,30,0.8)] transition-all duration-300">
              Kinkar
            </span>
            <span className={theme === 'light' ? 'text-gray-800 transition-colors' : 'text-white transition-colors'}>/&gt;</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className={`relative text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
                    isActive 
                      ? 'text-[var(--color-primary)]' 
                      : (theme === 'light' ? 'text-gray-600 hover:text-black' : 'text-gray-400 hover:text-white')
                  } group whitespace-nowrap`}
                >
                  {link.name}
                  {/* Hover Underline effect */}
                  <span 
                    className={`absolute -bottom-1.5 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] transform origin-left transition-transform duration-300 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </motion.a>
              )
            })}
          </div>

          {/* Controls: Theme Toggle & Mobile Hamburger */}
          <div className="flex items-center gap-2 md:gap-4 z-50">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${theme === 'light' ? 'text-gray-600 hover:text-black hover:bg-gray-200/50' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                // Sun Icon for dark mode (click to go light)
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon Icon for light mode (click to go dark)
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </motion.button>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden flex items-center">
              <motion.button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="focus:outline-none p-1 relative"
                whileTap={{ scale: 0.9 }}
              >
                <div className="flex flex-col gap-1.5 w-5 items-end">
                  <motion.span 
                    animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className={`w-full h-[2px] block transition-all duration-300 ${theme === 'light' ? 'bg-gray-800' : 'bg-white'}`}
                  />
                  <motion.span 
                    animate={isMobileMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                    className="w-3 h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] block transition-all duration-300"
                  />
                  <motion.span 
                    animate={isMobileMenuOpen ? { rotate: -45, y: -8, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                    className={`w-full h-[2px] block transition-all duration-300 ${theme === 'light' ? 'bg-gray-800' : 'bg-white'}`}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden pointer-events-auto w-full overflow-hidden backdrop-blur-xl border rounded-3xl z-40 ${
              theme === 'light' ? 'bg-white/95 border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.1)]' : 'bg-[#141414]/95 border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]'
            }`}
          >
            <div className="flex flex-col gap-6 items-center w-full py-8 px-6">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.name.toLowerCase();
                return (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className={`text-lg font-bold tracking-widest uppercase transition-colors duration-300 ${
                      isActive 
                        ? 'gradient-text neon-text' 
                        : (theme === 'light' ? 'text-gray-600 hover:text-black' : 'text-gray-400 hover:text-white')
                    }`}
                  >
                    {link.name}
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
