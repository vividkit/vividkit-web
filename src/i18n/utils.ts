import en from './en';
import vi from './vi';
import { akInvocationText } from '../data/guides/agentkit-invocation';

export const translations = {
  en,
  vi
} as const;

export type TranslationKey = keyof typeof en;

export function useTranslations(lang: keyof typeof translations = 'en') {
  return function t(key: TranslationKey): string {
    // AgentKit skill invocations in copy follow the stable separator (see agentkit-invocation.ts).
    return akInvocationText(translations[lang][key] || translations['en'][key]);
  };
}