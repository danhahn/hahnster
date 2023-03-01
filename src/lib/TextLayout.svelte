<script lang="ts">
	export let variation: 'normal' | 'narrow' = 'normal';
</script>

<div
	class={`${variation} page grid ${variation === 'narrow' ? 'gap-2' : 'gap-4'} ${$$props.class}`}
>
	<slot />
</div>

<style lang="postcss">
	* :global(p) {
		@apply leading-7 md:leading-8;
	}
	.narrow :global(p) {
		@apply leading-5 md:leading-6;
	}
	* :global(h2) {
		@apply text-2xl font-bold text-teal-700 dark:text-teal-200 my-4 md:my-6 uppercase;
	}
	* :global(h3) {
		@apply text-xl font-bold text-teal-700 dark:text-teal-50 border-b border-teal-800 dark:border-teal-300 pb-2 md:mt-4;
	}
	:global(.page ul) {
		@apply list-disc pl-4 md:pr-28 grid gap-2 leading-7 md:leading-8;
	}
	.narrow :global(ul) {
		@apply list-disc pl-4 md:pr-28 grid gap-2 leading-5 md:leading-6;
	}
</style>
