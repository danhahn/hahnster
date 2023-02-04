<div class="grid gap-4">
	<slot />
</div>

<style lang="postcss">
	:global(h2) {
		@apply text-2xl font-bold;
	}
	:global(ul) {
		@apply list-disc pl-4 grid gap-2;
	}
</style>
