<script>
import Panel from '$lib/rear-white-panel.svelte'
export let items
</script>
    <Panel grid={true}>
        {#each items as item}
        <a href={item.href}>
             <div class="m-3 bg-white rounded-md text-center drop-shadow-lg transition-opacity  duration-200 opacity-95 hover:opacity-100">
                 <div class="font-bold">{item.title}</div>
                 <img src={item.image} alt={item.title + ' ' + item.description}>
                 <span class="overflow-hidden">{item.description}</span>
             </div>
            </a>
        {/each}
    </Panel>
    

