import { useState, useCallback } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { Disclosure } from '@headlessui/react'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const navigation = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
]

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero')

  const handleSetActive = useCallback((section: string) => {
    setActiveSection(section)
  }, [])

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50">
      {({ open }) => (
        <>
          <div className="absolute inset-0 bg-white/5 backdrop-blur-md dark:bg-slate-900/5 border-b border-white/10 dark:border-slate-800/10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={300}
                    offset={-64}
                    className="cursor-pointer"
                    onSetActive={handleSetActive}
                  >
                    <motion.div
                      className="flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <CodeBracketIcon className="w-8 h-8 mr-2 text-cyan-400" />
                      <span className="text-xl font-bold text-gray-200">
                        Louise
                      </span>
                    </motion.div>
                  </Link>
                </div>

                <div className="hidden sm:ml-8 sm:flex sm:items-center sm:space-x-4">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        spy={true}
                        smooth={true}
                        duration={300}
                        offset={-64}
                        onSetActive={handleSetActive}
                        className={`px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer
                          ${activeSection === item.href
                            ? 'text-cyan-400'
                            : 'text-gray-200 hover:text-cyan-400'
                          }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="flex items-center pl-4 border-l border-white/10 dark:border-slate-800/10">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={toggleDarkMode}
                      className="rounded-md p-2 text-gray-200 hover:text-cyan-400 transition-colors"
                      aria-label="Toggle dark mode"
                    >
                      {darkMode ? (
                        <SunIcon className="h-5 w-5" />
                      ) : (
                        <MoonIcon className="h-5 w-5" />
                      )}
                    </motion.button>
                  </div>
                </div>

                <div className="flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:text-cyan-400 transition-colors">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="relative px-4 pb-3 pt-2 bg-white/5 backdrop-blur-md dark:bg-slate-900/5 border-b border-white/10 dark:border-slate-800/10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  duration={300}
                  offset={-64}
                  onSetActive={handleSetActive}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors cursor-pointer
                    ${activeSection === item.href
                      ? 'text-cyan-400 bg-white/5 dark:bg-slate-800/30'
                      : 'text-gray-200 hover:text-cyan-400 hover:bg-white/5 dark:hover:bg-slate-800/30'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
