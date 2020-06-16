import Vue from "vue";
import Demo from "./mvvm/index.vue";
import {store} from "./mvvm/view-model";

new Vue({
  store,
  render(h) {
    return h(Demo);
  }
}).$mount("#app");