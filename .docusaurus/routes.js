import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ione/ja/blog',
    component: ComponentCreator('/ione/ja/blog', '936'),
    exact: true
  },
  {
    path: '/ione/ja/blog/archive',
    component: ComponentCreator('/ione/ja/blog/archive', '9d7'),
    exact: true
  },
  {
    path: '/ione/ja/blog/authors',
    component: ComponentCreator('/ione/ja/blog/authors', 'a0f'),
    exact: true
  },
  {
    path: '/ione/ja/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/ione/ja/blog/authors/all-sebastien-lorber-articles', 'db5'),
    exact: true
  },
  {
    path: '/ione/ja/blog/authors/yangshun',
    component: ComponentCreator('/ione/ja/blog/authors/yangshun', '235'),
    exact: true
  },
  {
    path: '/ione/ja/blog/first-blog-post',
    component: ComponentCreator('/ione/ja/blog/first-blog-post', '103'),
    exact: true
  },
  {
    path: '/ione/ja/blog/long-blog-post',
    component: ComponentCreator('/ione/ja/blog/long-blog-post', '551'),
    exact: true
  },
  {
    path: '/ione/ja/blog/mdx-blog-post',
    component: ComponentCreator('/ione/ja/blog/mdx-blog-post', '9a5'),
    exact: true
  },
  {
    path: '/ione/ja/blog/tags',
    component: ComponentCreator('/ione/ja/blog/tags', 'f8f'),
    exact: true
  },
  {
    path: '/ione/ja/blog/tags/docusaurus',
    component: ComponentCreator('/ione/ja/blog/tags/docusaurus', '361'),
    exact: true
  },
  {
    path: '/ione/ja/blog/tags/facebook',
    component: ComponentCreator('/ione/ja/blog/tags/facebook', '9ab'),
    exact: true
  },
  {
    path: '/ione/ja/blog/tags/hello',
    component: ComponentCreator('/ione/ja/blog/tags/hello', 'f53'),
    exact: true
  },
  {
    path: '/ione/ja/blog/tags/hola',
    component: ComponentCreator('/ione/ja/blog/tags/hola', 'faf'),
    exact: true
  },
  {
    path: '/ione/ja/blog/welcome',
    component: ComponentCreator('/ione/ja/blog/welcome', 'fde'),
    exact: true
  },
  {
    path: '/ione/ja/markdown-page',
    component: ComponentCreator('/ione/ja/markdown-page', '575'),
    exact: true
  },
  {
    path: '/ione/ja/docs',
    component: ComponentCreator('/ione/ja/docs', 'e40'),
    routes: [
      {
        path: '/ione/ja/docs',
        component: ComponentCreator('/ione/ja/docs', '429'),
        routes: [
          {
            path: '/ione/ja/docs',
            component: ComponentCreator('/ione/ja/docs', '5bf'),
            routes: [
              {
                path: '/ione/ja/docs/Backup & View/',
                component: ComponentCreator('/ione/ja/docs/Backup & View/', '08e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/category/products',
                component: ComponentCreator('/ione/ja/docs/category/products', 'fe9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/intro/',
                component: ComponentCreator('/ione/ja/docs/intro/', '012'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Overview/',
                component: ComponentCreator('/ione/ja/docs/Overview/', 'a95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/',
                component: ComponentCreator('/ione/ja/docs/Raphaview/', '097'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Glossary/DICOMImport',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Glossary/DICOMImport', '3d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/guidelines',
                component: ComponentCreator('/ione/ja/docs/Raphaview/guidelines', 'ce7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/', 'b1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/Annotation and Measurement',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/Annotation and Measurement', '2b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/Comparing Studies',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/Comparing Studies', '5f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/DICOMExport',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/DICOMExport', '730'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/display',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/display', 'b98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/ImageOrientationandManipulation',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/ImageOrientationandManipulation', '8b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/Overall GUI',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/Overall GUI', '5c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/Viewers_tools',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/Viewers_tools', '21e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/ione/ja/docs/tutorial-basics/create-a-blog-post', '589'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/ione/ja/docs/tutorial-basics/create-a-document', 'cd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/ione/ja/docs/tutorial-basics/create-a-page', 'feb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/ione/ja/docs/tutorial-basics/deploy-your-site', 'aa7'),
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
    path: '/ione/ja/',
    component: ComponentCreator('/ione/ja/', '08d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
