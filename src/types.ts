/** Where a skill sits on the shared four-step scale. 1 = read about it, 4 = comfortable. */
export type Level = 1 | 2 | 3 | 4;

export interface Skill {
  name: string;
  level: Level;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  blurb: string;
  links: ProjectLink[];
}
