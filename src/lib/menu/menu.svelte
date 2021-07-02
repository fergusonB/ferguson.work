<script>
    import Button from '$lib/menu/button.svelte';

    const buttons = [
        {name:'Apps', link:'/app'},
        {name:'Blog', link:'/blog'},
        {name:'Contact',link:'/contact'},
    ]

</script>

<nav class="flex justify-around bg-gray-200 p-2 rounded-xl rounded-t-none" >
    {#each buttons as button}
         <Button {button} /> 
    {/each}
</nav>