<script>
    import MenuPanel from '$lib/menu/menu_panel.svelte';

    let items = [
    {title:'CPUfreq', image:'/app/term.png',description:'Rust application that monitors CPU frequency at the specified interval.', href:"https://github.com/fergusonB/cpufreq"},
    {title:'Pig', image:'/app/term.png',description:'The game of Pig, written in TS, precompiled binaries available.', href:"https://github.com/fergusonB/pig"},
    {title:'IMDB Ratings Generator', image:'/app/imdb.png',description:'Generates a visual table for IMDB ratings.', href:"/app/imdb"},

]
</script>

<svelte:head>
    <title>Applications</title>
</svelte:head>

<MenuPanel {items}/>

<p class="text-white text-center text-xs m-5">Code licensed under <a target="_blank" class="underline" rel="noreferrer" href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a></p>