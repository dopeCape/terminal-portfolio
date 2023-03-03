import { writable } from 'svelte/store';

const current_dir = writable('~');

export { current_dir };
