import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ionedocs-site/ko/blog',
    component: ComponentCreator('/ionedocs-site/ko/blog', 'c10'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/blog/archive',
    component: ComponentCreator('/ionedocs-site/ko/blog/archive', '25d'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/blog/authors',
    component: ComponentCreator('/ionedocs-site/ko/blog/authors', 'cc4'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/ionedocs-site/ko/blog/authors/all-sebastien-lorber-articles', 'bad'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/blog/authors/yangshun',
    component: ComponentCreator('/ionedocs-site/ko/blog/authors/yangshun', 'db0'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/blog/first-blog-post',
    component: ComponentCreator('/ionedocs-site/ko/blog/first-blog-post', '95d'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/blog/long-blog-post',
    component: ComponentCreator('/ionedocs-site/ko/blog/long-blog-post', '40a'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/blog/mdx-blog-post',
    component: ComponentCreator('/ionedocs-site/ko/blog/mdx-blog-post', '377'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/blog/tags',
    component: ComponentCreator('/ionedocs-site/ko/blog/tags', 'f3a'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/blog/tags/docusaurus',
    component: ComponentCreator('/ionedocs-site/ko/blog/tags/docusaurus', 'ed5'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/blog/tags/facebook',
    component: ComponentCreator('/ionedocs-site/ko/blog/tags/facebook', 'e80'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/blog/tags/hello',
    component: ComponentCreator('/ionedocs-site/ko/blog/tags/hello', 'a4d'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/blog/tags/hola',
    component: ComponentCreator('/ionedocs-site/ko/blog/tags/hola', 'f6f'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/blog/welcome',
    component: ComponentCreator('/ionedocs-site/ko/blog/welcome', 'ad3'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/markdown-page',
    component: ComponentCreator('/ionedocs-site/ko/markdown-page', 'ba0'),
    exact: true
  },
  {
    path: '/ionedocs-site/ko/docs',
    component: ComponentCreator('/ionedocs-site/ko/docs', '383'),
    routes: [
      {
        path: '/ionedocs-site/ko/docs',
        component: ComponentCreator('/ionedocs-site/ko/docs', '7db'),
        routes: [
          {
            path: '/ionedocs-site/ko/docs',
            component: ComponentCreator('/ionedocs-site/ko/docs', 'fb7'),
            routes: [
              {
                path: '/ionedocs-site/ko/docs/Backup & View/',
                component: ComponentCreator('/ionedocs-site/ko/docs/Backup & View/', '64b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Backup & View/Backup Setting/Backup Automation/from_autotrans_devices',
                component: ComponentCreator('/ionedocs-site/ko/docs/Backup & View/Backup Setting/Backup Automation/from_autotrans_devices', '076'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Backup & View/Backup Setting/Backup Automation/with_IRM_agent',
                component: ComponentCreator('/ionedocs-site/ko/docs/Backup & View/Backup Setting/Backup Automation/with_IRM_agent', '654'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Backup & View/Backup Setting/Create Groups',
                component: ComponentCreator('/ionedocs-site/ko/docs/Backup & View/Backup Setting/Create Groups', 'eb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Backup & View/Backup Setting/Migration',
                component: ComponentCreator('/ionedocs-site/ko/docs/Backup & View/Backup Setting/Migration', '350'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/category/products',
                component: ComponentCreator('/ionedocs-site/ko/docs/category/products', 'f86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/ImageWorklist/',
                component: ComponentCreator('/ionedocs-site/ko/docs/ImageWorklist/', 'a1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/ImageWorklist/',
                component: ComponentCreator('/ionedocs-site/ko/docs/ImageWorklist/', 'fda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/intro/',
                component: ComponentCreator('/ionedocs-site/ko/docs/intro/', '632'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Overview/',
                component: ComponentCreator('/ionedocs-site/ko/docs/Overview/', '700'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Raphaview/',
                component: ComponentCreator('/ionedocs-site/ko/docs/Raphaview/', '02a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Raphaview/Glossary/DICOMImport',
                component: ComponentCreator('/ionedocs-site/ko/docs/Raphaview/Glossary/DICOMImport', 'e6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Raphaview/guidelines',
                component: ComponentCreator('/ionedocs-site/ko/docs/Raphaview/guidelines', '291'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Raphaview/Tutorials/',
                component: ComponentCreator('/ionedocs-site/ko/docs/Raphaview/Tutorials/', 'e85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Raphaview/Tutorials/Annotation and Measurement',
                component: ComponentCreator('/ionedocs-site/ko/docs/Raphaview/Tutorials/Annotation and Measurement', '288'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Raphaview/Tutorials/Comparing Studies',
                component: ComponentCreator('/ionedocs-site/ko/docs/Raphaview/Tutorials/Comparing Studies', '6a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Raphaview/Tutorials/DICOMExport',
                component: ComponentCreator('/ionedocs-site/ko/docs/Raphaview/Tutorials/DICOMExport', '008'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Raphaview/Tutorials/display',
                component: ComponentCreator('/ionedocs-site/ko/docs/Raphaview/Tutorials/display', '1f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Raphaview/Tutorials/ImageOrientationandManipulation',
                component: ComponentCreator('/ionedocs-site/ko/docs/Raphaview/Tutorials/ImageOrientationandManipulation', '92e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Raphaview/Tutorials/Overall GUI',
                component: ComponentCreator('/ionedocs-site/ko/docs/Raphaview/Tutorials/Overall GUI', '635'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/Raphaview/Tutorials/Viewers_tools',
                component: ComponentCreator('/ionedocs-site/ko/docs/Raphaview/Tutorials/Viewers_tools', '301'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/ionedocs-site/ko/docs/tutorial-basics/create-a-blog-post', 'e11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/ionedocs-site/ko/docs/tutorial-basics/create-a-document', 'd4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/ionedocs-site/ko/docs/tutorial-basics/create-a-page', '883'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ko/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/ionedocs-site/ko/docs/tutorial-basics/deploy-your-site', '44f'),
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
    path: '/ionedocs-site/ko/',
    component: ComponentCreator('/ionedocs-site/ko/', 'af5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
