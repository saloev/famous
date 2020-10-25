<template>
  <div class="home">
    <BasePageWrapper title="Картины эпохи Возрождения">
      <ul class="home__card-list reset--list-style">
        <li class="home__card-item" v-for="item in cardList" :key="item.title">
          <Card class="home__card-card" :item="item" @add-to-basket="addToBasket" />
        </li>
      </ul>
    </BasePageWrapper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Card from "@/components/elements/Card.vue";

@Component({
  components: {
    Card,
  },
})
export default class Home extends Vue {
  get cardList() {
    return this.$store.state.images;
  }

  addToBasket() {
    console.log(this, "SS");
  }
}
</script>

<style lang="scss">
.home {
  &__card-list {
    @include flex--alignment(space-between, top);
  }
}
</style>
