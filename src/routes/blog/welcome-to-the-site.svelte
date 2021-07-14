<script>
    import Panel from '$lib/rear-white-panel.svelte'

    const title = "Welcome to the Site!"
    const description = "Detailed information on how I built this new website."
</script>

<svelte:head>
    <title>
        {title}
    </title>
    <meta name="description" content={description}>
    
</svelte:head>

<Panel>

<article>
    <h1>{title}</h1>

    <p>
        Hello and welcome to my new website. It's built with Sveltekit.
        <img src="/blog/sveltekit.jpg" alt="Sveltekit">
    </p>


</article>

</Panel>