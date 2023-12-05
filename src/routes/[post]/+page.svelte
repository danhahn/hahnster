<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
</svelte:head>

<article class="container max-w-4xl mx-auto pt-20">
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published on {data.meta.date}</p>
	</hgroup>

	<div class="prose lg:prose-xl">
		<svelte:component this={data.content} />
	</div>
</article>
