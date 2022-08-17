import { pre, DEFAULT_NAME, wallet } from '../../internal/index';
import { getConfig } from '../index';

import type { Proxcryptor, EncryptedMessage, ReKey, ReEncryptedMessage } from './types';

const textDecoder = new TextDecoder();

let connected = true; // TODO: implement connect logic

function assertReady() {
	return connected ? true : false;
}

export type { Proxcryptor };
export const proxcryptor: Proxcryptor = {
	selfEncrypt: (data: Uint8Array, tag: Uint8Array, pre_name: string = DEFAULT_NAME) => {
		if (!assertReady())
			return new Error(
				'Wallet not connected or initialized. Run connect() and await initialize() first.'
			);
		if (!(pre && pre_name && pre.get(pre_name)))
			return new Error('No proxy encryptor available for this name.');
		let encrypted_message = pre.get(pre_name).self_encrypt(data, tag); // data, tag
		return encrypted_message;
	},

	selfDecrypt: async (encryptedMessage: EncryptedMessage, pre_name: string = DEFAULT_NAME) => {
		const methodName = 'proxcryptor.selfDecrypt';
		const args = { tag: new Uint8Array(encryptedMessage.tag) }; // textDecoder.decode()

		const config = getConfig();
		let confirmed = await config.confirm(methodName, args);
		if (!confirmed) return false;
		{
			let decrypted_message = pre.get(pre_name).self_decrypt(encryptedMessage); // data, tag
			return decrypted_message;
		}
	},

	generateReKey: async (
		targetPublicKey: Uint8Array,
		tag: string,
		pre_name: string = DEFAULT_NAME
	): Promise<ReKey> => {
		if (!assertReady())
			return new Error(
				'Wallet not connected or initialized. Run connect() and await initialize() first.'
			);
		if (!(pre && pre_name && pre.get(pre_name)))
			return new Error('No proxy encryptor available for this name.');

		const methodName = 'proxcryptor.generateReKey';
		const args = { tag, targetPublicKey }; // textDecoder.decode()

		const config = getConfig();
		let confirmed = await config.confirm(methodName, args);
		if (!confirmed) return false;

		let re_key = pre.get(pre_name).generate_re_key(targetPublicKey, tag);
		return re_key;
	},

	reEncrypt: async (
		targetPublicKey: Uint8Array,
		encrypted_message: EncryptedMessage,
		re_key: ReKey
	): Promise<ReEncryptedMessage> => {
		if (!assertReady())
			return new Error(
				'Wallet not connected or initialized. Run connect() and await initialize() first.'
			);
		if (!wallet) return new Error('No wallet encryptor available');

		const methodName = 'proxcryptor.reEncrypt';
		const args = { tag: encrypted_message.tag, targetPublicKey }; // textDecoder.decode()

		const config = getConfig();
		let confirmed = await config.confirm(methodName, args);
		if (!confirmed) return false;

		let re_encrypted_message = wallet.re_encrypt(targetPublicKey, encrypted_message, re_key);
		return re_encrypted_message;
	},

	transformTagKey: async (
		targetPublicKey: Uint8Array,
		tag: string,
		encrypted_message: EncryptedMessage,
		pre_name: string = DEFAULT_NAME
	): Promise<ReKey> => {
		if (!assertReady())
			return new Error(
				'Wallet not connected or initialized. Run connect() and await initialize() first.'
			);
		if (!(pre && pre_name && pre.get(pre_name)))
			return new Error('No proxy encryptor available for this name.');

		const methodName = 'proxcryptor.transformTagKey';
		const args = { tag, targetPublicKey }; // textDecoder.decode()

		const config = getConfig();
		let confirmed = await config.confirm(methodName, args);
		if (!confirmed) return false;

		let re_key = pre.get(pre_name).generate_re_key(targetPublicKey, tag);
		let re_encrypted_message = wallet.re_encrypt(targetPublicKey, encrypted_message, re_key);
		return re_encrypted_message;
	},

	reDecrypt: async (
		re_encrypted_message: ReEncryptedMessage,
		pre_name: string = DEFAULT_NAME
	): Uint8Array | Error => {
		if (!assertReady())
			return new Error(
				'Wallet not connected or initialized. Run connect() and await initialize() first.'
			);
		if (!(pre && pre_name && pre.get(pre_name)))
			return new Error('No proxy encryptor available for this name.');

		const methodName = 'proxcryptor.reDecrypt';
		const args = {}; // textDecoder.decode()

		const config = getConfig();
		let confirmed = await config.confirm(methodName, args);
		if (!confirmed) return false;

		let decrypted = pre.get(pre_name).re_decrypt(re_encrypted_message);
		return new Uint8Array(decrypted);
	},
	getPublicKey: (pre_name?: string = DEFAULT_NAME): Uint8Array | Error => {
		if (!assertReady())
			return new Error(
				'Wallet not connected or initialized. Run connect() and await initialize() first.'
			);
		if (!pre || !pre_name || !pre.get(pre_name))
			return new Error(`No proxy encryptor available for name ${pre_name}.`);
		let publicKey = pre.get(pre_name).public_key();
		if (publicKey.length == 32) return publicKey;
		return false;
	}
};
