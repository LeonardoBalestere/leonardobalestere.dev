import { DashboardSummary, Job, Stage, StageTransition } from '../funnel.models';

/**
 * Conjunto fictício servido no modo demonstração. Empresas e vagas são
 * inventadas; as datas são relativas ao momento em que a página abre.
 */

function daysAgo(days: number, hour = 9, minute = 0): string {
  const date = new Date();
  date.setDate(date.getDate() - days);
  date.setHours(hour, minute, 0, 0);
  return date.toISOString();
}

function daysAhead(days: number, hour: number): string {
  return daysAgo(-days, hour);
}

/** Monta o histórico a partir de pares [etapa, dias atrás]. */
function path(...steps: [Stage, number][]): StageTransition[] {
  return steps.map(([stage, days], i) => ({ stage, at: daysAgo(days, i === 0 ? 7 : 10 + i, 33) }));
}

type JobSeed = Omit<Job, 'stage' | 'notes' | 'url' | 'location'> &
  Partial<Pick<Job, 'notes' | 'location'>>;

function job(seed: JobSeed): Job {
  return {
    location: 'Remoto',
    notes: '',
    url: 'https://example.com/vaga/' + seed.id,
    ...seed,
    stage: seed.history[seed.history.length - 1].stage,
  };
}

export function createSampleJobs(): Job[] {
  return [
    job({
      id: 101,
      title: 'Desenvolvedor .NET Pleno',
      company: 'Nuvem Pagamentos',
      fit: 88,
      fitReason:
        'Stack principal bate com o CV (.NET, SQL Server). Azure aparece como diferencial e está como parcial.',
      channel: 'LinkedIn',
      origin: 'automatedSearch',
      requiredTerms: ['.NET', 'SQL Server'],
      niceToHaveTerms: ['Azure'],
      history: path(['new', 0]),
    }),
    job({
      id: 102,
      title: 'Backend C# Sênior',
      company: 'Órbita Saúde',
      fit: 74,
      fitReason: 'ASP.NET Core e mensageria batem. Pede Docker em produção, que ainda é lacuna.',
      channel: 'Gupy',
      origin: 'automatedSearch',
      requiredTerms: ['ASP.NET Core', 'RabbitMQ'],
      niceToHaveTerms: ['Docker'],
      history: path(['new', 0]),
    }),
    job({
      id: 103,
      title: 'Engenheiro de Software .NET',
      company: 'Trilha Logística',
      fit: 61,
      fitReason: '.NET bate, mas Kubernetes e Kafka são obrigatórios e estão como lacuna.',
      channel: 'Himalayas',
      origin: 'emailAlert',
      requiredTerms: ['.NET', 'Kubernetes'],
      niceToHaveTerms: ['Kafka'],
      history: path(['new', 1]),
    }),
    job({
      id: 104,
      title: 'Full Stack .NET / Angular',
      company: 'Cerrado Agro Tech',
      fit: 82,
      fitReason: 'Angular e EF Core batem. Vaga remota com sede em Uberlândia.',
      channel: 'Programathor',
      origin: 'automatedSearch',
      requiredTerms: ['Angular', 'EF Core'],
      niceToHaveTerms: ['SQL Server'],
      history: path(['new', 1]),
    }),
    job({
      id: 105,
      title: 'Desenvolvedor C# Pleno',
      company: 'Banco Ipê Digital',
      fit: 91,
      fitReason: 'Microsserviços em .NET na AWS; quase todos os obrigatórios estão no CV.',
      channel: 'LinkedIn',
      origin: 'automatedSearch',
      requiredTerms: ['.NET', 'Microsserviços'],
      niceToHaveTerms: ['AWS'],
      history: path(['new', 4], ['toApply', 2]),
    }),
    job({
      id: 106,
      title: 'Dev Backend .NET',
      company: 'Lume Educação',
      fit: 69,
      fitReason: 'Dapper e SQL Server batem; o restante da descrição é genérico.',
      channel: 'InfoJobs',
      origin: 'manual',
      requiredTerms: ['Dapper', 'SQL Server'],
      niceToHaveTerms: [],
      history: path(['new', 5], ['toApply', 3]),
    }),
    job({
      id: 107,
      title: 'Software Engineer (.NET)',
      company: 'Atlas Seguros',
      fit: 85,
      fitReason: '.NET, Azure e CI/CD batem. Inglês intermediário pedido.',
      channel: 'LinkedIn',
      origin: 'automatedSearch',
      requiredTerms: ['.NET', 'Azure'],
      niceToHaveTerms: ['CI/CD'],
      history: path(['new', 15], ['toApply', 13], ['applied', 11]),
    }),
    job({
      id: 108,
      title: 'Desenvolvedor .NET Sênior',
      company: 'Pátio Varejo',
      fit: 78,
      fitReason: 'CQRS e MongoDB aparecem como obrigatórios; CQRS está como lacuna.',
      channel: 'Gupy',
      origin: 'emailAlert',
      requiredTerms: ['CQRS', 'MongoDB'],
      niceToHaveTerms: [],
      history: path(['new', 12], ['applied', 9]),
    }),
    job({
      id: 109,
      title: 'Backend Engineer',
      company: 'Faro Analytics',
      fit: 72,
      fitReason: '.NET e Redis batem; gRPC é diferencial.',
      channel: 'Himalayas',
      origin: 'automatedSearch',
      requiredTerms: ['.NET', 'Redis'],
      niceToHaveTerms: ['gRPC'],
      history: path(['new', 10], ['toApply', 9], ['applied', 8]),
    }),
    job({
      id: 110,
      title: 'Dev .NET Pleno',
      company: 'Vila Condomínios',
      fit: 66,
      fitReason: 'Indicação de ex-colega. Stack clássica de ASP.NET Core com SQL Server.',
      channel: 'Indicação',
      origin: 'manual',
      requiredTerms: ['ASP.NET Core', 'SQL Server'],
      niceToHaveTerms: [],
      history: path(['new', 4], ['applied', 3]),
    }),
    job({
      id: 111,
      title: 'Desenvolvedor .NET Pleno',
      company: 'Rota Fretes',
      fit: 89,
      fitReason: 'Mensageria com RabbitMQ e Docker; contato veio de recrutadora.',
      channel: 'Recrutador',
      origin: 'manual',
      requiredTerms: ['.NET', 'RabbitMQ'],
      niceToHaveTerms: ['Docker'],
      history: path(['new', 14], ['applied', 12], ['interview', 4]),
      nextInterview: { kind: 'technical', at: daysAhead(3, 14) },
      notes: 'Recrutadora: Ana. Faixa salarial informada na primeira conversa.',
    }),
    job({
      id: 112,
      title: 'Engenheiro Backend C#',
      company: 'Selo Fintech',
      fit: 83,
      fitReason: 'Microsserviços em AWS; pede experiência com filas.',
      channel: 'LinkedIn',
      origin: 'automatedSearch',
      requiredTerms: ['Microsserviços', 'AWS'],
      niceToHaveTerms: [],
      history: path(['new', 20], ['toApply', 18], ['applied', 16], ['interview', 6]),
      nextInterview: { kind: 'culture', at: daysAhead(1, 10) },
    }),
    job({
      id: 113,
      title: 'Desenvolvedor .NET Sênior',
      company: 'Quadra Imóveis',
      fit: 80,
      fitReason: '.NET com Angular no front; time pequeno.',
      channel: 'Gupy',
      origin: 'automatedSearch',
      requiredTerms: ['.NET', 'Angular'],
      niceToHaveTerms: [],
      history: path(['new', 30], ['applied', 27], ['interview', 15], ['offer', 2]),
    }),
    job({
      id: 114,
      title: 'Dev .NET (presencial SP)',
      company: 'Grupo Torre',
      fit: 42,
      fitReason: 'Presencial em São Paulo e legado em VB.NET.',
      channel: 'InfoJobs',
      origin: 'automatedSearch',
      requiredTerms: ['VB.NET', 'WebForms'],
      niceToHaveTerms: [],
      history: path(['new', 6], ['discarded', 5]),
      discardReason: 'notInterested',
    }),
    job({
      id: 115,
      title: 'Backend Java/.NET',
      company: 'Delta Telecom',
      fit: 55,
      fitReason: 'Metade da vaga é Java; Kafka obrigatório.',
      channel: 'LinkedIn',
      origin: 'automatedSearch',
      requiredTerms: ['Java', 'Kafka'],
      niceToHaveTerms: [],
      history: path(['new', 25], ['applied', 22], ['discarded', 15]),
      discardReason: 'companyRejected',
    }),
  ];
}

