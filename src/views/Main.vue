<script setup lang="ts">
  import { provide, ref } from 'vue';
  import leftCom from '@/views/left/index.vue';
  import centerCom from '@/views/center/index.vue';
  import rightCom from '@/views/right/index.vue';
  import { config } from '@/views/config';
  import mitt from 'mitt';
  const emitter = mitt();
  provide('config', config);
  provide('emitter', emitter);
  const list = [leftCom, centerCom, rightCom];
</script>
<template>
  <div class="main">
    <div class="main-item" v-for="(item, index) in list" :key="index">
      <component :is="item"></component
    ></div>
  </div>
</template>
<style scoped lang="scss">
  .main {
    display: grid;
    grid-template-columns: 1fr 6fr 2fr;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    gap: 15px;
    &-item {
      border: 1px dashed #ccc;
    }
  }
</style>
