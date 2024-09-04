// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ATLAS',
  tagline: 'Microcontrollers are cool',
  favicon: 'img/favicon.ico',

  url: 'https://github.com',
  baseUrl: '/Atlas/',

  organizationName: 'Slynyr',
  projectName: 'Atlas',
  deploymentBranch: 'deployment',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ATLAS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Get Started',
            position: 'left',
            items: [
              {
                label: 'PlatformIO',
                to: 'docs/PlatformIO/Installation'
              },
              {
                label: 'Programming',
                to: 'docs/Programming/Arduino%20Framework'
              },
              {
                label: 'Labs',
                to: 'docs/Labs/Basic%20IO'
              }
            ]
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/Slynyr',
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
                label: 'PlatformIO',
                to: '/docs/category/platformio',
              },
              {
                label: 'Community',
                to: '/docs/Community/Asking%20For%20Help',
              },
              {
                label: 'Labs',
                to: '/docs/Labs/Basic%20IO',
              },
              {
                label: 'Programming',
                to: '/docs/Programming/Arduino%20Framework',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Electronics Stack Exchange',
                href: 'https://electronics.stackexchange.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Atlas. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;