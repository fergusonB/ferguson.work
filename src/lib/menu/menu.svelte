<script>
    import Button from '$lib/menu/button.svelte';

    const buttons = [
        {name:'Home', link:'/'},
        {name:'Apps', link:'/app'},
        {name:'Blog', link:'/blog'},
        {name:'Contact',link:'/contact'},
    ]

</script>

<nav class="flex justify-around  p-2 rounded-xl rounded-t-none bg-white bg-opacity-50" >
    {#each buttons as button}
         <Button {button} /> 
    {/each}
</nav>