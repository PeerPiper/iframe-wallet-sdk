<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	let offsetHeight;
	let offsetWidth;

	let width;

	let resolveConnector;
	let Connection;
	let connector;
	// = new Promise((resolve, reject) => {
	// 	resolveConnector = resolve;
	// });

	let connectionReady;
	let optionalHandlers = {
		setWidth: (w) => (width = w)
	};

	onMount(async () => {
		({ Connection } = await import('@peerpiper/iframe-wallet-sdk'));
		const connection = new Connection();
		connector = await connection.init(optionalHandlers);

		connectionReady = async () => {
			connector.walletReady(); // signal to the connector the wallet has loaded
		};
	});

	$: connector && offsetHeight && setHeight(offsetHeight);
	$: connector && offsetWidth && setWidth(offsetWidth);

	function show() {
		// console.log(`Setting height ${height}`);
		connector.show(); // works
	}

	function hide() {
		// console.log(`Setting height ${height}`);
		connector.hide(); // works
	}

	function setHeight(height) {
		// console.log(`Setting height ${height}`);
		connector.setIframeParentHeight(height); // works
	}

	function setWidth(width) {
		// console.log(`Setting width ${width}`);
		connector.setIframeParentWidth(width); // works
	}
</script>

<div class="autosizer" bind:offsetHeight bind:offsetWidth style="max-width: {width}px;">
	{#if connectionReady}
		<slot {connectionReady} {show} {hide} />
	{/if}
</div>

<style>
	.autosizer {
		margin: 0em;
		/* min-height: 100%;
        height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex-wrap: nowrap; */
	}
</style>
