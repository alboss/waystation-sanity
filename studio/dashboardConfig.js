export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605293f885a111208ed9857d',
                  title: 'Sanity Studio',
                  name: 'waystation-sanity-studio',
                  apiId: 'bac93f06-3705-4aac-8719-06387216678e'
                },
                {
                  buildHookId: '605293f885a1111d97d98352',
                  title: 'Blog Website',
                  name: 'waystation-sanity',
                  apiId: '95b1ffdd-0ad3-4c05-a8cd-c7192d0287f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alboss/waystation-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://waystation-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
