import { describe, it, assert, expect, test, beforeAll, afterAll } from 'vitest';
import { Signer, generate, format, parse } from '@ucanto/principal/ed25519';

import { registerUCANPrincipal, getPrincipal } from '$lib/engine/handlers/ucan/index';

describe('Testing ucan principal', () => {
	let principal;
	let seed = new Uint8Array([
		244, 82, 187, 250, 149, 47, 24, 7, 163, 159, 38, 70, 105, 164, 98, 135, 102, 16, 60, 110, 250,
		60, 243, 65, 8, 166, 94, 248, 219, 216, 121, 76
	]);

	afterAll(async () => {});

	it('should register a principal from seed', async () => {
		principal = await registerUCANPrincipal(seed);
		// signer.did().startsWith('did:key'))
		expect(principal.did().startsWith('did:key')).toBe(true);

		const gotPrincipal = getPrincipal();
		expect(gotPrincipal.did()).toBe(principal.did());
	});
});
