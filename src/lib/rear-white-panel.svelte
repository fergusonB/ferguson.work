<script>
    export let grid
</script>

<div class="p-3  m-auto rounded-md bg-white w-11/12 md:w-2/3 bg-opacity-70">
    {#if grid}
         <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <slot>Error loading content</slot>
         </div>
    {:else}
        <slot>Error loading content</slot>
    {/if}

</div>