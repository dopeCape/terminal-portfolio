<script>
	import { closed,d4c, isContact, windowsOpen, classNos, classList } from '../store/MainStore.js';
	import { fly } from 'svelte/transition';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';
	import { onMount } from 'svelte';
	let TextLoaded = false;
	let insideMeDaddy = false;
	class TextScramble {
		constructor(el) {
			this.el = el;
			this.chars = '!<>-_\\/[]{}—=+*^?#________';
			this.update = this.update.bind(this);
		}
		setText(newText) {
			const oldText = this.el.innerText;
			const length = Math.max(oldText.length, newText.length);
			const promise = new Promise((resolve) => (this.resolve = resolve));
			this.queue = [];
			for (let i = 0; i < length; i++) {
				const from = oldText[i] || '';
				const to = newText[i] || '';
				const start = Math.floor(Math.random() * 40);
				const end = start + Math.floor(Math.random() * 40);
				this.queue.push({ from, to, start, end });
			}
			cancelAnimationFrame(this.frameRequest);
			this.frame = 0;
			this.update();
			return promise;
		}
		update() {
			let output = '';
			let complete = 0;
			for (let i = 0, n = this.queue.length; i < n; i++) {
				let { from, to, start, end, char } = this.queue[i];
				if (this.frame >= end) {
					complete++;
					output += to;
				} else if (this.frame >= start) {
					if (!char || Math.random() < 0.28) {
						char = this.randomChar();
						this.queue[i].char = char;
					}
					output += `<span class="dud">${char}</span>`;
				} else {
					output += from;
				}
			}
			this.el.innerHTML = output;
			if (complete === this.queue.length) {
				this.resolve();
			} else {
				this.frameRequest = requestAnimationFrame(this.update);
				this.frame++;
			}
		}
		randomChar() {
			return this.chars[Math.floor(Math.random() * this.chars.length)];
		}
	}

	onMount(() => {
document.getElementById("contact").addEventListener("mouseenter",()=>{
		insideMeDaddy = true;

	})
document.getElementById("contact").addEventListener("mouseover",()=>{
		insideMeDaddy = true;
	})
document.getElementById("contact").addEventListener("mouseout",()=>{
		insideMeDaddy = false;
	})
		const phrases = [

			'Hey!!',
			'Hope you liked what I have to offer :>',
			'Feel free to ask me anything through Email',
			'Btw I am  looking for opportunitys :)',
			'Have a nice day. xD'
		];
		const el = document.querySelector('.text');
		const fx = new TextScramble(el);

		let counter = 0;
		const next = () => {
			if (counter == phrases.length) {
				TextLoaded = true;
			}
			fx.setText(phrases[counter]).then(() => {
				setTimeout(next, 1800);
			});
			counter = counter + 1;
		};

		next();
		
	});
	const close = (e) => {
		doMeDaddy();
	};
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const LETTERS = 'abcdefghijklmnopqrstuvwxyx1234567890@!.';
	let root;
	

	$: {
		if (root != undefined) {
			if ($classNos[2] == 2) {
				root.style.setProperty('--font_size', '50px');
			}
			if ($classNos[2] == 3) {
				root.style.setProperty('--font_size', '60px');
			}
			if ($classNos[2] == 4) {
				root.style.setProperty('--font_size', '70px');
			}
		}
	}
	const doMeDaddy = () => {
		$closed = parseInt($classList[2][3]);
	if($closed == 4){
		$d4c =  true
		}
		$isContact = false;
		if ($classNos[3] < $classNos[2]) {
			$classNos[3] = $classNos[3] + 1;
		}
		if ($classNos[1] < $classNos[2]) {
			$classNos[1] = $classNos[1] + 1;
		}

		$classNos[2] = 0;


		for (let i = 1; i < 4; i++) {
			let x = parseInt($classList[i][3]);
			if (x > parseInt($classList[2][3])) {
				x = x - 1;
				$classList[i] = 'div' + x;
			}
		}

		$windowsOpen = $windowsOpen - 1;
	};

	window.onmousemove = (e) => {
		let x = Math.floor((e.clientX / root?.clientWidth) * 100);
		let y = Math.floor((e.clientY / root?.clientHeight) * 100);
		console.log(insideMeDaddy)
		if (insideMeDaddy) {
			root.style.setProperty('--backX', `${x}%`);

			root.style.setProperty('--backY', `${y}%`);
		}
	};
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<div class="main_contact_div" bind:this={root} id="contact">
	<h2 on:click={close} class="close">x</h2>

	<div class="contain">
		<div class="contact_tittle"><div class="title">wanna talk?</div></div>
		{#if !TextLoaded}
			<div
				class="containsText"
				in:fly={{ delay: 200, duration: 300, opacity: 0, y: -300 }}
				out:fly={{ duration: 800, opacity: 0, y: -200 }}
			>
				<div class="text" />
			</div>
		{:else}
			<div class="social_icons" in:fly={{ delay: 810, duration: 500, opacity: 0, y: 200 }}>
				<i class="fa-solid fa-blog icon" />
				<i class="fa-brands fa-square-twitter icon" />
				<i class="fa-solid fa-envelope icon" />
				<i class="fa-brands fa-square-github icon" />
				<i class="fa-brands fa-linkedin icon" />
			</div>
		{/if}
	</div>
</div>

<style>
	.ba {
		position: absolute;
		color: var(--color1);
	}
	.dud {
		color: var(--Comment);
	}
	.containsText {
		font-size: 30px;
		position: absolute;
		top: 40%;
		display: flex;
		width: 100%;
		color: var(--color2);

		justify-content: center;
		align-items: center;
	}
	.social_icons {
		bottom: 45%;
		left: 12.5%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 80%;
		flex-wrap: wrap;
		position: absolute;
	}
	.icon:hover {
		transform: scale(1.02);
		color: var(--color2);
	}
	.icon {
		transition: transform 200ms linear, color 200ms linear;
		font-size: var(--font_size);
		color: var(--Comment);
	}
	.contact_form_cont {
		display: flex;

		border-radius: 10px;
		height: 60%;
		flex-direction: column;
		width: 60%;
		justify-content: center;
		align-items: center;
		top: 5%;
		position: relative;
	}
	.contact {
		display: flex;
		width: 100%;
		top: 5%;
		height: 95%;
		position: absolute;
		justify-content: center;

		align-items: flex-start;
	}
	.text {
		margin-left: 10px;
	}
	.email {
		height: 30px;

		margin-left: 10px;
	}
	.text_contact::-webkit-scrollbar {
		width: 0;
	}
	.text_contact {
		height: 90px;
	}
	.contact_input {
		background: var(--foreground);
		caret-color: var(--color1);
		color: var(--color1);

		border: 1px solid var(--color3);

		outline: none;
		margin-bottom: 10px;
		width: 80%;
	}
	.text_contact {
	}
	.contain {
		display: flex;
		height: 100%;
		flex-direction: column;
		width: 100%;
		position: absolute;
		background: radial-gradient(rgba(255, 255, 255, 0.2) 8%, transparent 8%);
		background-position: var(--backX) var(--backY);
		background-size: 6vmin 6vmin;
	}
	.close {
		position: absolute;
		right: 10px;
		font-size: 20px;
		z-index: 3;
		margin: 0;
		color: red;
		cursor: pointer;
	}

	.contact_tittle {
		color: var(--color3);

		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--foreground);
		height: 5%;
		width: 100%;
		border-bottom: 1px solid gray;
	}
	.main_contact_div:hover {
		border: 2px solid var(--color3);
	}
	.main_contact_div {
		display: flex;
		position: relative;
		transition: width 1.5s linear, height 1.5s linear, all 1s ease-out, border 0s;

		border: 2px solid gray;
		/* border-radius: 10px; */
		height: 99%;

		background: var(--foreground);
		max-width: 99%;
		overflow: hidden;
		max-height: 99%;
		width: 99%;
	}
</style>
