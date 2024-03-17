<script>
	import knives from '$lib/knives.js';
	import Knife from '$lib/Knife.svelte';
	import Modal from '$lib/Modal.svelte';

	let showModal = false;
</script>

<header class="h-screen text-center p-20 flex flex-col justify-center bg-stone-200">
		<h1 class="text-9xl font-bold text-stone-950 bg-amber-300 p-8 rounded-xl inline-block mx-auto">KNIIIFE</h1>
		<div class="p-12 mt-20 rounded-lg max-w-6xl mx-auto text-stone-900">
			<h2 class="text-7xl font-bold">The Friendly Arms Race</h2>
			<p class="text-2xl mt-4">A never-ending challenge where each blade aims to outdo the last. Join us on this thrilling journey of blade-length one-upmanship as we showcase our ever-growing collection of knives.</p>
			<button on:click={() => (showModal = true)} class="inline-block py-2 px-8 bg-white transition-all duration-50 shadow hover:scale-105 hover:shadow-lg rounded mt-8 font-sans
				font-bold text-stone-800">Show Rules</button>
		</div>
</header>

<main>
	<div class="max-w-6xl mx-auto px-16 py-20 mt-40 rounded-3xl">
		{#each knives as knife}
			<Knife data={knife} />
		{/each}
	</div>
</main>

<Modal bind:showModal>
	<h2 slot="header">Rules</h2>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque recusandae aliquam non magni atque incidunt error fugit sequi labore veniam. Ipsa repudiandae numquam veritatis odio consectetur ducimus sit explicabo consequuntur!</p>
</Modal>

<footer class="bg-stone-300 py-1 mt-20">
    <div class="container mx-auto">
        <p>&copy; 2023 kniiife.com</p>
    </div>
</footer>
