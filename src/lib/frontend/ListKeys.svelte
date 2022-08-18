<script>
	// @ts-nocheck

	// show the user's keys
	// parse out the JWKs into types: RSA and Ed25519 according to JWK
	import { shorten, bufftoHex } from './utils';
	import Clipboard from './Clipboard.svelte';
	import EncodingSelector from './components/atomic/EncodingSelector.svelte';

	export let keys;

	let selectedRSA;
	let collapsed;
</script>

{#if keys && keys.length > 0}
	<div class="card text-toxic shadow-md shadow-toxic/50 rounded-lg p-4 m-4 w-auto bg-neutral-800">
		{#if keys.filter((k) => k.publicKeyJWK.kty == 'RSA').length}
			<div class="keylist overflow-hidden">
				<div class="row left">
					<span>Arweave</span>
				</div>
				<div class="row list-group">
					{#each keys.filter((k) => k.publicKeyJWK.kty == 'RSA') as rsaJWK}
						<div class="flex flex-col">
							<div
								class="{collapsed && selectedRSA != rsaJWK.kid
									? 'hide'
									: ''} list-group-item list-group-item-action "
							>
								{rsaJWK.name}
							</div>
							<div class="flex-1">
								Base64URL: <Clipboard>{rsaJWK.publicKeyJWK.kid}</Clipboard>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
		{#if keys.filter((k) => k.publicKeyJWK.crv == 'Ed25519')}
			<div class="keylist">
				<div class="row left">
					<span>Ed25519</span>
				</div>

				<div class="row list-group">
					<ul>
						{#each keys.filter((k) => k.publicKeyJWK.crv == 'Ed25519') as edJWK}
							<EncodingSelector pubkey={new Uint8Array(edJWK.publicKey)} let:encoded>
								<Clipboard>{encoded}</Clipboard>
							</EncodingSelector>
							<!-- <li class=" list-group-item list-group-item-action ">
								{shorten(edJWK.name)}
								<div class="full-pubKey">
									Base64URL: <Clipboard>{edJWK.publicKeyJWK.x}</Clipboard>
								</div>
								<div class="full-pubKey">
									Base58: <Clipboard>{edJWK.publicKeyBase58}</Clipboard>
								</div>
								<div class="full-pubKey">
									Hex: <Clipboard>{bufftoHex(edJWK.publicKey)}</Clipboard>
								</div>
								<div class="full-pubKey">
									Bytes: <Clipboard>{edJWK.publicKey}</Clipboard>
								</div>
							</li> -->
							<!-- <b>{shorten(key?.publicKeyBase58)}</b><br /> -->
						{/each}
					</ul>
				</div>
			</div>
		{/if}
	</div>
{/if}

<style>
	.keylist {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: stretch;
		align-content: stretch;
		border-bottom: 1px #d6e7df solid;
		padding-bottom: 4px;
		margin-bottom: 4px;
	}
	.left {
		flex-shrink: 2;
		width: 85px;
	}
	.row,
	ul {
		margin: 0em;
		padding: 0em;
	}
	.row:not(.left) {
		flex: 1 1 auto;
		overflow-y: auto;
	}
	.hide {
		display: none;
	}
</style>
