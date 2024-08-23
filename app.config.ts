// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Truspondr',
    description: 'The better way to roleplay.',
    image: 'https://avatars.githubusercontent.com/u/178166344?s=200&v=4',
    socials: {
      twitter: 'truspondr',
      github: 'truspondr',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docs',
      owner: 'truspondr',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
