export const languages = {
  en: 'English',
  vi: 'Tiếng Việt'
};

export const defaultLang = 'en';

export type Language = keyof typeof languages;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: Language = lang) {
    // Strip existing language prefix if present
    let cleanPath = path;
    for (const langCode of Object.keys(languages)) {
      if (path.startsWith(`/${langCode}/`)) {
        cleanPath = path.slice(langCode.length + 1);
        break;
      } else if (path === `/${langCode}`) {
        cleanPath = '/';
        break;
      }
    }

    return l === defaultLang ? cleanPath : `/${l}${cleanPath}`;
  };
}