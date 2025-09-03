'use client'

import { motion } from 'framer-motion'

const HeroSection = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="gradient-bg text-white pt-20 pb-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rounded-full float-animation"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/20 rounded-full float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/20 rounded-full float-animation" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-300/30 rounded-full float-animation" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-purple-300/30 rounded-full float-animation" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-blob"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-2xl animate-blob" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Enhanced title with better typography */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight leading-tight">
            Muhammad{' '}
            <span className="gradient-text font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              Amjad
            </span>
          </h1>
        </motion.div>
        
        {/* Enhanced subtitle */}
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-blue-100 tracking-wide"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
        >
          Full Stack Developer
        </motion.h2>
        
        {/* Enhanced description */}
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl mb-16 max-w-5xl mx-auto opacity-90 leading-relaxed font-light"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
        >
          Crafting digital experiences with modern web technologies. 
          Specializing in scalable solutions with{' '}
          <span className="font-semibold text-blue-200 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
            MERN stack
          </span>{' '}
          and{' '}
          <span className="font-semibold text-purple-200 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            React
          </span>.
        </motion.p>
        
        {/* Enhanced CTA buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
        >
          {/* Primary CTA Button */}
          <motion.button
            onClick={handleScrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center">
              View Projects
              <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
          </motion.button>

          {/* Secondary CTA Button */}
          <motion.a
            href="https://github.com/Amjad-ktk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center">
              GitHub Profile
              <svg className="ml-3 w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Enhanced scroll indicator - REMOVED */}
      </div>
    </section>
  )
}

export default HeroSection
