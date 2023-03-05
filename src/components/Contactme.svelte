<script>
	import { isContact } from '../store/MainStore.js';
	const close = (e) => {
		$isContact = false;
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
		color: white;
		margin-left: 5px;
	}
	.main_contact_div {
		display: flex;
		transition: width 1.5s linear, height 1.5s linear;
		border: 1px solid white;
		border-radius: 15px;
		height: 99%;

		background: black;
		width: 99%;
	}
</style>
