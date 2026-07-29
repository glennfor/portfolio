import { profile } from '$lib/design/content';
import QRCode from 'qrcode';

const origin = 'https://glennfor.tech';
const vcardUrl = `${origin}/card/contact.vcf`;

export const prerender = true;

export const load = async () => {
	const qrSvg = await QRCode.toString(vcardUrl, {
		type: 'svg',
		margin: 1,
		errorCorrectionLevel: 'M',
		color: {
			dark: '#111111',
			light: '#ffffff'
		}
	});

	return {
		profile,
		vcardUrl,
		qrSvg
	};
};
