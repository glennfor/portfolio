<script lang="ts">
	import type { DesignMedia } from '$lib/design/content';

	export let media: Array<DesignMedia> = [];

	let playingKeys: Record<string, boolean> = {};

	const videoKey = (item: Extract<DesignMedia, { type: 'video' }>, index: number) =>
		`${item.src}-${index}`;

	const markPlaying = (key: string) => {
		playingKeys = { ...playingKeys, [key]: true };
	};

	const markStopped = (key: string) => {
		playingKeys = { ...playingKeys, [key]: false };
	};

	const handlePause = (key: string, event: Event) => {
		const video = event.currentTarget as HTMLVideoElement;
		if (video.paused) markStopped(key);
	};

	const startPlayback = (key: string, event: MouseEvent) => {
		const button = event.currentTarget as HTMLButtonElement;
		const wrap = button.closest('.design-gallery-video');
		const video = wrap?.querySelector('video');
		if (!video) return;
		markPlaying(key);
		void video.play();
		video.focus();
	};
</script>

{#if media.length}
	<div class="design-gallery">
		{#each media as item, index}
			<figure style={`--media-aspect: ${item.aspectRatio ?? '16 / 10'}`}>
				{#if item.type === 'image'}
					<img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
				{:else}
					{@const key = videoKey(item, index)}
					<div class="design-gallery-video" class:is-playing={!!playingKeys[key]}>
						<video
							src={item.src}
							poster={item.poster}
							aria-label={item.alt}
							controls
							muted
							playsinline
							preload="metadata"
							controlslist="nodownload"
							on:play={() => markPlaying(key)}
							on:pause={(event) => handlePause(key, event)}
							on:ended={() => markStopped(key)}
						>
							<track kind="captions" src={item.captionsSrc} srclang="en" label="English" default />
							Your browser does not support embedded video.
						</video>
						{#if !playingKeys[key]}
							<button
								type="button"
								class="design-gallery-play"
								aria-label={`Play ${item.alt}`}
								on:click={(event) => startPlayback(key, event)}
							>
								<span class="design-gallery-play-icon" aria-hidden="true"></span>
								<span>Play</span>
							</button>
						{/if}
					</div>
				{/if}
				{#if item.caption}<figcaption>{item.caption}</figcaption>{/if}
			</figure>
		{/each}
	</div>
{/if}
