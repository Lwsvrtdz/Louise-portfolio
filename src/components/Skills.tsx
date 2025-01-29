import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = {
  "Backend Development": [
    "PHP",
    "Laravel",
    "Lumen",
    "PHPUnit",
    "Test Driven Development",
  ],
  "Frontend Development": [
    "Vue.js",
    "Vuex",
    "Bootstrap Vue",
    "Element UI",
    "Single Page Applications",
  ],
  "DevOps & Tools": [
    "Docker",
    "Git",
    "Microservices",
    "cPanel",
    "Azure",
    "GCP",
  ],
  "Databases & Search": [
    "MySQL",
    "Elasticsearch",
    "API Development",
    "Postman",
  ]
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div
          ref={ref}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills & Technologies
            <span className="text-cyan-500">.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <div
                key={category}
                className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
