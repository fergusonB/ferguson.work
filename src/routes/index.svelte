<script>



</script>

<svelte:head>
	<title>Home</title>
</svelte:head>


<div class="text-4xl text-center text-white">
	<h1 id="name"> Brenden Ferguson</h1>
	<div id="landing-bounce">V</div>
</div>


<div class="bg-blue-800 text-3xl text-white" id="education">
	<div>
		<h2 class="font-bold">BA, Business Administration</h2>
		<h3>California State University, Fullerton</h3>
		<h3 class="text-gray-300 text-2xl">Concentration in Entrepreneurship</h3>
	</div>
	<div>
		<img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/California_State_University%2C_Fullerton_seal.svg" alt="California state university fullerton logo">
	</div>
</div>

<div class="text-black bg-white text-2xl" >
	<div>
		<img src="ferguson.png" alt="Ferguson enterprises">
	</div>
	<div>
		<h2>Years of commercial sales experience at the largest plumbing wholesaler in the US.
	</div>

</div>

<div class="bg-blue-800 text-3xl text-white">
	<div>
		<p>
			I have a passion for technology, especially web-related.
			<br>
			While I am largely self-taught through projects, I have completed Harvard's CS50 course as well as algorithm & data structure training at Algoexpert, and even took a handful of computer science courses while at CSUF.
		</p>
	</div>
	<div>
	
		<img class="h-3" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/svelte.svg" alt="Svelte">
		<img class="h-3" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/javascript.svg" alt="Javascript">
		<img class="h-3" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/css3.svg" alt="CSS">	
		<img class="h-3" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/html5.svg" alt="HTML">
		<img class="h-3" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/rust.svg" alt="Rust">
		<img class="h-3" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/python.svg" alt="Python">
		<img class="h-3" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/git.svg" alt="Git">
		<img class="h-3" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linux.svg" alt="Linux">

	


	</div>
</div>




<style>
/* animation bounces up and down */
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



</style>
