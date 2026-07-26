import { chromium } from '@playwright/test';

const browser = await chromium.launch({
	headless: true,
	executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});
const errors = [];
const failedRequests = [];
const report = {};
const context = await browser.newContext({
	viewport: { width: 1440, height: 900 },
	colorScheme: 'light'
});
const page = await context.newPage();

page.on('console', (message) => {
	if (message.type() === 'error') errors.push(message.text());
});
page.on('requestfailed', (request) => {
	failedRequests.push(`${request.url()} — ${request.failure()?.errorText}`);
});

const inspectRoute = async (path) => {
	const response = await page.goto(`http://127.0.0.1:5173${path}`, { waitUntil: 'networkidle' });
	const overflow = await page.evaluate(
		() => document.documentElement.scrollWidth - document.documentElement.clientWidth
	);
	return { status: response?.status(), overflow };
};

report.desktop = {};
for (const path of [
	'/',
	'/projects',
	'/experience',
	'/search',
	'/projects/ket-academy',
	'/projects/slide-puzzle'
]) {
	report.desktop[path] = await inspectRoute(path);
}

await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
report.desktop.navProjects = await page
	.getByRole('navigation')
	.getByRole('link', { name: 'Projects', exact: true })
	.isVisible();
report.desktop.inlineIcons = await page.locator('svg.design-icon').count();
await page.screenshot({ path: '/tmp/design-desktop-light.png', fullPage: true });

await page.getByRole('button', { name: 'Switch to dark theme' }).click();
report.theme = { darkApplied: (await page.locator('.design-site.dark').count()) === 1 };
await page.screenshot({ path: '/tmp/design-desktop-dark.png', fullPage: true });
await page.reload({ waitUntil: 'networkidle' });
report.theme.persisted = (await page.locator('.design-site.dark').count()) === 1;

await page.goto('http://127.0.0.1:5173/experience', { waitUntil: 'networkidle' });
const row = page.locator('.design-list-row').first();
const before = await row.boundingBox();
await row.hover();
await page.waitForTimeout(250);
const after = await row.boundingBox();
report.hoverShift = {
	x: (after?.x ?? 0) - (before?.x ?? 0),
	width: (after?.width ?? 0) - (before?.width ?? 0)
};

await page.goto('http://127.0.0.1:5173/projects/ket-academy', {
	waitUntil: 'networkidle'
});
report.ketGallery = {
	figures: await page.locator('.design-gallery figure').count(),
	captions: await page.locator('.design-gallery figcaption').count(),
	images: await page.locator('.design-gallery img').evaluateAll((images) =>
		images.map((image) => ({ alt: image.alt, naturalWidth: image.naturalWidth }))
	)
};
await page.screenshot({ path: '/tmp/design-gallery.png', fullPage: true });

await page.goto('http://127.0.0.1:5173/projects/slide-puzzle', {
	waitUntil: 'networkidle'
});
report.video = await page.locator('video').evaluate((video) => ({
	controls: video.controls,
	autoplay: video.autoplay,
	paused: video.paused,
	preload: video.preload,
	poster: video.getAttribute('poster'),
	tracks: video.querySelectorAll('track[kind="captions"]').length
}));

const mobile = await browser.newContext({
	viewport: { width: 390, height: 844 },
	colorScheme: 'light',
	reducedMotion: 'reduce'
});
const mobilePage = await mobile.newPage();
mobilePage.on('console', (message) => {
	if (message.type() === 'error') errors.push(`mobile: ${message.text()}`);
});
mobilePage.on('requestfailed', (request) => {
	failedRequests.push(`mobile: ${request.url()} — ${request.failure()?.errorText}`);
});
await mobilePage.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
const menuButton = mobilePage.getByRole('button', { name: 'Open navigation menu' });
report.mobile = {
	overflow: await mobilePage.evaluate(
		() => document.documentElement.scrollWidth - document.documentElement.clientWidth
	),
	menuButtonVisible: await menuButton.isVisible(),
	navInitiallyHidden: !(await mobilePage.getByRole('navigation').isVisible())
};
await menuButton.focus();
report.mobile.focusVisible = await menuButton.evaluate((element) =>
	element.matches(':focus-visible')
);
await mobilePage.keyboard.press('Enter');
report.mobile.menuExpanded = await mobilePage
	.getByRole('button', { name: 'Close navigation menu' })
	.getAttribute('aria-expanded');
report.mobile.links = {};
for (const name of ['Projects', 'Experience', 'Leadership', 'Skills', 'About', 'Writing', 'Search', 'Résumé']) {
	report.mobile.links[name] = await mobilePage
		.getByRole('navigation')
		.getByRole('link', { name, exact: true })
		.isVisible();
}
await mobilePage.screenshot({ path: '/tmp/design-mobile-menu.png', fullPage: true });
await mobilePage.keyboard.press('Escape');
report.mobile.escapeClosed = !(await mobilePage.getByRole('navigation').isVisible());
await menuButton.click();
await mobilePage
	.getByRole('navigation')
	.getByRole('link', { name: 'Search', exact: true })
	.click();
report.mobile.closedAfterNavigation = !(await mobilePage.getByRole('navigation').isVisible());
await mobilePage.getByRole('searchbox').fill('Amazon');
report.mobile.amazonResults = await mobilePage.locator('.design-list-row').count();
report.mobile.searchOverflow = await mobilePage.evaluate(
	() => document.documentElement.scrollWidth - document.documentElement.clientWidth
);
report.mobile.reducedMotionTransition = await mobilePage
	.locator('.design-list-row')
	.first()
	.evaluate((element) => getComputedStyle(element).transitionDuration);

report.errors = errors;
report.failedRequests = failedRequests;
report.screenshots = [
	'/tmp/design-desktop-light.png',
	'/tmp/design-desktop-dark.png',
	'/tmp/design-mobile-menu.png',
	'/tmp/design-gallery.png'
];

console.log(JSON.stringify(report, null, 2));
await mobile.close();
await context.close();
await browser.close();
