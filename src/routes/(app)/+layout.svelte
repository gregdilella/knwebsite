<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	let { children, data } = $props();
	import { CircleUser } from 'lucide-svelte';
	import { toggleMode, mode } from 'mode-watcher';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
</script>

<div class="">
	<Sidebar />
	<main class="ml-[73px] py-8 md:ml-[244px]">
		{@render children()}
	</main>
</div>
<div class="fixed right-0 top-0 mt-4 mr-4 hidden w-[319px] px-3 text-sm xl:inline-block">
	<div class="flex items-center gap-3 border-2 rounded-lg p-2">
		<!-- Simplified Mode Toggle Button -->
		<button onclick={toggleMode} class="flex items-center gap-2 p-2  ">
			{#if $mode === 'dark'}
				<Sun />

			{:else if $mode === 'light'}
				<Moon />

			{/if}
		</button>
		<!-- <CircleUser class="size-11" /> -->
		<div>
			<p class="font-medium">{data.user?.firstName} {data.user?.lastName}</p>
			<p class="text-muted-foreground">{data.user?.email}</p>
		</div>
	</div>
</div>
