import { Signer } from '../Signer';
// import { createPublicKey, createSign } from 'crypto';
import Arweave from 'arweave';
import base64url from 'base64url';
import { SIG_CONFIG } from '../../constants';

const constants = {
	DH_CHECK_P_NOT_SAFE_PRIME: 2,
	DH_CHECK_P_NOT_PRIME: 1,
	DH_UNABLE_TO_CHECK_GENERATOR: 4,
	DH_NOT_SUITABLE_GENERATOR: 8,
	NPN_ENABLED: 1,
	ALPN_ENABLED: 1,
	RSA_PKCS1_PADDING: 1,
	RSA_SSLV23_PADDING: 2,
	RSA_NO_PADDING: 3,
	RSA_PKCS1_OAEP_PADDING: 4,
	RSA_X931_PADDING: 5,
	RSA_PKCS1_PSS_PADDING: 6,
	POINT_CONVERSION_COMPRESSED: 2,
	POINT_CONVERSION_UNCOMPRESSED: 4,
	POINT_CONVERSION_HYBRID: 6
};

export default class Rsa4096Pss implements Signer {
	readonly signatureType: number = 1;
	readonly ownerLength: number = SIG_CONFIG[1].pubLength;
	readonly signatureLength: number = SIG_CONFIG[1].sigLength;
	private readonly _publicKey: Buffer;
	public get publicKey(): Buffer {
		return this._publicKey;
	}

	constructor(private _key: string, public pk?: string) {
		if (!pk) {
			// unused, comment out for now (no shim available from Browserify?)
			// this.pk = createPublicKey({
			// 	key: _key,
			// 	type: 'pkcs1',
			// 	format: 'pem'
			// })
			// 	.export({
			// 		format: 'pem',
			// 		type: 'pkcs1'
			// 	})
			// 	.toString();
		}
	}

	sign(message: Uint8Array): Uint8Array {
		// overridden by sign() in child, comment out for now (no shim available from Browserify?)
		// return createSign('sha256').update(message).sign({
		// 	key: this._key,
		// 	padding: constants.RSA_PKCS1_PSS_PADDING
		// });
		return [0];
	}

	static async verify(
		pk: string | Buffer,
		message: Uint8Array,
		signature: Uint8Array
	): Promise<boolean> {
		// return await Arweave.crypto.verify(
		// 	Buffer.isBuffer(pk) ? base64url.encode(pk) : pk,
		// 	message,
		// 	signature
		// );
		return null;
	}
}
