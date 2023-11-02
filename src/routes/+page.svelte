<script>
	import { each } from 'svelte/internal';
	import knives from '../../src/knives.json';
	import Knife from '$lib/Knife.svelte';
</script>

<header class="bg-stone-300 p-8 border-b-8">
	<div class="container mx-auto">
		<h1 class="text-center text-3xl font-bold text-stone-800">KNIIIFE</h1>
	</div>
</header>

<main>
	<div class="container mx-auto">
		<div class="text-center my-40">
			<h1 class="text-8xl font-bold text-red-800">The Friendly Arms Race</h1>
			<p class="text-3xl mt-4">A never-ending challenge where each blade aims to outdo the last. Join us on this thrilling journey of blade-length one-upmanship as we showcase our ever-growing collection of knives.</p>
		</div>
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
