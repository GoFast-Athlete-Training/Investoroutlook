import { Link } from 'react-router-dom'

export default function CTAButton({ to, children, variant = 'primary' }) {
  const base = 'inline-block px-5 py-3 rounded-lg transition'
  const styles = variant === 'primary'
    ? 'bg-orange-500 hover:bg-orange-400 text-white'
    : 'bg-sky-600 hover:bg-sky-500 text-white'
  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  )
}


