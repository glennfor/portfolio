<script lang="ts">
	import DesignIcon from '$lib/design/DesignIcon.svelte';
	import DesignSeo from '$lib/design/DesignSeo.svelte';
	import type { DesignProfile } from '$lib/design/content';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import '$lib/design/design.css';
	import '$lib/design/card.css';

	export let data: {
		profile: DesignProfile;
		vcardUrl: string;
		qrSvg: string;
	};

	let isEmailCopied = false;
	let copyResetTimer: ReturnType<typeof setTimeout> | undefined;

	$: profile = data.profile;
	$: secondaryLinks = [
		{
			label: 'LinkedIn',
			href: profile.links.linkedin,
			icon: 'linkedin' as const,
			external: true
		},
		{
			label: 'GitHub',
			href: profile.links.github,
			icon: 'github' as const,
			external: true
		},
		{
			label: 'Résumé',
			href: profile.links.resume,
			icon: 'document' as const,
			external: true
		},
		{
			label: 'Portfolio',
			href: '/',
			icon: 'code' as const,
			external: false
		}
	];

	const copyEmail = async () => {
		const email = profile.personalEmail;
		try {
			await navigator.clipboard.writeText(email);
		} catch {
			const field = document.createElement('textarea');
			field.value = email;
			field.setAttribute('readonly', '');
			field.style.position = 'fixed';
			field.style.left = '-9999px';
			document.body.appendChild(field);
			field.select();
			document.execCommand('copy');
			document.body.removeChild(field);
		}

		isEmailCopied = true;
		clearTimeout(copyResetTimer);
		copyResetTimer = setTimeout(() => {
			isEmailCopied = false;
		}, 1800);
	};
</script>

<svelte:head>
	<title>Glen Nfor · Contact</title>
</svelte:head>

<DesignSeo
	title="Glen Nfor · Contact"
	description="Save Glen Nfor’s contact details, or reach out by email, LinkedIn, or GitHub."
	path="/card"
/>

<div class:dark={$theme} class="design-site card-page">
	<button
		type="button"
		class="card-theme"
		aria-label={$theme ? 'Switch to light mode' : 'Switch to dark mode'}
		on:click={() => toggleTheme()}
	>
		<DesignIcon name={$theme ? 'sun' : 'moon'} size={16} />
	</button>

	<article class="card-shell">
		<header class="card-header">
			<div class="card-avatar" aria-hidden="true">GN</div>
			<p class="design-eyebrow">Contact card</p>
			<h1>{profile.shortName}</h1>
			<p class="card-tagline">{profile.headline}</p>
			<p class="card-meta design-meta">{profile.location}</p>
		</header>

		<section class="card-qr-block" aria-label="Save contact">
			<a
				class="card-qr"
				href="/card/contact.vcf"
				download="GlenNfor.vcf"
				aria-label="Save Glen's contact"
			>
				{@html data.qrSvg}
			</a>
			<p class="card-qr-caption">
				<a href="/card/contact.vcf" download="GlenNfor.vcf">Scan or click</a> to save my contact
			</p>
		</section>

		<section class="card-actions" aria-label="Contact links">
			<button
				type="button"
				class="card-btn card-btn-primary"
				class:is-copied={isEmailCopied}
				aria-live="polite"
				aria-label={isEmailCopied ? 'Email copied' : `Copy ${profile.personalEmail}`}
				on:click={copyEmail}
			>
				<span class="card-btn-primary-label">
					<DesignIcon name="mail" size={15} />
					<span>{isEmailCopied ? 'Copied' : profile.personalEmail}</span>
				</span>
				<span class="card-btn-preferred">{isEmailCopied ? profile.personalEmail : 'Preferred'}</span>
			</button>

			<div class="card-btn-grid">
				{#each secondaryLinks as link}
					<a
						class="card-btn"
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noreferrer' : undefined}
					>
						<DesignIcon name={link.icon} size={14} />
						<span>{link.label}</span>
					</a>
				{/each}
			</div>
		</section>

		<footer class="card-footer">
			<span class="card-footer-brand">
				<span class="card-footer-brand-icon"><DesignIcon name="code" size={12} /></span>
				GLEN.NFOR
			</span>
			<a href="/">glennfor.tech</a>
		</footer>
	</article>
</div>
