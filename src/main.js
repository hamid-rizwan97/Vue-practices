import Vue from "vue"
import App from "./App.vue"
import ninjas from "./ninjas.vue"
import VueResource from "vue-resource"
Vue.use(VueResource);
Vue.http.options.root='https://practice-http-b61ab-default-rtdb.firebaseio.com/data.json'
Vue.component('ninjas',ninjas)
Vue.config.productionTip = false;

new Vue({
  el:'#app',
  render: (h) => h(App),
}).$mount("#app");
