<script>
	// @ts-nocheck
	import { onMount } from 'svelte';

	import { confirmationComponents } from './components/confirm/index';

	export let show;
	export let hide;

	const leaf = (obj, path) => path.split('.').reduce((value, el) => value && value[el], obj);

	let requests = [];
	let handlers;

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
			const handleConfirmed = () => {
				common();
				resolve(true); // signal handler to continue with action
			};
			const handleDenied = () => {
				common();
				resolve(false); // signal handler to continue with action
			};

			const thisRequest = { component, confirmSection, params, handleConfirmed, handleDenied };

			function common() {
				requests = requests.filter((req) => req !== thisRequest); // find and remove element
				if (requests.length == 0) hide(); // hide if last one removed
			}

			requests = [...requests, thisRequest];
			show(); // trigger the UI to show this request
		});
	}
</script>

{#if requests}
	{#each requests as { component, confirmSection, params, handleConfirmed, handleDenied }}
		<div class="active">
			<svelte:component
				this={component.component}
				props={{ method: confirmSection, params }}
				{handleConfirmed}
				{handleDenied}
			/>
		</div>
	{/each}
{/if}

<style>
	.active {
		display: flex;
		align-items: center;
		min-width: 350px;
		min-height: 50px;
		flex-direction: column;
	}
</style>
