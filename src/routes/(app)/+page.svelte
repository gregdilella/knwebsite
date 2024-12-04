<script lang="ts">

	// import TweetCard from '$lib/components/TweetCard.svelte'; // Updated path
	import { CircleUser } from 'lucide-svelte';
	let { data } = $props();
	import { writable } from 'svelte/store';

	export const selectedSearchItem = writable<string | null>(null);
	
</script>

<div class="flex gap-5">
	<div class="flex-1 flex-shrink">
		<div class="mx-auto w-full max-w-[630px]">

		</div>
	</div>


</div>
