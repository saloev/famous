import { VueConstructor } from "vue";
import nf from "@/utils/string";

const filters: {
  [key: string]: Function;
} = {
  price(value: string) {
    return nf(value);
  },
};

export default (vue: VueConstructor) => {
  Object.keys(filters).forEach((key: string) => {
    vue.filter(key, filters[key]);
  });
};
