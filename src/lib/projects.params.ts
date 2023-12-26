import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'ket-academy',
		color: '#5e95e3',
		description:
			'Hybrid online learning platform for KET academy.',
		shortDescription:'Hybrid online learning platform for KET academy.',
		links: [{ to: 'https://ketacademy.web.app', label: 'Visit Website' , newTab: true}],
		logo: Assets.KetAcademy,
		name: 'KET Academy',
		period: {
			from: new Date(2023, 4), 
		},
		skills: getSkills('reactjs', 'tailwind', 'scss', 'firebase'),
		type: 'Web application'
	},
	{
		slug: 'worklin',
		color: '#55ee55',
		description:
			'An prototype attendance management system with location checking.',
		shortDescription:
		'An prototype attendance management system with location checking.',
		links: [{ to: 'https://vtcinternationale.pythonanywhere.com/', label: 'Visit Website' }],
		logo: Assets.VTC,
		name: 'Worklin',
		period: {
			from: new Date(2023, 5), to: new Date(2023, 6)
		},
		skills: getSkills('django', 'jquery', 'tailwind', 'html'),
		type: 'Dynamic Website',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'book-stack',
		color: '#C850C0',
		description:
			'Library management system with in Java .',
		shortDescription:'Hybrid online learning platform for KET academy.',
		links: [{ to: 'https://ketacademy.web.app', label: 'Visit Website' , newTab: true}],
		logo: Assets.KetAcademy,
		name: 'BookStack Library',
		period: {
			from: new Date(2023, 0), to: new Date(2023, 2)
		},
		skills: getSkills('java', 'javafx', 'css', 'mysql'),
		type: 'Desktop Application'
	},
];

export default MY_PROJECTS;
