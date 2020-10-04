import Vue from "vue";
import App from "./App.vue";
import VuePageTransition from "vue-page-transition";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/scss/bootstrap.scss";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VuePageTransition);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
