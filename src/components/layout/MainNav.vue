<template>
  <div class="main-nav-wrapper">
    <nav class="main-nav">
      <ul class="main-nav__list reset--list-style">
        <li class="main-nav__item" v-if="withLogo">
          <BaseLink class="main-nav__link main-nav__link-logo" flex justify-center alingn-center>
            <img :src="logoSrc" alt="Famous logo" />
          </BaseLink>
        </li>
        <li class="main-nav__item" v-for="({ link, text }, index) in menuList" :key="index">
          <BaseLink :link="link" class="main-nav__link" flex justify-center alingn-center>
            {{ text }}
          </BaseLink>
        </li>
      </ul>
    </nav>
    <div class="main-nav-others">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

// images
import LogoSrc from "@/assets/icons/logo.svg";
import LogoSrcDark from "@/assets/icons/logo--dark.svg";

// types
interface MenuType {
  text: string;
  link: string;
}

@Component({
  components: {},
})
export default class MainNav extends Vue {
  @Prop({
    type: Array,
    default() {
      return [
        {
          link: "/",
          text: "Каталог",
        },
        {
          link: "/",
          text: "Доставка",
        },
        {
          link: "/",
          text: "Оплата",
        },
        {
          link: "/",
          text: "Контакты",
        },
        {
          link: "/",
          text: "О галерее",
        },
      ];
    },
  })
  menuList?: Array<MenuType>;

  @Prop({
    type: Boolean,
    default: true,
  })
  withLogo?: boolean;

  @Prop({
    type: String,
    default: "light",
    validator(val) {
      return val === "light" || val === "dark";
    },
  })
  logoType?: string;

  get logoSrc() {
    return this.logoType === "light" ? LogoSrc : LogoSrcDark;
  }
}
</script>

<style lang="scss">
.main-nav {
  width: 50%;

  &-wrapper {
    @include flex--alignment();
    width: 100%;
    padding: $default-block-space 0;
  }

  &-others {
    width: 50%;
    @include flex--alignment(flex-end);
  }

  &__list {
     @include flex--alignment(space-between);
  }
}

</style>
