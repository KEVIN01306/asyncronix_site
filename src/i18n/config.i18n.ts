export const LANGUAGES = {
    es: 'es',
    en: 'en',
    fr: 'fr',
    it: 'it',
} as const;

export type Lang = keyof typeof LANGUAGES;