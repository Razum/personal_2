export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Core Technologies',
    items: [
      'JavaScript',
      'TypeScript',
      'React',
      'React Native',
      'Next.js',
      'Astro',
      'Vue.js',
      'Node.js',
      'Lit',
      'Backbone',
      'jQuery',
    ],
  },
  {
    category: 'State & Data Management',
    items: ['Zustand', 'Redux', 'TanStack Query', 'Vuex', 'React Flow'],
  },
  {
    category: 'UI & Styling',
    items: [
      'MUI',
      'Mantine',
      'Shadcn',
      'Tailwind',
      'Storybook',
      'Design Systems',
      'CSS',
      'SCSS',
      'Less',
      'Stylus',
      'PostCSS',
      'CSS Modules',
      'BEM',
      'SUIT',
      'SMACSS',
      'Foundation',
      'Bootstrap',
    ],
  },
  {
    category: 'UX & Accessibility',
    items: [
      'Figma',
      'Responsive Design',
      'Accessibility',
      'Performance Optimization',
      'SEO',
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
      'Monorepo Architecture',
      'Gulp',
      'Grunt',
      'npm',
      'yarn',
      'pnpm',
    ],
  },
  {
    category: 'APIs & Integration',
    items: ['REST', 'GraphQL', 'Web Sockets'],
  },
  {
    category: 'Testing & Quality',
    items: [
      'Spec Driven Development',
      'TDD',
      'BDD',
      'Vitest',
      'Jest',
      'React Testing Library',
    ],
  },
  {
    category: 'Leadership & Process',
    items: [
      'Git',
      'CI/CD',
      'GitHub Actions',
      'GitLab CI',
      'Agile',
      'Scrum',
      'Architecture',
      'Team Leadership',
      'Mentorship',
      'Code Review',
      'Technical Consulting',
      'Process Improvement',
      'Documentation',
    ],
  },
];
