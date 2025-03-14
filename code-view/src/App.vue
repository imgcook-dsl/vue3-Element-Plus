<script setup>
import Page from './components/index.vue'
// import Page from './page/index.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <Page />
  </el-config-provider>
</template>

<style scoped>
</style>
