import { handlers } from '@peerpiper/iframe-wallet-sdk';
import DefaultConfirmation from './DefaultConfirmation.svelte';
import Connect from './Connect.svelte';
import ArweaveSign from './ArweaveSign.svelte';
import Sign from './Sign.svelte';
import Decrypt from './Decrypt.svelte';
import ReDecrypt from './ReDecrypt.svelte';
import TransformTagKey from './TransformTagKey.svelte';

let confirmationComponents = {
	Default: { component: DefaultConfirmation }
};

// setup boring defaults, can be overriden with fanicer by users
for (const [key, value] of Object.entries(handlers)) {
	confirmationComponents[key] = { component: DefaultConfirmation };
}

// Customize certain confirmation components
let customizedComponents = {
	connect: { component: Connect },
	ed25519: {
		sign: {
			component: Sign
		}
	},
	arweaveWalletAPI: {
		sign: {
			component: ArweaveSign
		}
	},
	proxcryptor: {
		selfDecrypt: {
			component: Decrypt
		},
		transformTagKey: {
			component: TransformTagKey
		},
		reDecrypt: {
			component: ReDecrypt
		}
	}
};

confirmationComponents = { ...confirmationComponents, ...customizedComponents };

export { confirmationComponents };
