<script>
	import { each } from 'svelte/internal';
    import knives from '../../src/knives.json';
    import Knife from '$lib/Knife.svelte'
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


{#each knives as knife}
    <Knife data={knife} />
{/each}
