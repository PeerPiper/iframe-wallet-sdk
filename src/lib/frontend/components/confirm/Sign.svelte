<script>
	import Button from '../atomic/Button.svelte';
	import DefaultConfirmation from './DefaultConfirmation.svelte';

	export let props;
	export let handleConfirmed;
	export let handleDenied;

	const decoder = new TextDecoder();

	let defConf;
</script>

<!-- on:confirmed on:denied -- they just forward the event notification up to <Confirmer /> -->
<!-- https://svelte.dev/tutorial/event-forwarding -->
<div class="flex flex-col bg-yellow-100 drop-shadow-lg rounded w-auto m-4 p-4">
	<!-- this is default content, override with slot -->
	<div class="flex-1">
		<!-- JSON.stringify(, null, 2)   decoder.decode()-->
		<!-- {props.params.toString()}  -->
		<!-- TODO: Data layouts for confirmer  -->
		⚠️ Sign this transaction?
	</div>
	<div class="flex-1 sm:p-4">
		<Button type={'Yes'} clickHandler={handleConfirmed}>Yes</Button>
		<Button type={'No'} clickHandler={handleDenied}>No</Button>
	</div>
</div>
