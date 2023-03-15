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
		let el = document.getElementsByClassName('font_resize');
		for (let i = 0; i < el.length; i++) {
			let x;
			if ($windowsOpen == 2) {
				x = offsetH * 0.02;
			} else {
				x = offsetH * 0.03;
			}

			console.log(el);
			el[i].style.fontSize = `${x}px`;
		}

	if(root !=undefined){

		if($windowsOpen ==2){

		root.style.setProperty("--font",`${offsetH *0.015}px`)
		root.style.setProperty("--margin_title",`${offsetH * 0.02}px`)
		}else{

		root.style.setProperty("--font",`${offsetH *0.017}px`)
		root.style.setProperty("--margin_title",`${offsetH * 0.01}px`)
		}

	}

	}
	let root;
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

<div class="main_about-div" bind:offsetWidth={offsetW} bind:this={root} bind:offsetHeight={offsetH}>
	<div>
		<div class="tittle_bar">
			<div class="about_content font_resize"><p class="tittle_bar_tittle">who is this guy?</p></div>
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
					<p class="json_data font_resize"><span class="property">{t.n} : </span>{t.v}</p>
				{/each}
				<div class="skill_meter">
					<fieldset class="skill_border">
						<legend class="font_resize">Sys Info</legend>
						<div class="lang_progress font_resize">rust</div>
						<div class="lang_progress font_resize">go</div>
						<div class="lang_progress font_resize">js/ts</div>
						<div class="lang_progress font_resize">webdev</div>

						<div class="lang_progress font_resize">css</div>
						<div class="lang_progress font_resize">py/cpp</div>
					</fieldset>
				</div>
			</div>
			<div class="text_info " >
			<p class="info_para">Hi there! I'm glad you stopped by. My name is [insert your name here], and I am an 18-year-old self-taught developer with a passion for building scalable backends and low-level programming.</p>

<p class="info_para">Ever since I was a child, I've been fascinated by technology and its ability to make our lives easier. As I grew older, I realized that I wanted to be a part of the team that creates the technology that we use every day.</p>

<p class="info_para">I began my journey by teaching myself the basics of programming, and I quickly fell in love with the world of software development. I found myself drawn to the more challenging aspects of programming, such as building scalable backends and working with low-level languages.</p>

<p class="info_para">I am constantly looking for new challenges to tackle and new technologies to learn. I believe that the key to success in this field is a willingness to learn and adapt to new technologies as they emerge.</p>

<p class="info_para">If you're interested in building scalable backends or working with low-level programming, I would love to connect with you. Feel free to reach out to me, and let's work together to build the next generation of technology! </p>
			</div>
		</div>
	</div>
</div>

<style>
.tittle_bar_tittle{
	margin-top: var(--margin_title);


}
.info_para{
	margin-top:10px ;

}
.text_info::-webkit-scrollbar{
width: 0;

}
.text_info{
	font-size: var(--font);
	position: absolute;
	max-height: 100%;
	overflow:scroll ;
	max-width: 100%;
	text-align: center;	
	color: var(--Comment);

}
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
		margin-right:5px ;
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
	.json_data::-webkit-scrollbar{
		width: 0;
		}

	.json_data {

		margin-bottom: 10px;
		transition: all 200ms cubic-bezier(0.22, 1, 0.36, 1);

			max-width: 100%;

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
	width: 0;
	}
	.info_container::-webkit-scrollbar-thumb {
		border-radius: 30%;
	}

	.info_container {
		margin-top: 5px;
		text-justify: auto;

		grid-area: json;
		justify-content: flex-start;

		width: 100%;
		display: flex;
		flex-direction: column;
		height: 100%;
		position: absolute;

		overflow-y: scroll;
		overflow-x: scroll;

		max-width: 100%;
		max-height: 100%;
	}
	.text_info {
		width: 100%;
		height: 100%;
		border-top: 1px solid gray;
		grid-area: text;
		position: absolute;
		padding-left: 9px;
		padding-right:9px ;
		max-width: 100%;
		text-align: left;
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
		gap: 5px;
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
