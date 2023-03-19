<script>
	import { closed, isProj, windowsOpen, classList } from '../store/MainStore.js';
	import ActualProjectsTemplete from './Actual_projects_templete.svelte';
	import Contactme from './Contactme.svelte';
 /* demoLink; */
	/* export let githubLink; */
	/* export let stackUsed; */
	/* export let discription; */
	/* export let logo; */
	

	const projects = [
	{
	demoLink:"https://golang.org",
	githubLink:"https://github.com/dopeCape/config",
	stackUsed:["rust","tauri","svelte","anime.js","mongoDB","rocket"],
	dis:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
	lang:"rust"

	},{
	demoLink:"https://youtube.com",
	githubLink:"https://github.com/dopeCape/config",
	stackUsed:["go","xyx","svelte","anime.js","mongoDB","rocket"],
	dis:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
	lang:"go"

	},{
demoLink:"https://reddit.com",
	githubLink:"https://github.com/dopeCape/config",
	stackUsed:["js","xyx","svelte","anime.js","mongoDB","rocket"],
	dis:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
	lang:"js"
	}

	]
let counter =0;
const prevProj =()=>{
	if (counter == 0){
		counter  = projects.length -1
	}else{
	counter = counter -1
	counter = counter % (projects.length)
	console.log(counter)

	}

	
}
const nextProj =()=>{
 
	counter = counter +1;
	counter = counter % (projects.length)
	console.log(counter)

}

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

<div class="main_proj-div">
	<h2 on:click={close} class="close">x</h2>
	<div class="proj_container">
		<div class="proj_tittle">what has he made?</div>
		<div class="proj_contents">
		<ActualProjectsTemplete  data={projects[counter]} />
		
</div>
	</div>
	<div class="buttons_proj">
<div class="previos" on:click={prevProj}>
<i class="fa-solid fa-arrow-left icon"></i>
</div>
	<div class="next" on:click={nextProj}>
<i class=" fa-solid fa-arrow-right icon"></i>

</div>	


<div class="prev"></div>
	</div>

</div>

<style>
	:global() {
		--font-size: ;
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
		font-size: 50px;

		color: var(--color4);

		position: relative;
	}
	.buttons_proj {
		position: absolute;
		width: 100%;
		height: 5%;
	bottom: 2%;
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
