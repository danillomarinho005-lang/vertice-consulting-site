import { useEffect, useMemo, useRef, useState } from 'react'
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
const platformVideoUrl = import.meta.env.VITE_PLATFORM_VIDEO_URL?.trim() || ''
const rawCheckoutApiBase = import.meta.env.VITE_LEAN_API_URL?.trim()
const checkoutApiBase = rawCheckoutApiBase
  || (typeof window !== 'undefined' && ['localhost', '127.0.0.1'].includes(window.location.hostname)
    ? localCheckoutApiBase
    : productionCheckoutApiBase)

const navLinks = [
  { label: 'Visão Geral', href: '#visao-geral' },
  { label: 'Dor', href: '#dor' },
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Vídeo', href: '#video' },
  { label: 'Implantação', href: '#implantacao' },
  { label: 'Planos', href: '#planos' },
  { label: 'Contato', href: '#contato' }
]

const heroImage = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80'

const painGallery = [
  {
    title: 'Campo sem visão integrada',
    text: 'Quando o time de campo depende de planilhas dispersas, o problema aparece na frente de serviço tarde demais.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Material fora da sequência',
    text: 'Entrega, prioridade e necessidade real da obra ficam desalinhadas quando suprimentos não conversa com o cronograma.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Engenharia travando execução',
    text: 'Pendências técnicas e liberações atrasadas impactam a produtividade quando não entram cedo na leitura de prontidão.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
  },
]

const features = [
  {
    icon: '📍',
    title: 'Dashboard de prontidão',
    description: 'Mostra o que está pronto, bloqueado ou em risco para agir antes que a frente de serviço pare por falta de material, engenharia ou liberação.'
  },
  {
    icon: '📦',
    title: 'Materiais conectados ao prazo',
    description: 'Substitui controles paralelos por uma leitura única entre suprimentos, cronograma e campo, facilitando a priorização do que realmente protege a execução.'
  },
  {
    icon: '📐',
    title: 'Engenharia ligada à execução',
    description: 'Organiza pendências, documentos e liberações de engenharia no mesmo fluxo da prontidão, evitando surpresas na hora de mobilizar a equipe.'
  }
]

const platformChecklist = [
  'Dashboard visual para antecipar gargalos antes do impacto na frente de serviço',
  'Materiais, engenharia e restrições conectados à mesma rotina operacional',
  'Checklists automáticos de prontidão por atividade, pacote ou disciplina',
  'Atualização de campo, RDO e avanço no mesmo fluxo do planejamento',
  'Exportação controlada para consolidação final em Primavera ou Project',
  'Base pronta para operação por projeto, cliente e organização'
]

