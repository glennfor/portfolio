import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'vtc',
		company: 'Visionary Techonoligies Company',
		description: 'Creating local software solutions.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Yaounde, Cameroon',
		period: { from: new Date(2023, 4, 22) , to: new Date(2023, 10, 30)},
		skills: getSkills('django', 'js', 'html', 'tw', 'css', 'jquery'),
		name: 'Full Stack Developer',
		color: '#f50',
		links: [{
			to:"https://vtcinternationale.pythonanywhere.com/", label:"Attendance Management System Prototype", newTab: true
		}],
		logo: Assets.VTC,
		tasks: [
			"Create ERP software for local companies"
		]
	},

	{
		slug: 'simba',
		company: 'Simba',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Yaounde, Cameroon',
		period: { from: new Date(2022, 0), to: new Date(2023, 11) },
		skills: getSkills('ts', 'js'),
		name: 'Junior Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
	},

	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0) },
		skills: getSkills('jquery', 'css', 'html', 'js'),
		name: 'Freelancer',
		color: '#ffffff',
		links: [{
			to: "https://ket-academy.github.io/",
			label: "Older KET Academy Website",
			newTab: true,
		}],
		logo: Assets.Unknown,
	},
	
];

export default MY_EXPERIENCES;
