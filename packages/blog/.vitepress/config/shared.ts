import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: "Field of Dreams",
  base: '/',
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
  },
  rewrites: {
    'slides/slidev-example/slides.md': 'talks/slidev-example/index.md',
  }
})