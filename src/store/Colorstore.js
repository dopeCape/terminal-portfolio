import { writable } from 'svelte/store';

const dark_theme = writable({
	foreground: '#32302f',
	background: '#bdae93',
	color1: '#b8bb26',
	color2: '#8ec07c',
	color3: '#d3869b',
	color4: '#fe8019',
	number: '#fb4934',
	comment: '#6272a4'
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
	foreground: '#fbf1c7',
	background: '#32302f',
	color1: '#79740e',
	color2: '#437b50',
	color3: '#f83f71',
	color4: '#b57614',
	number: '#8A762A'
});

const curent_theme = writable('light');

export { curent_theme, light_theme, dark_theme };
