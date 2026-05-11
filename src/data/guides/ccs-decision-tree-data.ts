// CCS Decision Tree Data — 22 providers grouped by vendor
// Types/helpers split into ./ccs-decision-tree-types.ts to keep this file lean.
// Source of truth for env vars: reference/ccs/config/base-*.settings.json
// + reference/ccs/src/shared/provider-preset-catalog.ts (alibaba, novita)
import {
  type FlowchartNode,
  type FlowchartEdge,
} from "./flowchart-types";
import {
  type CCSPath,
  type CCSCaveat,
  type CCSDecisionTreeData,
  generateCCSPath,
  CCS_OAUTH_BASE,
} from "./ccs-decision-tree-types";

export {
  ccsGroupColors,
  type CCSPath,
  type CCSProviderPayload,
  type CCSDecisionTreeData,
} from "./ccs-decision-tree-types";

// ---------- Layout constants (viewBox 1500x780) ----------
const START_Y = 50;
const GROUP_Y = 155;
const ROW_Y = [270, 365, 460, 555];

const ANTH_X = 130; const ANTH_SUB = [100, 160];
const OPENAI_X = 370;
const GOOGLE_X = 620; const GOOGLE_SUB = [530, 710];
const CLOUD_X = 1050; const CLOUD_SUB = [880, 1050, 1220];
const IDE_X = 1560; const IDE_SUB = [1390, 1560, 1730];
const LOCAL_X = 1900;

// ---------- Nodes ----------
const nodes: FlowchartNode[] = [
  { id: 'ccs-start', type: 'start', label: 'Which provider do you use?', position: { x: 950, y: START_Y } },

  { id: 'group-anthropic', type: 'group', label: 'Anthropic', description: '2 modes', position: { x: ANTH_X, y: GROUP_Y } },
  { id: 'group-openai', type: 'group', label: 'OpenAI', description: 'Plus / Pro', position: { x: OPENAI_X, y: GROUP_Y } },
  { id: 'group-google', type: 'group', label: 'Google', description: '⚠ Ban Risk', position: { x: GOOGLE_X, y: GROUP_Y } },
  { id: 'group-cloud-ai', type: 'group', label: 'Cloud AI', description: '8 providers', position: { x: CLOUD_X, y: GROUP_Y } },
  { id: 'group-ide', type: 'group', label: 'IDE & DevTools', description: '6 providers', position: { x: IDE_X, y: GROUP_Y } },
  { id: 'group-local', type: 'group', label: 'Self-Hosted', description: '3 providers', position: { x: LOCAL_X, y: GROUP_Y } },

  // Anthropic (2 modes — Native OAuth vs CLIProxy Pool)
  { id: 'p-claude', type: 'command', label: 'Claude', description: 'Native OAuth', position: { x: ANTH_SUB[0], y: ROW_Y[0] } },
  { id: 'p-claude-pool', type: 'command', label: 'Claude Pool', description: 'Multi-account', position: { x: ANTH_SUB[1], y: ROW_Y[1] } },

  // OpenAI (1)
  { id: 'p-codex', type: 'command', label: 'Codex', description: 'GPT-5.4', position: { x: OPENAI_X, y: ROW_Y[0] } },

  // Google (2)
  { id: 'p-agy', type: 'command', label: 'Antigravity', description: 'Multi-model ⚠', position: { x: GOOGLE_SUB[0], y: ROW_Y[0] } },
  { id: 'p-gemini', type: 'command', label: 'Gemini', description: 'OAuth ⚠', position: { x: GOOGLE_SUB[1], y: ROW_Y[0] } },

  // Cloud AI (8) — 3×3 grid
  { id: 'p-kiro', type: 'command', label: 'Kiro', description: 'AWS Pro', position: { x: CLOUD_SUB[0], y: ROW_Y[0] } },
  { id: 'p-kimi', type: 'command', label: 'Kimi', description: 'Moonshot OAuth', position: { x: CLOUD_SUB[1], y: ROW_Y[0] } },
  { id: 'p-km', type: 'command', label: 'Kimi Direct', description: 'API Key', position: { x: CLOUD_SUB[2], y: ROW_Y[0] } },
  { id: 'p-glm', type: 'command', label: 'Z.AI / GLM', description: '~79% cheaper', position: { x: CLOUD_SUB[0], y: ROW_Y[1] } },
  { id: 'p-qwen', type: 'command', label: 'Qwen', description: 'Alibaba OAuth', position: { x: CLOUD_SUB[1], y: ROW_Y[1] } },
  { id: 'p-mm', type: 'command', label: 'MiniMax', description: 'M2.1 API', position: { x: CLOUD_SUB[2], y: ROW_Y[1] } },
  { id: 'p-alibaba', type: 'command', label: 'Alibaba Coding', description: 'API Key', position: { x: CLOUD_SUB[0], y: ROW_Y[2] } },
  { id: 'p-novita', type: 'command', label: 'Novita AI', description: 'DeepSeek + more', position: { x: CLOUD_SUB[1], y: ROW_Y[2] } },

  // IDE & DevTools (6)
  { id: 'p-copilot', type: 'command', label: 'GitHub Copilot', description: 'Device Code', position: { x: IDE_SUB[0], y: ROW_Y[0] } },
  { id: 'p-cursor', type: 'command', label: 'Cursor', description: 'Plus', position: { x: IDE_SUB[1], y: ROW_Y[0] } },
  { id: 'p-gitlab', type: 'command', label: 'GitLab Duo', description: 'Plus', position: { x: IDE_SUB[2], y: ROW_Y[0] } },
  { id: 'p-codebuddy', type: 'command', label: 'CodeBuddy', description: 'Plus', position: { x: IDE_SUB[0], y: ROW_Y[1] } },
  { id: 'p-kilo', type: 'command', label: 'Kilo', description: 'Plus', position: { x: IDE_SUB[1], y: ROW_Y[1] } },
  { id: 'p-iflow', type: 'command', label: 'iFlow', description: 'Free tier', position: { x: IDE_SUB[2], y: ROW_Y[1] } },

  // Self-Hosted (3)
  { id: 'p-ollama', type: 'command', label: 'Ollama', description: 'localhost:11434', position: { x: LOCAL_X, y: ROW_Y[0] } },
  { id: 'p-ollama-cloud', type: 'command', label: 'Ollama Cloud', description: 'API Key', position: { x: LOCAL_X, y: ROW_Y[1] } },
  { id: 'p-llamacpp', type: 'command', label: 'llama.cpp', description: 'localhost:8080', position: { x: LOCAL_X, y: ROW_Y[2] } },
];

// ---------- Edges ----------
function nodePos(id: string) {
  const n = nodes.find((x) => x.id === id);
  if (!n) throw new Error(`Missing node ${id}`);
  return n.position;
}

