import { legacyCkTranslations } from '@legacy-ck/i18n/utils';

export type TranslationKey = keyof typeof legacyCkTranslations.en;

export function useTranslations(lang: keyof typeof legacyCkTranslations = 'en') {
  return function translate(key: TranslationKey): string {
    const table = legacyCkTranslations[lang] as Record<string, string>;
    const fallback = legacyCkTranslations.en as Record<string, string>;
    return table[key] || fallback[key] || key;
  };
}
