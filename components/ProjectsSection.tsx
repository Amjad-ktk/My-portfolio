'use client'

import { motion } from 'framer-motion'

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Attobility Platform',
      description: 'Comprehensive well-being and education technology platform serving schools, healthcare providers, and wellness services. Features include student management, health assessments, training plans, and mobile applications.',
      icon: '🏥',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      technologies: ['React', 'React Native', 'Node.js', 'MongoDB', 'TypeScript', 'Mobile Development'],
      liveUrl: 'https://www.attobility.com/',
      githubUrl: 'https://github.com/Amjad-ktk',
      status: 'Live'
    },
    {
      id: 2,
      title: 'New-Minduxe',
      description: 'Pakistan\'s top multi-vendor online store specializing in fashion, beauty, home essentials, and electronics. A comprehensive e-commerce platform with extensive product categories and modern shopping experience.',
      icon: '🛍️',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'E-commerce'],
      liveUrl: 'https://minduxe.com/',
      githubUrl: 'https://github.com/Amjad-ktk',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Influencer Tube',
      description: 'A comprehensive web application connecting businesses with influencers for effective marketing campaigns. Features advanced search, analytics, and campaign management tools.',
      icon: '👥',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Amjad-ktk',
      status: 'Live'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Full-featured React-based e-commerce solution with dynamic routing, context API for state management, and integrated payment processing.',
      icon: '🛒',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      technologies: ['React', 'SCSS', 'Context API', 'Stripe', 'Firebase'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Amjad-ktk',
      status: 'Live'
    },
    {
      id: 5,
      title: 'Salar Sync CMS',
      description: 'Enterprise-grade content management system designed for scalability and performance. Includes role-based access control and advanced content workflows.',
      icon: '⚙️',
      gradient: 'from-green-500 via-teal-500 to-blue-500',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Multer'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Amjad-ktk',
      status: 'Live'
    },
    {
      id: 6,
      title: 'RT Tracker',
      description: 'Real-time employee tracking system with comprehensive monitoring, shift management, and productivity analytics for modern workplaces.',
      icon: '⏰',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      technologies: ['MERN Stack', 'Bootstrap', 'REST APIs', 'Socket.io', 'Chart.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Amjad-ktk',
      status: 'Live'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -12 }}
            >
              {/* Project header with gradient */}
              <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl drop-shadow-lg">{project.icon}</span>
                </div>
                
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    {project.status}
                  </span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-lg font-semibold mb-2">View Details</p>
                    <div className="flex space-x-4 justify-center">
                      {project.liveUrl !== '#' && (
                        <motion.a 
                          href={project.liveUrl}
                          className="px-4 py-2 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Live Demo
                        </motion.a>
                      )}
                      <motion.a 
                        href={project.githubUrl}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        My GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technology tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <motion.span 
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full font-medium border border-blue-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex space-x-4">
                  {project.liveUrl !== '#' ? (
                    <motion.a 
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Project
                    </motion.a>
                  ) : (
                    <div className="flex-1 bg-gray-300 text-gray-500 py-3 px-4 rounded-lg font-semibold text-center cursor-not-allowed">
                      Demo Coming Soon
                    </div>
                  )}
                  <motion.a 
                    href={project.githubUrl}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold text-center hover:bg-gray-200 transition-colors duration-300 border border-gray-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    My GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
