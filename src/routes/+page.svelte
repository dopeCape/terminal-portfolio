<script>


import LoadingScreen from "../components/LoadingScreen.svelte"
import {Loded} from "../store/MainStore.js"
import Canvas from "../components/Canvas.svelte";

	import Terminal from "../components/Terminal.svelte";

</script>
<div class="main-div">

{#if !$Loded}



<div class = "loading">
<LoadingScreen />
</div>
{:else}
<div class="teminall">
<Terminal/>

<Terminal/>
</div>
{/if}


</div>

<style>
.teminall{
	display: flex;
	flex-direction: row;

	width: 100%;
	height: 100%;
}

	body{
	height: 100vh;
	width: 100vh;
	}
	.main-div{
	display: flexbox	;
	min-height: 100vh;	 
	overflow: auto;	
	flex-direction: row;

	}
	.loading{
z-index : 1;
	}

</style>
