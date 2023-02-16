<script>
	import { Tick,Loded } from '../store/MainStore.js';

	import {fade,fly} from "svelte/transition";

	
	let width = 0;
	let parentW=null;

	$:{
	
	$Tick++;
	if (parentW==0){
		console.log(parentW)
		$Loded  = false
	}
	else if (width+4 === parentW){
		$Loded = true

	}
	}

</script>
	
<div class="main-div" out:fade>
	<div class="loading-container" bind:offsetWidth={parentW} out:fade>
		<div bind:offsetWidth={width}   class="loading-bar"/>
	</div>
</div>

<style>

	.main-div {
		

		background: black;
		height: 100vh;
		width:100vw;
		margin-right: 50px;
		display: flex;
		gap:30%;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.loading-container {
		margin-top: 5px;
	width: 40%;

		height: 8px;
		border-radius: 5px;
		border: 2px solid gray ;
		position: relative;


	}
	@keyframes move{
		0%{
		width: 0%;
		}
		20%{
		width: 20%;
		}
		40%{
		width: 50%;
		}60%{
		width: 65%;
		}80%{
		width: 70%;
		}100%{
		width: 100%;
		}
	}
	.loading-bar {

		position: absolute;
		padding: 2px;
		height: 100%;
	
		background: grey;
		animation: move 4s ;
	}
</style>
