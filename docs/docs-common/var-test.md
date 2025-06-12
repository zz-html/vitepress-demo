# var-test

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## 使用变量定义样式

:::demo
```vue
<template>
  <span class="custom-class">蓝色文本</span>
  <span style="color: var(--my-color-danger)">红色文本</span>
</template>
```
:::