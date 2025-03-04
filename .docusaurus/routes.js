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
    component: ComponentCreator('/ione/ja/docs', 'dd8'),
    routes: [
      {
        path: '/ione/ja/docs',
        component: ComponentCreator('/ione/ja/docs', '830'),
        routes: [
          {
            path: '/ione/ja/docs',
            component: ComponentCreator('/ione/ja/docs', 'c8e'),
            routes: [
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
                component: ComponentCreator('/ione/ja/docs/Raphaview/', 'e4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/', 'c67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/Annotation and Measurement',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/Annotation and Measurement', 'ce5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/Comparing Studies',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/Comparing Studies', 'cf4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/DICOMExport',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/DICOMExport', '785'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/display',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/display', 'f74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/ImageOrientationandManipulation',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/ImageOrientationandManipulation', '233'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/in',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/in', 'b57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/Overall GUI',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/Overall GUI', '7ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/ja/docs/Raphaview/Tutorials/Viewers_tools',
                component: ComponentCreator('/ione/ja/docs/Raphaview/Tutorials/Viewers_tools', '294'),
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
