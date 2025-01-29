import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'Distributed Task Queue System',
    description: 'Designed and implemented a scalable distributed task queue system handling millions of tasks per day. Built with Python, Redis, and Kubernetes.',
    tags: ['Python', 'Redis', 'Kubernetes', 'Microservices'],
    link: '#',
  },
  {
    title: 'Real-time Analytics Platform',
    description: 'Created a real-time analytics platform processing terabytes of data daily. Utilized Apache Kafka, Elasticsearch, and Node.js.',
    tags: ['Node.js', 'Kafka', 'Elasticsearch', 'Docker'],
    link: '#',
  },
  {
    title: 'API Gateway Service',
    description: 'Built a high-performance API gateway service with rate limiting, caching, and authentication. Implemented using Go and Redis.',
    tags: ['Go', 'Redis', 'Docker', 'REST APIs'],
    link: '#',
  },
  {
    title: 'Database Migration Tool',
    description: 'Developed a tool for seamless database migrations and schema changes with zero downtime. Built with Python and PostgreSQL.',
    tags: ['Python', 'PostgreSQL', 'CLI', 'DevOps'],
    link: '#',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Projects
            <span className="text-cyan-600">.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-cyan-600 hover:text-cyan-700 dark:hover:text-cyan-500 font-medium inline-flex items-center"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
