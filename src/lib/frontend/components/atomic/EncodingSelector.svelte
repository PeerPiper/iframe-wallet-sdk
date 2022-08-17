<script lang="ts">
	import * as u8a from 'uint8arrays';

	export let pubkey: Uint8Array;

	function bytesToBase64(b: Uint8Array): string {
		return u8a.toString(b, 'base64pad');
	}

	function bytesToBase58(b: Uint8Array): string {
		return u8a.toString(b, 'base58btc');
	}

	function bytesToHex(b: Uint8Array): string {
		return u8a.toString(b, 'base16');
	}
	let selected = 'Base64';
	let encoded = bytesToBase64(pubkey);

	let white = ' bg-white rounded-lg text-black font-semibold py-1 px-2 m-1 ';
	let grey = ' bg-gray-600 rounded-lg text-grey-dark font-semibold py-1 px-2 m-1 ';
</script>

<div class="flex flex-col sm:flex-row leading-8">
	<div class="flex-grow justify-self-auto">
		<slot {encoded}>
			{encoded}
		</slot>
	</div>
	<div class="flex-none flex flex-col justify-self-end bg-neutral-500/30 p-1 sm:p-2 rounded-lg">
		<div class="flex-none text-center">Same key, different format</div>
		<div class="flex-none text-center cursor-pointer select-none">
			<span
				class={selected == 'Base64' ? white : grey}
				on:click={() => {
					encoded = bytesToBase64(pubkey);
					selected = 'Base64';
				}}
			>
				Base64
			</span>

			<span
				class={selected == 'Base58' ? white : grey}
				on:click={() => {
					encoded = bytesToBase58(pubkey);
					selected = 'Base58';
				}}
			>
				Base58
			</span>

			<span
				class={selected == 'Hex' ? white : grey}
				on:click={() => {
					encoded = bytesToHex(pubkey);
					selected = 'Hex';
				}}
			>
				Hex
			</span>
		</div>
	</div>
</div>
