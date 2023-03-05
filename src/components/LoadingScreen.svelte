<script>
	import { Tick, Loded } from '../store/MainStore.js';
	import Terminal from './Terminal.svelte';

	/* import {fade,fly} from "svelte/transition"; */

	let width = 0;
	let parentW = null;
	let parentH = null;
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

<div class="main-div">
	<div
		id="contaier"
		class={$Loded ? 'done-loading' : 'loading-container'}
		bind:offsetWidth={parentW}
	>
		{#if !$Loded}
			<div bind:offsetWidth={width} class="loading-bar" />
		{:else}
			<Terminal/>
		{/if}
	</div>
</div>

<style>
	.main-div {
		background: black;
		height: 100%;
		width: 100%;
		margin-right: 50px;
		display: flex;
		gap: 30%;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	#contaier {
		transition: width 2s linear, height 2s linear, border-radius 2s linear;
	}
	.done-loading {
		width: 40%;

		height: 8px;

		position: relative;
		border: 5px solid gray;
		border-radius: 10px;
		position: relative;
		animation-name: make-it-big;
		/* animation-delay: 500ms; */
		animation-duration: 1.0s;
		animation-fill-mode: forwards;
		animation-timing-function: linear;
		}
	@keyframes make-it-wide{
	0%{
	width:40% ;
	}
	50%{
	width: 80%;
	}
	100%{
	width: 99%;
	}
	
	}
	@keyframes make-it-big {
		0% {
			margin-top: 5px;
			width: 40%;

			height: 8px;

			border: 2px solid gray;
			position: relative;
		}
		50% {
			border: 2px solid gray;
			border-radius: 10px;
			height: 99%;
			width: 40%;
			/* visibility: hidden; */

		}
		60%{
		border: 2px solid gray;
			border-radius: 10px;
			height: 99%;
			width: 40%;
		
		}
		100% {
			margin:0;
			border: 2px solid gray;
			height: 99%;
			width: 99%;
		}
	}
	.loading-container {
		margin-top: 5px;
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
		background: grey;
		animation: move 4s;
	}
</style>
