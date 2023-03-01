<div class="page grid gap-4">
	<slot />
</div>

<style lang="postcss">
	* :global(p) {
		@apply leading-7 md:leading-8;
	}
	* :global(h2) {
		@apply text-2xl font-bold text-teal-700 dark:text-teal-200;
	}
	:global(.page ul) {
		@apply list-disc pl-4 md:pr-28 grid gap-2 leading-7 md:leading-8;
	}
</style>
