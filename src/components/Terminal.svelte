<script>
	import { Terminal_command } from '../store/ComponentStore.js';
	let input;
	let width = 100;
	let height = 100;
	let currnet_dir = '~';

	let command_to_render = [];

	const handelTerInput = (e) => {
		console.log(e.keyCode);
		if (e.keyCode == '13') {
			if (e.target.value == 'clear') {
				command_to_render = [];
				$Terminal_command.push({ command: e.target.value, dir: currnet_dir });
				e.target.value = '';
			} else {
				$Terminal_command.push({ command: e.target.value, dir: currnet_dir });
				command_to_render.push({ command: e.target.value, dir: currnet_dir });

				console.log($Terminal_command);
				command_to_render = command_to_render;
				e.target.value = '';
			}
		}
	};
	const focusOnTermailInput = () => {
		input.focus();
	};
</script>


<div class="main_div" on:click={focusOnTermailInput}  style="height: {height}%;width:{width}%;">
	<div>
		{#each command_to_render as ter}
			<div class="pre_dir">{ter.dir}</div>
			<div class="pre command">{ter.command}</div>
		{/each}
	</div>
	<div class="input_fied_contiainer">
		<div class="current_dir_input">{currnet_dir}</div>
		<div class="current_input">
			{">"}<input  type="text" bind:this={input} on:keydown={handelTerInput} class="terminal_input" />
		</div>
	</div>
</div>

<style>
	.main_div {
		position: absolute;
		border: 3px solid red;
		border-radius: 10px;

		overflow: auto;
	}
	.current_input {
		display: flex;
		flex-direction: row;
	}
	.terminal_input {
		caret-shape: block;
		width:100%;
		border: none;
		outline: none;
	}
	.ter_input:focus {
		outline: none;
	}
</style>
