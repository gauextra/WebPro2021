import Vue from "vue";
import App from "./App.vue";
import "@/assets/style.css";
// import "@/assets/normalize.css";
Vue.config.productionTip = false;

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
