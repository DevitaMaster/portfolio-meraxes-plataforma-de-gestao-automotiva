import Container from '../ui/Container'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <Container>
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">MERAXES</span>
            <p className="footer-descriptor">Plataforma de Geståº£o Automotiva</p>
            <p className="footer-tagline">Da regra de negç¥¡cio à arquitetura.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-heading">Produto</h4>
              <a href="#vision" className="footer-link">Visåº£o</a>
              <a href="#problem" className="footer-link">Problema</a>
              <a href="#domains" className="footer-link">Domíººnios</a>
              <a href="#roadmap" className="footer-link">Roadmap</a>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-heading">Arquitetura</h4>
              <a href="#architecture" className="footer-link">Arquitetura Tç¥¡cnica</a>
              <a href="#security" className="footer-link">Segurançººa</a>
              <a href="#domain-architecture" className="footer-link">Arquitetura de Domíººnios</a>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-heading">Engenharia</h4>
              <a href="#sales" className="footer-link">Vendas</a>
              <a href="#finance" className="footer-link">Financeiro</a>
              <a href="#audit" className="footer-link">Auditoria</a>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-heading">Governançººa</h4>
              <a href="#evidence" className="footer-link">Evidçººncias</a>
              <a href="#decisions" className="footer-link">Decisçºµes</a>
              <a href="#journal" className="footer-link">Engineering Journal</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            <span className="text-mono">MERAXES — Da regra de negç¥¡cio à arquitetura.</span>
          </p>
        </div>
      </Container>
    </footer>
  )
}
