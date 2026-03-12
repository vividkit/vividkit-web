// Inline translations for DiscordNotificationGuide sub-components
// These are kept inline (not in i18n) since they contain complex HTML and code strings

export type DiscordNotificationTranslations = {
  breadcrumb: string;
  pageTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  introQuote: string;
  problemTitle: string;
  problemItems: string[];
  problemSolution: string;
  solutionTitle: string;
  solutionDesc: string;
  solutionItems: string[];
  detectionPatternsTitle: string;
  tableHeaders: string[];
  patternPlanReady: string;
  patternPlanReadyPhrases: string;
  patternCodeApproval: string;
  patternCodeApprovalPhrases: string;
  patternCodeFinalize: string;
  patternCodeFinalizePhrases: string;
  setupStepsTitle: string;
  step1Title: string;
  step1Items: string[];
  step2Title: string;
  step2MacLinux: string;
  step2WindowsNote: string;
  step3Title: string;
  step3CreateFile: string;
  step3MakeExecutable: string;
  step3WindowsNote: string;
  step4Title: string;
  step4AddTo: string;
  step4WindowsNote: string;
  step5Title: string;
  step5AddTo: string;
  step6Title: string;
  testPlanReadyTitle: string;
  testPlanReadyDesc: string;
  testCodeApprovalTitle: string;
  testCodeApprovalDesc: string;
  testCodeFinalizeTitle: string;
  testCodeFinalizeDesc: string;
  testNote: string;
  llmAlternativeTitle: string;
  llmAlternativeDesc: string;
  customizeTipsTitle: string;
  customizeTipsDesc: string;
  availableEventsTitle: string;
  availableEvents: { event: string; desc: string }[];
  customPatternsTitle: string;
  customPatternsDesc: string;
  customPatternsExample: string;
  multipleEventsTitle: string;
  multipleEventsDesc: string;
  multipleEventsExample: string;
  tipNoisy: string;
  tipColors: string;
  backToHooks: string;
};

