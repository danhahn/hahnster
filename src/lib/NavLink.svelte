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
		@apply block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-400 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent;
	}
</style>
