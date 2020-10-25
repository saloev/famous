<template>
  <header class="main-header">
    <BaseContainer>
      <MainNav>
        <InputSearch />
      </MainNav>
    </BaseContainer>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import InputSearch from "@/components/elements/InputeSearch.vue";
import MainNav from "./MainNav.vue";

@Component({
  components: {
    MainNav,
    InputSearch,
  },
})
export default class MainHeader extends Vue {}
</script>
