export type MigrationCategory = 'binary-command' | 'slash-skill' | 'auth-migration' | 'kit-lifecycle';
export type MigrationStatus = 'replace' | 'compatibility' | 'new-capability';
export type MappingLocale = 'en' | 'vi';

export interface MigrationMappingRow {
  id: string;
  category: MigrationCategory;
  legacy: string;
  agentkit: string;
  status: MigrationStatus;
  summary: string;
}

type ExecutableMapping = Omit<MigrationMappingRow, 'summary'>;

const EXECUTABLE_MAPPING: readonly ExecutableMapping[] = [
  { id: 'install', category: 'binary-command', legacy: 'npm install -g claudekit-cli', agentkit: 'curl -fsSL https://agentkit.best/install.sh | sh', status: 'replace' },
  { id: 'new', category: 'binary-command', legacy: 'ck new', agentkit: 'ak new', status: 'replace' },
  { id: 'init', category: 'binary-command', legacy: 'ck init', agentkit: 'ak init', status: 'replace' },
  { id: 'update', category: 'binary-command', legacy: 'ck update', agentkit: 'ak update', status: 'replace' },
  { id: 'setup', category: 'binary-command', legacy: 'ck setup', agentkit: 'ak setup', status: 'replace' },
  { id: 'skills', category: 'binary-command', legacy: 'ck skills', agentkit: 'ak skills', status: 'replace' },
  { id: 'agents', category: 'binary-command', legacy: 'ck agents', agentkit: 'ak agents', status: 'replace' },
  { id: 'doctor', category: 'binary-command', legacy: 'ck doctor', agentkit: 'ak doctor', status: 'replace' },
  { id: 'versions', category: 'binary-command', legacy: 'ck versions', agentkit: 'ak versions', status: 'replace' },
  { id: 'config', category: 'binary-command', legacy: 'ck config', agentkit: 'ak config', status: 'replace' },
  { id: 'uninstall', category: 'binary-command', legacy: 'ck uninstall', agentkit: 'ak uninstall', status: 'replace' },
  { id: 'engineer-prefix', category: 'slash-skill', legacy: '/ck:*', agentkit: '/ak:*', status: 'replace' },
  { id: 'marketing-prefix', category: 'slash-skill', legacy: '/ckm:*', agentkit: '/ak:*', status: 'replace' },
  { id: 'authentication', category: 'auth-migration', legacy: 'GitHub PAT authentication', agentkit: 'ak login', status: 'replace' },
  { id: 'kit-lifecycle', category: 'kit-lifecycle', legacy: '—', agentkit: 'ak kit init <kit> --target <agent> --global', status: 'new-capability' },
];

const SUMMARIES: Record<MappingLocale, Record<string, string>> = {
  en: {
    install: 'Replace the deprecated npm package with the native installer.',
    authentication: 'Use one of the documented license, email OTP, or API-key login methods.',
    'engineer-prefix': 'Engineer skills move to the unified AgentKit namespace.',
    'marketing-prefix': 'Marketing skills move to the unified AgentKit namespace.',
    'kit-lifecycle': 'Install an entitled kit for a specific coding-agent target.',
    default: 'Use the same command name through the AgentKit binary.',
  },
  vi: {
    install: 'Thay gói npm đã ngừng dùng bằng trình cài native.',
    authentication: 'Dùng license, email OTP hoặc API key theo tài liệu chính thức.',
    'engineer-prefix': 'Skill Engineer chuyển sang namespace AgentKit thống nhất.',
    'marketing-prefix': 'Skill Marketing chuyển sang namespace AgentKit thống nhất.',
    'kit-lifecycle': 'Cài kit được cấp quyền cho đúng coding-agent target.',
    default: 'Giữ tên lệnh và chuyển sang binary AgentKit.',
  },
};

function localize(locale: MappingLocale): readonly MigrationMappingRow[] {
  return EXECUTABLE_MAPPING.map((row) => ({
    ...row,
    summary: SUMMARIES[locale][row.id] ?? SUMMARIES[locale].default,
  }));
}

export const AGENTKIT_MIGRATION_MAPPING_BY_LOCALE = {
  en: localize('en'),
  vi: localize('vi'),
} as const satisfies Record<MappingLocale, readonly MigrationMappingRow[]>;
