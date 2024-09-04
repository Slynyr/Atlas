import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/atlas/markdown-page',
    component: ComponentCreator('/atlas/markdown-page', 'c1a'),
    exact: true
  },
  {
    path: '/atlas/docs',
    component: ComponentCreator('/atlas/docs', 'd40'),
    routes: [
      {
        path: '/atlas/docs',
        component: ComponentCreator('/atlas/docs', '11c'),
        routes: [
          {
            path: '/atlas/docs',
            component: ComponentCreator('/atlas/docs', 'bd5'),
            routes: [
              {
                path: '/atlas/docs/ATLAS/Contributing',
                component: ComponentCreator('/atlas/docs/ATLAS/Contributing', 'e14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/atlas/docs/ATLAS/Overview',
                component: ComponentCreator('/atlas/docs/ATLAS/Overview', '5e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/atlas/docs/Community/Asking For Help',
                component: ComponentCreator('/atlas/docs/Community/Asking For Help', 'c01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/atlas/docs/Labs/Analog IO',
                component: ComponentCreator('/atlas/docs/Labs/Analog IO', '4dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/atlas/docs/Labs/Basic IO',
                component: ComponentCreator('/atlas/docs/Labs/Basic IO', '845'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/atlas/docs/Labs/RemoteXY',
                component: ComponentCreator('/atlas/docs/Labs/RemoteXY', '69f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/atlas/docs/Labs/Web Server Control',
                component: ComponentCreator('/atlas/docs/Labs/Web Server Control', '83e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/atlas/docs/PlatformIO/Basic Usage',
                component: ComponentCreator('/atlas/docs/PlatformIO/Basic Usage', 'aa4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/atlas/docs/PlatformIO/Installation',
                component: ComponentCreator('/atlas/docs/PlatformIO/Installation', '03e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/atlas/docs/PlatformIO/Libraries',
                component: ComponentCreator('/atlas/docs/PlatformIO/Libraries', '5e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/atlas/docs/PlatformIO/Troubleshooting',
                component: ComponentCreator('/atlas/docs/PlatformIO/Troubleshooting', '01d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/atlas/docs/Programming/Arduino Framework',
                component: ComponentCreator('/atlas/docs/Programming/Arduino Framework', '554'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/atlas/docs/Programming/Header Files',
                component: ComponentCreator('/atlas/docs/Programming/Header Files', '648'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/atlas/docs/Programming/Timers',
                component: ComponentCreator('/atlas/docs/Programming/Timers', '0fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/atlas/',
    component: ComponentCreator('/atlas/', 'dbf'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
