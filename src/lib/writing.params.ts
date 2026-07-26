import shippingAcrossBoundaries from './md/writing/shipping-across-boundaries.md?raw';
import tutorialHell from './md/writing/tutorial-hell.md?raw';

import type { Writing } from './types';

const WRITINGS: Array<Writing> = [
	{
		featured: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
		slug: 'shipping-across-boundaries',
		title: 'Shipping across boundaries',
		shortDescription:
			'The hard part of engineering is rarely the stack. It is the seams between services, hardware, product, and failure.',
		datePublished: new Date(2026, 6, 20),
		content: shippingAcrossBoundaries,
		tags: ['Engineering', 'Systems', 'Shipping']
	},
	{
		featured: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
		slug: 'tutorial-hell',
		title: 'Tutorial Hell — A Personal Experience',
		shortDescription: 'Consuming is easy. Ideas are cheap. Execution is everything.',
		datePublished: new Date(2023, 11, 31),
		content: tutorialHell,
		tags: ['Learning', 'Growing']
	}
];

export default WRITINGS;
