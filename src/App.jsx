import { useState } from 'react'
import verticeLogo from './assets/vertice-logo.svg'
import leanLogo from './assets/leanplanner360-logo.svg'
import './App.css'

const contactEmail = 'danillo@verticeconsulting.tec.br'
const contactPhone = '(18) 99812-3101'
const contactPhoneHref = 'tel:+5518998123101'
const contactWhatsAppHref = 'https://wa.me/5518998123101'
const siteUrl = 'https://www.verticeconsulting.tec.br'
const freeTrialConfirmationUrl = `${siteUrl}/confirmacao-teste-gratis.html`
const platformVideoUrl = import.meta.env.VITE_PLATFORM_VIDEO_URL?.trim() || ''
const trialApiUrl = import.meta.env.VITE_TRIAL_API_URL?.trim() || 'https://www.leanplanner360.com.br/api'
const trialRequestStorageKey = 'leanplanner360_trial_request'

const navLinks = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Saúde do Projeto', href: '#saude' },
  { label: 'IA do projeto', href: '#ia' },
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Teste grátis', href: '#captura' }
]

const painGallery = [
  {
    title: 'Campo sem visão integrada',
    text: 'Quando o time de campo depende de planilhas dispersas, o problema aparece na frente de serviço tarde demais.'
  },
  {
    title: 'Material fora da sequência',
    text: 'Entrega, prioridade e necessidade real da obra ficam desalinhadas quando suprimentos não conversa com o cronograma.'
  },
  {
    title: 'Engenharia travando execução',
    text: 'Pendências técnicas e liberações atrasadas impactam a produtividade quando não entram cedo na leitura de prontidão.'
  }
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
  },
  {
    icon: '🧵',
    title: 'Spools de tubulação',
    description: 'Acompanha fabricação e montagem de spools por etapa, área e inspeção — cruzando MTO, status de solda e recebimento num único farol.'
  },
  {
    icon: '🗂️',
    title: 'Importação multi-formato',
    description: 'Lê cronogramas em Primavera (.xer), MS Project (.xml/.xlsx) ou CSV e atualiza datas, avanço e situação sem recriar o que já está em campo.'
  },
  {
    icon: '🧱',
    title: 'Last Planner digital',
    description: 'Restrições, lookahead e checklists de campo substituem o quadro físico, com histórico completo de cada decisão.'
  }
]

const platformChecklist = [
  'Dashboard visual para antecipar gargalos antes do impacto na frente de serviço',
  'Materiais, engenharia e restrições conectados à mesma rotina operacional',
  'Checklists automáticos de prontidão por atividade, pacote ou disciplina',
  'Saúde do Projeto: nota de prazo, curva S e caminho crítico atualizados a cada importação',
  'Chat de IA que responde perguntas sobre o cronograma, spools, materiais e restrições',
  'Atualização de campo, RDO e avanço no mesmo fluxo do planejamento',
  'Exportação controlada para consolidação final em Primavera ou Project'
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
  }
]

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

const emptyTrialForm = {
  fullName: '',
  email: '',
  whatsapp: '',
  company: '',
  password: ''
}

function trackTrialEvent(eventName, params = {}) {
  if (typeof window === 'undefined') {
    return
  }

  const safeParams = {
    product: 'lean_planner_360',
    source: 'google_ads_landing',
    ...params
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, safeParams)
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: eventName,
    ...safeParams
  })
}

