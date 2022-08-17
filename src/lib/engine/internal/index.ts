import { getWallet } from '@peerpiper/wasm-wallet-bindings';
import { publicKeyJwkFromPublicKey } from '../handlers/ed25519/utils';
import { generateJWK, jwkToCryptoKey } from '../handlers/arweave';

export const DEFAULT_PROXCRYPTOR_NAME = 'DEFAULT_PROXCRYPTOR_NAME';
export const pre = new Map();
export const rsa = new Map();
export let keys = new Map();

export const DEFAULT_NAME = 'Master Key';
export const DEFAULT_RSA_NAME = 'Arweave_1';

export let wallet;

loadWallet(); // premptively load it

function browser() {
	// @ts-ignore
	return ![(typeof window, typeof document)].includes('undefined');
}

async function loadWallet() {
	if (!browser()) return; // skip non-browser enviroments
	const resolved = await getWallet();
	wallet = resolved;
}

export async function assertWallet() {
	if (!wallet) await wallet;
}

let config: { [Key: string]: any } = {};

export const setConfig = (key: string, value: any) => {
	config[key] = value;
};

export const getConfig = () => {
	return config;
};

export const generateMnemonic = async function () {
	await assertWallet();
	return wallet.generate_mnemonic();
};

export const generateRsaJwk = function () {
	const jwk = generateJWK();
	rsa.set(DEFAULT_RSA_NAME, jwk);
	return jwk;
};

export const loadSecrets = async function ({ mnemonic, rsajwk }) {
	rsa.set(DEFAULT_RSA_NAME, rsajwk);
	await loadMnemonicInProxcryptor(mnemonic);
	// also pass keypair to create a Provider
};

export const loadMnemonicInProxcryptor = async function (
	mnemonic: string,
	pre_name?: string = DEFAULT_NAME
): string {
	await assertWallet();
	const proxcryptor = wallet.mnemonic_to_proxcryptor(mnemonic);
	pre.set(pre_name, proxcryptor);
	return pre_name;
};

export const getLoadedKeys = (): {
	name: string;
	publicKey: string; // todo: to UInt8Array?
	publicKeyJWK: {
		kty: string;
		kid: string;
		e: string; //'AQAB'; //  value 65537, the octet sequence to be base64url-encoded MUST consist of the three octets [1, 0, 1]; the resulting representation for this value is "AQAB"
		n: string; // keyDetails.n;
	}; // already a JWK
	publicKeyBase58: string; // address = base64URL encoded hash of jwk.n
}[] => {
	let results = [];

	pre.forEach((proxcryptor, pre_name) => {
		results.push({
			name: pre_name,
			publicKey: proxcryptor.public_key(),
			publicKeyJWK: proxcryptor.public_key_jwk(),
			publicKeyBase58: proxcryptor.public_key_base58()
		});
	});

	// and now for RSA keytype
	rsa.forEach((keyDetails, nickname) => {
		results.push({
			name: nickname,
			publicKey: keyDetails.n, // todo: to UInt8Array?
			publicKeyJWK: {
				kty: 'RSA',
				kid: keyDetails.kid,
				e: 'AQAB', //  value 65537, the octet sequence to be base64url-encoded MUST consist of the three octets [1, 0, 1]; the resulting representation for this value is "AQAB"
				n: keyDetails.n
			}, // already a JWK
			publicKeyBase58: null // address = base64URL encoded hash of jwk.n
		});
	});

	return results;
};
