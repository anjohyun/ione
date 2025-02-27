import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ionedocs/__docusaurus/debug',
    component: ComponentCreator('/ionedocs/__docusaurus/debug', 'a7b'),
    exact: true
  },
  {
    path: '/ionedocs/__docusaurus/debug/config',
    component: ComponentCreator('/ionedocs/__docusaurus/debug/config', '5b6'),
    exact: true
  },
  {
    path: '/ionedocs/__docusaurus/debug/content',
    component: ComponentCreator('/ionedocs/__docusaurus/debug/content', '184'),
    exact: true
  },
  {
    path: '/ionedocs/__docusaurus/debug/globalData',
    component: ComponentCreator('/ionedocs/__docusaurus/debug/globalData', 'd56'),
    exact: true
  },
  {
    path: '/ionedocs/__docusaurus/debug/metadata',
    component: ComponentCreator('/ionedocs/__docusaurus/debug/metadata', '3c0'),
    exact: true
  },
  {
    path: '/ionedocs/__docusaurus/debug/registry',
    component: ComponentCreator('/ionedocs/__docusaurus/debug/registry', 'e41'),
    exact: true
  },
  {
    path: '/ionedocs/__docusaurus/debug/routes',
    component: ComponentCreator('/ionedocs/__docusaurus/debug/routes', '02b'),
    exact: true
  },
  {
    path: '/ionedocs/blog',
    component: ComponentCreator('/ionedocs/blog', 'c38'),
    exact: true
  },
  {
    path: '/ionedocs/blog/archive',
    component: ComponentCreator('/ionedocs/blog/archive', '698'),
    exact: true
  },
  {
    path: '/ionedocs/blog/authors',
    component: ComponentCreator('/ionedocs/blog/authors', 'f96'),
    exact: true
  },
  {
    path: '/ionedocs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/ionedocs/blog/authors/all-sebastien-lorber-articles', '64a'),
    exact: true
  },
  {
    path: '/ionedocs/blog/authors/yangshun',
    component: ComponentCreator('/ionedocs/blog/authors/yangshun', '628'),
    exact: true
  },
  {
    path: '/ionedocs/blog/first-blog-post',
    component: ComponentCreator('/ionedocs/blog/first-blog-post', 'd72'),
    exact: true
  },
  {
    path: '/ionedocs/blog/long-blog-post',
    component: ComponentCreator('/ionedocs/blog/long-blog-post', '81e'),
    exact: true
  },
  {
    path: '/ionedocs/blog/mdx-blog-post',
    component: ComponentCreator('/ionedocs/blog/mdx-blog-post', 'f4d'),
    exact: true
  },
  {
    path: '/ionedocs/blog/tags',
    component: ComponentCreator('/ionedocs/blog/tags', '352'),
    exact: true
  },
  {
    path: '/ionedocs/blog/tags/docusaurus',
    component: ComponentCreator('/ionedocs/blog/tags/docusaurus', 'e96'),
    exact: true
  },
  {
    path: '/ionedocs/blog/tags/facebook',
    component: ComponentCreator('/ionedocs/blog/tags/facebook', '4fb'),
    exact: true
  },
  {
    path: '/ionedocs/blog/tags/hello',
    component: ComponentCreator('/ionedocs/blog/tags/hello', 'ed0'),
    exact: true
  },
  {
    path: '/ionedocs/blog/tags/hola',
    component: ComponentCreator('/ionedocs/blog/tags/hola', '3b3'),
    exact: true
  },
  {
    path: '/ionedocs/blog/welcome',
    component: ComponentCreator('/ionedocs/blog/welcome', 'f69'),
    exact: true
  },
  {
    path: '/ionedocs/markdown-page',
    component: ComponentCreator('/ionedocs/markdown-page', 'fce'),
    exact: true
  },
  {
    path: '/ionedocs/docs',
    component: ComponentCreator('/ionedocs/docs', '4a8'),
    routes: [
      {
        path: '/ionedocs/docs',
        component: ComponentCreator('/ionedocs/docs', 'd1a'),
        routes: [
          {
            path: '/ionedocs/docs',
            component: ComponentCreator('/ionedocs/docs', '454'),
            routes: [
              {
                path: '/ionedocs/docs/Admin Settings/',
                component: ComponentCreator('/ionedocs/docs/Admin Settings/', 'd0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Backup & View/',
                component: ComponentCreator('/ionedocs/docs/Backup & View/', 'ed8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Backup & View/Backup Data Management/Backup Monitoring',
                component: ComponentCreator('/ionedocs/docs/Backup & View/Backup Data Management/Backup Monitoring', '510'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Backup & View/Backup Data Management/Delete DICOM',
                component: ComponentCreator('/ionedocs/docs/Backup & View/Backup Data Management/Delete DICOM', '248'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Backup & View/Backup Data Management/DICOM Display Settings',
                component: ComponentCreator('/ionedocs/docs/Backup & View/Backup Data Management/DICOM Display Settings', '358'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Backup & View/Backup Data Management/Download DICOM',
                component: ComponentCreator('/ionedocs/docs/Backup & View/Backup Data Management/Download DICOM', '9b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Backup & View/Backup Data Management/Manage Attachments',
                component: ComponentCreator('/ionedocs/docs/Backup & View/Backup Data Management/Manage Attachments', 'd5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Backup & View/Backup Data Management/Search DICOM',
                component: ComponentCreator('/ionedocs/docs/Backup & View/Backup Data Management/Search DICOM', '1d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Backup & View/Backup Data Management/Upload DICOM',
                component: ComponentCreator('/ionedocs/docs/Backup & View/Backup Data Management/Upload DICOM', 'e2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Backup & View/Backup Data Management/View DICOM',
                component: ComponentCreator('/ionedocs/docs/Backup & View/Backup Data Management/View DICOM', '524'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Backup & View/Backup Setting/Backup Automation/from_autotrans_devices',
                component: ComponentCreator('/ionedocs/docs/Backup & View/Backup Setting/Backup Automation/from_autotrans_devices', '246'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Backup & View/Backup Setting/Backup Automation/with_IRM_agent',
                component: ComponentCreator('/ionedocs/docs/Backup & View/Backup Setting/Backup Automation/with_IRM_agent', '6a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Backup & View/Backup Setting/Create Groups',
                component: ComponentCreator('/ionedocs/docs/Backup & View/Backup Setting/Create Groups', 'dd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Backup & View/Backup Setting/Migration',
                component: ComponentCreator('/ionedocs/docs/Backup & View/Backup Setting/Migration', 'b10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/category/products',
                component: ComponentCreator('/ionedocs/docs/category/products', '297'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/FAQ/intro',
                component: ComponentCreator('/ionedocs/docs/FAQ/intro', '3de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/ImageWorklist/',
                component: ComponentCreator('/ionedocs/docs/ImageWorklist/', '74f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/ImageWorklist/',
                component: ComponentCreator('/ionedocs/docs/ImageWorklist/', '59a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/intro/',
                component: ComponentCreator('/ionedocs/docs/intro/', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Overview/',
                component: ComponentCreator('/ionedocs/docs/Overview/', 'ab2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Raphaview/',
                component: ComponentCreator('/ionedocs/docs/Raphaview/', '350'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Raphaview/Glossary/DICOMImport',
                component: ComponentCreator('/ionedocs/docs/Raphaview/Glossary/DICOMImport', '804'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Raphaview/guidelines',
                component: ComponentCreator('/ionedocs/docs/Raphaview/guidelines', '0de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Raphaview/Tutorials/',
                component: ComponentCreator('/ionedocs/docs/Raphaview/Tutorials/', '5ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Raphaview/Tutorials/Annotation and Measurement',
                component: ComponentCreator('/ionedocs/docs/Raphaview/Tutorials/Annotation and Measurement', '8eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Raphaview/Tutorials/Comparing Studies',
                component: ComponentCreator('/ionedocs/docs/Raphaview/Tutorials/Comparing Studies', '629'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Raphaview/Tutorials/DICOMExport',
                component: ComponentCreator('/ionedocs/docs/Raphaview/Tutorials/DICOMExport', 'f8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Raphaview/Tutorials/display',
                component: ComponentCreator('/ionedocs/docs/Raphaview/Tutorials/display', 'ce5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Raphaview/Tutorials/ImageOrientationandManipulation',
                component: ComponentCreator('/ionedocs/docs/Raphaview/Tutorials/ImageOrientationandManipulation', 'a71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Raphaview/Tutorials/Overall GUI',
                component: ComponentCreator('/ionedocs/docs/Raphaview/Tutorials/Overall GUI', 'e60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/Raphaview/Tutorials/Viewers_tools',
                component: ComponentCreator('/ionedocs/docs/Raphaview/Tutorials/Viewers_tools', 'ba0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/test_image/',
                component: ComponentCreator('/ionedocs/docs/test_image/', 'a6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/ionedocs/docs/tutorial-basics/create-a-blog-post', 'c34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/ionedocs/docs/tutorial-basics/create-a-document', '5a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/ionedocs/docs/tutorial-basics/create-a-page', '3af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ionedocs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/ionedocs/docs/tutorial-basics/deploy-your-site', 'd19'),
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
    path: '/ionedocs/',
    component: ComponentCreator('/ionedocs/', 'b39'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
