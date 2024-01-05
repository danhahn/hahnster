<script lang="ts">
	export let title: string;
	export let subtitle: string | undefined = undefined;
	export let description: string;
	export let image: string;
	export let link: string;
	export let linkText: string;
</script>

<div class="card flex flex-col bg-white rounded-lg shadow-xl shadow-black/20 overflow-hidden">
	<div class="card__image">
		<img src={image} alt={title} />
	</div>
	<div class="p-6">
		<h3 class="card__title text-teal-600">{title}</h3>
		{#if subtitle}
			<h4 class="card__subtitle">{subtitle}</h4>
		{/if}
		<p class="card__description">{description}</p>
		<a href={link} class="card__link" target="_blank" rel="noreferrer">{linkText}</a>
	</div>
</div>

<style lang="postcss">
	.card {
		transition: all 0.3s ease-in-out;
	}

	.card:hover {
		transform: translateY(-0.25rem);
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
	}

	.card__image {
		width: 100%;
		height: 15rem;
		overflow: hidden;
	}

	.card__image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}

	.card__title {
		margin: 0 0 0.5rem 0;
		font-size: 1.5rem;
		font-weight: 700;
	}

	.card__subtitle {
		margin: 0 0 1rem 0;
		font-size: 1rem;
		font-weight: 400;
		color: #777;
	}

	.card__description {
		margin: 0 0 1.5rem 0;
		font-size: 1rem;
		font-weight: 400;
		color: #777;
	}

	.card__link {
		display: inline-block;
		padding: 0.5rem 1rem;
		background-color: #000;
		color: #fff;
		border-radius: 0.25rem;
		text-decoration: none;
		transition: all 0.3s ease-in-out;
	}

	.card__link:hover {
		transform: translateY(-0.25rem);
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	}
</style>
