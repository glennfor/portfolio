<script lang="ts">
	import type { DesignIconName } from './icon-names';

	export let name: DesignIconName = 'arrow-right';
	export let size = 18;
	export let label: string | undefined = undefined;
</script>

<svg
	class="design-icon"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.8"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden={label ? undefined : 'true'}
	aria-label={label}
	role={label ? 'img' : undefined}
>
	{#if name === 'search'}
		<circle cx="11" cy="11" r="6.5" />
		<path d="m16 16 4 4" />
	{:else if name === 'sun'}
		<circle cx="12" cy="12" r="3.5" />
		<path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
	{:else if name === 'moon'}
		<path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" />
	{:else if name === 'arrow-up-right'}
		<path d="M7 17 17 7M8 7h9v9" />
	{:else if name === 'arrow-right'}
		<path d="M5 12h14M14 7l5 5-5 5" />
	{:else if name === 'menu'}
		<path d="M4 7h16M4 12h16M4 17h16" />
	{:else if name === 'close'}
		<path d="m6 6 12 12M18 6 6 18" />
	{:else if name === 'code' || name === 'software'}
		<path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
	{:else if name === 'projects' || name === 'grid'}
		<path d="M3 6.5h7l2 2h9v10H3z" />
		<path d="M3 6.5v-2h7l2 2" />
	{:else if name === 'briefcase'}
		<rect x="3" y="7" width="18" height="12" rx="1.5" />
		<path d="M9 7V4h6v3M3 12h18M10 12v2h4v-2" />
	{:else if name === 'leadership'}
		<circle cx="8" cy="8" r="3" />
		<circle cx="17" cy="9" r="2.5" />
		<path d="M2.5 19c.5-4 2.5-6 5.5-6s5 2 5.5 6M14 14c3.5-.7 6 1 6.5 5" />
	{:else if name === 'skills'}
		<path d="m14.7 6.3 3-3 3 3-3 3M9.3 17.7l-3 3-3-3 3-3M13 8l3 3-5 5-3-3z" />
	{:else if name === 'about'}
		<circle cx="12" cy="8" r="4" />
		<path d="M4 21c.8-5 3.5-7 8-7s7.2 2 8 7" />
	{:else if name === 'document'}
		<path d="M6 2h8l4 4v16H6zM14 2v5h5M9 12h6M9 16h6" />
	{:else if name === 'mail'}
		<rect x="3" y="5" width="18" height="14" rx="1.5" />
		<path d="m4 7 8 6 8-6" />
	{:else if name === 'github'}
		<path
			d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z"
			fill="currentColor"
			stroke="none"
		/>
	{:else if name === 'linkedin'}
		<path
			d="M6.5 9.5H3.8V20h2.7V9.5ZM5.1 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20.2 20h-2.7v-5.6c0-1.5-.5-2.5-1.8-2.5-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V20h-2.7s0-9.2 0-10.5h2.7v1.5c.4-.6 1.2-1.7 3.1-1.7 2.2 0 3.9 1.5 3.9 4.6V20Z"
			fill="currentColor"
			stroke="none"
		/>
	{:else if name === 'robotics'}
		<rect x="5" y="7" width="14" height="11" rx="2" />
		<path d="M12 3v4M9 3h6M8 12h.01M16 12h.01M9 16h6" />
	{:else if name === 'hardware'}
		<rect x="6" y="6" width="12" height="12" rx="1" />
		<path d="M9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M18 9h4M2 15h4M18 15h4" />
	{:else if name === 'ai'}
		<path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
		<circle cx="12" cy="12" r="4.5" />
		<path d="M8.5 8.5 6.5 6.5M15.5 8.5 17.5 6.5M8.5 15.5 6.5 17.5M15.5 15.5 17.5 17.5" />
	{:else if name === 'autonomous'}
		<path d="M5 16h14l-1.5-5.5a3 3 0 0 0-2.9-2.2H9.4a3 3 0 0 0-2.9 2.2L5 16Z" />
		<circle cx="8" cy="16.5" r="1.5" />
		<circle cx="16" cy="16.5" r="1.5" />
		<path d="M9 8.3 10.2 5h3.6L15 8.3" />
	{:else if name === 'architecture'}
		<rect x="4" y="5" width="16" height="14" rx="1.5" />
		<path d="M7 9h4M13 9h4M7 12h10M7 15h4M13 15h4" />
		<path d="M8 2.5v2.5M12 2.5v2.5M16 2.5v2.5M8 19v2.5M12 19v2.5M16 19v2.5" />
	{:else if name === 'startup'}
		<path d="M12 19V9" />
		<path d="m8 12 4-7 4 7" />
		<path d="M7 19h10" />
	{:else if name === 'research'}
		<path d="M10 3v7l-3 9h10l-3-9V3" />
		<path d="M8 3h8" />
		<path d="M9.5 10h5" />
	{:else if name === 'embedded'}
		<rect x="7" y="8" width="10" height="8" rx="1" />
		<path d="M10 8V5M14 8V5M10 16v3M14 16v3M7 11H4M7 13H4M20 11h-3M20 13h-3" />
	{:else if name === 'product'}
		<path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5z" />
		<path d="M12 12v8M4 8.5l8 3.5 8-3.5" />
	{:else if name === 'education'}
		<path d="m3 9 9-5 9 5-9 5-9-5Z" />
		<path d="M7 11.5v4.2c0 1.3 2.2 2.8 5 2.8s5-1.5 5-2.8v-4.2" />
		<path d="M21 9v6" />
	{:else if name === 'iot'}
		<circle cx="12" cy="12" r="2.2" />
		<path d="M7.5 7.5a6.4 6.4 0 0 1 9 0M5.2 5.2a9.5 9.5 0 0 1 13.6 0M16.5 16.5a6.4 6.4 0 0 1-9 0M18.8 18.8a9.5 9.5 0 0 1-13.6 0" />
	{:else if name === 'desktop'}
		<rect x="3" y="4" width="18" height="12" rx="1.5" />
		<path d="M8 20h8M12 16v4" />
	{:else if name === 'systems'}
		<rect x="3" y="3" width="7" height="7" rx="1" />
		<rect x="14" y="3" width="7" height="7" rx="1" />
		<rect x="8.5" y="14" width="7" height="7" rx="1" />
		<path d="M6.5 10v2.5H10M17.5 10v2.5H14M12 14v-1.5" />
	{:else if name === 'game'}
		<path d="M7 9h10a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4Z" />
		<path d="M8 13h4M10 11v4M16.2 12.2h.01M18 14.2h.01" />
	{/if}
</svg>
