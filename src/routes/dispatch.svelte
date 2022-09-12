<script>
	// @ts-nocheck

	// test dispatch in browser
	import { onMount } from 'svelte';
	let result;
	onMount(async () => {
		// import buffer
		const { default: buffer } = await import('buffer');
		window.Buffer = buffer.Buffer;

		// set window.EventEmitter from events
		const { EventEmitter } = await import('events');
		window.EventEmitter = EventEmitter;

		window.global = window;

		const { flow } = await import('../lib/engine/tests');
		result = await flow();
	});
</script>

{#if result}
	{result}
{/if}
