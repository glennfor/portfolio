import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type ExperiencePageParams,
	type HomePageParams,
	type ProjectPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type SkillsPageParams
} from './types';
import { Icons } from './utils';
import WRITINGS from './writing.params';

export const TITLE_SUFFIX = 'Portfolio - Glen';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	writing: 'Writing',
	skills: 'Skills',
};



export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Glen',
	lastName: 'Nfor',
	description: `
	I am an engineer at heart and a learner by choice.  I love solving nifty challenges and learning everything new. Reach to chat or to work.`, 
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/glenn-po' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/glenn-yinyu'
		},
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/GlenNforY'
		},
		{
			platform: Platform.StackOverflow,
			link: 'https://stackoverflow.com/'
		},
		{
			platform: Platform.Email,
			link: 'hello@glennfor.tech'
		},
		{
			platform: Platform.Youtube,
			link: 'https://www.youtube.com/channel/UCZnX2h4pcqDEc_8Q114npKw'
		},
		{
			platform: Platform.Facebook,
			link: 'https://www.facebook.com/nfor.glen.1'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills and Tools',
	items: MY_SKILLS
};

export const WRITING: ResumePageParams = {
	title: 'Writing',
	items: WRITINGS,
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
