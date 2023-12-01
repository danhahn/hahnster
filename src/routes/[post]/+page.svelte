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

<pre>
  {JSON.stringify(data, null, 2)}
</pre>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published on {data.meta.date}</p>
	</hgroup>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>
