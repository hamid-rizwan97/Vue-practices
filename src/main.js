import Vue from "vue"
import App from "./App.vue"
import ninjas from "./ninjas.vue"

Vue.component('ninjas',ninjas)
Vue.config.productionTip = false;

new Vue({
  el:'#app',
  render: (h) => h(App),
}).$mount("#app");
