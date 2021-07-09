<script>
    import MenuPanel from '$lib/menu/menu_panel.svelte';

    let items = [
    {title:'IMDB Ratings Generator', image:'/app/imdb.png',description:'Generates a visual table for IMDB ratings.', href:"/app/imdb"},

]
</script>

<svelte:head>
    <title>Applications</title>
</svelte:head>

<MenuPanel {items}/>