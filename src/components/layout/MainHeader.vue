<template>
  <header class="main-header">
    <BaseContainer>
      <MainNav></MainNav>
    </BaseContainer>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import MainNav from "./MainNav.vue";

@Component({
  components: {
    MainNav,
  },
})
export default class MainHeader extends Vue {}
</script>
