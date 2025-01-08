import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: "Personal Blog",
  markdown: {
    container: {
      tipLabel: 'Tip',
      warningLabel: 'Warning',
      dangerLabel: 'Danger',
      infoLabel: 'Info',
      detailsLabel: 'Details'
    }
  },
  themeConfig: {
    nav: [],
    sidebar: [],
    footer: {
      message: 'Licensed under CC BY-NC-SA 4.0',
      copyright: `This work &copy; ${new Date().getFullYear()} by Michael Lin.`
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    langMenuLabel: 'Multiligual',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme'
  }
})
