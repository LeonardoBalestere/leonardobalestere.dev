import {
  Component,
  ElementRef,
  afterNextRender,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { DISCARD_REASONS, DiscardReason, Job } from '../funnel.models';
import { injectFunnelText } from '../funnel.i18n';

/** Pede o motivo obrigatório antes de descartar uma vaga. */
@Component({
  selector: 'app-discard-dialog',
  template: `
    <dialog #dialog class="card" (close)="onClose()" aria-labelledby="discard-title">
      <form method="dialog" (submit)="confirm($event)">
        <h3 id="discard-title">{{ t().discard.title }}</h3>
        <p>{{ job().title }} · {{ job().company }}</p>
        <fieldset>
          <legend class="sr-only">{{ t().discard.title }}</legend>
          @for (reason of reasons; track reason) {
            <label [class.checked]="selected() === reason">
              <input type="radio" name="reason" [value]="reason" (change)="selected.set(reason)" />
              {{ t().reasons[reason] }}
            </label>
          }
        </fieldset>
        <div class="actions">
          <button type="button" class="btn btn-ghost btn-sm" (click)="dialog.close()">
            {{ t().discard.cancel }}
          </button>
          <button type="submit" class="btn btn-primary btn-sm" [disabled]="!selected()">
            {{ t().discard.confirm }}
          </button>
        </div>
      </form>
    </dialog>
  `,
  styles: `
    dialog {
      width: min(420px, 92vw);
      padding: 26px;
      color: var(--text);
    }
    dialog::backdrop {
      background: rgba(0, 0, 0, 0.5);
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    h3 {
      margin: 0;
      font-family: var(--font-heading);
      font-size: 19px;
    }
    p {
      margin: 0;
      font-size: 13px;
      color: var(--text-muted);
    }
    fieldset {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin: 0;
      padding: 0;
      border: 0;
    }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
    }
    label {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border: 1px solid var(--border);
      border-radius: 10px;
      font-size: 13px;
      cursor: pointer;
    }
    label.checked {
      border-color: var(--purple);
      background: color-mix(in srgb, var(--purple) 8%, transparent);
    }
    input {
      accent-color: var(--purple);
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
  `,
})
export class DiscardDialog {
  readonly job = input.required<Job>();
  readonly confirmed = output<DiscardReason>();
  readonly cancelled = output<void>();

  protected readonly t = injectFunnelText();
  protected readonly reasons = DISCARD_REASONS;
  protected readonly selected = signal<DiscardReason | null>(null);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private done = false;

  constructor() {
    afterNextRender(() => this.dialog().nativeElement.showModal());
  }

  protected confirm(event: Event): void {
    const reason = this.selected();
    if (!reason) {
      event.preventDefault();
      return;
    }
    this.done = true;
    this.confirmed.emit(reason);
  }

  protected onClose(): void {
    if (!this.done) this.cancelled.emit();
  }
}
