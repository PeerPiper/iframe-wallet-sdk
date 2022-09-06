<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import * as EventEmitter from 'events';
	import * as process from 'process';
	import { Buffer } from 'buffer';

	let mounted;
	onMount(async () => {
		// import buffer
		// const { default: buffer } = await import('buffer');
		// window.Buffer = buffer.Buffer;

		window.Buffer = Buffer;
		window.process = process;
		window.EventEmitter = EventEmitter;
		window.global = window;

		mounted = true;
	});
</script>

<div class="bg-neutral-700 relative flex flex-col h-screen">
	{#if mounted}
		<slot />
	{/if}
</div>
