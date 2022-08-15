import * as React from 'react'
import { Link } from 'gatsby'

interface AProps {
  href: string
  external?: boolean
  className?: string
  children: React.ReactNode
}

const A = ({ href, external = false, className, children }: AProps) => {
  if (external) {
    return (
      <a
        href={href}
        className={`text-slate-200 dark:text-slate-200 hover:text-fuchsia-600 ${className}`}
        rel="noopener noreferrer"
        target="_blank"
        area-label="Social Link"
      >
        {children}
      </a>
    )
  } else {
    return (
      <Link to={href} className={`text-slate-200 dark:text-slate-200 hover:text-fuchsia-600 ${className}`} activeClassName="active">
        {children}
      </Link>
    )
  }
}
export default A
