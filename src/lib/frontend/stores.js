import { derived, writable } from 'svelte/store';

export const keypairs = writable(new Map());

export const storedValue = writable();
