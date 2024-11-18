<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
	import QEditor from './QEditor.svelte';
	import Topics from './Topics.svelte';

	let {
		data
	} = $props();

	let topics = $state([{
		name: 'topic 1',
		questions: [{name: 'hello'}]
	},{
		name: 'topic 2',
		questions: [{name: 'goodbye'}]
	}])

	let selected_topic = $state(topics[0])
	let questions = $derived(selected_topic.questions)
	let qnames = $derived(questions.map(q => q.name))
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Topics topics={topics} bind:selected_topic />

	<div class="grid-x">
		<div>
			<h2>all topics</h2>
			<pre>{JSON.stringify(topics, null, 2)}</pre>
		</div>
		<div>
			<h2>Selected topic</h2>
			<pre>{JSON.stringify(selected_topic, null, 2)}</pre>
		</div>
		<div>
			<h2>Questions</h2>
			<pre>{JSON.stringify(questions, null, 2)}</pre>
		</div>
		<div>
			<h2>Question names</h2>
			<pre>{JSON.stringify(qnames, null, 2)}</pre>
		</div>
	</div>
	<hr>

	<QEditor qnames={qnames} {questions} bind:selected_topic />

	

	<hr style="width: 100%; border-top:1px solid rebeccapurple">


	<strong>FLAGS DATA:</strong><pre>{JSON.stringify(data, null, 2)}</pre>
	<h1>
		
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcomeFallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	.grid-x {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	hr {
		width: 100%;
		border-top: 1px solid rebeccapurple;
	}
</style>
