<script>
export let items
</script>
    <div class="p-3  m-auto rounded-md bg-white w-11/12 md:w-2/3 bg-opacity-70 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {#each items as item}
        <a href={item.href}>
             <div class="m-3 bg-white rounded-md text-center">
                 <div class="font-bold">{item.title}</div>
                 <img src={item.image} alt={item.title + item.description}>
                 <span class="-m-10">{item.description}</span>
             </div>
            </a>
        {/each}
    </div>
    

