<script>
    import Panel from '$lib/rear-white-panel.svelte'
    let contactInfo = [
        {place:'GitHub', logo:'/menu/contact/GitHub_Logo.png',link:'https://github.com/fergusonB'},
        {place:'LinkedIn', logo:'/menu/contact/LI-Logo.png',link:'https://www.linkedin.com/in/brendenferguson/'}
    ]


</script>

<svelte:head>
    <title>Contact</title>
</svelte:head>

<Panel>



{#each contactInfo as contact}
    <a target="_blank" href={contact.link}>

         <img class="w-11/12 m-auto my-3 p-3 rounded-lg drop-shadow-md bg-white  transition-scale duration-200 hover:scale-105" src={contact.logo} alt={contact.place}> 

    </a> 
{/each}

</Panel>