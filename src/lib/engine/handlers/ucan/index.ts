import { Signer } from '@ucanto/principal/ed25519';

let principal;

export const getPrincipal = () => principal || null;

export async function registerUCANPrincipal(seed: Uint8Array) {
	// also load a UCAN principal from privateKey
	principal = await Signer.derive(new Uint8Array(seed));

	return principal;
}
