<script>
	export let data = {};
</script>



<article class="mt-20 max-w-md">
	<header class="bg-red-900 p-14 text-white rounded-t-3xl">
		<p class="text-2xl font-normal">{data.brand || '-'}</p>
		<h1 class="font-serif text-5xl font-bold mt-4">{data.name || '-'}</h1>
	</header>
	<div class="bg-white text-stone-900 p-14 rounded-b-3xl">
		<p><span class="font-bold">Blade Length:</span> {data.bladeLength || '-'} 🗡</p>
		<p><span class="font-bold">Type:</span> {data.type || '-'}</p>
		<p><span class="font-bold">Description:</span> {data.description || '-'}</p>
		<a href={data.url || '#'} target="_blank" rel="noreferrer" class="inline-block font-sans font-semibold mt-6 text-red-700">Learn More</a>
	</div>
</article>

{#if data.images?.length > 0}
	<img src={data.images[0]} alt="" class="max-w-sm rounded-3xl" />
{/if}