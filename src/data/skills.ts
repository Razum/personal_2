export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages & Frameworks',
    items: [
      'JavaScript / TypeScript',
      'React',
      'React Native',
      'Next.js',
      'Astro',
      'Vue.js',
      'Node.js',
      'Zustand',
      'Redux',
      'TanStack Query',
      'Vuex',
      'Backbone',
      'jQuery',
    ],
  },
  {
    category: 'UI Libraries & CSS',
    items: [
      'MUI / Mantine / Shadcn',
      'Tailwind',
      'CSS / SCSS / Less / Stylus / PostCSS',
      'CSS Modules',
      'BEM / SUIT / SMACSS',
      'Foundation',
      'Bootstrap',
    ],
  },
  {
    category: 'Build Tools & Infrastructure',
    items: [
      'Vite',
      'Webpack',
      'Rollup',
      'Turborepo',
      'Rush',
      'Gulp / Grunt',
      'npm / yarn / pnpm',
    ],
  },
  {
    category: 'APIs & Testing',
    items: [
      'REST',
      'GraphQL',
      'Web Sockets',
      'TDD / BDD',
      'Vitest',
      'Jest',
      'React Testing Library',
    ],
  },
  {
    category: 'Workflow & Leadership',
    items: [
      'Git',
      'CI/CD (GitHub Actions, GitLab CI)',
      'Agile Methodologies',
      'Architecture',
      'Team Leadership',
      'Mentorship',
      'Process Improvement & Documentation',
    ],
  },
];
