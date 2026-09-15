import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import './Vision.css'

export default function Vision() {
  return (
    <Section id="vision" className="vision">
      <Container>
        <div className="vision-content">
          <div className="vision-text">
            <h2 className="vision-title">
              Uma operaçººo automotiva é maior que uma venda.
            </h2>
            
            <p className="vision-description">
              Clientes, veículos, consignaçºµes, vendas, aprovaçºµes, pagamentos, 
              financeiro e contratos nå º o sä º o registros isolados. Să º o domíººnios 
              que precisam permanecer consistentes quando atravessam fronteiras.
            </p>
          </div>
          
          <div className="vision-cards">
            <div className="vision-card">
              <h3 className="vision-card-title">Domíººnio</h3>
              <p className="vision-card-text">
                Responsabilidade explíººcita. Cada contexto possui limites 
                e responsabilidades bem definidos.
              </p>
            </div>
            
            <div className="vision-card">
              <h3 className="vision-card-title">Transaçººo</h3>
              <p className="vision-card-text">
                Regras críººticas no backend. Operaçºµes de negç¥¡cio sä º o 
                tratadas como transaçºµes de domíººnio.
              </p>
            </div>
            
            <div className="vision-card">
              <h3 className="vision-card-title">Evidçººncia</h3>
              <p className="vision-card-text">
                Decisçºµes rastreáººveis. Toda operaçººo importante deixa 
                uma trilha auditáººvel.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
