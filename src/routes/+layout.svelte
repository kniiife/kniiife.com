<script>
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.stone.100);
		color: theme(colors.stone.950);
	}
</style>
