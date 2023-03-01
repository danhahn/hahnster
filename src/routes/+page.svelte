<script>
	import { siteName } from '$lib';
	import Headline from '$lib/Headline.svelte';
	import Hero from '$lib/Hero.svelte';
</script>

<Hero>
	<Headline className="text-center text-teal-100 dark:text-teal-800">Welcome to {siteName}</Headline
	>
</Hero>
