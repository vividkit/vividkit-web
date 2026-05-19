import type Alpine from 'alpinejs';

type AuthAction = 'raffle_status' | 'raffle_verify_order' | 'raffle_register' | 'raffle_claim_prize';

type DrawState =
  | 'loading'
  | 'ready'
  | 'needs_claim'
  | 'needs_payment'
  | 'pending_order'
  | 'pending_approval'
  | 'verifying_order'
  | 'eligible'
  | 'registering'
  | 'registered'
  | 'draw_pending'
  | 'winner_revealed'
  | 'claiming_prize'
  | 'proof_ready'
  | 'claim_expired'
  | 'before_open'
  | 'closed'
  | 'error';

type DevScenario =
  | DrawState
  | 'invalid_order'
  | 'many_pool_users'
  | 'public_results'
  | 'rate_limited';

type SeatBudget = { standard: number; premium: number; total: number };

const emptyBudget: SeatBudget = { standard: 0, premium: 0, total: 0 };

function isoFromNow(hours: number): string {
  return new Date(Date.now() + hours * 60 * 60 * 1000).toISOString();
}

function normalizeApiBase(value: string): string {
  return value.replace(/\/$/, '');
}

function formatDateTime(value: string | undefined): string {
  if (!value) return '--';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '--';
  return new Intl.DateTimeFormat(document.documentElement.lang || undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(date);
}

function formatTimeOnly(value: string | undefined): string {
  if (!value) return '--';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '--';
  return new Intl.DateTimeFormat(document.documentElement.lang || undefined, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

function formatDateWithZone(value: string | undefined): string {
  if (!value) return '--';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '--';
  return new Intl.DateTimeFormat(document.documentElement.lang || undefined, {
    month: 'short',
    day: 'numeric',
    timeZoneName: 'short',
  }).format(date);
}

export function registerScheduledDrawState(activeAlpine: typeof Alpine) {
  if ((activeAlpine as any).__dealScheduledDrawRegistered) return;
  (activeAlpine as any).__dealScheduledDrawRegistered = true;

  activeAlpine.data('scheduledDrawWidget', () => ({
    state: 'loading' as DrawState,
    API_BASE: '',
    TURNSTILE_KEY: '',
    DEV_MODE: false,
    MSG_ERROR: '',
    MSG_RATE_LIMITED: '',
    seatBudget: { ...emptyBudget },
    orderRef: '',
    errorMessage: '',
    orderErrorMessage: '',
    sessionToken: '',
    authWindow: null as Window | null,
    schedule: null as any,
    publicResults: [] as any[],
    poolEntries: [] as any[],
    privateWinner: null as any,
    proof: null as any,

    async init() {
      const el = document.querySelector('[data-deals-raffle-widget]') as HTMLElement | null;
      const claim = document.querySelector('[data-deals-claim-widget]') as HTMLElement | null;
      this.API_BASE = normalizeApiBase(el?.dataset.apiUrl || claim?.dataset.apiUrl || '');
      this.TURNSTILE_KEY = el?.dataset.turnstileKey || claim?.dataset.turnstileKey || '';
      this.DEV_MODE = el?.dataset.devMode === 'true';
      this.MSG_ERROR = el?.dataset.msgError || '';
      this.MSG_RATE_LIMITED = el?.dataset.msgRateLimited || '';
      this.sessionToken = sessionStorage.getItem('raffle_session_token') || '';

      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const action = params.get('vk_action') as AuthAction | null;
      const nonce = params.get('vk_nonce');
      if (code && action?.startsWith('raffle_')) {
        if (window.opener && window.opener !== window) {
          window.opener.postMessage({ source: 'vividkit-raffle-oauth', action, code, nonce }, window.location.origin);
          window.close();
          return;
        }
        history.replaceState(null, '', `${window.location.pathname}#lucky-draw`);
        await this.completeOAuthAction(action, code, nonce);
        return;
      }

      window.addEventListener('message', (event) => {
        if (event.origin !== window.location.origin) return;
        if (this.authWindow && event.source !== this.authWindow) return;
        const data = event.data as { source?: string; action?: AuthAction; code?: string; nonce?: string | null };
        if (data?.source !== 'vividkit-raffle-oauth' || !data.action || !data.code) return;
        this.authWindow?.close();
        this.completeOAuthAction(data.action, data.code, data.nonce || null);
      });

      await this.loadConfig();
    },

    scheduleText(field: string) {
      return formatDateTime(this.schedule?.[field]);
    },

    scheduleTime(field: string) {
      return formatTimeOnly(this.schedule?.[field]);
    },

    scheduleDate(field: string) {
      return formatDateWithZone(this.schedule?.[field]);
    },

    async loadConfig() {
      this.state = 'loading';
      try {
        const res = await fetch(`${this.API_BASE}/raffle/config`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        this.schedule = await res.json();
        this.seatBudget = this.schedule.seat_budget || this.schedule.remaining || emptyBudget;
        await this.loadPublicResults();
        await this.loadPoolEntries();
        if (this.sessionToken) {
          await this.postStatus();
          return;
        }
        this.state = this.initialStateFromPhase();
      } catch {
        this.state = 'error';
        this.errorMessage = this.MSG_ERROR;
      }
    },

    initialStateFromPhase(): DrawState {
      if (this.schedule?.phase === 'before_open') return 'before_open';
      if (this.schedule?.phase === 'inactive') return 'closed';
      if (this.schedule?.phase === 'registration_closed' || this.schedule?.phase === 'draw_ready') return 'draw_pending';
      return 'ready';
    },

    async loadPublicResults() {
      try {
        const res = await fetch(`${this.API_BASE}/raffle/results`);
        if (!res.ok) return;
        const data = await res.json();
        this.publicResults = Array.isArray(data.results) ? data.results : [];
      } catch {
        this.publicResults = [];
      }
    },

    normalizePoolEntries(data: any) {
      const source = Array.isArray(data?.entries)
        ? data.entries
        : Array.isArray(data?.participants)
          ? data.participants
          : Array.isArray(data?.registrations)
            ? data.registrations
            : Array.isArray(data?.pool)
              ? data.pool
              : [];
      return source
        .map((entry: any, index: number) => ({
          id: entry.id || entry.github_id || entry.github_username || entry.username || `entry-${index}`,
          github_username: entry.github_username || entry.username || entry.github_login || entry.github || '',
          github_id: entry.github_id || '',
          approval_status: entry.approval_status || entry.status || (entry.qualified ? 'qualified' : ''),
          status: entry.status || '',
        }))
        .filter((entry: any) => entry.github_username || entry.github_id);
    },

    async loadPoolEntries() {
      try {
        const res = await fetch(`${this.API_BASE}/raffle/pool`);
        if (!res.ok) return;
        const data = await res.json();
        this.poolEntries = this.normalizePoolEntries(data);
      } catch {
        this.poolEntries = [];
      }
    },

    poolEntryName(entry: any) {
      return entry?.github_username ? `@${entry.github_username}` : entry?.github_id ? `GitHub ${entry.github_id}` : '--';
    },

    poolEntryStatusLabel(entry: any) {
      return entry?.approval_status === 'pending_approval' || entry?.status === 'pending_approval'
        ? (document.documentElement.lang === 'vi' ? 'chờ approve' : 'pending approval')
        : (document.documentElement.lang === 'vi' ? 'qualified' : 'qualified');
    },

    openAuthWindow() {
      if (this.authWindow && !this.authWindow.closed) return this.authWindow;
      this.authWindow = window.open('about:blank', 'vividkit-raffle-oauth', 'popup,width=520,height=720');
      return this.authWindow;
    },

    startOAuth(action: AuthAction) {
      const nonce = crypto.randomUUID();
      sessionStorage.setItem(`oauth_nonce:${action}`, nonce);
      const redirectUri = encodeURIComponent(`${window.location.origin}${window.location.pathname}`);
      const authUrl = `${this.API_BASE}/auth/github?redirect_uri=${redirectUri}&vk_action=${action}&vk_nonce=${encodeURIComponent(nonce)}`;
      const popup = this.openAuthWindow();
      if (!popup) {
        sessionStorage.removeItem(`oauth_nonce:${action}`);
        this.state = 'error';
        this.errorMessage = this.MSG_ERROR;
        return;
      }
      popup.location.href = authUrl;
      popup.focus();
    },

    async completeOAuthAction(action: AuthAction, oauthCode: string, nonce: string | null) {
      const expectedNonce = sessionStorage.getItem(`oauth_nonce:${action}`);
      sessionStorage.removeItem(`oauth_nonce:${action}`);
      if (!nonce || expectedNonce !== nonce) {
        this.state = 'error';
        this.errorMessage = this.MSG_ERROR;
        return;
      }
      if (action === 'raffle_status') return this.postStatus(oauthCode);
      if (action === 'raffle_verify_order') return this.postVerify(oauthCode);
      if (action === 'raffle_register') return this.postRegister(oauthCode);
      if (action === 'raffle_claim_prize') return this.postClaimPrize(oauthCode);
    },

    startVerify() {
      if (!this.orderRef.trim()) return;
      this.orderErrorMessage = '';
      sessionStorage.setItem('raffle_pending_order_ref', this.orderRef.trim());
      this.state = 'verifying_order';
      this.renderTurnstile('raffle_verify_order');
    },

    startRegister() {
      this.state = 'registering';
      this.renderTurnstile('raffle_register');
    },

    startClaimPrize() {
      this.state = 'claiming_prize';
      this.renderTurnstile('raffle_claim_prize');
    },

    renderTurnstile(action: AuthAction) {
      const container = document.getElementById('raffle-turnstile-container');
      if (!container) {
        this.state = 'error';
        this.errorMessage = this.MSG_ERROR;
        return;
      }
      if (!document.getElementById('cf-turnstile-script')) {
        const script = document.createElement('script');
        script.id = 'cf-turnstile-script';
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
      const tryRender = () => {
        if (typeof (window as any).turnstile === 'undefined') {
          setTimeout(tryRender, 200);
          return;
        }
        container.classList.remove('hidden');
        (window as any).turnstile.render(container, {
          sitekey: this.TURNSTILE_KEY,
          size: 'invisible',
          callback: (token: string) => {
            container.classList.add('hidden');
            sessionStorage.setItem(`turnstile_token:${action}`, token);
            if (this.sessionToken && action !== 'raffle_status') {
              this.completeSessionAction(action);
            } else {
              this.startOAuth(action);
            }
          },
          'error-callback': () => {
            this.state = 'error';
            this.errorMessage = this.MSG_ERROR;
          },
        });
        (window as any).turnstile.execute(container);
      };
      tryRender();
    },

    async completeSessionAction(action: AuthAction) {
      if (action === 'raffle_verify_order') return this.postVerify();
      if (action === 'raffle_register') return this.postRegister();
      if (action === 'raffle_claim_prize') return this.postClaimPrize();
    },

    applyStatus(data: any) {
      this.seatBudget = data.seat_budget || data.remaining || this.seatBudget;
      if (data.pool_entries || data.participants || data.registrations || data.pool) {
        this.poolEntries = this.normalizePoolEntries(data);
      }
      this.privateWinner = data.scheduled_winner || null;
      this.proof = data.proof || null;
      if (data.session_token) {
        this.sessionToken = data.session_token;
        sessionStorage.setItem('raffle_session_token', data.session_token);
      }
      if (this.proof) this.state = 'proof_ready';
      else if (this.privateWinner?.fulfillment_status === 'rolled_over') this.state = 'claim_expired';
      else if (this.privateWinner) this.state = 'winner_revealed';
      else if (data.registration?.approval_status === 'pending_approval') this.state = 'pending_approval';
      else if (data.registration) this.state = data.phase === 'draw_ready' ? 'draw_pending' : 'registered';
      else if (!data.claimed) this.state = 'needs_claim';
      else if (data.pending_order) this.state = 'pending_order';
      else if (!data.bound) this.state = 'needs_payment';
      else if (data.qualified) this.state = data.phase === 'registration_open' ? 'eligible' : 'draw_pending';
      else this.state = this.initialStateFromPhase();
    },

    applyDevScenario(scenario: DevScenario) {
      if (!this.DEV_MODE) return;

      const schedule = {
        phase: 'registration_open',
        registration_open_at: isoFromNow(-2),
        registration_cutoff_at: isoFromNow(4),
        draw_at: isoFromNow(5),
        claim_deadline_at: isoFromNow(29),
      };
      const winner = {
        prize_tier: 'Premium',
        github_username: 'dev-winner',
        claim_deadline_at: isoFromNow(24),
        fulfillment_status: 'pending_claim',
      };
      const proof = {
        prize_tier: 'Premium',
        order_ref: 'CK-ORDER-DEV-0001',
        github_username: 'dev-winner',
        claim_deadline_at: isoFromNow(24),
      };

      this.schedule = { ...schedule };
      this.seatBudget = { standard: 12, premium: 3, total: 15 };
      this.publicResults = [];
      this.poolEntries = [
        { id: 'pool-1', github_username: 'kai-dev', approval_status: 'qualified' },
        { id: 'pool-2', github_username: 'thieunv-dev', approval_status: 'qualified' },
        { id: 'pool-3', github_username: 'pending-dev', approval_status: 'pending_approval' },
      ];
      this.privateWinner = null;
      this.proof = null;
      this.errorMessage = '';
      this.orderErrorMessage = '';
      this.orderRef = 'CK-ORDER-DEV-0001';

      if (scenario === 'before_open') {
        this.schedule = {
          ...schedule,
          phase: 'before_open',
          registration_open_at: isoFromNow(2),
          registration_cutoff_at: isoFromNow(8),
          draw_at: isoFromNow(9),
        };
      }

      if (scenario === 'closed') {
        this.schedule = { ...schedule, phase: 'inactive' };
      }

      if (scenario === 'draw_pending') {
        this.schedule = { ...schedule, phase: 'draw_ready', registration_cutoff_at: isoFromNow(-1), draw_at: isoFromNow(1) };
      }

      if (scenario === 'invalid_order') {
        this.orderRef = 'CK-ORDER-MISSING';
        this.orderErrorMessage = 'Order ref is not in the local paid-order allowlist.';
        this.state = 'needs_payment';
        return;
      }

      if (scenario === 'winner_revealed') {
        this.privateWinner = winner;
      }

      if (scenario === 'proof_ready') {
        this.proof = proof;
      }

      if (scenario === 'claim_expired') {
        this.privateWinner = { ...winner, fulfillment_status: 'rolled_over', claim_deadline_at: isoFromNow(-1) };
      }

      if (scenario === 'public_results') {
        this.publicResults = [
          { github_username: 'kai-dev', prize_tier: 'Standard' },
          { github_username: 'thieunv-dev', prize_tier: 'Premium' },
        ];
        this.state = 'ready';
        return;
      }

      if (scenario === 'many_pool_users') {
        this.poolEntries = Array.from({ length: 32 }, (_, index) => ({
          id: `pool-many-${index + 1}`,
          github_username: index % 6 === 0 ? `pending-dev-${index + 1}` : `qualified-dev-${index + 1}`,
          approval_status: index % 6 === 0 ? 'pending_approval' : 'qualified',
        }));
        this.state = 'ready';
        return;
      }

      if (scenario === 'error' || scenario === 'rate_limited') {
        this.errorMessage = scenario === 'rate_limited' ? this.MSG_RATE_LIMITED : this.MSG_ERROR;
        this.state = 'error';
        return;
      }

      this.state = scenario;
    },

    clearSession() {
      this.sessionToken = '';
      sessionStorage.removeItem('raffle_session_token');
    },

    async postStatus(oauthCode = '') {
      const authPayload = this.sessionToken ? { session_token: this.sessionToken } : oauthCode ? { oauth_code: oauthCode } : null;
      if (!authPayload) {
        this.state = this.initialStateFromPhase();
        return;
      }
      try {
        const res = await fetch(`${this.API_BASE}/raffle/status`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(authPayload),
        });
        const data = await res.json();
        if (!res.ok) throw data;
        this.applyStatus(data);
      } catch (err: any) {
        if (err?.error === 'session_expired') {
          this.clearSession();
          this.state = 'ready';
          return;
        }
        this.state = 'error';
        this.errorMessage = err?.error === 'rate_limited' ? this.MSG_RATE_LIMITED : this.MSG_ERROR;
      }
    },

    async postVerify(oauthCode = '') {
      const token = sessionStorage.getItem('turnstile_token:raffle_verify_order');
      const orderRef = sessionStorage.getItem('raffle_pending_order_ref') || this.orderRef;
      sessionStorage.removeItem('turnstile_token:raffle_verify_order');
      sessionStorage.removeItem('raffle_pending_order_ref');
      const authPayload = this.sessionToken ? { session_token: this.sessionToken } : { oauth_code: oauthCode };
      try {
        const res = await fetch(`${this.API_BASE}/raffle/verify-order`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...authPayload, turnstile_token: token, order_ref: orderRef }),
        });
        const data = await res.json();
        if (!res.ok) throw data;
        this.orderRef = data.order_ref || orderRef;
        this.orderErrorMessage = '';
        await this.postStatus();
      } catch (err: any) {
        if (err?.error === 'order_not_found' || err?.error === 'invalid_order_ref') {
          this.orderErrorMessage = err?.message || this.MSG_ERROR;
          this.state = 'needs_payment';
          return;
        }
        this.state = 'error';
        this.errorMessage = err?.message || this.MSG_ERROR;
      }
    },

    async postRegister(oauthCode = '') {
      const token = sessionStorage.getItem('turnstile_token:raffle_register');
      sessionStorage.removeItem('turnstile_token:raffle_register');
      const authPayload = this.sessionToken ? { session_token: this.sessionToken } : { oauth_code: oauthCode };
      try {
        const res = await fetch(`${this.API_BASE}/raffle/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...authPayload, turnstile_token: token }),
        });
        const data = await res.json();
        if (!res.ok) throw data;
        this.state = 'registered';
        await this.postStatus();
        await this.loadPoolEntries();
      } catch (err: any) {
        this.state = 'error';
        this.errorMessage = err?.message || this.MSG_ERROR;
      }
    },

    async postClaimPrize(oauthCode = '') {
      const token = sessionStorage.getItem('turnstile_token:raffle_claim_prize');
      sessionStorage.removeItem('turnstile_token:raffle_claim_prize');
      const authPayload = this.sessionToken ? { session_token: this.sessionToken } : { oauth_code: oauthCode };
      try {
        const res = await fetch(`${this.API_BASE}/raffle/claim-prize`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...authPayload, turnstile_token: token }),
        });
        const data = await res.json();
        if (!res.ok) throw data;
        this.proof = data.proof;
        this.state = 'proof_ready';
      } catch (err: any) {
        this.state = err?.error === 'claim_expired' ? 'claim_expired' : 'error';
        this.errorMessage = err?.message || this.MSG_ERROR;
      }
    },
  }));
}
