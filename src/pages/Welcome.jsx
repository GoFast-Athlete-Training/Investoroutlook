import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/gofast-logo.jpg'

export default function Welcome() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-400 to-sky-500 flex flex-col items-center justify-center text-center gap-6 px-6">
      <motion.img
        src={logo}
        alt="GoFast"
        className="w-40 h-auto rounded"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      <motion.p
        className="text-xl text-white mt-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Connecting Runners. Building Community.
      </motion.p>

      <motion.p
        className="text-md text-white mt-2 italic"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        The social platform for real-world athletes.
      </motion.p>

      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <a
          href="https://www.gofastcrushgoals.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-100 text-sky-600 px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200"
        >
          Enter the Experience
        </a>
        <Link
          to="/company-intro"
          className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200"
        >
          Our Pitch
        </Link>
      </motion.div>
    </section>
  )
}


