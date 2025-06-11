# vitepress-theme-demoblock使用

## 无vitepress-theme-demoblock

```vue
<template>
  <button class="my-button" @click="count++">点击了 {{ count }} 次</button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
<style scoped>
.my-button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}
.my-button:hover {
  background-color: #369870;
}
</style>
```
## 添加vitepress-theme-demoblock

:::demo

```vue
<template>
  <button class="my-button" @click="count++">点击了 {{ count }} 次</button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
<style scoped>
.my-button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}
.my-button:hover {
  background-color: #369870;
}
</style>
```

:::