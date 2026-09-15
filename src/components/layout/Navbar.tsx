import { useState } from 'react'
import Container from '../ui/Container'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar" role="banner">
      <Container>
        <nav className="navbar-nav" aria-label="Navegaçººo principal">
          <a href="/" className="navbar-brand">
            <span className="navbar-logo">MERAXES</span>
            <span className="navbar-descriptor">Plataforma de Geståº£o Automotiva</span>
          </a>
          
          <div className="navbar-links">
            <a href="#architecture" className="navbar-link">Arquitetura</a>
            <a href="#documentation" className="navbar-link">Documentaçººo</a>
            <a 
              href="https://github.com/DevitaMaster/loja-de-automoveis-base-netlify-supabase" 
              className="navbar-link navbar-link-external"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (abre em nova aba)"
            >
              GitHub ↗
            </a>
          </div>

          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Alternar menu"
          >
            <span className="navbar-toggle-icon" />
          </button>
        </nav>

        {menuOpen && (
          <div id="mobile-menu" className="navbar-mobile" role="menu">
            <a href="#architecture" className="navbar-mobile-link" role="menuitem">Arquitetura</a>
            <a href="#documentation" className="navbar-mobile-link" role="menuitem">Documentaçººo</a>
            <a 
              href="https://github.com/DevitaMaster/loja-de-automoveis-base-netlify-supabase" 
              className="navbar-mobile-link"
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
            >
              GitHub ↗
            </a>
          </div>
        )}
      </Container>
    </header>
  )
}
