'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Muhammad Amjad. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
