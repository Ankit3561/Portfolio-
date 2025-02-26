import { Github, Twitter, Figma } from 'lucide-react';

import LogoJavascript from '../utils/images/logos/icon-javascript.svg';
import LogoTypescript from '../utils/images/logos/icon-typescript.svg';
import LogoReact from '../utils/images/logos/icon-react.svg';
import LogoNextjs from '../utils/images/logos/icon-nextjs.svg';
import LogoNodejs from '../utils/images/logos/icon-nodejs.svg';
import LogoExpress from '../utils/images/logos/icon-express.svg';
import LogoExpressLight from '../utils/images/logos/icon-express-light.svg';
import LogoNest from '../utils/images/logos/icon-nest.svg';
import LogoSocket from '../utils/images/logos/icon-socket.svg';
import LogoSocketLight from '../utils/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '../utils/images/logos/icon-postgresql.svg';
import LogoMongoDB from '../utils/images/logos/icon-mongodb.svg';
import LogoSass from '../utils/images/logos/icon-sass.svg';
import LogoTailwindcss from '../utils/images/logos/icon-tailwindcss.svg';
import LogoFigma from '../utils/images/logos/icon-figma.svg';
import LogoCypress from '../utils/images/logos/icon-cypress.svg';
import LogoCypressLight from '../utils/images/logos/icon-cypress-light.svg';
import LogoStorybook from '../utils/images/logos/icon-storybook.svg';
import LogoGit from '../utils/images/logos/icon-git.svg';

import LogoUpwork from '../utils/images/logos/logo-upwork.svg';
import LogoGreenApex from '../utils/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '../utils/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '../utils/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '../utils/images/logos/logo-dotnpixel-light.svg';

import ProjectFiskil from '../utils/images/project-fiskil.png';
import ProjectWingie from '../utils/images/project-wingie.png';
import ProjectOzdent from '../utils/images/appOzdent.png';

import ProjectPepehousing from '../utils/images/project-pepehousing.png';

import AvatarKrisztian from '../utils/images/avatar-krisztian.png';
import AvatarEugen from '../utils/images/avatar-eugen.png';
import AvatarDummy from '../utils/images/avatar-dummy.svg';


import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shahsagarm',
  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',
  TWITTER: 'https://twitter.com/shahsagarm',
  FIGMA: 'https://www.figma.com/@ankitkumar',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/shahsagarm',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com/shahsagarm',
  },
  {
    icon: Figma,
    url: 'https://www.figma.com/@shahsagarm',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Nest.js',
    logo: LogoNest,
    url: 'https://nestjs.com/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Cypress',
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: 'https://www.cypress.io/',
  },
  {
    label: 'Storybook',
    logo: LogoStorybook,
    url: 'https://storybook.js.org/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork logo',
    position: 'Independent Freelancer',
    startDate: new Date(2021, 10),
    currentlyWorkHere: true,
    summary: [
      'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
      'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, React-Native, Cypress, and others.',
    ],
  },
  

];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Ozdent',
    description:
      'This APP is for Australian students enrolled in dentistry courses at Australia’s leading universities and TAFEs. The products available are as prescribed by the educational institution. They include safety glasses, endodontic packs, training models, suturing kits and general instruments. Simply choose your university, pick your product(s) and pay.',
    url: 'https://play.google.com/store/apps/details?id=com.dentalstudents&hl=en',
    previewImage: ProjectOzdent,
    technologies: [
      'React Native',
      'Typescript',
      'Stripe',
      'Firebase',
      'Express.js',
      'Mongo DB',
      'Styled Components',
      'React Query',
    ],
  },
  {
    name: 'Fiskil',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://fiskil.com.au',
    previewImage: ProjectFiskil,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Material UI',
      'Redux Toolkit',
      'React Query',
      'Express.js',
      'PostgreSQL',
      'Firebase',
      'AWS Amplify',
      'Cypress',
      'Storybook',
    ],
  },
  {
    name: 'Pepehousing',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://pepehousing.com',
    previewImage: ProjectPepehousing,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: AvatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Ankit and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Eugen Esanu',
    personAvatar: AvatarDummy,
    title: 'Founder - shosho.design',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe Matkin',
    personAvatar: AvatarDummy,
    title: 'Freelancer',
    testimonial:
      'Ankit was extremely easy and pleasant to work with and he truly cares about the project being a success. Ankit has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];


