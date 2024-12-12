<template>
  <div class="app-table-pagination">
    <div class="app-table-pagination__row">
      Rows per page:
      <select v-model="activePagination" @change="handleChange" class="app-table-pagination__select">
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div>
      1-{{countItems}} of {{ length }}
    </div>
    <div class="app-table-pagination__control">
      <button class="app-table-pagination__btn">
        <img src="/img/icon-arrow-left.svg" alt="" />
      </button>
      <button class="app-table-pagination__btn">
        <img src="/img/icon-arrow-right.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, defineEmits, defineProps, computed } from 'vue';

const props = defineProps({
  length: {
    type: Number,
    required: false,
    default: 0
  }
});

const activePagination = ref<number>(5);
const emits = defineEmits(['update']);

const options = [
  5, 10, 15
]

const countItems = computed(() => {
  if(props.length < activePagination.value) return props.length;

  return activePagination.value;
})

const handleChange = () => {
  emits('update', activePagination.value);
}
</script>

<style scoped lang="scss">
.app-table-pagination {
  display: flex;
  align-items: center;
  gap: 26px;
  height: 44px;
  justify-content: flex-end;
  padding: 0 16px;
  font-size: 12px;

  &__select {
    position: relative;
    top: 1px;
    background: none;
    border: none;
    font-size: 12px;
    color: #fff;

    &::selection {
      border: none;
    }
  }

  &__row {
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
  }

  &__btn {
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
  }

  &__control {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
