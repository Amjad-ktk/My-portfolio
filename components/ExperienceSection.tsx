'use client'

import { motion } from 'framer-motion'

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Attobility',
      period: 'Present',
      location: 'Australia (Remote)',
      description: 'Currently working as a software developer for an Australian technology company specializing in comprehensive well-being and education solutions. Contributing to innovative digital platforms that serve schools, healthcare providers, and wellness services.',
      isCurrent: true,
      technologies: ['React', 'React Native', 'Node.js', 'MongoDB', 'TypeScript', 'Mobile Development'],
      achievements: ['Working on international projects for Australian market', 'Contributing to education and healthcare platforms', 'Collaborating with global development team']
    },
    {
      id: 2,
      title: 'Software Developer',
      company: 'Dynasol Technology',
      period: '2023 - 2024',
      location: 'Lahore, Pakistan',
      description: 'Worked as a software developer, contributing to various projects and maintaining existing systems. Specializing in full-stack development with modern technologies.',
      isCurrent: false,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
      achievements: ['Led development of 3+ client projects', 'Improved system performance by 40%', 'Mentored junior developers']
    },
    {
      id: 3,
      title: 'Software Developer Intern',
      company: 'Fajar Technology',
      period: '2023',
      location: 'Lahore, Pakistan',
      description: 'Gained valuable experience in software development, working on real-world projects and learning industry best practices. Contributed to multiple web applications.',
      isCurrent: false,
      technologies: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'jQuery', 'PHP'],
      achievements: ['Developed 2 web applications', 'Learned agile development practices', 'Collaborated with senior developers']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Work Experience</h2>
          <div className="section-divider"></div>
          <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            My professional journey in software development and technology
          </p>
        </motion.div>
        
        {/* Mobile-first timeline layout */}
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-1 timeline-line"></div>
          
          {/* Experience items */}
          <div className="space-y-8 lg:space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot - positioned differently for mobile vs desktop */}
                <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 lg:w-6 lg:h-6 timeline-dot rounded-full border-4 border-white shadow-lg mb-4 lg:mb-0"></div>
                
                {/* Experience content - full width on mobile, positioned on desktop */}
                <div className="lg:w-5/12 lg:absolute lg:top-0 lg:transform lg:-translate-y-1/2 lg:pr-12 lg:text-right">
                  <motion.div 
                    className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-2xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">{experience.title}</h3>
                        {experience.isCurrent && (
                          <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium w-fit sm:w-auto">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                            Current Position
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                          <span className="text-blue-600 font-semibold text-lg">{experience.company}</span>
                          <span className="hidden sm:inline text-gray-400">•</span>
                          <span className="text-gray-600 text-sm sm:text-base">{experience.location}</span>
                        </div>
                        <span className="text-gray-500 font-medium text-sm sm:text-base">{experience.period}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                      {experience.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-xs md:text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 md:px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs md:text-sm rounded-full font-medium border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <h4 className="text-xs md:text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Key Achievements</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✓</span>
                            <span className="text-gray-600 text-xs md:text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right side content for desktop - only show on larger screens */}
                {index % 2 === 1 && (
                  <div className="hidden lg:block lg:w-5/12 lg:absolute lg:top-0 lg:right-0 lg:transform lg:-translate-y-1/2 lg:pl-12">
                    <motion.div 
                      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-2xl"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{experience.title}</h3>
                        <div className="flex items-center justify-center space-x-4 mb-3">
                          <span className="text-blue-600 font-semibold text-lg">{experience.company}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600">{experience.location}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <span className="text-gray-500 font-medium">{experience.period}</span>
                          {experience.isCurrent && (
                            <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                              Current Position
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {experience.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {experience.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full font-medium border border-blue-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Key Achievements</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1">✓</span>
                              <span className="text-gray-600 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
