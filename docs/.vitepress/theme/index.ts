import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './custom.css'

// import ElementPlus from 'element-plus' //使用全局导入
import 'element-plus/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    useComponents(ctx.app);
    //ctx.app.use(ElementPlus);
  }
}