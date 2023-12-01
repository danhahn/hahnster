<script lang="ts">
	export let title: string;
	export let subtitle: string | undefined = undefined;
	export let description: string;
	export let image: string;
	export let link: string;
	export let linkText: string;
</script>

<div class="card bg-base-100 shadow-xl">
	<figure>
		<img src={image} alt={title} />
	</figure>
	<div class="card-body">
		<h3 class="card-title">{title}</h3>
		{#if subtitle}
			<h4 class="card__subtitle">{subtitle}</h4>
		{/if}
		<p>{description}</p>
		<div class="card-action justify-end">
			<a href={link} class="btn btn-primary" target="_blank" rel="noreferrer">{linkText}</a>
		</div>
	</div>
</div>
