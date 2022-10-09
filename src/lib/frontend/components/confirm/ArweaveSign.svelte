<script>
	import * as ArweaveUtils from './arweave/utils';
	import Button from '../atomic/Button.svelte';

	export let props;
	export let handleConfirmed;
	export let handleDenied;

	/**
	 * @type {boolean}
	 */
	let isWarp;

	console.log('Signing ', { params: props.params });

	const transaction = props.params;

	let tx = new ArweaveUtils.Transaction(transaction);
	let tags = tx.tags.map((tag) => ({
		name: tag.get('name', { decode: true, string: true }),
		val: tag.get('value', { decode: true, string: true })
	}));
	// <!-- check if tags array has an element with the name 'SDK' equaling 'Warp' -->
	if (tags.some((tag) => tag.name === 'SDK' && tag.val === 'Warp')) {
		isWarp = true;
	}
</script>

<!--
{props} passes the properties down to <DefaultConfirmation>
let:props={p} gets them back up from the <DefaultConfirmation> slot
-->
{#if transaction}
	<div class="attention">
		<!-- this is default content, override with slot -->
		<div>
			⚠️ Attention! You are about to sign ({props.method}) this Arweave transaction. Authorize to
			proceed?
		</div>
		<div>
			Tags:<br />
			{#each tags as { name, val }}
				<li class={name.includes('App-Name') ? 'bold' : ''}>
					{name}:
					{val}
				</li>
			{/each}
			<!-- if transaction.data_size < 100000, cross out and thank uploadDataToBundlr.Network -->
			Token transfer: {transaction.quantity}<br />
			One time storage Fee:
			<span class={isWarp && transaction.data_size < 100000 ? 'line-through' : ''}
				>{transaction.reward} (~${(ArweaveUtils.winstonToAr(transaction.reward) * 100).toFixed(
					5
				)})</span
			>{#if isWarp && transaction.data_size < 100000}
				<br />
				<span class="bold">Thank you for using Bundlr.Network!</span>
			{/if}
			<br />
		</div>
		<div class="submit">
			<Button type={'Yes'} clickHandler={handleConfirmed}>Yes</Button>
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
