import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Application Developer Program',
  tagline: 'Hands-on MORYX training for application developers',
  url: 'https://enis-pixel.github.io',
  baseUrl: '/Application-Developer-Training/',
  organizationName: 'enis-pixel',
  projectName: 'Application-Developer-Training',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'App Developer Training',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Training',
        },
        {
          href: 'https://github.com/enis-pixel/Application-Developer-Training',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/intro',
            },
            {
              label: 'Chapter 1',
              to: '/docs/chapter-1-basics',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/moryx',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Repository',
              href: 'https://github.com/enis-pixel/Application-Developer-Training',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Application Developer Program`,
    },
    prism: {
      additionalLanguages: ['csharp', 'bash', 'powershell'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
