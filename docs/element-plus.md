# element-plus使用

## element-plus

:::demo
```vue
<template>
  <div class="card-wrap">
    <div class="card">{{ title }}</div>
    <el-button type="primary" @click="onClick">点击</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage, ElButton } from 'element-plus'

const title = ref('element-plus按钮示例')

const onClick = () => {
  ElMessage('消息')
}
</script>
```
:::