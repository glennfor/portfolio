<script lang="ts">
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount } from 'svelte';

	let container: HTMLDivElement;

	export let content: string;

	onMount(() => {
		marked.use(gfmHeadingId());
		marked.use(mangle());

		const sanitizer = createSanitizer(window);

		if (window) {
			const parsed = marked.parse(content);

			container.innerHTML = sanitizer.sanitize(parsed);

			Prism.highlightAllUnder(container);
		}
	});
</script>

<div bind:this={container} class="markdown-container md:px-200px" />

<style>
	.markdown-container p {
		font-size: 40px;
		color: green;
	}
	.markdown-container > img {
		display: inline-block;
		padding-inline: auto;
		width: 100% !important;
		padding-bottom: 100px;
	}
</style>
