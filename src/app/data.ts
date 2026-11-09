import { Language } from './language';

export interface StackCategory {
  label: string;
  skills: string[];
  /** Usadas só em projetos próprios ou freelances, não em emprego. */
  projectSkills?: string[];
  featured?: boolean;
}

export interface ResultItem {
  value: string;
  label: string;
  context: string;
}

export interface AboutFact {
  label: string;
  value: string;
}

export interface CaseItem {
  title: string;
  company: string;
  problem: string;
  action: string;
  result: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  summary?: string;
  highlights: string[];
  stack: string[];
}

export interface ProjectItem {
  name: string;
  status: 'active' | 'archived';
  description: string;
  linkLabel: string;
  linkUrl: string;
}

export interface FeaturedProject extends ProjectItem {
  tag: string;
  flowTitle: string;
  flow: string[];
  pointsTitle: string;
  points: string[];
}

export interface AiItem {
  title: string;
  text: string;
  link?: { label: string; url: string };
}

export interface Content {
  nav: {
    about: string;
    cases: string;
    experience: string;
    projects: string;
    ai: string;
    stack: string;
    contact: string;
    sectionsLabel: string;
    themeToLight: string;
    themeToDark: string;
  };
  meta: { title: string };
  hero: {
    kicker: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    description: string;
    keywordsLabel: string;
    keywords: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    statusTitle: string;
    statusText: string;
    educationKicker: string;
    school: string;
    languages: string;
  };
  results: { title: string; intro: string; items: ResultItem[] };
  about: { title: string; paragraphs: string[]; facts: AboutFact[] };
  cases: {
    title: string;
    intro: string;
    problemLabel: string;
    actionLabel: string;
    resultLabel: string;
    items: CaseItem[];
  };
  experience: { title: string; items: ExperienceItem[] };
  projects: {
    title: string;
    featured: FeaturedProject;
    items: ProjectItem[];
    statusActive: string;
    statusArchived: string;
    more: string;
  };
  ai: { title: string; intro: string; items: AiItem[] };
  stack: { title: string; legend: string; categories: StackCategory[] };
  contact: { titleLine1: string; titleLine2: string; text: string };
}

export const LINKS = {
  email: 'devbalestere@gmail.com',
  phone: '+55 (34) 99868-0075',
  github: 'https://github.com/LeonardoBalestere',
  linkedin: 'https://www.linkedin.com/in/leonardobalestere/',
  asyncImport: 'https://github.com/LeonardoBalestere/async-import-service',
  inventory: 'https://github.com/LeonardoBalestere/InventoryManagement-BackEnd',
};

