<script>
	export let data = {};
</script>

<article class="mt-20">
	<header>
		<h1 class="text-8xl font-bold">{data.name}</h1>
		<p class="text-2xl font-semibold italic ml-16">Brand: {data.brand}</p>
	</header>
	<div class="mt-4 ml-16">
		<p><span class="font-bold">Blade Length:</span> {data.bladeLength} 🗡</p>
		<p><span class="font-bold">type:</span> {data.type}</p>
		<p><span class="font-bold">Description:</span> {data.description}</p>
		<p>
			<span class="font-bold">URL:</span>
			<a href={data.url} target="_blank" rel="noreferrer" class="text-orange-600 font-bold"
				>{data.url}</a
			>
		</p>
	</div>
</article>
