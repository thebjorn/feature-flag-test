<script lang="ts">
	import type { LayoutData } from './$types';

	import { mountVercelToolbar } from '@vercel/toolbar/vite';
	import { onMount } from 'svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import Header from './Header.svelte';
	import '../app.css';
	import { showDashboard } from '$lib/flags';

	let { 
		data, 
		children 
	} = $props();

	onMount(() => mountVercelToolbar());
</script>

<div class="app">
	<script type="application/json" data-flag-definitions>
		{JSON.stringify(showDashboard)}
	</script>
	<Header />

	<main>
		{data.title}
		{@render children()}
	</main>

	<footer>
		<p>
			visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
