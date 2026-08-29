import type { SkillInfographic } from '@/data/guides/how-ck-works';

export type AkSkillDetailKit = 'engineer' | 'marketing';

const modules = import.meta.glob('./**/*.ts', { eager: true }) as Record<
  string,
  { default?: SkillInfographic }
>;

const byKey = new Map<string, SkillInfographic>();

for (const [path, mod] of Object.entries(modules)) {
  if (path.endsWith('/index.ts')) continue;
  const data = mod.default;
  if (!data?.id || !data.kit) continue;
  const kit = data.kit === 'marketer' ? 'marketing' : 'engineer';
  byKey.set(`${kit}/${data.id}`, data);
}

export function listAkSkillDetails(): Array<{ kit: AkSkillDetailKit; skill: string }> {
  return [...byKey.keys()].map((key) => {
    const [kit, skill] = key.split('/') as [AkSkillDetailKit, string];
    return { kit, skill };
  });
}

export function getAkSkillInfographic(
  kit: AkSkillDetailKit,
  skill: string,
): SkillInfographic | undefined {
  return byKey.get(`${kit}/${skill}`);
}

export function hasAkSkillInfographic(kit: AkSkillDetailKit, skill: string): boolean {
  return byKey.has(`${kit}/${skill}`);
}

function normalizeAkSkillId(name: string): string | null {
  let slug = name.trim().toLowerCase();
  slug = slug.replace(/^[/$@]+/, '');
  slug = slug.replace(/^(ak:|ak-)/, '');
  slug = slug.replace(/[^a-z0-9-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  if (!slug) return null;
  return `ak-${slug}`;
}

export function resolveAkSkillDetail(
  name: string,
  preferredKit: AkSkillDetailKit,
): { kit: AkSkillDetailKit; skill: string } | undefined {
  const id = normalizeAkSkillId(name);
  if (!id) return undefined;
  const kits: AkSkillDetailKit[] =
    preferredKit === 'marketing' ? ['marketing', 'engineer'] : ['engineer', 'marketing'];
  for (const kit of kits) {
    if (byKey.has(`${kit}/${id}`)) return { kit, skill: id };
  }
  return undefined;
}
