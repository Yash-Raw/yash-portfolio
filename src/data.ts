import type { Project, Skill } from './types';

/**
 * The four rungs of the scale, in order. Short forms are used under 560px,
 * where the full labels no longer fit the track.
 */
export const LEVELS = [
  { aria: 'read about it', tick: 'read about', short: 'read' },
  { aria: 'tried it', tick: 'tried', short: 'tried' },
  { aria: 'can build with it', tick: 'can build', short: 'build' },
  { aria: 'comfortable', tick: 'comfortable', short: 'comfortable' },
] as const;

export const projects: Project[] = [
  {
    name: 'AskRepo',
    blurb: 'Ask questions about any codebase',
    links: [
      { label: 'Live', href: 'https://askrepo.live' },
      { label: 'Code', href: 'https://github.com/Yash-Raw/AskRepo' },
    ],
  },
  {
    name: 'Mobby',
    blurb: 'Voice control for Android',
    links: [{ label: 'Code', href: 'https://github.com/Yash-Raw/mobby' }],
  },
  {
    // Deliberately unlinked and deliberately vague — still in progress.
    name: 'Mem-101',
    blurb: 'Notes on how agents remember',
    links: [],
  },
];

/**
 * Positions are a self-assessment, not a certification — edit them here.
 * Every entry is something used in one of the projects above.
 */
export const skills: Skill[] = [
  { name: 'Python', level: 4 },
  { name: 'TypeScript', level: 3 },
  { name: 'React', level: 3 },
  { name: 'Kotlin', level: 3 },
  { name: 'Working with LLM APIs', level: 3 },
  { name: 'Next.js', level: 2 },
  { name: 'Jetpack Compose', level: 2 },
  { name: 'Vector search & embeddings', level: 2 },
  { name: 'Transformers & model internals', level: 1 },
];

export const contact = {
  email: 'dev.yashchaurasia1@gmail.com',
  github: 'https://github.com/Yash-Raw',
  linkedin: 'https://linkedin.com/in/yash-chaurasia-a503a2368',
};
