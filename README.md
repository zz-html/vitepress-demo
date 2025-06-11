# vitepress-demo

## 安装
准备Node.js 22.16.0安装

```bash
npm install -g pnpm
pnpm init
# vitepress-theme-demoblock支持版本为1.0.1
pnpm add vitepress@1.0.1 -D
```

创建目录结构
```bash
mkdir docs
echo "# Hello VitePress" > docs/index.md
```

在 package.json 里加上启动命令
```json
{
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "serve": "vitepress serve docs"
  }
}
```

启动开发环境，浏览器打开：http://localhost:5173
```bash
pnpm dev
```

添加配置文件 docs/.vitepress/config.mts
```mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My VitePress Site',
  description: 'A VitePress site example',
})
```

## vitepress-theme-demoblock使用
官网：https://github.com/xinlei3166/vitepress-theme-demoblock

安装
```bash
pnpm add vitepress-theme-demoblock -D
```

配置docs/.vitepress/config.mts：
```mts
import { defineConfig } from 'vitepress'
import { demoblockPlugin } from 'vitepress-theme-demoblock'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  }
})
```

引入样式，配置docs/.vitepress/theme/index.ts：
```mts
import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
  }
}
```

package.json 配置命令 scripts，vitepress-rc 用来注册组件
```json
  "scripts": {
    "dev": "pnpm run register:components && vitepress dev docs",
    "build": "pnpm run register:components && vitepress build docs",
    "serve": "vitepress serve docs",
    "register:components": "vitepress-rc"
  }
```

Markdown 中使用 :::demo，详见：vitepress-theme-demoblock.md