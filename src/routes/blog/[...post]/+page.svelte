<script lang="ts">
	import Headline from '$lib/Headline.svelte';
	import Section from '$lib/Section.svelte';

	export let data;
</script>

<Section>
	<Headline>{data.title}</Headline>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</Section>

<style lang="postcss">
	:global(ul) {
		@apply my-3 grid gap-3 pl-6 list-disc;
	}
	:global(p) {
		@apply my-3;
	}
</style>
