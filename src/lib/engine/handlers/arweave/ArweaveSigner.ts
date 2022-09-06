import Rsa4096Pss from './arbundles/src/signing/keys/Rsa4096Pss';
// import { JWKInterface } from '../../interface-jwk';
// import type { JWKInterface, JWKPublicInterface } from 'arweave/wallet';

// import { jwkTopem } from 'arweave/node/lib/crypto/pem';
import * as ArweaveUtils from './utils';
import { subtleSign } from './index';

export default class ArweaveSigner extends Rsa4096Pss {
	protected jwk: JWKInterface;

	constructor(jwk: JWKInterface) {
		super(null, jwk.n);
		this.jwk = jwk;
	}

	get publicKey(): Uint8Array {
		return ArweaveUtils.b64UrlToBuffer(this.pk);
	}

	sign(message: Uint8Array): Uint8Array {
		return subtleSign(this.jwk, message) as any;
	}

	static async verify(pk: string, message: Uint8Array, signature: Uint8Array): Promise<boolean> {
		// note: likely won't work in browser, but it isnt used anywhere
		return await Arweave.crypto.verify(pk, message, signature);
	}
}
