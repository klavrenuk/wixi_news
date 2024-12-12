<template>
  <div class="wrap-app-table">
    <table class="app-table">
      <thead>
      <tr>
        <th v-for="th in tableTHList" :key="th.key">
          {{ th.name }}
        </th>
      </tr>
      </thead>

      <tbody>
        <tr v-for="item in items.slice(0, countItems)" :key="item.date">
          <td v-for="th in tableTHList" :key="th.key" @click="showModal">
            <AppTableCell :prop="th.key" :data="item" />
          </td>
        </tr>
      </tbody>
    </table>
    <AppTablePagination @update="handleUpdatePagination" :length="items.length" />
  </div>

  <AppModal v-if="isShowModal" :close="closeModal" date="2024-08-07, 13:39">
    <NewsModalBody />
  </AppModal>
</template>

<script setup lang="ts">
import AppTableCell from "@/components/table/AppTableCell.vue";
import AppModal from "@/components/modal/AppModal.vue";
import NewsModalBody from "@/components/news/NewsModalBody.vue";
import AppTablePagination from "@/components/table/AppTablePagination.vue";

import { defineProps, ref } from 'vue';
import type { TableProps } from "@/types/table";

const isShowModal = ref(false);
const countItems = ref<number>(5);

const props = defineProps<TableProps>();

const handleUpdatePagination = (val:number) => {
  countItems.value = val;
}

const showModal = () => {
  isShowModal.value = true;
  toggleAppClass(true);
}

const toggleAppClass = (val:boolean) => {
  const app = document.querySelector('body');

  if(app) {
    if(val) {
      app.classList.add('active');
    } else {
      app.classList.remove('active');
    }
  }
}

const closeModal = () => {
  isShowModal.value = false;
  toggleAppClass(false);
}
</script>

<style scoped lang="scss">
.app-table {
  width: 100%;

  & th, td {
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    color: #fff;
    font-size: 16px;
    text-align: left;
    font-family: "Roboto", sans-serif;
  }

  & tbody tr {
    cursor: pointer;

    &:hover {
      background: rgba(0,0,0,.5);
    }
  }
}
</style>
