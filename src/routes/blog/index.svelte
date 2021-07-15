<script>
    import MenuPanel from '$lib/menu/menu_panel.svelte';
    let items = [
    {title:'Linux Cheatsheet', image:'/blog/sveltekit.jpg',description:'Personal linux cheatsheet, basic security, commands, tools I like.',href:"/blog/linux-cheatsheet"},

]
    


</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<MenuPanel {items}/>