<script>
	import Terminal from '../components/Terminal.svelte';

	import LoadingScreen from '../components/LoadingScreen.svelte';
	import { isAbout } from '../store/MainStore.js';
</script>

<div class="main-div">
	<div class={$isAbout ? 'loading div1' : 'loading div-full'}>
		<LoadingScreen />
	</div>
	{#if $isAbout}
		<div class="div2">
			<Terminal />
		</div>
	{/if}
</div>

<style>
	.main-div {
		display:grid;
		position: relative;
		height: 100vh;
		background:black ;
		overflow: auto;
		width: 100vw;
		box-sizing: border-box;
		grid-template-rows: 100%;
		grid-auto-columns: 50% 50%;
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
</style>
