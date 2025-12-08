import en from './en';
import vi from './vi';

export const translations = {
  en,
  vi
} as const;

export type TranslationKey = keyof typeof en;

export function useTranslations(lang: keyof typeof translations = 'en') {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations['en'][key];
  };
}