import { writable } from 'svelte/store';

const Loded = writable(false);
const Tick = writable(0);
const isAbout = writable(false);
const isContact = writable(false);
const isTerm = writable(true);
const isProj = writable(false);
const noOfWidowsOpenOtherThanTerm = writable(0);

export { Loded, Tick, isAbout, isContact, isTerm, noOfWidowsOpenOtherThanTerm, isProj };
