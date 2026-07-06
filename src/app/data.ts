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
  linkedin: 'https://www.linkedin.com/in/leonardo-balestere',
};

export const CONTENT: Record<Language, Content> = {
  pt: {
    nav: { stack: 'Stack', experience: 'Experiência', projects: 'Projetos', contact: 'Contato' },
    hero: {
      kicker: '// backend developer',
      titlePre: 'Olá, eu sou o Leonardo — eu faço ',
      titleHighlight: '.NET legado',
      titlePost: ' virar plataforma moderna.',
      description:
        '+4 anos em C#/.NET, especializado em modernização de sistemas críticos e otimização de bancos transacionais para varejo e setor financeiro.',
      ctaPrimary: 'Fale comigo →',
      ctaSecondary: 'Ver projetos',
      statusTitle: 'Disponível agora',
      statusText: 'Aberto a novas oportunidades.',
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
          label: '// bancos de dados',
          skills: ['SQL Server', 'Oracle', 'PostgreSQL', 'T-SQL / PL-SQL'],
        },
        {
          label: '// arquitetura & práticas',
          skills: ['Clean Architecture', 'DDD', 'Testes automatizados', 'Scrum / Ágil', 'ETL'],
        },
        {
          label: '// integrações',
          skills: ['APIs REST', 'FTPS', 'Adquirência / financeiro', 'API dos Correios'],
        },
        {
          label: '// mensageria & distribuídos',
          skills: ['RabbitMQ', 'Apache Kafka', 'Azure Blob Storage'],
        },
        {
          label: '// cloud & devops',
          skills: ['Azure DevOps', 'Docker', 'AWS (S3, ECS, Lambda)', 'CI/CD'],
        },
        {
          label: '// observabilidade & qualidade',
          skills: ['Datadog', 'ELK Stack', 'SonarQube', 'CodeQL', 'xUnit'],
        },
        {
          label: '// automação & IA',
          skills: ['n8n', 'Ollama (LLMs locais)', 'GitHub Copilot', 'Claude Code'],
        },
      ],
    },
    experience: {
      title: 'Experiência',
      items: [
        {
          period: 'nov 2025 — atual',
          role: 'Desenvolvedor Backend .NET',
          company: 'Freelance',
          description:
            'Batch .NET 10 para licitações farmacêuticas (100+ itens/licitação, Bulk Insert, JobManager) e consultoria de arquitetura com automação WhatsApp + n8n.',
        },
        {
          period: 'jul 2023 — out 2025',
          role: 'Analista de Sistemas Pleno',
          company: 'Martins · SIMTech',
          description:
            'Modernização .NET 2.0 → 6+ (+50% velocidade), Oracle −60% CPU, integrações financeiras (Tribanco), CI/CD Azure DevOps, RabbitMQ + Azure Blob.',
        },
        {
          period: 'dez 2021 — jul 2023',
          role: 'Analista de Sistemas Júnior',
          company: 'Martins · SIMTech',
          description:
            'Batch de rastreamento via API dos Correios (menos chamados de suporte), otimização de Scrum e manutenção de APIs no fluxo ágil.',
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
            'Webhook GitHub → n8n → Ollama como revisor de PR. Descontinuado com base em avaliação crítica vs. CodeQL/CodeCov.',
          linkLabel: 'estudo de caso ↗',
          linkUrl: LINKS.linkedin,
        },
      ],
    },
    contact: {
      titleLine1: 'Pronto para o',
      titleLine2: 'primeiro sprint.',
      text: 'Modernização de legado, otimização de banco ou API nova — me chama e a gente conversa sobre o seu desafio.',
    },
  },
  en: {
    nav: { stack: 'Stack', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    hero: {
      kicker: '// backend developer',
      titlePre: "Hi, I'm Leonardo — I turn ",
      titleHighlight: 'legacy .NET',
      titlePost: ' into modern platforms.',
      description:
        '4+ years in C#/.NET, specialized in modernizing critical systems and optimizing transactional databases for retail and finance.',
      ctaPrimary: 'Get in touch →',
      ctaSecondary: 'See projects',
      statusTitle: 'Available now',
      statusText: 'Open to new opportunities.',
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
          label: '// databases',
          skills: ['SQL Server', 'Oracle', 'PostgreSQL', 'T-SQL / PL-SQL'],
        },
        {
          label: '// architecture & practices',
          skills: ['Clean Architecture', 'DDD', 'Automated testing', 'Scrum / Agile', 'ETL'],
        },
        {
          label: '// integrations',
          skills: ['REST APIs', 'FTPS', 'Acquiring / financial', 'Correios API'],
        },
        {
          label: '// messaging & distributed',
          skills: ['RabbitMQ', 'Apache Kafka', 'Azure Blob Storage'],
        },
        {
          label: '// cloud & devops',
          skills: ['Azure DevOps', 'Docker', 'AWS (S3, ECS, Lambda)', 'CI/CD'],
        },
        {
          label: '// observability & quality',
          skills: ['Datadog', 'ELK Stack', 'SonarQube', 'CodeQL', 'xUnit'],
        },
        {
          label: '// automation & AI',
          skills: ['n8n', 'Ollama (local LLMs)', 'GitHub Copilot', 'Claude Code'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          period: 'nov 2025 — present',
          role: '.NET Backend Developer',
          company: 'Freelance',
          description:
            '.NET 10 batch for pharmaceutical bidding (100+ items per bid, Bulk Insert, JobManager) and architecture consulting with WhatsApp + n8n automation.',
        },
        {
          period: 'jul 2023 — oct 2025',
          role: 'Mid-level Systems Analyst',
          company: 'Martins · SIMTech',
          description:
            '.NET 2.0 → 6+ modernization (+50% throughput), Oracle −60% CPU, financial integrations (Tribanco), Azure DevOps CI/CD, RabbitMQ + Azure Blob.',
        },
        {
          period: 'dec 2021 — jul 2023',
          role: 'Junior Systems Analyst',
          company: 'Martins · SIMTech',
          description:
            'Package-tracking batch on the Correios API (fewer support tickets), Scrum optimization and API maintenance in the agile flow.',
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
            'GitHub webhook → n8n → Ollama as a PR reviewer. Discontinued after a critical evaluation vs. CodeQL/CodeCov.',
          linkLabel: 'case study ↗',
          linkUrl: LINKS.linkedin,
        },
      ],
    },
    contact: {
      titleLine1: 'Ready for the',
      titleLine2: 'first sprint.',
      text: "Legacy modernization, database tuning or a brand-new API — reach out and let's talk about your challenge.",
    },
  },
};
