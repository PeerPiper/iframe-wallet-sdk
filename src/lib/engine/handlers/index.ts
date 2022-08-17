import { DEFAULT_NAME } from '../internal/index';

import { proxcryptor } from './proxcryptor/index';

const browser = () => ![typeof window, typeof document].includes('undefined');

// import plugins
import { ed25519 } from './ed25519';
import { arweaveWalletAPI } from './arweave';
// import { rsa } from "./rsa"

import { jwkToSecretBytes } from './ed25519/utils';

const STAY_CONNECTED = 'STAY_CONNECTED';

const textDecoder = new TextDecoder();

let connected = false;

export const setHost = (h) => {
	host = h;
};

export let config: { [Key: string]: any } = {};

export const setConfig = (key: string, value: any) => {
	config[key] = value;
};

export const getConfig = () => {
	return config;
};

// : { [Key: string]: Function | Object }
export const handlers = {
	setConfig,
	getConfig,
	config,
	ed25519,
	arweaveWalletAPI,
	proxcryptor,

	connect: async (origin: type) => {
		const config = getConfig();

		if (!typeof config.confirm === 'function')
			return new Error(
				'User must provide a confirm function to the handler using setConfig(confirmFn) '
			); // user mus

		try {
			const confirmed =
				sessionStorage.getItem(STAY_CONNECTED) == 'true' || config.confirm('connect', { origin });

			if (!confirmed) return new Error(`User disallowed connection from origin ${origin}`);

			connected = true;
		} catch (error) {}
	},

	stayConnected: () => {
		window.sessionStorage.setItem(STAY_CONNECTED, 'true');
	},
	getPublicKey: (pre_name?: string = DEFAULT_NAME): Uint8Array => {
		return proxcryptor.getPublicKey(pre_name); // default stub for now? for backwards compat.
	}
};

export type * from './proxcryptor';
