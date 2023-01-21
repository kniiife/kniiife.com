<script>
    export let data = {};
</script>

<h1>{data.name}</h1>
<p>Brand: {data.brand}</p>
<p>Blade Length: {data.bladeLength}</p>
<p>type: {data.type}</p>
<p>Description: {data.description}</p>
<p>URL: <a href={data.url} target="_blank" rel="noreferrer">{data.url}</a></p>