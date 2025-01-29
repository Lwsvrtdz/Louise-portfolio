import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Get in Touch
            <span className="text-cyan-500">.</span>
          </h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-3 bg-transparent dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-lg focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-3 bg-transparent dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-lg focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-transparent dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-lg focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                placeholder="Your message"
              />
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full py-3 px-4 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
