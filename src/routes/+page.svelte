<script>
	import LoadingScreen from '../components/LoadingScreen.svelte';
	import AboutMe from '../components/About_me.svelte';
	import { Loded, isAbout, isContact, isProj } from '../store/MainStore.js';
	import Contactme from '../components/Contactme.svelte';
	import StatusBar from '../components/StatusBar.svelte';
	import { fade } from 'svelte/transition';
	import ProjectTemplate from '../components/Project_template.svelte';
	let mainW = 0;
	let width = '100vw';
	let tr = '0';
	$: {
		width = $isProj ? `200vmax` : '100vw';
		console.log(width);
	}
	$: {
		tr = $isProj ? '50%' : '';
	}
</script>

<div class="movable" style:translate="{0} 0">
	<div class={$Loded ? 'main-div' : 'loading_main_div'} style:width bind:offsetWidth={mainW}>
		<div class={$isAbout || $isContact || $isProj ? 'loading div1' : 'loading div-full'}>
			<LoadingScreen />
		</div>

		{#if $isAbout}
			<div class="div2">
				<AboutMe />
			</div>
		{/if}
		{#if $isContact}
			<div class="div2">
				<Contactme />
			</div>
		{/if}
	</div>
</div>

<style>
	.movable {
		height: 100vh;
		width: 100vw;
	}

	.main-div {
		/* column-gap:5px; */
		display:grid;
		position: relative;
		height: 100vh;

		background: black;
		overflow: auto;

		box-sizing: border-box;
	}

	.loading_main_div {
		display: grid;
		/* column-gap:5px; */
		position: relative;
		height: 100vh;
		background: black;
		overflow: auto;
		width: 100vw;
		box-sizing: border-box;
		grid-template-rows: 100%;
	}
	.for2 {
		grid-auto-columns: 50% 50%;
	}
	.for3 {
	}
	.loading {
		z-index: 1;
		height: 100%;
		width: 100%;
	}
	.div-full {
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.div1 {
		display: inline;
		grid-column-start: 1;
		grid-column-end: 2;
	}
	.div2 {
		grid-column-start: 2;
		grid-column-end: 3;
	}
	.div3 {
	}
</style>
