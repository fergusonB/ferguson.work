

<script>
    import Panel from '$lib/rear-white-panel.svelte'

    const title = "Linux Cheatsheet"
    const description = "Personal linux cheatsheet, basic security, commands, tools I like."



</script>

<svelte:head>
    <title>
        {title}
    </title>
    <meta name="description" content={description}>
    
</svelte:head>

<Panel>

<article>
    <h1 class="text-4xl">{title}</h1>

        <h2 class="text-3xl">Basic Security</h2>
        

        <h2 class="text-3xl" >Useful Commands</h2>

        <h2 class="text-3xl">Tools I Like</h2>

                <h3 class="text-xl"><a href="http://httpie.org/" target="_blank" rel="nofollow">HTTPie</a></h3>

                    <p>HTTPie is a command line HTTP client, a user-friendly cURL replacement.
                    <p>
            
                <h3 class="text-xl"> <a href="https://github.com/BurntSushi/ripgrep" target="_blank" rel="nofollow">Ripgrep</a></h3>
                    <p>Ripgrep is a fast, efficient, and accurate grep alternative.
                    <p>
                <!-- bat -->
                <h3 class="text-xl"><a href="https://github.com/sharkdp/bat" target="_blank" rel="nofollow">Bat</a></h3>
                <p> Cat clone with syntax highlighting</p>

                



</article>

</Panel>

