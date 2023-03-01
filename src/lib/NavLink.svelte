<script lang="ts">
	import { navIsOpenState } from './stores/nav';

	function toggleNavState() {
		navIsOpenState.set(!$navIsOpenState);
	}

	export let href: string;
</script>

<a {href} on:click={toggleNavState}><slot /></a>

<style lang="postcss">
	a {
		@apply block px-4 py-2 text-slate-700 dark:text-slate-400 rounded hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0  md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent;
	}
</style>
