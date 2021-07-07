<script>
    import BackPanel from '$lib/menu/back_panel.svelte';
    let items = [
    {title:'First app', image:'/menu/app/jungle.jpg',description:'this is an app'},
    {title:'second app', image:'/menu/app/jungle.jpg',description:'this is an app another'},
    {title:'third app', image:'/menu/app/jungle.jpg',description:'this is an app aasdasnother this is an app aasdasnother '}
]
</script>


<BackPanel {items}/>