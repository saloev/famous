import Vue from "vue";
import GlobalComponents from "./global-components";
import VueFilters from "./filters";

const allPlugins = [GlobalComponents, VueFilters];
export default () => {
  allPlugins.forEach((plugin) => plugin(Vue));
};
