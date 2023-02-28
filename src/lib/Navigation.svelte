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

<nav
	bind:this={nav}
	id="navigation"
	class="sticky top-0 z-50 bg-white border-slate-200 px-4 py-2 md:py-4 dark:bg-slate-900"
>
	<div class=" relative container flex flex-wrap items-center justify-between mx-auto">
		<a href="/" class="flex items-center">
			<Icons name="hahnster" title="Hahnster Brand" class="w-56" />
		</a>
		<button
			data-collapse-toggle="navbar-default"
			type="button"
			class="inline-flex items-center p-2 ml-3 text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
			aria-controls="navbar-default"
			aria-expanded="false"
			on:click={toggleOpen}
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-6 h-6"
				aria-hidden={isOpen}
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/></svg
			>
		</button>
		<div
			class="mt-14 md:mt-0 fixed md:static inset-0 md:block md:w-auto"
			id="navbar-default"
			class:hidden
		>
			<div
				class="grid md:flex md:gap-8 bg-slate-50 md:bg-white dark:bg-slate-800 md:dark:bg-slate-900 dark:border-slate-700"
			>
				<ul
					class="grid md:flex pt-2 md:pt-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 "
				>
					{#each navigation as { url, text }}
						<li class="border-b border-b-slate-500/25 md:border-b-0">
							<NavLink href={url}>{text}</NavLink>
						</li>
					{/each}
				</ul>
				<ul class="flex gap-2 p-4 md:p-0">
					{#each social as { url, icon, text }}
						<li>
							<a href={url} target="_blank" rel="noreferrer"
								><Icons title={text} name={icon} class="w-5" /></a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</nav>
