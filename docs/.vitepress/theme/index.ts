import DefaultTheme from 'vitepress/theme'
import { useComponents } from './useComponents'
import { setupI18n } from '../i18n'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
// import ElementPlus from 'element-plus' //使用全局导入
import 'element-plus/dist/index.css'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    useComponents(ctx.app);
    const i18n = setupI18n();
    ctx.app.use(i18n);
    //ctx.app.use(ElementPlus);
  }
}