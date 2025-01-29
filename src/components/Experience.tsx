import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    company: 'CoDev',
    position: 'Senior PHP Developer',
    period: 'Oct 2024 - Present',
    location: 'United States · Remote',
    type: 'Full-time',
    skills: ['Laravel', 'Docker', 'Test Driven Development', 'AirePHP', 'PHPUnit', 'PHP']
  },
  {
    company: 'Connect inc',
    position: 'Software Engineer',
    period: 'Jun 2023 - Present',
    location: 'Tokyo, Japan · Remote',
    type: 'Full-time',
    skills: ['Laravel', 'Docker', 'Test Driven Development', 'AirePHP', 'PHPUnit', 'PHP']
  },
  {
    company: 'Style Group',
    position: 'Senior Software Engineer',
    period: 'Nov 2022 - Nov 2023',
    location: 'United Kingdom · Remote',
    type: 'Full-time',
    description: 'Creating and maintaining in-house applications used by their Employees.',
    skills: ['Laravel', 'Test Driven Development', 'bootstrap-vue', 'Vue.js', 'ElementUI', 'Single Page Applications', 'PHPUnit', 'PHP']
  },
  {
    company: 'Multisys Technologies Corporation',
    position: 'Backend Software Engineer',
    period: 'Jul 2021 - Nov 2022',
    location: 'Philippines',
    type: 'Full-time',
    skills: ['Laravel', 'Lumen', 'Elasticsearch', 'Test Driven Development', 'Microservices', 'Codecov', 'PHPUnit']
  },
  {
    company: 'Iservice Global Business Solutions Co.',
    position: 'Lead Full Stack Web Developer',
    period: 'Apr 2021 - Jul 2021',
    location: 'Philippines',
    type: 'Full-time',
    description: 'Full stack Web developer. Using Laravel for backend and VueJS for frontend. Developing REST APIs for mobile applications and existing websites.',
    skills: ['Laravel', 'VueJS', 'Vuex', 'Postman', 'API', 'MySQL', 'cPanel', 'GCP']
  },
  {
    company: 'Xiklab Digital',
    position: 'Web Developer',
    period: 'Feb 2021 - Jul 2021',
    location: 'Philippines',
    type: 'Part-time',
    description: 'Freelance Full Stack Web Developer.',
    skills: ['Laravel', 'VueJS', 'Vuex', 'Vuetify']
  },
  {
    company: 'QoreIT',
    position: 'Web Developer',
    period: 'Nov 2019 - Apr 2021',
    location: 'Salawag, Cavite',
    type: 'Full-time',
    description: 'Junior Full Stack Web developer (Laravel & Vue JS). Managing Web Server.',
    skills: ['Laravel', 'VueJS', 'MySQL', 'API', 'JQuery', 'Azure']
  }
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Experience
            <span className="text-cyan-500">.</span>
          </h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1.5 w-8 h-8 bg-white dark:bg-gray-900 border-2 border-cyan-500 rounded-full" />
                  
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-cyan-600 dark:text-cyan-400 font-medium">
                        {exp.company}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {exp.location} · {exp.type}
                      </div>
                    </div>

                    {exp.description && (
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
