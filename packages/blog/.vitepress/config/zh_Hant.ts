import { defineConfig } from 'vitepress'

export const zhHant = defineConfig({
  lang: 'zh_Hant_TW',
  description: 'Personal Blog',
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '警告',
      infoLabel: '說明',
      detailsLabel: '詳細說明'
    }
  },
  themeConfig: {
    nav: [
      {
        text: 'Blog',
        items: [
          { text: 'Vibe Coding with Claude Sonnet 4 (Part 1)', link: '/contents/zh_Hant/posts/vibe-coding-with-claude-sonnet4-part1.md' },
          { text: 'Java 11 JEP 335 Nashorn', link: '/contents/zh_Hant/posts/java-11-jep335-nashorn.md' },
          { text: 'Programming Language Vulnerability', link: '/contents/zh_Hant/posts/programming-language-vulnerability.md' }
        ]
      },
      {
        text: 'Tech',
        items: [
          { text: 'VSCode', link: '/contents/zh_Hant/tech/vscode' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Blog',
        items: [
          { text: 'Vibe Coding with Claude Sonnet 4 (Part 1)', link: '/contents/zh_Hant/posts/vibe-coding-with-claude-sonnet4-part1.md' },
          { text: 'Java 11 JEP 335 Nashorn', link: '/contents/zh_Hant/posts/java-11-jep335-nashorn.md' },
          { text: 'Programming Language Vulnerability', link: '/contents/zh_Hant/posts/programming-language-vulnerability.md' }
        ]
      },
      {
        text: 'Tech',
        items: [
          { text: 'VSCode', link: '/contents/zh_Hant/tech/vscode' }
        ]
      }
    ],
    footer: {
      message: 'Licensed under CC BY-NC-SA 4.0',
      copyright: `This work &copy; ${new Date().getFullYear()} by Michael Lin.`
    },
    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },
    lastUpdated: {
      text: '最後更新於',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    langMenuLabel: '多國語系',
    returnToTopLabel: '回到上方',
    sidebarMenuLabel: '選單',
    darkModeSwitchLabel: '模式',
    lightModeSwitchTitle: '淺色模式',
    darkModeSwitchTitle: '深色模式',
    outlineTitle: '在此頁'
  }
})
