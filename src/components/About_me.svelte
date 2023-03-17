<script>
	import { fade } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	import anime from 'animejs';
	import { closed, isAbout, windowsOpen, classList, classNos } from '../store/MainStore.js';
	import { linear } from 'svelte/easing';
	let About_loded = false;
	const q = [
		{
			d: 'Talk is cheap. Show me the code',
			a: 'Linus Torvalds'
		},
		{ d: 'Computers are like bikinis They save people a lot of guesswork ', a: 'Sam Ewing' },
		{
			d: 'First learn computer science and all the theory Next develop a programming style.Then forget all that and just hack',
			a: 'George Carrette'
		},
		{
			d: 'The best thing about a boolean is even if you are wrong, you are only off by a bit',
			a: 'Me'
		}
	];
	const close = (e) => {
		doMeDaddy();
	};
	let r = Math.floor(Math.random() * q.length);
	let qu = q[r];
	let interval = null;
	let timeout = null;

	let htime = null;
	let meterLoad = false;
	onDestroy(() => {
		clearInterval(interval);
		clearTimeout(timeout);

		clearTimeout(htime);
	});
	onMount(() => {
		let iteration = 0;

		const letters = 'abcdefghijklmnopqrstuvwxyz!@#$';
		clearInterval(interval);

		interval = setInterval(() => {
			document.getElementById('quo').innerText = document
				.getElementById('quo')
				.innerText.toLowerCase()
				.split('')
				.map((letter, index) => {
					if (index < iteration) {
						return document.getElementById('quo').dataset.value[index];
					}
					if (document.getElementById('quo').dataset.value[index] == ' ') {
						return ' ';
					}

					return letters[Math.floor(Math.random() * 30)];
				})
				.join('');

			if (iteration >= document.getElementById('quo').dataset.value.length) {
				clearInterval(interval);
				About_loded = true;

				setTimeout(() => {
					let i = 0;
					let it = setInterval(
						() => {
							if (i < tejes.length) {
								rTejas.push(tejes[i]);
								rTejas = rTejas;

								i++;
							} else {
								clearInterval(it);
								htime = setTimeout(() => {
									anime({
										targets: '.skill_meter',
										height: '100%',
										duration: 2000,
										opacity: '1',
										easing: 'easeOutQuint',
										direction: 'forwards'
									});
									meterLoad = true;
									anime({
										targets: '.meter_cont',
										opacity: 1,
										delay: 500,
										duration: 1000,
										easing: 'easeOutQuint',
										direction: 'forwards'
									});
									anime({
										targets: '.meter',
										direction: 'forwards',
										keyframes: [
											{ height: '10px', width: '10px', duration: 500, easing: 'easeOutQuint' },
											{ width: '75%', duration: 500, easing: 'easeOutQuint' }
										],

										delay: 500
									});
									let meters = document.getElementsByClassName('meter_color');
									console.log(meters);
									let i = 0;
									let loadinInterval = null;

									loadinInterval = setInterval(() => {
										if (i >= meters.length) {
											clearInterval(loadinInterval);
										}
										anime({
											targets: meters[i],
											delay: 1300,
											duration: 1500,
											easing: 'easeOutElastic(1, .2)',
											width: meters[i].dataset.value
										});
										i++;
									}, 200);
									anime({
										targets: '.text_info',
										duration: 1000,
										delay: 3000,
										easing: 'easeOutElastic(1, .2)',
										opacity: '1'
									});
								}, 200);
							}
						},

						400
					);
				}, 1100);
			}

			iteration += 1 / 2;
		}, 10);
	});
	$: {
		if ($windowsOpen < 5) {
			anime({
				targets: '.skill_meter',
				height: '100%',
				duration: 2000,
				opacity: '1',
				easing: 'easeOutQuint',
				direction: 'forwards'
			});
			meterLoad = true;
			anime({
				targets: '.meter_cont',
				opacity: 1,
				delay: 500,
				duration: 1000,
				easing: 'easeOutQuint',
				direction: 'forwards'
			});
			anime({
				targets: '.meter',
				direction: 'forwards',
				keyframes: [
					{ height: '10px', width: '10px', duration: 500, easing: 'easeOutQuint' },
					{ width: '75%', duration: 500, easing: 'easeOutQuint' }
				],

				delay: 500
			});
			let meters = document.getElementsByClassName('meter_color');
			console.log(meters);
			let i = 0;
			let loadinInterval = null;

			loadinInterval = setInterval(() => {
				if (i >= meters.length) {
					clearInterval(loadinInterval);
				}
				anime({
					targets: meters[i],
					delay: 1300,
					duration: 1500,
					easing: 'easeOutElastic(1, .2)',
					width: meters[i].dataset.value
				});
				i++;
			}, 200);
			anime({
				targets: '.text_info',
				duration: 1000,
				delay: 3000,
				easing: 'easeOutElastic(1, .2)',
				opacity: '1'
			});
		}
	}
	const doMeDaddy = () => {
		$closed = parseInt($classList[1][3]);

		if ($classNos[3] < $classNos[1]) {
			$classNos[3] = $classNos[3] + 1;
		}
		if ($classNos[2] < $classNos[1]) {
			$classNos[2] = $classNos[2] + 1;
		}

		$classNos[1] = 0;
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
			if ($classNos[1] == 4) {
				x = offsetH * 0.02;
			} else {
				x = offsetH * 0.03;
			}

			console.log(el);
			el[i].style.fontSize = `${x}px`;
		}

		if (root != undefined) {
			if ($windowsOpen == 2) {
				root.style.setProperty('--font', `${offsetH * 0.019}px`);
				root.style.setProperty('--margin_title', `${offsetH * 0.02}px`);
			} else {
				root.style.setProperty('--font', `${offsetH * 0.017}px`);
				root.style.setProperty('--margin_title', `${offsetH * 0.01}px`);
			}
		}
	}
	let root;
	let clickRunCode = false;
	let offsetW;
	let offsetH;
	let rTejas = [];

	const tejes = [
		{ n: 'Name', v: 'Tejes K.', e: 'Y7(#! U1' },
		{ n: 'race', v: 'Human', e: '(*!&@bjkhwde ' },
		{ n: 'level', v: '18', e: '(*&@ 342(* &@#' },
		{
			n: 'spells_i_know',
			v: ['rust', 'go', 'python', 'js', 'ts', 'cpp'],
			e: '[!$f!(,F13r8F,&T*#$3480,(#&*$,$(*&34,(&*$]'
		},
		{ n: 'goal', v: 'trying to escape matrix', e: 'YR9*#$' },
		{ n: 'mage_class:', v: '[MERN]', e: '18!*$H' },
		{
			n: 'Tools',
			v: ['react', 'svelte', 'gin', 'rocket', 'tauri', 'mongoDB', 'node.js', 'AWS', 'expess'],
			e: '[!$f!(,F13r8F,&T*#$3480,(#&*$,$(*&34,(&*$]'
		}
	];
