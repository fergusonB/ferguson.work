<script>
    import MenuPanel from '$lib/menu/menu_panel.svelte';

    let items = [
    {title:'IMDB Ratings Generator', image:'/app/imdb.png',description:'Generates a visual table for IMDB ratings.', href:"/app/imdb"},
    {title:'second app', image:'/menu/app/jungle.jpg',description:'this is an app another'},
    {title:'third app', image:'/menu/app/jungle.jpg',description:'this is an app aasdasnother this is an app aasdasnother '}
]
</script>

<svelte:head>
    <title>Applications</title>
</svelte:head>

<MenuPanel {items}/>