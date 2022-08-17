<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { CONSTANTS } from '@peerpiper/iframe-wallet-sdk';
	import { storedValue } from './stores';
	import Button from './components/atomic/Button.svelte';

	export let mounted;

	// function names assigned only after component loads in DOM
	let openTwinWindow;
	let handleMessage;

	// state variables
	let connecting;
	let openedWindow;

	let topUrl;

	onMount(async () => {
		topUrl = self === top ? document.URL : document.referrer;

		// If 1) is NOT top AND 2) No keys are stored a new twin window must be opened so that the user can generate keys, in the top window
		openTwinWindow = () => {
			connecting = true;
			openedWindow = window.open(window.location.href, '_blank'); // open the same domain to provide maximum security.
		};

		handleMessage = async (event) => {
			if (event.data == CONSTANTS.OPENED_SIGNAL) {
				event.ports[0].postMessage(topUrl);
				return;
			}

			if (event.data.key == CONSTANTS.WINDOW_SYNC) {
				$storedValue = event.data.storedValue;

				// save mnemonic to localstorage
				// run: mnemonic to proxcryptor
				// send confirmation back to opened window (so it can close)

				// await importKeys(JSON.parse(event.data.data)); // import the keys here in this browser context
				event.ports[0].postMessage('Imported'); // send ack back to Opened window so it can remove "pending" label for this window
				connecting = false;
				openedWindow.close();
				window.focus(); // fails tho
			}

			// Main page closed, state is no longer trying to connect
			if (event.data == CONSTANTS.CLOSING) {
				connecting = false;
			}
		};
	});
</script>

<svelte:window on:message={handleMessage} />

<div class="connector flex flex-col min-h-full items-center justify-center flex-nowrap">
	{#if mounted}
		{#if $storedValue}
			<slot />
		{:else}
			<div>
				<Button type={connecting ? 'Connecting' : ''} clickHandler={openTwinWindow}
					>{connecting ? 'Connecting' : 'Connect'}</Button
				>
			</div>
		{/if}
	{/if}
</div>
