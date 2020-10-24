import Vue from "vue";

// styles
import "./scss/main.scss";

// plugins
import plugins from "@/plugins";

import App from "./App.vue";
import store from "./store";
import router from "./router";

plugins();

Vue.config.productionTip = false;
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