export const CONTENT: Record<Language, Content> = {
  pt: {
    nav: {
      about: 'Sobre',
      cases: 'Casos',
      experience: 'Experiência',
      projects: 'Projetos',
      ai: 'IA',
      stack: 'Stack',
      contact: 'Contato',
      sectionsLabel: 'Seções',
      themeToLight: 'Mudar para o tema claro',
      themeToDark: 'Mudar para o tema escuro',
    },
    meta: { title: 'Leonardo Balestere | Desenvolvedor .NET, Backend e Full Stack' },
    hero: {
      kicker: '// backend e full stack',
      titlePre: 'Olá, eu sou o Leonardo, ',
      titleHighlight: 'desenvolvedor .NET',
      titlePost: ' que desenvolve com IA todos os dias.',
      description:
        'Tenho mais de 4 anos em sistemas de crédito, seguros, adquirência e varejo. Meu forte é o backend (C#, APIs REST, SQL Server e Oracle), e também entrego front-end em Angular e React.',
      keywordsLabel: 'Principais tecnologias',
      keywords: ['C#', '.NET', 'ASP.NET Core', 'SQL Server', 'Oracle', 'Angular', 'React'],
      ctaPrimary: 'Fale comigo →',
      ctaSecondary: 'Ver projetos',
      statusTitle: 'Procurando vaga',
      statusText:
        'Procuro vaga de desenvolvedor .NET (backend ou full stack), remota ou híbrida em Uberlândia, CLT ou PJ.',
      educationKicker: '// formação + idiomas',
      school: 'UFU — Gestão de Sistemas de Informação (em andamento)',
      languages: 'Português nativo · Inglês avançado',
    },
    results: {
      title: 'Resultados',
      intro: 'Cada número com o lugar em que aconteceu.',
      items: [
        {
          value: '−60%',
          label: 'de CPU em rotinas críticas Oracle',
          context: 'Reescrevendo queries, views e índices. Martins.',
        },
        {
          value: '−50%',
          label: 'no tempo de deploy',
          context: 'Ao assumir o CI/CD no Azure DevOps. Martins.',
        },
        {
          value: 'Horas → minutos',
          label: 'no processamento de NF-e dos PDVs',
          context: 'Com paralelismo controlado, em 10 threads. Martins.',
        },
        {
          value: 'R$ 2 mi → R$ 5 mi',
          label: 'de limite no Prestamista',
          context: 'Mudança entregue antes do prazo. Tribanco.',
        },
        {
          value: '70% → 80%',
          label: 'de cobertura de testes unitários',
          context: 'Com xUnit e validação no SonarQube. Tribanco.',
        },
        {
          value: '1.148 → 203 MB',
          label: 'de pico de memória em 300 mil linhas',
          context:
            'Medição minha no projeto público async-import-service, contra uma versão ingênua. Não é produção.',
        },
      ],
    },
    about: {
      title: 'Sobre',
      paragraphs: [
        'Comecei no atendimento ao cliente da Martins antes de ir para o desenvolvimento, e isso me ensinou a ligar a regra de negócio ao que o usuário vê na tela.',
        'Na Martins / SIMTech, trabalhei nos sistemas internos e do negócio de adquirência: CRM, logística, back office e rotinas batch críticas, em C# com Oracle e SQL Server. Mantive regras de negócio em .NET Framework e participei da migração de rotinas batch para .NET 6.',
        'Depois, em um contrato de projeto na Triseg, braço de seguros do Tribanco, trabalhei em APIs .NET com Clean Architecture e DDD. Nos freelances, que são remotos, trabalho com React, Node.js e .NET.',
        'Também orientei 2 desenvolvedores na Martins e escrevi documentação técnica.',
      ],
      facts: [
        { label: 'Procuro', value: 'Vaga de desenvolvedor .NET, backend ou full stack' },
        { label: 'Contrato', value: 'CLT ou PJ' },
        { label: 'Modelo', value: 'Remoto ou híbrido em Uberlândia' },
        { label: 'Experiência', value: 'Mais de 4 anos com C# e .NET' },
        { label: 'Domínios', value: 'Crédito, seguros, adquirência e varejo' },
      ],
    },
    cases: {
      title: 'Casos',
      intro:
        'Problemas reais de trabalho. O código dessas empresas é privado, então descrevo o problema e o que fiz.',
      problemLabel: 'Problema',
      actionLabel: 'O que fiz',
      resultLabel: 'Resultado',
      items: [
        {
          title: 'A importação que derrubava o CRM',
          company: 'Martins · SIMTech',
          problem:
            'Importações de planilhas Excel rodavam no servidor web de um CRM usado por toda a empresa e causavam quedas.',
          action: 'Tirei essas importações do servidor web e as levei para workers assíncronos.',
          result: 'As quedas acabaram.',
        },
        {
          title: 'Limite de crédito de R$ 2 mi para R$ 5 mi',
          company: 'Tribanco · Triseg',
          problem:
            'O mesmo contrato precisava poder ser enviado duas vezes (até R$ 2 mi e até R$ 5 mi) sem faturar em duplicidade.',
          action:
            'Modelei novos status de contrato e faturamento e cobri regras de crédito, faturamento e aprovação financeira em duas APIs .NET, com uma tela nova em Angular.',
          result: 'Entreguei antes do prazo.',
        },
        {
          title: 'Notas fiscais de horas para minutos',
          company: 'Martins · SIMTech',
          problem: 'O processamento das notas fiscais (NF-e) dos PDVs levava horas.',
          action: 'Usei paralelismo controlado, com 10 threads, número que defini medindo o custo.',
          result: 'O processamento passou a levar minutos.',
        },
        {
          title: 'Assumir o CI/CD no Azure DevOps',
          company: 'Martins · SIMTech',
          problem: 'O contrato da consultoria que cuidava do CI/CD acabou.',
          action: 'Assumi a configuração: pipelines YAML, gatilhos e SonarQube.',
          result: 'Cortei o tempo de deploy em 50%.',
        },
      ],
    },
    experience: {
      title: 'Experiência',
      items: [
        {
          period: 'fev 2026 — atual',
          role: 'Desenvolvedor de Software e Consultor Técnico',
          company: 'Freelance · remoto',
          highlights: [
            'Entreguei uma SPA em React com painel admin, back-end em Node.js + Supabase, DNS na Cloudflare e CI/CD, em produção desde a entrega.',
            'Fiz landing pages e interfaces em React e Node.js para a Cresex e desenhei o fluxo de atendimento automatizado no WhatsApp com n8n.',
            'Construí um motor batch em .NET com operações em massa para ingerir grandes bases públicas.',
          ],
          stack: ['C#', '.NET', 'React', 'Node.js', 'Supabase', 'n8n'],
        },
        {
          period: 'jun 2026 — set 2026',
          role: 'Engenheiro de Software Backend (.NET)',
          company: 'Tribanco · Triseg',
          summary:
            'Contrato de projeto nas APIs de Prestamista e do sistema de gestão de seguros, com Clean Architecture e DDD.',
          highlights: [
            'Entreguei antes do prazo a ampliação do limite do Prestamista de R$ 2 mi para R$ 5 mi, em duas APIs .NET e uma tela nova em Angular.',
            'Modelei novos status de contrato e faturamento para não faturar em duplicidade.',
            'Construí o fluxo completo de DPS (declaração pessoal de saúde): endpoints de auditorias pendentes, validação de faturamento e aprovação ou rejeição, com cancelamento automático da proposta na rejeição.',
            'Criei regras de validação para a entrada de propostas em massa (capital segurado, data de adesão, estado de faturamento).',
            'Subi a cobertura de testes unitários de 70% para 80% com xUnit, com validação no SonarQube e deploy por Jenkins.',
          ],
          stack: [
            'C#',
            '.NET 8/9/10',
            'ASP.NET Core',
            'EF Core',
            'Dapper',
            'SQL Server',
            'Oracle',
            'xUnit',
            'SonarQube',
            'Jenkins',
            'Angular',
          ],
        },
        {
          period: 'jul 2023 — out 2025',
          role: 'Desenvolvedor .NET – Analista de Desenvolvimento de Sistemas (Pleno)',
          company: 'Martins · SIMTech',
          highlights: [
            'Reduzi em 60% o consumo de CPU de rotinas críticas em Oracle reescrevendo queries, views e índices.',
            'Assumi o CI/CD no Azure DevOps (pipelines YAML, gatilhos, SonarQube) quando o contrato da consultoria acabou e cortei o tempo de deploy em 50%.',
            'Tirei do servidor web a importação de planilhas que derrubava o CRM, com workers assíncronos.',
            'Mantive as rotinas batch de débito automático com banco via SFTP, com calendário de dias úteis e feriados, e conferia inconsistências antes de cada débito mensal.',
            'Construí a integração diária da base de clientes com a plataforma de marketing Dinamize via API REST.',
            'Adicionei trilha de auditoria de alterações de permissão no sistema de gestão de acessos.',
            'Participei da migração de rotinas batch de .NET Framework para .NET 6 e orientei 2 desenvolvedores.',
          ],
          stack: [
            'C#',
            '.NET Framework',
            '.NET 6',
            'ASP.NET MVC',
            'Web API',
            'Dapper',
            'Oracle',
            'SQL Server',
            'Azure DevOps',
            'SonarQube',
            'Control-M',
          ],
        },
        {
          period: 'dez 2021 — jul 2023',
          role: 'Desenvolvedor .NET – Analista de Desenvolvimento de Sistemas (Júnior)',
          company: 'Martins · SIMTech',
          highlights: [
            'Levei o processamento de notas fiscais (NF-e) dos PDVs de horas para minutos com paralelismo controlado (10 threads, número definido medindo o custo).',
            'Criei a rotina batch de rastreamento pela API dos Correios, atualizando o status de entrega sem trabalho manual.',
            'Mantive regras de negócio em rotinas, APIs e sistemas web (CRM, back office) em .NET Framework com Oracle e SQL Server.',
          ],
          stack: ['C#', '.NET Framework', 'ASP.NET', 'Oracle', 'SQL Server', 'API REST', 'Git', 'Scrum'],
        },
      ],
    },
    projects: {
      title: 'Projetos',
      statusActive: '● público',
      statusArchived: '□ PoC encerrada',
      more: 'Mais no GitHub',
      featured: {
        name: 'Serviço de Importação Assíncrona',
        status: 'active',
        tag: 'Projeto pessoal · jul 2026 · .NET 10',
        description:
          'Inspirado num sistema real em que o import síncrono carregava o Excel inteiro em memória e derrubava o servidor web. Refaz esse fluxo de forma assíncrona.',
        linkLabel: 'github.com/LeonardoBalestere/async-import-service ↗',
        linkUrl: LINKS.asyncImport,
        flowTitle: 'Como funciona',
        flow: [
          'O gateway recebe o upload, calcula o hash do arquivo e, se já o conhece, devolve o job existente.',
          'O arquivo vai para o MinIO. Job e outbox são salvos juntos no PostgreSQL (transactional outbox), e só então o gateway responde 202 com o id do job.',
          'Um dispatcher publica no RabbitMQ só a referência do arquivo (Claim Check), com publisher confirms.',
          'O worker lê o Excel em streaming e grava a cada 5.000 linhas. Depois de 3 tentativas, a mensagem vai para a DLQ e o job fica como falho.',
        ],
        pointsTitle: 'O que dá para conferir',
        points: [
          'Pico de memória de 1.148 MB para 203 MB no mesmo arquivo de 300 mil linhas. Medição minha, contra uma versão ingênua escrita de propósito; não é produção.',
          'Manifests de Kubernetes com autoscaling por fila via KEDA, para cluster local kind.',
          'OpenTelemetry nos dois serviços, 11 casos de teste (3 de integração com Testcontainers) e CI no GitHub Actions.',
          'O README documenta as decisões de arquitetura, com os trade-offs de cada uma.',
          'Feito com apoio de IA: o Claude aparece como coautor em todos os commits.',
        ],
      },
      items: [
        {
          name: 'API de Inventário Transacional',
          status: 'active',
          description:
            'Projeto de estudo: API REST em C#/.NET 10 com Clean Architecture em 4 projetos, PostgreSQL via EF Core, CQRS com MediatR, JWT e 50 casos de teste xUnit. CodeQL e Codecov no CI.',
          linkLabel: 'InventoryManagement-BackEnd ↗',
          linkUrl: LINKS.inventory,
        },
        {
          name: 'PoC Code Review com LLM',
          status: 'archived',
          description:
            'Code review automático com LLM local para os meus Pull Requests (GitHub → n8n → Ollama). A integração funcionou, mas o modelo só resumia o diff, então fiquei com CodeQL e Codecov.',
          linkLabel: 'post em Destaques no LinkedIn ↗',
          linkUrl: LINKS.linkedin,
        },
      ],
    },
    ai: {
      title: 'Como uso IA',
      intro: 'Desenvolvimento assistido por IA. Não tenho sistema de IA em produção.',
      items: [
        {
          title: 'No dia a dia',
          text: 'Desenvolvo com Claude Code e GitHub Copilot e reviso cada linha que eles geram.',
        },
        {
          title: 'O que testei',
          text: 'Montei um code review automático com LLM local (GitHub → n8n → Ollama) para os meus Pull Requests. A integração funcionou, mas o modelo só resumia o diff, então fiquei com CodeQL e Codecov para segurança e cobertura.',
          link: { label: 'post em Destaques no LinkedIn ↗', url: LINKS.linkedin },
        },
        {
          title: 'À vista no código',
          text: 'No async-import-service, o Claude aparece como coautor em todos os commits. O produto em si não tem funcionalidade de IA.',
          link: { label: 'async-import-service ↗', url: LINKS.asyncImport },
        },
      ],
    },
    stack: {
      title: 'Stack',
      legend: 'Contorno tracejado: usado em projetos próprios ou freelances, não em empregos.',
      categories: [
        {
          label: '// backend',
          featured: true,
          skills: ['C#', '.NET / .NET Core', 'ASP.NET Core', 'EF Core', 'Dapper'],
        },
        {
          label: '// front-end',
          skills: ['Angular', 'TypeScript'],
          projectSkills: ['React'],
        },
        {
          label: '// bancos de dados',
          skills: ['SQL Server', 'Oracle', 'T-SQL / PL-SQL'],
          projectSkills: ['PostgreSQL'],
        },
        {
          label: '// arquitetura & práticas',
          skills: ['Clean Architecture', 'DDD', 'Testes automatizados', 'Scrum / Ágil'],
        },
        {
          label: '// integrações & mensageria',
          skills: ['APIs REST', 'SFTP', 'API dos Correios', 'Dinamize'],
          projectSkills: ['RabbitMQ'],
        },
        {
          label: '// cloud & devops',
          skills: ['Azure DevOps', 'Jenkins', 'CI/CD'],
          projectSkills: ['GitHub Actions', 'Docker'],
        },
        {
          label: '// qualidade',
          skills: ['SonarQube', 'xUnit'],
          projectSkills: ['CodeQL', 'Codecov', 'OpenTelemetry'],
        },
        {
          label: '// automação & IA',
          skills: [],
          projectSkills: ['Claude Code', 'GitHub Copilot', 'n8n', 'Ollama (LLMs locais)'],
        },
      ],
    },
    contact: {
      titleLine1: 'Pronto para o',
      titleLine2: 'primeiro sprint.',
      text: 'Procuro vaga de desenvolvedor .NET (backend ou full stack), remota ou híbrida em Uberlândia, CLT ou PJ. Me chama e a gente conversa.',
    },
  },
  en: {
    nav: {
      about: 'About',
      cases: 'Cases',
      experience: 'Experience',
      projects: 'Projects',
      ai: 'AI',
      stack: 'Stack',
      contact: 'Contact',
      sectionsLabel: 'Sections',
      themeToLight: 'Switch to light theme',
      themeToDark: 'Switch to dark theme',
    },
    meta: { title: 'Leonardo Balestere | .NET Developer, Backend and Full Stack' },
    hero: {
      kicker: '// backend and full stack',
      titlePre: "Hi, I'm Leonardo, a ",
      titleHighlight: '.NET developer',
      titlePost: ' who builds with AI every day.',
      description:
        "4+ years on credit, insurance, card-acquiring and retail systems. My strength is the backend (C#, REST APIs, SQL Server and Oracle), and I also ship front-end work in Angular and React.",
      keywordsLabel: 'Main technologies',
      keywords: ['C#', '.NET', 'ASP.NET Core', 'SQL Server', 'Oracle', 'Angular', 'React'],
      ctaPrimary: 'Get in touch →',
      ctaSecondary: 'See projects',
      statusTitle: 'Open to work',
      statusText:
        'Looking for .NET developer roles (backend or full stack), remote or hybrid in Uberlândia, CLT or contractor.',
      educationKicker: '// education + languages',
      school: 'UFU — Information Systems Management (in progress)',
      languages: 'Native Portuguese · Advanced English',
    },
    results: {
      title: 'Results',
      intro: 'Each number with the place where it happened.',
      items: [
        {
          value: '−60%',
          label: 'CPU usage in critical Oracle routines',
          context: 'By rewriting queries, views and indexes. Martins.',
        },
        {
          value: '−50%',
          label: 'deploy time',
          context: 'After taking over the Azure DevOps CI/CD setup. Martins.',
        },
        {
          value: 'Hours → minutes',
          label: 'PDV invoice (NF-e) processing',
          context: 'With controlled parallelism, on 10 threads. Martins.',
        },
        {
          value: 'R$ 2M → R$ 5M',
          label: 'Prestamista credit limit',
          context: 'Change delivered ahead of schedule. Tribanco.',
        },
        {
          value: '70% → 80%',
          label: 'unit-test coverage',
          context: 'With xUnit, gated by SonarQube. Tribanco.',
        },
        {
          value: '1,148 → 203 MB',
          label: 'peak memory on 300k rows',
          context:
            'My own measurement on the public async-import-service project, against a naive version. Not production.',
        },
      ],
    },
    about: {
      title: 'About',
      paragraphs: [
        'I started in customer service at Martins before moving into development, which taught me to connect business rules to what the user actually sees.',
        'At Martins / SIMTech I worked on internal systems and the card-acquiring business: CRM, logistics, back office and critical batch routines, in C# with Oracle and SQL Server. I maintained business rules in .NET Framework and took part in migrating batch routines to .NET 6.',
        "Then, on a project contract at Triseg, Tribanco's insurance arm, I worked on .NET APIs built with Clean Architecture and DDD. My freelance work, all remote, uses React, Node.js and .NET.",
        'I also mentored 2 developers at Martins and wrote technical documentation.',
      ],
      facts: [
        { label: 'Looking for', value: '.NET developer role, backend or full stack' },
        { label: 'Contract', value: 'CLT or contractor' },
        { label: 'Work mode', value: 'Remote or hybrid in Uberlândia' },
        { label: 'Experience', value: '4+ years with C# and .NET' },
        { label: 'Domains', value: 'Credit, insurance, card acquiring and retail' },
      ],
    },
    cases: {
      title: 'Case studies',
      intro:
        "Real work problems. These companies' code is private, so I describe the problem and what I did.",
      problemLabel: 'Problem',
      actionLabel: 'What I did',
      resultLabel: 'Result',
      items: [
        {
          title: 'The import that kept crashing the CRM',
          company: 'Martins · SIMTech',
          problem:
            'Excel imports ran on the web server of a CRM used across the company and caused crashes.',
          action: 'I moved those imports off the web server into asynchronous workers.',
          result: 'The crashes ended.',
        },
        {
          title: 'Credit limit from R$ 2M to R$ 5M',
          company: 'Tribanco · Triseg',
          problem:
            'The same contract had to be sendable twice (up to R$ 2M and up to R$ 5M) without double billing.',
          action:
            'I modeled new contract and billing statuses and covered credit, billing and financial-approval rules across two .NET APIs, with one new Angular screen.',
          result: 'Delivered ahead of schedule.',
        },
        {
          title: 'Invoices from hours to minutes',
          company: 'Martins · SIMTech',
          problem: 'Processing PDV invoices (NF-e) took hours.',
          action: 'I used controlled parallelism with 10 threads, a count I set by measuring cost.',
          result: 'Processing came down to minutes.',
        },
        {
          title: 'Taking over Azure DevOps CI/CD',
          company: 'Martins · SIMTech',
          problem: "The consultancy's contract for the CI/CD setup ended.",
          action: 'I took over the setup: YAML pipelines, triggers and SonarQube.',
          result: 'I cut deploy time by 50%.',
        },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          period: 'Feb 2026 — present',
          role: 'Software Developer & Technical Consultant',
          company: 'Freelance · remote',
          highlights: [
            'Delivered a React SPA with an admin panel, a Node.js + Supabase back end, Cloudflare DNS and CI/CD; in production since delivery.',
            'Built landing pages and interfaces in React and Node.js for Cresex and designed its automated WhatsApp customer-service flow with n8n.',
            'Built a .NET batch engine with bulk operations to ingest large public datasets.',
          ],
          stack: ['C#', '.NET', 'React', 'Node.js', 'Supabase', 'n8n'],
        },
        {
          period: 'Jun 2026 — Sep 2026',
          role: 'Software Engineer - Backend (.NET)',
          company: 'Tribanco · Triseg',
          summary:
            'Project contract on the Credit Life Insurance (Prestamista) and Insurance Management System APIs, built with Clean Architecture and DDD.',
          highlights: [
            'Delivered ahead of schedule the Prestamista credit-limit increase from R$ 2M to R$ 5M, across two .NET APIs and one new Angular screen.',
            'Modeled new contract and billing statuses that prevent double billing.',
            'Built the end-to-end DPS (personal health declaration) flow: endpoints for pending audits, billing validation and approval/rejection, plus automatic proposal cancellation on rejection.',
            'Built validation rules for bulk proposal intake (insured capital, enrollment date, billing state).',
            'Raised unit-test coverage from 70% to 80% with xUnit, gated by SonarQube, with deploys through Jenkins.',
          ],
          stack: [
            'C#',
            '.NET 8/9/10',
            'ASP.NET Core',
            'EF Core',
            'Dapper',
            'SQL Server',
            'Oracle',
            'xUnit',
            'SonarQube',
            'Jenkins',
            'Angular',
          ],
        },
        {
          period: 'Jul 2023 — Oct 2025',
          role: '.NET Developer – Systems Development Analyst (Mid-level)',
          company: 'Martins · SIMTech',
          highlights: [
            'Cut CPU usage of critical Oracle SQL routines by 60% by rewriting queries, views and indexes.',
            "Took over the Azure DevOps CI/CD setup (YAML pipelines, triggers, SonarQube) after the consultancy's contract ended and cut deploy time by 50%.",
            'Moved Excel imports off the CRM web server into asynchronous workers, ending the crashes.',
            'Maintained automatic-debit batch routines with a bank over SFTP, including business-day and holiday calendars, and checked inconsistencies before each monthly debit run.',
            'Built the daily customer-base integration with the Dinamize marketing platform via REST API.',
            'Added an audit trail for permission changes in the access-management system.',
            'Took part in migrating batch routines from .NET Framework to .NET 6 and mentored 2 developers.',
          ],
          stack: [
            'C#',
            '.NET Framework',
            '.NET 6',
            'ASP.NET MVC',
            'Web API',
            'Dapper',
            'Oracle',
            'SQL Server',
            'Azure DevOps',
            'SonarQube',
            'Control-M',
          ],
        },
        {
          period: 'Dec 2021 — Jul 2023',
          role: '.NET Developer – Systems Development Analyst (Junior)',
          company: 'Martins · SIMTech',
          highlights: [
            'Cut PDV invoice (NF-e) processing from hours to minutes with controlled parallelism (10 threads, sized by measuring cost).',
            'Built a batch routine that tracks shipped equipment through the Correios API, updating delivery status without manual work.',
            'Maintained business rules in routines, APIs and web systems (CRM, back office) in .NET Framework with Oracle and SQL Server.',
          ],
          stack: ['C#', '.NET Framework', 'ASP.NET', 'Oracle', 'SQL Server', 'REST API', 'Git', 'Scrum'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      statusActive: '● public',
      statusArchived: '□ PoC ended',
      more: 'More on GitHub',
      featured: {
        name: 'Asynchronous Import Service',
        status: 'active',
        tag: 'Personal project · Jul 2026 · .NET 10',
        description:
          'Inspired by a real system where a synchronous import loaded the whole Excel file into memory and took the web server down. It rebuilds that flow asynchronously.',
        linkLabel: 'github.com/LeonardoBalestere/async-import-service ↗',
        linkUrl: LINKS.asyncImport,
        flowTitle: 'How it works',
        flow: [
          'The gateway receives the upload, hashes the file and, if it already knows the hash, returns the existing job.',
          'The file goes to MinIO. The job and the outbox row are saved together in PostgreSQL (transactional outbox), and only then does the gateway answer 202 with the job id.',
          'A dispatcher publishes only the file reference to RabbitMQ (Claim Check), with publisher confirms.',
          'The worker streams the Excel file and saves every 5,000 rows. After 3 attempts the message goes to the DLQ and the job is marked failed.',
        ],
        pointsTitle: 'What you can check',
        points: [
          'Peak memory from 1,148 MB to 203 MB on the same 300k-row file. My own measurement, against a deliberately naive version; not production.',
          'Kubernetes manifests with queue-based autoscaling via KEDA, for a local kind cluster.',
          'OpenTelemetry in both services, 11 test cases (3 Testcontainers integration tests) and CI on GitHub Actions.',
          'The README documents the architecture decisions and the trade-offs of each.',
          'Built with AI assistance: Claude is listed as co-author on every commit.',
        ],
      },
      items: [
        {
          name: 'Transactional Inventory API',
          status: 'active',
          description:
            'Study project: REST API in C#/.NET 10 with Clean Architecture across 4 projects, PostgreSQL via EF Core, CQRS with MediatR, JWT and 50 xUnit test cases. CodeQL and Codecov in CI.',
          linkLabel: 'InventoryManagement-BackEnd ↗',
          linkUrl: LINKS.inventory,
        },
        {
          name: 'LLM Code Review PoC',
          status: 'archived',
          description:
            'Automated code review for my pull requests with a local LLM (GitHub → n8n → Ollama). The integration worked, but the model only summarized the diff, so I kept CodeQL and Codecov.',
          linkLabel: 'post in LinkedIn Featured ↗',
          linkUrl: LINKS.linkedin,
        },
      ],
    },
    ai: {
      title: 'How I use AI',
      intro: "AI-assisted development. I don't have an AI system in production.",
      items: [
        {
          title: 'Day to day',
          text: 'I develop with Claude Code and GitHub Copilot and review every line they produce.',
        },
        {
          title: 'What I tested',
          text: 'I built an automated code review for my pull requests with a local LLM (GitHub → n8n → Ollama). The integration worked, but the model only summarized the diff, so I kept CodeQL and Codecov for security and coverage.',
          link: { label: 'post in LinkedIn Featured ↗', url: LINKS.linkedin },
        },
        {
          title: 'Visible in the code',
          text: 'In async-import-service, Claude is listed as co-author on every commit. The product itself has no AI feature.',
          link: { label: 'async-import-service ↗', url: LINKS.asyncImport },
        },
      ],
    },
    stack: {
      title: 'Stack',
      legend: 'Dashed outline: used in personal or freelance projects, not at an employer.',
      categories: [
        {
          label: '// backend',
          featured: true,
          skills: ['C#', '.NET / .NET Core', 'ASP.NET Core', 'EF Core', 'Dapper'],
        },
        {
          label: '// front-end',
          skills: ['Angular', 'TypeScript'],
          projectSkills: ['React'],
        },
        {
          label: '// databases',
          skills: ['SQL Server', 'Oracle', 'T-SQL / PL-SQL'],
          projectSkills: ['PostgreSQL'],
        },
        {
          label: '// architecture & practices',
          skills: ['Clean Architecture', 'DDD', 'Automated testing', 'Scrum / Agile'],
        },
        {
          label: '// integrations & messaging',
          skills: ['REST APIs', 'SFTP', 'Correios API', 'Dinamize'],
          projectSkills: ['RabbitMQ'],
        },
        {
          label: '// cloud & devops',
          skills: ['Azure DevOps', 'Jenkins', 'CI/CD'],
          projectSkills: ['GitHub Actions', 'Docker'],
        },
        {
          label: '// quality',
          skills: ['SonarQube', 'xUnit'],
          projectSkills: ['CodeQL', 'Codecov', 'OpenTelemetry'],
        },
        {
          label: '// automation & AI',
          skills: [],
          projectSkills: ['Claude Code', 'GitHub Copilot', 'n8n', 'Ollama (local LLMs)'],
        },
      ],
    },
    contact: {
      titleLine1: 'Ready for the',
      titleLine2: 'first sprint.',
      text: "Looking for .NET developer roles (backend or full stack), remote or hybrid in Uberlândia, CLT or contractor. Reach out and let's talk.",
    },
  },
};
