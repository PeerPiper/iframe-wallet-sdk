<script>
	import * as ArweaveUtils from './arweave/utils';
	import Button from '../atomic/Button.svelte';

	export let props;
	export let handleConfirmed;
	export let handleDenied;

	let defConf;
	let checksOut = false;
	console.log('Signing ', { params: props.params });

	const transaction = props.params;

	let tx = new ArweaveUtils.Transaction(transaction);
	let tags = tx.tags.map((tag) => ({
		name: tag.get('name', { decode: true, string: true }),
		val: tag.get('value', { decode: true, string: true })
	}));
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
			Token transfer: {transaction.quantity}<br />
			One time storage Fee: {transaction.reward} (~${(
				ArweaveUtils.winstonToAr(transaction.reward) * 100
			).toFixed(5)})<br />
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
