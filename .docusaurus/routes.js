import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ionedocs-site/ja/blog',
    component: ComponentCreator('/ionedocs-site/ja/blog', 'f84'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/blog/archive',
    component: ComponentCreator('/ionedocs-site/ja/blog/archive', '68e'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/blog/authors',
    component: ComponentCreator('/ionedocs-site/ja/blog/authors', '659'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/ionedocs-site/ja/blog/authors/all-sebastien-lorber-articles', 'e2d'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/blog/authors/yangshun',
    component: ComponentCreator('/ionedocs-site/ja/blog/authors/yangshun', '1ba'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/blog/first-blog-post',
    component: ComponentCreator('/ionedocs-site/ja/blog/first-blog-post', '422'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/blog/long-blog-post',
    component: ComponentCreator('/ionedocs-site/ja/blog/long-blog-post', 'bb1'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/blog/mdx-blog-post',
    component: ComponentCreator('/ionedocs-site/ja/blog/mdx-blog-post', '0da'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/blog/tags',
    component: ComponentCreator('/ionedocs-site/ja/blog/tags', '85c'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/blog/tags/docusaurus',
    component: ComponentCreator('/ionedocs-site/ja/blog/tags/docusaurus', 'e5e'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/blog/tags/facebook',
    component: ComponentCreator('/ionedocs-site/ja/blog/tags/facebook', '167'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/blog/tags/hello',
    component: ComponentCreator('/ionedocs-site/ja/blog/tags/hello', '14a'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/blog/tags/hola',
    component: ComponentCreator('/ionedocs-site/ja/blog/tags/hola', 'c45'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/blog/welcome',
    component: ComponentCreator('/ionedocs-site/ja/blog/welcome', '5af'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/markdown-page',
    component: ComponentCreator('/ionedocs-site/ja/markdown-page', 'c96'),
    exact: true
  },
  {
    path: '/ionedocs-site/ja/docs',
    component: ComponentCreator('/ionedocs-site/ja/docs', 'cd2'),
    routes: [
      {
        path: '/ionedocs-site/ja/docs',
        component: ComponentCreator('/ionedocs-site/ja/docs', '690'),
        routes: [
          {
            path: '/ionedocs-site/ja/docs',
            component: ComponentCreator('/ionedocs-site/ja/docs', '6ea'),
            routes: [
              {
                path: '/ionedocs-site/ja/docs/Backup & View/',
                component: ComponentCreator('/ionedocs-site/ja/docs/Backup & View/', '63b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Backup & View/Backup Setting/Backup Automation/from_autotrans_devices',
                component: ComponentCreator('/ionedocs-site/ja/docs/Backup & View/Backup Setting/Backup Automation/from_autotrans_devices', '425'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Backup & View/Backup Setting/Backup Automation/with_IRM_agent',
                component: ComponentCreator('/ionedocs-site/ja/docs/Backup & View/Backup Setting/Backup Automation/with_IRM_agent', '293'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Backup & View/Backup Setting/Create Groups',
                component: ComponentCreator('/ionedocs-site/ja/docs/Backup & View/Backup Setting/Create Groups', '919'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Backup & View/Backup Setting/Migration',
                component: ComponentCreator('/ionedocs-site/ja/docs/Backup & View/Backup Setting/Migration', '873'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/category/products',
                component: ComponentCreator('/ionedocs-site/ja/docs/category/products', '96d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/ImageWorklist/',
                component: ComponentCreator('/ionedocs-site/ja/docs/ImageWorklist/', 'ed1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/ImageWorklist/',
                component: ComponentCreator('/ionedocs-site/ja/docs/ImageWorklist/', 'eba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/intro/',
                component: ComponentCreator('/ionedocs-site/ja/docs/intro/', '15f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Overview/',
                component: ComponentCreator('/ionedocs-site/ja/docs/Overview/', 'c76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Raphaview/',
                component: ComponentCreator('/ionedocs-site/ja/docs/Raphaview/', 'd6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Raphaview/Glossary/DICOMImport',
                component: ComponentCreator('/ionedocs-site/ja/docs/Raphaview/Glossary/DICOMImport', '651'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Raphaview/guidelines',
                component: ComponentCreator('/ionedocs-site/ja/docs/Raphaview/guidelines', '06b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Raphaview/Tutorials/',
                component: ComponentCreator('/ionedocs-site/ja/docs/Raphaview/Tutorials/', '0aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Raphaview/Tutorials/Annotation and Measurement',
                component: ComponentCreator('/ionedocs-site/ja/docs/Raphaview/Tutorials/Annotation and Measurement', '7bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Raphaview/Tutorials/Comparing Studies',
                component: ComponentCreator('/ionedocs-site/ja/docs/Raphaview/Tutorials/Comparing Studies', '03a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Raphaview/Tutorials/DICOMExport',
                component: ComponentCreator('/ionedocs-site/ja/docs/Raphaview/Tutorials/DICOMExport', '916'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Raphaview/Tutorials/display',
                component: ComponentCreator('/ionedocs-site/ja/docs/Raphaview/Tutorials/display', '884'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Raphaview/Tutorials/ImageOrientationandManipulation',
                component: ComponentCreator('/ionedocs-site/ja/docs/Raphaview/Tutorials/ImageOrientationandManipulation', '864'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Raphaview/Tutorials/Overall GUI',
                component: ComponentCreator('/ionedocs-site/ja/docs/Raphaview/Tutorials/Overall GUI', 'daf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/Raphaview/Tutorials/Viewers_tools',
                component: ComponentCreator('/ionedocs-site/ja/docs/Raphaview/Tutorials/Viewers_tools', '18e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/ionedocs-site/ja/docs/tutorial-basics/create-a-blog-post', '301'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/ionedocs-site/ja/docs/tutorial-basics/create-a-document', '2f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/ionedocs-site/ja/docs/tutorial-basics/create-a-page', '8da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs-site/ja/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/ionedocs-site/ja/docs/tutorial-basics/deploy-your-site', 'cdc'),
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
    path: '/ionedocs-site/ja/',
    component: ComponentCreator('/ionedocs-site/ja/', '533'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
