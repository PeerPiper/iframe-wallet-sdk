<script>
	// @ts-nocheck
	import { onMount } from 'svelte';

	import { confirmationComponents } from './components/confirm/index';

	export let show;
	export let hide;

	const leaf = (obj, path) => path.split('.').reduce((value, el) => value && value[el], obj);

	let requests = [];
	let handlers;
	let skips = new Set();

	onMount(async () => {
		({ handlers } = await import('@peerpiper/iframe-wallet-sdk'));

		// pass the above confirm function to the handlers so they can use it when their methods are called
		handlers.setConfig('confirm', confirm);
	});
	// set confirm fn
	// calling confirm adds a confirmation request to the list of outstanding request
	// resolving the Promise removes the request
	// if last request, hide() the UI
	async function confirm(confirmSection, params) {
		const component = confirmSection
			? leaf(confirmationComponents, confirmSection) || confirmationComponents.Default
			: false;

		return new Promise((resolve, reject) => {
			if (confirmSection && skips.has(confirmSection)) {
				clearRequestQueue(confirmSection);
				return resolve(true);
			}
			const handleConfirmed = (options) => {
				common(options);
				if (options.dontAskAgain) {
					// add this confirmSection to a list of "resolve right away" confirmations
					skips.add(confirmSection);
					clearRequestQueue(confirmSection);
				}
				resolve(true); // signal handler to continue with action
			};
			const handleDenied = () => {
				common();
				resolve(false); // signal handler to continue with action
			};

			const thisRequest = { component, confirmSection, params, handleConfirmed, handleDenied };

			function common(options) {
				requests = requests.filter((req) => req !== thisRequest); // find and remove element
			}
			requests = [...requests, thisRequest];
			show(); // trigger the UI to show this request
		});
	}

	$: if (requests.length == 0) hide();

	function clearRequestQueue(confirmSection) {
		// find all requests that match this confirmSection and also resolve them
		requests = requests.map((request) => {
			if (request.confirmSection === confirmSection) {
				request.handleConfirmed({}); // resolve the request
				return null; // remove request from array
			}
			return request;
		});
		// filter out null entries
		requests = requests.filter((request) => request);
	}
</script>

{#if requests}
	{#each requests as { component, confirmSection, params, handleConfirmed, handleDenied }}
		<div class="flex flex-col items-center ">
			<svelte:component
				this={component.component}
				props={{ method: confirmSection, params }}
				{handleConfirmed}
				{handleDenied}
			/>
		</div>
	{/each}
{/if}

<style lang="postcss">
</style>
