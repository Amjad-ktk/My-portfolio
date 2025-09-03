'use client'

import { motion } from 'framer-motion'

const EducationSection = () => {
  const coursework = [
    'Object Oriented Programming',
    'Databases',
    'Data Structures & Algorithms',
    'Operating Systems',
    'Computer Networks',
    'Artificial Intelligence',
    'Machine Learning',
    'Android Development'
  ]

  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">B.S. in Computer Science</h3>
                <p className="text-xl text-blue-600 font-semibold">Lahore Garrison University (LGU)</p>
                <p className="text-gray-600">Lahore, Pakistan</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="text-gray-600">Oct 2021 – Sep 2025</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Relevant Coursework</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {coursework.map((course, index) => (
                  <motion.span 
                    key={course}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
