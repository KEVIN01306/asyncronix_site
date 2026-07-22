import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import pricingData from '../../data/pricing-content.json';

export const getPricing = defineAction({
  input: z.object({
    lang: z.enum(['es', 'en', 'fr', 'it'])
  }),
  handler: async ({ lang }) => {
    // @ts-ignore
    return pricingData[lang] || {};
  }
});
