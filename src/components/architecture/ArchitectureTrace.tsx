import './ArchitectureTrace.css'

export default function ArchitectureTrace() {
  const steps = [
    { label: 'Frontend', description: 'Interface e experiçººncia' },
    { label: 'Domain Service', description: 'Orquestraçººo de domíººnio' },
    { label: 'RPC / Backend', description: 'Regras críººticas' },
    { label: 'PostgreSQL', description: 'Estado persistente' },
    { label: 'Audit', description: 'Rastreabilidade' },
  ]

  return (
    <div className="architecture-trace" role="img" aria-label="Fluxo arquitetural do MERAXES">
      <div className="architecture-trace-title text-eyebrow">
        Architecture Trace
      </div>
      
      <div className="architecture-trace-flow">
        {steps.map((step, index) => (
          <div key={step.label} className="architecture-trace-step">
            <div className="architecture-trace-node">
              <span className="architecture-trace-label text-mono">{step.label}</span>
              <span className="architecture-trace-description text-small">{step.description}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="architecture-trace-arrow" aria-hidden="true">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="architecture-trace-line" aria-hidden="true" />
    </div>
  )
}
