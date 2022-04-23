<script setup lang="ts">
  import { start as startFn } from '@/hooks/useDragger';
  import { inject, ref, nextTick, markRaw } from 'vue';
  let dom = ref();
  let list = ref([]);
  let emitter: any = inject('emitter');
  const dragstart = function (res) {
    startFn(dom, res, emitter);
  };
  const update = function (res) {
    list.value.push(markRaw(res));
    nextTick(() => {
      let items = document.querySelectorAll('.content .item');
      Array.from(items).forEach((item) => {
        observer.observe(item, {
          attributes: true,
        });
      });
    });
  };
  const dragend = function (res) {};
  emitter.on('dragstart', dragstart);
  emitter.on('dragend', dragend);
  emitter.on('update', update);
  let observer = new MutationObserver((res) => {
    let dom: any = res[0].target;
    let name = dom.getAttribute('name');
    let x = parseInt(dom.style.left, 10);
    let y = parseInt(dom.style.top, 10);

    list.value[name].x = x;
    list.value[name].y = y;
  });
</script>
<template>
  <div class="content" ref="dom">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="item"
      :ref="item.ref"
      :name="index"
      v-dragFn
      :style="{ left: `${item.x}px`, top: `${item.y}px` }"
    >
      <component :is="item.render"></component>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .content {
    height: 100%;
    position: relative;
    .item {
      background: red;
      height: 50px;
      width: 150px;
      position: absolute;
    }
  }
</style>
