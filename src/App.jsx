import verticeLogo from './assets/vertice-logo.svg'
import leanLogo from './assets/leanplanner360-logo.svg'
import './App.css'

const contactEmail = 'danillo@verticeconsulting.tec.br'
const contactPhone = '(18) 99812-3101'
const contactPhoneHref = 'tel:+5518998123101'
const contactWhatsAppHref = 'https://wa.me/5518998123101'
const siteUrl = 'https://www.verticeconsulting.tec.br'

const navLinks = [
  { label: 'Visão Geral', href: '#visao-geral' },
  { label: 'Ecossistema', href: '#ecossistema' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Telas', href: '#telas' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'Mercados', href: '#mercados' },
  { label: 'Consultoria', href: '#consultoria' },
  { label: 'Contato', href: '#contato' }
]

const features = [
  {
    icon: '🛰️',
    title: 'Visibilidade contínua',
    description: 'Conecte Primavera P6, cronograma nativo, lookahead e execução diária num só painel com alertas inteligentes.'
  },
  {
    icon: '⚡',
    title: 'Prontidão de execução',
    description: 'Checklists móveis, restrições, materiais e engenharia ligados ao plano para decidir com mais segurança antes da execução.'
  },
  {
    icon: '📊',
    title: 'Indicadores acionáveis',
    description: 'Dashboards OTP, PPC e riscos em tempo real conectados às rotinas de gestão.'
  }
]

const platformChecklist = [
  'Planejamento lookahead conectado ao cronograma importado ou nativo',
  'Checklists para checar impedimentos antes da execução',
  'Materiais e engenharia ligados diretamente à rotina de prontidão',
  'Rotinas semanais para alinhar planejamento, campo e gestão',
  'Indicadores para acompanhar avanço, riscos e restrições',
  'Base preparada para projetos, usuários, acessos por cliente e integrações corporativas'
]

const ecosystemItems = [
  {
    title: 'Planejamento e Controle',
    text: 'Cronogramas executivos, curvas S, restrições, lookahead, gestão de avanço e apoio à decisão com planejamento importado ou criado do zero.'
  },
  {
    title: 'Integração Digital',
    text: 'Conexão entre rotina de obra, gestão visual e sistemas corporativos, com possibilidade de integrações, SSO e conexão com outros bancos de dados.'
  },
  {
    title: 'Execução no Campo',
    text: 'Ritmos curtos, organização de frentes e visibilidade de gargalos entre equipes multidisciplinares com foco em prontidão antes da liberação do serviço.'
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

const plans = [
  {
    name: 'Trial',
    subtitle: 'Conheça a plataforma na prática.',
    summary:
      'Uma forma objetiva de validar o Lean Planner 360 em um ambiente controlado, com foco nos fluxos principais de planejamento, acompanhamento e prontidão de execução.',
    includes: [
      'Acesso inicial à plataforma',
      'Visão do planejamento e acompanhamento',
      'Registro de avanço, restrições e campo',
      'Uso orientado para avaliação da solução'
    ],
    idealFor: 'Demonstrações, prova de conceito e validação inicial com equipe reduzida.'
  },
  {
    name: 'Standard',
    subtitle: 'Controle operacional do dia a dia.',
    summary:
      'Plano voltado para empresas que precisam organizar o planejamento, acompanhar a execução e conectar escritório e campo com mais clareza e menos dispersão.',
    includes: [
      'Planejamento e acompanhamento das atividades',
      'RDO com fotos e histórico',
      'Controle de materiais e engenharia',
      'Dashboard operacional e experiência instalável'
    ],
    idealFor: 'Obras em operação, equipes de planejamento e produção e empresas que buscam sair do controle em planilhas.'
  },
  {
    name: 'Pro',
    subtitle: 'Gestão integrada com mais profundidade.',
    summary:
      'Plano pensado para operações que exigem mais visibilidade gerencial, maior capacidade de análise e integração entre planejamento, suprimentos, campo e liderança.',
    includes: [
      'Todos os recursos do Standard',
      'Dashboard executivo',
      'Curva S, recursos e visão financeira planejada',
      'Gantt nativo com vínculos e caminho crítico',
      'Uso mobile para avanço, restrições, fotos e acompanhamento'
    ],
    idealFor: 'Empresas com rotina intensa de planejamento, contratos com maior necessidade de controle e operações mais integradas.'
  },
  {
    name: 'Enterprise',
    subtitle: 'Implantação sob medida para operações mais complexas.',
    summary:
      'Estrutura indicada para empresas que precisam de aderência fina ao seu modelo de gestão, com personalização, implantação assistida e suporte consultivo.',
    includes: [
      'Todos os recursos do Pro',
      'Estrutura multiempresa',
      'Controle avançado de permissões',
      'Onboarding e implantação assistida',
      'Personalizações conforme a necessidade operacional',
      'Suporte prioritário'
    ],
    idealFor: 'Grupos empresariais, múltiplos contratos, unidades e clientes com necessidade de adaptação ao processo interno.'
  }
]

const howItWorks = [
  {
    title: 'Estruturar o planejamento',
    text: 'O fluxo pode começar com XER, XML, CSV ou SQLite do Primavera P6, mas também permite criar um planejamento nativo completo do zero, com WBS, atividades, vínculos, datas e linha de base.'
  },
  {
    title: 'Checar a prontidão',
    text: 'A rotina de prontidão conecta materiais, engenharia, recursos, procedimentos e equipamentos para verificar impedimentos antes que eles cheguem ao campo.'
  },
  {
    title: 'Conectar áreas e integrações',
    text: 'A plataforma organiza o fluxo entre planejamento, suprimentos, engenharia e campo, e pode evoluir com integrações corporativas, SSO e conexão com outras bases de dados.'
  },
  {
    title: 'Executar e acompanhar',
    text: 'O board organiza semanas, responsáveis e pacotes de trabalho, enquanto a execução registra observações, pendências, progresso e indicadores para apoiar decisões rápidas.'
  }
]

const screenShots = [
  {
    src: '/screens/dashboard.png',
    title: 'Dashboard executivo',
    text: 'Indicadores para acompanhar atividades, impedimentos e evolução do planejamento.'
  },
  {
    src: '/screens/board.png',
    title: 'Board de atividades',
    text: 'Visão por semana, WBS e responsáveis para orientar a preparação da execução.'
  },
  {
    src: '/screens/integracao.png',
    title: 'Integração Primavera P6',
    text: 'Importação de XER, XML, CSV, JSON e SQLite para manter o cronograma estruturado.'
  },
  {
    src: '/screens/checklist.png',
    title: 'Checklist de restrições',
    text: 'Verificação antecipada dos impedimentos que podem afetar a frente de trabalho.'
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
              Lean Planner 360 conecta planejamento mestre, lookahead, execução diária e indicadores para apoiar a
              checagem antecipada de impedimentos, aumentar previsibilidade e alinhar engenharia, campo e gestão executiva.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contato">
                Ver demonstração
              </a>
              <a className="btn btn-secondary" href="#contato">
                Solicitar acesso
              </a>
            </div>
            <div className="hero-notes">
              <article>
                <strong>Preparar antes de executar</strong>
                <p>Foco em reduzir improvisos, antecipar restrições e proteger a rotina de produção.</p>
              </article>
              <article>
                <strong>Consultoria + plataforma</strong>
                <p>Método Lean, gestão ágil e tecnologia trabalhando no mesmo fluxo operacional.</p>
              </article>
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

        <section className="how-section" id="como-funciona">
          <div className="section-header">
            <p className="kicker">Como funciona</p>
            <h2>Da programação Primavera à execução preparada.</h2>
            <p className="lede">
              O Lean Planner 360 organiza o cronograma em uma rotina prática para identificar restrições antes que elas cheguem ao campo.
            </p>
          </div>
          <div className="how-grid">
            {howItWorks.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="screens-section" id="telas">
          <div className="section-header">
            <p className="kicker">Telas reais</p>
            <h2>Rotina visual para planejar, verificar e acompanhar.</h2>
            <p className="lede">
              Interfaces usadas para demonstrar o fluxo de planejamento, integração e checklist.
            </p>
          </div>
          <div className="screens-grid">
            {screenShots.map((screen) => (
              <article key={screen.title} className="screen-card">
                <img src={screen.src} alt={screen.title} />
                <div>
                  <h3>{screen.title}</h3>
                  <p>{screen.text}</p>
                </div>
              </article>
            ))}
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
              <div className="access-card">
                <p className="access-title">Acesso ao Lean Planner 360</p>
                <p className="access-subtitle">
                  Ambientes de teste e implantação são liberados por projeto, com usuários vinculados ao cliente responsável.
                </p>
                <a className="login-button" href="#contato">Solicitar demonstração</a>
                <a className="access-link" href="https://www.leanplanner360.com.br" target="_blank" rel="noreferrer">
                  Acessar plataforma
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="plans-section" id="planos">
          <div className="section-header">
            <p className="kicker">Planos</p>
            <h2>Uma estrutura comercial para cada estágio da operação.</h2>
            <p className="lede">
              O Lean Planner 360 pode começar com uma validação prática e evoluir até uma implantação mais ampla,
              conectando planejamento, campo, prontidão e gestão executiva em uma única plataforma.
            </p>
          </div>
          <div className="plans-grid">
            {plans.map((plan) => (
              <article key={plan.name} className="plan-card">
                <div className="plan-head">
                  <p className="plan-name">{plan.name}</p>
                  <h3>{plan.subtitle}</h3>
                </div>
                <p className="plan-summary">{plan.summary}</p>
                <div className="plan-block">
                  <p className="plan-label">Inclui</p>
                  <ul className="plan-list">
                    {plan.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="plan-block">
                  <p className="plan-label">Ideal para</p>
                  <p className="plan-ideal">{plan.idealFor}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="plans-cta">
            <div>
              <p className="kicker">Implantação comercial</p>
              <h3>Escolha o modelo mais adequado para o momento da sua empresa.</h3>
              <p>
                A Vértice Consulting pode apoiar desde a demonstração inicial até implantações mais completas, com
                personalização, treinamento e evolução contínua conforme a necessidade da operação.
              </p>
            </div>
            <div className="plans-actions">
              <a className="btn btn-primary" href="#contato">
                Solicitar demonstração
              </a>
              <a className="btn btn-secondary" href="#contato">
                Falar com a Vértice
              </a>
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
                <p>Consultoria estratégica aliada à plataforma Lean Planner 360 para estruturar rotinas, indicadores e decisões de campo.</p>
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

      <section className="contact-section" id="contato">
        <div>
          <p className="kicker">Contato</p>
          <h2>Fale com a Vértice Consulting</h2>
          <p>
            Agende uma conversa para estruturar o planejamento Lean, a rotina de execução e a implantação do Lean Planner 360.
          </p>
        </div>
        <div className="contact-actions" aria-label="Contatos oficiais">
          <a className="contact-link primary" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <a className="contact-link" href={contactPhoneHref}>
            {contactPhone}
          </a>
          <a className="contact-link" href={contactWhatsAppHref} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="contact-link" href={siteUrl} target="_blank" rel="noreferrer">
            verticeconsulting.tec.br
          </a>
        </div>
      </section>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Vértice Consulting • Lean Planner 360</div>
        <div className="footer-links">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={contactPhoneHref}>{contactPhone}</a>
          <a href={siteUrl} target="_blank" rel="noreferrer">
            verticeconsulting.tec.br
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App

