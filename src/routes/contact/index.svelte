<script>
    import Panel from '$lib/rear-white-panel.svelte'
    let contactInfo = [
        {place:'GitHub', logo:'/menu/contact/GitHub_Logo.png',link:'https://github.com/fergusonB'},
        {place:'LinkedIn', logo:'/menu/contact/LI-Logo.png',link:'https://www.linkedin.com/in/brendenferguson/'},
    ]


</script>

<svelte:head>
    <title>Contact</title>
</svelte:head>

<Panel>



{#each contactInfo as contact}
    <a target="_blank" rel="noreferrer" href={contact.link}>

         <img class=" text-8xl -w-11/12 m-auto my-3 p-3 rounded-lg drop-shadow-md bg-white  transition-scale duration-200 hover:scale-105 max-w-xl" src={contact.logo} alt={contact.place}> 

    </a> 
{/each}

<div class=" text-xl -w-11/12 m-auto my-3 p-3 rounded-lg drop-shadow-md bg-white  transition-scale duration-200 hover:scale-105 max-w-xl"> 
    <p>
        <!-- brenden.ferguson@gmail.com -->
        <a class="underline" href="mailto:brenden.ferguson+www@gmail.com"> Email Me</a>
        <br>
        The use of PGP encryption is encouraged.
    </p>
    <p>
        My PGP key has ID number 4BEDFA0033975AF1. You can obtain it on <a  class="underline" target="_blank" rel="noreferrer" href="https://keybase.io/fergusonb/pgp_keys.asc">Keybase</a>. The key fingerprint is <br> <code>105E F12B 493A CD44 A2B2 4634 4BED FA00 3397 5AF1</code>.
    </p>
</div>


</Panel>