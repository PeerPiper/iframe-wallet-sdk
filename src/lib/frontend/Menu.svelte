<script>
	// @ts-nocheck

	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { storedValue } from './stores';
	import downloadBlob from './downloadBlob.js';

	let show = false;
	let showWarning = false;

	function toggle() {
		showWarning = false;
		show = !show;
	}

	function exportKeyfile() {
		showWarning = false;
		if (!$storedValue?.rsajwk) {
			console.log('No RSA key found');
			return;
		}
		const str = JSON.stringify($storedValue.rsajwk);
		const bytes = new TextEncoder().encode(str);
		const blob = new Blob([bytes], {
			type: 'application/json;charset=utf-8'
		});
		downloadBlob(blob, `arweave-keyfile-${$storedValue?.rsajwk?.kid || 'noname'}.json`);
		console.log('export keyfile');
	}

	function clickOutside(node, { enabled: initialEnabled, cb }) {
		const handleOutsideClick = ({ target }) => {
			if (!node.contains(target)) {
				cb();
			}
		};

		function update({ enabled }) {
			if (enabled) {
				window.addEventListener('click', handleOutsideClick);
			} else {
				window.removeEventListener('click', handleOutsideClick);
			}
		}

		update({ enabled: initialEnabled });
		return {
			update,
			destroy() {
				window.removeEventListener('click', handleOutsideClick);
			}
		};
	}
</script>

<div
	class="absolute m-2 w-48 right-0 text-toxic"
	use:clickOutside={{ enabled: show, cb: () => (show = false) }}
>
	<button class="m-auto w-full" on:click={toggle}>
		<div class="p-6 flex flex-row-reverse">
			<!-- vertical ellipsis -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</div>
	</button>
	{#if show}
		<div
			transition:slide={{ delay: 100, duration: 300, easing: quintOut }}
			on:click|preventDefault={(e) => (showWarning = true)}
			class="card relative cursor-pointer text-toxic p-4 border border-toxic shadow-md shadow-toxic/50 rounded-lg w-auto bg-neutral-800"
		>
			<!-- donwload svg icon, arrow pointing down to tray  -->
			<div class="flex flex-row">
				<div class="flex-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 m-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
						/>
					</svg>
				</div>
				<div class="flex-1">Download Arweave KeyFile</div>
			</div>
			{#if showWarning}
				<div
					class="text-yellow-400 w-full cursor-default"
					transition:slide={{ delay: 50, duration: 200, easing: quintOut }}
				>
					⚠️ Warning: Do not give your key file to anyone, these are your secret keys!

					<!-- I undetsand, start download -->
					<button
						class="my-4 border border-toxic rounded-lg bg-green-500 text-white"
						on:click|preventDefault={exportKeyfile}>Understood, Start Download</button
					>
				</div>
			{/if}
		</div>
	{/if}
</div>
