import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: "Field of Dreams",
  base: '/blog/',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  markdown: {
  },
  head: [
  ],

  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/stargazer8tw/blog'
      }
    ]
  }
})