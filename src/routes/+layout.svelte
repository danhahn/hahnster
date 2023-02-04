<script>
	import '../app.css';
	import Navigation from '$lib/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';

	const documentHeight = () => {
		const doc = document.documentElement;
		doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
	};
</script>

<svelte:body on:resize={documentHeight} />

<main class="bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
	<Navigation />
	<section class="p-10">
		<slot />
	</section>
	<Footer />
</main>

<style lang="postcss">
	main {
		height: var(--doc-height);
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
