// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Truspondr',
    description: 'The better way to roleplay.',
    image: '/truspondr-cover-white.png',
    socials: {
      twitter: 'truspondr',
      github: 'truspondr',
    },
    github: {
      dir: '',
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
      // title: 'Truspondr',
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Powered by Docus',
        href: 'https://docus.dev'
      }
    }
  }
})
