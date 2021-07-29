<script>
    export let path
    


</script>
<div id="pwd" class="m-2 rounded-md bg-white bg-opacity-50 p-1 inline-block">
{#each path as item,i}
    

    <a href={'/' +path.slice(0,i+1).join('/')}>{item ? item.toUpperCase() : 'HOME'}</a>
   
   
 
     {#if i < path.length-1}
      → &nbsp
     {/if}
{/each}
</div>

<style>
    #pwd{
        border: 1px solid #fff;
        color: #fff;
        /* drop shadow on text */
        text-shadow: 1px 1px 0 rgba(0, 0, 0, 1);
    }
    </style>
    