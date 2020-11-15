export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5fb105f90868120a980a3dc9',
                  title: 'Sanity Studio',
                  name: 'how-to-css-studio',
                  apiId: '197be094-0a57-4e7a-a3a9-58c5b92a8e24'
                },
                {
                  buildHookId: '5fb105f9f5829122cf79930e',
                  title: 'Portfolio Website',
                  name: 'how-to-css',
                  apiId: 'ebdf2c29-3643-45ba-b342-e7715a8b1ef8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikolajdobrucki/how-to-css',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://how-to-css.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
