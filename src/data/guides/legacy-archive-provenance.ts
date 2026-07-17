export const LEGACY_ARCHIVE_PROVENANCE = {
  id: 'claudekit-archive-2026-07-13',
  status: 'archived' as const,
  sourceCommit: '56524c98dbdd4d27632ffbcb9da96c77f936ab67',
  sourceDate: '2026-07-08',
  isolationCommit: '7d5ab60e9e706ba612a6202f3024685cfa32bea6',
  isolationDate: '2026-07-13',
  archiveTree: 'src/legacy-ck',
  fileCount: 208,
  lineCount: 72_777,
} as const;

export type LegacyArchiveProvenanceId = typeof LEGACY_ARCHIVE_PROVENANCE.id;
