<script>
import {isAbout,windowsOpen,classList} from "../store/MainStore.js";
const close = (e)=>{
	$isAbout = false;
	doMeDaddy();
		$windowsOpen = $windowsOpen -1
}
	const doMeDaddy = () => {
		for (let i = 1; i < 4; i++) {
			let x = parseInt($classList[i][3]);
			if (x > parseInt($classList[1][3])){
			x = x - 1;
			$classList[i] = 'div' + x;
			}
		
		}
	};
</script>

<div class="main_about_div">
<h2 on:click={close} class="close">x</h2>
<div class="about_contents">

	its about me
</div>
</div>


<style>
.close{

	position:absolute;
		right: 10px;
		font-size: 20px;
		z-index: 3;
		margin: 0;

		color: red;
		cursor: pointer;

}
.about_contents{
color:white;
margin-left: 5px;
}
.main_about_div{
	position: relative;
	display: flex;
	transition: width 1.5s linear, height 1.5s linear;
	border:1px solid white;
	border-radius:15px;
	height:99%;

	background: black;
	width: 99%;
}

</style>
