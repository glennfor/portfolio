import { profile } from '$lib/design/content';

const escapeVCard = (value: string) =>
	value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');

export const prerender = true;

export function GET() {
	const nameParts = profile.name.split(' ');
	const familyName = nameParts.at(-1) ?? profile.shortName;
	const givenName = nameParts.slice(0, -1).join(' ') || profile.shortName;

	const lines = [
		'BEGIN:VCARD',
		'VERSION:3.0',
		`N:${escapeVCard(familyName)};${escapeVCard(givenName)};;;`,
		`FN:${escapeVCard(profile.shortName)}`,
		`EMAIL;TYPE=INTERNET,PREF:${escapeVCard(profile.personalEmail)}`,
		`EMAIL;TYPE=INTERNET:${escapeVCard(profile.email)}`,
		`ORG:${escapeVCard(profile.education.institution)}`,
		`TITLE:${escapeVCard(profile.education.degree)}`,
		`ADR;TYPE=HOME:;;${escapeVCard(profile.location)};;;;`,
		'URL;TYPE=Portfolio:https://glennfor.tech',
		`URL;TYPE=LinkedIn:${escapeVCard(profile.links.linkedin)}`,
		`URL;TYPE=GitHub:${escapeVCard(profile.links.github)}`,
		'END:VCARD'
	];

	return new Response(`${lines.join('\r\n')}\r\n`, {
		headers: {
			'Content-Type': 'text/vcard; charset=utf-8',
			'Content-Disposition': 'attachment; filename="GlenNfor.vcf"'
		}
	});
}
