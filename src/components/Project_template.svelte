<script>
import {closed,isProj,windowsOpen,classList,classNos} from "../store/MainStore.js";
const close = (e)=>{
		doMeDaddy();
	
	



}
	const doMeDaddy = () => {
		$closed = parseInt($classList[3][3]);


		if($classNos[1]<$classNos[3]){

		$classNos[1] =$classNos[1] +1;
		}
if($classNos[2]<$classNos[3]){


		$classNos[2] =$classNos[2] +1;
		}

		$classNos[3] =0;
		for (let i = 1; i < 4; i++) {
			let x = parseInt($classList[i][3]);
			if (x > parseInt($classList[3][3])){
			x = x - 1;
			$classList[i] = 'div' + x;
			}
		
			}

		$isProj = false;

		$windowsOpen = $windowsOpen -1
		};

</script>

<div class="main_proj-div">
<h2 on:click={close} class="close">x</h2>
<div class="proj_contents">
	 sample templte for projects
</div>
</div>


<style>
.close{

	position: absolute;
		right: 10px;
		font-size: 20px;
		z-index: 3;
		margin: 0;

		color: red;
		cursor: pointer;

}
.proj_contents{
color:var(--color3);
margin-left: 5px;
}
.main_proj-div:hover{

	border:2px solid var(--color3);
}
.main_proj-div{
	transition: width 1.5s linear, height 1.5s linear,all 1s ease-out,border 0s;
	position: relative;

	/* border-radius:10px; */
	height:99%;

	background: var(--foreground);
	width: 99%;
}

</style>
