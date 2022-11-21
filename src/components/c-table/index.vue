<template>
  <p class="title">{{ title }}</p>
  <div
    class="c-table"
    :class="frame ? ' frame' : ''"
    :style="{ height: height }"
    ref="table"
  >
    <table :style="{ width: width }">
      <thead>
        <tr>
          <th v-if="select" style="width: 40px;">
            <input type="checkbox" v-model="checkAll" @change="allSelect" />
          </th>
          <th
            v-for="item in columns"
            :key="item.prop"
            :title="item.label"
            :style="{
              width: item.width,
              position: item.fixed ? 'sticky' : 'relative',
              left: item.fixed === 'left' ? 0 : '',
              right: item.fixed === 'right' ? 0 : '',
              textAlign: item.align,
            }"
            :class="
              item.fixed === 'left' && scroll
                ? 'shadow-left'
                : item.fixed === 'right'
                ? 'shadow-right'
                : ''
            "
          >
            {{ item.label }}
            <span v-if="'sort' in item" class="sort" @click="sort(item)">
              <span v-if="item.sort">▲</span>
              <span v-else>▼</span>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td v-if="select">
            <input
              type="checkbox"
              name="select"
              class="row-select"
              @change="rowSelect($event, index)"
            />
          </td>
          <td
            v-for="item in columns"
            :title="row[item.prop]"
            :style="{
              position: item.fixed ? 'sticky' : 'relative',
              left: item.fixed === 'left' ? 0 : '',
              right: item.fixed === 'right' ? 0 : '',
              textAlign: item.align,
            }"
            :class="
              item.fixed === 'left' && scroll
                ? 'shadow-left'
                : item.fixed === 'right'
                ? 'shadow-right'
                : ''
            "
          >
            <slot :name="item.prop" :row="row" :index="index">{{
              row[item.prop]
            }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {
  ComponentInternalInstance,
  getCurrentInstance,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
} from "vue";

import { Column, Row } from "./type";

const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  select: {
    type: Boolean,
    default: undefined,
  },
  frame: {
    type: Boolean,
    default: undefined,
  },
  width: {
    type: String,
    default: undefined,
  },
  height: {
    type: String,
    default: undefined,
  },
  columns: {
    type: Array<Column>,
    default: function () {
      return [];
    },
  },
  tableData: {
    type: Array<Row>,
    default: function () {
      return [];
    },
  },
});

const tableData = reactive([...props.tableData]);
watch(props.tableData,() => {
  tableData.push(...props.tableData);
})

// 表格数据推入checked
if (props.select) {
  tableData.forEach((item: any, index) => {
    item.checked = false;
  });
}

// 监听表格滚动事件
const scroll = ref(false);
const tableNode = ref<HTMLElement>();
const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const scrollChange = () => {
  tableNode.value?.scrollLeft === 0 ? (scroll.value = false) : (scroll.value = true);
};
onMounted(() => {
  tableNode.value = proxy?.$refs["table"] as HTMLElement;
  tableNode.value.addEventListener("scroll", scrollChange);
});
onUnmounted(() => {
  tableNode.value?.removeEventListener("scroll", scrollChange);
});

// 复选框参数、方法
const checkAll = ref(false);
const allSelect = () => {
  const rows = document.getElementsByClassName("row-select");
  tableData.forEach((item: any, i) => {
    item.checked = checkAll.value;
    const row = rows.item(i) as HTMLInputElement;
    row.checked = checkAll.value;
  });
};
const rowSelect = (event: Event, i: number) => {
  const row = event.target as HTMLInputElement;
  //@ts-ignore
  tableData[i].checked = row.checked;
};
watch(tableData, () => {
  let checkedLength = 0;
  tableData.forEach((item: any) => {
    if (item.checked) {
      checkedLength++;
    }
  });
  checkAll.value = checkedLength === tableData.length ? true : false;
});

const sort = (item: Column) => {
  item.sort = !item.sort;
  console.log(item);
  //@ts-ignore
  tableData.sort((a: any, b: any) => {
    if (typeof a[item.prop] === "number") {
      if (item.sort) {
        return a[item.prop] - b[item.prop];
      } else {
        return b[item.prop] - a[item.prop];
      }
    }
    if (typeof a[item.prop] === "string") {
      const x = a[item.prop].toLowerCase();
      const y = b[item.prop].toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    }
  });
  console.log(tableData);
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
