<script lang="ts">
	import { onMount } from 'svelte';
	import { storedValue } from './stores';

	let keyDetails;
	let mounted: boolean;

	let syncKeys: (e: CustomEvent<any>) => void;
	let pending: boolean = true;
	let CONSTANTS;

	onMount(async () => {
		({ CONSTANTS } = await import('@peerpiper/iframe-wallet-sdk'));

		try {
			if (window.location.origin === window.opener?.origin) {
				sendOpenerMsg(CONSTANTS.OPENED_SIGNAL, (event) => {
					// called when the opener replies to our message above
					pending = false;
				});
			}
		} catch (error) {
			console.warn("Origins didn't match");
		}

		function sendOpenerMsg(msg: any, callback = (_: any) => {}) {
			const channel = new MessageChannel();
			channel.port1.onmessage = callback; // Listen for messages on port1
			try {
				if (window.opener?.origin === window.location.origin)
					window.opener.postMessage(msg, window.location.origin, [channel.port2]); // the opener will receive this message
			} catch (error) {
				console.log("Origins didn't match");
			}
		}

		// Called when user allows a copy of the keys to be imported to another browser window in same origin
		syncKeys = (e: CustomEvent<any>): void => {
			sendOpenerMsg({ key: CONSTANTS.WINDOW_SYNC, storedValue: $storedValue }, (event) => {
				pending = false;
				navigateBack();
			}); // uses same origin, keys are secure
		};

		window.addEventListener('beforeunload', () => {
			try {
				if (window.opener?.origin === window.location.origin)
					window.opener.postMessage(CONSTANTS.CLOSING);
				navigateBack();
			} catch (error) {
				console.log("Origins didn't match");
			}
		});

		mounted = true;
	});

	function navigateBack() {
		if (!window.opener) {
			return;
		}
		try {
			// window.opener.focus(); // fails
			window.history.back(); // works
			// window.close();
		} catch (e) {
			console.log(e);
		}
	}
</script>

{#if mounted && !pending}
	<slot {syncKeys} />
{/if}
