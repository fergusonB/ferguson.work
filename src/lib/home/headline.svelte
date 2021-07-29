<script>
	import { fade } from 'svelte/transition';

	import { onMount, onDestroy } from 'svelte';

	let phrases = ['Brenden Ferguson', 'a developer', 'a sales professional', 'an entrepreneur'];

	$: i = 0;

	$: phrase = phrases[i];

	let rotate;
	onMount(() => {
		rotate = setInterval(() => {
			i = (i + 1) % phrases.length;
		}, 2500);
	});

	onDestroy(() => {
		clearInterval(rotate);
	});
</script>

<div class="my-24">
	<h2>Hello!</h2>
	<span
		>I'm
		{#key phrase}
			<b in:fade>{phrase}</b>
		{/key}
	</span>
</div>


