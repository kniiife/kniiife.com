<script>
	import { each } from 'svelte/internal';
	import knives from '../../src/knives.json';
	import Knife from '$lib/Knife.svelte';
	import Modal from '../lib/Modal.svelte';

	let showModal = false;
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
			<button on:click={() => (showModal = true)} class="inline-block py-2 px-8 bg-stone-100 hover:bg-white rounded mt-8 font-sans
				font-bold">Show Rules</button>
		</div>
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
