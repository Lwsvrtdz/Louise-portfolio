import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = {
  'Backend Development': [
    'Python', 'Node.js', 'Java', 'Go',
    'Django', 'FastAPI', 'Express', 'Spring Boot'
  ],
  'Databases': [
    'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch',
    'MySQL', 'Cassandra'
  ],
  'DevOps & Cloud': [
    'Docker', 'Kubernetes', 'AWS', 'GCP',
    'CI/CD', 'Terraform', 'Linux'
  ],
  'Tools & Others': [
    'Git', 'REST APIs', 'GraphQL', 'gRPC',
    'Message Queues', 'Microservices', 'System Design'
  ],
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills
            <span className="text-primary">.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
