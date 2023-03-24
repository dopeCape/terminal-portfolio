<script>
	import { closed, d4c, isContact, windowsOpen, classNos, classList } from '../store/MainStore.js';
	import { fly } from 'svelte/transition';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';
	import { onDestroy, onMount } from 'svelte';
	let TextLoaded = false;
	let insideMeDaddy = false;
	let copyed =false;
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
					output += `<span style="color:#acb6bf8c;font-weight:1000;" >${char}</span>`;
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
		document.getElementById('contact').addEventListener('mouseenter', () => {
			insideMeDaddy = true;
		});
		document.getElementById('contact').addEventListener('mouseover', () => {
			insideMeDaddy = true;
		});
		document.getElementById('contact').addEventListener('mouseout', () => {
			insideMeDaddy = false;
		});

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
	onDestroy(() => {});
	const close = (e) => {
		doMeDaddy();
	};

	const LETTERS = 'abcdefghijklmnopqrstuvwxyx1234567890@!.';
	let root;
	const moveMouse = (e) => {
		let x = Math.floor((e.clientX / root?.clientWidth) * 100);

		let y = Math.floor((e.clientY / root?.clientHeight) * 100);

		if (insideMeDaddy) {
			root.style.setProperty('--backX', `${x}%`);

			root.style.setProperty('--backY', `${y}%`);
		}
	};
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
		document.getElementById('contact').removeEventListener('mouseenter', () => {});
		document.getElementById('contact').removeEventListener('mouseover', () => {});
		document.getElementById('contact').removeEventListener('mouseout', () => {});
		window.removeEventListener('mousemove', moveMouse);

		$closed = parseInt($classList[2][3]);
		if ($closed == 4) {
			$d4c = true;
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

	window.addEventListener('mousemove', moveMouse);

	const redictBlog = () => {
		window.open('https://blog.tejes.dev', 'blank');
	};
	const redictTwi = () => {
		window.open('https://twitter.com/tejeszz', 'blank');
	};
	const redictGit = () => {
		window.open('https://github.com/dopeCape', 'blank');
	};
	const copyMail = () => {
		navigator.clipboard.writeText('me@tejes.dev');

		copyed = true;

		setTimeout(() => {
			copyed = false;
		}, 2000);
	};
	const reditLink = () =>{
	window.open("https://www.linkedin.com/in/tejas-komawar-b6594022b/","blank")
	}
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<div class="main_contact_div" bind:this={root} id="contact">

<i class="fa-solid fa-xmark close" on:click={close}></i>

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
				<div on:click={redictBlog}>
					<i class="fa-solid fa-blog icon" />
				</div>
				<div on:click={redictTwi}>
					<i class="fa-brands fa-square-twitter icon" />
				</div>
				<div on:click={copyMail}>
					<i class="fa-solid fa-envelope icon" />
				</div>
				<div on:click={redictGit}>
					<i class="fa-brands fa-square-github icon" />
				</div>
<div on:click={reditLink}>
				<i class="fa-brands fa-linkedin icon" />
				</div>


			</div>

			{#if copyed}
			<div in:fly={{y:100,duration:200,opacity:0}} out:fly={{y:100,duration:200,opacity:0}} class="copy">
				Copyed to clipboard	
			</div>
{/if}
		{/if}
	</div>
</div>

<style>
.copy{
color:var(--color2);
font-size:15px;
position: absolute;
top: 60%;
left: 42.5%;

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


	.text {
		margin-left: 10px;
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
	.close:hover{
		transform:rotate(90deg)

	}
	.close {
	transition:transform 500ms ease-out;

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
