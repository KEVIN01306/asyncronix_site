import { LANGUAGES } from '../i18n/config.i18n';
import modulesData from '../data/modules-content.json';

const BASE_URL = 'https://asyncronix.com';
const langs = Object.keys(LANGUAGES);

/**
 * Generate standard pages for all languages.
 */
export const generateCoreUrls = (): string[] => {
    const corePages = ['', 'about', 'modules', 'pricing', 'privacy', 'terms'];
    const urls: string[] = [];

    langs.forEach(lang => {
        corePages.forEach(page => {
            const path = page ? `${lang}/${page}` : lang;
            urls.push(`${BASE_URL}/${path}`);
        });
    });

    return urls;
};

/**
 * Generate module pages for all languages based on the JSON data.
 */
export const generateModuleUrls = (): string[] => {
    const urls: string[] = [];
    
    // We assume modules are structurally the same across languages, so we extract from 'es'
    const esData = (modulesData as any).es;
    if (!esData || !esData.modules) return urls;

    const slugs = esData.modules.map((m: any) => m.slug);

    langs.forEach(lang => {
        slugs.forEach((slug: string) => {
            urls.push(`${BASE_URL}/${lang}/modules/${slug}`);
        });
    });

    return urls;
};

/**
 * Combine all URLs for the Astro sitemap configuration.
 */
export const getAllSitemapUrls = (): string[] => {
    const coreUrls = generateCoreUrls();
    const moduleUrls = generateModuleUrls();
    
    const combined = [...coreUrls, ...moduleUrls];
    
    // Return unique URLs just in case
    return Array.from(new Set(combined));
};
