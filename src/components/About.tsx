import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            About Me
            <span className="text-cyan-600">.</span>
          </h2>
          
          <div className="space-y-6 text-slate-600 dark:text-slate-400">
            <p>
              I'm a passionate Backend Engineer with expertise in designing and implementing 
              scalable server-side applications. My journey in software engineering has been 
              driven by a deep interest in system architecture, database design, and API development.
            </p>
            
            <p>
              With a strong foundation in computer science and years of hands-on experience, 
              I specialize in building robust, efficient, and maintainable backend systems 
              that power modern applications.
            </p>

            <p>
              I'm particularly interested in distributed systems, microservices architecture, 
              and cloud computing. I enjoy tackling complex technical challenges and finding 
              elegant solutions that balance performance, scalability, and maintainability.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm"
              >
                <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-cyan-600">
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const stats = [
  { name: 'Years of Experience', value: '5+' },
  { name: 'Projects Completed', value: '50+' },
  { name: 'Technologies Mastered', value: '15+' },
]
