import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import reviewsData from '../../data/reviews-content.json';

export const getReviews = defineAction({
  input: z.object({
    lang: z.enum(['es', 'en', 'fr', 'it'])
  }),
  handler: async ({ lang }) => {
    // @ts-ignore
    return reviewsData[lang]?.reviews || [];
  }
});
