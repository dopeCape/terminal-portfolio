<script>
	import LoadingScreen from '../components/LoadingScreen.svelte';
	import AboutMe from '../components/About_me.svelte';
	import { Loded, isAbout, isContact, isProj ,windowsOpen,classList} from '../store/MainStore.js';
	import Contactme from '../components/Contactme.svelte';
	import ProjectTemplate from '../components/Project_template.svelte';
	let main_div_class = "1_div";
$:{
	if ($windowsOpen == 1){
	null			

	}
	if($windowsOpen ==2 ){
	main_div_class = "for2";
	}
	if($windowsOpen == 3){
	main_div_class = "for3";
	}
	if($windowsOpen == 4){
	main_div_class = "for4";
	}
	
}
</script>

<div class="movable">
	<div class={$Loded ? 'main-div '+main_div_class : 'loading_main_div'}>
		<div class={$isAbout || $isContact || $isProj ? 'loading div1' : 'loading div-full'}>
			<LoadingScreen />
		</div>

		{#if $isAbout}
			<div class={$classList[1]+" about"}>
				<AboutMe />
			</div>
		{/if}
		{#if $isContact}
			<div class={$classList[2] + " contact"}>
				<Contactme />
			</div>
		{/if}
		{#if $isProj}
			<div class= {$classList[3] + " project"}>
			<ProjectTemplate />
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
		display: grid;
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
		grid-template: "div1 div2";
	}
	.for3 {
	grid-template: 	"div1 div3"
			"div2 div3";
	}
	.for4{
	grid-template: "div1 div2 div4 div4"
			"div3 div3 div4 div4";

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
	grid-area: div1;	
	}
	.div2 {
	grid-area: div2;
	}
	.div3 {
	grid-area: div3;
	}
	.div4{

	grid-area: div4;
	}
</style>
