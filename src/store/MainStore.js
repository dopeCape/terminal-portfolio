import { writable } from 'svelte/store';

const Loded = writable(false);
const Tick = writable(0);
const isAbout = writable(false);

export { Loded, Tick, isAbout };
