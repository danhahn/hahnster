<script lang="ts">
	import Headline from '$lib/Headline.svelte';

	let name: string;
	let email: string;
	let message: string;

	const handleSubmit = (event: Event) => {
		event.preventDefault();

		console.log({ name, email, message });
	};
</script>

<Headline>Contact Us</Headline>

<form on:submit={handleSubmit}>
	<div>
		<label for="name">Name:</label>
		<input id="name" type="text" bind:value={name} />
	</div>

	<div>
		<label for="email">Email:</label>
		<input id="email" type="email" bind:value={email} />
	</div>

	<div>
		<label for="message">Message:</label>
		<textarea id="message" bind:value={message} />
	</div>

	<button type="submit">Send</button>
</form>

<style lang="postcss">
	form {
		@apply flex flex-col gap-4;
	}

	div {
		@apply flex flex-col gap-2;
	}

	input[type='text'],
	input[type='email'],
	textarea {
		@apply p-3 border border-gray-300 rounded bg-gray-50 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800;
	}
	button {
		@apply text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800;
	}
</style>
