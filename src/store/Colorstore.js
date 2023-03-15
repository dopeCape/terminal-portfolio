import { writable } from 'svelte/store';

//const dark_theme = writable({
//	//NOTE:noctic obscuro
//	foreground: '#031417',
//	background: '#b2cacd',
//	color1: '#16b673',
//	color2: '#df769b',
//	color3: '#e4b781',
//	color4: '#d67e5c',
//	number: '#7060eb',
//	Comment: '#5b858b'
//});
//const dark_theme = writable({
//	//NOTE:jellyfish
//	foreground: '#00002c',
//	background: '#00ffff',
//	Comment: '#838383',
//	color1: '#fa71ff',
//	color2: '#EEFFFF',
//	color3: '#ff0062',
//	color4: '#00ffff',
//	number: '#ff7e34'
//});
const dark_theme = writable({
	//NOTE:ayu dark
	foreground: '#0b0e14',
	background: '#1d222b',
	Comment: '#acb6bf8c',
	color1: '#aad94c',
	number: '#d2a6ff',
	color2: '#bfbdb6',
	color3: '#d2a6ff',
	color4: '#ffb454'
});
const light_theme = writable({
	//NOTE:noctic  lux
	foreground: '#fef8ec',
	background: '#888477',
	color1: '#00b368',
	color2: '#ff5792',
	color3: '#fa8900',
	color4: '#b3694d',
	number: '#5842ff',
	Comment: '#9995b7'
});
// const gruvbox_dark = writable({
// 	foreground: '#32302f',
// 	background: '#bdae93',
// 	color1: '#b8bb26',
// 	color2: '#8ec07c',
// 	color3: '#d3869b',
// 	color4: '#fe8019',
// 	number: '#fb4934',
// 	comment: '#6272a4'
// });

// const dark_theme = writable({
// 	foreground: '#1d1135',
// 	background: '#0E2031',
// 	color1: '#ba1e68',
// 	color2: '#5643fd',
// 	color3: '#7649fe',
// 	color4: '#fcfbfe',
// 	number: '#E67936'
// });
// const gruvbox_light = writable({
// 	foreground: '#fbf1c7',
// 	background: '#32302f',
// 	color1: '#79740e',
// 	color2: '#437b50',
// 	color3: '#f83f71',
// 	color4: '#b57614',
// 	number: '#8A762A'
// });

const curent_theme = writable('dark');

export { curent_theme, light_theme, dark_theme };
