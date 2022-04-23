// 组件
import ComButton from '@/components/element/button.vue';
import ComTable from '@/components/element/table.vue';
import ComRate from '@/components/element/rate.vue';

const componentList = [
  {
    label: '按钮',
    key: 'button',
    preview: ComButton,
    render: ComButton,
  },
  {
    label: '表格',
    key: 'table',
    preview: ComTable,
    render: ComTable,
  },
  {
    label: '评分',
    key: 'rate',
    preview: ComRate,
    render: ComRate,
  },
];

function createConfig() {
  const list = [];
  const map = [];
  return {
    list,
    map,
    add: (component) => {
      list.push(component);
      map[component.key] = component;
    },
  };
}

export const config = createConfig();

componentList.forEach((item) => {
  config.add(item);
});
