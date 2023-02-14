<script>
	import { Tick,Loded } from '../store/MainStore.js';


	
	let width = 0;
	let parentW=null;

	$:{
	
	$Tick++;
	if (parentW==0){
		console.log(parentW)
		$Loded  = false
	}
	else if (width+4 === parentW){
		console.log("why tho",width, parentW)

	}
	}

</script>
	
<div class="main-div">
	<div class="loading-container" bind:offsetWidth={parentW}>
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
		height: 4px;
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

		height: 100%;
	
		background: gray;
		animation: move 4s ;
	}
</style>
