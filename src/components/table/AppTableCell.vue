<template>
  <div class="app-table-cell">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import type { TableCellProps } from "@/types/table";

const props = defineProps<TableCellProps>();

const value = computed(() => {
  return props.data && props.prop in props.data ? props.data[props.prop] : '';
});
</script>

<style scoped lang="scss">
.app-table-cell {
  color: #fff;
  font-size: 14px;
  line-height: 20px;
}
</style>
