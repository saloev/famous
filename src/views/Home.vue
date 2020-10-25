<template>
  <div class="home">
    <BasePageWrapper title="Картины эпохи Возрождения">
      <ul class="home__card-list reset--list-style">
        <li class="home__card-item" v-for="item in listInBasketWithLoading" :key="item.id">
          <Card
            class="home__card-card"
            :item="item"
            @addToBasket="addToBasket"
          />
        </li>
      </ul>
    </BasePageWrapper>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import LS from "@/utils/LocalStorage";

import Card from "@/components/elements/Card.vue";

import { CardType } from "@/types";

@Component({
  components: {
    Card,
  },
})
export default class Home extends Vue {
  loadingList: Array<number> = [];

  @Watch("basket") onBasketChange(val: Array<number>) {
    LS.save(val);
    console.log(this);
  }

  get cardList(): Array<CardType> {
    return this.$store.state.images;
  }

  get basket() {
    return this.$store.state.basket;
  }

  get listInBasket(): Array<CardType> {
    return this.checkPorp("isInBasket", this.basket, this.cardList);
  }

  get listInBasketWithLoading(): Array<CardType> {
    return this.checkPorp("isLoading", this.loadingList, this.listInBasket);
  }

  checkPorp(prop: "isLoading" | "isInBasket", checkIn: Array<number>, items: Array<CardType>) {
    const toSet = new Set(checkIn);
    return items.map((item) => {
      const copy = { ...item };
      copy[prop] = toSet.has(item.id);
      return copy;
    });
  }

  loading(id: number, status: "start" | "end" = "end") {
    if (status === "start") this.loadingList.push(id);
    else this.loadingList = this.loadingList.filter((loadingId: number) => id !== loadingId);
  }

  addToBasket(item: CardType) {
    this.loading(item.id, "start");
    this.$store
      .dispatch("addToBasket", {
        clear: false,
        items: [item.id],
      })
      .then(() => {
        // delay to see loader
        setTimeout(() => {
          this.loading(item.id);
        }, 500);
      })
      .catch((e) => {
        this.loading(item.id);
        console.error(e);
      });
  }

  created() {
    const basket = LS.get();
    if (!basket) LS.save(this.$store.state.basket);
    else {
      this.$store.commit("setBasketItems", {
        clear: false,
        items: basket,
      });
    }
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
