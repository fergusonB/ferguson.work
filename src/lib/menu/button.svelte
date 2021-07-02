<script>
    export let button
</script>


    <a sveltekit:prefetch class="transition bg-opacity-90 bg-white rounded-md h-10 w-10 hover:scale-125 shadow-md hover:shadow-xl" 
    href={button.link}>{button.name[0]}</a>
