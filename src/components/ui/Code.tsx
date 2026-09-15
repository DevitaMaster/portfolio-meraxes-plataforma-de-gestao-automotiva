import { ReactNode } from 'react'
import './Code.css'

interface CodeProps {
  children: ReactNode
  className?: string
  inline?: boolean
}

export default function Code({ children, className = '', inline = false }: CodeProps) {
  if (inline) {
    return <code className={`code code-inline ${className}`}>{children}</code>
  }
  
  return (
    <pre className={`code`}>
      <code>{children}</code>
    </pre>
  )
}
