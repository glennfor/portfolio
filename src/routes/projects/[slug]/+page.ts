import { findProject } from '$lib/design/content';

export function load({ params }: { params: Record<string, string> }) {
	return { project: findProject(params.slug) };
}
