import { InjectionToken } from '@angular/core';
import { DashboardSummary, DiscardReason, Job, Stage } from '../funnel.models';
import { createSampleJobs, createSampleSummary } from './sample-data';

/** Contrato com o backend do funil. A tela é a mesma para o dono e para a demonstração. */
export interface FunnelApi {
  getJobs(): Promise<Job[]>;
  getSummary(): Promise<DashboardSummary>;
  moveJob(id: number, stage: Stage, reason?: DiscardReason): Promise<void>;
  saveNotes(id: number, notes: string): Promise<void>;
}

/**
 * Modo demonstração: serve o conjunto de exemplo e aceita as alterações só na
 * memória da página. Recarregar volta ao estado inicial.
 */
export class DemoFunnelApi implements FunnelApi {
  getJobs(): Promise<Job[]> {
    return Promise.resolve(createSampleJobs());
  }

  getSummary(): Promise<DashboardSummary> {
    return Promise.resolve(createSampleSummary());
  }

  moveJob(): Promise<void> {
    return Promise.resolve();
  }

  saveNotes(): Promise<void> {
    return Promise.resolve();
  }
}

export const FUNNEL_API = new InjectionToken<FunnelApi>('FunnelApi', {
  providedIn: 'root',
  factory: () => new DemoFunnelApi(),
});
