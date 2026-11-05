import { Language } from './language';

export interface StackCategory {
  label: string;
  skills: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface ProjectItem {
  name: string;
  status: 'active' | 'archived';
  description: string;
  linkLabel: string;
  linkUrl: string;
}

export interface Content {
  nav: { stack: string; experience: string; projects: string; contact: string };
  hero: {
    kicker: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    description: string;
    aiNote: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statusTitle: string;
    statusText: string;
    educationKicker: string;
    school: string;
    languages: string;
  };
  stack: { title: string; categories: StackCategory[] };
  experience: { title: string; items: ExperienceItem[] };
  projects: {
    title: string;
    items: ProjectItem[];
    statusActive: string;
    statusArchived: string;
    more: string;
  };
  contact: { titleLine1: string; titleLine2: string; text: string };
}

export const LINKS = {
  email: 'devbalestere@gmail.com',
  phone: '+55 (34) 99868-0075',
  github: 'https://github.com/LeonardoBalestere',
  linkedin: 'https://www.linkedin.com/in/leonardobalestere/',
  asyncImport: 'https://github.com/LeonardoBalestere/async-import-service',
};

export const CONTENT: Record<Language, Content> = {
  pt: {
    nav: { stack: 'Stack', experience: 'Experiência', projects: 'Projetos', contact: 'Contato' },
    hero: {
      kicker: '// backend e full stack',
      titlePre: 'Olá, eu sou o Leonardo, ',
      titleHighlight: 'desenvolvedor .NET',
      titlePost: ' que desenvolve com IA todos os dias.',
      description:
        'Reduzi em 60% o consumo de CPU de rotinas Oracle, cortei pela metade o tempo de deploy e entreguei antes do prazo a ampliação de crédito de R$ 2 mi para R$ 5 mi no Tribanco. São mais de 4 anos em sistemas de crédito, seguros, adquirência e varejo.',
      aiNote:
        'Como uso IA: desenvolvo com Claude Code e GitHub Copilot e reviso cada linha que eles geram. Também montei um code review automático com LLM local (GitHub → n8n → Ollama) para os meus Pull Requests. A integração funcionou, mas o modelo só resumia o diff, então fiquei com CodeQL e Codecov para segurança e cobertura.',
      ctaPrimary: 'Fale comigo →',
      ctaSecondary: 'Ver projetos',
      statusTitle: 'Disponível agora',
      statusText:
        'Procuro vaga de desenvolvedor .NET (backend ou full stack), remota ou híbrida em Uberlândia, CLT ou PJ.',
      educationKicker: '// formação + idiomas',
      school: 'UFU — Gestão de Sistemas de Informação',
      languages: 'Português nativo · Inglês avançado',
    },
    stack: {
      title: 'Stack',
      categories: [
        {
          label: '// backend',
          featured: true,
          skills: ['C#', '.NET / .NET Core', 'ASP.NET Core', 'EF Core', 'Dapper'],
        },
        {
          label: '// front-end',
          skills: ['Angular', 'React', 'TypeScript'],
        },
        {
          label: '// bancos de dados',
          skills: ['SQL Server', 'Oracle', 'PostgreSQL', 'T-SQL / PL-SQL'],
        },
        {
          label: '// arquitetura & práticas',
          skills: ['Clean Architecture', 'DDD', 'Testes automatizados', 'Scrum / Ágil', 'ETL'],
        },
        {
          label: '// integrações & mensageria',
          skills: ['APIs REST', 'SFTP', 'RabbitMQ', 'Adquirência / financeiro', 'API dos Correios'],
        },
        {
          label: '// cloud & devops',
          skills: ['Azure DevOps', 'Jenkins', 'GitHub Actions', 'Docker', 'AWS S3', 'CI/CD'],
        },
        {
          label: '// observabilidade & qualidade',
          skills: ['Datadog', 'SonarQube', 'CodeQL', 'Codecov', 'xUnit'],
        },
        {
          label: '// automação & IA',
          skills: ['Claude Code', 'GitHub Copilot', 'n8n', 'Ollama (LLMs locais)'],
        },
      ],
    },
    experience: {
      title: 'Experiência',
      items: [
        {
          period: 'fev 2026 — atual',
          role: 'Desenvolvedor de Software e Consultor Técnico',
          company: 'Freelance',
          description:
            'Entreguei uma SPA em React com painel admin, back-end em Node.js + Supabase, DNS na Cloudflare e CI/CD, em produção desde a entrega. Fiz landing pages em React e Node.js para a Cresex e desenhei o fluxo de atendimento automatizado no WhatsApp com n8n. Construí um motor batch em .NET com operações em massa para ingerir grandes bases públicas.',
        },
        {
          period: 'jun 2026 — set 2026',
          role: 'Engenheiro de Software Backend (.NET)',
          company: 'Tribanco · Triseg',
          description:
            'Entreguei antes do prazo a ampliação do limite do Prestamista de R$ 2 mi para R$ 5 mi em duas APIs .NET e no front Angular, com novos status de contrato e faturamento para não faturar em duplicidade. Construí o fluxo completo de DPS (declaração pessoal de saúde) e subi a cobertura de testes de 70% para 80% com xUnit.',
        },
        {
          period: 'jul 2023 — out 2025',
          role: 'Desenvolvedor .NET – Analista de Desenvolvimento de Sistemas (Pleno)',
          company: 'Martins · SIMTech',
          description:
            'Reduzi em 60% o consumo de CPU de rotinas críticas em Oracle reescrevendo queries, views e índices. Assumi o CI/CD no Azure DevOps quando o contrato da consultoria acabou e cortei o tempo de deploy em 50%. Tirei do servidor web a importação de planilhas que derrubava o CRM, com workers assíncronos. Mantive as rotinas de débito automático com o Tribanco via SFTP e participei da migração de rotinas batch para .NET 6.',
        },
        {
          period: 'dez 2021 — jul 2023',
          role: 'Desenvolvedor .NET – Analista de Desenvolvimento de Sistemas (Júnior)',
          company: 'Martins · SIMTech',
          description:
            'Levei o processamento de notas fiscais (NF-e) dos PDVs de horas para minutos com paralelismo controlado (10 threads). Criei a rotina batch de rastreamento pela API dos Correios, atualizando o status de entrega sem trabalho manual. Mantive regras de negócio em rotinas, APIs e sistemas web (CRM, back office).',
        },
      ],
    },
    projects: {
      title: 'Projetos',
      statusActive: '● ativo',
      statusArchived: '□ arquivado',
      more: 'Mais no GitHub',
      items: [
        {
          name: 'Serviço de Importação Assíncrona',
          status: 'active',
          description:
            'Importação de arquivos grandes em .NET 10 com RabbitMQ (retry e DLQ), transactional outbox no PostgreSQL e leitura do Excel em streaming. No mesmo arquivo de 300 mil linhas, o pico de memória caiu de 1.148 MB para 203 MB. Roda em Kubernetes com autoscaling por fila via KEDA, OpenTelemetry e testes de integração com Testcontainers.',
          linkLabel: 'async-import-service ↗',
          linkUrl: LINKS.asyncImport,
        },
        {
          name: 'API de Inventário Transacional',
          status: 'active',
          description:
            'RESTful em C#/.NET 10 com Clean Architecture, PostgreSQL, xUnit e Datadog, containerizada em Docker.',
          linkLabel: 'github.com/LeonardoBalestere ↗',
          linkUrl: LINKS.github,
        },
        {
          name: 'PoC Code Review com LLM',
          status: 'archived',
          description:
            'Code review automático com LLM local para os meus Pull Requests (GitHub → n8n → Ollama). A integração funcionou, mas o modelo só resumia o diff, então fiquei com CodeQL e Codecov.',
          linkLabel: 'estudo de caso ↗',
          linkUrl: LINKS.linkedin,
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
    nav: { stack: 'Stack', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    hero: {
      kicker: '// backend and full stack',
      titlePre: "Hi, I'm Leonardo, a ",
      titleHighlight: '.NET developer',
      titlePost: ' who builds with AI every day.',
      description:
        "I cut CPU usage of Oracle routines by 60%, halved deploy time, and delivered ahead of schedule a credit-limit increase from R$ 2M to R$ 5M at Tribanco. That's 4+ years on credit, insurance, card-acquiring and retail systems.",
      aiNote:
        'How I use AI: I develop with Claude Code and GitHub Copilot and review every line they produce. I also built an automated code review for my pull requests with a local LLM (GitHub → n8n → Ollama). The integration worked, but the model only summarized the diff, so I kept CodeQL and Codecov for security and coverage.',
      ctaPrimary: 'Get in touch →',
      ctaSecondary: 'See projects',
      statusTitle: 'Available now',
      statusText:
        'Looking for .NET developer roles (backend or full stack), remote or hybrid in Uberlândia, CLT or contractor.',
      educationKicker: '// education + languages',
      school: 'UFU — Information Systems Management',
      languages: 'Native Portuguese · Advanced English',
    },
    stack: {
      title: 'Stack',
      categories: [
        {
          label: '// backend',
          featured: true,
          skills: ['C#', '.NET / .NET Core', 'ASP.NET Core', 'EF Core', 'Dapper'],
        },
        {
          label: '// front-end',
          skills: ['Angular', 'React', 'TypeScript'],
        },
        {
          label: '// databases',
          skills: ['SQL Server', 'Oracle', 'PostgreSQL', 'T-SQL / PL-SQL'],
        },
        {
          label: '// architecture & practices',
          skills: ['Clean Architecture', 'DDD', 'Automated testing', 'Scrum / Agile', 'ETL'],
        },
        {
          label: '// integrations & messaging',
          skills: ['REST APIs', 'SFTP', 'RabbitMQ', 'Acquiring / financial', 'Correios API'],
        },
        {
          label: '// cloud & devops',
          skills: ['Azure DevOps', 'Jenkins', 'GitHub Actions', 'Docker', 'AWS S3', 'CI/CD'],
        },
        {
          label: '// observability & quality',
          skills: ['Datadog', 'SonarQube', 'CodeQL', 'Codecov', 'xUnit'],
        },
        {
          label: '// automation & AI',
          skills: ['Claude Code', 'GitHub Copilot', 'n8n', 'Ollama (local LLMs)'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          period: 'feb 2026 — present',
          role: 'Software Developer & Technical Consultant',
          company: 'Freelance',
          description:
            'Delivered a React SPA with an admin panel, a Node.js + Supabase back end, Cloudflare DNS and CI/CD; in production since delivery. Built landing pages in React and Node.js for Cresex and designed its automated WhatsApp customer-service flow with n8n. Built a .NET batch engine with bulk operations to ingest large public datasets.',
        },
        {
          period: 'jun 2026 — sep 2026',
          role: 'Software Engineer - Backend (.NET)',
          company: 'Tribanco · Triseg',
          description:
            'Delivered ahead of schedule the Prestamista credit-limit increase from R$ 2M to R$ 5M across two .NET APIs and the Angular front end, with new contract and billing statuses that prevent double billing. Built the end-to-end DPS (personal health declaration) flow and raised unit-test coverage from 70% to 80% with xUnit.',
        },
        {
          period: 'jul 2023 — oct 2025',
          role: '.NET Developer – Systems Development Analyst (Mid-level)',
          company: 'Martins · SIMTech',
          description:
            "Cut CPU usage of critical Oracle SQL routines by 60% by rewriting queries, views and indexes. Took over the Azure DevOps CI/CD setup after the consultancy's contract ended and cut deploy time by 50%. Moved Excel imports off the CRM web server into asynchronous workers, ending the crashes. Maintained the automatic-debit routines with Tribanco over SFTP and took part in migrating batch routines to .NET 6.",
        },
        {
          period: 'dec 2021 — jul 2023',
          role: '.NET Developer – Systems Development Analyst (Junior)',
          company: 'Martins · SIMTech',
          description:
            'Cut PDV invoice (NF-e) processing from hours to minutes with controlled parallelism (10 threads). Built a batch routine that tracks shipped equipment through the Correios API, updating delivery status without manual work. Maintained business rules in routines, APIs and web systems (CRM, back office).',
        },
      ],
    },
    projects: {
      title: 'Projects',
      statusActive: '● active',
      statusArchived: '□ archived',
      more: 'More on GitHub',
      items: [
        {
          name: 'Asynchronous Import Service',
          status: 'active',
          description:
            'Large-file import in .NET 10 with RabbitMQ (retry and DLQ), a transactional outbox on PostgreSQL and streaming Excel reads. On the same 300k-row file, peak memory dropped from 1,148 MB to 203 MB. Runs on Kubernetes with queue-based autoscaling via KEDA, OpenTelemetry and Testcontainers integration tests.',
          linkLabel: 'async-import-service ↗',
          linkUrl: LINKS.asyncImport,
        },
        {
          name: 'Transactional Inventory API',
          status: 'active',
          description:
            'RESTful API in C#/.NET 10 with Clean Architecture, PostgreSQL, xUnit and Datadog, containerized with Docker.',
          linkLabel: 'github.com/LeonardoBalestere ↗',
          linkUrl: LINKS.github,
        },
        {
          name: 'LLM Code Review PoC',
          status: 'archived',
          description:
            'Automated code review for my pull requests with a local LLM (GitHub → n8n → Ollama). The integration worked, but the model only summarized the diff, so I kept CodeQL and Codecov.',
          linkLabel: 'case study ↗',
          linkUrl: LINKS.linkedin,
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
