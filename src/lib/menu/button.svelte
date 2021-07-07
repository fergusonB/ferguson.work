<script>
    export let button
    
</script>

<span class=" m-3 my-0">

    <a sveltekit:prefetch 
    href={button.link}>
    <img class="transition m-auto bg-white rounded-md p-2 shadow-md hover:scale-125 hover:shadow-xl" src={button.icon} alt={button.name}>
 
</a> 
{button.name}
</span>