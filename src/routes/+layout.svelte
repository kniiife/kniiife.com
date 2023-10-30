<script>
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.stone.200);
		color: theme(colors.stone.800);
	}
</style>
