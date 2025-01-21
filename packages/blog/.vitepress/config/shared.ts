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
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜尋',
                buttonAriaLabel: '搜尋'
              },
              modal: {
                displayDetails: '顯示詳細列表',
                resetButtonTitle: '重置搜尋',
                backButtonTitle: '關閉搜尋',
                noResultsText: '沒有結果',
                footer: {
                  selectText: '選擇',
                  selectKeyAriaLabel: '輸入',
                  navigateText: '導航',
                  navigateUpKeyAriaLabel: '上箭頭',
                  navigateDownKeyAriaLabel: '下箭頭',
                  closeText: '關閉',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          },
          en: {}
        },
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: {
              title: 4,
              text: 2,
              titles: 1
            }
          }
        }
      }
    }
  }
})