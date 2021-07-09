<script context="module">
	export function load({ error, status }) {
		return {
			props: {
                status:status,
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	export let title,status

    import Panel from '$lib/rear-white-panel.svelte'
</script>
<Panel>
<h1 class="text-xl">{title}</h1>

{#if status === 404}
If you came looking for a tool like a save editor, I've taken them down, you can grab the source code from <a  class="underline" href="https://github.com/fergusonB/old-website/tree/master/src"> here</a> if you want to make a copy.

{/if}

</Panel>