<script>
    export let path
    


</script>
<div class="m-2 rounded-md bg-white bg-opacity-50 p-1 inline-block">
{#each path as item,i}
    

    <a href={'/' +path.slice(0,i+1).join('/')}>{item ? item.toUpperCase() : 'HOME'}</a>
   
   
 
     {#if i < path.length-1}
      → &nbsp
     {/if}
{/each}
</div>