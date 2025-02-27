import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ione/__docusaurus/debug',
    component: ComponentCreator('/ione/__docusaurus/debug', '8cb'),
    exact: true
  },
  {
    path: '/ione/__docusaurus/debug/config',
    component: ComponentCreator('/ione/__docusaurus/debug/config', '2af'),
    exact: true
  },
  {
    path: '/ione/__docusaurus/debug/content',
    component: ComponentCreator('/ione/__docusaurus/debug/content', '598'),
    exact: true
  },
  {
    path: '/ione/__docusaurus/debug/globalData',
    component: ComponentCreator('/ione/__docusaurus/debug/globalData', 'f48'),
    exact: true
  },
  {
    path: '/ione/__docusaurus/debug/metadata',
    component: ComponentCreator('/ione/__docusaurus/debug/metadata', 'ab7'),
    exact: true
  },
  {
    path: '/ione/__docusaurus/debug/registry',
    component: ComponentCreator('/ione/__docusaurus/debug/registry', 'f3d'),
    exact: true
  },
  {
    path: '/ione/__docusaurus/debug/routes',
    component: ComponentCreator('/ione/__docusaurus/debug/routes', '630'),
    exact: true
  },
  {
    path: '/ione/blog',
    component: ComponentCreator('/ione/blog', '225'),
    exact: true
  },
  {
    path: '/ione/blog/archive',
    component: ComponentCreator('/ione/blog/archive', '95e'),
    exact: true
  },
  {
    path: '/ione/blog/authors',
    component: ComponentCreator('/ione/blog/authors', '9ad'),
    exact: true
  },
  {
    path: '/ione/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/ione/blog/authors/all-sebastien-lorber-articles', 'd2e'),
    exact: true
  },
  {
    path: '/ione/blog/authors/yangshun',
    component: ComponentCreator('/ione/blog/authors/yangshun', '83a'),
    exact: true
  },
  {
    path: '/ione/blog/first-blog-post',
    component: ComponentCreator('/ione/blog/first-blog-post', '70f'),
    exact: true
  },
  {
    path: '/ione/blog/long-blog-post',
    component: ComponentCreator('/ione/blog/long-blog-post', '44f'),
    exact: true
  },
  {
    path: '/ione/blog/mdx-blog-post',
    component: ComponentCreator('/ione/blog/mdx-blog-post', '7a0'),
    exact: true
  },
  {
    path: '/ione/blog/tags',
    component: ComponentCreator('/ione/blog/tags', 'dca'),
    exact: true
  },
  {
    path: '/ione/blog/tags/docusaurus',
    component: ComponentCreator('/ione/blog/tags/docusaurus', '0b3'),
    exact: true
  },
  {
    path: '/ione/blog/tags/facebook',
    component: ComponentCreator('/ione/blog/tags/facebook', '862'),
    exact: true
  },
  {
    path: '/ione/blog/tags/hello',
    component: ComponentCreator('/ione/blog/tags/hello', 'acc'),
    exact: true
  },
  {
    path: '/ione/blog/tags/hola',
    component: ComponentCreator('/ione/blog/tags/hola', '5c2'),
    exact: true
  },
  {
    path: '/ione/blog/welcome',
    component: ComponentCreator('/ione/blog/welcome', '0e4'),
    exact: true
  },
  {
    path: '/ione/markdown-page',
    component: ComponentCreator('/ione/markdown-page', '2cf'),
    exact: true
  },
  {
    path: '/ione/docs',
    component: ComponentCreator('/ione/docs', 'f20'),
    routes: [
      {
        path: '/ione/docs',
        component: ComponentCreator('/ione/docs', 'dd8'),
        routes: [
          {
            path: '/ione/docs',
            component: ComponentCreator('/ione/docs', '287'),
            routes: [
              {
                path: '/ione/docs/Admin Settings/',
                component: ComponentCreator('/ione/docs/Admin Settings/', '1b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Backup & View/',
                component: ComponentCreator('/ione/docs/Backup & View/', 'bd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Backup & View/Backup Data Management/Backup Monitoring',
                component: ComponentCreator('/ione/docs/Backup & View/Backup Data Management/Backup Monitoring', '13e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Backup & View/Backup Data Management/Delete DICOM',
                component: ComponentCreator('/ione/docs/Backup & View/Backup Data Management/Delete DICOM', 'cec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Backup & View/Backup Data Management/DICOM Display Settings',
                component: ComponentCreator('/ione/docs/Backup & View/Backup Data Management/DICOM Display Settings', 'd8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Backup & View/Backup Data Management/Download DICOM',
                component: ComponentCreator('/ione/docs/Backup & View/Backup Data Management/Download DICOM', 'da0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Backup & View/Backup Data Management/Manage Attachments',
                component: ComponentCreator('/ione/docs/Backup & View/Backup Data Management/Manage Attachments', '0b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Backup & View/Backup Data Management/Search DICOM',
                component: ComponentCreator('/ione/docs/Backup & View/Backup Data Management/Search DICOM', 'fd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Backup & View/Backup Data Management/Upload DICOM',
                component: ComponentCreator('/ione/docs/Backup & View/Backup Data Management/Upload DICOM', '444'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Backup & View/Backup Data Management/View DICOM',
                component: ComponentCreator('/ione/docs/Backup & View/Backup Data Management/View DICOM', 'd90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Backup & View/Backup Setting/Backup Automation/from_autotrans_devices',
                component: ComponentCreator('/ione/docs/Backup & View/Backup Setting/Backup Automation/from_autotrans_devices', '8c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Backup & View/Backup Setting/Backup Automation/with_IRM_agent',
                component: ComponentCreator('/ione/docs/Backup & View/Backup Setting/Backup Automation/with_IRM_agent', 'e41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Backup & View/Backup Setting/Create Groups',
                component: ComponentCreator('/ione/docs/Backup & View/Backup Setting/Create Groups', '287'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Backup & View/Backup Setting/Migration',
                component: ComponentCreator('/ione/docs/Backup & View/Backup Setting/Migration', 'd48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/category/products',
                component: ComponentCreator('/ione/docs/category/products', '0a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/FAQ/intro',
                component: ComponentCreator('/ione/docs/FAQ/intro', '1fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/ImageWorklist/',
                component: ComponentCreator('/ione/docs/ImageWorklist/', '2f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/ImageWorklist/',
                component: ComponentCreator('/ione/docs/ImageWorklist/', '634'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/intro/',
                component: ComponentCreator('/ione/docs/intro/', '90e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Overview/',
                component: ComponentCreator('/ione/docs/Overview/', '097'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Raphaview/',
                component: ComponentCreator('/ione/docs/Raphaview/', '0bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Raphaview/Glossary/DICOMImport',
                component: ComponentCreator('/ione/docs/Raphaview/Glossary/DICOMImport', 'a20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Raphaview/guidelines',
                component: ComponentCreator('/ione/docs/Raphaview/guidelines', '725'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Raphaview/Tutorials/',
                component: ComponentCreator('/ione/docs/Raphaview/Tutorials/', 'e35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Raphaview/Tutorials/Annotation and Measurement',
                component: ComponentCreator('/ione/docs/Raphaview/Tutorials/Annotation and Measurement', '660'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Raphaview/Tutorials/Comparing Studies',
                component: ComponentCreator('/ione/docs/Raphaview/Tutorials/Comparing Studies', '9a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Raphaview/Tutorials/DICOMExport',
                component: ComponentCreator('/ione/docs/Raphaview/Tutorials/DICOMExport', '585'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Raphaview/Tutorials/display',
                component: ComponentCreator('/ione/docs/Raphaview/Tutorials/display', '64f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Raphaview/Tutorials/ImageOrientationandManipulation',
                component: ComponentCreator('/ione/docs/Raphaview/Tutorials/ImageOrientationandManipulation', '863'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Raphaview/Tutorials/Overall GUI',
                component: ComponentCreator('/ione/docs/Raphaview/Tutorials/Overall GUI', '74d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/Raphaview/Tutorials/Viewers_tools',
                component: ComponentCreator('/ione/docs/Raphaview/Tutorials/Viewers_tools', '35b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/test_image/',
                component: ComponentCreator('/ione/docs/test_image/', 'f95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/ione/docs/tutorial-basics/create-a-blog-post', 'ed2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/ione/docs/tutorial-basics/create-a-document', '1fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/ione/docs/tutorial-basics/create-a-page', '933'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ione/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/ione/docs/tutorial-basics/deploy-your-site', 'f46'),
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
    path: '/ione/',
    component: ComponentCreator('/ione/', '4f0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
