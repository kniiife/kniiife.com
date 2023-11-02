<script>
	export let data = {};
</script>

<article class="mt-20 flex group odd:flex-row-reverse items-center rounded-3xl bg-stone-100 shadow-lg">
	{#if data.images?.length > 0}
		<img src={data.images[0]} alt="" class="max-w-lg rounded-l-3xl group-odd:rounded-r-3xl group-odd:rounded-l-none" />
	{/if}
	<div class="grow p-28">
		<header>
			<p class="text-2xl font-normal">{data.brand || '-'}</p>
			<h1 class="font-serif text-7xl font-bold">{data.name || '-'}</h1>
		</header>
		<div class="mt-4">
			<p><span class="font-bold">Blade Length:</span> {data.bladeLength || '-'} 🗡</p>
			<p><span class="font-bold">Type:</span> {data.type || '-'}</p>
			<p><span class="font-bold">Description:</span> {data.description || '-'}</p>
			<a href={data.url || '#'} target="_blank" rel="noreferrer" class="inline-block bg-red-800 text-white font-sans font-semibold mt-6 py-1 px-6 rounded-md">Learn More</a>
		</div>
	</div>
</article>
