import { useEffect, useMemo, useState } from 'react'
import verticeLogo from './assets/vertice-logo.svg'
import leanLogo from './assets/leanplanner360-logo.svg'
import './App.css'

const contactEmail = 'danillo@verticeconsulting.tec.br'
const contactPhone = '(18) 99812-3101'
const contactPhoneHref = 'tel:+5518998123101'
const contactWhatsAppHref = 'https://wa.me/5518998123101'
const siteUrl = 'https://www.verticeconsulting.tec.br'
const localCheckoutApiBase = 'http://127.0.0.1:3001/api'
const productionCheckoutApiBase = 'https://lean-planner-360-api-production.up.railway.app/api'
const rawCheckoutApiBase = import.meta.env.VITE_LEAN_API_URL?.trim()
const checkoutApiBase = rawCheckoutApiBase
  || (typeof window !== 'undefined' && ['localhost', '127.0.0.1'].includes(window.location.hostname)
    ? localCheckoutApiBase
    : productionCheckoutApiBase)

const navLinks = [
  { label: 'Visão Geral', href: '#visao-geral' },
  { label: 'Ecossistema', href: '#ecossistema' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Implantação', href: '#implantacao' },
  { label: 'Telas', href: '#telas' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'Treinamento', href: '#treinamento' },
  { label: 'Mercados', href: '#mercados' },
  { label: 'Consultoria', href: '#consultoria' },
  { label: 'Contato', href: '#contato' }
]

const features = [
  {
    icon: '🛰️',
    title: 'Antecipação de gargalos',
    description: 'Transforme o cronograma em leitura prática para antecipar restrições, proteger frentes e reduzir improvisos antes do impacto na produção.'
  },
  {
    icon: '⚡',
    title: 'Kanban automático de prontidão',
    description: 'Checklists, restrições, materiais, engenharia e pendências conectados ao plano para mostrar o que está pronto, bloqueado ou em risco.'
  },
  {
    icon: '📊',
    title: 'Consolidação com o planejador',
    description: 'O campo atualiza no Lean Planner 360 e o planejador revisa, aceita e exporta atualizações para o cronograma oficial em Primavera ou Project.'
  }
]

const platformChecklist = [
  'Planejamento lookahead conectado ao cronograma importado ou criado de forma nativa',
  'Kanban automático de prontidão com checklists e leitura de gargalos',
  'Materiais e engenharia ligados diretamente à rotina de prontidão',
  'RDO, avanço, restrições e fotos conectados à execução diária',
  'Exportação controlada de atualizações para consolidação do planejador',
  'Base preparada para projetos, usuários, acessos por cliente e integrações corporativas'
]

const ecosystemItems = [
  {
    title: 'Planejamento e Controle',
    text: 'Cronogramas executivos, curvas S, restrições, lookahead, gestão de avanço e apoio à decisão com planejamento importado ou criado do zero.'
  },
  {
    title: 'Integração Digital',
    text: 'Conexão entre rotina de obra, gestão visual e sistemas corporativos, com possibilidade de integrações, SSO, Primavera SQLite e conexão com outras bases de dados.'
  },
  {
    title: 'Execução no Campo',
    text: 'Ritmos curtos, organização de frentes e visibilidade de gargalos entre equipes multidisciplinares com foco em prontidão antes da liberação do serviço.'
  },
  {
    title: 'Gestão Ágil de Produção',
    text: 'Sprints semanais, alinhamentos diários e ciclos curtos para aumentar previsibilidade, cadência e velocidade de resposta.'
  }
]

const differentials = [
  {
    title: 'Visão integrada',
    text: 'Consultoria, planejamento e software trabalhando na mesma lógica operacional.'
  },
  {
    title: 'Projetos complexos',
    text: 'Foco em contratos industriais com alto volume de interfaces e restrições.'
  },
  {
    title: 'Lean no canteiro',
    text: 'Estrutura Lean aplicada ao canteiro, à rotina semanal e à tomada de decisão.'
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
    text: 'Implantação orientada a resultado, e não apenas à adoção de ferramenta.'
  },
  {
    title: 'Base escalável',
    text: 'Base preparada para crescimento de usuários, contratos e operações.'
  }
]
const markets = ['Mining', 'Energy', 'Oil & Gas', 'Pulp & Paper', 'Steel', 'Industrial EPC']

const consultingPillars = [
  {
    title: 'Consultoria Lean',
    text: 'Diagnóstico, coaching de líderes e implantação das rotinas Last Planner® adaptadas à realidade de cada operação.'
  },
  {
    title: 'Planejamento Industrial',
    text: 'Integração entre engenharia, suprimentos e campo, com gestão de cronogramas complexos e PMO orientado por dados.'
  },
  {
    title: 'Software + Método',
    text: 'Lean Planner 360 combinado a método, implantação e evolução contínua para garantir cadência, análise e escala.'
  }
]

const plans = [
  {
    code: 'PLANNER_PRO',
    name: 'Planner Pro',
    subtitle: 'O núcleo completo para o planejador operar de verdade.',
    billing: 'Assinatura mensal individual ou anual com desconto',
    monthlyPrice: 'R$ 119,90/mês',
    yearlyPrice: 'R$ 1.294,92/ano',
    yearlyNote: '10% de desconto no pagamento anual',
    summary:
      'Plano pensado para o planejador que precisa trabalhar com dashboard, campo, prontidão, revisão de avanço e consolidação do cronograma sem depender de planilhas paralelas.',
    includes: [
      'Planejamento e acompanhamento das atividades',
      'Gantt nativo e criação de cronograma do zero',
      'RDO, dashboard, mobile completo e restrições',
      'Recursos, curva S e visão financeira planejada',
      'Exportação de atualizações em CSV e XML',
      'Treinamento inicial liberado durante a assinatura'
    ],
    idealFor: 'Planejadores, PMOs enxutos e contratos que já exigem análise diária da execução.'
  },
  {
    code: 'STANDARD_EMPRESA',
    name: 'Standard Empresa',
    subtitle: 'Integração operacional entre planejamento, materiais e engenharia.',
    billing: 'Assinatura mensal por empresa ou contrato',
    monthlyPrice: 'R$ 1.490/mês',
    yearlyPrice: 'R$ 16.092/ano',
    yearlyNote: '10% de desconto no pagamento anual',
    summary:
      'Plano para empresas que querem unificar planejamento, suprimentos, engenharia e campo em um mesmo ambiente operacional, reduzindo retrabalho e perda de informação.',
    includes: [
      'Todos os recursos do Planner Pro',
      'Módulos de materiais e engenharia',
      'Operação multiusuário por projeto e empresa',
      'Controle por perfis e áreas de atuação',
      'Treinamento contínuo liberado durante a assinatura'
    ],
    idealFor: 'Empresas que já querem sair do modelo disperso em planilhas e operar com mais integração entre áreas.'
  },
  {
    code: 'PRO_EMPRESA',
    name: 'Pro Empresa',
    subtitle: 'Camada executiva e operação estruturada.',
    billing: 'Assinatura mensal corporativa ou anual com implantação planejada',
    monthlyPrice: 'R$ 2.490/mês',
    yearlyPrice: 'R$ 26.892/ano',
    yearlyNote: '10% de desconto no pagamento anual',
    summary:
      'Plano voltado para empresas que precisam, além da operação, consolidar governança, visibilidade executiva e disciplina de acompanhamento em múltiplos contratos ou frentes.',
    includes: [
      'Todos os recursos do Standard Empresa',
      'Dashboard executivo e leitura gerencial',
      'Operação estruturada com mais rastreabilidade',
      'Auditoria e histórico de eventos',
      'Apoio para expansão da rotina de uso'
    ],
    idealFor: 'Empresas em crescimento, contratos mais críticos e operações que precisam de leitura executiva recorrente.'
  },
  {
    code: 'ENTERPRISE',
    name: 'Enterprise',
    subtitle: 'Implantação sob medida para operações mais complexas.',
    billing: 'Licenciamento e serviços sob proposta comercial',
    monthlyPrice: 'Sob proposta',
    yearlyPrice: 'Sob proposta',
    yearlyNote: 'Escopo técnico, implantação e integrações definidos por projeto',
    summary:
      'Estrutura indicada para empresas que precisam de aderência fina ao seu modelo de gestão, com personalização, implantação assistida e integrações profundas com o ecossistema corporativo.',
    includes: [
      'Todos os recursos do Pro Empresa',
      'Estrutura multiempresa',
      'Controle avançado de permissões',
      'Onboarding e implantação assistida',
      'Personalizações conforme a necessidade operacional',
      'Suporte prioritário',
      'Escopo para integrações profundas sob orçamento'
    ],
    idealFor: 'Grupos empresariais, múltiplos contratos, unidades e clientes com necessidade de adaptação ao processo interno.'
  }
]

const defaultLeadForm = {
  companyName: '',
  fullName: '',
  email: '',
  cpfCnpj: '',
  postalCode: '',
  address: '',
  addressNumber: '',
  province: '',
  whatsapp: '',
  username: '',
  password: '',
  confirmPassword: '',
}

const commercialNotes = [
  {
    title: 'Cobrança recorrente',
    text: 'Os planos podem ser contratados em assinatura mensal ou anual. No ciclo anual, aplicamos 10% de desconto com cobrança à vista e implantação programada.'
  },
  {
    title: 'Formas de pagamento',
    text: 'Cobrança mensal recorrente no cartão e opção anual à vista por PIX ou cartão, conforme a modalidade comercial definida no checkout.'
  },
  {
    title: 'Treinamento liberado',
    text: 'O treinamento de uso da plataforma, incluindo vídeos por tela e orientações operacionais, fica liberado enquanto a assinatura estiver ativa.'
  },
  {
    title: 'Integrações sob orçamento',
    text: 'Integrações com SAP, TOTVS, LMS, SSO e outras bases corporativas entram como projeto específico, com escopo técnico, cronograma e valor definidos em proposta.'
  }
]

const trainingTracks = [
  {
    title: 'Onboarding inicial',
    text: 'Primeiros acessos, estrutura da empresa, cadastro de usuários, leitura dos módulos e orientação prática de implantação.'
  },
  {
    title: 'Treinamento por tela',
    text: 'Vídeos curtos e objetivos mostrando planejamento, dashboard, campo mobile, RDO, materiais, engenharia e rotina do planejador.'
  },
  {
    title: 'Biblioteca viva',
    text: 'A trilha evolui continuamente. Novos vídeos, respostas recorrentes e boas práticas são adicionados conforme a base de clientes cresce.'
  },
  {
    title: 'Apoio assistido',
    text: 'Enquanto a assinatura estiver ativa, o cliente mantém acesso ao conteúdo e pode combinar suporte de implantação conforme o plano contratado.'
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
    title: 'Atualizar no campo e revisar no planejamento',
    text: 'Supervisores e responsáveis atualizam avanço, restrições, RDO e evidências na plataforma. O planejador revisa essas mudanças, decide o que aceita e consolida o cronograma oficial.'
  },
  {
    title: 'Executar, exportar e integrar',
    text: 'A empresa pode operar em modo stand alone com exportação para Primavera ou Project, conectar diretamente ao banco SQLite do Primavera ou contratar integrações mais profundas com outros sistemas.'
  }
]

const deploymentModels = [
  {
    title: 'Stand alone com exportação',
    text: 'A operação atualiza avanço, restrições, RDO, materiais e engenharia no Lean Planner 360. O planejador revisa e exporta as atualizações aceitas para consolidação no Primavera ou no MS Project.',
    tag: 'Assinatura mensal'
  },
  {
    title: 'Conexão direta com Primavera SQLite',
    text: 'Para clientes com ambiente mais estruturado, o Lean Planner 360 pode trabalhar conectado ao banco SQLite do Primavera, mantendo leitura operacional e sincronização mais próxima do cronograma.',
    tag: 'Assinatura + implantação'
  },
  {
    title: 'Integração enterprise sob orçamento',
    text: 'Quando o cliente precisa conectar SAP, TOTVS, LMS, SSO ou outras bases corporativas, a integração entra como projeto dedicado, com escopo, cronograma e proposta comercial específicos.',
    tag: 'Projeto sob consulta'
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
  const checkoutEligiblePlans = useMemo(() => plans.filter((plan) => plan.code !== 'ENTERPRISE'), [])
  const [selectedPlanCode, setSelectedPlanCode] = useState(checkoutEligiblePlans[0]?.code ?? 'PLANNER_PRO')
  const [billingCycle, setBillingCycle] = useState('MONTHLY')
  const [paymentMethod, setPaymentMethod] = useState('CREDIT_CARD')
  const [leadForm, setLeadForm] = useState(defaultLeadForm)
  const [checkoutState, setCheckoutState] = useState({ status: 'idle', message: '', checkoutUrl: '' })

  const selectedPlan = useMemo(
    () => plans.find((plan) => plan.code === selectedPlanCode) ?? plans[0],
    [selectedPlanCode],
  )

  const openCheckout = (planCode, cycle = 'MONTHLY') => {
    setSelectedPlanCode(planCode)
    setBillingCycle(cycle)
    setPaymentMethod(cycle === 'YEARLY' ? 'PIX' : 'CREDIT_CARD')
    setCheckoutState({ status: 'idle', message: '', checkoutUrl: '' })
    const checkoutSection = document.getElementById('assinatura')
    if (checkoutSection) checkoutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    if (billingCycle === 'MONTHLY' && paymentMethod === 'PIX') {
      setPaymentMethod('CREDIT_CARD')
    }
  }, [billingCycle, paymentMethod])

  const handleLeadFieldChange = (field, value) => {
    setLeadForm((current) => ({ ...current, [field]: value }))
  }

  const handleCheckoutSubmit = async (event) => {
    event.preventDefault()
    if (leadForm.password !== leadForm.confirmPassword) {
      setCheckoutState({
        status: 'error',
        message: 'A confirmação de senha não confere. Revise os campos e tente novamente.',
        checkoutUrl: '',
      })
      return
    }

    setCheckoutState({
      status: 'loading',
      message: 'Estamos preparando o checkout da assinatura. Aguarde um instante.',
      checkoutUrl: '',
    })

    try {
      const response = await fetch(`${checkoutApiBase}/billing/checkout`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          companyName: leadForm.companyName,
          fullName: leadForm.fullName,
          email: leadForm.email,
          cpfCnpj: leadForm.cpfCnpj,
          postalCode: leadForm.postalCode,
          address: leadForm.address,
          addressNumber: leadForm.addressNumber,
          province: leadForm.province,
          whatsapp: leadForm.whatsapp,
          username: leadForm.username,
          password: leadForm.password,
          plan: selectedPlanCode,
          billingCycle,
          paymentMethod,
        }),
      })
      const payload = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(payload?.error || 'Não foi possível iniciar a assinatura agora.')
      }

      setCheckoutState({
        status: 'success',
        message: payload?.message || 'Cadastro criado com sucesso. Agora você pode seguir para o pagamento.',
        checkoutUrl: payload?.checkoutUrl || '',
      })

      if (payload?.checkoutUrl) {
        window.location.assign(payload.checkoutUrl)
      }
    } catch (error) {
      setCheckoutState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Ocorreu um erro ao iniciar a assinatura.',
        checkoutUrl: '',
      })
    }
  }

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
              Lean Planner 360 conecta planejamento mestre, prontidão, execução diária e indicadores para antecipar
              impedimentos, aumentar previsibilidade e alinhar engenharia, suprimentos, campo e gestão executiva.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" type="button" onClick={() => openCheckout('PLANNER_PRO', 'MONTHLY')}>
                Começar assinatura
              </button>
              <button className="btn btn-secondary" type="button" onClick={() => openCheckout('PLANNER_PRO', 'YEARLY')}>
                Ver opção anual
              </button>
            </div>
            <div className="hero-notes">
              <article>
                <strong>Preparar antes de executar</strong>
                <p>Foco em antecipar gargalos, reduzir improvisos e proteger a rotina de produção antes do impacto no prazo.</p>
              </article>
              <article>
                <strong>Consultoria + plataforma</strong>
                <p>Método Lean, gestão ágil e tecnologia trabalhando no mesmo fluxo operacional, do campo à consolidação do planejador.</p>
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
              O Lean Planner 360 transforma o cronograma em uma rotina prática de prontidão, integração entre áreas e acompanhamento da execução.
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

        <section className="deployment-section" id="implantacao">
          <div className="section-header">
            <p className="kicker">Implantação</p>
            <h2>Três formas de adotar o Lean Planner 360.</h2>
            <p className="lede">
              A plataforma pode começar de forma autônoma, evoluir para conexão direta com Primavera e, quando necessário,
              avançar para integrações corporativas mais profundas.
            </p>
          </div>
          <div className="deployment-grid">
            {deploymentModels.map((item) => (
              <article key={item.title} className="deployment-card">
                <p className="deployment-tag">{item.tag}</p>
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
                Plataforma digital para planejamento Lean, backlog semanal, execução diária, indicadores OTP,
                prontidão, exportação controlada de atualizações e integração com Primavera P6.
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
                  Ambientes de teste e implantação são liberados por projeto e por plano, com usuários vinculados ao cliente responsável, trilha de treinamento liberada para assinantes e opção de operação stand alone, conectada ou integrada.
              </p>
                <button className="login-button" type="button" onClick={() => openCheckout('PLANNER_PRO', 'MONTHLY')}>Iniciar contratação</button>
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
              O Lean Planner 360 pode começar com o planejador individual já em operação completa e evoluir até uma implantação corporativa,
              conectando planejamento, campo, prontidão, materiais, engenharia e gestão executiva em uma única plataforma.
            </p>
          </div>
          <div className="plans-grid">
            {plans.map((plan) => (
              <article key={plan.name} className="plan-card">
                <div className="plan-head">
                  <p className="plan-name">{plan.name}</p>
                  <h3>{plan.subtitle}</h3>
                </div>
                <div className="plan-billing">{plan.billing}</div>
                <div className="plan-pricing">
                  <div className="plan-price-primary">{plan.monthlyPrice}</div>
                  <div className="plan-price-secondary">{plan.yearlyPrice}</div>
                  <div className="plan-price-note">{plan.yearlyNote}</div>
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
                <div className="plan-actions">
                  {plan.code === 'ENTERPRISE' ? (
                    <>
                      <a className="btn btn-primary" href="#contato">
                        Solicitar proposta
                      </a>
                      <a className="btn btn-secondary" href={contactWhatsAppHref} target="_blank" rel="noreferrer">
                        Falar sobre integração
                      </a>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-primary" type="button" onClick={() => openCheckout(plan.code, 'MONTHLY')}>
                        Assinar mensal
                      </button>
                      <button className="btn btn-secondary" type="button" onClick={() => openCheckout(plan.code, 'YEARLY')}>
                        Assinar anual
                      </button>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="plans-notes">
            {commercialNotes.map((item) => (
              <article key={item.title} className="plans-note-card">
                <p className="plan-label">{item.title}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="plans-cta">
            <div>
              <p className="kicker">Implantação comercial</p>
              <h3>Escolha o modelo mais adequado para o momento da sua empresa.</h3>
              <p>
                A Vértice Consulting pode apoiar desde a demonstração inicial até implantações mais completas, com
                personalização, treinamento, exportação para cronogramas oficiais e integrações corporativas sob orçamento.
              </p>
              <p className="plans-footnote">
                Os valores de assinatura podem ser apresentados em formato mensal, anual com desconto ou proposta sob medida, conforme o porte da operação e o nível de integração desejado.
              </p>
            </div>
            <div className="plans-actions">
              <button className="btn btn-primary" type="button" onClick={() => openCheckout('PLANNER_PRO', 'MONTHLY')}>
                Começar com Planner Pro
              </button>
              <button className="btn btn-secondary" type="button" onClick={() => openCheckout('STANDARD_EMPRESA', 'YEARLY')}>
                Ver Standard anual
              </button>
            </div>
          </div>
          <div className="checkout-panel" id="assinatura">
            <div className="checkout-copy">
              <p className="kicker">Assinatura</p>
              <h3>Comece a assinatura e siga para o pagamento.</h3>
              <p>
                Escolha o plano, preencha os dados do responsável e avance para o checkout. O acesso da organização é liberado
                após a confirmação do pagamento.
              </p>
              <div className="checkout-summary">
                <div>
                  <span>Plano selecionado</span>
                  <strong>{selectedPlan?.name}</strong>
                </div>
                <div>
                  <span>Ciclo</span>
                  <strong>{billingCycle === 'YEARLY' ? 'Anual com 10% de desconto' : 'Mensal recorrente'}</strong>
                </div>
                <div>
                  <span>Pagamento</span>
                  <strong>{paymentMethod === 'PIX' ? 'PIX à vista' : 'Cartão de crédito'}</strong>
                </div>
              </div>
              <p className="checkout-note">
                Se você já é cliente, use o mesmo e-mail e a mesma senha da conta atual para renovar ou fazer upgrade do plano. Para integrações profundas, SAP, TOTVS, LMS, SSO ou escopo enterprise, seguimos por proposta comercial e implantação dedicada.
              </p>
            </div>
            <form className="checkout-form" onSubmit={handleCheckoutSubmit}>
              <div className="checkout-form-grid">
                <label>
                  Plano
                  <select value={selectedPlanCode} onChange={(event) => setSelectedPlanCode(event.target.value)}>
                    {checkoutEligiblePlans.map((plan) => (
                      <option key={plan.code} value={plan.code}>
                        {plan.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Cobrança
                  <select value={billingCycle} onChange={(event) => setBillingCycle(event.target.value)}>
                    <option value="MONTHLY">Mensal</option>
                    <option value="YEARLY">Anual</option>
                  </select>
                </label>
                <label>
                  Pagamento
                  <select value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)}>
                    <option value="CREDIT_CARD">Cartão de crédito</option>
                    <option value="PIX" disabled={billingCycle !== 'YEARLY'}>PIX à vista (anual)</option>
                  </select>
                </label>
                <label>
                  Empresa
                  <input
                    type="text"
                    value={leadForm.companyName}
                    onChange={(event) => handleLeadFieldChange('companyName', event.target.value)}
                    placeholder="Nome da empresa ou contrato"
                    required
                  />
                </label>
                <label>
                  Responsável
                  <input
                    type="text"
                    value={leadForm.fullName}
                    onChange={(event) => handleLeadFieldChange('fullName', event.target.value)}
                    placeholder="Nome completo"
                    required
                  />
                </label>
                <label>
                  E-mail
                  <input
                    type="email"
                    value={leadForm.email}
                    onChange={(event) => handleLeadFieldChange('email', event.target.value)}
                    placeholder="voce@empresa.com"
                    required
                  />
                </label>
                <label>
                  CPF ou CNPJ
                  <input
                    type="text"
                    value={leadForm.cpfCnpj}
                    onChange={(event) => handleLeadFieldChange('cpfCnpj', event.target.value)}
                    placeholder="Somente para cobrança"
                    required
                  />
                </label>
                <label>
                  CEP
                  <input
                    type="text"
                    value={leadForm.postalCode}
                    onChange={(event) => handleLeadFieldChange('postalCode', event.target.value)}
                    placeholder="00000-000"
                    required
                  />
                </label>
                <label className="checkout-form-span">
                  Endereço
                  <input
                    type="text"
                    value={leadForm.address}
                    onChange={(event) => handleLeadFieldChange('address', event.target.value)}
                    placeholder="Rua, avenida ou alameda"
                    required
                  />
                </label>
                <label>
                  Número
                  <input
                    type="text"
                    value={leadForm.addressNumber}
                    onChange={(event) => handleLeadFieldChange('addressNumber', event.target.value)}
                    placeholder="Número"
                    required
                  />
                </label>
                <label>
                  Bairro
                  <input
                    type="text"
                    value={leadForm.province}
                    onChange={(event) => handleLeadFieldChange('province', event.target.value)}
                    placeholder="Bairro"
                    required
                  />
                </label>
                <label>
                  WhatsApp
                  <input
                    type="tel"
                    value={leadForm.whatsapp}
                    onChange={(event) => handleLeadFieldChange('whatsapp', event.target.value)}
                    placeholder="(00) 00000-0000"
                  />
                </label>
                <label>
                  Usuário
                  <input
                    type="text"
                    value={leadForm.username}
                    onChange={(event) => handleLeadFieldChange('username', event.target.value)}
                    placeholder="Opcional"
                  />
                </label>
                <label>
                  Senha
                  <input
                    type="password"
                    value={leadForm.password}
                    onChange={(event) => handleLeadFieldChange('password', event.target.value)}
                    placeholder="Defina uma senha"
                    required
                  />
                </label>
                <label className="checkout-form-span">
                  Confirmar senha
                  <input
                    type="password"
                    value={leadForm.confirmPassword}
                    onChange={(event) => handleLeadFieldChange('confirmPassword', event.target.value)}
                    placeholder="Repita a senha"
                    required
                  />
                </label>
                <p className="checkout-form-help checkout-form-span">
                  No plano mensal, a cobrança segue em cartão recorrente. No anual, você pode escolher cartão ou PIX à vista. Para renovação ou upgrade, use a mesma conta já cadastrada.
                </p>
              </div>
              <div className="checkout-form-actions">
                <button className="btn btn-primary" type="submit" disabled={checkoutState.status === 'loading'}>
                  {checkoutState.status === 'loading' ? 'Preparando checkout...' : 'Continuar para pagamento'}
                </button>
                <a className="btn btn-secondary" href="#contato">
                  Falar com a Vértice
                </a>
              </div>
              <div className={`checkout-feedback ${checkoutState.status !== 'idle' ? `is-${checkoutState.status}` : ''}`}>
                {checkoutState.message || 'Pagamento por PIX, boleto ou cartão. A liberação ocorre após a confirmação da assinatura.'}
              </div>
              {checkoutState.checkoutUrl ? (
                <a className="checkout-direct-link" href={checkoutState.checkoutUrl} target="_blank" rel="noreferrer">
                  Abrir checkout em outra aba
                </a>
              ) : null}
            </form>
          </div>
        </section>

        <section className="training-section" id="treinamento">
          <div className="section-header">
            <p className="kicker">Treinamento</p>
            <h2>Uma trilha prática para acelerar a adoção da plataforma.</h2>
            <p className="lede">
              O acesso ao treinamento acompanha a assinatura e combina onboarding inicial, vídeos por tela e evolução contínua do conteúdo conforme a operação amadurece.
            </p>
          </div>
          <div className="training-grid">
            {trainingTracks.map((item) => (
              <article key={item.title} className="training-card">
                <p className="plan-label">{item.title}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="training-cta">
            <div>
              <h3>Você já pode vender mesmo antes da biblioteca estar completa.</h3>
              <p>
                A melhor estratégia neste momento é comercializar com implantação assistida, liberar os primeiros módulos de treinamento e ir ampliando a biblioteca conforme os clientes entram e as dúvidas reais aparecem.
              </p>
            </div>
            <div className="plans-actions">
              <button className="btn btn-primary" type="button" onClick={() => openCheckout('PLANNER_PRO', 'MONTHLY')}>
                Solicitar apresentação
              </button>
              <a className="btn btn-secondary" href={`mailto:${contactEmail}`}>
                Falar sobre implantação
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

