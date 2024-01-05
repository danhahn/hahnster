<script lang="ts">
	import { browser } from '$app/environment';

	let on: boolean = false;
	$: if (on) {
		// set the screen to full screen

		if (browser) document.documentElement.requestFullscreen();
	} else {
		// exit full screen
		if (browser) document.exitFullscreen();
	}
</script>

<svelte:head>
	<title>💡 Light 💡 | hahnster.com</title>
</svelte:head>

<div class="light" class:on>
	<button on:click={() => (on = !on)}
		>💡 Turn
		{#if on}
			Off
		{:else}
			On
		{/if}
		Light 💡</button
	>
</div>

<style>
	.light {
		height: 100vh;
		display: grid;
		place-items: center;
		background: #0e0e0e;
		transition: all 0.1s ease-in-out;
	}

	.light.on {
		background-color: #e7e8d3a0;
		color: #000;
	}

	.light button {
		background-color: #000;
		color: #fff;
		border: 2px solid;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		font-size: 1.2rem;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
	}

	.light.on button {
		background-color: #fff;
		color: #000;
	}

	.light:not(.on) button:hover {
		scale: 4;
	}

	.light button:hover {
		background-color: lightgray;
		color: rgb(14, 5, 5);
	}
</style>
