import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 dark:from-black/80 dark:to-black/60" />
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
          alt="Software Engineering Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              Louise
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            A passionate Software Engineer specializing in building robust and scalable web applications
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={300}
              offset={-64}
              className="cursor-pointer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
              >
                View Experience
              </motion.button>
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={300}
              offset={-64}
              className="cursor-pointer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm transition-colors"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={300}
            offset={-64}
            className="cursor-pointer"
          >
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <ChevronDownIcon className="h-8 w-8 text-white/70 hover:text-white transition-colors" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