export function createSampleSummary(): DashboardSummary {
  const perDay = [6, 9, 4, 11, 7, 3, 2, 8, 12, 5, 9, 6, 4, 9];
  const nextMonday = new Date();
  nextMonday.setDate(nextMonday.getDate() + ((8 - nextMonday.getDay()) % 7 || 7));
  nextMonday.setHours(8, 0, 0, 0);

  return {
    updatedAt: daysAgo(0, new Date().getHours(), Math.max(new Date().getMinutes() - 2, 0)),
    lastRun: { at: daysAgo(0, 7, 41), newJobs: 9, pendingTerms: 2 },
    applications30d: 31,
    applicationsDelta: 6,
    responseRate: 0.23,
    conversion: [
      { stage: 'new', reached: 128, avgDays: 1.2 },
      { stage: 'toApply', reached: 46, avgDays: 2.8 },
      { stage: 'applied', reached: 31, avgDays: 9.4 },
      { stage: 'interview', reached: 7, avgDays: 6.1 },
      { stage: 'offer', reached: 1 },
    ],
    responseByChannel: [
      { channel: 'Indicação', rate: 0.67, applied: 3 },
      { channel: 'Recrutador', rate: 0.5, applied: 4 },
      { channel: 'LinkedIn', rate: 0.25, applied: 12 },
      { channel: 'Gupy', rate: 0.18, applied: 11 },
      { channel: 'Himalayas', rate: 0.11, applied: 9 },
      { channel: 'InfoJobs', rate: 0, applied: 4 },
    ],
    fit: { advanced: 84, discarded: 63 },
    newPerDay: perDay.map((total, i) => {
      const emailAlert = Math.round(total * 0.25);
      const manual = i % 4 === 0 ? 1 : 0;
      return {
        date: daysAgo(perDay.length - 1 - i).slice(0, 10),
        automatedSearch: total - emailAlert - manual,
        emailAlert,
        manual,
      };
    }),
    coverage: [
      { term: '.NET moderno', level: 'partial' },
      { term: 'CI/CD', level: 'has' },
      { term: 'SQL Server', level: 'has' },
      { term: 'Azure', level: 'partial' },
      { term: 'Mensageria', level: 'partial' },
      { term: 'Agile', level: 'toConfirm' },
      { term: 'Code review', level: 'toConfirm' },
      { term: 'Docker', level: 'gap' },
      { term: 'AWS', level: 'partial' },
      { term: 'React', level: 'partial' },
      { term: 'Testes automatizados', level: 'has' },
      { term: 'Inglês', level: 'toConfirm' },
      { term: 'Sistemas distribuídos', level: 'partial' },
      { term: 'Integrações', level: 'has' },
      { term: 'EF Core', level: 'partial' },
      { term: 'Observabilidade', level: 'partial' },
      { term: 'ASP.NET Core', level: 'has' },
      { term: 'Testes unitários', level: 'has' },
      { term: 'JWT/OAuth', level: 'gap' },
      { term: 'MongoDB', level: 'gap' },
    ],
    reminders: { returnDays: 7, nextEmailAt: nextMonday.toISOString() },
  };
}
