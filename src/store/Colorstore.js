import { writable } from 'svelte/store';

const dark_theme = writable({
	foreground: '#261F3E',
	background: '#0E2031',
	color1: '#FFD455',
	color2: '#1B2466',
	color3: '#BF66C2',
	color4: '#9D232D',
	number: '#E67936'
});

// const dark_theme = writable({
// 	foreground: '#1d1135',
// 	background: '#0E2031',
// 	color1: '#ba1e68',
// 	color2: '#5643fd',
// 	color3: '#7649fe',
// 	color4: '#fcfbfe',
// 	number: '#E67936'
// });
const light_theme = writable({
	foreground: '#FAE6FE',
	background: '#E1CFE5',
	color1: '#A75412',
	color2: '#B618B7',
	color3: '#1B797D',
	color4: '#242426',
	number: '#8A762A'
});

const curent_theme = writable('light');

export { curent_theme, light_theme, dark_theme };
