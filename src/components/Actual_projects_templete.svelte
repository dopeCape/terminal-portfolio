<script>
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { classNos, windowsOpen } from '../store/MainStore.js';
	export let data = {};
	const clickedDemo = () => {
		window.open(data.demoLink, 'blank');
	};
	const clickedGitHub = () => {
		window.open(data.githubLink, 'blank');
	};

	let root;

	/* onMount(()=>{ */
	/* anime({ */
	/* 	targets:".iframe_cont", */

	/* 	left:["-200%","0%"], */

	/* 	duration:5000, */

	/* }) */

	/* }) */
</script>

<div class="templete" bind:this={root}>
	{#if $classNos[3] == 4}
		<div class="iframe_cont">
			<iframe class="iframe" title="project" src={data.demoLink} frameborder="0" />
		</div>
	{/if}
	<div class="dis_cont {$classNos[3] == 4 ? 'max' : $classNos[3] == 3 ? 'min' : 'min '} ">
		{#if $classNos[3] != 2}
			<div class="dis">
				{data.dis}
			</div>
		{/if}
		<div class="feild_cont {$classNos[3] == 2 ? 'full_fied' : 'half_fied'}">
			<div class="logo_stack {$classNos[3] == 2 ? 'full_fied' : 'half_fied'}">
				<fieldset class="stack_fieldset field {$classNos[3] == 2 ? 'full_fied' : 'half_fied'}">
					<legend class="stack">Stack used</legend>
					{#each data.stackUsed as data}
						<div class="tags">{data}</div>
					{/each}
				</fieldset>
				{#if $classNos[3] != 2}
					<div class="logo">
						{#if data.lang == 'rust'}
							<i class="fa-brands fa-rust" />
						{:else if data.lang == 'js'}
							<i class="fa-brands fa-js" />
						{:else if data.lang == 'go'}
							<i class="fa-brands fa-golang" />
						{/if}
					</div>
				{/if}
			</div>

			<fieldset class="links_fieldset  field">
				<legend class="links">Links</legend>
				<button class="demo but" on:click={clickedDemo}><i class="fa-solid fa-link" /> </button>
				<button class="github but" on:click={clickedGitHub}
					><i class="fa-brands fa-github" /></button
				>
			</fieldset>
		</div>
	</div>
</div>

<style>
	.half_fied {
		width: 50%;
		max-height: 100%;
	}
	.full_fied {
		width: 100%;
		max-width: 100%;
	}
	.tags {
		color: var(--color1);
		font-size: 0.9rem;

		width: 50%;
	}
	.but:hover {
		transform: scale(1.03);
	}
	.but {
		transition: transform 200ms linear;
		width: 70px;
		font-size: 30px;
		height: 70px;
		background: var(--color3);
		outline: none;
		border: 3px solid var(--color3);
	}
	.logo_stack {
		height: 50%;
		max-height: 50%;
		width: 100%;
		position: relative;
		display: flex;
		margin-top: 10px;
		margin-right: 10px;
	}
	.logo {
		height: 100%;
		width: 50%;
		color: var(--color4);
		font-size: 135px;
		margin-left: 50px;
		margin-bottom: 10px;
	}
	.stack_fieldset {
		display: grid;
		max-height: 100%;
		overflow: hidden;
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: repeat(2, 1fr);
		margin-right: 10px;
	}

	.links_fieldset {
		margin-right: 10px;
		margin-top: 10px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.links {
		color: var(--color4);
	}
	.stack {
		color: var(--color4);
	}
	.field {
		height: 100%;

		border: 2px solid var(--color3);
	}
	.feild_cont {
		display: flex;
		flex-direction: column;

		height: 100%;

		margin-left: 5px;
	}

	.dis_cont {
		padding: 0;
		width: 100%;
		position: relative;

		overflow: hidden;
		display: flex;
	}
	.max {
		height: 35%;
		max-height: 35%;
	}
	.min {
		height: 90%;
		max-height: 90%;
	}
	.dis::-webkit-scrollbar {
		width: 0;
	}
	.dis {
		width: 40%;
		line-break: strict;
		margin-left: 5%;
		max-height: 100%;
		overflow: scroll;
		text-align: center;
		margin-top: 10px;

		flex-wrap: wrap;
		color: var(--color2);
		line-height: 25px;
		text-align: left;
	}
	.iframe {
		width: 90%;
		height: 90%;
		border: 1px solid var(--color3);
		border-right: 2px solid var(--color3);
	}

	.iframe_cont {
		background: url('https://media.tenor.com/n4w0VzWFbtgAAAAC/loading.gif') center center no-repeat;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;

		position: relative;
		width: 100%;
		height: 60%;
	}
	.templete {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		max-height: 100%;
		overflow: hidden;
		flex-direction: column;
	}
</style>
