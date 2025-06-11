# vitepress-demo

## 安装
准备Node.js 22.16.0安装

```bash
npm install -g pnpm
pnpm init
pnpm add vitepress@latest -D
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