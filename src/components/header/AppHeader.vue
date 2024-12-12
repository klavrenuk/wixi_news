<script setup lang="ts">
import {NavigationList} from '@/constants/navigations';

const activeLink = '/crypto';
</script>

<template>
  <div class="app-header app-content-block">
    <div class="app-header__block app-header__block--left">
      <RouterLink to="/" class="app-header__logo">
        <img src="/img/logo.png" alt="WIXI" />
      </RouterLink>

      <nav class="app-header__nav">
        <RouterLink v-for="link in NavigationList" :key="link.href" :to="link.href"
                    :class="{'active': link.href === activeLink, 'disabled': link.isDisabled}"
                    :disabled="link.isDisabled"
        >
          {{ link.name }}
          <span class="app-header__nav__text" v-if="link.href === '/rewards'">Soon</span>
        </RouterLink>
      </nav>
    </div>

    <div class="app-header__block app-header__block--right">
      <a>
        <img src="/img/icon-ya.svg" alt="" class="app-header__ya" />
      </a>

      <div class="app-header__block-user">
        <button class="app-header__replenish">
          Пополнить
        </button>
        <a>
          <img src="/img/icon-user.svg" alt="ЛК" class="app-header__user" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header {
  height: 80px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Noto Sans", sans-serif;

  &__block {
    &--left {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    &--right {
      display: flex;
      align-items: center;
    }
  }

  &__nav {
    display: flex;
    gap: 24px;

    & a {
      position: relative;
      color: #FFFFFF;
      font-size: 16px;

      &:hover, &:active, &.active {
        color: #F6FF80;
      }

      &.disabled {
        color: rgba(255, 255, 255, 0.5);
        cursor: default;
      }
    }
  }

  &__block-user {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  &__user {
    height: 42px;
    width: 42px;
    object-fit: cover;
  }

  &__ya {
    width: 40px;
    height: 32px;
    padding-right: 60px;
  }

  &__replenish {
    padding: 12px 36px;
    color: rgba(0, 0, 0, 0.87);
    background: #F3FF53;
  }
}

.app-header__nav__text {
  position: absolute;
  top: 0;
  right: -32px;
  color: #F3FF53;
  font-size: 10px;
}
</style>
