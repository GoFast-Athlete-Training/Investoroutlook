import { Link } from 'react-router-dom'

export default function CTAButton({ to, children, variant = 'primary' }) {
  const base = 'inline-block px-5 py-3 rounded-lg transition'
  const styles = variant === 'primary'
    ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
    : 'bg-slate-800 hover:bg-slate-700 text-white'
  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  )
}