const ecosystemItems = [
  {
    title: 'Planilhas desconectadas',
    text: 'Materiais, engenharia, restrições e avanço costumam ficar espalhados em arquivos separados, gerando versões conflitantes e retrabalho entre áreas.'
  },
  {
    title: 'Atraso percebido tarde',
    text: 'Quando o desvio aparece só no cronograma consolidado, o time já perdeu tempo, mobilização e margem de resposta para proteger o prazo.'
  },
  {
    title: 'Decisão reativa',
    text: 'Sem uma leitura única de prontidão, a obra reage ao problema já instalado em vez de atacar o gargalo com antecedência.'
  },
  {
    title: 'Fluxo único de prontidão',
    text: 'O Lean Planner 360 transforma esse cenário em um painel operacional único para enxergar o que está pronto, travado e prioritário.'
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

function normalizeDigits(value) {
  return String(value || '').replace(/\D/g, '')
}

function formatPostalCode(value) {
  const digits = normalizeDigits(value).slice(0, 8)
  if (digits.length <= 5) return digits
  return `${digits.slice(0, 5)}-${digits.slice(5)}`
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
    title: 'Importar ou estruturar o cronograma',
    text: 'O fluxo pode começar com Primavera, Project, CSV ou planejamento nativo, mantendo a base do contrato no formato que a operação já utiliza.'
  },
  {
    title: 'Ligar materiais, engenharia e restrições',
    text: 'A plataforma cruza as informações críticas da execução para mostrar se a frente está pronta, travada ou em risco.'
  },
  {
    title: 'Atualizar no campo',
    text: 'Supervisores e responsáveis registram avanço, fotos, RDO e pendências diretamente na rotina diária, sem depender de planilhas paralelas.'
  },
  {
    title: 'Consolidar e decidir',
    text: 'O planejador revisa, consolida e exporta as atualizações aceitas, enquanto a liderança acompanha a prontidão e prioriza ações antes do atraso acontecer.'
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

function App() {
  const checkoutEligiblePlans = useMemo(() => plans.filter((plan) => plan.code !== 'ENTERPRISE'), [])
  const [selectedPlanCode, setSelectedPlanCode] = useState(checkoutEligiblePlans[0]?.code ?? 'PLANNER_PRO')
  const [billingCycle, setBillingCycle] = useState('MONTHLY')
  const [paymentMethod, setPaymentMethod] = useState('CREDIT_CARD')
  const [leadForm, setLeadForm] = useState(defaultLeadForm)
  const [checkoutState, setCheckoutState] = useState({ status: 'idle', message: '', checkoutUrl: '' })
  const [postalCodeState, setPostalCodeState] = useState({ status: 'idle', message: '' })
  const resolvedPostalCodeRef = useRef('')

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

  const handlePostalCodeChange = (value) => {
    const formatted = formatPostalCode(value)
    setLeadForm((current) => ({ ...current, postalCode: formatted }))
    if (resolvedPostalCodeRef.current !== normalizeDigits(formatted)) {
      setPostalCodeState({ status: 'idle', message: '' })
    }
  }

  const handlePostalCodeBlur = async () => {
    const postalCodeDigits = normalizeDigits(leadForm.postalCode)
    if (!postalCodeDigits) {
      setPostalCodeState({ status: 'idle', message: '' })
      return
    }

    if (postalCodeDigits.length !== 8) {
      setPostalCodeState({
        status: 'error',
        message: 'Informe um CEP com 8 dígitos para validar o endereço de cobrança.',
      })
      return
    }

    if (resolvedPostalCodeRef.current === postalCodeDigits) {
      return
    }

    setPostalCodeState({
      status: 'loading',
      message: 'Validando o CEP e buscando o endereço de cobrança...',
    })

    try {
      const response = await fetch(`https://viacep.com.br/ws/${postalCodeDigits}/json/`)
      const payload = await response.json().catch(() => ({}))

      if (!response.ok || payload?.erro) {
        throw new Error('Não encontramos esse CEP. Confirme o CEP principal do endereço de cobrança.')
      }

      resolvedPostalCodeRef.current = postalCodeDigits
      setLeadForm((current) => ({
        ...current,
        postalCode: formatPostalCode(postalCodeDigits),
        address: payload?.logradouro?.trim() ? payload.logradouro.trim() : current.address,
        province: payload?.bairro?.trim() ? payload.bairro.trim() : current.province,
      }))
      setPostalCodeState({
        status: 'success',
        message: 'CEP validado. Rua e bairro foram preenchidos automaticamente quando disponíveis.',
      })
    } catch (error) {
      resolvedPostalCodeRef.current = ''
      setPostalCodeState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Não foi possível validar o CEP agora.',
      })
    }
  }

  const handleCheckoutSubmit = async (event) => {
    event.preventDefault()
    const postalCodeDigits = normalizeDigits(leadForm.postalCode)

    if (leadForm.password !== leadForm.confirmPassword) {
      setCheckoutState({
        status: 'error',
        message: 'A confirmação de senha não confere. Revise os campos e tente novamente.',
        checkoutUrl: '',
      })
      return
    }

    if (postalCodeDigits.length !== 8) {
      setCheckoutState({
        status: 'error',
        message: 'Use um CEP válido com 8 dígitos para seguir para o pagamento.',
        checkoutUrl: '',
      })
      setPostalCodeState({
        status: 'error',
        message: 'Use o CEP principal do endereço de cobrança no formato 00000-000.',
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
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="hero-badge">Gestão de prontidão para contratos industriais</span>
                <h1>
                  Antecipe gargalos de materiais,
                  <br />
                  engenharia e campo antes que impactem o prazo.
                </h1>
                <p>
                  O Lean Planner 360 transforma várias planilhas sem integração em um único fluxo digital de prontidão.
                  Dashboard, materiais, engenharia, restrições e campo passam a conversar entre si para mostrar o que está
                  pronto, o que está bloqueado e o que ameaça a execução antes que o atraso chegue ao cronograma.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-primary" type="button" onClick={() => openCheckout('PLANNER_PRO', 'MONTHLY')}>
                    Começar assinatura
                  </button>
                  <a className="btn btn-secondary" href="#video">Ver a plataforma em vídeo</a>
                </div>
                <div className="hero-notes">
                  <article>
                    <strong>Menos planilhas soltas</strong>
                    <p>Centralize informações críticas da obra em um mesmo painel, com menos retrabalho e menos perda de contexto entre áreas.</p>
                  </article>
                  <article>
                    <strong>Mais previsibilidade</strong>
                    <p>Atue sobre restrições, materiais e engenharia com antecedência para proteger a frente de serviço e o prazo do contrato.</p>
                  </article>
                </div>
              </div>
              <div className="hero-visual">
                <img src={heroImage} alt="Equipe em obra industrial acompanhando execução no campo" />
                <div className="hero-visual-callout hero-callout-top">
                  <span>Prontidão</span>
                  <strong>Descubra o gargalo antes da frente parar</strong>
                </div>
                <div className="hero-visual-callout hero-callout-bottom">
                  <span>Fluxo único</span>
                  <strong>Materiais, engenharia e campo na mesma leitura</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ecosystem-section" id="dor">
          <div className="section-header">
            <p className="kicker">A dor que o cliente sente</p>
            <h2>O problema não é falta de controle. É excesso de controles sem integração.</h2>
            <p className="lede">Quando cada área trabalha em uma planilha diferente, o gargalo aparece tarde e a obra reage em vez de antecipar.</p>
          </div>
          <div className="hero-notes">
            <article>
              <strong>Visão única da prontidão</strong>
              <p>O Lean Planner 360 reúne os sinais mais importantes da execução em um painel só, sem depender de planilhas paralelas para descobrir o problema.</p>
            </article>
            <article>
              <strong>Decisão antes do atraso</strong>
              <p>O objetivo é simples: antecipar o gargalo e agir antes que ele consuma prazo, equipe, mobilização e produtividade.</p>
            </article>
          </div>
          <div className="ecosystem-grid">
            {ecosystemItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="pain-gallery">
            {painGallery.map((item) => (
              <article key={item.title} className="pain-gallery-card">
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="differentials">
            <p className="kicker">Por que converte</p>
            <h3>O cliente enxerga rápido o que hoje está escondido.</h3>
            <div className="differentials-grid">
              {differentials.slice(0, 4).map((item) => (
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

        <section className="cards-section" id="plataforma">
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
              <p className="platform-subtitle">Gestão da prontidão com leitura operacional do prazo</p>
              <p className="platform-text">
                Plataforma digital para transformar planejamento, materiais, engenharia, restrições e campo em uma
                rotina única de prontidão. A operação enxerga mais cedo o que ameaça o prazo e o planejador consolida
                a atualização final com mais segurança.
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
                  Ambientes de teste e implantação são liberados por projeto e por plano, com operação stand alone,
                  integração sob medida e trilha de treinamento liberada para assinantes.
              </p>
                <button className="login-button" type="button" onClick={() => openCheckout('PLANNER_PRO', 'MONTHLY')}>Iniciar contratação</button>
                <a className="access-link" href="https://www.leanplanner360.com.br" target="_blank" rel="noreferrer">
                  Acessar plataforma
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="video-section" id="video">
          <div className="section-header">
            <p className="kicker">Vídeo da plataforma</p>
            <h2>Mostre a prontidão acontecendo na tela.</h2>
            <p className="lede">
              Um vídeo curto com dashboard, materiais, engenharia e leitura de restrições costuma converter melhor do que uma explicação longa.
            </p>
          </div>
          <div className="video-panel">
            <div className="video-frame">
              {platformVideoUrl ? (
                platformVideoUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                  <video controls playsInline preload="metadata">
                    <source src={platformVideoUrl} />
                  </video>
                ) : (
                  <iframe
                    src={platformVideoUrl}
                    title="Demonstração Lean Planner 360"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )
              ) : (
                <div className="video-placeholder">
                  <strong>Espaço pronto para o vídeo da plataforma</strong>
                  <p>Assim que você gravar, basta informar a URL do vídeo para destacar a demonstração na home.</p>
                </div>
              )}
            </div>
            <div className="video-copy">
              <h3>O que mostrar no vídeo</h3>
              <ul className="platform-list">
                <li>Dashboard de prontidão e leitura do que está em risco</li>
                <li>Materiais ligados à atividade e ao prazo</li>
                <li>Engenharia e pendências conectadas à execução</li>
                <li>Restrições e checklist automático por frente</li>
              </ul>
              <a className="btn btn-secondary" href="#contato">Quero uma demonstração guiada</a>
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
            <form className="checkout-form" onSubmit={handleCheckoutSubmit} autoComplete="off">
              <input
                type="text"
                name="fake_username"
                autoComplete="username"
                tabIndex={-1}
                aria-hidden="true"
                style={{ display: 'none' }}
              />
              <input
                type="password"
                name="fake_password"
                autoComplete="current-password"
                tabIndex={-1}
                aria-hidden="true"
                style={{ display: 'none' }}
              />
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
                    name="billing_contact_email"
                    value={leadForm.email}
                    onChange={(event) => handleLeadFieldChange('email', event.target.value)}
                    placeholder="voce@empresa.com"
                    autoComplete="off"
                    data-lpignore="true"
                    data-1p-ignore="true"
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
                    onChange={(event) => handlePostalCodeChange(event.target.value)}
                    onBlur={handlePostalCodeBlur}
                    placeholder="00000-000"
                    inputMode="numeric"
                    maxLength={9}
                    required
                  />
                  <span className={`checkout-field-note ${postalCodeState.status !== 'idle' ? `is-${postalCodeState.status}` : ''}`}>
                    {postalCodeState.message || 'Use o CEP do endereço de cobrança. Ao sair do campo, buscamos rua e bairro automaticamente.'}
                  </span>
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
                    name="billing_access_username"
                    value={leadForm.username}
                    onChange={(event) => handleLeadFieldChange('username', event.target.value)}
                    placeholder="Opcional"
                    autoComplete="off"
                    data-lpignore="true"
                    data-1p-ignore="true"
                  />
                </label>
                <label>
                  Senha
                  <input
                    type="password"
                    name="billing_access_password"
                    value={leadForm.password}
                    onChange={(event) => handleLeadFieldChange('password', event.target.value)}
                    placeholder="Defina uma senha"
                    autoComplete="new-password"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    required
                  />
                </label>
                <label className="checkout-form-span">
                  Confirmar senha
                  <input
                    type="password"
                    name="billing_access_password_confirm"
                    value={leadForm.confirmPassword}
                    onChange={(event) => handleLeadFieldChange('confirmPassword', event.target.value)}
                    placeholder="Repita a senha"
                    autoComplete="new-password"
                    data-lpignore="true"
                    data-1p-ignore="true"
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
                {checkoutState.message || 'Pagamento por cartão de crédito ou PIX, conforme a modalidade escolhida. A liberação ocorre após a confirmação da assinatura.'}
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

