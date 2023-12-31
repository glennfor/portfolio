import Assets from './data/assets';
import svelte from './md/svelte.md?raw';
import { Category, type Skill } from './types';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'django',
		color: 'green',
		description: "Django Web framework ",
		logo: Assets.Django,
		name: 'Django',
		categories: [Category.Web],
		// certifications:[
		// 	{
		// 		by:"The Lorem Ipsum for photos.				",
		// 		certificate:"https://picsum.photos/300/200",
		// 		date: new Date()
		// 	},
		// 	{
		// 		by:"Easy to use, stylish placeholders",
		// 		certificate:"https://picsum.photos/400/300",
		// 		date: new Date()
		// 	}
		// ]
	}),

	s({
		slug: 'js',
		color: 'yellow',
		description:"Javscript ",
		logo: Assets.JavaScript,
		name: 'Javascript',
		categories: [Category.Web]
	}),

	s({
		slug: 'ts',
		color: 'blue',
		description:"Typescript",
		logo: Assets.TypeScript,
		name: 'Typescript',
		categories: [Category.Web],
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:"Cascading style sheets",
		logo: Assets.CSS,
		name: 'CSS',
		categories: [Category.Web],
	}),

	s({
		slug: 'tailwind',
		color: 'blue',
		description:"Tailwind CSS",
				logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		categories: [Category.Web],
	}),

	s({
		slug: 'html',
		color: 'orange',
		description: "Hypertext Markup language",
		logo: Assets.HTML,
		name: 'HTML',
		categories: [Category.Web],
	}),
	s({
		slug: 'scss',
		color: 'pink',
		description: "Sassy Cascading Style Sheets		",
		logo: Assets.Sass,
		name: 'SCSS',
		categories: [Category.Web],
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description:"React Js, Functional components, Hooks, Contexts, etcs",
		logo: Assets.ReactJs,
		name: 'React Js',
		categories: [Category.Web],
	}),
	s({
		slug: 'jquery',
		color: 'blue',
		description:"",
		logo: Assets.JQuery,
		name: 'JQuery',
		categories: [Category.Web],
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		categories: [Category.Web],
	}),
	s({
		slug: 'firebase',
		color: 'yellow',
		description:"Firebase JS SDK: Auth, realtime database, cloud firestore, storage buckets, RBA",
		logo: Assets.Firebase,
		name: 'Firebase',
		categories: [Category.Database]
	}),

	s({
		slug: 'mysql',
		color: 'teal',
		description:"",
		logo: Assets.MySQL,
		name: 'MySQL',
		categories: [Category.Database]
	}),

	s({
		slug: 'c',
		color: 'blue',
		description:"Pointes, Memory management, etc",
		logo: Assets.C,
		name: 'C',
		categories: [Category.System]
	}),

	s({
		slug: 'cpp',
		color: 'blue',
		description:"Templates, Smart pointers, The Standard library, OOP, etc",
		logo: Assets.Cpp,
		name: 'C++',
		categories: [Category.System, Category.Game]
	}),

	s({
		slug: 'java',
		color: 'orange',
		description:"Generics, The standard library, OOP, Collections, etc",
		logo: Assets.Java,
		name: 'Java',
		categories: [Category.System, Category.Desktop]
	}),

	s({
		slug: 'javafx',
		color: 'teal',
		description: "Scene builder, FXML, CSS, etc",
		logo: Assets.JavaFX,
		name: 'JavaFX',
		categories: [Category.Desktop]
	}),


	s({
		slug: 'python',
		color: 'green',
		description:"OOP, Dataclasses, comprehensions, generators & iterators, matplotlib, numpy, pandas, Tkinter, Django, etc",
		logo: Assets.Python,
		name: 'Python',
		categories: [Category.DS]
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
