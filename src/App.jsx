import verticeLogo from './assets/vertice-logo.svg'
import leanLogo from './assets/leanplanner360-logo.svg'
import './App.css'

const navLinks = [
  { label: 'Visão Geral', href: '#visao-geral' },
  { label: 'Ecossistema', href: '#ecossistema' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Mercados', href: '#mercados' },
  { label: 'Consultoria', href: '#consultoria' },
  { label: 'Contato', href: '#contato' }
]

const heroStats = [
  { value: '18', label: 'sites operando Lean Planner 360' },
  { value: '35%', label: 'redução média de horas improdutivas' },
  { value: '15 dias', label: 'para colocar o método em operação' }
]

const features = [
  {
    icon: '🛰️',
    title: 'Visibilidade contínua',
    description: 'Sincronize Primavera P6, lookahead e execução diária num só painel com alertas inteligentes.'
  },
  {
    icon: '⚡',
    title: 'Execução diária',
    description: 'Checklists móveis, voz-para-texto e status claro das frentes para decisões em ritmo ágil.'
  },
  {
    icon: '📊',
    title: 'Indicadores acionáveis',
    description: 'Dashboards OTP, PPC e riscos em tempo real conectados às rotinas de gestão.'
  }
]

const platformChecklist = [
  'Planejamento lookahead com versionamento automático',
  'Checklists mobile e registro de impedimentos com fotos',
  'Sprints semanais com reuniões guiadas e follow-up automático',
  'KPIs e reports conectados ao Primavera P6 e ERPs',
  'Segurança enterprise e governança multi-site'
]

const ecosystemItems = [
  {
    title: 'Planejamento e Controle',
    text: 'Cronogramas executivos, curvas S, restrições, lookahead, gestão de avanço e apoio à decisão.'
  },
  {
    title: 'Integração Digital',
    text: 'Conexão entre rotina de obra, gestão visual e sistemas corporativos para reduzir retrabalho.'
  },
  {
    title: 'Execução no Campo',
    text: 'Ritmos curtos, organização de frentes e visibilidade de gargalos entre equipes multidisciplinares.'
  },
  {
    title: 'Gestão Ágil de Produção',
    text: 'Sprints semanais, alinhamentos diários e ciclos curtos para aumentar previsibilidade e velocidade.'
  }
]

const differentials = [
  {
    title: 'Visão integrada',
    text: 'Visão integrada entre consultoria, planejamento e software.'
  },
  {
    title: 'Projetos complexos',
    text: 'Foco em projetos industriais de alta complexidade.'
  },
  {
    title: 'Lean no canteiro',
    text: 'Estrutura Lean aplicada ao canteiro e à gestão.'
  },
  {
    title: 'Gestão ágil',
    text: 'Rotinas de gestão ágil com sprints semanais e alinhamentos diários.'
  },
  {
    title: 'Digitalização de rotinas',
    text: 'Digitalização de rotinas com dados, KPIs e rastreabilidade.'
  },
  {
    title: 'Implantação orientada a resultado',
    text: 'Implantação orientada a resultado, não apenas teoria.'
  },
  {
    title: 'Base escalável',
    text: 'Base para crescimento escalável de equipes e contratos.'
  }
]
const markets = ['Mining', 'Energy', 'Oil & Gas', 'Pulp & Paper', 'Steel', 'Industrial EPC']

const consultingPillars = [
  {
    title: 'Consultoria Lean',
    text: 'Diagnóstico, coaching de líderes e implantação das rotinas Last Planner® adaptadas ao site.'
  },
  {
    title: 'Planejamento Industrial',
    text: 'Integração engenharia–campo, gestão de cronogramas complexos e PMO data-driven.'
  },
  {
    title: 'Software + Método',
    text: 'Lean Planner 360 com squads dedicados para garantir cadência, analytics e escala.'
  }
]

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="brand-left">
          <img src={leanLogo} alt="Lean Planner 360" className="brand-logo small" />
          <div>
            <p className="brand-title">Lean Planner 360</p>
            <p className="brand-subtitle">Industrial Planning Platform</p>
          </div>
        </div>

        <nav className="nav" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="brand-right">
          <img src={verticeLogo} alt="Vértice Consulting" className="brand-logo vertice-mini" />
        </div>
      </header>

      <main>
        <section className="hero" id="visao-geral">
          <div className="hero-content">
            <span className="hero-badge">Lean Construction + Agile Execution</span>
            <h1>
              Planejamento Lean e execução ágil
              <br />
              para projetos industriais de alta complexidade.
            </h1>
            <p>
              Lean Planner 360 conecta planejamento mestre, lookahead, execução diária e indicadores em tempo real para
              garantir ritmo, previsibilidade e alinhamento entre engenharia, campo e gestão executiva.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contato">
                Ver demonstração
              </a>
              <a className="btn btn-secondary" href="#contato">
                Solicitar acesso
              </a>
            </div>
            <div className="hero-stats">
              {heroStats.map((item) => (
                <article key={item.label}>
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ecosystem-section" id="ecossistema">
          <div className="section-header">
            <p className="kicker">Ecossistema</p>
            <h2>Vértice + Lean Planner 360</h2>
            <p className="lede">Industrial Tech para unir estratégia, planejamento e execução com um único fluxo digital.</p>
          </div>
          <div className="ecosystem-grid">
            {ecosystemItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="differentials">
            <p className="kicker">Diferenciais</p>
            <h3>Por que a Vértice Consulting</h3>
            <div className="differentials-grid">
              {differentials.map((item) => (
                <article key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cards-section" id="funcionalidades">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </section>

        <section className="platform-section">
          <div className="platform-box">
            <div className="platform-left">
              <img src={leanLogo} alt="Lean Planner 360" className="platform-logo" />
              <h2>Lean Planner 360</h2>
              <p className="platform-subtitle">Lean Construction & Agile Execution</p>
              <p className="platform-text">
                Plataforma digital para planejamento Lean, backlog semanal, execução diária, indicadores OTP e integração
                com Primavera P6.
              </p>
              <ul className="platform-list">
                {platformChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="platform-right" aria-label="Acesso ao sistema">
              <div className="login-card">
                <p className="login-title">Área exclusiva</p>
                <p className="login-subtitle">Solicite acesso ou entre com seu usuário.</p>
                <label htmlFor="login-user">Usuário ou e-mail</label>
                <input id="login-user" type="text" placeholder="danillomarinho" />
                <label htmlFor="login-pass">Senha</label>
                <input id="login-pass" type="password" placeholder="••••••" />
                <button className="login-button">Entrar</button>
              </div>
            </div>
          </div>
        </section>

        <section className="markets-section" id="mercados">
          <h2>Visibilidade de ponta a ponta em projetos industriais complexos.</h2>
          <div className="markets-grid">
            {markets.map((market) => (
              <span key={market} className="market-item">
                {market}
              </span>
            ))}
          </div>
        </section>

        <section className="consulting-section" id="consultoria">
          <div className="consulting-card">
            <div className="consulting-brand">
              <img src={verticeLogo} alt="Vértice Consulting" className="consulting-logo" />
              <div>
                <h2>Vértice Consulting</h2>
                <p>Consultoria estratégica aliada à plataforma Lean Planner 360 para entregar resultados mensuráveis.</p>
              </div>
            </div>
            <div className="consulting-columns">
              {consultingPillars.map((pillar) => (
                <article key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contato">
        <div>© {new Date().getFullYear()} Vértice Consulting • Lean Planner 360</div>
        <div className="footer-links">
          <a href="mailto:contato@verticeconsulting.com.br">contato@verticeconsulting.com.br</a>
          <a href="https://www.verticeconsulting.com.br" target="_blank" rel="noreferrer">
            verticeconsulting.com.br
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App

