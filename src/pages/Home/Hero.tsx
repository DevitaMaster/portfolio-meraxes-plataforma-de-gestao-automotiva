import Container from '../../components/ui/Container'
import Button from '../../components/ui/Button'
import ArchitectureTrace from '../../components/architecture/ArchitectureTrace'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container>
        <div className="hero-content">
          <div className="hero-text">
            <p className="text-eyebrow hero-eyebrow">
              Engineering Portfolio
            </p>
            
            <h1 id="hero-title" className="hero-title">
              MERAXES
            </h1>
            
            <h2 className="hero-descriptor">
              Plataforma de Geståº£o Automotiva
            </h2>
            
            <p className="hero-tagline">
              Da regra de negç¥¡cio à arquitetura.
            </p>
            
            <p className="hero-description">
              ERP Automotivo SaaS Multi-Tenant projetado com domíººnio, segurançººa, 
              auditoria e regras de negç¥¡cio como elementos arquiteturais.
            </p>
            
            <div className="hero-category text-mono">
              ERP AUTOMOTIVO · SAAS · MULTI-TENANT
            </div>
            
            <div className="hero-ctas">
              <Button variant="primary" as="a" href="#architecture">
                Explorar arquitetura →
              </Button>
              <Button 
                variant="secondary" 
                as="a" 
                href="https://github.com/DevitaMaster/loja-de-automoveis-base-netlify-supabase"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </Button>
            </div>
          </div>
          
          <div className="hero-visual">
            <ArchitectureTrace />
          </div>
        </div>
      </Container>
    </section>
  )
}
