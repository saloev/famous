import { VueConstructor, Component } from "vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseContainer from "@/components/base/BaseContainer.vue";
import BaseLink from "@/components/base/BaseLink.vue";
import BasePageWrapper from "@/components/base/BasePageWrapper.vue";

const components: any = [
  ["BaseButton", BaseButton],
  ["BasePageWrapper", BasePageWrapper],
  ["BaseContainer", BaseContainer],
  ["BaseLink", BaseLink],
];

export default (vue: VueConstructor) => {
  components.forEach(([name, component]: any) => {
    vue.component(name, component);
  });
};
