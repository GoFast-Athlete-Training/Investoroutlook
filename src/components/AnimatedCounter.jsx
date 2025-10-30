import { useEffect, useState } from 'react'

export default function AnimatedCounter({ to, duration = 1200, prefix = '', suffix = '' }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const start = performance.now()
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration)
      setValue(Math.floor(t * to))
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [to, duration])
  return <span>{prefix}{value.toLocaleString()}{suffix}</span>
}


