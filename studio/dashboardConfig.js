export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5cf344f3899b5330b6db828e',
                  title: 'Sanity Studio',
                  name: 'blog-studio-fbwmvisv',
                  apiId: '7b17c31d-7f65-4093-a6a3-655e30b55d23'
                },
                {
                  buildHookId: '5cf344f37238ceb9a068a20c',
                  title: 'Blog Website',
                  name: 'blog-web-sqpwvhjg',
                  apiId: 'c84805a2-6f56-46df-8927-854e5b2e189d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bhaskargoyal/blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blog-web-sqpwvhjg.netlify.com', category: 'apps'}
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
