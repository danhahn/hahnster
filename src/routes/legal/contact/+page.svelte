<script lang="ts">
	let name: string;
	let email: string;
	let message: string;

	const handleSubmit = (event: Event) => {
		event.preventDefault();

		console.log({ name, email, message });
	};
</script>

<form on:submit={handleSubmit}>
	<label>
		Name:
		<input type="text" bind:value={name} />
	</label>

	<label>
		Email:
		<input type="email" bind:value={email} />
	</label>

	<label>
		Message:
		<textarea bind:value={message} />
	</label>

	<button type="submit">Send</button>
</form>
