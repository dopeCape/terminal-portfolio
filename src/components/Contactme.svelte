<script>
	import { isContact, windowsOpen, classList } from '../store/MainStore.js';

	const close = (e) => {
		$isContact = false;
		doMeDaddy();
		$windowsOpen = $windowsOpen - 1;
	};
	const doMeDaddy = () => {
		for (let i = 1; i < 4; i++) {
			let x = parseInt($classList[i][3]);
			if (x > parseInt($classList[2][3])){
			x = x - 1;
			$classList[i] = 'div' + x;
			}
		
		}
	};
</script>

<div class="main_contact_div">
	<h2 on:click={close} class="close">x</h2>
	<div class="contact_containts">its contact me</div>
</div>

<style>
	.close {
		position: absolute;
		right: 10px;
		font-size: 20px;
		z-index: 3;
		margin: 0;
		color: red;
		cursor: pointer;
	}
	.contact_containts {
		color:var(--color3);
		margin-left: 5px;
	}
	.main_contact_div:hover{

	border:2px solid var(--color3) ;
	}
	.main_contact_div {
		display: flex;
		position: relative;
	transition: width 1.5s linear, height 1.5s linear,all 1s ease-out,border 0s;

		/* border-radius: 10px; */
		height: 99%;

		background: var(--foreground);
		width: 99%;
	}
</style>
