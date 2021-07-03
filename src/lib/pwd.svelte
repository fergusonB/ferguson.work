<script>
    export let path
    


</script>
<div class="m-2 rounded-md bg-white bg-opacity-50">
{#each path as item,i}
   {item.toUpperCase()}
   
 
     {#if i < path.length-1}
      → &nbsp
     {/if}
{/each}
</div>