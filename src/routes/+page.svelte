<script>
	import { siteName } from '$lib';
	import Card from '$lib/Card.svelte';
	import CardGroup from '$lib/CardGroup.svelte';
	import Headline from '$lib/Headline.svelte';
	import Hero from '$lib/Hero.svelte';
</script>

<Hero>
	<Headline className="m-0 text-center text-teal-100 dark:text-teal-800"
		>Welcome to {siteName}</Headline
	>
</Hero>

<h2 class="text-2xl lg:text-5xl p-8 py-4 lg:p-4 container mx-auto mt-5 lg:mt-20">
	Resent Projects
</h2>

<CardGroup>
	<Card
		title="Megan and Mike 2024"
		description="I built a website for my niece and her fiance to help them with their wedding planning. It was a fun project and I learned a lot about Svelte and Tailwind CSS."
		link="/post-one"
		image="/images/meganmike.png"
		linkText="Learn more"
	/>
	<Card
		title="Simpsons Picker"
		description="Every night my family and I watch an episode of The Simpsons. We have seen them all so many times that we decided to start picking episodes at random. I built this app to help us do that."
		link="https://simpson-green.vercel.app/"
		image="/images/picker.png"
		linkText="Learn more"
	/>
	<Card
		title="Menu Planner"
		description="My wife and I have been using a menu planner for years. I built this app to help us plan our monthly menus."
		link="https://www.menuplanner.dev/"
		image="/images/menu.png"
		linkText="Learn more"
	/>
</CardGroup>
