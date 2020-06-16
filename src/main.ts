import Vue from "vue";
import Demo from "./mvc/index.vue";
new Vue({
    render(h){
        return h(Demo);
    }
}).$mount("#app");