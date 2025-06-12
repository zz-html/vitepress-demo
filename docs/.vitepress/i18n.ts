// docs/.vitepress/i18n.ts
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    hello: 'Hello World!',
  },
  zh: {
    hello: '你好，世界！',
  },
}

export function setupI18n() {
  return createI18n({
    legacy: false,
    locale: 'en', // 默认语言
    fallbackLocale: 'en',
    messages,
  })
}