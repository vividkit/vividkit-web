import type Alpine from 'alpinejs';

type AuthAction =
  | 'raffle_status'
  | 'raffle_confirm_github_entry'
  | 'raffle_verify_order'
  | 'raffle_register'
  | 'raffle_claim_prize'
  | 'raffle_decline_prize';

type DrawState =
  | 'loading'
  | 'ready'
  | 'needs_claim'
  | 'needs_github_confirmation'
  | 'confirming_github_entry'
  | 'eligible'
  | 'decline_blocked'
  | 'registering'
  | 'registered'
  | 'draw_pending'
  | 'winner_revealed'
  | 'claiming_prize'
  | 'declining_prize'
  | 'prize_declined'
  | 'proof_ready'
  | 'claim_expired'
  | 'before_open'
  | 'closed'
  | 'error';

type DevScenario =
  | DrawState
  | 'invalid_order'
  | 'chiennb_wrong_account'
  | 'chiennb_order_bound'
  | 'chiennb_ready'
  | 'check_order'
  | 'check_order_success'
  | 'boosted_eligible'
  | 'decline_blocked'
  | 'many_pool_users'
  | 'public_results'
  | 'one_day_left'
  | 'campaign_ended'
  | 'reveal_started'
  | 'reveal_partial'
  | 'reveal_complete'
  | 'rate_limited';

type SeatBudget = { standard: number; premium: number; total: number };

const emptyBudget: SeatBudget = { standard: 0, premium: 0, total: 0 };
const FINAL_REVEAL_VISIBLE_MS = 60 * 1000;

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

