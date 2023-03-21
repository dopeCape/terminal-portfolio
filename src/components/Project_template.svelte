<script>
	import { closed, isProj, windowsOpen, classList, classNos } from '../store/MainStore.js';
	import { fade } from 'svelte/transition';
	import ActualProjectsTemplete from './Actual_projects_templete.svelte';
	import Contactme from './Contactme.svelte';
	/* demoLink; */
	/* export let githubLink; */
	/* export let stackUsed; */
	/* export let discription; */
	/* export let logo; */
	let root;
	$: {
		if (root != undefined) {
			if ($classNos[3] == 4) {
				root.style.setProperty('--pos', '50%');
				root.style.setProperty('--icon_font', '35px');
			}
			if ($classNos[3] == 3) {
				root.style.setProperty('--pos', '50%');
				root.style.setProperty('--icon_font', '30px');
			}
			if ($classNos[3] == 2) {
				root.style.setProperty('--icon_font', '20px');
				root.style.setProperty('--pos', '15px');
			}
		}
	}

	const projects = [
[		{
			demoLink: 'https://netflix-clone-3f085.web.app/',
			githubLink: 'https://github.com/dopeCape/netflix_clone',
			dis: 'It is a  netflix-alike-app written in javaScript with help of React as it ui Framework along  with redux to manage its state .Firebase was used to deploy and auth .For managing payments ans subs i used stripe',
			stackUsed: ['Js', 'React', 'Redux', 'Firebase', 'tailwind', 'stripe'],
			lang: 'js'
		},{
			demoLink: 'https://reddit.com',
			githubLink: 'https://github.com/dopeCape/config',
			stackUsed: ['js', 'xyx', 'svelte', 'anime.js', 'mongoDB', 'rocket'],
			dis: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
			lang: 'js'
		}],

		[{
			demoLink: 'https://golang.org',
			githubLink: 'https://github.com/dopeCape/config',
			stackUsed: ['rust', 'tauri', 'svelte', 'anime.js', 'mongoDB', 'rocket'],
			dis: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
			lang: 'rust'
		}],
		[{
			demoLink: 'https://youtube.com',
			githubLink: 'https://github.com/dopeCape/config',
			stackUsed: ['go', 'xyx', 'svelte', 'anime.js', 'mongoDB', 'rocket'],
			dis: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
			lang: 'go'
		}],
		
	];
	let counter = 0;
	let lang =0;
	const handleUp =()=>{
		counter =0;
		lang= lang + 1;
		lang = lang % projects.length;
		
	
	}
	const handleDown =()=>{
		
		counter =0;
		if (lang == 0) {
			lang = projects.length - 1;
		} else {
			lang = lang - 1;
			lang = lang % projects.length;
			console.log(lang);
		}

	
	}
	const prevProj = () => {
		if (counter == 0) {
			counter = projects[lang].length - 1;
		} else {
			counter = counter - 1;
			counter = counter % projects[lang].length;

		}
	};
	const nextProj = () => {
		counter = counter + 1;
		counter = counter % projects[lang].length;

	};

	const close = (e) => {
		doMeDaddy();
	};
	const doMeDaddy = () => {
		$closed = parseInt($classList[3][3]);
		for (let i = 1; i < 4; i++) {
			let x = parseInt($classList[i][3]);
			if (x > parseInt($classList[3][3])) {
				x = x - 1;
				$classList[i] = 'div' + x;
			}
		}

		$isProj = false;

		$windowsOpen = $windowsOpen - 1;
	};
</script>

<div class="main_proj-div" bind:this={root}>
	<h2 on:click={close} class="close">x</h2>
	<div class="proj_container">
		<div class="proj_tittle">what has he made?</div>
		<div class="proj_contents">
			<ActualProjectsTemplete data={projects[lang][counter]} />
		</div>

		
		{#if lang < projects.length-1 && lang!=projects.length-1}
		<div  transition:fade={{duration:200}} class=" up {$classNos[3] == 2?'up_down':' og_up'}" on:click={handleUp}>
			<i class="fa-solid fa-up-long" />
		</div>
		{/if}
		{#if lang > 0}
		<div  transition:fade={{duration:200}} class="down {$classNos[3] == 2?'down_down':'og_down '}" on:click={handleDown}> 
			<i class="fa-solid fa-down-long" />
		</div>
		{/if}
	</div>
	<div class="buttons_proj">
		{#if counter > 0}
			<div transition:fade={{ duration: 200 }} class="previos" on:click={prevProj}>
				<i class="fa-solid fa-arrow-left icon" />
			</div>
		{/if}
		{#if counter < projects.length - 1 && counter!=projects[lang].length-1}
			<div transition:fade={{ duration: 200 }} class="next" on:click={nextProj}>
				<i class=" fa-solid fa-arrow-right icon" />
			</div>
		{/if}

		<div class="prev" />
	</div>

	<div class="current_info" />
</div>

<style>
	:global() {
		--font-size: ;
		--pos: 50%;
	}
	.og_up{
		top: 5%;
		left: 10px;

	}
	.og_down{
	bottom: 10px;
		right: 10px;
	}
	.down{
		position: absolute;

	
		cursor: pointer;

		z-index: 3;
		color: var(--color4);
	
		font-size: var(--icon_font);
	}
	.up_down{
	left: 40%;
	bottom: 5px;

	}
	.down_down{
	left: 60%;
	bottom: 5px;
	}
	.up {
		position: absolute;

		cursor: pointer;
		z-index: 3;
		width: 100px;
		z-index: 3;
		color: var(--color4);
		font-size: var(--icon_font);
	}
	.previos {
		position: absolute;
		left: 10px;
	}
	.next {
		position: absolute;
		right: 10px;
	}

	.icon {
		cursor: pointer;
		font-size: var(--icon_font);

		color: var(--color4);

		position: relative;
	}
	.buttons_proj {
		padding-top: 10px;
		position: absolute;
		width: 100%;
		height: 5%;
		bottom: var(--pos);
		display: flex;
		justify-content: space-around;
	}
	.close {
		position: absolute;
		right: 10px;
		font-size: 20px;
		z-index: 3;
		margin: 0;

		color: red;
		cursor: pointer;
	}
	.proj_contents {
		height: 95%;
		max-height: 95%;
		width: 100%;
		position: absolute;
		top: 5%;
		max-width: 100%;
		display: grid;
		grid-template: '';
	}

	.proj_container {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.proj_tittle {
		color: var(--color3);
		width: 100%;
		font-size: var(--font_size);
		height: 5%;
		position: absolute;
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid gray;
	}
	.main_proj-div:hover {
		border: 2px solid var(--color3);
	}
	.main_proj-div {
		transition: width 1.5s linear, height 1.5s linear, all 1s ease-out, border 0s;
		position: relative;

		transition: border-color 50ms linear;
		border: 2px solid var(--foreground);
		/* border-radius:10px; */
		height: 99%;

		background: var(--foreground);
		width: 99%;
	}
</style>
