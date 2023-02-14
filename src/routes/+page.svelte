<script>

import LoadingScreen from "../components/LoadingScreen.svelte"
import {Loded} from "../store/MainStore.js"
</script>
<div class="main-div">

{#if !$Loded}



<div class = "loading">
<LoadingScreen />
</div>
{:else}
<h1>loaded</h1>
{/if}


</div>

<style>

	.main-div{
	display: flexbox	;
	flex-direction: row;

	}
	.loading{
z-index : 1;
	}
	.kernal{

z-index : 2;

	}

</style>
