<script>
	import { onMount } from 'svelte';

	let FrontEnd;

	onMount(async () => {
		({ FrontEnd } = await import('@peerpiper/iframe-wallet-sdk'));
	});
</script>

{#if !!FrontEnd}
	<FrontEnd />
{/if}
