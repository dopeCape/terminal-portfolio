import { writable } from 'svelte/store';

const Loded = writable(false);
const windowsOpen = writable(1);
const isAbout = writable(false);
const focusAbout = writable(false);
const focusTerm = writable(true);
const focusProj = writable(false);
const focusContact = writable(false);
const isContact = writable(false);
const isTerm = writable(true);
const isProj = writable(false);
const noOfWidowsOpenOtherThanTerm = writable(0);
const classList = writable(['', '', '', '']);

export {
	Loded,
	windowsOpen,
	isAbout,
	isContact,
	isTerm,
	noOfWidowsOpenOtherThanTerm,
	isProj,
	classList,
	focusAbout,
	focusTerm,
	focusProj,
	focusContact
};
