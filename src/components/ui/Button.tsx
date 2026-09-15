import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import './Button.css'

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  className?: string
}

interface ButtonAsButton extends ButtonBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button'
  href?: never
}

interface ButtonAsLink extends ButtonBaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'a'
  href: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  as = 'button',
  href,
  ...props
}: ButtonProps) {
  const baseClass = `btn btn-${variant} ${className}`.trim()
  
  if (as === 'a') {
    return (
      <a href={href} className={baseClass} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  )
}
