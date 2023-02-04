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

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<main class="bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
	<Navigation />
	<section class="container max-w-4xl mx-auto p-10">
		<slot />
	</section>
	<Footer />
</main>

<style lang="postcss">
	main {
		min-height: var(--doc-height);
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
