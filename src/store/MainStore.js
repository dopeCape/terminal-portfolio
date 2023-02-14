import { writable } from 'svelte/store';

const Loded = writable(false);
const Tick = writable(0);
export { Loded, Tick };
