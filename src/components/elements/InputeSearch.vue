<template>
  <div class="input-search">
    <input
      type="search"
      class="input-search__input"
      placeholder="Поиск по названию картины"
      v-model="input"
    />
    <BaseButton class="input-search__btn">Найти </BaseButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class InputeSearch extends Vue {
  input: string | null = null;
}
</script>

<style lang="scss">
.input-search {
  width: 100%;
  max-width: 416px;
  height: 48px;
  @include flex--alignment();

  &__input {
    width: 70%;
    height: 100%;
    padding: 14px 16px;
    border: 1px solid $info;
    border-right: none;
    border-radius: 0;

    @include font(14px, 150%);
    color: $black;

    transition: 0.3s linear border-color;

    &:focus,
    &:hover {
      outline: none;
      border-color: $grey;
    }

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: $grey--dakr;
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: $grey--dakr;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: $grey--dakr;
    }
  }

  &__btn {
    width: 30%;
  }
}
</style>