function edge(id: string, from: string, to: string, fromXOffset = 0): FlowchartEdge {
  const fromPos = nodePos(from);
  const toPos = nodePos(to);
  return {
    id, from, to,
    path: generateCCSPath({ x: fromPos.x + fromXOffset, y: fromPos.y }, toPos),
  };
}

const edges: FlowchartEdge[] = [
  // start → 6 groups
  edge('e-start-anthropic', 'ccs-start', 'group-anthropic'),
  edge('e-start-openai', 'ccs-start', 'group-openai'),
  edge('e-start-google', 'ccs-start', 'group-google'),
  edge('e-start-cloud', 'ccs-start', 'group-cloud-ai'),
  edge('e-start-ide', 'ccs-start', 'group-ide'),
  edge('e-start-local', 'ccs-start', 'group-local'),

  // Anthropic → 2
  edge('e-anth-claude', 'group-anthropic', 'p-claude', -10),
  edge('e-anth-claude-pool', 'group-anthropic', 'p-claude-pool', 10),

  // OpenAI → 1
  edge('e-openai-codex', 'group-openai', 'p-codex'),

  // Google → 2
  edge('e-google-agy', 'group-google', 'p-agy', -10),
  edge('e-google-gemini', 'group-google', 'p-gemini', 10),

  // Cloud AI → 8 (3×3, last row uses 2 slots)
  edge('e-cloud-kiro', 'group-cloud-ai', 'p-kiro', -15),
  edge('e-cloud-kimi', 'group-cloud-ai', 'p-kimi', 0),
  edge('e-cloud-km', 'group-cloud-ai', 'p-km', 15),
  edge('e-cloud-glm', 'group-cloud-ai', 'p-glm', -15),
  edge('e-cloud-qwen', 'group-cloud-ai', 'p-qwen', 0),
  edge('e-cloud-mm', 'group-cloud-ai', 'p-mm', 15),
  edge('e-cloud-alibaba', 'group-cloud-ai', 'p-alibaba', -15),
  edge('e-cloud-novita', 'group-cloud-ai', 'p-novita', 0),

  // IDE → 6
  edge('e-ide-copilot', 'group-ide', 'p-copilot', -15),
  edge('e-ide-cursor', 'group-ide', 'p-cursor', 0),
  edge('e-ide-gitlab', 'group-ide', 'p-gitlab', 15),
  edge('e-ide-codebuddy', 'group-ide', 'p-codebuddy', -15),
  edge('e-ide-kilo', 'group-ide', 'p-kilo', 0),
  edge('e-ide-iflow', 'group-ide', 'p-iflow', 15),

  // Self-Hosted → 3
  edge('e-local-ollama', 'group-local', 'p-ollama'),
  edge('e-local-ollama-cloud', 'group-local', 'p-ollama-cloud'),
  edge('e-local-llamacpp', 'group-local', 'p-llamacpp'),
];

// ---------- Path payload builders ----------
function oauthPath(args: {
  id: string; providerKey: string; command: string; name: string;
  nodeId: string; edgeIds: string[]; groupEdgeId: string; groupNodeId: string;
  color: string; model: string; banRisk?: 'high'; costLabel?: string;
  description: string; configFile: string; extraCaveats?: CCSCaveat[];
  authType?: 'oauth' | 'device_code';
  availableModels?: Array<{ tier: string; name: string; note?: string }>;
  useCases?: Array<{ label: string; cmd: string; desc?: string }>;
  docsUrl?: string;
  setupSteps?: Array<string | { title: string; desc?: string; cmd: string }>;
}): CCSPath {
  return {
    id: args.id, name: args.name, command: args.command,
    nodes: ['ccs-start', args.groupNodeId, args.nodeId],
    edges: [args.groupEdgeId, ...args.edgeIds],
    description: args.description, color: args.color,
    payload: {
      authType: args.authType ?? 'oauth',
      configFile: args.configFile,
      envVars: [
        { name: 'ANTHROPIC_BASE_URL', value: `${CCS_OAUTH_BASE}/${args.providerKey}` },
        { name: 'ANTHROPIC_AUTH_TOKEN', value: 'ccs-internal-managed' },
        { name: 'ANTHROPIC_MODEL', value: args.model },
      ],
      caveats: [
        { text: 'Sign-in tokens are auto-managed by CLIProxyAPI (local proxy on port 8317).', level: 'tech' } as CCSCaveat,
        ...(args.extraCaveats ?? []),
      ],
      banRisk: args.banRisk, costLabel: args.costLabel,
      setupSteps: args.setupSteps ?? [
        `${args.command} --auth`,
        '# Follow the prompts — browser opens for OAuth sign-in',
        'ccs doctor',
      ],
      availableModels: args.availableModels,
      useCases: args.useCases,
      docsUrl: args.docsUrl,
    },
  };
}

function apiKeyPath(args: {
  id: string; command: string; name: string; nodeId: string;
  edgeIds: string[]; groupEdgeId: string; groupNodeId: string;
  color: string; baseUrl: string; model: string; description: string;
  configFile: string; costLabel?: string; extraCaveats?: CCSCaveat[];
  apiKeyHint?: string;
  availableModels?: Array<{ tier: string; name: string; note?: string }>;
  useCases?: Array<{ label: string; cmd: string; desc?: string }>;
  docsUrl?: string;
  setupSteps?: Array<string | { title: string; desc?: string; cmd: string }>;
}): CCSPath {
  return {
    id: args.id, name: args.name, command: args.command,
    nodes: ['ccs-start', args.groupNodeId, args.nodeId],
    edges: [args.groupEdgeId, ...args.edgeIds],
    description: args.description, color: args.color,
    payload: {
      authType: 'api_key', configFile: args.configFile,
      envVars: [
        { name: 'ANTHROPIC_BASE_URL', value: args.baseUrl },
        { name: 'ANTHROPIC_AUTH_TOKEN', value: 'YOUR_API_KEY_HERE', note: args.apiKeyHint },
        { name: 'ANTHROPIC_MODEL', value: args.model },
      ],
      caveats: [
        'After install, paste your API key when prompted (or edit `~/.ccs/profiles/<name>.settings.json` later).',
        ...(args.extraCaveats ?? []),
      ],
      costLabel: args.costLabel,
      setupSteps: args.setupSteps ?? [args.command, '# Paste your API key when prompted'],
      availableModels: args.availableModels,
      useCases: args.useCases,
      docsUrl: args.docsUrl,
    },
  };
}

function localPath(args: {
  id: string; command: string; name: string; nodeId: string;
  edgeIds: string[]; color: string; baseUrl: string; model: string;
  description: string; configFile: string;
  availableModels?: Array<{ tier: string; name: string; note?: string }>;
  useCases?: Array<{ label: string; cmd: string; desc?: string }>;
}): CCSPath {
  return {
    id: args.id, name: args.name, command: args.command,
    nodes: ['ccs-start', 'group-local', args.nodeId],
    edges: ['e-start-local', ...args.edgeIds],
    description: args.description, color: args.color,
    payload: {
      authType: 'local', configFile: args.configFile,
      envVars: [
        { name: 'ANTHROPIC_BASE_URL', value: args.baseUrl },
        { name: 'ANTHROPIC_AUTH_TOKEN', value: args.command.split(' ').pop() ?? 'local' },
        { name: 'ANTHROPIC_MODEL', value: args.model },
      ],
      caveats: ['Local model — start the inference server before invoking ccs', 'No external auth; data stays on-device'],
      setupSteps: [`# Start the local server (e.g., \`ollama serve\`)`, args.command],
      availableModels: args.availableModels,
      useCases: args.useCases,
    },
  };
}

