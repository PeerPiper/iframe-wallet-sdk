<script lang="ts">
	import { onMount } from 'svelte';
	import { storedValue } from './stores';

	let keyDetails;
	let mounted: boolean;

	let syncKeys: (e: CustomEvent<any>) => void;
	let pending: boolean = true;
	let CONSTANTS: any;

	onMount(async () => {
		({ CONSTANTS } = await import('@peerpiper/iframe-wallet-sdk'));

		sendOpenerMsg(CONSTANTS.OPENED_SIGNAL, {
			callback: () => (pending = false)
		});

		function sendOpenerMsg(label: any, detail: any = {}) {
			if (window.opener?.origin !== window.location.origin) return;
			window.opener.document.dispatchEvent(
				new CustomEvent(label, {
					detail
				})
			);
		}

		// Called when user allows a copy of the keys to be imported to another browser window in same origin
		syncKeys = (e: CustomEvent<any>): void => {
			const detail = {
				storedValue: $storedValue,
				callback: () => {
					pending = false;
					navigateBack();
				}
			};
			console.log('sending syncKeys', detail);
			sendOpenerMsg(CONSTANTS.WINDOW_SYNC, detail); // uses same origin, keys are secure
		};

		window.addEventListener('beforeunload', () => {
			try {
				sendOpenerMsg(CONSTANTS.CLOSING);
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