function formatCampaignDay(value: string | undefined): string {
  if (!value) return '--';
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(document.documentElement.lang || undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

function expectedRevealCount(schedule: any, resultCount: number, poolCount: number): number {
  const seatTotal = Number(schedule?.seat_budget?.total || schedule?.remaining?.total || 0);
  if (seatTotal > 0 && poolCount > 0) return Math.min(seatTotal, poolCount);
  return Math.max(seatTotal, resultCount, poolCount);
}

function resolveNextRevealAt(schedule: any, resultCount: number, expectedCount: number): string {
  const drawDate = schedule?.draw_at ? new Date(schedule.draw_at) : null;
  if (!drawDate || Number.isNaN(drawDate.getTime()) || expectedCount <= 0) return '';
  const intervalMs = Math.max(1, Number(schedule?.reveal_interval_minutes || 2)) * 60 * 1000;
  if (Date.now() < drawDate.getTime()) return drawDate.toISOString();

  const nextRevealIndex = Math.min(Math.max(1, resultCount), expectedCount);
  let nextRevealAt = drawDate.getTime() + nextRevealIndex * intervalMs;
  if (nextRevealAt <= Date.now() && resultCount < expectedCount) {
    const elapsedIndex = Math.floor((Date.now() - drawDate.getTime()) / intervalMs) + 1;
    nextRevealAt = drawDate.getTime() + Math.min(Math.max(elapsedIndex, resultCount + 1), expectedCount) * intervalMs;
  }
  return new Date(nextRevealAt).toISOString();
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
    MSG_DECLINE_CONFIRM: '',
    MSG_DECLINE_UNAVAILABLE: '',
    LABEL_VERIFY: '',
    LABEL_VERIFY_FOR_PREFIX: '',
    LABEL_PUBLIC_RESULTS_FOR: '',
    LABEL_PRIZE_STATUS_PENDING: '',
    LABEL_PRIZE_STATUS_CLAIMED: '',
    LABEL_PRIZE_STATUS_DECLINED: '',
    LABEL_PRIZE_STATUS_ROLLED_OVER: '',
    LABEL_LATEST_REVEAL: '',
    LABEL_FINAL_REVEAL: '',
    LABEL_NEXT_REVEAL: '',
    LABEL_REVEAL_PROGRESS: '',
    LABEL_REVEAL_STATUS: '',
    LABEL_REVEAL_COMPLETE: '',
    MSG_ORDER_BOOST_VERIFIED: '',
    MSG_ORDER_BOOST_NORMAL: '',
    MSG_ORDER_BOOST_NEED_REF: '',
    MSG_ORDER_BOOST_ALREADY_BOUND: '',
    MSG_ORDER_BOOST_USER_BOUND: '',
    MSG_ORDER_BOOST_ERROR: '',
    seatBudget: { ...emptyBudget },
    errorMessage: '',
    sessionToken: '',
    currentUsername: '',
    authWindow: null as Window | null,
    turnstileWidgetId: null as string | null,
    turnstileRetryActions: {} as Record<string, boolean>,
    schedule: null as any,
    publicResults: [] as any[],
    poolEntries: [] as any[],
    privateWinner: null as any,
    proof: null as any,
    declineConfirmOpen: false,
    orderGuideOpen: false,
    orderRefInput: '',
    orderBoostStatus: 'idle',
    orderMessage: '',
    hasVividKitReferralBoost: false,
    raffleWeight: 1,
    declineCount: 0,
    declineLimit: 2,
    declineBlocked: false,
    revealRefreshTimer: null as number | null,
    finalRevealHideTimer: null as number | null,
    finalRevealVisible: false,
    lastRevealResultCount: 0,

    async init() {
      const el = document.querySelector('[data-deals-raffle-widget]') as HTMLElement | null;
      const claim = document.querySelector('[data-deals-claim-widget]') as HTMLElement | null;
      this.API_BASE = normalizeApiBase(el?.dataset.apiUrl || claim?.dataset.apiUrl || '');
      this.TURNSTILE_KEY = el?.dataset.turnstileKey || claim?.dataset.turnstileKey || '';
      this.DEV_MODE = el?.dataset.devMode === 'true';
      this.MSG_ERROR = el?.dataset.msgError || '';
      this.MSG_RATE_LIMITED = el?.dataset.msgRateLimited || '';
      this.MSG_DECLINE_CONFIRM = el?.dataset.msgDeclineConfirm || '';
      this.MSG_DECLINE_UNAVAILABLE = el?.dataset.msgDeclineUnavailable || this.MSG_ERROR;
      this.LABEL_VERIFY = el?.dataset.labelVerify || '';
      this.LABEL_VERIFY_FOR_PREFIX = el?.dataset.labelVerifyForPrefix || this.LABEL_VERIFY;
      this.LABEL_PUBLIC_RESULTS_FOR = el?.dataset.labelPublicResultsFor || '';
      this.LABEL_PRIZE_STATUS_PENDING = el?.dataset.labelPrizeStatusPending || '';
      this.LABEL_PRIZE_STATUS_CLAIMED = el?.dataset.labelPrizeStatusClaimed || '';
      this.LABEL_PRIZE_STATUS_DECLINED = el?.dataset.labelPrizeStatusDeclined || '';
      this.LABEL_PRIZE_STATUS_ROLLED_OVER = el?.dataset.labelPrizeStatusRolledOver || '';
      this.LABEL_LATEST_REVEAL = el?.dataset.labelLatestReveal || '';
      this.LABEL_FINAL_REVEAL = el?.dataset.labelFinalReveal || this.LABEL_LATEST_REVEAL;
      this.LABEL_NEXT_REVEAL = el?.dataset.labelNextReveal || '';
      this.LABEL_REVEAL_PROGRESS = el?.dataset.labelRevealProgress || '';
      this.LABEL_REVEAL_STATUS = el?.dataset.labelRevealStatus || '';
      this.LABEL_REVEAL_COMPLETE = el?.dataset.labelRevealComplete || '';
      this.MSG_ORDER_BOOST_VERIFIED = el?.dataset.msgOrderBoostVerified || '';
      this.MSG_ORDER_BOOST_NORMAL = el?.dataset.msgOrderBoostNormal || '';
      this.MSG_ORDER_BOOST_NEED_REF = el?.dataset.msgOrderBoostNeedRef || '';
      this.MSG_ORDER_BOOST_ALREADY_BOUND = el?.dataset.msgOrderBoostAlreadyBound || '';
      this.MSG_ORDER_BOOST_USER_BOUND = el?.dataset.msgOrderBoostUserBound || '';
      this.MSG_ORDER_BOOST_ERROR = el?.dataset.msgOrderBoostError || this.MSG_ERROR;
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

      window.addEventListener('vividkit:raffle-reveal-countdown-zero', () => {
        this.refreshRevealResultsNow();
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
        this.syncLatestRevealCard();
        this.publishScheduleSummary();
        if (this.sessionToken) {
          await this.postStatus();
          return;
        }
        this.state = this.initialStateFromPhase();
        this.publishScheduleSummary();
        this.syncRevealPolling();
      } catch {
        this.state = 'error';
        this.errorMessage = this.MSG_ERROR;
        this.syncRevealPolling();
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

    publicResultsLabel() {
      const campaignDay = this.publicResults?.[0]?.campaign_day || this.schedule?.campaign_day;
      const formattedDay = formatCampaignDay(campaignDay);
      return this.LABEL_PUBLIC_RESULTS_FOR.replace('{date}', formattedDay);
    },

    hasRevealedResults() {
      return this.publicResults.length > 0;
    },

    hasFullyRevealedResults() {
      const total = expectedRevealCount(this.schedule, this.publicResults.length, this.poolEntries.length);
      return total > 0 && this.publicResults.length >= total;
    },

    latestRevealedResult() {
      if (!this.publicResults.length) return null;
      if (this.hasFullyRevealedResults() && !this.finalRevealVisible) return null;
      return this.publicResults[this.publicResults.length - 1] || null;
    },

    latestRevealLabel() {
      return this.hasFullyRevealedResults() ? this.LABEL_FINAL_REVEAL : this.LABEL_LATEST_REVEAL;
    },

    latestRevealedName() {
      const result = this.latestRevealedResult();
      const name = result?.facebook_name || result?.github_username || result?.username || '';
      return name ? `@${name}` : '--';
    },

    revealProgressText() {
      const total = expectedRevealCount(this.schedule, this.publicResults.length, this.poolEntries.length);
      const count = this.publicResults.length;
      return total > 0 ? `${this.LABEL_REVEAL_PROGRESS} ${count}/${total}` : `${this.LABEL_REVEAL_PROGRESS} ${count}`;
    },

    nextRevealText() {
      const total = expectedRevealCount(this.schedule, this.publicResults.length, this.poolEntries.length);
      return formatDateTime(resolveNextRevealAt(this.schedule, this.publicResults.length, total));
    },

    latestRevealMetaLabel() {
      return this.hasFullyRevealedResults() ? this.LABEL_REVEAL_STATUS : this.LABEL_NEXT_REVEAL;
    },

    latestRevealMetaText() {
      return this.hasFullyRevealedResults() ? this.LABEL_REVEAL_COMPLETE : this.nextRevealText();
    },

    showFinalRevealBriefly() {
      this.finalRevealVisible = true;
      if (this.finalRevealHideTimer) window.clearTimeout(this.finalRevealHideTimer);
      this.finalRevealHideTimer = window.setTimeout(() => {
        this.finalRevealVisible = false;
        this.finalRevealHideTimer = null;
        this.publishScheduleSummary();
      }, FINAL_REVEAL_VISIBLE_MS);
    },

    syncLatestRevealCard() {
      const resultCount = this.publicResults.length;
      const fullReveal = this.hasFullyRevealedResults();
      if (!fullReveal) {
        if (this.finalRevealHideTimer) {
          window.clearTimeout(this.finalRevealHideTimer);
          this.finalRevealHideTimer = null;
        }
        this.finalRevealVisible = false;
        this.lastRevealResultCount = resultCount;
        return;
      }
      if (resultCount > 0 && resultCount !== this.lastRevealResultCount) {
        this.showFinalRevealBriefly();
      }
      this.lastRevealResultCount = resultCount;
    },

    publishScheduleSummary() {
      const latestReveal = this.latestRevealSummary();
      window.dispatchEvent(new CustomEvent('vividkit:raffle-schedule-update', {
        detail: {
          schedule: this.schedule,
          resultCount: this.publicResults.length,
          poolCount: this.poolEntries.length,
          latestReveal,
        },
      }));
    },

    latestRevealSummary() {
      const result = this.state === 'draw_pending' ? this.latestRevealedResult() : null;
      if (!result) return { visible: false };
      return {
        visible: true,
        label: this.latestRevealLabel(),
        name: this.latestRevealedName(),
        progress: this.revealProgressText(),
        prizeTier: result.prize_tier || '--',
        metaLabel: this.latestRevealMetaLabel(),
        metaText: this.latestRevealMetaText(),
      };
    },

    shouldPollReveal() {
      const isRevealPhase = this.schedule?.phase === 'draw_ready' || this.schedule?.phase === 'reveal_ready';
      return Boolean(this.API_BASE && this.state === 'draw_pending' && isRevealPhase && !this.hasFullyRevealedResults());
    },

    syncRevealPolling() {
      if (!this.shouldPollReveal()) {
        if (this.revealRefreshTimer) {
          window.clearInterval(this.revealRefreshTimer);
          this.revealRefreshTimer = null;
        }
        return;
      }
      if (this.revealRefreshTimer) return;
      this.revealRefreshTimer = window.setInterval(async () => {
        await this.refreshRevealResultsNow();
      }, 15000);
    },

    async refreshRevealResultsNow() {
      if (!this.shouldPollReveal()) return;
      await this.loadPublicResults();
      await this.loadPoolEntries();
      this.syncLatestRevealCard();
      this.publishScheduleSummary();
      this.syncRevealPolling();
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
          github_username: entry.facebook_name || entry.github_username || entry.username || entry.github_login || entry.github || '',
          github_id: entry.github_id || '',
          approval_status: entry.approval_status || entry.status || (entry.qualified ? 'qualified' : ''),
          entry_type: entry.entry_type || 'normal',
          raffle_weight: Number(entry.raffle_weight || 1),
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
      return entry?.approval_status || entry?.status || 'qualified';
    },

    poolEntryIsBoosted(entry: any) {
      return entry?.entry_type === 'vividkit_referral_boost' || Number(entry?.raffle_weight || 1) > 1;
    },

    prizeTierBadgeClass(tier: string | undefined) {
      const normalized = String(tier || '').toLowerCase();
      if (normalized === 'premium') {
        return 'bg-amber-100 text-amber-900 ring-amber-300 dark:bg-amber-400/20 dark:text-amber-200 dark:ring-amber-300/30';
      }
      return 'bg-emerald-100 text-emerald-800 ring-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-200 dark:ring-emerald-300/25';
    },

    prizeStatusLabel(status: string | undefined) {
      const normalized = String(status || 'pending').toLowerCase();
      if (normalized === 'claimed') return this.LABEL_PRIZE_STATUS_CLAIMED;
      if (normalized === 'declined') return this.LABEL_PRIZE_STATUS_DECLINED;
      if (normalized === 'rolled_over' || normalized === 'expired_rollover_pending') return this.LABEL_PRIZE_STATUS_ROLLED_OVER;
      return this.LABEL_PRIZE_STATUS_PENDING;
    },

    prizeStatusBadgeClass(status: string | undefined) {
      const normalized = String(status || 'pending').toLowerCase();
      if (normalized === 'claimed') {
        return 'bg-emerald-100 text-emerald-800 ring-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-200 dark:ring-emerald-300/25';
      }
      if (normalized === 'declined') {
        return 'bg-amber-100 text-amber-900 ring-amber-300 dark:bg-amber-400/20 dark:text-amber-200 dark:ring-amber-300/30';
      }
      if (normalized === 'rolled_over' || normalized === 'expired_rollover_pending') {
        return 'bg-sky-100 text-sky-800 ring-sky-300 dark:bg-sky-400/15 dark:text-sky-200 dark:ring-sky-300/25';
      }
      return 'bg-slate-100 text-slate-700 ring-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-600';
    },

    verifyButtonLabel() {
      return this.currentUsername
        ? `${this.LABEL_VERIFY_FOR_PREFIX} ${this.currentUsername}`
        : this.LABEL_VERIFY;
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
      if (action === 'raffle_confirm_github_entry') return this.postConfirmGitHubEntry(oauthCode);
      if (action === 'raffle_verify_order') return this.postVerifyOrder(oauthCode);
      if (action === 'raffle_register') return this.postRegister(oauthCode);
      if (action === 'raffle_claim_prize') return this.postClaimPrize(oauthCode);
      if (action === 'raffle_decline_prize') return this.postDeclinePrize(oauthCode);
    },

    startGitHubEntryConfirm() {
      this.state = 'confirming_github_entry';
      this.startProtectedAction('raffle_confirm_github_entry');
    },

    startStatusCheck() {
      this.startOAuth('raffle_status');
    },

    startRegister() {
      this.state = 'registering';
      this.startProtectedAction('raffle_register');
    },

    startVerifyOrder() {
      if (!String(this.orderRefInput || '').trim()) {
        this.orderBoostStatus = 'error';
        this.orderMessage = this.MSG_ORDER_BOOST_NEED_REF;
        return;
      }
      this.orderBoostStatus = 'checking';
      this.orderMessage = '';
      this.startProtectedAction('raffle_verify_order');
    },

    startClaimPrize() {
      this.state = 'claiming_prize';
      this.startProtectedAction('raffle_claim_prize');
    },

    startDeclinePrize() {
      this.declineConfirmOpen = true;
    },

    confirmDeclinePrize() {
      this.declineConfirmOpen = false;
      this.state = 'declining_prize';
      this.startProtectedAction('raffle_decline_prize');
    },

    startProtectedAction(action: AuthAction) {
      delete this.turnstileRetryActions[action];
      sessionStorage.removeItem(`turnstile_token:${action}`);
      if (this.sessionToken && action !== 'raffle_status') {
        this.completeSessionAction(action);
        return;
      }
      this.renderTurnstile(action);
    },

    renderTurnstile(action: AuthAction) {
      const container = document.getElementById('raffle-turnstile-container');
      if (!container || !this.TURNSTILE_KEY) {
        this.state = 'error';
        this.errorMessage = this.MSG_ERROR;
        return;
      }
      sessionStorage.removeItem(`turnstile_token:${action}`);
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
        const turnstile = (window as any).turnstile;
        if (this.turnstileWidgetId && typeof turnstile.remove === 'function') {
          turnstile.remove(this.turnstileWidgetId);
          this.turnstileWidgetId = null;
        } else {
          container.replaceChildren();
        }
        container.classList.remove('hidden');
        this.turnstileWidgetId = turnstile.render(container, {
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
            container.classList.add('hidden');
            sessionStorage.removeItem(`turnstile_token:${action}`);
            this.state = 'error';
            this.errorMessage = this.MSG_ERROR;
          },
          'expired-callback': () => {
            container.classList.add('hidden');
            sessionStorage.removeItem(`turnstile_token:${action}`);
            this.state = 'error';
            this.errorMessage = this.MSG_ERROR;
          },
        });
        turnstile.execute(this.turnstileWidgetId);
      };
      tryRender();
    },

    async completeSessionAction(action: AuthAction) {
      if (action === 'raffle_confirm_github_entry') return this.postConfirmGitHubEntry();
      if (action === 'raffle_verify_order') return this.postVerifyOrder();
      if (action === 'raffle_register') return this.postRegister();
      if (action === 'raffle_claim_prize') return this.postClaimPrize();
      if (action === 'raffle_decline_prize') return this.postDeclinePrize();
    },

    retryWithFreshAuth(action: AuthAction, err: any) {
      if (err?.error !== 'session_expired') return false;
      this.clearSession();
      this.renderTurnstile(action);
      return true;
    },

    retryWithFreshTurnstile(action: AuthAction, err: any) {
      const message = String(err?.message || '');
      const isMissingToken = err?.error === 'bad_request' && message.includes('turnstile_token');
      if (!isMissingToken || this.turnstileRetryActions[action]) return false;
      this.turnstileRetryActions[action] = true;
      sessionStorage.removeItem(`turnstile_token:${action}`);
      this.renderTurnstile(action);
      return true;
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
      this.currentUsername = data.facebook_name || data.username || data.registration?.facebook_name || data.registration?.github_username || '';
      this.hasVividKitReferralBoost = Boolean(data.has_vividkit_referral_boost || data.registration?.entry_type === 'vividkit_referral_boost');
      this.raffleWeight = Number(data.raffle_weight || data.registration?.raffle_weight || (this.hasVividKitReferralBoost ? 2 : 1));
      if (
        this.hasVividKitReferralBoost &&
        (this.orderBoostStatus === 'idle' || this.orderBoostStatus === 'normal' || this.orderBoostStatus === 'error')
      ) {
        this.orderBoostStatus = 'verified';
        this.orderMessage = this.MSG_ORDER_BOOST_VERIFIED;
      }
      this.declineCount = Number(data.decline_count || 0);
      this.declineLimit = Number(data.decline_limit || 2);
      this.declineBlocked = Boolean(data.decline_blocked);
      if (this.proof) this.state = 'proof_ready';
      else if (this.privateWinner?.fulfillment_status === 'declined') this.state = 'prize_declined';
      else if (this.privateWinner?.fulfillment_status === 'rolled_over') this.state = 'claim_expired';
      else if (this.privateWinner) this.state = 'winner_revealed';
      else if (this.declineBlocked) this.state = 'decline_blocked';
      else if (data.phase === 'before_open') this.state = 'before_open';
      else if (data.phase === 'inactive') this.state = 'closed';
      else if (data.registration) this.state = data.phase === 'draw_ready' ? 'draw_pending' : 'registered';
      else if (!data.bound) this.state = 'needs_github_confirmation';
      else if (data.qualified) this.state = data.phase === 'registration_open' ? 'eligible' : 'draw_pending';
      else this.state = this.initialStateFromPhase();
      this.syncLatestRevealCard();
      this.publishScheduleSummary();
      this.syncRevealPolling();
    },

    applyDevScenario(scenario: DevScenario) {
      if (!this.DEV_MODE) return;

      const schedule = {
        phase: 'registration_open',
        registration_open_at: isoFromNow(-2),
        registration_cutoff_at: isoFromNow(4),
        draw_at: isoFromNow(5),
        ends_at: isoFromNow(48),
        claim_deadline_at: isoFromNow(29),
      };
      const winner = {
        prize_tier: 'Premium',
        github_username: 'Dev Winner',
        facebook_name: 'Dev Winner',
        claim_deadline_at: isoFromNow(24),
        fulfillment_status: 'pending_claim',
      };
      const proof = {
        prize_tier: 'Premium',
        github_username: 'Dev Winner',
        facebook_name: 'Dev Winner',
        claim_deadline_at: isoFromNow(24),
      };

      this.schedule = { ...schedule };
      this.seatBudget = { standard: 5, premium: 2, total: 7 };
      this.publicResults = [];
      this.poolEntries = [
        { id: 'pool-1', github_username: 'Kai Dev', approval_status: 'qualified', entry_type: 'vividkit_referral_boost', raffle_weight: 2 },
        { id: 'pool-2', github_username: 'Thieu Dev', approval_status: 'qualified', entry_type: 'normal', raffle_weight: 1 },
        { id: 'pool-3', github_username: 'GitHub Dev', approval_status: 'qualified', entry_type: 'normal', raffle_weight: 1 },
      ];
      this.privateWinner = null;
      this.proof = null;
      this.errorMessage = '';
      this.orderBoostStatus = 'idle';
      this.orderMessage = '';
      this.hasVividKitReferralBoost = false;
      this.raffleWeight = 1;
      this.declineCount = 0;
      this.declineLimit = 2;
      this.declineBlocked = false;
      this.currentUsername = 'Dev User';

      const revealResults = (count: number) => {
        const totalSeats = this.seatBudget.total || count;
        const premiumSeats = this.seatBudget.premium || 1;
        const premiumStartIndex = Math.max(0, totalSeats - premiumSeats);

        return Array.from({ length: count }, (_, index) => ({
          facebook_name: `Reveal Dev ${index + 1}`,
          github_username: `Reveal Dev ${index + 1}`,
          prize_tier: index >= premiumStartIndex ? 'Premium' : 'Standard',
          claim_status: 'pending',
          campaign_day: '2026-05-20',
          revealed_at: isoFromNow((index - count) / 12),
        }));
      };

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

      if (scenario === 'one_day_left') {
        this.schedule = {
          ...schedule,
          phase: 'registration_open',
          registration_open_at: isoFromNow(-1),
          registration_cutoff_at: isoFromNow(2),
          draw_at: isoFromNow(3),
          ends_at: isoFromNow(24),
        };
        this.seatBudget = { standard: 5, premium: 2, total: 7 };
        this.state = 'ready';
        this.publishScheduleSummary();
        this.syncRevealPolling();
        return;
      }

      if (scenario === 'campaign_ended') {
        this.schedule = {
          ...schedule,
          phase: 'inactive',
          registration_open_at: isoFromNow(-28),
          registration_cutoff_at: isoFromNow(-26),
          draw_at: isoFromNow(-25),
          ends_at: isoFromNow(-1),
        };
        this.seatBudget = { standard: 5, premium: 2, total: 7 };
        this.publicResults = revealResults(7);
        this.state = 'closed';
        this.syncLatestRevealCard();
        this.publishScheduleSummary();
        this.syncRevealPolling();
        return;
      }

      if (scenario === 'draw_pending') {
        this.schedule = { ...schedule, phase: 'draw_ready', registration_cutoff_at: isoFromNow(-1), draw_at: isoFromNow(1) };
      }

      if (scenario === 'invalid_order') {
        this.errorMessage = 'Could not verify this GitHub account.';
        this.state = 'error';
        return;
      }

      if (scenario === 'chiennb_wrong_account') {
        this.currentUsername = 'thonhoasung';
        this.state = 'needs_github_confirmation';
        return;
      }

      if (scenario === 'chiennb_order_bound') {
        this.currentUsername = 'chiennb';
        this.state = 'needs_github_confirmation';
        return;
      }

      if (scenario === 'chiennb_ready') {
        this.currentUsername = 'chiennb';
        this.state = 'needs_github_confirmation';
        return;
      }

      if (scenario === 'boosted_eligible') {
        this.hasVividKitReferralBoost = true;
        this.raffleWeight = 2;
        this.orderBoostStatus = 'verified';
        this.state = 'eligible';
        return;
      }

      if (scenario === 'check_order') {
        this.orderRefInput = '0688adb3';
        this.orderBoostStatus = 'checking';
        this.state = 'eligible';
        return;
      }

      if (scenario === 'check_order_success') {
        this.orderRefInput = '0688adb3';
        this.hasVividKitReferralBoost = true;
        this.raffleWeight = 2;
        this.orderBoostStatus = 'verified';
        this.state = 'eligible';
        return;
      }

      if (scenario === 'decline_blocked') {
        this.declineCount = 2;
        this.declineLimit = 2;
        this.declineBlocked = true;
        this.state = 'decline_blocked';
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

      if (scenario === 'prize_declined') {
        this.privateWinner = { ...winner, fulfillment_status: 'declined' };
      }

      if (scenario === 'public_results') {
        this.publicResults = [
          { facebook_name: 'Kai Dev', github_username: 'Kai Dev', prize_tier: 'Standard', claim_status: 'claimed', campaign_day: '2026-05-18' },
          { facebook_name: 'Thieu Dev', github_username: 'Thieu Dev', prize_tier: 'Premium', claim_status: 'declined', campaign_day: '2026-05-18' },
          { facebook_name: 'Pending Dev', github_username: 'Pending Dev', prize_tier: 'Standard', claim_status: 'pending', campaign_day: '2026-05-18' },
        ];
        this.state = 'ready';
        this.syncLatestRevealCard();
        this.publishScheduleSummary();
        this.syncRevealPolling();
        return;
      }

      if (scenario === 'reveal_started' || scenario === 'reveal_partial' || scenario === 'reveal_complete') {
        const resultCount = scenario === 'reveal_started' ? 1 : scenario === 'reveal_partial' ? 3 : 7;
        const drawHoursFromNow = resultCount >= 7 ? -0.5 : -(resultCount * 2 - 1) / 60;
        this.schedule = { ...schedule, phase: 'draw_ready', registration_cutoff_at: isoFromNow(-1), draw_at: isoFromNow(drawHoursFromNow), reveal_interval_minutes: 2 };
        this.seatBudget = { standard: 5, premium: 2, total: 7 };
        this.publicResults = revealResults(resultCount);
        this.poolEntries = Array.from({ length: 7 }, (_, index) => ({
          id: `reveal-pool-${index + 1}`,
          github_username: `Reveal Pool ${index + 1}`,
          approval_status: 'qualified',
          entry_type: index === 0 ? 'vividkit_referral_boost' : 'normal',
          raffle_weight: index === 0 ? 2 : 1,
        }));
        this.currentUsername = '';
        this.state = 'draw_pending';
        this.syncLatestRevealCard();
        this.publishScheduleSummary();
        this.syncRevealPolling();
        return;
      }

      if (scenario === 'many_pool_users') {
        this.poolEntries = Array.from({ length: 32 }, (_, index) => ({
          id: `pool-many-${index + 1}`,
          github_username: `Qualified Dev ${index + 1}`,
          approval_status: 'qualified',
          entry_type: index % 5 === 0 ? 'vividkit_referral_boost' : 'normal',
          raffle_weight: index % 5 === 0 ? 2 : 1,
        }));
        this.state = 'ready';
        return;
      }

      if (scenario === 'error' || scenario === 'rate_limited') {
        this.errorMessage = scenario === 'rate_limited' ? this.MSG_RATE_LIMITED : this.MSG_ERROR;
        this.state = 'error';
        this.syncRevealPolling();
        return;
      }

      this.state = scenario;
      this.syncLatestRevealCard();
      this.publishScheduleSummary();
      this.syncRevealPolling();
    },

    clearSession() {
      this.sessionToken = '';
      this.currentUsername = '';
      sessionStorage.removeItem('raffle_session_token');
      sessionStorage.removeItem('turnstile_token:raffle_status');
      sessionStorage.removeItem('turnstile_token:raffle_confirm_github_entry');
      sessionStorage.removeItem('turnstile_token:raffle_check_engagement');
      sessionStorage.removeItem('turnstile_token:raffle_verify_order');
      sessionStorage.removeItem('turnstile_token:raffle_register');
      sessionStorage.removeItem('turnstile_token:raffle_claim_prize');
      sessionStorage.removeItem('turnstile_token:raffle_decline_prize');
    },

    switchGitHubAccount() {
      this.clearSession();
      this.errorMessage = '';
      this.state = 'loading';
      this.startOAuth('raffle_confirm_github_entry');
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

    async postConfirmGitHubEntry(oauthCode = '') {
      const token = sessionStorage.getItem('turnstile_token:raffle_confirm_github_entry');
      sessionStorage.removeItem('turnstile_token:raffle_confirm_github_entry');
      const authPayload = this.sessionToken ? { session_token: this.sessionToken } : { oauth_code: oauthCode };
      try {
        const res = await fetch(`${this.API_BASE}/raffle/confirm-github-entry`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...authPayload, turnstile_token: token }),
        });
        const data = await res.json();
        if (!res.ok) throw data;
        if (data.session_token) {
          this.sessionToken = data.session_token;
          sessionStorage.setItem('raffle_session_token', data.session_token);
        }
        delete this.turnstileRetryActions['raffle_confirm_github_entry'];
        await this.postStatus();
      } catch (err: any) {
        if (this.retryWithFreshAuth('raffle_confirm_github_entry', err)) return;
        if (this.retryWithFreshTurnstile('raffle_confirm_github_entry', err)) return;
        this.state = 'error';
        this.errorMessage = err?.message || this.MSG_ERROR;
      }
    },

    async postVerifyOrder(oauthCode = '') {
      const token = sessionStorage.getItem('turnstile_token:raffle_verify_order');
      sessionStorage.removeItem('turnstile_token:raffle_verify_order');
      const authPayload = this.sessionToken ? { session_token: this.sessionToken } : { oauth_code: oauthCode };
      try {
        const res = await fetch(`${this.API_BASE}/raffle/verify-order`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...authPayload,
            turnstile_token: token,
            order_ref: this.orderRefInput,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw data;
        if (data.session_token) {
          this.sessionToken = data.session_token;
          sessionStorage.setItem('raffle_session_token', data.session_token);
        }
        this.orderBoostStatus = 'verified';
        this.orderMessage = this.MSG_ORDER_BOOST_VERIFIED || data.message || '';
        delete this.turnstileRetryActions['raffle_verify_order'];
        await this.postStatus();
      } catch (err: any) {
        if (this.retryWithFreshAuth('raffle_verify_order', err)) return;
        if (this.retryWithFreshTurnstile('raffle_verify_order', err)) return;
        if (err?.error === 'order_not_found') {
          this.orderBoostStatus = this.hasVividKitReferralBoost ? 'verified' : 'normal';
          this.orderMessage = this.hasVividKitReferralBoost
            ? this.MSG_ORDER_BOOST_VERIFIED
            : this.MSG_ORDER_BOOST_NORMAL;
        } else if (err?.error === 'order_already_bound') {
          this.orderBoostStatus = this.hasVividKitReferralBoost ? 'verified' : 'error';
          this.orderMessage = this.hasVividKitReferralBoost
            ? this.MSG_ORDER_BOOST_VERIFIED
            : this.MSG_ORDER_BOOST_ALREADY_BOUND;
        } else if (err?.error === 'user_already_bound') {
          this.orderBoostStatus = this.hasVividKitReferralBoost ? 'verified' : 'error';
          this.orderMessage = this.hasVividKitReferralBoost
            ? this.MSG_ORDER_BOOST_VERIFIED
            : this.MSG_ORDER_BOOST_USER_BOUND;
        } else if (err?.error === 'rate_limited') {
          this.orderBoostStatus = this.hasVividKitReferralBoost ? 'verified' : 'error';
          this.orderMessage = this.hasVividKitReferralBoost
            ? this.MSG_ORDER_BOOST_VERIFIED
            : this.MSG_RATE_LIMITED;
        } else {
          this.orderBoostStatus = this.hasVividKitReferralBoost ? 'verified' : 'error';
          this.orderMessage = this.hasVividKitReferralBoost
            ? this.MSG_ORDER_BOOST_VERIFIED
            : (this.MSG_ORDER_BOOST_ERROR || err?.message || this.MSG_ERROR);
        }
        if (this.state !== 'eligible') this.state = 'eligible';
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
        delete this.turnstileRetryActions['raffle_register'];
        await this.postStatus();
        await this.loadPoolEntries();
      } catch (err: any) {
        if (this.retryWithFreshAuth('raffle_register', err)) return;
        if (this.retryWithFreshTurnstile('raffle_register', err)) return;
        if (err?.error === 'decline_limit_reached') {
          this.declineCount = Number(err.decline_count || this.declineLimit);
          this.declineLimit = Number(err.decline_limit || this.declineLimit);
          this.declineBlocked = true;
          this.state = 'decline_blocked';
          return;
        }
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
        delete this.turnstileRetryActions['raffle_claim_prize'];
        this.state = 'proof_ready';
      } catch (err: any) {
        if (this.retryWithFreshAuth('raffle_claim_prize', err)) return;
        if (this.retryWithFreshTurnstile('raffle_claim_prize', err)) return;
        this.state = err?.error === 'claim_expired' ? 'claim_expired' : 'error';
        this.errorMessage = err?.message || this.MSG_ERROR;
      }
    },

    async postDeclinePrize(oauthCode = '') {
      const token = sessionStorage.getItem('turnstile_token:raffle_decline_prize');
      sessionStorage.removeItem('turnstile_token:raffle_decline_prize');
      const authPayload = this.sessionToken ? { session_token: this.sessionToken } : { oauth_code: oauthCode };
      try {
        const res = await fetch(`${this.API_BASE}/raffle/decline-prize`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...authPayload, turnstile_token: token }),
        });
        const data = await res.json();
        if (!res.ok) throw data;
        delete this.turnstileRetryActions['raffle_decline_prize'];
        this.state = 'prize_declined';
        await this.postStatus();
        await this.loadPublicResults();
      } catch (err: any) {
        if (this.retryWithFreshAuth('raffle_decline_prize', err)) return;
        if (this.retryWithFreshTurnstile('raffle_decline_prize', err)) return;
        this.state = 'error';
        this.errorMessage = err?.status === 404 || err?.error === 'Not found'
          ? this.MSG_DECLINE_UNAVAILABLE
          : err?.message || this.MSG_ERROR;
      }
    },
  }));
}
