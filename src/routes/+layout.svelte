<script lang="ts">
	import favicon from "#lib/assets/favicon.svg";
	import type { LayoutProps } from "./$types";
	import "./app.css";

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
	/>
	<link rel="stylesheet" href="https://use.hugeicons.com/font/icons.css" />
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
