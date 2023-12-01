<script lang="ts">
	import { navigation, rgbToHex, social } from '$lib';

	import { onMount } from 'svelte';
	import Icons from './Icons.svelte';
	import NavLink from './NavLink.svelte';
	import { navIsOpenState } from './stores/nav';

	let isOpen = false;

	function toggleOpen() {
		navIsOpenState.set(!$navIsOpenState);
	}

	$: hidden = !$navIsOpenState;

	let nav: HTMLElement;
	let color: string = 'white';

	onMount(() => {
		const rgb = getComputedStyle(nav).getPropertyValue('background-color');
		color = rgbToHex(rgb);
	});

	const checkResize = () => window.innerWidth >= 1024 && navIsOpenState.set(false);
</script>

<svelte:window on:resize={checkResize} />
<svelte:head>
	<meta name="theme-color" content={color} />
</svelte:head>

<nav class="navbar fixed bg-base-100">
	<div class="flex-1">
		<a href="/" class="flex items-center">
			<Icons name="hahnster" title="Hahnster Brand" class="w-56" />
		</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1 gap-4">
			{#each navigation as { url, text }}
				<li class="border-b border-b-slate-500/25 md:border-b-0">
					<NavLink href={url}>{text}</NavLink>
				</li>
			{/each}

			{#each social as { url, icon, text }}
				<li>
					<a href={url} target="_blank" rel="noreferrer"
						><Icons title={text} name={icon} class="w-5" /></a
					>
				</li>
			{/each}
		</ul>
	</div>
</nav>
