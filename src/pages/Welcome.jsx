import { motion } from 'framer-motion'
import logo from '../assets/gofast-logo.jpg'

export default function Welcome() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0E1A36] via-[#1B2D5A] to-[#243B7B] flex flex-col items-center justify-center text-center gap-6 px-6">
      <motion.img
        src={logo}
        alt="GoFast"
        className="w-40 h-auto rounded"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      <motion.h1
        className="text-6xl font-bold text-white"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        GoFast
      </motion.h1>

      <motion.p
        className="text-xl text-blue-200 mt-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Connecting Runners. Building Community.
      </motion.p>

      <motion.p
        className="text-md text-blue-300 mt-2 italic"
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
        <button className="bg-[#FA3E3E] hover:bg-[#FF6A3D] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200">
          Enter the Experience
        </button>
        <button className="border border-[#FA3E3E] text-[#FA3E3E] px-6 py-3 rounded-xl font-semibold hover:bg-[#FA3E3E]/10 transition-all duration-200">
          Investor Overview
        </button>
      </motion.div>
    </section>
  )
}


