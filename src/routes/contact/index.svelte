<script>
    let contactInfo = [
        {place:'GitHub', logo:'static/menu/contact/GitHub_Logo.png',link:'https://github.com/fergusonB'},
        {place:'LinkedIn', logo:'static/menu/contact/LI-Logo.png',link:'https://www.linkedin.com/in/brendenferguson/'}
    ]


</script>

<svelte:head>
    <title>Contact</title>
</svelte:head>

<div  class="p-3 m-auto rounded-md bg-white w-11/12  md:w-2/3 bg-opacity-75 ">


{#each contactInfo as contact}
    <a target="_blank" href={contact.link}>

         <img class="w-11/12 m-auto my-3 p-3 rounded-lg drop-shadow-md bg-white  transition-scale duration-200 hover:scale-105" src={contact.logo} alt={contact.place}> 

    </a> 
{/each}

</div>