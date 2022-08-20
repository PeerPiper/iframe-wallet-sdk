<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import AutoSizer from './AutoSizer.svelte';
	import Connector from './Connector.svelte';
	import GetKeys from './GetKeys.svelte';
	import { storedValue } from './stores';
	import Opened from './Opened.svelte';
	import Confirmer from './Confirmer.svelte';

	const STORED_VALUE = 'STORED_VALUE';
	const def = null;

	// browser functions (set in onMount to ensure browser loaded)
	let ImmortalDB: any;
	let save: Function;
	let mounted: boolean = false;

	let syncing: any;

	onMount(async () => {
		({ ImmortalDB } = await import('immortal-db'));
		const storedString = await ImmortalDB.get(STORED_VALUE, def);

		if (storedString) {
			const parsedVal = JSON.parse(storedString);
			if (parsedVal.mnemonic || parsedVal.rsajwk) $storedValue = parsedVal;
		}

		save = () => {
			ImmortalDB.set(STORED_VALUE, JSON.stringify($storedValue)); // auto save when $storedValue changes
		};

		try {
			syncing = window.opener && window.opener?.origin === window.location.origin;
		} catch (error) {
			// not syncing by same origin, that's ok it was probably a regular link from somewhere
		}
		mounted = true;
	});

	$: if (ImmortalDB && $storedValue && save) save();

	function loadedKeys() {
		save();
	}
</script>

<!-- Based on whether this is the Window.Top (not an iframe) or a Child (iframe) depends on which to show: -->
{#if ImmortalDB}
	{#if window == window.top}
		<!-- NOT an iframe  -->
		<div class="m-2">
			{#if syncing}
				<!-- Opened handles on:loadedKeys by ALSO syncing them with the opener window -->
				<Opened let:syncKeys>
					{#if syncKeys}
						<GetKeys on:loadedKeys={loadedKeys} on:loadedKeys={syncKeys} />
					{/if}
				</Opened>
			{:else}
				<GetKeys on:loadedKeys />
			{/if}
		</div>
	{:else}
		<!-- Auto-resize embedded iframe -->
		<AutoSizer let:connectionReady let:show let:hide>
			<!-- connectionReady gets passed from AutoSizer to GetKeys -->
			<Connector {mounted}>
				<Confirmer {show} {hide} />
				{#if connectionReady}
					<GetKeys on:loadedKeys={connectionReady} />
				{/if}
			</Connector>
		</AutoSizer>
	{/if}
{/if}
