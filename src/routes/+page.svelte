<script>
	import LoadingScreen from '../components/LoadingScreen.svelte';
	import anim from 'animejs/lib/anime';
	import { crossfade } from 'svelte/transition';
	import { expoOut, quintOut } from 'svelte/easing';
	import { Terminal_command } from '../store/ComponentStore.js';
	import { scale, fade } from 'svelte/transition';
	import AboutMe from '../components/About_me.svelte';
	import {
		closed,
		Loded,
		isAbout,
		isContact,
		isProj,
		windowsOpen,
		classList
	} from '../store/MainStore.js';
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

	$: {
		if (root != undefined) {
			if ($windowsOpen == 1 && $Terminal_command.length > 0) {
				anim({
					targets: '.loading',
					duration: 150,

					height: '100%',
					width: '100%',

					/* easing:'spring(1,80,10,0)', */
					easing: 'easeOutQuint',
					direction: 'forwards'
				});
				root.style.setProperty('--div1t', '0');
				root.style.setProperty('--div1l', '0');
			}
			if ($windowsOpen == 2) {
				root.style.setProperty('--div1h', '100%');
				root.style.setProperty('--div2w', '50%');
				root.style.setProperty('--div2h', '100%');
				root.style.setProperty('--div2t', '0');
				root.style.setProperty('--div2l', '50%');

				anim({
					targets: '.loading',
					duration: 400,
					top: '0',
					left: '0',
					height: '100%',
					width: '50%',

					/* easing:'spring(1,80,10,0)', */
					easing: 'easeOutQuint',
					direction: 'forwards'
				});

				anim({
					targets: '.div3 ',
keyframes: [
						{ top: '0', left: '50%', scale: 0.8, easing: 'easeOutQuint', duration: 200 },
						{ scale: 1, easing: 'easeOutQuint', duration: 1500 }
					],
					duration: 400,
					height: '100%',
					width: '50%',



					easing: 'easeOutQuint',
					direction: 'forwards'
				});
				anim({
					targets: '.div2 ',
					duration: 400,
					height: '100%',
					width: '50%',
					top: '0',

					left: '50%',
					easing: 'easeOutQuint',
					direction: 'forwards'
				});
			}
			if ($windowsOpen == 3) {
				anim({
					targets: '.loading',
					height: '50%',
					width: '50%',
					duration: 400,
					easing: 'easeOutQuint',
					direction: 'forwards'
				});

				anim({
					targets: '.div2',
					keyframes: [
						{ top: '50%', left: '0', scale: 0.8, easing: 'easeOutQuint', duration: 200 },
						{ scale: 1, easing: 'easeOutQuint', duration: 1500 }
					],
					duration: 400,

					maxWidth: '50%',
					waxHeight: '50%',

					width: '50%',
					height: '50%',
					/* easing:'spring(1,80,10,0)', */
					easing: 'easeOutQuint',
					direction: 'forwards'
				});

				anim({
					targets: '.div3',
					keyframes: [
						{ top: '0', left: '50%', scale: 0.8, easing: 'easeOutQuint', duration: 200 },
						{ scale: 1, easing: 'easeOutQuint', duration: 1500 }
					],

					left: '50%',
					maxWidth: '50%',

					height: '100%',
					/* easing:'spring(1,80,10,0)', */
					easing: 'easeOutQuint',
					direction: 'forwards'
				});

				root.style.setProperty('--div3w', '50%');
				root.style.setProperty('--div3h', '100%');
				root.style.setProperty('--div3t', '0');
				root.style.setProperty('--div3l', '50%');
			}
			if ($windowsOpen == 4) {
				root.style.setProperty('--div2w', '25%');
				root.style.setProperty('--div2h', '50%');
				root.style.setProperty('--div2t', '0');
				root.style.setProperty('--div2l', '25%');
				root.style.setProperty('--div3w', '50%');
				root.style.setProperty('--div3h', '50%');
				root.style.setProperty('--div3t', 'unset');
				root.style.setProperty('--div3l', 'unset');
				anim({
					targets: '.loading',
					width: '25%',
					duration: 400,
					easing: 'easeOutQuint',
					direction: 'forwards'
				});
				anim({
					targets: '.div2',
					keyframes: [
						{ top: '0', left: '25%', scale: 0.8, easing: 'easeOutQuint', duration: 200 },
						{ scale: 1, easing: 'easeOutQuint', duration: 1500 }
					],

					maxWidth: '25%',

					/* easing:'spring(1,80,10,0)', */
					easing: 'easeOutQuint',
					direction: 'forwards'
				});
				anim({
					targets: '.div3',
					keyframes: [
						{ top: '50%', left: '0', scale: 0.8, easing: 'easeOutQuint', duration: 200 },
						{ scale: 1, easing: 'easeOutQuint', duration: 1500 }
					],
					duration: 400,

					width: '50%',
					maxWidth: '50%',
					maxheight: '50%',
					height: '100%',

					/* easing:'spring(1,80,10,0)', */
					easing: 'easeOutQuint',
					direction: 'forwards'
				});
				root.style.setProperty('--div4w', '50%');
				root.style.setProperty('--div4h', '100%');
				root.style.setProperty('--div4t', '0');
				root.style.setProperty('--div4l', '50%');
			}
		}
	}
