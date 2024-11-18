<script lang="ts">
    let {
        qnames,
        questions,
        selected_topic = $bindable()
    } = $props();
</script>

<h2>Questions</h2>
<pre>{JSON.stringify(qnames, null, 2)}</pre>

From component:
<button onclick={() => selected_topic.questions.push({name: 'world'})}><code>selected_topic.questions.push(name: 'world')</code></button>