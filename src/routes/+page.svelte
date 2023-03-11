<script>
	import LoadingScreen from '../components/LoadingScreen.svelte';
	import {crossfade}from "svelte/transition"
	import {quintOut} from "svelte/easing"
	import {flip} from "svelte/animate"
	import {scale} from "svelte/transition"
	import AboutMe from '../components/About_me.svelte';
	import { Loded, isAbout, isContact, isProj, windowsOpen, classList } from '../store/MainStore.js';
	import { dark_theme, curent_theme, light_theme } from '../store/Colorstore.js';
	import Contactme from '../components/Contactme.svelte';
	import ProjectTemplate from '../components/Project_template.svelte';
	let root;
	let c;
	
	$: {
		if (root != undefined) {
			if ($windowsOpen > 2) {
				root.style.setProperty('--maxheight', '50vh');
			} else {
				root.style.setProperty('--maxheight', '100vh');
			}
		}
	}
	$: {
		if (root != undefined) {
			if ($curent_theme == 'dark') {
				c = $dark_theme;
			} else {
				c = $light_theme;
			}

			root.style.setProperty('--background', `${c.background}`);
		}
	}
	let main_div_class = '1_div';
	$: {
		if ($windowsOpen == 1) {
			null;
		}
		if ($windowsOpen == 2) {
			main_div_class = 'for2';
		}
		if ($windowsOpen == 3) {
			main_div_class = 'for3';
		}
		if ($windowsOpen == 4) {
			main_div_class = 'for4';
		}
	}
const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 2000,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});
</script>

	<div class={$Loded ? 'main-div ' + main_div_class : 'loading_main_div'} bind:this={root}>
		<div class={($isAbout || $isContact || $isProj)&& $Loded ? 'loading div1' : 'loading div-full'}>
			<LoadingScreen 
			--color3={c!=undefined?c.color3:"red"}
			/>
		</div>

		{#if $isAbout && $Loded}
			<div id="about" class={$classList[1] + ' about screen' } in:receive={{key:"about",duration:2000}} out:send={{key:"about",duration:2000}}>
				<AboutMe
				--foreground={c.foreground}
				--color3={c.color3}
				--color2={c.color2}
				--color4={c.color4}
				--color1={c.color1}
	/>
			</div>
		{/if}
		{#if $isContact && $Loded}
			<div class={$classList[2] + ' contact screen'} in:scale={{duration:800}}>
				<Contactme 
			--foreground={c.foreground}
				--color3={c.color3}
				--color4={c.color4}
				--color1={c.color1}
	/>
			</div>
		{/if}
		{#if $isProj  && $Loded}
			<div class={$classList[3] + ' project screen'} in:scale={{duration:800}}>
				<ProjectTemplate 
				--foreground={c.foreground}
				--color3={c.color3}
				--color4={c.color4}
				--color1={c.color1}

	/>
			</div>
		{/if}
	</div>

<style>
	:root {
		--background:
		--maxheight: 100vh;
	}
	.about {

		transition: width 500ms ease-in-out, height 500ms ease-in-out;
	}
	.movable {
		height: 100vh;
		width: 100vw;


	}

	.main-div {
		/* column-gap:5px; */
		display: grid;
		position: relative;
		height: 100vh;
		background-color: var(--background);
		overflow: auto;
		transition: 800ms;


		box-sizing: border-box;
	}
	.screen{
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;

		
		height: 100%;
		width: 100%;
	}
	.loading_main_div {
		display: grid;
		/* column-gap:5px; */
		position: relative;
		height:100vh ;
		/* background: black; */
		overflow: auto;
		width: 100%;
		box-sizing: border-box;
		grid-template-rows: 100%;
		gap: 5px;
	}

	/* @keyframes o-t { */
	/* 	0% { */
	/* 		grid-template: 'div1 div1'; */
	/* 	} */
	/* 	20% { */
	/* 		grid-template: 'div1 div1 div1 div1  div1 div1 div1 div2'; */
	/* 	} */
	/* 	40% { */
	/* 		grid-template: 'div1 div1 div1 div1 div1 div1  div2 div2'; */
	/* 	} */
	/* 	60% { */
	/* 		grid-template: 'div1 div1 div1 div1 div1 div2 div2 div2'; */
	/* 	} */
	/* 	80%{ */
	/* 		grid-template: 'div1 div1 div1 div1 div2 div2 div2 div2'; */
	/* 	} */
	/* } */
	.for2 {
		grid-template: 'div1 div2';
	}
	.for3 {
		grid-template:
			'div1 div3'
			'div2 div3';
	}
	.for4 {
		grid-template:
			'div1 div2 div4 div4'
			'div3 div3 div4 div4';
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
		max-height: var(--maxheight);
		transition: width 500ms ease-in-out, height 500ms ease-in-out;
		grid-area: div1;
	}
	.div2 {
		grid-area: div2;
	}
	.div3 {

		grid-area: div3;
		/* animation-name: form2-3; */
		/* animation-duration: 1s; */
		/* animation-fill-mode: forwards; */

	}
	.div4 {
		grid-area: div4;
	}
</style>
