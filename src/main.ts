import Vue from "vue";
import Demo from "./mvp/index.vue";
new Vue({
    render(h){
        return h(Demo);
    }
}).$mount("#app");