import type { PageData } from './$types';
import { showDashboard } from '$lib/flags';
 
export const load: PageData = async () => {
	const dashboard = await showDashboard();
 
	console.log('dashboard', dashboard);
	return {
        post: {
            title: dashboard ? 'New Dashboard' : `Old Dashboard`
        }
    };
};