function App() {
  const [trialForm, setTrialForm] = useState(emptyTrialForm)
  const [trialFeedback, setTrialFeedback] = useState(null)

  const environmentName = trialForm.company.trim() || trialForm.fullName.trim() || 'nome da pessoa'

  function handleTrialFieldChange(event) {
    const { name, value } = event.target
    setTrialForm((current) => ({
      ...current,
      [name]: value
    }))
  }

  async function handleTrialSubmit(event) {
    event.preventDefault()

    const payload = {
      fullName: trialForm.fullName.trim(),
      email: trialForm.email.trim(),
      whatsapp: trialForm.whatsapp.trim(),
      company: trialForm.company.trim(),
      password: trialForm.password,
      requestedEnvironmentName: environmentName,
      product: 'lean_planner_360',
      requestedStatus: 'awaiting_approval',
      requestedAt: new Date().toISOString()
    }

    try {
      const response = await fetch(`${trialApiUrl.replace(/\/$/, '')}/trial-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.error || 'Não foi possível registrar a solicitação agora.')

      try {
        window.sessionStorage?.setItem(trialRequestStorageKey, JSON.stringify({
          requestId: result.requestId,
          status: result.status,
          requestedEnvironmentName: payload.requestedEnvironmentName
        }))
      } catch {
        // Storage is optional; the platform API remains the source of truth.
      }

      window.dispatchEvent(new CustomEvent('leanplanner360:trial_signup_requested', {
        detail: { requestId: result.requestId, status: result.status }
      }))
      trackTrialEvent('trial_signup', {
        has_company: Boolean(payload.company),
        request_status: result.status || 'PENDING',
        account_creation_mode: 'platform_account_created'
      })

      setTrialFeedback({ type: 'success', message: 'Solicitação recebida. Sua conta está aguardando liberação da equipe Vértice.' })
      window.setTimeout(() => window.location.assign(freeTrialConfirmationUrl), 900)
    } catch (error) {
      setTrialFeedback({ type: 'error', message: error.message || 'Não foi possível enviar sua solicitação. Tente novamente.' })
    }
  }

  return (
    <div className="site">
      <header className="topbar">
        <div className="topbar-inner">
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
            <a className="btn btn-primary" href="#captura">Testar grátis</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="visao-geral">
          <div className="hero-content">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="hero-badge">Teste grátis do Lean Planner 360</span>
                <h1>
                  Planeje obras com <span className="accent">mais controle</span>
                  <br />
                  e menos retrabalho.
                </h1>
                <p>
                  Centralize planejamento, materiais, engenharia, spools e campo em uma única plataforma —
                  com uma IA que responde qualquer pergunta sobre o projeto, em segundos.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#captura">
                    Solicitar teste grátis da plataforma
                  </a>
                  <a className="btn btn-secondary btn-on-dark" href="#video">Ver a plataforma em vídeo</a>
                </div>
                <div className="hero-notes">
                  <article>
                    <strong>Crie sua conta de avaliação</strong>
                    <p>Preencha o formulário. A equipe entra em contato e libera seu usuário e senha.</p>
                  </article>
                </div>
              </div>
              <div className="hero-visual">
                <div className="health-mock">
                  <div className="health-mock-head">
                    <span>Saúde do projeto · posição atual</span>
                    <span className="health-mock-pill">Atenção</span>
                  </div>
                  <div className="health-mock-score">
                    <div className="health-ring">
                      <div className="health-ring-inner">71</div>
                    </div>
                    <div className="health-mock-score-label">
                      Nota de prazo
                      <strong>Ponderada: avanço, marcos e vencidas</strong>
                    </div>
                  </div>
                  <div className="health-mock-rows">
                    <div className="health-mock-row">
                      <span>Índice de prazo</span>
                      <span className="health-mock-bar"><span style={{ width: '76%' }} /></span>
                      <b>76%</b>
                    </div>
                    <div className="health-mock-row">
                      <span>Marcos concluídos</span>
                      <span className="health-mock-bar"><span style={{ width: '71%' }} /></span>
                      <b>71%</b>
                    </div>
                    <div className="health-mock-row">
                      <span>Avanço das vencidas</span>
                      <span className="health-mock-bar"><span style={{ width: '60%' }} /></span>
                      <b>60%</b>
                    </div>
                  </div>
                  <div className="health-mock-curve">
                    <svg viewBox="0 0 300 64" preserveAspectRatio="none">
                      <polyline
                        points="0,52 40,46 80,40 120,30 160,24 200,16 240,12 300,6"
                        fill="none"
                        stroke="#67d3ff"
                        strokeWidth="2.5"
                        strokeDasharray="5 4"
                      />
                      <polyline
                        points="0,54 40,50 80,46 120,40 160,34"
                        fill="none"
                        stroke="#71c35a"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="health-float-chip chip-top">
                  <span className="dot" />
                  <div>
                    <strong>Caminho crítico</strong>
                    <span>Calculado a cada importação</span>
                  </div>
                </div>
                <div className="health-float-chip chip-bottom">
                  <span className="dot" />
                  <div>
                    <strong>Pergunte à IA</strong>
                    <span>"Quais marcos estão atrasados?"</span>
                  </div>
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
          <div className="hero-notes light">
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
          <div className="ecosystem-grid">
            {painGallery.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="differentials">
            <p className="kicker">Por que converte</p>
            <h3>O cliente enxerga rápido o que hoje está escondido.</h3>
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

        <section className="spotlight-section" id="saude">
          <div className="section-inner">
            <div className="spotlight-grid">
              <div className="spotlight-copy">
                <p className="kicker">Saúde do Projeto</p>
                <h2>Uma nota só, direto do cronograma: o projeto está bom ou ruim?</h2>
                <p className="lede">
                  A cada importação do cronograma (Primavera ou MS Project), a plataforma recalcula sozinha a nota de
                  prazo, a curva S por ramo e por área, os marcos vencidos e o caminho crítico — sem planilha paralela.
                </p>
                <ul className="spotlight-list">
                  <li>Nota de prazo ponderada: avanço físico, marcos vencidos e cumprimento das atividades vencidas.</li>
                  <li>Curva S geral, por ramo (ex. Mecânica, EIA) e por sub-área, planejado × real.</li>
                  <li>Caminho crítico (CPM) recalculado automaticamente, com folga por atividade.</li>
                  <li>Histórico de posições: cada importação vira um ponto novo na curva real.</li>
                </ul>
              </div>
              <div className="critical-path-mock">
                <p className="mock-head">Caminho crítico · folga em dias</p>
                <div className="cp-row">
                  <span className="cp-dot" />
                  <span className="cp-name">Montagem Pipe Rack — TR01-05</span>
                  <span className="cp-float">folga 0d</span>
                </div>
                <div className="cp-row">
                  <span className="cp-dot" />
                  <span className="cp-name">Fabricação spools — Prédio A</span>
                  <span className="cp-float">folga 0d</span>
                </div>
                <div className="cp-row">
                  <span className="cp-dot" style={{ background: '#f0b429' }} />
                  <span className="cp-name">Liberação engenharia — ClO₂</span>
                  <span className="cp-float">folga 2d</span>
                </div>
                <div className="cp-row">
                  <span className="cp-dot" style={{ background: '#f0b429' }} />
                  <span className="cp-name">Tanque de armazenamento #2</span>
                  <span className="cp-float">folga 3d</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="spotlight-section" id="ia" style={{ paddingTop: 0 }}>
          <div className="section-inner">
            <div className="spotlight-grid reverse">
              <div className="ai-chat-mock">
                <div className="chat-bubble user">Quais atividades estão no caminho crítico da área 1301?</div>
                <div className="chat-bubble ai">
                  3 atividades críticas na 1301 — Prédio de Processo A: montagem de estruturas metálicas (folga 0d),
                  tubulação do piso técnico (folga 0d) e teste hidrostático (folga 0d). As 3 dependem da liberação de
                  engenharia pendente desde 12/10.
                </div>
                <div className="chat-bubble user">E as restrições em aberto de alto impacto?</div>
                <div className="chat-bubble ai">2 restrições com impacto alto, ambas sem responsável definido.</div>
              </div>
              <div className="spotlight-copy">
                <p className="kicker">IA do projeto</p>
                <h2>Pergunte qualquer coisa sobre o projeto. A IA responde com dados reais.</h2>
                <p className="lede">
                  Nada de dashboard fixo que não responde à pergunta certa. O chat de IA lê sob demanda a saúde do
                  projeto, o cronograma, o caminho crítico, restrições, spools, materiais e engenharia — e nunca
                  inventa números: se não tem dado, diz que não tem.
                </p>
                <ul className="spotlight-list">
                  <li>Caminho crítico, folga e dependências de qualquer atividade, por nome ou código.</li>
                  <li>Restrições abertas, por impacto, área ou responsável.</li>
                  <li>Spools de tubulação por etapa, materiais atrasados e documentos de engenharia pendentes.</li>
                  <li>Acesso restrito à liderança do projeto, por workspace — cada cliente só vê os próprios dados.</li>
                </ul>
              </div>
            </div>
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

        <section className="platform-section" id="plataforma">
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
                  Ambientes de teste e implantação são liberados por projeto, com operação stand alone,
                  integração sob medida e trilha de treinamento liberada durante o teste guiado.
                </p>
                <a className="login-button" href="#captura">Solicitar acesso de avaliação</a>
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
              Um vídeo curto com dashboard, saúde do projeto, materiais, engenharia e leitura de restrições costuma converter melhor do que uma explicação longa.
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
                <li>Saúde do Projeto: nota de prazo, curva S e caminho crítico</li>
                <li>Materiais e engenharia ligados à atividade e ao prazo</li>
                <li>Chat de IA respondendo perguntas em tempo real</li>
              </ul>
              <a className="btn btn-secondary" href="#contato">Quero uma demonstração guiada</a>
            </div>
          </div>
        </section>

        <section className="checkout-panel" id="captura" aria-labelledby="trial-form-title">
          <div className="checkout-copy">
            <p className="kicker">Teste grátis da plataforma</p>
            <h3 id="trial-form-title">Crie sua conta de avaliação do Lean Planner 360.</h3>
            <p>
              Preencha o formulário. Logo você será contatado e seu usuário e senha serão liberados para iniciar o teste.
            </p>
            <div className="checkout-summary" aria-label="Resumo da avaliação">
              <div>
                <span>Teste</span>
                <strong>Conta criada e aguardando liberação.</strong>
              </div>
              <div>
                <span>Ambiente</span>
                <strong>{environmentName}</strong>
              </div>
            </div>
            <p className="checkout-note">
              Depois do seu contato, a equipe combina o recebimento de cronograma e documentos para a configuração inicial.
            </p>
          </div>

          <form className="checkout-form" onSubmit={handleTrialSubmit}>
            <div className="checkout-form-grid">
              <label>
                Nome completo
                <input
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={trialForm.fullName}
                  onChange={handleTrialFieldChange}
                  required
                />
              </label>
              <label>
                E-mail corporativo
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={trialForm.email}
                  onChange={handleTrialFieldChange}
                  required
                />
              </label>
              <label>
                WhatsApp
                <input
                  name="whatsapp"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={trialForm.whatsapp}
                  onChange={handleTrialFieldChange}
                  required
                />
              </label>
              <label>
                Empresa <span className="optional-label">opcional</span>
                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={trialForm.company}
                  onChange={handleTrialFieldChange}
                />
              </label>
              <label>
                Crie sua senha de acesso
                <input
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  minLength="8"
                  value={trialForm.password}
                  onChange={handleTrialFieldChange}
                  required
                />
              </label>
            </div>
            <p className="checkout-form-help">
              Seus dados serão usados somente para criar e liberar seu acesso de avaliação.
            </p>
            <div className="checkout-form-actions">
              <button className="btn btn-primary" type="submit">
                Solicitar teste grátis da plataforma
              </button>
              <a className="btn btn-secondary" href={contactWhatsAppHref} target="_blank" rel="noreferrer">
                Tirar dúvida no WhatsApp
              </a>
            </div>
            {trialFeedback ? (
              <div className={`checkout-feedback is-${trialFeedback.type}`} role="status">
                {trialFeedback.message}
              </div>
            ) : null}
          </form>
        </section>

        {false && (
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
        )}
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
