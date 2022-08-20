<script>
	// @ts-nocheck

	import Button from '../atomic/Button.svelte';
	import EncodingSelector from '../atomic/EncodingSelector.svelte';

	export let props;
	export let handleConfirmed;
	export let handleDenied;

	const decoder = new TextDecoder();

	let defConf;
</script>

<!-- on:confirmed on:denied -- they just forward the event notification up to <Confirmer /> -->
<!-- https://svelte.dev/tutorial/event-forwarding -->
<div class="attention rounded-lg m-4 p-4">
	<!-- this is default content, override with slot -->
	<div class="break-all">
		⚠️ Grant Access to {props.params.tag} for
		<EncodingSelector pubkey={props.params.targetPublicKey} />
	</div>
	<div class="submit">
		<Button type={'Yes'} clickHandler={handleConfirmed}>Yes</Button>
		<Button type={'No'} clickHandler={handleDenied}>No</Button>
	</div>
</div>

<style>
	div.attention {
		display: flex;
		flex-direction: column;
		background-color: #fff9c4;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
		width: 100%;
	}
	div {
		padding: 0.3em;
		margin: 0.3em;
	}
</style>
