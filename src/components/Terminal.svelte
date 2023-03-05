<script>
	import { Terminal_command } from '../store/ComponentStore.js';
	import { current_dir } from '../store/dir_store.js';
	import {isAbout,isContact,isProj} from "../store/MainStore.js";
	let input;

	let width = 100;
	let height = 100;
	let currnet_dir = $current_dir;
	let count;
	$: count = $Terminal_command.length - 1;
	const tree = {
		'~': {
			child: [
				{ n: ' about_me.md', t: 'f' },
				{ n: 'stuff_i_know.md', t: 'f' },
				{n:'talk_to_me.md',t:"f"},
				{ n: 'blogz.link', t: 'l' },
				{ n: 'projects i made', t: 'd' }
			]
		}
	};
	let command_to_render = [];

	const handelTerInput = (e) => {

		if (e.keyCode == '13') { //NOTE: key code 13 means "enter key"
			if (e.target.value == 'clear') {
				command_to_render = [];
				$Terminal_command.push({ command: e.target.value, dir: currnet_dir });
				count = $Terminal_command.length - 1;
				e.target.value = '';
			} else if (e.target.value == 'tejas') {
				$Terminal_command.push({ command: e.target.value, dir: currnet_dir });
				command_to_render.push({
					command: e.target.value,
					dir: currnet_dir,
					msg: `humanID:69XD420`
				});
				count = $Terminal_command.length - 1;

				command_to_render = command_to_render;
				e.target.value = '';
			} else if (e.target.value == 'ls' || e.target.value == 'dir') {
				$Terminal_command.push({ command: e.target.value, dir: currnet_dir });
				command_to_render.push({
					command: e.target.value,
					dir: currnet_dir,
					msg: tree['~'].child
				});
				count = $Terminal_command.length - 1;

				command_to_render = command_to_render;
				e.target.value = '';
			}else if(e.target.value == "./about_me.md" ||e.target.value == "./about_me" ){
						$Terminal_command.push({ command: e.target.value, dir: currnet_dir });
				command_to_render.push({
					command: e.target.value,
					dir: currnet_dir,
					msg: ""
				});
				count = $Terminal_command.length - 1;

				command_to_render = command_to_render;
				e.target.value = '';
				$isAbout = true;	
			
1
			}else if(e.target.value == "./contact"){
		
	$Terminal_command.push({ command: e.target.value, dir: currnet_dir });
				command_to_render.push({
					command: e.target.value,
					dir: currnet_dir,
					msg: ""
				});
				count = $Terminal_command.length - 1;

				command_to_render = command_to_render;
				e.target.value = '';
				$isContact = true


			}else if(e.target.value == "./projects"){
				command_to_render.push({
					command: e.target.value,
					dir: currnet_dir,
					msg: ""
				});
				count = $Terminal_command.length - 1;

				command_to_render = command_to_render;
				e.target.value = '';
				$isProj = true


			}else if(e.target.value== ""){
					$Terminal_command.push({ command: "", dir: currnet_dir });
				command_to_render.push({
					command: "",
					dir: currnet_dir,
					msg: ""
				});
				count = $Terminal_command.length - 1;

				command_to_render = command_to_render;
				e.target.value = '';
	
			}
			else {
				$Terminal_command.push({ command: e.target.value, dir: currnet_dir });
				command_to_render.push({
					command: e.target.value,
					dir: currnet_dir,
					msg: `command not found: ${e.target.value}`
				});
				count = $Terminal_command.length - 1;

				command_to_render = command_to_render;
				e.target.value = '';
			}
		} else if (e.keyCode == 38) { //NOTE:down key
			e.target.value = $Terminal_command[count].command;
			if (count > 0) {
				count = count - 1;
			}
			let len = e.target.value.length; //FIX:cursor dosent goes to end of the input after presssing the key

			e.selectionStart = e.selectionEnd = e.target.value.length;

			console.log(e.selectionEnd);
		} else if (e.keyCode == 40) { //NOTE:up key
			if (count != $Terminal_command.length - 1) {
				count = count + 1;
			}
			e.target.value = $Terminal_command[count].command;
		}
	};
	const focusOnTermailInput = () => {
		input.focus();
	};
</script>

<div class="main_div" on:click={focusOnTermailInput} style="height: {height}%;width:{width}%;">
	<div class="unmain">
		<div>
			<div>
				{#each command_to_render as ter}
					<div style="margin-bottom:8px;">
						<div class="pre_dir" style="color:white ">{ter.dir}</div>
						<div class="pre command">{'>'}{ter.command}</div>
						{#if ter.msg != undefined}
							{#if Array.isArray(ter.msg)}
								<div class="list-dirs">
									{#each ter.msg as ms}
										<span class={`type-${ms.t}`}>{ms.n}</span>
									{/each}
								</div>
							{:else}
								<div class="pre_msg">{ter.msg}</div>
							{/if}
						{/if}
					</div>
				{/each}
			</div>
			<div class="input_fied_contiainer">
				<div class="current_dir_input">{currnet_dir}</div>
				<div class="current_input">
					{'>'}<input
						type="text"
						bind:this={input}
						on:keydown={handelTerInput}
						class="terminal_input"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.unmain {
		display: flex;
	}
	.close-icon {
		position: absolute;
		right: 5px;
		z-index: 3;
		margin: 0;

		color: red;
		cursor: pointer;
	}
	.list-dirs {
		display: flex;
		width: 40%;
		gap: 15px;
		font-size: 15px;
		align-items: stretch;
	}
	.type-f {
		width: 100%;
		color: gray;
		display: inline-block;
		text-align: center;
		white-space: nowrap;
	}
	.type-d {
		display: inline-block;
		white-space: nowrap;
		width: 100%;
		color: violet;
	}
	.type-l {
		width: 100%;
		color: red;
		white-space: nowrap;
		display: inline-block;
	}

	.main_div {
		position: relative;

		overflow: auto;
		background: #222831;
		box-sizing: border-box;
	}
	.current_input {
		display: flex;
		flex-direction: row;
		width: 100%;
		position: absolute;
		color: white;
	}
	.terminal_input {
		color: #00adb5;
		caret-shape: block;

		background: #222831;
		border: none;
		outline: none;
		width: 100%;
	}
	.current_dir_input {
		color: white;
	}

	.ter_input:focus {
		outline: none;
	}
	.pre_command {
		font-size: 10px !important;
		margin-bottom: 8px;
	}
</style>
