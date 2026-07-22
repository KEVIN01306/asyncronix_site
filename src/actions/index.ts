// src/actions/index.ts
import { getModules, getModuleBySlug } from './modules/get-modules';
import { getReviews } from './reviews/get-reviews';
import { getPricing } from './pricing/get-pricing';
import { getPageContent } from './pages/get-page-content';

export const server = {
    getModules,
    getModuleBySlug,
    getReviews,
    getPricing,
    getPageContent
};