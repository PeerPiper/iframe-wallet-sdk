<script>
	// @ts-nocheck

	import DefaultConfirmation from './DefaultConfirmation.svelte';
	import Button from '../atomic/Button.svelte';

	export let props;

	let defConf;
</script>

<DefaultConfirmation bind:this={defConf} {props} let:props={p} on:confirmed>
	<div class="attention">
		<!-- this is default content, override with slot -->
		<div>
			⚠️ Allow {p.params.origin} to see your <b>Public</b> Key?
		</div>
		<div class="submit">
			<Button type={'Yes'} clickHandler={defConf.handleConfirm}>Yes</Button>
		</div>
	</div>
</DefaultConfirmation>

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
</style>
