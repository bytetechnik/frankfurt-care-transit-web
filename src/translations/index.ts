
import { deTranslations } from './de';
import { enTranslations } from './en';
import type { Translations, SupportedLanguage } from '../types/translations';

export const translations: Record<SupportedLanguage, Translations> = {
  de: deTranslations,
  en: enTranslations
};

export { deTranslations, enTranslations };
export type { Translations, SupportedLanguage };
