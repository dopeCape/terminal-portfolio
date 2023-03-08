<script>
	import { Terminal_command } from '../store/ComponentStore.js';
	import { current_dir } from '../store/dir_store.js';
	import { flip } from 'svelte/animate';
	import { curent_theme } from '../store/Colorstore.js';
	import { isAbout, isContact, isProj, windowsOpen, classList } from '../store/MainStore.js';
	let input;

	let width = 100;
	let height = 100;
	let currnet_dir = $current_dir;
	let count;
	$: count = $Terminal_command.length - 1;
	const tree = {
		'~': {
			child: [
				{ n: 'aboutt.md', t: 'f' },

				{ n: 'contact.md', t: 'f' },
				{ n: 'blogz.link', t: 'l' },
				{ n: 'projects i made', t: 'd' }
			]
		}
	};
	let command_to_render = [];

	const handelTerInput = (e) => {
		if (e.keyCode == '13') {
			//NOTE: key code 13 means "enter key"
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
			} else if (e.target.value == './about_me.md' || e.target.value == './about_me') {
				if (!$isAbout) {
					$Terminal_command.push({ command: e.target.value, dir: currnet_dir });
					command_to_render.push({
						command: e.target.value,
						dir: currnet_dir,
						msg: ''
					});
					count = $Terminal_command.length - 1;

					command_to_render = command_to_render;

					e.target.value = '';
					let x = $windowsOpen + 1;
					$classList[1] = 'div' + x;
					$windowsOpen = $windowsOpen + 1;
					$isAbout = true;
				}
			} else if (e.target.value == './contact') {
				if (!$isContact) {
					$Terminal_command.push({ command: e.target.value, dir: currnet_dir });
					command_to_render.push({
						command: e.target.value,
						dir: currnet_dir,
						msg: ''
					});
					count = $Terminal_command.length - 1;

					command_to_render = command_to_render;
					e.target.value = '';
					let x = $windowsOpen + 1;
					$classList[2] = 'div' + x;
					$windowsOpen = $windowsOpen + 1;
					$isContact = true;
				}
			} else if (e.target.value == './projects') {
				if (!$isProj) {
					command_to_render.push({
						command: e.target.value,
						dir: currnet_dir,
						msg: ''
					});
					count = $Terminal_command.length - 1;

					command_to_render = command_to_render;
					e.target.value = '';
					let x = $windowsOpen + 1;
					$classList[3] = 'div' + x;

					$windowsOpen = $windowsOpen + 1;
					$isProj = true;
				}
			} else if (e.target.value == '') {
				$Terminal_command.push({ command: '', dir: currnet_dir });
				command_to_render.push({
					command: '',
					dir: currnet_dir,
					msg: ''
				});
				count = $Terminal_command.length - 1;

				command_to_render = command_to_render;
				e.target.value = '';
			} else if (e.target.value == './change_theme') {
				if ($curent_theme == 'light') {
					$curent_theme = 'dark';
				} else {
					$curent_theme = 'light';
				}
				$Terminal_command.push({ command: e.target.value, dir: currnet_dir });
				command_to_render.push({
					command: e.target.value,
					dir: currnet_dir,
					msg: ''
				});
				count = $Terminal_command.length - 1;

				command_to_render = command_to_render;
				e.target.value = '';
			} else {
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
		} else if (e.keyCode == 38) {
			//NOTE:down key
			e.target.value = $Terminal_command[count].command;
			if (count > 0) {
				count = count - 1;
			}
			let len = e.target.value.length; //FIX:cursor dosent goes to end of the input after presssing the key

			e.selectionStart = e.selectionEnd = e.target.value.length;

			console.log(e.selectionEnd);
		} else if (e.keyCode == 40) {
			//NOTE:up key
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

<div class="main_div_ter" on:click={focusOnTermailInput} style="height: {height}%;width:{width}%;">
	<div class="unmain">
		<div>
			<div>
				{#each command_to_render as ter}
					<div style="margin-bottom:8px;">
						<div class="pre_dir" >{ter.dir}</div>
						<div class="pre_command">{'>'}{ter.command}</div>
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
					{'> '} <input
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
		position: absolute;
	}
	.input_fied_contiainer {
		width: 100%;
		position: relative;
	}
	.close-icon {
		position: absolute;
		right: 5px;
		z-index: 3;
		margin: 0;

		transition: all 1s ease-out;
		color: red;
		cursor: pointer;
	}
	.list-dirs {
		display: flex;
		transition: all 1s ease-out;

		width: 40%;
		gap: 15px;
		font-size: 15px;
		align-items: stretch;
	}
	.type-f {
		width: 100%;
		color: gray;
		transition: all 1s ease-out;
		display: inline-block;
		text-align: center;
		white-space: nowrap;
	}
	.type-d {
		display: inline-block;
		white-space: nowrap;
		transition: all 1s ease-out;
		width: 100%;
		color: violet;
	}
	.type-l {
		width: 100%;
		transition: all 1s ease-out;
		color: red;
		white-space: nowrap;
		display: inline-block;
	}

	.main_div_ter::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	}
	.main_div_ter {
		position: relative;
		height: 100%;
		max-height: 100%;
		overflow: scroll;
		background: var(--foreground);
		transition: all 1s ease-out;
		box-sizing: border-box;
	}
	.current_input {
		display: flex;
		flex-direction: row;
		width: 100%;
		position: absolute;
		color: var(--color3);
		transition: all 1s ease-out;
		font-size: 20px;
	}
	.terminal_input {
		color: var(--color3);
		caret-shape: block;
		font-size: 20px;
		background: var(--foreground);
		position: relative;
		border: none;
	/* padding: 5px; */
		transition: all 1s ease-out;
		/* right: 0; */
		outline: none;
		/* width: 100%; */
	}
	.current_dir_input {
		font-size: 20px;
		transition: all 1s ease-out;
		color: var(--color3);
	}

	.ter_input:focus {
		outline: none;
	}
	.pre_dir{
		transition: all 1s ease-out;
		color: var(--color1);
	

	}
	.pre_msg {
		font-size: 20px;

		transition: all 1s ease-out;
		color: var(--color1);
	}
	.pre_command {
		color: var(--color1);
		font-size: 20px !important;
		margin-bottom: 8px;
		transition: all 1s ease-out;
	}
</style>
