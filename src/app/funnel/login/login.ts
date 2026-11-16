import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectFunnelText } from '../funnel.i18n';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  template: `
    <main class="wrap">
      <section class="card login">
        <span class="mono-kicker">{{ t().login.kicker }}</span>
        <h1>{{ t().login.title }}</h1>
        <p>{{ t().login.text }}</p>
        <button type="button" class="btn btn-primary" disabled aria-describedby="login-note">
          {{ t().login.cognito }}
        </button>
        <p class="note" id="login-note">{{ t().login.unavailable }}</p>
        <div class="sep">{{ t().login.or }}</div>
        <a class="btn btn-ghost" routerLink="/funnel/dashboard">{{ t().login.demo }}</a>
        <p class="fine">{{ t().login.fine }}</p>
      </section>
    </main>
  `,
  styles: `
    .wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: calc(100dvh - 70px);
      padding: 40px 18px;
    }
    .login {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: min(420px, 100%);
      padding: 36px;
    }
    h1 {
      margin: 0;
      font-family: var(--font-heading);
      font-size: 28px;
      letter-spacing: -0.8px;
    }
    p {
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
      color: var(--text-muted);
    }
    .btn {
      padding: 14px;
    }
    .note {
      margin-top: -6px;
      font-size: 12px;
      color: var(--text-faint);
    }
    .sep {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--text-faint);
    }
    .sep::before,
    .sep::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--border);
    }
    .fine {
      font-family: var(--font-mono);
      font-size: 10.5px;
      color: var(--text-faint);
    }
  `,
})
export class Login {
  protected readonly t = injectFunnelText();
}
