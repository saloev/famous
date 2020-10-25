<template>
  <footer class="main-footer">
    <BaseContainer class="main-footer__container">
      <MainNav logoType="dark">
        <FooterLinks />
      </MainNav>
    </BaseContainer>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import MainNav from "./MainNav.vue";
import FooterLinks from "./MainFooterLinks.vue";

@Component({
  components: {
    MainNav,
    FooterLinks,
  },
})
export default class MainFooter extends Vue {}
</script>

<style lang="scss">
  .main-footer {
    &__container {
      background: inherit;
    }
  }
</style>
