<script>
	// @ts-nocheck
	export let clickHandler;

	export let type;
	let green = 'bg-green-500 hover:bg-green-700 text-white';
	let blue = 'bg-blue-500 hover:bg-blue-700 text-white';
	let red = 'bg-red-500 hover:bg-red-700 text-white';
	let yellow = 'bg-yellow-500 hover:bg-yellow-700 text-white';
</script>

<button
	class="{type == 'Yes'
		? green
		: type == 'No'
		? red
		: type == 'Connecting'
		? yellow
		: blue} font-bold rounded shadow-md py-4 my-4 mx-2 px-6 w-fit"
	disabled={type == 'Connecting'}
	on:click|preventDefault={clickHandler}
>
	<slot />
</button>
