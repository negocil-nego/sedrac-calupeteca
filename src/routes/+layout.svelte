<script lang="ts">
	import type { LayoutProps } from "./$types";
	import "./app.css";
	import { t } from "../lib/i18n";

	let { children }: LayoutProps = $props();
	const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
	const personSchema = $derived({
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Sedrac Lucas Calupeteca",
		...(siteUrl ? { url: siteUrl } : {}),
		jobTitle: $t("seo.jobTitle"),
		description: $t("seo.description"),
		sameAs: [
			"https://github.com/sedrac-slc",
			"https://www.linkedin.com/in/sedrac-calupeteca/",
			"https://www.facebook.com/sedrak.lucas/",
		],
		knowsAbout: [
			"Software development",
			"Systems analysis",
			"Systems design",
			"DevOps",
			"Java",
			"TypeScript",
			"PHP",
			"Python",
			"Dart",
			"Svelte",
			"Next.js",
			"NestJS",
			"Laravel",
			"Flutter",
			"PostgreSQL",
			"MySQL",
			"Docker",
			"Google Cloud",
			"AWS",
		],
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
	/>
	<link rel="stylesheet" href="https://use.hugeicons.com/font/icons.css" />
	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />

	<title>{$t("seo.title")}</title>
	<meta name="description" content={$t("seo.description")} />
	<meta name="author" content="Sedrac Lucas Calupeteca" />
	<meta name="robots" content="index, follow" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content={$t("seo.openGraphLocale")} />
	<meta property="og:title" content={$t("seo.title")} />
	<meta property="og:description" content={$t("seo.description")} />
	<meta
		property="og:image"
		content={siteUrl ? `${siteUrl}/image.jpeg` : "/image.jpeg"}
	/>
	<meta property="og:image:alt" content={$t("homepage.portrait.alt")} />
	{#if siteUrl}
		<link rel="canonical" href={`${siteUrl}/`} />
		<meta property="og:url" content={`${siteUrl}/`} />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$t("seo.title")} />
	<meta name="twitter:description" content={$t("seo.description")} />
	<meta
		name="twitter:image"
		content={siteUrl ? `${siteUrl}/image.jpeg` : "/image.jpeg"}
	/>
	<script type="application/ld+json">
{JSON.stringify(personSchema)}
	</script>
</svelte:head>

{@render children()}
