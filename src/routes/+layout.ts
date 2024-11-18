import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

injectAnalytics({ mode: dev ? 'development' : 'production' });

export const load = async ({ data }) => {
    // console.log("+LAYOUT:JS:(load):", data)
    return {
        ...data,
    }
}