</script>

<div class="main_about-div" bind:offsetWidth={offsetW} bind:this={root} bind:offsetHeight={offsetH}>
	<h2 on:click={close} class="close">x</h2>
	{#if About_loded}
		<div in:fade={{ delay: 1050, duration: 200, easing: linear }}>
			<div class="tittle_bar">
				<div class="about_content font_resize">
					<p class="tittle_bar_tittle">who is this guy?</p>
				</div>
			</div>
			<div class={$classNos[1] == (4 || 3) ? 'main_content for2' : 'main_content for3'}>
				<div class="info_container">
					{#each rTejas as t}
						<p class="json_data font_resize">
							<span class="property"
								>{t.n} : <span class="json_pro json" data-value={t.d}>{t.e}</span></span
							>
						</p>
					{/each}

					<div class={$classNos[1] > 2 ? 'skill_meter ' : 'skill_meter dish'}>
						<fieldset class="skill_border">
							<legend class="font_resize">Sys Info</legend>


							<div class="meter_cont">Rust<div class="meter"><div data-value="70%" class="meter_color"></div></div></div>

							<div class="meter_cont">Go<div class="meter"><div data-value="75%"class="meter_color"></div></div></div>
							<div class="meter_cont">Webdev<div class="meter"><div data-value="78%" class="meter_color"></div></div></div>
							<div class="meter_cont">Cpp/Py<div class="meter"><div data-value="50%" class="meter_color"></div></div></div>

							
						</fieldset>
					</div>
				</div>

				<div class={$classNos[1] == 4 ? 'text_info' : 'text_info dish'}>
					<p class="info_para">
						Hi there! I'm glad you stopped by. My name is Tejas , and I am an 18-year-old
						self-taught developer with a passion for building scalable backends and low-level
						programming.
					</p>

					<p class="info_para">
						Ever since I was a child, I've been fascinated by technology and its ability to make our
						lives easier. As I grew older, I realized that I wanted to be a part of the team that
						creates the technology that we use every day.
					</p>

					<p class="info_para">
						I began my journey by teaching myself the basics of programming, and I quickly fell in
						love with the world of software development. I found myself drawn to the more
						challenging aspects of programming, such as building scalable backends and working with
						low-level languages.
					</p>

					<p class="info_para">
						I am constantly looking for new challenges to tackle and new technologies to learn. I
						believe that the key to success in this field is a willingness to learn and adapt to new
						technologies as they emerge.
					</p>

					<p class="info_para">
						If you're interested in building scalable backends or working with low-level
						programming, I would love to connect with you. Feel free to reach out to me.
					</p>
				</div>
			</div>
		</div>
	{:else}
		<div
			class="pre_lode"
			out:fade={{ duration: 200, easing: linear }}
			in:fade={{ duration: 200, easing: linear }}
		>
			<div class="img_container">
				<img
					src="https://firebasestorage.googleapis.com/v0/b/portfolio-db7ba.appspot.com/o/20220830164014_IMG_1555.JPG?alt=media&token=2f3a98d1-9057-4bee-8afa-cedacc64fbbc"
					alt="me"
					class="img"
				/>
			</div>
			<div class="quotes">
				<p data-value={qu.d} class="qu" id="quo">{qu.d}</p>
				<span class="autor">---{qu.a}</span>
			</div>
		</div>
	{/if}
</div>

<style>
	.svg_text{
	font: 1rem;
	color: var(--color4);
	opacity: 1;
	}
	.svg_main {


	width: 50%;
	height: 100%;
	position: absolute;
	color:brown;
	}
	.dish {
		display: none;
	}
	.json_pro {
		color: red;
	}
	.meter {
		border-top: 1px solid white;

		border-bottom: 1px solid white;

		border-left: 1px solid white;

		border-right: 1px solid white;
		width: 10px;
		margin-top: 10px;

		position: relative;
	}
	.meter_color {
		height: 100%;
		padding: 0px;
		position: absolute;

		background: var(--color4);
	}
	.meter_cont {
		color: var(--color2);
		margin-top: 10px;
		opacity: 0;
	}
	#quo {
		color: var(--color4);
		justify-content: center;
		text-align: center;
		width: 75%;

		max-width: 75%;
		height: 50px;
		color: var(--color4);
	}
	.progress_cont {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.autor {
		color: var(--Comment);
		font-size: 12px;

		text-align: end;
	}
	.qu {
		color: var(--color4);
		justify-content: center;
		text-align: center;
		width: 75%;

		max-width: 75%;
		height: 50px;
	}

	.quotes {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-content: center;

		width: 100%;
		height: 50%;
		max-width: 100%;
		order: 2;
	}

	.pre_lode {
		position: absolute;
		width: 100%;
		height: 100%;
		max-width: 100%;
		max-height: 100%;
		display: flex;
		flex-direction: column;
	}
	.img_container {
		height: 50%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 50%;
		max-width: 100%;
		position: relative;
		object-fit: fill;
	}
	.img {
		height: 50%;
		width: 50%;
		position: absolute;

		object-fit: cover;
		object-position: 90% 30%;
	}
	.tittle_bar_tittle {
		margin-top: var(--margin_title);
	}
	.info_para {
		margin-top: 10px;
	}
	.text_info::-webkit-scrollbar {
		width: 0;
	}
	.text_info {
		font-size: var(--font);
		position: absolute;
		max-height: 100%;
		opacity: 0;
		overflow: scroll;
		max-width: 100%;
		text-align: center;
		color: var(--Comment);
	}
	.lang_progress {
		color: var(--color2);
		position: relative;
		left: 50%;
		text-align: center;
		display: inline-block;

		border-radius: 50%;
		height: 100%;
		width: 40%;
	}

	legend {
		color: var(--color2);
		z-index: 2;
	}
	.skill_meter {
		width: 100%;
		height: 0;
		max-height: 100%;
		max-width: 100%;
		opacity: 0;
	}
	fieldset {
		margin-inline-start: 0;
		margin-inline-end: 0;
		padding-block-start: 0;
		padding-block-end: 0;
		padding-inline-start: 0;
		padding-inline-end: 0;
	}
	.skill_border {
		border-top: 1px solid var(--color3);
		border-bottom: 1px solid var(--color3);
		border-left: 0px;
		border-right: 0px;
		position: initial;
		margin-left: 5px;
		margin-right: 5px;
		grid-gap: 1px;
	position: relative;
		height: 100%;
		grid-template-columns: repeat(2, 50%);

		grid-template-rows: repeat(2, 50%);
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
	.json_data::-webkit-scrollbar {
		width: 0;
	}

	.json_data {
		margin-bottom: 10px;
		transition: all 200ms cubic-bezier(0.22, 1, 0.36, 1);

		margin-left: 5px;
		max-width: 100%;

		color: var(--color1);
	}

	/* .img_container > img { */
	/* 	width: 100%; */
	/* 	height: 100%; */
	/* 	object-fit: cover; */
	/* 	object-position: 50% 35%; */

	/* 	max-height: 100%; */
	/* } */

	/* 	.img_container { */
	/* 		object-fit: cover; */
	/* 		box-sizing: border-box; */
	/* 		width: 100%; */
	/* 		height: 100%; */
	/* 		max-height: 100%; */
	/* 		max-width: 100%; */
	/* 		left: 1px; */
	/* 		position: absolute; */
	/* 		grid-area: img; */
	/* 	} */
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

		grid-area: text;
		position: absolute;
		padding-left: 9px;
		padding-right: 9px;
		max-width: 100%;
		text-align: left;
		max-height: 100%;
	}
	.for3 {
		grid-template: 'json';
	}
	.for2 {
		grid-template:
			'json json json'
			'text text text';
	}
	.main_content {
		display: grid;
		max-height: 100%;
		overflow: hidden;
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
