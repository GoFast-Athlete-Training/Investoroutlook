import { motion } from 'framer-motion'

export default function PillarGrid({ pillars }) {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {pillars.map((p) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="rounded-xl bg-neutral-900/70 border border-neutral-800 p-6 hover:border-sky-500/60 transition"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 grid place-content-center rounded-full bg-sky-600/15 text-sky-400">
              {p.icon}
            </div>
            <div className="text-lg font-semibold">{p.title}</div>
          </div>
          <div className="text-slate-300 text-sm leading-6">{p.body}</div>
        </motion.div>
      ))}
    </div>
  )
}


