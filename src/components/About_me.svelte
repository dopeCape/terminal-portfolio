<script>
import {isAbout} from "../store/MainStore.js";
const close = (e)=>{
	$isAbout = false;
}

</script>

<div class="main_about_div">
<h2 on:click={close} class="close">x</h2>
<div class="about_contents">

	its about me
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
.about_contents{
color:white;
margin-left: 5px;
}
.main_about_div{
	display: flex;
	transition: width 1.5s linear, height 1.5s linear;
	border:1px solid white;
	border-radius:15px;
	height:99%;

	background: black;
	width: 99%;
}

</style>
