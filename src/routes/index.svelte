<script>

import {onMount} from 'svelte'
import Headline from '$lib/home/headline.svelte'

onMount(() => {
	document.getElementById('top').onclick = function() {
	window.scrollTo(0,0);
	}

})


function scroll100VHdown() {
	var windowHeight = window.innerHeight;
	window.scrollTo({
		top: windowHeight,
		left: 0,
		behavior: 'smooth'
		
	});
}





</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Brenden Ferguson's portfolio website with blog, applications, and contact information.">
</svelte:head>



<div class="text-4xl text-center text-white h-screen">
	<Headline/>
	<button on:click={scroll100VHdown} id="landing-bounce">V</button>
</div>


<div class="bg-blue-800 bg-blue-800-2 text-3xl text-white h-screen flex justify-around p-3" id="education">
	<div>
		<h2 class="font-bold">BA, Business Administration</h2>
		<h3>California State University, Fullerton</h3>
		<h3 class="text-gray-300 text-2xl">Concentration in Entrepreneurship</h3>
	</div>
	<div>
		<img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/California_State_University%2C_Fullerton_seal.svg" alt="California state university fullerton logo">
	</div>
</div>

<div class="bg-blue-800 text-white text-2xl h-screen flex justify-around p-3" >
	<div>
		<img class="bg-white rounded-lg p-3" src="ferguson.png" alt="Ferguson enterprises">
	</div>
	<div class="p-3">
		<h2>Three years experience in sales and account management at the largest plumbing wholesaler in the U.S.
	</div>
	

</div>

<div class="bg-blue-800 bg-blue-800-3 text-2xl p-3 text-white flex justify-center ">

	<div id="icons" >

		<img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/svelte.svg" alt="Svelte">
		<img    src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/javascript.svg" alt="Javascript">
		<img   src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/css3.svg" alt="CSS">	
		<img   src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/html5.svg" alt="HTML">
		<img  src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/rust.svg" alt="Rust">
		<img  src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/python.svg" alt="Python">
		<img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/git.svg" alt="Git">
		<img  src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linux.svg" alt="Linux">

	


	</div>
</div>

<button class="bg-white text-black px-2 text-2xl text-center rounded-md" id="top">
	^
</button>

<style>
#landing-bounce {
	animation: bounce 1s infinite;
	-webkit-animation: bounce 1s infinite;
}
@keyframes bounce {
	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-30px);
	}
	100% {
		transform: translateY(0);
	}
}

.bg-blue-800-2 {
	background-image: linear-gradient(to bottom, rgba(18,18,18,1), rgba(0,0,0,0));
	background-size: cover;
	background-position: center;
}
.bg-blue-800-3 {
	background-image: linear-gradient(to top, rgba(18,18,18,1), rgba(0,0,0,0));
	background-size: cover;
	background-position: center;
}


#top{
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 10;
	

}


#icons {

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: 100%;




}

#icons img {
	width: 10vh;
	padding: 1vh;
}





</style>
