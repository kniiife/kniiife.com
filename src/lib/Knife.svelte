<script>
	export let data = {};
</script>

<article class="mt-20 flex items-center rounded-3xl bg-stone-100 shadow-lg">
	{#if data.images?.length > 0}
		<img src={data.images[0]} alt="" class="max-w-lg rounded-l-3xl" />
	{/if}
	<div class="ml-36">
		<header>
			<h1 class="font-serif text-4xl font-bold">{data.name || '-'}</h1>
			<p class="text-2xl font-semibold italic">Brand: {data.brand || '-'}</p>
		</header>
		<div class="mt-4">
			<p><span class="font-bold">Blade Length:</span> {data.bladeLength || '-'} 🗡</p>
			<p><span class="font-bold">type:</span> {data.type || '-'}</p>
			<p><span class="font-bold">Description:</span> {data.description || '-'}</p>
			<p>
				<span class="font-bold">URL:</span>
				<a href={data.url || '#'} target="_blank" rel="noreferrer" class="text-orange-600 font-bold"
					>{data.url || '-'}</a
				>
			</p>
		</div>
	</div>
</article>
