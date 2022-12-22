import { describe, it, assert, expect, test, beforeAll, afterAll } from 'vitest';

import { ipns } from '$lib/engine/handlers/ipns/index';

describe('Testing ipns via w3name', () => {
	let noName;
	let givenName = 'Random Test name';
	const value = '/ipfs/bafkreiem4twkqzsq2aj4shbycd4yvoj2cx72vezicletlhi7dijjciqpui';
	const value_2 = '/ipfs/bafkreid7fbwjx4swwewit5txzttoja4t4xnkj3rx3q7dlbj76gvixuq35y';
	let publicKey;

	beforeAll(async () => {});

	afterAll(async () => {});

	it('should create a name with a random nickname', async () => {
		({ nickname: noName } = await ipns.create());
		expect(typeof noName).toBe('string');
	});

	it('should create a name with a set nickname', async () => {
		const { nickname: res, publicKey: pk } = await ipns.create({ nickname: givenName });
		publicKey = pk;
		expect(res).toBe(givenName);
		expect(typeof pk).toBe('string');
	});

	it('should export/import bytes', async () => {
		const res = await ipns.exportBytes({ nickname: givenName });
		// expect Uint8Array
		expect(res).toBeInstanceOf(Uint8Array);

		const { nickname, publicKey } = await ipns.create({ nickname: givenName, bytes: res });
		expect(nickname).toBe(givenName);
	});

	it('should initialize a name', async () => {
		const rev = await ipns.initialize({ nickname: givenName, value });
		expect(rev.value).toBe(value);
	});

	it('should update a name', async () => {
		const rev2 = await ipns.update({ nickname: givenName, value: value_2 });
		expect(rev2.value).toBe(value_2);
	});

	it('should give me the latest of ny names', async () => {
		const latest = await ipns.latest(givenName);
		expect(latest.value).toBe(value_2);
		// console.log(new Date(latest.validity));
	});

	it('should resolve anyones key to their latest value', async () => {
		const latest = await ipns.resolve(publicKey);
		expect(latest.value).toBe(value_2);
	});
});
