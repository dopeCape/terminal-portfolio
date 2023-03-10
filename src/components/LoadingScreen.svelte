<script>
	import { Loded, windowsOpen } from '../store/MainStore.js';
	import Terminal from './Terminal.svelte';

	import { dark_theme, light_theme, curent_theme } from '../store/Colorstore.js';

	/* import {fade,fly} from "svelte/transition"; */

	let width = 0;
	let parentW = null;
	let parentH = null;
	let root;
	let color;
	export const maxheight = '100vh';

	$: {
		if (root != undefined) {
			if ($curent_theme == 'dark') {
				color = $dark_theme;
			} else {
				color = $light_theme;
			}
			root.style.setProperty('--foreground', color.foreground);
			root.style.setProperty('--background', color.background);
		}
	}
	$: {
		if (parentW == 0) {
			console.log(parentW);
			$Loded = false;
		} else if (width + 4 === parentW) {
			/* parentW = 100 */

			/* parentH = 100; */
			$Loded = true;
		}
	}
</script>

<div class={$Loded ? 'fl main_div_loading ' : 'fl main_div_loading '} bind:this={root}>
	<div
		id="contaier"
		class={$Loded ? 'done-loading' : 'loading-container'}
		bind:offsetWidth={parentW}
	>
		{#if !$Loded}
			<div bind:offsetWidth={width} class="loading-bar" />
		{:else}
			<Terminal
				--foreground={color.foreground}
				--color3={color.color3}
				--color4={color.color4}
				--color1={color.color1}
			/>
		{/if}
	</div>
</div>

<style>
	:global(:root) {
		--maxheight: 100vh;
		--foreground:
		--background:"";
	}
	.fl {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.main_div_loading {
		max-height: 100vh;
		background: var(--background);
		height: 100%;
		width: 100%;

		position: relative;
		gap: 30%;
	}
	#contaier {
		transition: width 2s linear, height 2s linear, border-radius 2s linear;
	}

	.done-loading:hover{
	 border:2px solid var(--color3)
	}
	.done-loading {
		width: 40%;

		height: 8px;


		overflow: hidden;
		position: absolute;
		border: 2px solid gray;
		position: relative;
		animation-name: make-it-big;
		animation-duration: 1s;
		animation-fill-mode: forwards;
		animation-timing-function: linear;
	}
	@keyframes make-it-wide {
		0% {
			width: 40%;
		}
		50% {
			width: 80%;
		}
		100% {
			width: 99%;
		}
	}
	@keyframes make-it-big {
		0% {
			margin-top: 5px;
			width: 40%;
			height: 8px;
			position: relative;
		}
		50% {
			border: 2px solid gray;
			height: 99%;
			width: 40%;
		}
		60% {
			height: 99%;
			width: 40%;
		}
		100% {


			height: 99%;
			width: 99%;

		}
	}
	.loading-container {
		width: 40%;

		height: 8px;

		border: 2px solid gray;
		position: relative;
	}
	@keyframes move {
		0% {
			width: 0%;

			visibility: hidden;
		}
		1% {
			visibility: visible;
			width: 1%;
		}
		10% {
			width: 10%;
		}
		20% {
			width: 20%;
		}
		40% {
			width: 50%;
		}
		60% {
			width: 65%;
		}
		80% {
			width: 70%;
		}
		100% {
			width: 100%;
			visibility: hidden;
		}
	}
	.loading-bar {
		position: absolute;
		padding: 2px;
		height: 100%;

		background: var(--foreground);
		/* background: white; */
		animation: move 4s;
	}
</style>
