<template>
  <div :class="classes">
    <img :src="require(`@/assets/images/${item.image}`)" :alt="item.title" class="card__img" />
    <h2 class="card__title" v-html="item.title"></h2>
    <div class="card__actions" v-if="!isSold">
      <div class="card__prices">
        <p class="card__price-old" v-if="item.priceOld">{{ item.priceOld | price }} &#36;</p>
        <p class="card__price">{{ item.price | price }} &#36;</p>
      </div>
      <BaseButton
        class="card__btn"
        @click.native="onBtnClick"
        :icon="item.isInBasket"
        :inBasket="item.isInBasket"
        :isLoading="item.isLoading"
      >
        <template #icon v-if="item.isInBasket">
          <img :src="imagCheck" alt="Product in basket" class="card__btn-icon" />
        </template>
        <template #default>
          <span v-if="!item.isInBasket">{{ btnText }}</span>
          <span v-else>{{ btnInBasketText }} </span>
        </template>
      </BaseButton>
    </div>
    <h3 v-else class="card__sold">
      <slot name="sold">
        Продана на аукционе
      </slot>
    </h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

// images
import Check from "@/assets/icons/check.svg";

import { CardType } from "@/types";

@Component({})
export default class Card extends Vue {
  @Prop({
    type: Object,
    required: true,
    validator(val) {
      const requiredProps = ["image", "title", "isSold"];
      return requiredProps.every((key: string) => Object.keys(val).includes(key));
    },
  })
  item!: CardType;

  @Prop({
    type: String,
    default: "Купить",
    required: false,
  })
  btnText?: string;

  @Prop({
    type: String,
    default: "В корзине",
    required: false,
  })
  btnInBasketText?: string;

  get isSold() {
    return this.item.isSold || this.item.price === undefined || this.item.price === 0;
  }

  get classes() {
    return {
      card: true,
      "card--sold": this.isSold,
    };
  }

  // eslint-disable-next-line
  get imagCheck() {
    return Check;
  }

  onBtnClick() {
    if (this.isSold || this.item.isInBasket) return;
    this.$emit("addToBasket", this.item);
  }
}
</script>

<style lang="scss">
.card {
  max-width: 280px;
  padding: $default-block-space;
  height: 100%;
  // max-height: 328px;
  overflow: hidden;
  border: 1px solid $info--lighter;

  &--sold {
    opacity: 0.5;
    pointer-events: none;
  }

  &__img {
    display: block;
    margin: (-$default-block-space) (-$default-block-space) 0;
    width: calc(100% + 2 * $default-block-space);
  }

  &__title {
    margin: $default-block-space 0;
  }

  &__price {
    font-size: 16px;
    line-height: 150%;
    font-weight: bold;
  }

  &__price-old {
    font-size: 14px;
    line-height: 150%;
    font-weight: 300;
    text-decoration-line: line-through;
    color: $grey--darker;
  }

  &__price,
  &__price-old {
    margin: 0;
  }

  &__actions {
    margin-top: auto;
    @include flex--alignment(space-between);
  }

  &__sold {
    margin: 0;
  }

  &__btn-icon {
    display: block;

    animation: none; //for IE
  }
}
</style>
