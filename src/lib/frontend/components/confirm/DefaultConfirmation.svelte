<script>
	import Button from '../atomic/Button.svelte';

	export let props;
	export let handleConfirmed;
	export let handleDenied;
</script>

<slot>
	<div>
		<div class="attention">
			<div>
				⚠️ Authorize {props.method} from your wallet?
			</div>
			<div class="submit">
				<Button type={'Yes'} clickHandler={handleConfirmed}>Yes</Button>
				<Button type={'No'} clickHandler={handleDenied}>No</Button>
			</div>
		</div>
	</div>
</slot>

<style>
	div.attention {
		display: flex;
		flex-direction: column;
		background-color: #fff9c4;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
	}
	div {
		padding: 0.5em;
		margin: 0.5em;
		width: fit-content;
	}
</style>