const paths: CCSPath[] = [
  // ============================================================
  // Anthropic — 2 modes (Native OAuth + CLIProxy Pool)
  // ============================================================
  {
    id: 'path-claude',
    name: { en: 'Claude — Native OAuth', vi: 'Claude — Native OAuth' },
    command: 'ccs auth create work',
    nodes: ['ccs-start', 'group-anthropic', 'p-claude'],
    edges: ['e-start-anthropic', 'e-anth-claude'],
    description: {
      en: 'Native Claude OAuth. Recommended when you have 2+ Anthropic accounts — manual switch per shell.',
      vi: 'Claude OAuth gốc. Khuyến nghị dùng CCS khi có 2+ tài khoản Anthropic — switch thủ công cho mỗi shell.',
    },
    color: 'purple',
    payload: {
      authType: 'oauth',
      configFile: 'base-claude.settings.json',
      envVars: [
        { name: 'CLAUDE_CONFIG_DIR', value: '~/.ccs/instances/<account>/' },
      ],
      caveats: [
        {
          en: 'Only have 1 Claude account? Skip CCS and just run `claude` — you don\'t need this.',
          vi: 'Chỉ có 1 tài khoản Claude? Bỏ qua CCS và chạy thẳng `claude` — không cần section này.',
        },
        {
          en: 'Got 2+ accounts? Native OAuth keeps each one separate; switch manually with `ccs <profile>`.',
          vi: 'Có 2+ tài khoản? Native OAuth giữ riêng từng cái; switch thủ công bằng `ccs <profile>`.',
        },
        {
          en: 'Want auto-rotation across accounts? See the **Claude Pool** node — no manual switching, but needs the local proxy.',
          vi: 'Muốn auto-rotate giữa các tài khoản? Xem node **Claude Pool** — không cần switch tay, nhưng phải chạy local proxy.',
        },
        {
          text: {
            en: 'Native OAuth uses the official Claude CLI for sign-in — no local proxy on port 8317 required.',
            vi: 'Native OAuth dùng Claude CLI chính thức để sign-in — không cần local proxy port 8317.',
          },
          level: 'tech',
        },
        {
          text: {
            en: 'Each profile gets its own `CLAUDE_CONFIG_DIR` so sessions/MCP/skills are fully isolated per account.',
            vi: 'Mỗi profile có `CLAUDE_CONFIG_DIR` riêng nên sessions/MCP/skills đều tách bạch theo tài khoản.',
          },
          level: 'tech',
        },
      ],
      setupSteps: [
        {
          title: { en: 'Step 1: Auth first account (with alias "work")', vi: 'Bước 1: Auth tài khoản đầu tiên (alias "work")' },
          desc: { en: 'Browser opens for native Claude OAuth — alias is your profile name', vi: 'Trình duyệt mở để chạy Claude OAuth gốc — alias là tên profile' },
          cmd: `<span class="text-blue-600 dark:text-blue-400 font-bold">ccs</span> auth create <span class="text-purple-600 dark:text-purple-400 font-bold">work</span>`,
        },
        {
          title: { en: 'Step 2: Auth second account', vi: 'Bước 2: Auth tài khoản thứ hai' },
          desc: { en: 'Add another Anthropic account (optional)', vi: 'Thêm tài khoản Anthropic khác (tùy chọn)' },
          cmd: `<span class="text-blue-600 dark:text-blue-400 font-bold">ccs</span> auth create <span class="text-purple-600 dark:text-purple-400 font-bold">personal</span>`,
        },
        {
          title: { en: 'Step 3: Switch account', vi: 'Bước 3: Switch tài khoản' },
          desc: {
            en: 'Activate the chosen profile, isolated via CLAUDE_CONFIG_DIR',
            vi: 'Kích hoạt profile đã chọn, cô lập qua CLAUDE_CONFIG_DIR',
          },
          cmd: `<span class="text-blue-600 dark:text-blue-400 font-bold">ccs</span> <span class="text-purple-600 dark:text-purple-400 font-bold">work</span>\n<span class="text-slate-400 italic"># or: ccs personal</span>`,
        },
      ],
      availableModels: [
        { tier: 'opus', name: 'claude-opus-4-7', note: { en: 'was claude-opus-4-5-20250514', vi: 'trước là claude-opus-4-5-20250514' } },
        { tier: 'sonnet', name: 'claude-sonnet-4-6', note: { en: 'was claude-sonnet-4-5-20250514', vi: 'trước là claude-sonnet-4-5-20250514' } },
        { tier: 'haiku', name: 'claude-haiku-4-5-20251001', note: { en: 'stable since Oct 2025', vi: 'ổn định từ 10/2025' } },
      ],
      useCases: [
        {
          label: { en: 'Activate work profile', vi: 'Kích hoạt profile work' },
          cmd: 'ccs work',
          desc: {
            en: 'Switch to the work account — sets CLAUDE_CONFIG_DIR for this shell',
            vi: 'Chuyển sang tài khoản work — set CLAUDE_CONFIG_DIR cho shell hiện tại',
          },
        },
        {
          label: { en: 'Switch to personal', vi: 'Chuyển sang personal' },
          cmd: 'ccs personal',
          desc: { en: 'Switch to the personal account profile', vi: 'Chuyển sang profile tài khoản personal' },
        },
        {
          label: { en: 'List all profiles', vi: 'Liệt kê tất cả profiles' },
          cmd: 'ccs auth list',
          desc: {
            en: 'Show every Anthropic account currently registered with CCS',
            vi: 'Hiện mọi tài khoản Anthropic đã đăng ký với CCS',
          },
        },
        {
          label: { en: 'Set default profile', vi: 'Đặt profile mặc định' },
          cmd: 'ccs auth default work',
          desc: {
            en: 'Plain `ccs` (no profile arg) will resume this account',
            vi: '`ccs` thuần (không kèm profile) sẽ resume tài khoản này',
          },
        },
        {
          label: { en: 'Backup an account lane', vi: 'Backup lane tài khoản' },
          cmd: 'ccs auth backup work',
          desc: {
            en: 'Snapshot the auth lane before re-auth or migration',
            vi: 'Snapshot auth lane trước khi re-auth hoặc migrate',
          },
        },
      ],
      docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/claude',
    },
  },
  {
    id: 'path-claude-pool',
    name: { en: 'Claude — CLIProxy Pool', vi: 'Claude — CLIProxy Pool' },
    command: 'ccs cliproxy create claude-pool',
    nodes: ['ccs-start', 'group-anthropic', 'p-claude-pool'],
    edges: ['e-start-anthropic', 'e-anth-claude-pool'],
    description: {
      en: 'Multi-account Claude via CLIProxyAPI pool. Auto-rotate across Pro/Max accounts — no manual switching, no API key.',
      vi: 'Claude đa tài khoản qua CLIProxyAPI pool. Tự động rotate giữa các tài khoản Pro/Max — không switch tay, không cần API key.',
    },
    color: 'purple',
    payload: {
      authType: 'oauth',
      configFile: '~/.ccs/profiles/claude-pool.settings.json + CLIProxyAPI config',
      envVars: [
        { name: 'ANTHROPIC_BASE_URL', value: `${CCS_OAUTH_BASE}/claude` },
        { name: 'ANTHROPIC_AUTH_TOKEN', value: 'ccs-internal-managed' },
        { name: 'ANTHROPIC_MODEL', value: 'claude-sonnet-4-6' },
      ],
      caveats: [
        {
          en: 'No API key needed — pool reuses your Pro/Max OAuth (claude.ai sign-in). Each account counts toward its own subscription quota.',
          vi: 'Không cần API key — pool dùng lại OAuth Pro/Max (sign-in claude.ai). Mỗi tài khoản tính quota riêng theo subscription của nó.',
        },
        {
          en: 'Pool only helps if you have **2+ Claude accounts with different emails**. Pro/Max + Team on the same email = 1 OAuth identity → same token file gets overwritten, no real pooling.',
          vi: 'Pool chỉ hữu ích khi có **2+ tài khoản Claude với email khác nhau**. Pro/Max + Team cùng email = 1 OAuth identity → cùng file token bị ghi đè, không pool thật.',
        },
        {
          en: 'For switching Personal ↔ Team workspace on the **same email**, use Native OAuth instead — each profile gets its own `CLAUDE_CONFIG_DIR` (sessions/MCP/skills isolated).',
          vi: 'Để switch Personal ↔ Team workspace **cùng email**, dùng Native OAuth thay thế — mỗi profile có `CLAUDE_CONFIG_DIR` riêng (sessions/MCP/skills tách bạch).',
        },
        {
          en: 'Add more accounts later with `ccs claude-pool --auth --add --incognito` — sign in with a **different** Claude email each time. Use `--incognito` to avoid silently re-using the current browser session.',
          vi: 'Thêm tài khoản về sau bằng `ccs claude-pool --auth --add --incognito` — mỗi lần sign-in với email Claude **khác nhau**. Dùng `--incognito` để tránh tự động tái sử dụng session trình duyệt hiện tại.',
        },
        {
          en: 'Got `Unable to connect to API (ConnectionRefused)`? The local proxy isn\'t running. Run `ccs cliproxy status`, then `ccs cliproxy start` to launch it.',
          vi: 'Gặp `Unable to connect to API (ConnectionRefused)`? Local proxy chưa chạy. Chạy `ccs cliproxy status`, rồi `ccs cliproxy start` để khởi động.',
        },
        {
          en: 'Pool gives you auto-rotation but loses the per-shell isolation Native OAuth provides — every variant request hits the shared proxy on port 8317.',
          vi: 'Pool cho auto-rotation nhưng mất tính isolation per-shell của Native OAuth — mọi request variant đều đi qua proxy chung port 8317.',
        },
        {
          text: {
            en: 'OAuth scopes: `user:inference user:profile` (claude.ai/oauth/authorize). CLIProxyAPI handles token refresh; CCS does not.',
            vi: 'OAuth scopes: `user:inference user:profile` (claude.ai/oauth/authorize). CLIProxyAPI lo refresh token; CCS thì không.',
          },
          level: 'tech',
        },
        {
          text: {
            en: 'Token files in `~/.ccs/cliproxy/auth/` are keyed by email (e.g. `claude-<email>.json`). Same email re-auth → same file → CCS post-check reports "Token not found" (false negative; backend still saves correctly).',
            vi: 'File token trong `~/.ccs/cliproxy/auth/` được key theo email (ví dụ `claude-<email>.json`). Re-auth cùng email → cùng file → CCS post-check báo "Token not found" (false negative; backend vẫn save đúng).',
          },
          level: 'tech',
        },
        {
          text: {
            en: 'Each variant gets its own port (e.g., `claude-pool` → 8318). The variant runs on top of the shared CLIProxyAPI process on 8317.',
            vi: 'Mỗi variant có port riêng (ví dụ `claude-pool` → 8318). Variant chạy trên cùng tiến trình CLIProxyAPI chung ở 8317.',
          },
          level: 'tech',
        },
        {
          text: {
            en: 'CLIProxyAPI binary is auto-installed on first `cliproxy create` — no manual Go toolchain needed.',
            vi: 'Binary CLIProxyAPI tự cài lần đầu chạy `cliproxy create` — không cần Go toolchain thủ công.',
          },
          level: 'tech',
        },
      ],
      setupSteps: [
        {
          title: { en: 'Step 1: Create the pool variant', vi: 'Bước 1: Tạo pool variant' },
          desc: {
            en: 'Interactive — auto-installs CLIProxyAPI binary, prompts for provider (pick option 8 for Claude), opens browser for OAuth, asks model, assigns a free port (e.g. 8318)',
            vi: 'Interactive — tự cài binary CLIProxyAPI, hỏi provider (chọn option 8 là Claude), mở browser OAuth, hỏi model, gán port free (ví dụ 8318)',
          },
          cmd: `<span class="text-blue-600 dark:text-blue-400 font-bold">ccs</span> cliproxy create <span class="text-purple-600 dark:text-purple-400 font-bold">claude-pool</span>\n<span class="text-slate-400 italic"># Provider: 8) Claude  ·  Model: 3) Sonnet 4.6  ·  Port: 8318</span>`,
        },
        {
          title: {
            en: 'Step 2 (optional): Add a different-email account',
            vi: 'Bước 2 (tùy chọn): Thêm tài khoản email khác',
          },
          desc: {
            en: '--incognito forces a fresh browser session so you can sign in with a DIFFERENT Claude email. Same email = no real pool (see caveats).',
            vi: '--incognito ép mở session trình duyệt mới để sign-in bằng email Claude KHÁC. Cùng email = pool không thật (xem caveats).',
          },
          cmd: `<span class="text-blue-600 dark:text-blue-400 font-bold">ccs</span> <span class="text-purple-600 dark:text-purple-400 font-bold">claude-pool</span> --auth --add --incognito`,
        },
        {
          title: {
            en: 'Step 3 (optional): Pick routing strategy',
            vi: 'Bước 3 (tùy chọn): Chọn chiến lược routing',
          },
          desc: {
            en: 'round-robin spreads load evenly; fill-first drains one account before moving on',
            vi: 'round-robin chia tải đều; fill-first drain một tài khoản hết mới chuyển',
          },
          cmd: `<span class="text-blue-600 dark:text-blue-400 font-bold">ccs</span> cliproxy routing <span class="text-purple-600 dark:text-purple-400 font-bold">round-robin</span>     <span class="text-slate-400 italic"># or: fill-first</span>`,
        },
        {
          title: { en: 'Step 4: Run Claude through the pool', vi: 'Bước 4: Chạy Claude qua pool' },
          desc: {
            en: 'Requests rotate across pooled accounts automatically',
            vi: 'Request tự động rotate giữa các tài khoản trong pool',
          },
          cmd: `<span class="text-blue-600 dark:text-blue-400 font-bold">ccs</span> <span class="text-purple-600 dark:text-purple-400 font-bold">claude-pool</span>                       <span class="text-slate-400 italic"># interactive</span>\n<span class="text-blue-600 dark:text-blue-400 font-bold">ccs</span> <span class="text-purple-600 dark:text-purple-400 font-bold">claude-pool</span> <span class="text-slate-500">"your prompt"</span>          <span class="text-slate-400 italic"># one-shot</span>`,
        },
      ],
      availableModels: [
        { tier: 'opus', name: 'claude-opus-4-7' },
        { tier: 'sonnet', name: 'claude-sonnet-4-6', note: { en: 'pool default', vi: 'mặc định pool' } },
        { tier: 'haiku', name: 'claude-haiku-4-5-20251001' },
      ],
      useCases: [
        {
          label: { en: 'Run pool interactively', vi: 'Chạy pool tương tác' },
          cmd: 'ccs claude-pool',
          desc: {
            en: 'Open Claude Code routed through the variant on port 8318',
            vi: 'Mở Claude Code route qua variant trên port 8318',
          },
        },
        {
          label: { en: 'One-shot prompt', vi: 'Prompt một lần' },
          cmd: 'ccs claude-pool "refactor this file"',
          desc: {
            en: 'Single request — auto-rotates which pool account serves it',
            vi: 'Một request — tự rotate xem tài khoản nào trong pool xử lý',
          },
        },
        {
          label: { en: 'Check pool status', vi: 'Kiểm tra trạng thái pool' },
          cmd: 'ccs cliproxy status',
          desc: {
            en: 'Verify CLIProxyAPI is running and which accounts are healthy',
            vi: 'Verify CLIProxyAPI đang chạy và tài khoản nào healthy',
          },
        },
        {
          label: { en: 'Start proxy if down', vi: 'Khởi động proxy nếu sập' },
          cmd: 'ccs cliproxy start',
          desc: {
            en: 'Launch CLIProxyAPI on port 8317 (fixes ConnectionRefused)',
            vi: 'Khởi chạy CLIProxyAPI trên port 8317 (fix ConnectionRefused)',
          },
        },
        {
          label: { en: 'Add account to pool', vi: 'Thêm tài khoản vào pool' },
          cmd: 'ccs claude-pool --auth --add',
          desc: {
            en: 'OAuth another Claude account into the existing variant',
            vi: 'OAuth thêm tài khoản Claude vào variant hiện tại',
          },
        },
        {
          label: { en: 'List variants', vi: 'Liệt kê variants' },
          cmd: 'ccs cliproxy list',
          desc: {
            en: 'Show all CLIProxy variants and their bound ports',
            vi: 'Hiện tất cả variants CLIProxy và port đang bind',
          },
        },
      ],
      docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/claude#cliproxy-pool',
    },
  },

  // ============================================================
  // OpenAI — 1 provider (Codex with detailed examples)
  // ============================================================
  oauthPath({
    id: 'path-codex', providerKey: 'codex', command: 'ccs codex', name: 'Codex (OpenAI)',
    nodeId: 'p-codex', edgeIds: ['e-openai-codex'], groupEdgeId: 'e-start-openai', groupNodeId: 'group-openai',
    color: 'cyan', model: 'gpt-5.4',
    description: 'OpenAI Plus/Pro subscription via OAuth. Routes through CLIProxyAPI Codex Responses bridge — also runs natively on Codex CLI via ccsx/ccsxp.',
    configFile: 'base-codex.settings.json',
    setupSteps: [
      'ccs codex --auth\n# [i] 1 account(s) already authenticated for Codex\n# [?] Add another account? (y/N): y',
      '# Browser opens — complete OpenAI OAuth sign-in',
      'ccs doctor 2>&1 | grep -i codex\n# Codex Auth │ [OK] │ Authenticated (09/05/2026)',
    ],
    extraCaveats: [
      'Default model is `gpt-5.4` (Codex-recommended). Newer models (`gpt-5.5`, `gpt-5.3-codex`) need a paid Codex plan.',
      { text: 'Append effort suffix to the model id: `gpt-5.4-xhigh`, `gpt-5.3-codex-high`. Or override via `--effort` / `--thinking`.', level: 'tech' },
      { text: 'Use `ccsx` to run on the native Codex CLI; `ccsxp` forces the Codex-on-Codex shortcut.', level: 'tech' },
      { text: 'Codex adapter does NOT rewrite `~/.codex/config.toml` — credentials are injected via transient `-c` flags and `CCS_CODEX_API_KEY` env.', level: 'tech' },
    ],
    availableModels: [
      { tier: 'flagship', name: 'gpt-5.5', note: 'Newest — paid Codex only' },
      { tier: 'default', name: 'gpt-5.4', note: 'Recommended Codex default' },
      { tier: 'fast', name: 'gpt-5.4-mini', note: 'Default haiku/fast option' },
      { tier: 'general', name: 'gpt-5.2', note: 'Older general-purpose' },
      { tier: 'codex', name: 'gpt-5.3-codex', note: 'Older paid Codex' },
      { tier: 'preview', name: 'gpt-5.3-codex-spark', note: 'Research preview, ChatGPT Pro' },
    ],
    useCases: [
      { label: 'Interactive (Claude Code routing)', cmd: 'ccs codex', desc: 'Default — Codex via CLIProxyAPI bridge inside Claude Code' },
      { label: 'One-shot prompt', cmd: 'ccs codex "implement auth flow"' },
      { label: 'High reasoning effort', cmd: 'ccs codex --effort xhigh "deep analysis"', desc: '--effort and --thinking are aliases' },
      { label: 'Native Codex CLI (ccsx wrapper)', cmd: 'ccsx "your prompt"', desc: 'Runs current profile on native Codex CLI; no Claude Code involved' },
      { label: 'Codex-on-Codex shortcut (ccsxp)', cmd: 'ccsxp "your prompt"', desc: 'Forces ccs codex --target codex; pins CODEX_HOME to native ~/.codex history' },
      { label: 'Explicit target flag', cmd: 'ccs codex --target codex "your prompt"', desc: 'Override target for a single invocation' },
      { label: 'Headless / SSH auth', cmd: 'ccs codex --headless', desc: 'Prints URL for manual browser auth + SSH tunnel hints' },
      { label: 'Add another account', cmd: 'ccs codex --auth --add', desc: 'Multi-account: keep existing, append new (e.g., team + personal)' },
      { label: 'Verbose (inspect effort)', cmd: 'ccs codex --verbose "your task"', desc: 'Prints reasoning.effort + injected -c overrides' },
    ],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/codex',
  }),

  // ============================================================
  // Google — 2 providers (HIGH BAN RISK)
  // ============================================================
  oauthPath({
    id: 'path-agy', providerKey: 'agy', command: 'ccs agy', name: 'Antigravity (Google)',
    nodeId: 'p-agy', edgeIds: ['e-google-agy'], groupEdgeId: 'e-start-google', groupNodeId: 'group-google',
    color: 'red', model: 'claude-opus-4-6-thinking',
    description: 'Antigravity OAuth — multi-model proxy (Claude + Gemini). HIGH BAN RISK.',
    banRisk: 'high', configFile: 'base-agy.settings.json',
    extraCaveats: ['Google ToS violation — account ban risk', 'Prefer GLM/Kimi alternatives'],
    availableModels: [
      { tier: 'flagship', name: 'claude-opus-4-6-thinking', note: 'Default — extended thinking' },
      { tier: 'sonnet', name: 'claude-sonnet-4-6', note: 'Thinking budget support' },
      { tier: 'pro-high', name: 'gemini-3.1-pro-high', note: 'Higher reasoning budget' },
      { tier: 'pro-low', name: 'gemini-3.1-pro-low', note: 'Lighter quota tier' },
      { tier: 'flash', name: 'gemini-3-1-flash-preview' },
    ],
    useCases: [{ label: 'Interactive', cmd: 'ccs agy' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/agy',
  }),
  oauthPath({
    id: 'path-gemini', providerKey: 'gemini', command: 'ccs gemini', name: 'Gemini (Google)',
    nodeId: 'p-gemini', edgeIds: ['e-google-gemini'], groupEdgeId: 'e-start-google', groupNodeId: 'group-google',
    color: 'red', model: 'gemini-2.5-pro',
    description: 'Gemini OAuth. HIGH BAN RISK.',
    banRisk: 'high', configFile: 'base-gemini.settings.json',
    extraCaveats: ['Google actively bans accounts using OAuth via CLIProxy', 'Prefer GLM/Kimi alternatives'],
    availableModels: [
      { tier: 'pro', name: 'gemini-3.1-pro-preview', note: 'Latest — paid account' },
      { tier: 'flash', name: 'gemini-3-flash-preview', note: 'Paid account' },
      { tier: 'stable', name: 'gemini-2.5-pro', note: 'Free account OK' },
    ],
    useCases: [{ label: 'Interactive', cmd: 'ccs gemini' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/gemini',
  }),

  // ============================================================
  // Cloud AI — 8 providers
  // ============================================================
  oauthPath({
    id: 'path-kiro', providerKey: 'kiro', command: 'ccs kiro', name: 'Kiro (AWS)',
    nodeId: 'p-kiro', edgeIds: ['e-cloud-kiro'], groupEdgeId: 'e-start-cloud', groupNodeId: 'group-cloud-ai',
    color: 'orange', model: 'kiro',
    description: 'AWS Kiro Pro via device-code OAuth.',
    authType: 'device_code', configFile: 'base-kiro.settings.json',
    extraCaveats: [{ text: 'Requires the CLIProxyAPIPlus fork (advanced setup).', level: 'tech' }],
    availableModels: [{ tier: 'default', name: 'kiro' }],
    useCases: [{ label: 'Interactive', cmd: 'ccs kiro' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/kiro',
  }),
  oauthPath({
    id: 'path-kimi', providerKey: 'kimi', command: 'ccs kimi', name: 'Kimi (Moonshot)',
    nodeId: 'p-kimi', edgeIds: ['e-cloud-kimi'], groupEdgeId: 'e-start-cloud', groupNodeId: 'group-cloud-ai',
    color: 'indigo', model: 'kimi-k2.5',
    description: 'Moonshot Kimi long-context reasoning via OAuth.',
    costLabel: 'Pro tier savings', configFile: 'base-kimi.settings.json',
    availableModels: [
      { tier: 'default', name: 'kimi-k2.5', note: '262K context, multimodal' },
      { tier: 'thinking', name: 'kimi-k2-thinking', note: 'Extended reasoning' },
      { tier: 'coding', name: 'kimi-k2', note: 'Flagship coding' },
    ],
    useCases: [{ label: 'Interactive', cmd: 'ccs kimi' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/kimi',
  }),
  apiKeyPath({
    id: 'path-km', command: 'ccs km', name: 'Kimi Direct (km)',
    nodeId: 'p-km', edgeIds: ['e-cloud-km'], groupEdgeId: 'e-start-cloud', groupNodeId: 'group-cloud-ai',
    color: 'indigo', baseUrl: 'https://api.kimi.com/coding/', model: 'kimi-k2-thinking-turbo',
    description: 'Direct Moonshot Kimi API — long-context coding.',
    costLabel: 'Pro tier savings', configFile: 'base-km.settings.json',
    apiKeyHint: 'sk-... — Moonshot AI dashboard',
    availableModels: [
      { tier: 'thinking', name: 'kimi-k2-thinking-turbo', note: 'preset default — always-thinking mode' },
    ],
    useCases: [{ label: 'Interactive', cmd: 'ccs km' }, { label: 'One-shot', cmd: 'ccs km "your prompt"' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/api/km',
  }),
  apiKeyPath({
    id: 'path-glm', command: 'ccs glm', name: 'Z.AI / GLM',
    nodeId: 'p-glm', edgeIds: ['e-cloud-glm'], groupEdgeId: 'e-start-cloud', groupNodeId: 'group-cloud-ai',
    color: 'emerald', baseUrl: 'https://api.z.ai/api/anthropic', model: 'glm-5',
    description: 'Cost-optimized GLM-5 via Z.AI Anthropic-compatible endpoint.',
    costLabel: '~79% cheaper than Claude (output)', configFile: 'base-glm.settings.json',
    apiKeyHint: 'ghp_... — Z.AI dashboard',
    extraCaveats: [
      'GLM-5 needs a Pro/Max plan. Lite users automatically fall back to glm-4.7.',
      { text: 'Old `GLMT` config auto-maps to GLM via `normalizeDeprecatedGlmtEnv()` — safe to remove.', level: 'tech' },
    ],
    availableModels: [
      { tier: 'pro', name: 'glm-5', note: 'Pro/Max plan' },
      { tier: 'lite', name: 'glm-4.7', note: 'Lite plan fallback' },
    ],
    useCases: [{ label: 'Interactive', cmd: 'ccs glm' }, { label: 'One-shot', cmd: 'ccs glm "refactor this"' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/api/glm',
  }),
  oauthPath({
    id: 'path-qwen', providerKey: 'qwen', command: 'ccs qwen', name: 'Qwen (Alibaba OAuth)',
    nodeId: 'p-qwen', edgeIds: ['e-cloud-qwen'], groupEdgeId: 'e-start-cloud', groupNodeId: 'group-cloud-ai',
    color: 'amber', model: 'qwen3-coder-plus',
    description: 'Alibaba Qwen3 reasoning via OAuth (CLIProxyAPI).',
    configFile: 'base-qwen.settings.json',
    availableModels: [
      { tier: 'max', name: 'qwen3-max', note: 'Opus tier' },
      { tier: 'plus', name: 'qwen3-coder-plus', note: 'Default' },
      { tier: 'flash', name: 'qwen3-coder-flash' },
    ],
    useCases: [{ label: 'Interactive', cmd: 'ccs qwen' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/qwen',
  }),
  apiKeyPath({
    id: 'path-mm', command: 'ccs mm', name: 'MiniMax',
    nodeId: 'p-mm', edgeIds: ['e-cloud-mm'], groupEdgeId: 'e-start-cloud', groupNodeId: 'group-cloud-ai',
    color: 'violet', baseUrl: 'https://api.minimax.io/anthropic', model: 'MiniMax-M2.1',
    description: 'MiniMax M2.1 — multilang coding, 1M context.',
    configFile: 'base-mm.settings.json',
    apiKeyHint: 'platform.minimax.io',
    availableModels: [
      { tier: 'flagship', name: 'MiniMax-M2.1', note: '1M context' },
      { tier: 'fast', name: 'MiniMax-M2.1-lightning' },
    ],
    useCases: [{ label: 'Interactive', cmd: 'ccs mm' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/api/mm',
  }),

  // 3 NEW providers:
  apiKeyPath({
    id: 'path-alibaba', command: 'ccs api create --preset alibaba-coding-plan', name: 'Alibaba Coding Plan',
    nodeId: 'p-alibaba', edgeIds: ['e-cloud-alibaba'], groupEdgeId: 'e-start-cloud', groupNodeId: 'group-cloud-ai',
    color: 'amber',
    baseUrl: 'https://coding-intl.dashscope.aliyuncs.com/apps/anthropic',
    model: 'qwen3-coder-plus',
    description: 'Alibaba Cloud Coding Plan via API key — flat-rate billing, separate from Qwen OAuth.',
    configFile: 'API profile (preset: alibaba-coding-plan; default name: albb)',
    apiKeyHint: 'sk-sp-... — Alibaba Cloud Model Studio',
    extraCaveats: [
      'This is the international endpoint — users in China should use the domestic one instead.',
      'Pick the exact model: `qwen3-coder-plus` or `qwen3-coder-flash`.',
      { text: 'Shortcut aliases `alibaba` and `acp` both resolve to the `alibaba-coding-plan` preset.', level: 'tech' },
    ],
    availableModels: [
      { tier: 'plus', name: 'qwen3-coder-plus', note: 'preset default' },
      { tier: 'flash', name: 'qwen3-coder-flash' },
    ],
    setupSteps: [
      { title: 'Create profile from preset', desc: 'Prompts for API key (default profile name: albb)',
        cmd: `<span class="text-blue-600 dark:text-blue-400 font-bold">ccs</span> api create --preset <span class="text-purple-600 dark:text-purple-400 font-bold">alibaba-coding-plan</span>` },
      { title: 'Run with default profile', cmd: `<span class="text-blue-600 dark:text-blue-400 font-bold">ccs</span> <span class="text-purple-600 dark:text-purple-400 font-bold">albb</span>` },
    ],
    useCases: [
      { label: 'Interactive', cmd: 'ccs albb' },
      { label: 'One-shot', cmd: 'ccs albb "implement this feature"' },
      { label: 'Use shorthand alias', cmd: 'ccs api create --preset acp', desc: 'Same as alibaba-coding-plan' },
    ],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/api/alibaba',
  }),

  apiKeyPath({
    id: 'path-novita', command: 'ccs api create --preset novita', name: 'Novita AI',
    nodeId: 'p-novita', edgeIds: ['e-cloud-novita'], groupEdgeId: 'e-start-cloud', groupNodeId: 'group-cloud-ai',
    color: 'pink',
    baseUrl: 'https://api.novita.ai/anthropic',
    model: 'deepseek/deepseek-v3.2',
    description: 'Novita AI through built-in Anthropic-compatible preset. Defaults to DeepSeek V3.2.',
    configFile: 'API profile (preset: novita)',
    apiKeyHint: 'novita.ai dashboard',
    extraCaveats: [
      'Defaults to DeepSeek v3.2. You can override the model if Novita ships other Anthropic-compatible options.',
    ],
    availableModels: [
      { tier: 'default', name: 'deepseek/deepseek-v3.2', note: 'preset default' },
    ],
    setupSteps: [
      { title: 'Create profile from preset', desc: 'Prompts for API key + profile name (default: novita)',
        cmd: `<span class="text-blue-600 dark:text-blue-400 font-bold">ccs</span> api create --preset <span class="text-purple-600 dark:text-purple-400 font-bold">novita</span>` },
      { title: 'Run with default profile', cmd: `<span class="text-blue-600 dark:text-blue-400 font-bold">ccs</span> <span class="text-purple-600 dark:text-purple-400 font-bold">novita</span> "your prompt"` },
    ],
    useCases: [
      { label: 'Interactive', cmd: 'ccs novita' },
      { label: 'One-shot', cmd: 'ccs novita "your prompt"' },
    ],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/api/novita',
  }),

  // ============================================================
  // IDE & DevTools — 6 providers
  // ============================================================
  oauthPath({
    id: 'path-copilot', providerKey: 'copilot', command: 'ccs ghcp', name: 'GitHub Copilot',
    nodeId: 'p-copilot', edgeIds: ['e-ide-copilot'], groupEdgeId: 'e-start-ide', groupNodeId: 'group-ide',
    color: 'violet', model: 'gpt-4o',
    description: 'GitHub Copilot via device-code OAuth.',
    authType: 'device_code', configFile: 'base-ghcp.settings.json',
    extraCaveats: [{ text: 'Requires the CLIProxyAPIPlus fork (advanced setup).', level: 'tech' }],
    availableModels: [
      { tier: 'default', name: 'gpt-4o' },
      { tier: 'fast', name: 'gpt-4o-mini' },
    ],
    useCases: [{ label: 'Interactive', cmd: 'ccs ghcp' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/ghcp',
  }),
  oauthPath({
    id: 'path-cursor', providerKey: 'cursor', command: 'ccs cursor', name: 'Cursor',
    nodeId: 'p-cursor', edgeIds: ['e-ide-cursor'], groupEdgeId: 'e-start-ide', groupNodeId: 'group-ide',
    color: 'blue', model: 'composer-2',
    description: 'Cursor Pro via OAuth.',
    configFile: 'base-cursor.settings.json',
    extraCaveats: [{ text: 'Requires the CLIProxyAPIPlus fork (advanced setup).', level: 'tech' }],
    availableModels: [
      { tier: 'default', name: 'composer-2' },
      { tier: 'sonnet', name: 'claude-4-sonnet' },
      { tier: 'fast', name: 'cursor-small' },
    ],
    useCases: [{ label: 'Interactive', cmd: 'ccs cursor' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/cursor',
  }),
  oauthPath({
    id: 'path-gitlab', providerKey: 'gitlab', command: 'ccs gitlab', name: 'GitLab Duo',
    nodeId: 'p-gitlab', edgeIds: ['e-ide-gitlab'], groupEdgeId: 'e-start-ide', groupNodeId: 'group-ide',
    color: 'orange', model: 'gitlab-duo',
    description: 'GitLab Duo via OAuth.',
    configFile: 'base-gitlab.settings.json',
    extraCaveats: [{ text: 'Requires the CLIProxyAPIPlus fork (advanced setup).', level: 'tech' }],
    availableModels: [
      { tier: 'default', name: 'gitlab-duo' },
      { tier: 'opus', name: 'duo-chat-opus-4-6' },
      { tier: 'sonnet', name: 'duo-chat-sonnet-4-6' },
      { tier: 'haiku', name: 'duo-chat-haiku-4-5' },
    ],
    useCases: [{ label: 'Interactive', cmd: 'ccs gitlab' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/gitlab',
  }),
  oauthPath({
    id: 'path-codebuddy', providerKey: 'codebuddy', command: 'ccs codebuddy', name: 'CodeBuddy',
    nodeId: 'p-codebuddy', edgeIds: ['e-ide-codebuddy'], groupEdgeId: 'e-start-ide', groupNodeId: 'group-ide',
    color: 'pink', model: 'auto',
    description: 'Multi-model auto-routing via OAuth.',
    configFile: 'base-codebuddy.settings.json',
    extraCaveats: [{ text: 'Requires the CLIProxyAPIPlus fork (advanced setup).', level: 'tech' }],
    availableModels: [
      { tier: 'auto', name: 'auto', note: 'Multi-model routing' },
      { tier: 'opus', name: 'glm-5.1' },
      { tier: 'sonnet', name: 'kimi-k2.5' },
      { tier: 'haiku', name: 'deepseek-v3-2-volc' },
    ],
    useCases: [{ label: 'Interactive', cmd: 'ccs codebuddy' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/codebuddy',
  }),
  oauthPath({
    id: 'path-kilo', providerKey: 'kilo', command: 'ccs kilo', name: 'Kilo',
    nodeId: 'p-kilo', edgeIds: ['e-ide-kilo'], groupEdgeId: 'e-start-ide', groupNodeId: 'group-ide',
    color: 'teal', model: 'kilo/auto',
    description: 'Kilo auto-routing via OAuth.',
    configFile: 'base-kilo.settings.json',
    extraCaveats: [{ text: 'Requires the CLIProxyAPIPlus fork (advanced setup).', level: 'tech' }],
    availableModels: [{ tier: 'auto', name: 'kilo/auto' }],
    useCases: [{ label: 'Interactive', cmd: 'ccs kilo' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/kilo',
  }),
  oauthPath({
    id: 'path-iflow', providerKey: 'iflow', command: 'ccs iflow', name: 'iFlow',
    nodeId: 'p-iflow', edgeIds: ['e-ide-iflow'], groupEdgeId: 'e-start-ide', groupNodeId: 'group-ide',
    color: 'cyan', model: 'qwen3-coder-plus',
    description: 'iFlow free tier via OAuth.',
    configFile: 'base-iflow.settings.json',
    availableModels: [{ tier: 'default', name: 'qwen3-coder-plus' }],
    useCases: [{ label: 'Interactive', cmd: 'ccs iflow' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/oauth/iflow',
  }),

  // ============================================================
  // Self-Hosted — 3 providers
  // ============================================================
  localPath({
    id: 'path-ollama', command: 'ccs ollama', name: 'Ollama (Local)',
    nodeId: 'p-ollama', edgeIds: ['e-local-ollama'], color: 'green',
    baseUrl: 'http://localhost:11434', model: 'qwen3-coder',
    description: 'On-device Ollama runtime — 32K+ context, no API key.',
    configFile: 'base-ollama.settings.json',
    availableModels: [
      { tier: 'opus', name: 'gpt-oss:120b' },
      { tier: 'sonnet', name: 'gpt-oss:20b' },
      { tier: 'default', name: 'qwen3-coder', note: 'Haiku tier / preset default' },
    ],
    useCases: [
      { label: 'Start daemon', cmd: 'ollama serve', desc: 'Run before invoking ccs' },
      { label: 'Interactive', cmd: 'ccs ollama' },
    ],
  }),
  apiKeyPath({
    id: 'path-ollama-cloud', command: 'ccs ollama-cloud', name: 'Ollama Cloud',
    nodeId: 'p-ollama-cloud', edgeIds: ['e-local-ollama-cloud'], groupEdgeId: 'e-start-local', groupNodeId: 'group-local',
    color: 'green', baseUrl: 'https://ollama.com', model: 'glm-5:cloud',
    description: 'Ollama-hosted models via API key (glm-5:cloud, minimax-m2.1:cloud).',
    configFile: 'base-ollama-cloud.settings.json',
    apiKeyHint: 'ollama.com dashboard',
    availableModels: [
      { tier: 'opus', name: 'qwen3-coder:480b' },
      { tier: 'default', name: 'glm-5:cloud' },
      { tier: 'haiku', name: 'minimax-m2.1:cloud' },
    ],
    useCases: [{ label: 'Interactive', cmd: 'ccs ollama-cloud' }],
    docsUrl: 'https://docs.ccs.kaitran.ca/providers/api/ollama-cloud',
  }),
  localPath({
    id: 'path-llamacpp', command: 'ccs llamacpp', name: 'llama.cpp (Local)',
    nodeId: 'p-llamacpp', edgeIds: ['e-local-llamacpp'], color: 'teal',
    baseUrl: 'http://127.0.0.1:8080', model: 'llama3-8b',
    description: 'On-device llama.cpp inference — LLaMA models via .gguf.',
    configFile: 'base-llamacpp.settings.json',
    availableModels: [
      { tier: 'opus', name: 'llama3-70b' },
      { tier: 'default', name: 'llama3-8b', note: 'Sonnet tier / preset default' },
      { tier: 'haiku', name: 'llama3-2b' },
    ],
    useCases: [
      { label: 'Start server', cmd: './server --host 0.0.0.0 --port 8080 -m model.gguf', desc: 'Run llama.cpp before ccs' },
      { label: 'Interactive', cmd: 'ccs llamacpp' },
    ],
  }),
];

export const ccsDecisionTreeData: CCSDecisionTreeData = {
  nodes, edges, paths,
  viewBox: '0 0 2050 780',
};
