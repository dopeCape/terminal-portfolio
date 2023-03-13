<script>
	import {closed, isAbout, windowsOpen, classList } from '../store/MainStore.js';

	const close = (e) => {
		$isAbout = false;
		$closed= true;
		$windowsOpen = $windowsOpen - 1;
		doMeDaddy();

	};
	const doMeDaddy = () => {
		for (let i = 1; i < 4; i++) {
			let x = parseInt($classList[i][3]);
			if (x > parseInt($classList[1][3])) {
				x = x - 1;
				$classList[i] = 'div' + x;
			}
		}
	};
let clickRunCode=false;
</script>

<div class="main_about-div">

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
		

		<p class="json_braces">&#123</p>
		<p class="json_data">name:"tejes"</p>
		<p class="json_data">race:"human"</p>
		<p class="json_data">level:"18"</p>
		<p class="json_data">spells_i_know:["rust","go","python","js","ts"]</p>
		<p class="json_braces">&#125</p>
		<p></p>
		</div>
		<div class="text_info" />
	</div>
</div>

</div>

<style>
	
	.json_braces{

			margin-bottom: 5px;

		align-self: center;
		color: var(--color1);
	
	}
	.json_data{

		margin-bottom: 5px;

		align-self: center;
		color: var(--color1);
	}
	.img_container > img {

	width:100%;
	object-fit:scale-down ;
    max-height: 100%;	}

	.img_container {
		object-fit: cover;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		max-height: 100%;
		max-width: 100%;

		position: absolute;
		grid-area: img;
		border-right: 1px solid gray;
	}
	.info_container {
		text-justify: auto;

		grid-area: json;
		justify-content: center;

		width: 100%;
		display: flex;
		flex-direction: column;
		height: 100%;
		position: absolute;
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
			'img json'
			'text text';
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
		font-size: 19px	;
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
