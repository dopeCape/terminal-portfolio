<script>
	import { closed, isContact, windowsOpen, classNos, classList } from '../store/MainStore.js';

  import Highlight from "svelte-highlight";
  import typescript from "svelte-highlight/languages/typescript";

  import atomOneDark from "svelte-highlight/styles/atom-one-dark";
 	 
	 let code = "let tejas  = 'tejas'";


	const close = (e) => {
		doMeDaddy();
	};
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	const doMeDaddy = () => {
		$closed = parseInt($classList[2][3]);

		if ($classNos[3] < $classNos[2]) {
			$classNos[3] = $classNos[3] + 1;
		}
		if ($classNos[1] < $classNos[2]) {
			$classNos[1] = $classNos[1] + 1;
		}

		$classNos[2] = 0;
		for (let i = 1; i < 4; i++) {
			let x = parseInt($classList[i][3]);
			if (x > parseInt($classList[2][3])) {
				x = x - 1;
				$classList[i] = 'div' + x;
			}
		}
		$isContact = false;
		$windowsOpen = $windowsOpen - 1;
	};
</script>

<svelte:head>
  {@html atomOneDark}
</svelte:head>

<div class="main_contact_div">
	<h2 on:click={close} class="close">x</h2>
	<div class="contain">
		<div class="contact_tittle"><p class="title">wanna talk?</p></div>
		<div class="contact">
			<div class="contact_form_cont">
				<input class="email contact_input" type="email" />

				<textarea class="text_contact contact_input language-js" />

<Highlight language={typescript} {code} />
		
			</div>
			<div class="social_media_cont" />
		</div>
	</div>
</div>

<style>
	.contact_input {
		background: var(--foreground);
		caret-color: var(--color1);
		color: var(--color1);
		border: 1px solid var(--color3);
		outline: none;
	}
	.text_contact {
	}
	.contain {
		display: flex;
		flex-direction: column;
		width: 100%;
		position: absolute;
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

	.contact_tittle {
		color: var(--color3);
		padding-left: 45%;

		height: 5%;
		width: 100%;
		border-bottom: 1px solid gray;
	}
	.main_contact_div:hover {
		border: 2px solid var(--color3);
	}
	.main_contact_div {
		display: flex;
		position: relative;
		transition: width 1.5s linear, height 1.5s linear, all 1s ease-out, border 0s;

		/* border-radius: 10px; */
		height: 99%;

		background: var(--foreground);
		max-width: 99%;
		overflow: hidden;
		max-height: 99%;
		width: 99%;
	}
</style>
