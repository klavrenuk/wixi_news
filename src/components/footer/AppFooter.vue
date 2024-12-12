<template>
  <div class="app-footer">
    <AppFooterNavigation />

    <div class="app-footer__bottom">
      <div class="app-footer__bottom__text">
        <p>WIXI - Криптобиржа. Покупка, продажа криптовалют.</p>
        <p class="app-footer__text-notation">Предупреждение о рисках, 18+</p>
        <p>Все права защищены, 2024</p>
      </div>

      <div class="app-footer__block-right">
        <select class="app-footer__lang" v-model="lang">
          <option v-for="option in options" :key="option" :value="option">
            {{ option }}
          </option>
        </select>

        <div class="app-footer__navigation">
          <a class="app-footer__navigation__link" v-for="navItem in NavListSocials" :key="navItem.href" :href="navItem.href">
            <img :src="navItem.href" :alt="navItem.name" />
          </a>
        </div>

        <button class="app-footer__application">
          Заявка на листинг
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {NavListSocials} from '@/constants/navigations';
import {ref} from 'vue';

import AppFooterNavigation from "@/components/footer/AppFooterNavigation.vue";

const options = ['Ру', 'En'];

const lang = ref<string>('Ру')
</script>

<style scoped lang="scss">
.app-footer {
  padding: 0 40px 54px;

  &__lang {

    padding: .5rem;
    color: #fff;
    border: none;
    background: none;
  }

  &__navigation {
    display: flex;
    align-items: flex-end;
    gap: 8px;

    &__link {
      height: 65px;
      width: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(20, 20, 20, 1);
      border-radius: 8px;
    }
  }

  &__block-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__text {
      & p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 16px;
        line-height: 20px;
      }
    }
  }

  &__application {
    padding: 22px 103px;
    color: #F3FF53;
    border: 1px solid #F3FF53;
  }
}

.app-footer__text-notation {
  margin-bottom: 20px;
}
</style>
