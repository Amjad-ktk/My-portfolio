'use client'

import { motion } from 'framer-motion'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      description: 'Core languages I use for development',
      skills: [
        { name: 'C++', icon: '⚡', color: 'from-blue-500 to-blue-600', proficiency: 85 },
        { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-yellow-500', proficiency: 90 },
        { name: 'Python', icon: '🐍', color: 'from-green-500 to-green-600', proficiency: 80 }
      ]
    },
    {
      title: 'Frontend Technologies',
      description: 'Modern frontend frameworks and tools',
      skills: [
        { name: 'HTML5', icon: '🟠', color: 'from-orange-500 to-orange-600', proficiency: 95 },
        { name: 'CSS3', icon: '🔵', color: 'from-blue-500 to-blue-600', proficiency: 90 },
        { name: 'Bootstrap', icon: '🟣', color: 'from-purple-500 to-purple-600', proficiency: 85 },
        { name: 'React', icon: '🔷', color: 'from-blue-400 to-blue-500', proficiency: 88 }
      ]
    },
    {
      title: 'Backend & Database',
      description: 'Server-side technologies and data management',
      skills: [
        { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-600', proficiency: 85 },
        { name: 'Flask', icon: '🔥', color: 'from-orange-500 to-orange-600', proficiency: 75 },
        { name: 'MongoDB', icon: '🟢', color: 'from-green-400 to-green-500', proficiency: 80 },
        { name: 'SQL Server', icon: '🔵', color: 'from-blue-500 to-blue-600', proficiency: 75 }
      ]
    },
    {
      title: 'Tools & Libraries',
      description: 'Development tools and essential libraries',
      skills: [
        { name: 'jQuery', icon: '🔵', color: 'from-blue-500 to-blue-600', proficiency: 80 },
        { name: 'Git', icon: '🟠', color: 'from-orange-500 to-orange-600', proficiency: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">Skills & Technologies</h2>
          <div className="section-divider"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>
        
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={category.title}
            className="mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">{category.title}</h3>
              <p className="text-gray-400 text-lg mb-6">{category.description}</p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className={`text-5xl mb-4 skill-icon ${skill.color} bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-3">{skill.name}</h4>
                    
                    {/* Proficiency bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                      <motion.div 
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm text-gray-300">{skill.proficiency}%</span>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Additional skills showcase */}
        <motion.div 
          className="text-center mt-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Always Learning</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['TypeScript', 'Next.js', 'GraphQL', 'Docker', 'AWS', 'Testing'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/20 text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
