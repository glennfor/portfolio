import Assets from './data/assets';
import { getSkills } from './skills.params';
import { Category, type Project } from './types';

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
		type: 'Web application',
		screenshots: [
			{
				label: 'Mockup',
				src: '/images/ket/image.png',
			},
			{
				label: 'Home',
				src: '/images/ket/home.png',
			},
			{
				label: 'Authentication',
				src: '/images/ket/auth.png',
			},
			{
				label: 'About',
				src: '/images/ket/about.png',
			},
			{
				label: '404 Not Found',
				src: '/images/ket/404.png',
			},
		],
		categories: [Category.Web,]

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
				label: 'Home Page',
				src: '/images/vtc/home.png',
			},
			{
				label: 'Authentitcation',
				src: '/images/ket/auth.png',
			},
			{
				label: 'Dashboard',
				src: '/images/vtc/dash.png',
			},
		],
		categories: [Category.Web,]

	},
	{
		slug: 'kingston',
		color: '#C850C0',
		description:
			'Library management system with in Java .',
		shortDescription:'Library management system with in Java .',
		links: [{ to: '', label: 'Github' , newTab: true}],
		logo: Assets.KetAcademy,
		name: 'Kingston Library',
		period: {
			from: new Date(2023, 0), to: new Date(2023, 2)
		},
		skills: getSkills('java', 'javafx', 'css', 'mysql'),
		type: 'Desktop Application',
		screenshots: [
			{
				label: 'Welcome Page',
				src: '/images/lib/Screenshot (34).png',
			},
			{
				label: 'Create Account',
				src: '/images/lib/Screenshot (36).png',
			},
			{
				label: 'Login ',
				src: '/images/lib/Screenshot (37).png',
			},

			{
				label: 'Dashboard',
				src: '/images/lib/Screenshot (55).png',
			},
			{
				label: 'Profile ',
				src: '/images/lib/Screenshot (40).png',
			},
			{
				label: 'Notification ',
				src: '/images/lib/Screenshot (44).png',
			},


			{
				label: 'New Book',
				src: '/images/lib/Screenshot (49).png',
			},
			{
				label: 'Books ',
				src: '/images/lib/Screenshot (51).png',
			},
			{
				label: 'Code ',
				src: '/images/lib/Screenshot (47).png',
			},
		],
		categories: [Category.Desktop]

	},

	{
		slug: 'slide-puzzle',
		color: '#FB6376',
		description:
			'Slide Puzzle for windows CLI with CLi programming and autosolving.',
		shortDescription:'Slide Puzzle for windows CLI with CLi programming and autosolving.',
		links: [{ to: '', label: 'Github' , newTab: true}],
		logo: Assets.CLI,
		name: 'Slide Puzzle',
		period: {
			from: new Date(2023, 0), to: new Date(2023, 2)
		},
		skills: getSkills('cpp'),
		type: 'Command Line Application',
		screenshots: [
			{
				label: 'Solving',
				src: '/images/slide-puzzle/solving.png',
			},
			{
				label: 'Intro',
				src: '/images/slide-puzzle/solving.png',
			},
			{
				label: 'Solved by COmputer',
				src: '/images/slide-puzzle/solving.png',
			},
			{
				label: 'Demo Video',
				src: '/images/slide-puzzle/solving.png',
			},
			
		],
		categories: [Category.CLI]

	},


	{
		slug: 'ttt',
		color: '#FB6376',
		description:
			'Tic tac toe game for windows CLI with CLi programming and implementation of minimax algorithm.',
		shortDescription:
		'Tic tac toe game for windows CLI with CLi programming and implementation of minimax algorithm.',
		links: [{ to: '', label: 'Github' , newTab: true}],
		logo: Assets.TTT,
		name: 'Tic Tac Toe',
		period: {
			from: new Date(2023, 0), to: new Date(2023, 2)
		},
		skills: getSkills('cpp'),
		type: 'Command Line Application',
		screenshots: [
			{
				label: 'Game on',
				src: '/images/ttt/Screenshot (30).png',
			},
			{
				label: 'Home',
				src: '/images/ttt/Screenshot (25).png',
			},
			{
				label: 'Choose Player',
				src: '/images/ttt/Screenshot (28).png',
			},
	
			{
				label: 'Lost the Game',
				src: '/images/ttt/Screenshot (31).png',
			},
			
		],
		categories: [Category.CLI]

	},

	{
		slug: 'chess',
		color: '#FFC482',
		description:
			'Chess game with custom engine and 2D graphics.',
		shortDescription:'Chess',
		links: [{ to: '', label: 'Github' , newTab: true}],
		logo: Assets.Chess,
		name: 'Chess',
		period: {
			from: new Date(2023, 0), to: new Date(2023, 2)
		},
		skills: getSkills('cpp', 'raylib'),
		type: '2D graphics',
		screenshots: [
			{
				label: 'Game starts',
				src: '/images/chess/2.png',
			},
			{
				label: 'Code',
				src: '/images/chess/1.png',
			},
		],
		categories: [Category.Graphics2D, Category.Game]
	},

	{
		slug: 'checkers',
		color: '#AB2fAF',
		description:
			'Checkers game.',
		shortDescription:'Checkers game for two players (or vs Computer) with implementation of minimax algorithm.',
		links: [{ to: '', label: 'View on Github' , newTab: true}],
		logo: Assets.Checkers,
		name: 'Checkers',
		period: {
			from: new Date(2023, 0), to: new Date(2023, 2)
		},
		skills: getSkills('python', 'pygame'),

		type: '2D graphics',
		screenshots: [
			{
				label: 'Game UI',
				src: '/images/checkers/init.png',
			},
			{
				label: 'Linting positions',
				src: '/images/checkers/linting2.png',
			},
			{
				label: 'King',
				src: '/images/checkers/king.png',
			},
			{
				label: 'Complete',
				src: '/images/checkers/checkmate.png',
			},
			
		],
		categories: [Category.Graphics2D, Category.Game]

	},

	{
		slug: 'shooter',
		color: '#AB2fAF',
		description:
			'Shooting Game with Pygame.',
		shortDescription:'Shooting game with pygame. Sound effects and keyboard controls.',
		links: [{ to: '', label: 'View on Github' , newTab: true}],
		logo: Assets.Unknown,
		name: 'Shooter',
		period: {
			from: new Date(2023, 0), to: new Date(2023, 2)
		},
		skills: getSkills('python', 'pygame'),

		type: '2D graphics',
		screenshots: [
			
			{
				label: 'Game Start',
				src: '/images/shooter/game.png',
			},
			{
				label: 'Game Ended',
				src: '/images/shooter/end.png',
			},
			{
				label: 'Code',
				src: '/images/shooter/code.png',
			},
			
		],
		categories: [Category.Graphics2D, Category.Game]

	},
];

export default MY_PROJECTS;
