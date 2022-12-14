// import type { JWKInterface, JWKPublicInterface } from 'arweave/wallet';
import * as ArweaveUtils from './utils';
import { Transaction } from './utils';
import { rsa } from '../../internal/index';
import { getConfig } from '../index';
import type Transaction from './utils';
import ArweaveSigner from './ArweaveSigner';
import { uploadDataToBundlr } from './uploader';
import { createData } from 'arbundles';

export interface SignatureOptions {
	saltLength?: number;
}

let storedPermissions;

export const jwkToCryptoKey = async (jwk: JWKInterface): Promise<CryptoKey> => {
	return crypto.subtle.importKey(
		'jwk',
		jwk,
		{
			name: 'RSA-PSS',
			hash: {
				name: 'SHA-256'
			}
		},
		false,
		['sign']
	);
};

export const subtleSign = async (
	jwk: JWKInterface,
	data: Uint8Array,
	{ saltLength }: SignatureOptions = { saltLength: 32 }
): Promise<Uint8Array> => {
	let signature = await crypto.subtle.sign(
		{
			name: 'RSA-PSS',
			saltLength
		},
		await jwkToCryptoKey(jwk),
		data
	);

	return new Uint8Array(signature);
};

export const generateJWK = async (): Promise<JWKInterface> => {
	let cryptoKey = await crypto.subtle.generateKey(
		{
			name: 'RSA-PSS',
			modulusLength: 4096,
			publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
			hash: {
				name: 'SHA-256'
			}
		},
		true,
		['sign']
	);

	let jwk = await crypto.subtle.exportKey('jwk', cryptoKey.privateKey!);

	const kid = await ownerToAddress(jwk.n);

	// RSA key parameters
	// https://www.gnupg.org/documentation/manuals/gcrypt-devel/RSA-key-parameters.html
	return {
		kty: jwk.kty!,
		e: jwk.e!, // RSA public exponent e
		n: jwk.n!, // RSA public modulus n
		d: jwk.d, // RSA secret exponent d
		p: jwk.p, // RSA secret prime p
		q: jwk.q, // RSA secret prime q with p < q
		dp: jwk.dp,
		dq: jwk.dq,
		qi: jwk.qi,
		kid
	};
};

async function publicKeytoJWK(publicModulus: string) {
	const publicKeyJWK = {
		kty: 'RSA',
		e: 'AQAB',
		n: publicModulus
	};
	// await ownerToAddress(publicKeyJWK.n);
	return publicKeyJWK;
}

async function ownerToAddress(owner: string): Promise<string> {
	return ArweaveUtils.bufferTob64Url(
		await crypto.subtle.digest('SHA-256', ArweaveUtils.b64UrlToBuffer(owner))
	);
}

async function getJWK(): JWKInterface {
	let jwk;
	const address = await arweaveWalletAPI.getActiveAddress();
	rsa.forEach((value, key, map) => {
		if (value.kty == 'RSA' && value?.kid == address) {
			jwk = value;
		}
	});
	return jwk;
}
export const arweaveWalletAPI = {
	generateJWK: async () => {
		const jwk = await generateJWK();
		return jwk;
	},

	// API from https://github.com/th8ta/ArConnect/blob/main/src/scripts/injected.ts
	async connect(permissions: PermissionType[], appInfo: { name?: string; logo?: string } = {}) {
		storedPermissions = permissions;
		// I don't get why this step is needed, we will confirm each signature anyway
		// skip it
		// alert('ar handler connect');
		return true;
	},

	async disconnect() {
		return true;
	},
	async getActiveAddress() {
		try {
			let jwk;

			// find the RSA key
			rsa.forEach((value, key, map) => {
				if (value.kty == 'RSA') {
					jwk = value;
				}
			});
			const addr = await ownerToAddress(jwk.n);
			return addr as string;
		} catch (e) {
			throw new Error(e);
		}
	},
	async getActivePublicKey() {
		try {
			let jwk;

			// find the RSA key
			rsa.forEach((value, key, map) => {
				if (value.kty == 'RSA') {
					jwk = value;
				}
			});
			return { kty: 'RSA', e: 'AQAB', n: jwk.n, kid: jwk?.kid || null };
		} catch (e) {
			throw new Error(e);
		}
	},
	async getAllAddresses() {
		// TODO
	},
	async getWalletNames(): Promise<{ [addr: string]: string }> {
		// TODO
	},
	async addToken(id: string): Promise<void> {
		// TODO
	},
	async dispatch(transaction: Transaction): Promise<{
		res: boolean;
		data?: DispatchResult;
		message?: string;
	}> {
		let tx = new Transaction(transaction);

		let jwk = await getJWK();
		tx.setOwner(jwk.n);

		// grab tx data and tags
		const data = tx.get('data', { decode: true, string: false });
		// @ts-expect-error
		const tags = (tx.get('tags') as Tag[]).map((tag) => ({
			name: tag.get('name', { decode: true, string: true }),
			value: tag.get('value', { decode: true, string: true })
		}));

		try {
			// create bundlr tx as a data entry
			const dataSigner = new ArweaveSigner(jwk);
			const dataEntry = createData(data, dataSigner, { tags });

			if (transaction.data_size > 100000) {
				// paid data, confirm this spend
				const methodName = 'arweaveWalletAPI.sign';
				let confirmed = await getConfig().confirm(methodName, transaction);
				if (!confirmed) return false;

				// TODO: Bundlr funding
			}

			// sign and upload bundler tx
			await dataEntry.sign(dataSigner);
			await uploadDataToBundlr(dataEntry); // TODO: Move outside wallet, not a crypto operation

			return dataEntry.id;
		} catch (e) {
			console.log('Error signing', e);
		}
	},
	async sign(transaction: Transaction, options?: SignatureOptions): Promise<Signature> {
		const methodName = 'arweaveWalletAPI.sign';
		let confirmed = await getConfig().confirm(methodName, transaction);
		if (!confirmed) return false;

		const address = await arweaveWalletAPI.getActiveAddress();

		// get keys
		let jwk = await getJWK();

		// pull out RSA matching jwk.n
		let tx = new Transaction(transaction);
		tx.setOwner(jwk.n);
		let dataToSign = await tx.getSignatureData();

		const rawSignature = await subtleSign(jwk, dataToSign, options);
		let id = await crypto.subtle.digest('SHA-256', rawSignature);

		tx.setSignature({
			id: ArweaveUtils.bufferTob64Url(id),
			owner: jwk.n,
			signature: ArweaveUtils.bufferTob64Url(rawSignature)
		});

		return tx;
	},
	async getPermissions(): Promise<PermissionType[]> {
		const permissions: PermissionType[] = storedPermissions;
		return permissions;
	},
	async getArweaveConfig(): Promise<IArweave> {
		// TODO
	},
	async encrypt(
		data: string,
		options: {
			algorithm: string;
			hash: string;
			salt?: string;
		}
	): Promise<Uint8Array> {
		// TODO
	},
	async decrypt(
		data: Uint8Array,
		options: {
			algorithm: string;
			hash: string;
			salt?: string;
		}
	): Promise<string> {
		// TODO
	},
	async signature(data: Uint8Array, algorithm: any): Promise<string> {
		// TODO
	},
	noop(): bool {
		return true;
	}
};

declare global {
	interface Window {
		arweaveWallet: typeof arweaveWalletAPI;
	}
	interface WindowEventMap {
		walletSwitch: CustomEvent<{ address: string }>;
		arweaveWalletLoaded: CustomEvent<{}>;
	}
}
