<script lang="ts">
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import 'prismjs/components/prism-typescript';
	import { onMount } from 'svelte';

	export let content = '';

	let container: HTMLDivElement;

	marked.use(gfmHeadingId(), mangle());

	onMount(() => {
		const sanitizer = createSanitizer();
		container.innerHTML = sanitizer.sanitize(marked.parse(content) as string);
		Prism.highlightAllUnder(container);
	});
</script>

<div bind:this={container} class="design-prose"></div>
