<script>
	// import Nav from '../components/Nav.svelte';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	/* main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	} */
</style>

<Navigation {segment}/>
<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>

<Footer></Footer>