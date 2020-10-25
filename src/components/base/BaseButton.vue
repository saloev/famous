<template>
  <button :class="setClass">
      <template v-if="!isLoading" >
        <span v-if="icon" class="base-button__icon"> <slot name="icon" /> </span>
        <span class="base-button__text"> <slot /> </span>
      </template>
      <template v-else>
        <span class="base-button__loading">
          <span class="visually-hidden">Loading</span>
          <img :src="imgByName('loader')" alt="Loading" class="base-button__loading-icon" />
        </span>
      </template>
  </button>
</template>
<script lang="ts">
import { VNode, CreateElement } from "vue";
import { Vue, Prop, Component } from "vue-property-decorator";

import LoaderImg from "@/assets/icons/two-thin-arrows-forming-a-circle.svg";

@Component({})
export default class BaseButton extends Vue {
  @Prop({
    type: Boolean,
    default: false,
  })
  icon?: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  inBasket?: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  isLoading?: boolean;

  get setClass() {
    return {
      "base-button": true,
      "base-button--icon": this.icon,
      "base-button--in-basket": this.inBasket,
      "base-button--loading": this.isLoading,
    };
  }
  // eslint-disable-next-line
  imgByName(name: string): string | undefined {
    const dispathImg: {
      [key: string]: string;
    } = {
      loader: LoaderImg,
    };
    return dispathImg[name];
  }
}
</script>
<style lang="scss">
.base-button {
  padding: 14px 8px;
  min-width: 112px;
  @include flex--alignment();
  border: none;

  @include font(14px, 150%);
  color: $white;
  font-weight: bold;

  background: $primary;

  transition: background-color 0.2s linear;

  &:hover,
  &:focus {
    background: $btn--hover;
  }

  &[disabled="disabled"],
  &--loading {
    background-color: $btn--disable;
    pointer-events: none;
  }

  &--in-basket {
    background-color: $secondary;
  }

  &:focus {
    outline: 2px dashed $secondary;
  }

  &__icon {
    margin-right: 4px;
  }

  &__loading-icon {
    width: 15px;
    height: 15px;

    animation: rotate 2.1s linear infinite;

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
