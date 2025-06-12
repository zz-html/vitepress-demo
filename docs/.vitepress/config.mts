import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "演示工程",
  description: "演示站点",
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '安装', link: '/docs-common/vitepress-theme-demoblock' },
      { text: '示例', link: '/docs-guide/markdown-examples' },
      
    ],

    sidebar: {
      '/docs-common/': [
        { text: '安装', items: [
          { text: 'vitepress-theme-demoblock', link: '/docs-common/vitepress-theme-demoblock' },
          { text: 'element-plus', link: '/docs-common/element-plus' },
          { text: 'var-test', link: '/docs-common/var-test' },
          { text: 'language', link: '/docs-common/language' },
        ]}
      ],
      '/docs-guide/': [
        { text: '示例', items: [
          { text: 'Markdown Examples', link: '/docs-guide/markdown-examples' },
          { text: 'Runtime API Examples', link: '/docs-guide/api-examples' },
        ]}
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
