<script lang="ts">
/* eslint-disable */
import { VNode, CreateElement } from "vue";
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({})
export default class BaseLink extends Vue {
  @Prop({
    type: String,
    default: "router-link",
    validator(val) {
      return val === "router-link" || val === "a";
    }
  })
  type?: string;

  @Prop({
    default: "/"
  })
  link!: Object | string;

  @Prop({
    type: Boolean,
    default: false
  })
  flex?: boolean;

  @Prop({
    type: Boolean,
    default: false
  })
  justifyCenter?: boolean;

  @Prop({
    type: Boolean,
    default: false
  })
  alignCenter?: boolean;

  @Prop({
    type: String,
    default: "#343030"
  })
  color?: string;

  public render(h: CreateElement): VNode {
    return h(
      this.type,
      {
        class: {
          "base-link": true,
          "base-link--flex": this.flex,
          "base-link--justify-center": this.justifyCenter,
          "base-link--align-center": this.alignCenter
        },
        props: {
          to: this.link
        },
        style: {
          color: this.color
        },
        attrs: {
          href: this.link,
        }
      },
      [this.$slots.default]
    );
  }
}
</script>
<style lang="scss">
.base-link {
  &--flex {
    display: flex;
  }
  &--justify-center {
    justify-content: center;
  }
  &--align-center {
    align-items: center;
  }

  font-size: 14px;
  line-height: 150%;
  text-decoration: none;

  @include transition();

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: 2px dashed;
  }
}
</style>
