import { TestBed } from '@angular/core/testing';
import { FunnelStore, daysInStage } from './funnel-store';
import { Job } from '../funnel.models';

describe('FunnelStore', () => {
  let store: FunnelStore;

  beforeEach(async () => {
    store = TestBed.inject(FunnelStore);
    await store.load();
  });

  it('loads the sample jobs and summary in demo mode', () => {
    expect(store.jobs().length).toBeGreaterThan(0);
    expect(store.summary()).not.toBeNull();
  });

  it('moves a job and records the transition', async () => {
    const job = store.jobs().find((j) => j.stage === 'new')!;
    await store.move(job.id, 'toApply');

    const moved = store.jobs().find((j) => j.id === job.id)!;
    expect(moved.stage).toBe('toApply');
    expect(moved.history.at(-1)?.stage).toBe('toApply');
    expect(moved.history.length).toBe(job.history.length + 1);
  });

  it('requires a reason to discard', async () => {
    const job = store.jobs().find((j) => j.stage === 'new')!;
    await expect(store.move(job.id, 'discarded')).rejects.toThrow();

    await store.move(job.id, 'discarded', 'notInterested');
    const discarded = store.jobs().find((j) => j.id === job.id)!;
    expect(discarded.stage).toBe('discarded');
    expect(discarded.discardReason).toBe('notInterested');
  });

  it('flags applied jobs past the return deadline as late', () => {
    const late = store.lateJobs();
    expect(late.length).toBeGreaterThan(0);
    for (const job of late) {
      expect(job.stage).toBe('applied');
      expect(daysInStage(job)).toBeGreaterThan(store.returnDays());
    }
  });

  it('saves notes', async () => {
    const job = store.jobs()[0];
    await store.saveNotes(job.id, 'Falar com a recrutadora');
    expect(store.jobs()[0].notes).toBe('Falar com a recrutadora');
  });
});

describe('daysInStage', () => {
  it('counts whole days since the last transition', () => {
    const now = Date.parse('2026-11-16T12:00:00Z');
    const job = { history: [{ stage: 'applied', at: '2026-11-06T09:00:00Z' }] } as Job;
    expect(daysInStage(job, now)).toBe(10);
  });
});
