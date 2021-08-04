<script context="module">
    export async function load({page}){
		const path = page.path.split('/').slice(1)
        return {props:{path}}

    }

</script>

<script>
	import '../app.postcss';
	import Menu from '$lib/menu/menu.svelte';
	import PWD from '$lib/pwd.svelte';
	import Footer from '$lib/menu/footer.svelte'

	export let path



</script>

<noscript>
	<div id="noscript">
		<p>This website was built with heavy use of javascript and is not intended to be viewed with it off.
			<br>
			I do not collect any information about you or your visit.
		</p>
	</div>
</noscript>

<div id="container" class="z-10 min-h-screen">
	<Menu />

	<PWD {path}></PWD>

	<div>
		<slot></slot>
	</div>
	<Footer />
	
</div>
<div class="stars z-0 fixed" />
<style>
	#container{
		background-color:#121212;
	}

	.stars{

		pointer-events: none;
		width: 400vw;
		height: 400vh;
		top: 50%;
		left: 50%;
		margin-top: -200vh;
		margin-left: -200vw;
		-webkit-animation: logo-rotate 200s linear infinite;
		animation: logo-rotate 200s linear infinite;
		background-size: 240px;
		-webkit-backface-visibility: visible;
		backface-visibility: visible;
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMjQwIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTA2IDkwaDJ2MmgtMnpNNzQgNjNoMXYxaC0xek0yMyA2NmgxdjFoLTF6TTUwIDExMGgxdjFoLTF6TTYzIDEyOGgxdjFoLTF6TTQ1IDE0OWgxdjFoLTF6TTkyIDE1MWgxdjFoLTF6TTU4IDhoMXYxaC0xek0xNDcgMzNoMnYyaC0yek05MSA0M2gxdjFoLTF6TTE2OSAyOWgxdjFoLTF6TTE4MiAxOWgxdjFoLTF6TTE2MSA1OWgxdjFoLTF6TTEzOCA5NWgxdjFoLTF6TTE5OSA3MWgzdjNoLTN6TTIxMyAxNTNoMnYyaC0yek0xMjggMTYzaDF2MWgtMXpNMjA1IDE3NGgxdjFoLTF6TTE1MiAyMDBoMXYxaC0xek01MiAyMTFoMnYyaC0yek0wIDE5MWgxdjFIMHpNMTEwIDE4NGgxdjFoLTF6Ii8+PC9zdmc+);
	}
	@-webkit-keyframes logo-rotate {
		to {
			transform: rotate(-360deg);
		}
	}
	@keyframes logo-rotate {
		to {
			transform: rotate(-360deg);
		}
	}

	#noscript{
		color: #fff;
		font-size: 2em;
		font-weight: bold;
		text-align: center;
		padding: 1em;
		margin: 0;
		width: 100%;
	}
</style>
