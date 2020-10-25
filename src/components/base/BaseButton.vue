<template>
  <button :class="setClass">
    <span v-if="icon" class="base-button__icon"> <slot name="icon" /> </span>
    <span class="base-button__text"> <slot /> </span>
  </button>
</template>
<script lang="ts">
import { VNode, CreateElement } from "vue";
import { Vue, Prop, Component } from "vue-property-decorator";

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

  get setClass() {
    return {
      "base-button": true,
      "base-button--icon": this.icon,
      "base-button--in-basket": this.inBasket,
    };
  }
}
</script>
<style lang="scss">
.base-button {
  padding: 14px 28px;
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

  &[disabled="disabled"] {
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
}
</style>
