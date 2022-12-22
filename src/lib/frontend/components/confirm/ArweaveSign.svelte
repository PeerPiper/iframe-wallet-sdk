<script>
	import { onMount } from 'svelte';
	import * as ArweaveUtils from './arweave/utils';
	import Button from '../atomic/Button.svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let props;
	export let handleConfirmed;
	export let handleDenied;

	let open;
	let dontAskAgain = false;
	const transaction = props.params;

	let tx = new ArweaveUtils.Transaction(transaction);
	let tags = tx.tags.map((tag) => ({
		name: tag.get('name', { decode: true, string: true }),
		val: tag.get('value', { decode: true, string: true })
	}));

	onMount(() => {
		// check if localstorage is available if so, check if has a dontAskAgain for this confirmSection
		if (localStorage) {
			dontAskAgain = localStorage.getItem(`dontAskAgain:${props.method}`);
		}
	});

	$: if (dontAskAgain) {
		// if localStorage avail, save to localStorage
		if (localStorage) {
			localStorage.setItem(`dontAskAgain:${props.method}`, dontAskAgain);
		}
	}
</script>

<!--
{props} passes the properties down to <DefaultConfirmation>
let:props={p} gets them back up from the <DefaultConfirmation> slot
-->
{#if transaction}
	<div class="attention rounded">
		<!-- this is default content, override with slot -->
		<div>
			⚠️ Attention! You are about to sign ({props.method}) this Arweave transaction. Authorize to
			proceed?
		</div>

		<details bind:open>
			<summary>Details</summary>
			{#if open}
				<div transition:slide={{ delay: 100, duration: 300, easing: quintOut }}>
					Tags:<br />
					{#each tags as { name, val }}
						<li class={name.includes('App-Name') ? 'bold' : ''}>
							{name}:
							{val}
						</li>
					{/each}
					<!-- if transaction.data_size < 100000, cross out and thank uploadDataToBundlr.Network -->
					Token transfer:
					<span class={transaction.quantity == 0 ? 'green' : ''}>{transaction.quantity}</span><br />
				</div>
			{/if}
		</details>

		<div>
			One time storage Fee:
			<span class={transaction.data_size < 100000 ? 'line-through' : ''}
				>{transaction.reward} (~${(ArweaveUtils.winstonToAr(transaction.reward) * 100).toFixed(
					5
				)})</span
			>{#if transaction.data_size < 100000}
				<br />
				<span class="bold">Thank you for using Bundlr.Network!</span>
			{/if}
			<br />
		</div>
		<!-- add a don't ask me again checkbox using tailwindcss  -->

		<div class="p-2">
			<input type="checkbox" bind:checked={dontAskAgain} />
			<label for="dontAskAgain">Don't ask again</label>
		</div>

		<div class="submit">
			<Button type={'Yes'} clickHandler={(e) => handleConfirmed({ dontAskAgain })}>Yes</Button>
			<Button type={'No'} clickHandler={handleDenied}>No</Button>
		</div>
	</div>
{/if}

<style>
	div.attention {
		display: flex;
		flex-direction: column;
		background-color: #fff9c4;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
	}
	div {
		padding: 0.3em;
		margin: 0.3em;
	}

	.bold {
		font-weight: bolder;
	}
	li {
		overflow-wrap: break-word;
		word-break: break-all;
	}
</style>
