<template>
  <div class="card">
    <img :src="item.img" :alt="item.title" class="card__img" />
    <h2 class="card__title">{{ item.title }}</h2>
    <div class="card__actions" v-if="isSold">
      <div class="card__prices">
        <p class="card__price-old" v-if="item.priceOld"> {{ item.priceOld }}</p>
        <p class="card__price">{{ item.price }}</p>
      </div>
      <BaseButton class="card__btn">
        <slot name="btn">
          Купить
        </slot>
      </BaseButton>
    </div>
    <h3 v-else>
      <slot name="sold">
        Продана на аукционе
      </slot>
    </h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

interface CardType {
  img: string;
  title: string;
  price?: number;
  priceOld?: number;
}

@Component({})
export default class Card extends Vue {
  @Prop({
    type: Object,
    required: true,
    validator(val) {
      const requiredProps = ['img', 'title'];
      return Object.keys(val).every((key: string) => requiredProps.includes(key));
    }
  }) item?: CardType;

  get isSold() {
    return this.item && (this.item.price === undefined || this.item.price === 0);
  }
}
</script>
