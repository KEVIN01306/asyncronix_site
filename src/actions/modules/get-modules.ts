import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import modulesData from '../../data/modules-content.json';

export const getModules = defineAction({
  input: z.object({
    lang: z.enum(['es', 'en', 'fr', 'it'])
  }),
  handler: async ({ lang }) => {
    // @ts-ignore
    return modulesData[lang]?.modules || [];
  }
});

export const getModuleBySlug = defineAction({
  input: z.object({
    lang: z.enum(['es', 'en', 'fr', 'it']),
    slug: z.string()
  }),
  handler: async ({ lang, slug }) => {
    // @ts-ignore
    const modules = modulesData[lang]?.modules || [];
    const module = modules.find((m: any) => m.slug === slug);
    if (!module) {
      throw new Error('Module not found');
    }
    return module;
  }
});