</script>

<div class={$Loded ? 'main-div ' + main_div_class : 'loading_main_div'} bind:this={root}>
	<div
		class={($isAbout || $isContact || $isProj) && $Loded ? ' loading  div1 ' : 'loading main-div  '}
	>
		<LoadingScreen  --Comment={c != undefined ? c.Comment : 'red'} --color2={c != undefined ? c.color2 : 'red'} --color3={c != undefined ? c.color3 : 'red'}   />

	</div>

	{#if $isAbout && $Loded}
		<div
			id="about"
			class={$classList[1] + ' about screen'}
			in:scale={{ duration: 800, start: 0.1, easing: expoOut }}

		>
			<AboutMe
				--foreground={c.foreground}
				--color3={c.color3}
				--color2={c.color2}
				--color4={c.color4}
				--color1={c.color1}
				--Comment={c.Comment}
			/>
		</div>
	{/if}
	{#if $isContact && $Loded}
		<div
			class={$classList[2] + ' contact screen'}
			in:scale={{ duration: 800, start: 0.1, easing: expoOut }}
		>
			<Contactme

				--Comment={c.Comment}
				--foreground={c.foreground}
				--color3={c.color3}
				--color4={c.color4}
				--color2={c.color2}
				--color1={c.color1}
			/>
		</div>
	{/if}
	{#if $isProj && $Loded}
		<div
			class={$classList[3] + ' project screen'}
			in:scale={{ duration: 800, start: 0.1, easing: expoOut }}
		>
			<ProjectTemplate

				--Comment={c.Comment}
				--color2={c.color2}
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

		
		transition: width 500ms ease-in-out, height 500ms ease-in-out;
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

	



	.loading {
		z-index: 1;
		height: (--div1h);
		width: (--div1w);

	}

	
	.div1 {

		position: absolute;
		width: var(--div1w);	
		height:  var(--div1h);
		max-width: var(--div1w);
		max-height: var(--div1h);
		top: var(--div1t);
		left: var(--div1l);
	}
	.div2 {
		position: absolute;
		max-width: var(--div2w);
		transition: width 500ms ease-in-out, height 500ms ease-in-out;
		max-height: var(--div2h);width: var(--div2w);	
		height:  var(--div2h);
		top: var(--div2t);
		left: var(--div2l);
	z-index: 1;
		/* animation: div2-3 0.5s linear  forwards; */
		/* animation-play-state: paused; */
		/* animation-timing-function: linear; */
	}
	.div3 {

		position: absolute;
		max-width: var(--div3w);
		max-height: var(--div3h);width: var(--div3w);	
		height:  var(--div3h);
		
		transition: width 500ms ease-in-out, height 500ms ease-in-out;
		top: var(--div3t);
		left: var(--div3l);
		/* animation-name: form2-3; */
		/* animation-duration: 1s; */
		/* animation-fill-mode: forwards; */

	}
	.div4 {

position: absolute;
		max-width: var(--div4w);
		transition: width 500ms ease-in-out, height 500ms ease-in-out;
		max-height: var(--div4h);width: var(--div4w);	
		height:  var(--div4h);
		top: var(--div4t);
		left: var(--div4l);

	}
</style>
