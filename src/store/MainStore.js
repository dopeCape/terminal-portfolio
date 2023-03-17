import { writable } from 'svelte/store';

const closed = writable(0);
const classNos = writable([]);
const Loded = writable(false);
const d2 = writable(true);
const d3 = writable(true);
const d4 = writable(true);
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
const About_loded = writable(false);
export {
	classNos,
	About_loded,
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
	focusContact,
	closed
};
