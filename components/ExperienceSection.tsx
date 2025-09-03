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
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Work Experience</h2>
          <div className="section-divider"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            My professional journey in software development and technology
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-1 timeline-line"></div>
          
          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative flex items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 timeline-dot rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Experience content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
