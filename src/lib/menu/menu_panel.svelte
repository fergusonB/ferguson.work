<script>
	import Panel from '$lib/rear-white-panel.svelte';
	export let items;
</script>

<Panel grid={true}>
	{#each items as item}
		<a class="transform transition hover:scale-105  focus:scale-105" sveltekit:prefetch href={item.href}>
			<div
				class="m-3 bg-gradient-to-b from-white to-gray-300  rounded-md text-center drop-shadow-md "
			>
				<div class="font-bold">{item.title}</div>
				<img class=" m-auto max-h-24" src={item.image} alt={item.title + ' ' + item.description} />
				<span class="overflow-hidden">{item.description}</span>
			</div>
		</a>
	{/each}
</Panel>
