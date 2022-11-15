<script>
	// @ts-nocheck

	// show the user's keys
	// parse out the JWKs into types: RSA and Ed25519 according to JWK
	import { shorten, bufftoHex } from './utils';
	import Clipboard from './Clipboard.svelte';
	import EncodingSelector from './components/atomic/EncodingSelector.svelte';
	import Menu from './Menu.svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let keys;

	let show = false;
</script>

{#if keys && keys.length > 0}
	<div class="flex flex-row justify-around text-toxic">
		<button
			class="grow m-4 bg-neutral-800 shadow-toxic shadow rounded-lg select-none cursor-pointer"
			on:click={(e) => (show = !show)}>{show ? 'Hide' : 'Show'} Keys</button
		>
		<Menu />
	</div>
	{#if show}
		<div
			class="card text-toxic shadow-md shadow-toxic/50 rounded-lg p-4 m-4 w-auto bg-neutral-800"
			transition:slide={{ delay: 100, duration: 300, easing: quintOut }}
		>
			{#if keys.filter((k) => k.publicKeyJWK.kty == 'RSA').length}
				<div class="keylist overflow-hidden">
					<div class="row left">
						<span>Arweave</span>
					</div>
					<div class="row list-group">
						{#each keys.filter((k) => k.publicKeyJWK.kty == 'RSA') as rsaJWK}
							<div class="flex flex-col">
								<div class="flex-1 text-ellipsis overflow-hidden">
									<span class="text-sm"><Clipboard>{rsaJWK.publicKeyJWK.kid}</Clipboard></span>
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
									<span class="text-sm"><Clipboard>{encoded}</Clipboard></span>
								</EncodingSelector>
							{/each}
						</ul>
					</div>
				</div>
			{/if}
		</div>
	{/if}
{/if}

<style>
</style>
