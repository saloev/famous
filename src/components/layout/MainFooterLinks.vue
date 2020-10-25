<template>
  <ul class="main-footer__link-list reset--list-style">
    <li class="main-footer__link-item" v-for="({ link, text, icon }, index) in list" :key="index">
      <BaseLink type="a" :link="link" flex justify-center align-center class="main-footer__link">
        <img :src="icon" class="main-footer__link-icon" />
        <span>{{ text }}</span>
      </BaseLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// icons
import Phone from "@/assets/icons/phone.svg";
import Address from "@/assets/icons/address.svg";

@Component({})
export default class MainFooterLinks extends Vue {
  list = [
    {
      link: "tel:+74755555555",
      text: "+7 (495) 555-55-55",
      icon: Phone,
    },
    {
      link: "http://tiny.cc/uat0tz",
      text: "г. Москва, ул. Расплетина, 24",
      icon: Address,
    },
  ];
}
</script>

<style lang="scss">
.main-footer__link {
  &-list {
    @include flex--alignment();
    .main-footer__link-item:first-child {
      margin-right: 48px;
    }
  }

  &-icon {
    margin-right: 8px;
  }
}
</style>
