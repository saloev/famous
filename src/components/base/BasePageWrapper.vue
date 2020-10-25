<template>
  <article class="base-page-wrapper">
    <BaseContainer>
      <h1 class="base-page-wrapper__title" :class="{ 'visually-hidden': visuallyHidden }">
        {{ title }}
      </h1>
      <section class="base-page-wrapper__content">
        <slot />
      </section>
    </BaseContainer>
  </article>
</template>
<script lang="ts">
import { VNode, CreateElement } from "vue";
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({})
export default class BasePageWrapper extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  title?: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  visuallyHidden?: boolean;
}
</script>
