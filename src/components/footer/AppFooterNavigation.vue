<template>
  <div class="app-footer-nav">
    <div>
      <img src="/img/footer-navigation-logo.png" alt="" />
    </div>

    <div class="">
      <nav class="app-footer-nav__list app-footer-nav__list--nav">
        <RouterLink v-for="navItem in NavigationListFooter1" :key="navItem.href" :to="navItem.href">
          {{ navItem.name }}
        </RouterLink>
      </nav>
    </div>

    <div>
      <nav class="app-footer-nav__list app-footer-nav__list--nav">
        <RouterLink v-for="navItem in NavigationListFooter2" :key="navItem.href" :to="navItem.href">
          {{ navItem.name }}
        </RouterLink>
      </nav>
    </div>

    <div>
      <nav class="app-footer-nav__list">
        <RouterLink v-for="navItem in NavigationListFooter2" :key="navItem.href" :to="navItem.href">
          {{ navItem.name }}
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NavigationListFooter1, NavigationListFooter2, NavigationListFooter3 } from '@/constants/navigations';
</script>

<style scoped lang="scss">
.app-footer-nav {
  padding-bottom: 160px;
  display: flex;
  justify-content: space-between;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 2px;

    & a {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);

      &:hover, &:active {
        color: #fff;
      }
    }

    &--nav {
      & a {
        color: #FFFFFF;
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
      }

      & a {
        &:hover, &:active {
          color: #F3FF53;
        }
      }
    }
  }
}
</style>
