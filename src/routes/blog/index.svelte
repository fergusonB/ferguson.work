<script>
    import MenuPanel from '$lib/menu/menu_panel.svelte';
    let items = [
    {title:'Welcome to the site!', image:'/blog/sveltekit.jpg',description:'How this site was built.',href:"/blog/welcome-to-the-site"},

]
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<MenuPanel {items}/>