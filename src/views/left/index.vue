<script lang="ts" setup>
  import { inject } from 'vue';
  let config: configType = inject('config');
  let emitter: any = inject('emitter');
  function dragstart(e, com) {
    emitter.emit('dragstart', com);
  }
  function dragend(e, com) {
    emitter.emit('dragend', com);
  }
</script>
<template>
  <div
    v-for="item in config.list"
    :key="item.key"
    class="item"
    draggable="true"
    @Dragend="dragend($event, item)"
    @Dragstart="dragstart($event, item)"
  >
    <component :is="item.preview" />
  </div>
</template>
<style lang="scss" scoped>
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    border: 1px solid red;
    padding: 15px;
    cursor: pointer;
  }
</style>
