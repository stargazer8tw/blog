import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { zhHant } from './zh_Hant'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    en: {
      label: 'English',
      link: '/contents/en',
      ...en
    },
    root: {
      label: '繁體中文',
      link: '/contents/zh_Hant',
      ...zhHant
    }
  },
  transformHead({ assets }) {
    // adjust the regex accordingly to match your font
    const fontFile = assets.find(file => /font-name\.\w+\.woff2/)
    if (fontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: fontFile,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      ]
    }
  }

})
