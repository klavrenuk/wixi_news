<template>
  <div class="news app-content-block">
    <div class="news__title">
      <AppTitle>Новости рынков</AppTitle>
    </div>

    <div class="news__table">
      <AppTable
          :items="MOCS_NEWS"
          :tableTHList="tableTHNews"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppTable from "@/components/table/AppTable.vue";
import AppTitle from "@/components/common/AppTitle.vue";

import {tableTHNews} from "@/constants/news";
import {MOCS_NEWS} from '@/mocs/news';
</script>

<style lang="scss" scoped>
.news {
  &__title {
    padding: 1rem;
  }
}
</style>
