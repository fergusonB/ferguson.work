<script>
    import MenuPanel from '$lib/menu/menu_panel.svelte';

    let items = [
    {title:'Ferguson.work', image:'/logo-192.png',description:'The website you are currently browsing. Svelte - HTML, JS ,CSS...', href:"/"},    
    {title:'chargeto', image:'/app/term.png',description:'Rust application that controls the max charge level of a battery on linux.', href:"https://github.com/fergusonB/chargeto"},    
    {title:'CPUfreq', image:'/app/term.png',description:'Rust application that monitors CPU frequency at the specified interval.', href:"https://github.com/fergusonB/cpufreq"},
    {title:'Pig', image:'/app/term.png',description:'The game of Pig, written in TS, precompiled binaries available.', href:"https://github.com/fergusonB/pig"},
    {title:'IMDB Ratings Generator', image:'/app/imdb.png',description:'Generates a visual table for IMDB ratings.', href:"/app/imdb"},

]
</script>

<svelte:head>
    <title>Applications</title>
</svelte:head>

<MenuPanel {items}/>

