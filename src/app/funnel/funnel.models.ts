export const STAGES = ['new', 'toApply', 'applied', 'interview', 'offer', 'discarded'] as const;
export type Stage = (typeof STAGES)[number];

export const DISCARD_REASONS = [
  'notInterested',
  'companyRejected',
  'noResponse',
  'positionClosed',
  'declinedOffer',
] as const;
export type DiscardReason = (typeof DISCARD_REASONS)[number];

/** Como a vaga entrou no funil. */
export type Origin = 'automatedSearch' | 'emailAlert' | 'manual';

export type InterviewKind = 'technical' | 'culture' | 'hr';

export const COVERAGE_LEVELS = ['has', 'partial', 'toConfirm', 'gap'] as const;
export type CoverageLevel = (typeof COVERAGE_LEVELS)[number];

export interface StageTransition {
  stage: Stage;
  /** ISO 8601 */
  at: string;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  url: string;
  /** Nota de 0 a 100 dada pela rotina do Claude. */
  fit: number;
  fitReason: string;
  /** Onde a vaga foi encontrada (LinkedIn, Gupy, indicação...). */
  channel: string;
  origin: Origin;
  requiredTerms: string[];
  niceToHaveTerms: string[];
  stage: Stage;
  /** Transições em ordem cronológica; a última é o status atual. */
  history: StageTransition[];
  discardReason?: DiscardReason;
  nextInterview?: { kind: InterviewKind; at: string };
  notes: string;
}

export interface StageConversion {
  stage: Exclude<Stage, 'discarded'>;
  reached: number;
  /** Média de dias na etapa; ausente na última. */
  avgDays?: number;
}

export interface ChannelResponse {
  channel: string;
  /** 0 a 1 */
  rate: number;
  applied: number;
}

export interface DailyNewJobs {
  /** AAAA-MM-DD */
  date: string;
  automatedSearch: number;
  emailAlert: number;
  manual: number;
}

export interface TermCoverage {
  term: string;
  level: CoverageLevel;
}

/** Projeções prontas entregues pelo serviço Painel. */
export interface DashboardSummary {
  updatedAt: string;
  lastRun: { at: string; newJobs: number; pendingTerms: number };
  applications30d: number;
  applicationsDelta: number;
  /** Aplicadas há mais de 14 dias que tiveram retorno, de 0 a 1. */
  responseRate: number;
  conversion: StageConversion[];
  responseByChannel: ChannelResponse[];
  fit: { advanced: number; discarded: number };
  newPerDay: DailyNewJobs[];
  coverage: TermCoverage[];
  reminders: { returnDays: number; nextEmailAt: string };
}
