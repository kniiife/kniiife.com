<script>
	import { each } from 'svelte/internal';
	import knives from '../../src/knives.json';
	import Knife from '$lib/Knife.svelte';
</script>

<header class="bg-stone-300 p-8 border-b-8">
	<div class="container mx-auto">
		<h1 class="text-3xl font-black text-stone-800">KNIIIFE🗡</h1>
	</div>
</header>

<main>
	<div class="container mx-auto">
		{#each knives as knife}
			<Knife data={knife} />
		{/each}
	</div>
</main>

<footer class="bg-stone-300 py-1 mt-20">
    <div class="container mx-auto">
        <p>&copy; 2023 kniiife.com</p>
    </div>
</footer>
