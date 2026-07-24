<script lang="ts">
	import type { DesignMedia } from '$lib/design/content';

	export let media: Array<DesignMedia> = [];
</script>

{#if media.length}
	<div class="design-gallery">
		{#each media as item}
			<figure style={`--media-aspect: ${item.aspectRatio ?? '16 / 10'}`}>
				{#if item.type === 'image'}
					<img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
				{:else}
					<video
						src={item.src}
						poster={item.poster}
						aria-label={item.alt}
						controls
						preload="metadata"
						playsinline
					>
						<track kind="captions" src={item.captionsSrc} srclang="en" label="English" default />
						Your browser does not support embedded video.
					</video>
				{/if}
				{#if item.caption}<figcaption>{item.caption}</figcaption>{/if}
			</figure>
		{/each}
	</div>
{/if}