export const discordNotificationTranslations: Record<string, DiscordNotificationTranslations> = {
  en: {
    breadcrumb: 'Custom Hooks',
    pageTitle: 'Discord Notification',
    heroTitle: 'Never Miss a Phase: Discord Notifications',
    heroSubtitle: 'Get notified on Discord when Claude Code completes a phase or needs your attention',
    introQuote: 'You kick off a multi-phase Claude Code session. Phase 1 starts running. You grab coffee. Check Slack. Get pulled into a meeting. Come back two hours later. Claude finished Phase 1 in 8 minutes and has been politely waiting for your approval ever since.',
    problemTitle: 'The Problem',
    problemItems: [
      'Long-running Claude Code sessions with multi-phase plans require human approval between phases',
      'No built-in notification system means Claude waits silently',
      'Context switching kills productivity - you either watch Claude work or risk leaving it hanging',
    ],
    problemSolution: '<strong>The solution:</strong> a custom hook that pings you on Discord when Claude needs attention',
    solutionTitle: 'The Solution',
    solutionDesc: 'A lightweight hook that:',
    solutionItems: [
      'Detects phase completion, approval requests, and finalization using pattern matching',
      'Sends a Discord notification so you can step away confidently',
      'Works cross-platform (macOS, Linux, Windows) using native Node.js <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">https</code> module',
      'Lives in <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">~/.claude/custom/hooks/</code> so it survives ClaudeKit updates',
      'Only fires on meaningful keywords (not noisy like notifying on every stop)',
    ],
    detectionPatternsTitle: 'Detection Patterns',
    tableHeaders: ['Type', 'Emoji', 'Color', 'Trigger Phrases'],
    patternPlanReady: '/plan Complete',
    patternPlanReadyPhrases: '"ExitPlanMode", "exiting plan mode"',
    patternCodeApproval: '/code Step 5',
    patternCodeApprovalPhrases: '"⏸ Step 5", "WAITING for user approval"',
    patternCodeFinalize: '/code Phase Complete',
    patternCodeFinalizePhrases: '"✓ Step 6: Finalize", "Git committed", "Phase workflow finished"',
    setupStepsTitle: 'Setup Steps',
    step1Title: 'Create a Discord Webhook',
    step1Items: [
      'Open Discord, go to your server',
      'Right-click a channel → Edit Channel → Integrations → Webhooks → New Webhook',
      'Name it "Claude Code" or anything you like',
      'Copy the webhook URL (keep it secret!)',
    ],
    step2Title: 'Create the Custom Hooks Directory',
    step2MacLinux: 'macOS / Linux:',
    step2WindowsNote: 'The <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">custom/</code> directory is ignored by ClaudeKit updates, so your hooks persist.',
    step3Title: 'Create the Notification Script',
    step3CreateFile: 'Create file:',
    step3MakeExecutable: 'Make executable (macOS/Linux):',
    step3WindowsNote: '<strong>Note:</strong> No chmod needed on Windows - Node.js scripts run directly.',
    step4Title: 'Configure Claude Code Hooks',
    step4AddTo: 'Add to',
    step4WindowsNote: '<strong>Windows users:</strong> Replace <code class="px-1 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-xs">$HOME</code> with full path like <code class="px-1 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-xs">C:\\Users\\YourName\\.claude\\custom\\hooks\\discord-phase-notify.cjs</code>',
    step5Title: 'Set Your Webhook URL',
    step5AddTo: 'Add to',
    step6Title: 'Test',
    testPlanReadyTitle: '/plan Complete',
    testPlanReadyDesc: 'Triggers when /plan command completes (ExitPlanMode):',
    testCodeApprovalTitle: '/code Step 5',
    testCodeApprovalDesc: 'Triggers when /code command reaches Step 5 blocking gate:',
    testCodeFinalizeTitle: '/code Step 6',
    testCodeFinalizeDesc: 'Triggers when /code command completes Step 6 finalization:',
    testNote: 'Each test should trigger a different Discord notification with the corresponding emoji and color.',
    llmAlternativeTitle: 'Alternative: Let LLMs Do Everything',
    llmAlternativeDesc: 'Copy this prompt and let Claude Code set everything up for you:',
    customizeTipsTitle: 'Customize for Other Events',
    customizeTipsDesc: 'The hook listens to the <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">Stop</code> event. You can extend it or add more hook events:',
    availableEventsTitle: 'Available Hook Events',
    availableEvents: [
      { event: 'PreToolUse', desc: 'Before a tool is executed' },
      { event: 'PostToolUse', desc: 'After a tool completes' },
      { event: 'Stop', desc: 'When Claude stops (main session)' },
      { event: 'SubagentStop', desc: 'When a subagent completes (can be noisy)' },
      { event: 'Notification', desc: 'When Claude sends a notification' },
    ],
    customPatternsTitle: 'Adding Custom Patterns',
    customPatternsDesc: 'Edit the <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">PATTERNS</code> object in the script:',
    customPatternsExample: `// Add your custom patterns
const PATTERNS = {
  // Existing patterns...
  planReady: [/ExitPlanMode/, /exiting\\s+plan\\s+mode/i],
  codeApproval: [/⏸\\s*Step\\s*5/, /WAITING\\s+for\\s+user\\s+approval/i],
  codeFinalize: [/✓\\s*Step\\s*6.*Finalize/, /Phase\\s+workflow\\s+finished/i],

  // Custom: Notify when tests complete
  testsComplete: [
    /All tests passed/i,
    /\\d+ passed, 0 failed/,
  ],

  // Custom: Notify on errors
  errorOccurred: [
    /Error:/i,
    /Failed to/i,
    /Exception/i,
  ],
};

// Update detectType() to handle new patterns
function detectType(text) {
  // ... existing checks ...

  for (const pattern of PATTERNS.testsComplete) {
    if (pattern.test(text)) {
      return { type: 'testsComplete', title: '✅ Tests Passed', color: 5763719 }; // Green
    }
  }

  for (const pattern of PATTERNS.errorOccurred) {
    if (pattern.test(text)) {
      return { type: 'error', title: '❌ Error Detected', color: 15548997 }; // Red
    }
  }

  return null;
}`,
    multipleEventsTitle: 'Listen to Multiple Events',
    multipleEventsDesc: 'Add more events in <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">settings.json</code>:',
    multipleEventsExample: `{
  "hooks": {
    "Stop": [{ "hooks": [{ "type": "command", "command": "node $HOME/.claude/custom/hooks/discord-phase-notify.cjs" }] }],
    "SubagentStop": [{ "hooks": [{ "type": "command", "command": "node $HOME/.claude/custom/hooks/discord-phase-notify.cjs" }] }],
    "Notification": [{ "hooks": [{ "type": "command", "command": "node $HOME/.claude/custom/hooks/discord-phase-notify.cjs" }] }]
  }
}`,
    tipNoisy: 'SubagentStop fires frequently - use specific patterns to filter noise.',
    tipColors: 'Discord embed colors are decimal values. Common: Green=5763719, Red=15548997, Blue=3447003, Yellow=15844367, Purple=10181046.',
    backToHooks: 'Back to Custom Hooks',
  },
  vi: {
    breadcrumb: 'Custom Hooks',
    pageTitle: 'Thông Báo Discord',
    heroTitle: 'Thông Báo Discord Khi Phase Hoàn Thành',
    heroSubtitle: 'Nhận thông báo trên Discord khi hoàn thành phase hoặc cần bạn approve',
    introQuote: 'Bạn bắt đầu một session Claude Code nhiều phase. Phase 1 chạy. Bạn đi pha cà phê. Check Slack. Bị kéo vào họp. Hai tiếng sau quay lại. Claude đã xong Phase 1 từ 8 phút đầu và ngồi chờ bạn approve từ đó tới giờ.',
    problemTitle: 'Vấn Đề',
    problemItems: [
      'Session Claude Code dài với plan nhiều phase cần user approve giữa các phase',
      'Không có notification tích hợp nên Claude chờ trong im lặng',
      'Chuyển đổi ngữ cảnh làm giảm năng suất - hoặc bạn phải ngồi canh Claude code xong phase rồi approve, hoặc bạn đi làm việc khác rồi quên quay lại bắt nó chờ bạn approve hoài',
    ],
    problemSolution: '<strong>Giải pháp:</strong> custom hook ping bạn trên Discord khi Claude cần attention',
    solutionTitle: 'Giải Pháp',
    solutionDesc: 'Tạo một custom hook để:',
    solutionItems: [
      'Detect phase complete, approval request, và finalization bằng pattern matching',
      'Gửi Discord notification để bạn yên tâm làm việc khác',
      'Cross-platform (macOS, Linux, Windows) dùng Node.js <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">https</code> module',
      'Đặt trong <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">~/.claude/custom/hooks/</code> nên không bị mất khi update ClaudeKit',
      'Chỉ kích hoạt khi có từ khóa quan trọng (không spam mỗi lần stop)',
    ],
    detectionPatternsTitle: 'Detection Patterns',
    tableHeaders: ['Loại', 'Emoji', 'Màu', 'Trigger Phrases'],
    patternPlanReady: '/plan Complete',
    patternPlanReadyPhrases: '"ExitPlanMode", "exiting plan mode"',
    patternCodeApproval: '/code Step 5',
    patternCodeApprovalPhrases: '"⏸ Step 5", "WAITING for user approval"',
    patternCodeFinalize: '/code Phase Complete',
    patternCodeFinalizePhrases: '"✓ Step 6: Finalize", "Git committed", "Phase workflow finished"',
    setupStepsTitle: 'Các Bước Setup',
    step1Title: 'Tạo Discord Webhook',
    step1Items: [
      'Mở Discord và vào server của bạn',
      'Right-click a channel → Edit Channel → Integrations → Webhooks → New Webhook',
      'Đặt tên webhook tuỳ ý (ví dụ: "Claude Code")',
      'Copy webhook URL (giữ bí mật, đừng cho người khác biết!)',
    ],
    step2Title: 'Tạo Thư Mục Custom Hooks',
    step2MacLinux: 'macOS / Linux:',
    step2WindowsNote: 'Thư mục <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">custom/</code> không bị ClaudeKit update đè, hooks của bạn sẽ được giữ mỗi khi CK update.',
    step3Title: 'Tạo Notification Script',
    step3CreateFile: 'Tạo file:',
    step3MakeExecutable: 'Chmod (macOS/Linux):',
    step3WindowsNote: '<strong>Note:</strong> Windows không cần chmod - Node.js script chạy trực tiếp.',
    step4Title: 'Config Claude Code Hooks',
    step4AddTo: 'Thêm vào',
    step4WindowsNote: '<strong>Windows:</strong> Thay <code class="px-1 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-xs">$HOME</code> bằng full path như <code class="px-1 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-xs">C:\\Users\\YourName\\.claude\\custom\\hooks\\discord-phase-notify.cjs</code>',
    step5Title: 'Set Webhook URL',
    step5AddTo: 'Thêm vào',
    step6Title: 'Test',
    testPlanReadyTitle: '/plan Complete',
    testPlanReadyDesc: 'Trigger khi /plan command hoàn thành (ExitPlanMode):',
    testCodeApprovalTitle: '/code Step 5',
    testCodeApprovalDesc: 'Trigger khi /code command đến Step 5 blocking gate:',
    testCodeFinalizeTitle: '/code Step 6',
    testCodeFinalizeDesc: 'Trigger khi /code command hoàn thành Step 6 finalization:',
    testNote: 'Mỗi test sẽ trigger notification khác nhau với emoji và màu tương ứng.',
    llmAlternativeTitle: 'Hoặc: Để LLM Setup Hết',
    llmAlternativeDesc: 'Copy prompt này và để Claude Code setup cho bạn:',
    customizeTipsTitle: 'Tuỳ Chỉnh Cho Các Event Khác',
    customizeTipsDesc: 'Hook này lắng nghe event <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">Stop</code>. Bạn có thể mở rộng hoặc thêm các hook event khác:',
    availableEventsTitle: 'Các Hook Event Có Sẵn',
    availableEvents: [
      { event: 'PreToolUse', desc: 'Trước khi tool được thực thi' },
      { event: 'PostToolUse', desc: 'Sau khi tool hoàn thành' },
      { event: 'Stop', desc: 'Khi Claude dừng (session chính)' },
      { event: 'SubagentStop', desc: 'Khi subagent hoàn thành (hay bị trigger liên tục)' },
      { event: 'Notification', desc: 'Khi Claude gửi notification' },
    ],
    customPatternsTitle: 'Thêm Pattern Tuỳ Chỉnh',
    customPatternsDesc: 'Chỉnh sửa object <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">PATTERNS</code> trong script:',
    customPatternsExample: `// Thêm pattern tuỳ chỉnh
const PATTERNS = {
  // Patterns hiện tại...
  planReady: [/ExitPlanMode/, /exiting\\s+plan\\s+mode/i],
  codeApproval: [/⏸\\s*Step\\s*5/, /WAITING\\s+for\\s+user\\s+approval/i],
  codeFinalize: [/✓\\s*Step\\s*6.*Finalize/, /Phase\\s+workflow\\s+finished/i],

  // Custom: Thông báo khi tests xong
  testsComplete: [
    /All tests passed/i,
    /\\d+ passed, 0 failed/,
  ],

  // Custom: Thông báo khi có lỗi
  errorOccurred: [
    /Error:/i,
    /Failed to/i,
    /Exception/i,
  ],
};

function detectType(text) {
  // ... checks hiện tại ...

  for (const pattern of PATTERNS.testsComplete) {
    if (pattern.test(text)) {
      return { type: 'testsComplete', title: '✅ Tests Passed', color: 5763719 };
    }
  }

  for (const pattern of PATTERNS.errorOccurred) {
    if (pattern.test(text)) {
      return { type: 'error', title: '❌ Error Detected', color: 15548997 };
    }
  }

  return null;
}`,
    multipleEventsTitle: 'Lắng Nghe Nhiều Event',
    multipleEventsDesc: 'Thêm nhiều event trong <code class="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">settings.json</code>:',
    multipleEventsExample: `{
  "hooks": {
    "Stop": [{ "hooks": [{ "type": "command", "command": "node $HOME/.claude/custom/hooks/discord-phase-notify.cjs" }] }],
    "SubagentStop": [{ "hooks": [{ "type": "command", "command": "node $HOME/.claude/custom/hooks/discord-phase-notify.cjs" }] }],
    "Notification": [{ "hooks": [{ "type": "command", "command": "node $HOME/.claude/custom/hooks/discord-phase-notify.cjs" }] }]
  }
}`,
    tipNoisy: 'SubagentStop trigger thường xuyên - dùng pattern cụ thể để lọc bớt noise.',
    tipColors: 'Màu embed Discord là giá trị decimal. Phổ biến: Green=5763719, Red=15548997, Blue=3447003, Yellow=15844367, Purple=10181046.',
    backToHooks: 'Quay lại Custom Hooks',
  },
};
