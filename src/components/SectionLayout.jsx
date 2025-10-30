import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function SectionLayout({ title, subtitle, children, prev, next, imageUrl }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl"
      >
        {imageUrl && (
          <div className="mb-6 overflow-hidden rounded-lg border border-slate-800">
            <img src={imageUrl} alt="section cover" className="w-full h-56 object-cover" />
          </div>
        )}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">{title}</h1>
          {subtitle && <p className="text-slate-300 text-lg">{subtitle}</p>}
        </div>

        <div className="mb-10">
          {children}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          {prev ? (
            <Link to={prev.href} className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 transition">
              ← {prev.label}
            </Link>
          ) : <span />}
          {next ? (
            <Link to={next.href} className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 transition">
              {next.label} →
            </Link>
          ) : <span />}
        </div>
      </motion.div>
    </div>
  )
}


