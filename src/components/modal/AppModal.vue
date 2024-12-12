<template>
  <div class="app-modal">
    <div class="app-modal__content">
      <div class="app-modal__header">
        <h6 class="app-modal__date">{{ props.date ? props.date : '' }}</h6>

        <button class="app-modal__close" @click="props.close">
          Закрыть
          <img src="/img/icon-modal-close.svg" alt="Закрыть" />
        </button>
      </div>

      <div class="app-modal__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps({
  close: {
    type: Function,
    required: true
  },
  date: {
    type: String,
    required: false,
    default: null
  }
})
</script>

<style scoped lang="scss">
.app-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,.5);

  &__content {
    padding: 16px 24px;
    height: calc(100% - 100px);
    max-width: 836px;
    width: 100%;
    border-radius: 16px;
    background: #141414;
    box-shadow: 0 20px 50px 0 rgba(18, 27, 33, 0.2);
  }

  &__header {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__date {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
    font-size: 14px;
    font-family: "Noto Sans", sans-serif;
  }

  &__close {
    color: #F3FF53;
    font-size: 16px;
    font-weight: 600;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    font-family: "Noto Sans", sans-serif;
  }
}
</style>
