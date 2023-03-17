<script>
	import { closed, isProj, windowsOpen, classList } from '../store/MainStore.js';
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
		<div class="proj_tittle"> what has he made?</div>

		<div class="proj_contents">
			<div class="iframe_proj" >
			<iframe src="https://google.com" frameborder="0"></iframe>
			</div>
			<div class="proj_details" ></div>
			<div class="next_lang" />
			<div class="prev_lang" />
			<div class="sub_next" />
			<div class="sub_prev" />
		</div>
	</div>
</div>

<style>
	:global() {
		--font-size: ;
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
	.proj_contents{
	height: 95%;
	max-height: 95%;
	width:100%;
	position: absolute;
	top:5%;
	max-width: 100%;
	display: grid;
	grid-template:'' ;
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

		/* border-radius:10px; */
		height: 99%;

		background: var(--foreground);
		width: 99%;
	}
</style>
