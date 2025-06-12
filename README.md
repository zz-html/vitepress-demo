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

## element-plus使用

安装element-plus
```bash
pnpm add element-plus@2.3.14
```

引入样式
```bash
import 'element-plus/dist/index.css'
```

Markdown 中使用element-plus，详见：element-plus.md

## 自定义变量

编辑.vitepress/theme/custom.css文件：
```css
:root {
    /* 自定义颜色变量 */
    --my-color-primary: #409eff;
    --my-color-danger: #f56c6c;
}

/* 自定义全局样式 */
.custom-class {
    color: var(--my-color-primary);
}
```

编辑 .vitepress/theme/index.ts 文件：
```ts
import DefaultTheme from 'vitepress/theme'
import './custom.css' // 直接导入 CSS 文件

export default DefaultTheme
```

在 Markdown 文件中使用这些样式：
```markdown
<span style="color: var(--my-color-primary)">蓝色文本</span>

<div class="custom-class">自定义样式文本</div>
```

暗色样式定义：
```css
:root {
    /* 自定义颜色变量 */
    --my-color-primary: #409eff;
    --my-color-danger: #f56c6c;
}

.dark {
    --my-color-primary: #0000ff;
    --my-color-danger: #ff0000;
}
```

修改element样式
```css
:root {
  --el-color-primary: #42b983;  /* 亮色主题下 primary 按钮主色 */
}

.dark {
  --el-color-primary: #66d9e8; /* 暗黑模式下 primary 按钮主色 */
}
```

## 国际化

安装vue-i18n
```bash
pnpm add vue-i18n@^9.5.0
```

在 docs/.vitepress 目录下新建 i18n.ts：
```ts
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
```

在 theme/index.ts 中注册 i18n
```ts
import DefaultTheme from 'vitepress/theme'
import { setupI18n } from '../i18n'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    const i18n = setupI18n()
    app.use(i18n)
  },
}
```

Vue 组件文件示例
```vue
<template>
  <div>
    <p>{{ t('hello') }}</p>
    <el-button @click="switchLang">{{ t('switch') }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const switchLang = () => {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}
</script>

```