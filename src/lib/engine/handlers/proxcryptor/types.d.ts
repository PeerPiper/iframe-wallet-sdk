export interface EncryptedMessage {
	tag: Uint8Array;
	encrypted_key: Uint8Array; // length = 32
	encrypted_data: Uint8Array;
	message_checksum: Uint8Array;
	overall_checksum: Uint8Array;
}

export interface ReKey {
	r_1: Uint8Array;
	r_2: Uint8Array;
	r_3: Uint8Array;
}

export interface ReEncryptedMessage {
	d_1: Uint8Array;
	d_2: Uint8Array;
	d_3: Uint8Array;
	d_4: Uint8Array;
	d_5: Uint8Array;
}

export interface Proxcryptor {
	selfEncrypt: (data: Uint8Array, tag: Uint8Array, pre_name: string) => EncryptedMessage;
	selfDecrypt: (encryptedMessage: EncryptedMessage, pre_name: string) => Uint8Array;
	generateReKey: (targetPublicKey: Uint8Array, tag: string, pre_name: string) => ReKey;
	reEncrypt: (
		targetPublicKey: Uint8Array,
		encrypted_message: EncryptedMessage,
		re_key: ReKey
	) => EncryptedMessage;
	getPublicKey: (pre_name?: string) => Uint8Array | Error;
}
