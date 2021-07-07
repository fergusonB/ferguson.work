<script>
    import MenuPanel from '$lib/menu/menu_panel.svelte';
    let items = [
    {title:'First app', image:'/menu/app/jungle.jpg',description:'this is an app'},
    {title:'second app', image:'/menu/app/jungle.jpg',description:'this is an app another'},
    {title:'third app', image:'/menu/app/jungle.jpg',description:'this is an app aasdasnother this is an app aasdasnother '}
]
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<MenuPanel {items}/>