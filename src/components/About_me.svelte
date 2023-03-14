<script>
	import { closed, isAbout, windowsOpen, classList } from '../store/MainStore.js';

	const close = (e) => {
		doMeDaddy();
	};
	const doMeDaddy = () => {
		$closed = parseInt($classList[1][3]);
		for (let i = 1; i < 4; i++) {
			let x = parseInt($classList[i][3]);

			if (x > parseInt($classList[1][3])) {
				x = x - 1;
				$classList[i] = 'div' + x;
			}
		}

		$isAbout = false;

		$windowsOpen = $windowsOpen - 1;
	};
	$: {
		console.log(windowsOpen);
		let el = document.getElementsByClassName('json_data');
		for (let i = 0; i < el.length; i++) {
			let x;
			if ($windowsOpen == 2) {
				x = offsetH * 0.01;
			} else {
				x = offsetH * 0.02;
			}

			console.log(el);
			el[i].style.fontSize = `${x}px`;
		}
	}
	let clickRunCode = false;
	let offsetW;
	let offsetH;

	const tejes = [
		{ n: 'Name', v: 'Tejes K.' },
		{ n: 'race', v: 'Human' },
		{ n: 'level', v: '18' },
		{ n: 'spells_i_know', v: ['rust', 'go', 'python', 'js', 'ts', 'cpp'] },
		{ n: 'goal', v: 'trying to escape matrix' },
		{ n: 'mage_class:', v: '[MERN]' },
		{
			n: 'Tools',
			v: ['react', 'svelte', 'gin', 'rocket', 'tauri', 'mongoDB', 'node.js', 'AWS', 'expess']
		}
	];
</script>

<div class="main_about-div" bind:offsetWidth={offsetW} bind:offsetHeight={offsetH}>
	<div>
		<div class="tittle_bar">
			<div class="about_content">who is this guy?</div>
			<h2 on:click={close} class="close">x</h2>
		</div>
		<div class="main_content">
			<div class="img_container">
				<img
					src="https://firebasestorage.googleapis.com/v0/b/portfolio-db7ba.appspot.com/o/20220830164014_IMG_1555.JPG?alt=media&token=2f3a98d1-9057-4bee-8afa-cedacc64fbbc"
					alt="u have a dogshit internet"
				/>
			</div>
			<div class="info_container">
				{#each tejes as t}
					<p class="json_data"><span class="property">{t.n} : </span>{t.v}</p>
				{/each}
				<div class="skill_meter">
					<fieldset class="skill_border">
						<legend>Sys Info</legend>
						<div class="lang_progress">rust</div>
						<div class="lang_progress">go</div>
						<div class="lang_progress">js/ts</div>
						<div class="lang_progress">webdev</div>

						<div class="lang_progress">css</div>
						<div class="lang_progress">py/cpp</div>
					</fieldset>
				</div>
			</div>
			<div class="text_info" />
		</div>
	</div>
</div>

<style>
.lang_progress{
	color:var(--color2);
	text-align: center;

		height: 100%;

}

	legend {
		color: var(--color2);
		z-index: 2;
	}
	.skill_meter {
		width: 100%;
		height: 100%;
		max-height: 100%;
		max-width: 100%;


	}
	fieldset{
	margin-inline-start:0 ;
	margin-inline-end:0 ;
	padding-block-start:0;
	padding-block-end:0 ;
	padding-inline-start: 0;
	padding-inline-end:0 ;
	}
	.skill_border {
		border: 1px solid var(--color3);
		position: initial;

		grid-gap: 1px;


		height: 100%;
	grid-template-columns: repeat(3,33%);

	grid-template-rows: repeat(2,50%);
		display: grid;
	}
	.property {
		color: var(--color4);
		margin-right: 9px;
	}
	.json_braces {
		margin: 0;
		margin-block-end: 0;

		align-self: center;
		color: var(--color1);
	}
	p {
		margin-block-end: 0;
		margin-block-start: 0;
	}
	.json_data {
		margin-left: 10px;
		margin-bottom: 10px;
		transition: all 200ms cubic-bezier(0.22, 1, 0.36, 1);
		white-space: nowrap;

		color: var(--color1);
	}

	.img_container > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 35%;

		max-height: 100%;
	}

	.img_container {
		object-fit: cover;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		max-height: 100%;
		max-width: 100%;
		left: 1px;
		position: absolute;
		grid-area: img;
	}
	.info_container::-webkit-scrollbar {
		opacity: 0.4;
	}
	.info_container::-webkit-scrollbar-thumb {
		border-radius: 30%;
	}

	.info_container {
		text-justify: auto;

		grid-area: json;
		justify-content: flex-start;

		width: 100%;
		display: flex;
		flex-direction: column;
		height: 100%;
		position: absolute;
		overflow-y: scroll;
		overflow-x: hidden;

		max-width: 100%;
		max-height: 100%;
	}
	.text_info {
		width: 100%;
		height: 100%;
		border-top: 1px solid gray;
		grid-area: text;
		position: absolute;
		max-width: 100%;
		max-height: 100%;
	}
	.main_content {
		display: grid;
		grid-template:
			'img json json'
			'text text text';
		width: 100%;
		height: 95%;
		position: absolute;
		top: 5%;
	}
	.tittle_bar {
		display: flex;
		width: 100%;
		height: 5%;
		position: absolute;
		text-align: center;

		font-size: 19px;
		align-items: flex-end;
		border-bottom: 1px solid grey;
	}
	.close {
		position: absolute;
		right: 10px;
		font-size: 19px;
		z-index: 3;
		margin: 0;

		height: 100%;
		color: red;
		cursor: pointer;
	}
	.about_content {
		color: var(--color3);
		height: 100%;
		width: 100%;
		text-align: center;
	}
	.main_about-div:hover {
		border: 2px solid var(--color3);
	}
	.main_about-div {
		transition: width 1.5s linear, height 1.5s linear, all 1s ease-out, border 0s;
		position: relative;

		border: 2px solid var(--background);
		/* border-radius:10px; */
		height: 99%;

		background: var(--foreground);
		width: 99%;
	}
</style>
