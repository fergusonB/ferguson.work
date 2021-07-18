<script>
    import MenuPanel from '$lib/menu/menu_panel.svelte';
    let items = [
    {title:'Linux Cheatsheet', image:'/blog/tux.gif',description:'Personal linux cheatsheet, basic security, commands, tools I like.',href:"/blog/linux-cheatsheet"},

]
    


</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<MenuPanel {items}/>

<p class="text-white text-center m-5 text-xs">Blog posts licensed under  <a target="_blank" class="underline" href="https://creativecommons.org/licenses/by/4.0/"> Creative Commons Attribution 4.0 International License.</a></p>