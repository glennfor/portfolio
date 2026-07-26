<script lang="ts">
	import { page } from '$app/stores';
	import DesignIcon from '$lib/design/DesignIcon.svelte';
	import { profile } from '$lib/design/content';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import '$lib/design/design.css';

	const navItems = [
		{ label: 'Projects', href: '/projects', icon: 'projects' as const },
		{ label: 'Experience', href: '/experience', icon: 'briefcase' as const },
		{ label: 'Leadership', href: '/leadership', icon: 'leadership' as const },
		{ label: 'Skills', href: '/skills', icon: 'skills' as const },
		{ label: 'About', href: '/about', icon: 'about' as const },
		{ label: 'Writing', href: '/writing', icon: 'document' as const }
	];

	let isMenuOpen = false;
	let currentPath = '';

	$: if ($page.url.pathname !== currentPath) {
		currentPath = $page.url.pathname;
		isMenuOpen = false;
	}

	const isActive = (href: string, pathname: string) =>
		href === '/'
			? pathname === href
			: pathname === href || pathname.startsWith(`${href}/`);

	const handleMenuKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') isMenuOpen = false;
	};
</script>

<svelte:window on:keydown={handleMenuKeydown} />

<div class:dark={$theme} class:menu-open={isMenuOpen} class="design-site">
	<header class="design-topbar design-container">
		<a class="design-brand" href="/" aria-label="Glen Nfor, portfolio home">
			<span class="design-brand-icon"><DesignIcon name="code" /></span>
			<span>GLEN.NFOR</span>
		</a>

		<nav class="design-nav" id="design-primary-nav" aria-label="Primary navigation">
			{#each navItems as item}
				<a
					href={item.href}
					class:active={isActive(item.href, $page.url.pathname)}
					aria-current={isActive(item.href, $page.url.pathname) ? 'page' : undefined}
				>
					<DesignIcon name={item.icon} size={15} />
					{item.label}
				</a>
			{/each}
			<a class="design-mobile-only" href="/search">
				<DesignIcon name="search" size={15} />
				Search
			</a>
			<a class="design-mobile-only" href={profile.links.resume} target="_blank" rel="noreferrer">
				<DesignIcon name="document" size={15} />
				Résumé
			</a>
		</nav>

		<div class="design-topbar-actions">
			<a class="design-search-action" href="/search" aria-label="Search">
				<DesignIcon name="search" />
			</a>
			<a class="design-resume-link" href={profile.links.resume} target="_blank" rel="noreferrer">
				<DesignIcon name="document" size={15} />
				<span>Résumé</span>
			</a>
			<button
				type="button"
				on:click={() => toggleTheme()}
				aria-label={$theme ? 'Switch to light theme' : 'Switch to dark theme'}
			>
				<DesignIcon name={$theme ? 'sun' : 'moon'} />
			</button>
			<button
				class="design-menu-button"
				type="button"
				on:click={() => (isMenuOpen = !isMenuOpen)}
				aria-expanded={isMenuOpen}
				aria-controls="design-primary-nav"
				aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
			>
				<DesignIcon name={isMenuOpen ? 'close' : 'menu'} />
			</button>
		</div>
	</header>

	<main class="design-container">
		<slot />
	</main>

	<footer class="design-footer design-container">
		<div>
			<span>© {new Date().getFullYear()} {profile.shortName}</span>
			<span>Software · AI · Robotics · Hardware</span>
		</div>
		<div>
			<a href={`mailto:${profile.personalEmail}`}>Email ↗</a>
			<a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
			<a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
			<a href="/writing">Writing ↗</a>
		</div>
	</footer>
</div>
