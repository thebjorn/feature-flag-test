<script lang="ts">
    let {
    topics,
    selected_topic = $bindable()
    } = $props();
</script>

<h2>Topics</h2>
<pre>{JSON.stringify(topics, null, 2)}</pre>

<div>
<button onclick={() => selected_topic = topics[0]}>Select topic 1</button>
<button onclick={() => selected_topic = topics[1]}>Select topic 2</button>
</div>
