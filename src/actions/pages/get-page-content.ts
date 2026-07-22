import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';

// We import dynamically or just statically import all and select
import homeData from '../../data/home-content.json';
import aboutData from '../../data/about-content.json';
import termsData from '../../data/terms-content.json';
import privacyData from '../../data/privacy-content.json';

const contentMap = {
  home: homeData,
  about: aboutData,
  terms: termsData,
  privacy: privacyData
};

export const getPageContent = defineAction({
  input: z.object({
    lang: z.enum(['es', 'en', 'fr', 'it']),
    page: z.enum(['home', 'about', 'terms', 'privacy'])
  }),
  handler: async ({ lang, page }) => {
    const data = contentMap[page];
    // @ts-ignore
    return data[lang] || {};
  }
});
