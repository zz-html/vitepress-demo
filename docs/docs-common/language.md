# 国际化

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## 使用变量定义样式


```vue
<template>
  <div>
    <p>{{ t('hello') }}</p>
    <button @click="switchLang">{{ t('switch') }}</button>
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