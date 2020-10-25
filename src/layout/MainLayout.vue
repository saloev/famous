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
  display: flex;
  flex-direction: column;
  height: 100vh; // calc with vh not workin in IE
  &__header {
    border-bottom: 1px solid $info;
  }

  &__content {
    padding: 45px 0;
  }

  &__footer {
    margin-top: auto;

    background-color: $info--light;
  }
}
</style>
