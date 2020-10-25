<template>
  <div class="main-layout">
    <MainHeader class="main-layout__header" />

    <main class="main-layout__content">
      <router-view />
    </main>

    <MainFooter class="main-layout__footer" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import MainHeader from "@/components/layout/MainHeader.vue";
import MainFooter from "@/components/layout/MainFooter.vue";

@Component({
  components: {
    MainHeader,
    MainFooter,
  },
})
export default class MainLayout extends Vue {}
</script>

<style lang="scss">
.main-layout {
  &__header {
    border-bottom: 1px solid $info;
  }

  &__content {
    min-height: calc(100vh - 97px - 96px);
    padding: 45px 0;
  }

  &__footer {
    background-color: $info--light;
  }
}
</style>
