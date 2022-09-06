<script lang="ts">
	/**
	Keys can come from:
	- Loaded from storage (index.svelte, in which case this component is not needed)
	- Generated from scratch (here)
	- Load by user (here)

	keys get saved to $storedValue which trigger the ImmortalDB saved
	*/
	import { onMount, createEventDispatcher } from 'svelte';
	import { storedValue } from './stores';

	import ListKeys from './ListKeys.svelte';

	const dispatch = createEventDispatcher();

	let handleGenerateKeypair:
		| ((event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) => void)
		| null = null;

	// state variables
	let creating = '';
	let keys: {
		name: string;
		publicKey: string; // todo: to UInt8Array?
		publicKeyJWK: {
			kty: string;
			kid: string;
			e: string; //'AQAB'; //  value 65537, the octet sequence to be base64url-encoded MUST consist of the three octets [1, 0, 1]; the resulting representation for this value is "AQAB"
			n: string; // keyDetails.n;
		}; // already a JWK
		publicKeyBase58: string; // address = base64URL encoded hash of jwk.n
	}[];

	let generateMnemonic, generateRsaJwk, loadSecrets, getLoadedKeys;

	onMount(async () => {
		({ generateMnemonic, generateRsaJwk, loadSecrets, getLoadedKeys } = await import(
			'@peerpiper/iframe-wallet-sdk'
		));
		handleGenerateKeypair = async () => {
			creating = 'Creating keypairs...';

			const mnemonic = await generateMnemonic();
			const rsajwk = await generateRsaJwk();

			// save to storedValue.
			// TODO: offer password protection/encryption?
			$storedValue = { ...$storedValue, mnemonic, rsajwk };

			creating += '<br/>Created mnemonic.';
			creating += `<br/>${mnemonic}`;
			creating += '<br/>Creating master keypair (type ed25519)...';
		};
	});

	$: if (!!loadSecrets && !!getLoadedKeys && $storedValue && $storedValue.mnemonic) loadKeys(); // load keys once there is a storedValue

	async function loadKeys() {
		await loadSecrets({ mnemonic: $storedValue.mnemonic, rsajwk: $storedValue.rsajwk });

		dispatch('loadedKeys', 'details'); // let parent component know
		keys = getLoadedKeys(); // get all proxcryptor public key info
	}
</script>

{#if handleGenerateKeypair}
	{#if ($storedValue != undefined && $storedValue == null) || !$storedValue?.mnemonic || !$storedValue?.rsajwk}
		<!-- Show "Create Keys" if no keys exist, no matter what page is showing -- toolbar? -->
		<div class="submit flex flex-col text-black bg-yellow-300 shadow p-8 m-4 rounded w-fit">
			<button
				class="bg-green-500 rounded shadow-lg shadow-slate-600/50 p-4 w-fit m-4 text-white"
				on:click={handleGenerateKeypair}>Create New Keypairs</button
			>
			{@html creating}
		</div>
	{:else}
		<!-- GetKeys: has storedValue, sending to Connector if in Opened window. Else, allowing user to manage keys.<br /> -->
		<ListKeys {keys} />
	{/if}
{/if}

<style>
	div {
		padding: 2em;
	}
</style>
