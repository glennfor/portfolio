import { findExperience } from '$lib/design/content';

export function load({ params }: { params: Record<string, string> }) {
	return { experience: findExperience(params.slug) };
}
