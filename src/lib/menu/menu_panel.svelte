<script>
import Panel from '$lib/rear-white-panel.svelte';
	export let items;

	function getTarget(item){
		if (item.href){
			if (item.href.includes("https://")){
				return "_blank"
			}
		}
		return "";
	}
	
</script>

<Panel grid={true}>
	{#each items as item}
		<a target={getTarget(item)} sveltekit:prefetch={item.href.includes('https://') ? undefined : true} class="transform transition hover:scale-105  focus:scale-105" href={item.href}>
			<div
				class="m-3 bg-gradient-to-b from-white to-gray-300  rounded-md text-center drop-shadow-md "
			>
				<div class="font-bold">{item.title}</div>
				<img class=" m-auto max-h-24" src={item.image} alt={item.title + ' ' + item.description} />
				<span class="overflow-hidden p-1">{item.description}</span>
			</div>
		</a>
	{/each}
</Panel>
